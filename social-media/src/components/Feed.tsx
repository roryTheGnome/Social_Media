import { PostCard } from './PostCard'
import type { Post } from '../types/post.ts'

type Props = {
  posts: Post[]
}

export function Feed({ posts }: Props) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
