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
    <nav className="w-full border-b border-blue-950 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
        <Link to="/">
          <h1 className=" text-xl font-bold">Social Media</h1>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link to="/feed" className="text-blue-500 hover:underline">
            Feed
          </Link>
          <Link to="/chat" className="text-blue-500 hover:underline">
            Chat
          </Link>
          {user ? (
            <>
              <button
                className="text-red-500 hover:underline"
                onClick={handleLogut}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3 border-blue-950 border-t md:hidden">
          <Link to="/feed" className="text-blue-500 ">
            Feed
          </Link>
          <Link to="/chat" className="text-blue-500 ">
            Chat
          </Link>
          {user ? (
            <button className="text-red-500" onClick={handleLogut}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-blue-500 ">
                Login
              </Link>
              <Link to="/register" className="text-blue-500 ">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
