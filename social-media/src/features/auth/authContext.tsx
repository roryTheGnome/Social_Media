import { createContext } from 'react'
import type { AuthContextType } from '../../types/authTypes.ts'

export const AuthContext = createContext<AuthContextType | null>(null)
