import { createContext} from 'react'
import type {AuthContextType} from "../../types/authTypes.tsx";

export const AuthContext = createContext<AuthContextType | null>(null)
