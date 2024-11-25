/* eslint-disable react/prop-types */
import { useState } from 'react'
import deleteIcon from '../assets/images/icon-delete.svg'
import editIcon from '../assets/images/icon-edit.svg'
import replyIcon from '../assets/images/icon-reply.svg'

import CommentForm from './CommentForm'
import { formatDistanceToNow } from 'date-fns'


function Comment({ comment, currentUser, parentId = null, onDelete }) {
    const [score, setScore] = useState(comment.score)
    const [isReplying, setIsReplying] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [content, setContent] = useState(comment.content)
    const [replies, setReplies] = useState(comment.replies || [])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const isCurrentUser = comment.user.username === currentUser.username



    const handleReply = (content) => {
        const newReply = {
            id: Date.now(),
            content,
            createdAt:  new Date().toISOString(),
            score: 0,
            replyingTo: comment.user.username,
            user: currentUser
        }
        setReplies([...replies, newReply])
        setIsReplying(false)
    }



    const handleDeleteReply = (replyId) => {
        setReplies(replies.filter(reply => reply.id !== replyId))
    }



    const handleEdit = (newContent) => {
        setContent(newContent)
        setIsEditing(false)
    }

    return (
        <>
            <div className={`bg-white relative sm:static p-4 rounded-lg shadow ${parentId ? 'ml-3 sm:ml-8' : ''}`}>
                <div className="flex flex-col-reverse sm:flex-row gap-4">
                    <div className="max-h-28 max-w-20 sm:w-10 flex sm:flex-col items-center gap-4 bg-veryLightGray rounded-lg p-2">
                        <button
                            onClick={() => setScore(s => s + 1)}
                            className=" text-lightGrayishBlue hover:text-moderateBlue"
                        >
                            +
                        </button>
                        <span className="text-moderateBlue font-medium">{score}</span>
                        <button
                            onClick={() => setScore(s => s - 1)}
                            className="text-lightGrayishBlue hover:text-moderateBlue"
                        >
                            -
                        </button>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                            <img
                                src={comment.user.image.png}
                                alt={comment.user.username}
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="font-bold">{comment.user.username}
                                {comment.user.username === currentUser.username && (
                                    <span className="text-white py-1 px-2 text-sm bg-moderateBlue ml-2 rounded-sm">you</span>
                                )}
                            </span>
                            <span className="text-grayishBlue">
                                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                            </span>

                            <div className={` absolute ${isReplying ? "bottom-1/2" : "bottom-6"} right-4 sm:static ml-auto flex items-center gap-2 font-bold`}>
                                {!isCurrentUser
                                    &&
                                    <button
                                        onClick={() => setIsReplying(!isReplying)} className='flex items-center gap-2  hover:opacity-55 text-moderateBlue '>
                                        <img src={replyIcon} alt="reply icon" />
                                        Reply
                                    </button>

                                }
                                {isCurrentUser && (
                                    <>
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="flex items-center font-bold gap-2 ml-auto text-moderateBlue hover:opacity-60 cursor-pointer"
                                        >
                                            <img src={editIcon}

                                                alt="edit Icon" />
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => setShowDeleteModal(true)}
                                            className="flex items-center font-bold gap-2  text-softRed hover:opacity-60 cursor-pointer">
                                            <img src={deleteIcon} alt="delete Icon" />
                                            Delete
                                        </button>

                                    </>
                                )}
                            </div>
                        </div>
                        {!isEditing ? (
                            <p className="text-grayishBlue">
                                {comment.replyingTo && (
                                    <span className="text-moderateBlue font-bold">@{comment.replyingTo} </span>
                                )}
                                {content}
                            </p>
                        ) : (
                            <CommentForm
                                currentUser={currentUser}
                                initialContent={content}
                                onSubmit={handleEdit}
                                submitLabel="UPDATE"
                            />
                        )}

                    </div>
                </div>

                {isReplying && (
                    <div className="mt-4">
                        <CommentForm
                            currentUser={currentUser}
                            onSubmit={handleReply}
                            replyingTo={comment.user.username}
                        />
                    </div>
                )}
            </div>

            <div className={!parentId ? "border-l-2 ml-3 sm:ml-8" : ""}>
                {replies.map(reply => (
                    <div key={reply.id} className='my-5 ' >
                        <Comment
                            comment={reply}
                            currentUser={currentUser}
                            parentId={comment.id}
                            onDelete={() => handleDeleteReply(reply.id)}
                        />
                    </div>

                ))}
            </div>

            {showDeleteModal && (
                <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg max-w-sm">
                        <h2 className="text-darkBlue font-bold text-xl mb-4">Delete comment</h2>
                        <p className="text-grayishBlue mb-4">
                            Are you sure you want to delete this comment? This will remove the comment and can&lsquo;t be undone.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 bg-grayishBlue text-white py-2 rounded-lg hover:opacity-70"
                            >
                                NO, CANCEL
                            </button>
                            <button
                                onClick={() => {
                                    onDelete()
                                    setShowDeleteModal(false)
                                }}
                                className="flex-1 bg-softRed text-white py-2 rounded-lg hover:opacity-70"
                            >
                                YES, DELETE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Comment
