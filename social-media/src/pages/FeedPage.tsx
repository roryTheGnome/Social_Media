import { useState } from 'react'
import { usePosts } from '../features/usePosts.ts'
import { CreatePost } from '../components/posts/CreatePost.tsx'
import { Feed } from '../components/posts/Feed.tsx'
import type { Post } from '../types/Post.ts'
import { ScrollTop } from '../components/ScrollTop.tsx'

export function FeedPage() {
  const { data: apiPosts, isLoading, error } = usePosts()

  const [localPosts, setLocalPosts] = useState<Post[]>([])
  const posts = [...localPosts, ...(apiPosts ?? [])]

  const addPosts = (post: Post) => {
    setLocalPosts((prev) => [post, ...prev])
  }

  if (isLoading) return <div>Loading posts...</div>
  if (error) return <div>!Failed to load posts!</div>

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <ScrollTop />
      <h1 className="mb-6 text-3xl font-bold">Feed</h1>

      <CreatePost onCreate={addPosts} />

      <div className="mt-6 space-y-6">
        <Feed posts={posts} />
      </div>
    </div>
  )
}
