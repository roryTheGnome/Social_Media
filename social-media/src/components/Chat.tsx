import { useAuth } from '../features/auth/useAuth.ts'
import { useChat } from '../features/useChat.ts'
import { useState } from 'react'
import { Link } from '@tanstack/react-router'

export function Chat() {
  const { user } = useAuth()
  const { messages, sendMessage } = useChat(user ? user.username : '')

  const [text, setText] = useState('')

  const handleSend = () => {
    if (!text.trim()) return
    sendMessage(text)
    setText('')
  }

  if (!user) {
    return (
      <div className="flex flex-col items-start">
        <h2>Login to use chat</h2>
        <>
          <Link
            to="/login"
            className="text-white bg-blue-500 rounded p-2 mt-5 "
          >
            Login
          </Link>
        </>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl my-auto max-h-5xl rounded-xl border bg-white p-4 shadow">
      <h4 className="mb-4  text-gray-600 font-semibold">
        ... where only your shadow replies
      </h4>

      <div className="mb-4 h-75 overflow-y-auto rounded border p-2">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <span className="font-semibold">{msg.from}:</span>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 rounded border p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here.."
        />

        <button
          className="rounded bg-blue-500 text-white p-2 hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  )
}
