import { useState } from 'react'
import { usePosts } from '../features/posts/usePosts'
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
    <div className="mx-auto max-w-2xl space-y-6">
      <ScrollTop />
      <h1 className="text-2xl font-bold">Feed</h1>

      <CreatePost onCreate={addPosts} />

      <Feed posts={posts} />
    </div>
  )
}
