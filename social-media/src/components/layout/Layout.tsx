import type {LayoutProps} from "../../types/LayoutProps.tsx";
import {Nav} from "./Nav.tsx";
import {Footer} from "./Footer.tsx";

export function Layout({children}: LayoutProps){
    return(
        <div className="flex min-h-screen flex-col ">

            <Nav/>

            <main className="mx-auto w-full max-w-6xl flex-grow p-6">
                {children}
            </main>

            <Footer/>

        </div>
    )
}