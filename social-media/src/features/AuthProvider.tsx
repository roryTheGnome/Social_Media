import {  useState} from 'react'
import type { User, AuthProviderProp} from "../types/authTypes.tsx";
import { AuthContext } from "./authContext.tsx";

export function AuthProvider({ children }: AuthProviderProp) {
    const [user, setUser]=useState<User|null>(null)

    const login = (username: string) => {
        setUser({ username })
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}