import { useState } from 'react'
import data from './data.json'
import Comment from './components/Comment'
import CommentForm from './components/CommentForm'

function App() {
  const [comments, setComments] = useState(data.comments)
  const { currentUser } = data

  const handleAddComment = (content) => {
    const newComment = {
      id: comments.length + 1,
      content,
      createdAt: 'Just now',
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
    <div className="font-Rubik min-h-screen bg-veryLightGray py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-4">
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
