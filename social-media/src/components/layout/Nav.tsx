import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../../features/auth/useAuth.ts'

export function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const { user, logout } = useAuth()

  const handleLogut = () => {
    navigate({ to: '/' })
    logout()
  }

  return (
    <nav className="w-full border-b border-grey-900 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
        <Link to="/">
          <h1 className="text-xl font-bold text-gray-800">Social Media</h1>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link
            to="/feed"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Feed
          </Link>
          <Link
            to="/chat"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Chat
          </Link>
          {user ? (
            <>
              <button
                className="rounded-lg bg-red-500 px-4 py-1 text-white transition hover:bg-red-600"
                onClick={handleLogut}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3 border-gray-900 border-t md:hidden">
          <Link to="/feed" className="text-gray-700 ">
            Feed
          </Link>
          <Link to="/chat" className="text-gray-700 ">
            Chat
          </Link>
          {user ? (
            <button className="text-left text-red-500" onClick={handleLogut}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-700">
                Login
              </Link>
              <Link to="/register" className="text-gray-700">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
