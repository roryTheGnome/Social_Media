import { Layout } from '../components/layout/Layout'
import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { WelcomePage } from '../pages/WelcomePage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { FeedPage } from '../pages/FeedPage.tsx'
import { ChatPage } from '../pages/ChatPage.tsx'

const rootRoute = createRootRoute({
  component: Layout,
})

const welcomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: WelcomePage,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterPage,
})

const feedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/feed',
  component: FeedPage,
})
const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chat',
  component: ChatPage,
})

const routeTree = rootRoute.addChildren([
  welcomeRoute,
  loginRoute,
  registerRoute,
  feedRoute,
  chatRoute,
])

export const router = createRouter({ routeTree })
