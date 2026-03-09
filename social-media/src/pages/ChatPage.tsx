import { Chat } from '../components/Chat'

export function ChatPage() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Chat</h1>

        <Chat />
      </div>
    </div>
  )
}
