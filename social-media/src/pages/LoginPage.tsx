import { useState } from 'react'
import { useAuth } from '../features/auth/useAuth.ts'
import { useNavigate } from '@tanstack/react-router'
import { useUsers } from '../features/auth/useUsers.ts'

export function LoginPage() {
  const { data: users, isLoading } = useUsers()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()

    if (!username || !password) {
      alert('Fill all the fields')
      return
    }

    const found = users?.find(
      (user) => user.username === username && user.password === password,
    )

    if (!found) {
      alert('Invalid credentials')
      return
    }

    login(found.username)
    navigate({ to: '/feed' })
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-md">
        <h1 className="mb-6 text-2xl font-bold">Login</h1>
        <h3 className="mb-6 text-2xl font-bold">Loading...</h3>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Login</h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-lg border p-3 bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-30"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full rounded-lg border p-3 bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-30"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button
          type="submit"
          className="mt-2 rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}
