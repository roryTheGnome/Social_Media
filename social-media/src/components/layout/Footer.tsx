export function Footer(){
    return(
        <footer className="mt-auto border-t border-b-blue-950">

            <div className="mx-auto max-w-6xl p-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Social Media   ●    Made by <a href="https://github.com/roryTheGnome">Gnome</a>
            </div>

        </footer>
    )
}