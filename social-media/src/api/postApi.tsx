import axios from 'axios'
import type { Post } from '../types/Post.ts'

const APILink = 'https://dummyjson.com/posts'
//change the link HERE

export async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get(APILink)

  return response.data.posts
}
