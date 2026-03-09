import { useEffect, useState } from 'react'

export function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 250)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 rounded-2xl bg-blue-500 px-4 py-2 text-white text-4xl shadow-lg"
    >
      ↑
    </button>
  )
}
