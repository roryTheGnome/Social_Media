import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../../utils/api/userApi.tsx'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
