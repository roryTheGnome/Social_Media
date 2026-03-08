import {useState} from "react";
import {useAuth} from "../features/auth/useAuth.ts";
import {useNavigate} from "@tanstack/react-router";


export function LoginPage(){

    const [username, setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {login}=useAuth();

    const navigate=useNavigate();

    const handleSubmit=(e:React.SubmitEvent)=>{
        e.preventDefault();

        if(!username||!password){
            alert('Fill all the fields');
            return;
        }

        login(username);
        navigate({to:'/feed'});
    }

    return(
        <div className="mx-auto max-w-md">
            <h1 className="mb-6 text-2xl font-bold">Login</h1>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                <input className="rounded border p-2 shadow-sm"
                       placeholder="Username"
                       value={username}
                       onChange={(e)=>setUsername(e.target.value)}
                />

                <input className="rounded border p-2 shadow-sm"
                       placeholder="Password"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       type="password"
                />

                <button type="submit" className="rounded border p-2 shadow-sm bg-blue-500 text-white hover:bg-blue-600">Login</button>

            </form>
        </div>
    )
}