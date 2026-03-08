export type Post = {
  id: number
  title: string
  body: string
  reactions: { likes: number; dislikes: number }
}
