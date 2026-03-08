import { usePosts } from '../features/posts/usePosts.ts'

export function FeedPage() {
  const { data: posts, isLoading, error } = usePosts()

  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold">Feed</h1>
        <h3 className="text-2xl font-bold">Loading..</h3>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold">Feed</h1>
        <h3 className="text-2xl font-bold">Fetching error</h3>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold">Feed</h1>

      {posts?.map((post) => (
        <div key={post.id} className="rounded-lg border p-4 shadow-sm">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="rounded-lg mt-2 text-gray-900 bg-amber-100">
            {post.body}
          </p>

          <div className="mt-3 flex flex-row p-2 align-middle">
            <div className="mx-3 text-sm text-gray-800">
              ❤️{post.reactions.likes}
            </div>
            <div className="mx-3 text-sm text-gray-800">
              💔 {post.reactions.dislikes}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
