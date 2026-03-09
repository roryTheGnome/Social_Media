import type { Post } from '../../types/Post.ts'
import { useAuth } from '../../features/auth/useAuth.ts'
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
    <div className="rounded-xl border border-gray-900 bg-white p-4 shadow-sm">
      <textarea
        className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={1}
        placeholder="Add Title.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={3}
        placeholder="Share what's on your mind..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-3 flex justify-end">
        <button
          className="rounded-lg bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  )
}
