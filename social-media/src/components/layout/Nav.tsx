import {useState} from "react";


export function Nav(){

    const [open,setOpen]=useState(false);

    return(
        <nav className="w-full border-b border-blue-950 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between p-3">

                <h1 className=" text-xl font-bold">Social Media</h1>

                <div className="hidden md:flex gap-6">
                    <a href="/login" className="text-blue-500 hover:underline">Login</a>
                    <a href="/register" className="text-blue-500 hover:underline">Register</a>
                    <a href="/feed" className="text-blue-500 hover:underline">Feed</a>
                </div>

                <button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button>

            </div>

            {open &&(
                <div className="flex flex-col gap-3 border-blue-950 border-t md:hidden">
                    <a href="/login" className="text-blue-500 ">Login</a>
                    <a href="/register" className="text-blue-500 ">Register</a>
                    <a href="/feed" className="text-blue-500 ">Feed</a>
                </div>
            )}

        </nav>
    )
}