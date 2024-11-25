import { useState } from 'react'

function CommentForm({ currentUser, onSubmit, replyingTo, initialContent = '', submitLabel = 'SEND'  }) {
  const [content, setContent] = useState(initialContent)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return
    onSubmit(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-start gap-4">
        <img 
          src={currentUser.image.png} 
          alt={currentUser.username}
          className="w-8 h-8 rounded-full"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={replyingTo ? `Reply to @${replyingTo}` : "Add a comment..."}
          className="flex-1 border rounded-lg p-2 resize-none h-24"
        />
        <button 
          type="submit"
          className="bg-moderateBlue text-white px-4 py-2 rounded-lg hover:opacity-70"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  )
}

export default CommentForm
