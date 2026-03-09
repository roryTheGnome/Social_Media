import type { Post } from '../../types/Post.ts'
import { useAuth } from '../../features/auth/useAuth.ts'
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
    <div className="rounded-xl border border-gray-900 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
          {post.title[0].toUpperCase()}
        </div>

        <div>
          <h2 className="font-semibold">{post.title}</h2>
        </div>
      </div>

      <p className="mt-4 text-gray-600">{post.body}</p>

      {user ? (
        <div className="mt-3 flex flex-row p-2 align-middle">
          <button
            className="mt-4 flex gap-6 text-sm text-gray-500"
            onClick={handleLike}
          >
            ❤️{like}
          </button>
          <button
            className="mt-4 flex gap-6 text-sm text-gray-500"
            onClick={handleDislike}
          >
            💔{dislike}
          </button>
        </div>
      ) : (
        <div className="mt-3 flex flex-row p-2 align-middle">
          <div className="mt-4 flex gap-6 text-sm text-gray-500">❤️{like}</div>
          <div className="mt-4 flex gap-6 text-sm text-gray-500">
            💔 {dislike}
          </div>
        </div>
      )}
    </div>
  )
}
