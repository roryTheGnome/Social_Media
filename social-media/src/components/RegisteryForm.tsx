import { useState } from 'react'

export function RegisteryForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    birthday: false,
  })

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()

    const newErrors = {
      username: !username,
      email: !email,
      password: password.length < 4 || password.length > 16,
      birthday: false,
    }

    if (birthday) {
      const birthdate = new Date(birthday)

      const today = new Date()
      const minAge = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate(),
      )

      newErrors.birthday = birthdate > minAge
      if (birthdate > minAge) {
        alert('Must be 18+ to enter')
        return
      }
    } else {
      newErrors.birthday = true
    }

    setErrors(newErrors)

    if (!username || !password || !email || !birthday) {
      alert('Fill all the fields')
      return
    }

    if (password.length < 4 || password.length > 16) {
      alert('Password must be between 4-16 char')
      return
    }

    alert('Please check your mailbox for confirmation link')
    console.log(birthday)
    setUsername('')
    setPassword('')
    setEmail('')
    setBirthday('')
  }

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Create Account</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className={`w-full rounded-lg border p-3 bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 
          ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={`w-full rounded-lg border p-3 bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 
          ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`w-full rounded-lg border p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 
          ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className={`w-full rounded-lg border p-3 bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 
          ${errors.birthday ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Date of Birth"
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <button
          type="submit"
          className="mt-2 rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
        >
          Join
        </button>
      </form>
    </>
  )
}
