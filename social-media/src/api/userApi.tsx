import axios from 'axios'
import type { User } from '../types/user.ts'

const APILink = 'https://dummyjson.com/users'
//change the link HERE

export async function fetchUsers(): Promise<User[]> {
  const response = await axios.get(APILink)

  return response.data.users
}
