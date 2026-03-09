import { RegisteryForm } from '../components/RegisteryForm.tsx'

export function WelcomePage() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-6">
      <div className="grid max-w-5xl gap-10 md:grid-cols-2">
        <main>
          <h1 className="mb-6 text-5xl font-extrabold text-gray-800">
            Join Social Media Today
          </h1>

          <p className="text-lg text-gray-600">
            Scroll endlessly, share your hottest takes, and discover posts from
            strangers you’ll never meet, all while pretending you’re just
            checking one thing.
          </p>
        </main>

        <aside className="rounded-2xl bg-white p-8 border border-gray-900 shadow-lg">
          <RegisteryForm />
        </aside>
      </div>
    </div>
  )
}
