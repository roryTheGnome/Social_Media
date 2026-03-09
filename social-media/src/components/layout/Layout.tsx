import { Outlet } from '@tanstack/react-router'
import { Nav } from './Nav.tsx'
import { Footer } from './Footer.tsx'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Nav />

      <main className="mx-auto w-full max-w-6xl flex-grow p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
