import {useContext} from "react";
import {AuthContext} from "./authContext.tsx";


export function useAuth(){
    const context=useContext(AuthContext);

    if(!context) throw new Error('error! check useAuth-AuthProvider');

    return context;
}