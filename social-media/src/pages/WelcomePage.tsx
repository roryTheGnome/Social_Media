import {RegisteryForm} from "../components/RegisteryForm.tsx";

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
                <RegisteryForm/>
            </aside>

        </div>
    )
}