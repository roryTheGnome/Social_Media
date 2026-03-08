import type { Post } from '../types/post.ts'
import { useAuth } from '../features/auth/useAuth.ts'
import { useState } from 'react'

type Props = {
  post: Post
}

export function PostCard({ post }: Props) {
  const { user } = useAuth()

  const [like, setLike] = useState(post.reactions.likes)
  const [dislike, setDislike] = useState(post.reactions.dislikes)
  const [reaction, setReaction] = useState(0)

  const handleLike = () => {
    if (reaction == 0) {
      setLike(like + 1)
      setReaction(1)
    }
    if (reaction == -1) {
      setDislike(dislike - 1)
      setLike(like + 1)
      setReaction(1)
    }
  }
  const handleDislike = () => {
    if (reaction == 0) {
      setDislike(dislike + 1)
      setReaction(-1)
    }
    if (reaction == 1) {
      setDislike(dislike + 1)
      setLike(like - 1)
      setReaction(-1)
    }
  }

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p className="mt-2 text-gray-900 bg-amber-100 rounded-xl p-2">
        {post.body}
      </p>
      {user ? (
        <div className="mt-3 flex flex-row p-2 align-middle">
          <button
            className="mt-3 flex flex-row p-2 align-middle"
            onClick={handleLike}
          >
            ❤️{like}
          </button>
          <button
            className="mt-3 flex flex-row p-2 align-middle"
            onClick={handleDislike}
          >
            💔{dislike}
          </button>
        </div>
      ) : (
        <div className="mt-3 flex flex-row p-2 align-middle">
          <div className="mx-3 text-sm text-gray-800">❤️{like}</div>
          <div className="mx-3 text-sm text-gray-800">💔 {dislike}</div>
        </div>
      )}
    </div>
  )
}
