export function WelcomePage(){
    return(
        <div className="grid gap-7 md:grid-cols-2">

            <main>
                <h1 className="mt-5 mb-4 text-4xl font-bold">
                    Join Social Media Today
                </h1>

                <p className="text-gray-600">
                    Scroll endlessly, share your hottest takes, and discover posts from strangers you’ll never
                    meet, all while pretending you’re just checking one thing.
                </p>
            </main>

            <aside className="rounded-lg border-blue-950 p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold">Register</h2>

                <form className="flex flex-col gap-3">
                    <input className="rounded border-blue-950 p-2" placeholder="Username"/>
                    <input className="rounded border-blue-950 p-2" placeholder="Email" type="email"/>
                    <input className="rounded border-blue-950 p-2" placeholder="Password" type="password"/>
                    <input className="rounded border-blue-950 p-2" placeholder="Date of Birth" type="date"/>

                    <button type="submit" className="rounded bg-blue-500 p-2 text-white font-bold hover:bg-blue-600">
                        Join
                    </button>
                </form>
            </aside>

        </div>
    )
}