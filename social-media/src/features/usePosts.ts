import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../utils/api/postApi.tsx'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
}
