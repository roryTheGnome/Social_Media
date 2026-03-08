import axios from 'axios'
import type { Post } from '../types/post.ts'

const APILink = 'https://dummyjson.com/posts'
//change the link HERE

export async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get(APILink)

  return response.data.posts
}
