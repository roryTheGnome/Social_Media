import type { Post } from '../types/post.ts'
import { useAuth } from '../features/auth/useAuth.ts'
import { useState } from 'react'

type Props = {
  onCreate: (post: Post) => void
}

export function CreatePost({ onCreate }: Props) {
  const { user } = useAuth()
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

  if (!user) return null

  const handleSubmit = () => {
    if (!text || !title) {
      return
    }

    const newPost: Post = {
      id: Date.now(),
      title: title,
      body: text,
      reactions: { likes: 0, dislikes: 0 },
    }

    onCreate(newPost)
    setText('')
    setTitle('')
  }

  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <textarea
        className="w-full resize-none rounded border p-2"
        rows={1}
        placeholder="Add Title.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full resize-none rounded border p-2"
        rows={3}
        placeholder="Share what's on your mind..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="mt-3 rounded p-2 bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  )
}
