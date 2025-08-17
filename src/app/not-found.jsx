import Link from "next/link"

export default function NotFound () {
    return (
        <div className="flex flex-col justify-center items-center gap-7 sm:gap-10 lg:my-30 sm:my-15 my-5">
            <div className="lg:text-7xl md:text-5xl text-4xl">404 Not Found</div>
            <p className="text-base w-4/5 text-center">Your visited page not found. You may go home page.</p>
            <Link href="/home" className="text-white text-base px-10 py-3" style={{backgroundColor: "#DB4444"}}>Back to home page</Link>
        </div>
    )
}