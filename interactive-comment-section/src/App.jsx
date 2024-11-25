import { useState } from 'react'
import data from './data.json'
import Comment from './components/Comment'
import CommentForm from './components/CommentForm'
import UserSwitcher from './components/UserSwitcher'


function App() {
  const [comments, setComments] = useState(data.comments)
  const [currentUser, setCurrentUser] = useState(data.currentUser)
  const [users, setUsers] = useState([
    data.currentUser,
    ...comments.map(c => c.user),
    ...comments.flatMap(c => c.replies?.map(r => r.user) || [])
  ].filter((user, index, self) => 
    index === self.findIndex(u => u.username === user.username)
  ))
  
  // const { currentUser } = data


  const handleUserChange = (user) => {
    setCurrentUser(user)
  }
  const handleUserEdit = (oldUsername, newUsername, newImage = null) => {
    // Update users list
    setUsers(users.map(user => 
      user.username === oldUsername 
        ? {
            ...user,
            username: newUsername,
            image: newImage ? { png: newImage, webp: newImage } : user.image
          }
        : user
    ))
    
    // Update comments and their replies
    const updatedComments = comments.map(comment => {
      // Update main comment user if needed
      const updatedComment = {
        ...comment,
        user: comment.user.username === oldUsername 
          ? {
              ...comment.user,
              username: newUsername,
              image: newImage ? { png: newImage, webp: newImage } : comment.user.image
            }
          : comment.user
      }
  
      // Update replies if they exist
      if (updatedComment.replies) {
        updatedComment.replies = updatedComment.replies.map(reply => ({
          ...reply,
          user: reply.user.username === oldUsername
            ? {
                ...reply.user,
                username: newUsername,
                image: newImage ? { png: newImage, webp: newImage } : reply.user.image
              }
            : reply.user,
          replyingTo: reply.replyingTo === oldUsername ? newUsername : reply.replyingTo
        }))
      }
  
      return updatedComment
    })
  
    setComments(updatedComments)
  
    // Update current user if needed
    if (currentUser.username === oldUsername) {
      setCurrentUser({
        ...currentUser,
        username: newUsername,
        image: newImage ? { png: newImage, webp: newImage } : currentUser.image
      })
    }
  }
  

  const handleAddComment = (content) => {
    const newComment = {
      id: comments.length + 1,
      content,
      createdAt:  new Date().toISOString(),
      score: 0,
      user: currentUser,
      replies: []
    }
    setComments([...comments, newComment])
  }

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter(comment => comment.id !== commentId))
}

  return (
    <div className="font-Rubik min-h-screen bg-veryLightGray ">
      <UserSwitcher 
          users={users}
          currentUser={currentUser}
          onUserChange={handleUserChange}
          onUserEdit={handleUserEdit}
        />
      <div className="max-w-2xl  mx-auto space-y-4">
    
        {comments.map(comment => (
          <Comment 
            key={comment.id} 
            comment={comment} 
            currentUser={currentUser}
            onDelete={() => handleDeleteComment(comment.id)}
          />
        ))}
        <CommentForm 
          currentUser={currentUser}
          onSubmit={handleAddComment}
        />
      </div>
    </div>
  )
}

export default App
