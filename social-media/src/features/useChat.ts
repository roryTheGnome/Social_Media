import { useEffect, useRef, useState } from 'react'
import type { Message } from '../types/Message.ts'

const webSocketUrl = 'wss://ws.ifelse.io'
//change it here

export function useChat(username: string) {
  const socketRef = useRef<WebSocket | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const socket = new WebSocket(webSocketUrl)
    socketRef.current = socket

    socket.onmessage = (e) => {
      const newMessage: Message = {
        id: Date.now(),
        text: e.data,
        from: 'Shadow',
      }

      setMessages((prev) => [...prev, newMessage])
    }
    return () => {
      socket.close()
    }
  }, [])

  const sendMessage = (text: string) => {
    if (!socketRef.current) return

    socketRef.current.send(text)

    const newMessage: Message = {
      id: Date.now(),
      text: text,
      from: username,
    }

    setMessages((prev) => [...prev, newMessage])
  }

  return { messages, sendMessage }
}
