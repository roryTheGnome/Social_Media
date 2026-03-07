import type {ReactNode} from "react";

export type User={
    username:string
    //to be continue later
}

export type AuthContextType={
    user:User|null
    login: (username:string)=>void
    logout:()=>void
}

export type AuthProviderProp={
    children:ReactNode
}