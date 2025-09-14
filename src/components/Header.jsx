"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ROUTES } from "@/constants/routes";
import { useUser } from "@/app/hooks/useUser";

export default function Header() {
    const langSelectorRef = useRef(undefined);
    const [showMenu, setShowMenu] = useState("hidden");
    const pathname = usePathname();
    const { user, setUser } = useUser();
    console.log("user:", user);
    useEffect(()=>{
        const handleClick = (e) => {
            if(!(e.target === langSelectorRef.current || e.target.parentElement === langSelectorRef.current) && showMenu === "flex")
                setShowMenu("hidden")
        }
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [showMenu])

    return (
        <div className="text-white">
            {/* ===== Top-Header ===== */}
            <div className="z-10 bg-black text-white p-6 relative lg:block flex flex-col justify-between items-center gap-4">
                <div className="text-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center sm:flex-row gap-4">
                    <p>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </p>
                    <Link href={ROUTES.PRODUCTS} className="text-white underline">
                        Shop Now
                    </Link>
                </div>
                <div className="lg:absolute right-20 lg:transform lg:-translate-y-1/2">
                    <div id="lang-selector" className="cursor-pointer flex items-center gap-2 hover:underline" ref={langSelectorRef} onClick={()=>{ showMenu === "flex" ? setShowMenu("hidden") : setShowMenu("flex") }}>
                        <span>English</span>
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="white"/>
                        </svg>

                    </div>
                    <div id="menu" className={`flex flex-col bg-gray-200 text-black absolute rounded z-10 ${showMenu}`}>
                        <span className="hover:bg-gray-300 p-2 cursor-pointer rounded-t">English</span>
                        <span className="hover:bg-gray-300 p-2 cursor-pointer rounded-b">Arabic</span>
                    </div>
                </div>
            </div>
            {/* ===== Header ===== */}
            <div className="z-0 bg-white text-black py-6 px-16 hidden md:flex flex-col sm:flex-row justify-between items-center border-b border-gray-300">
                { /* Logo */}
                <Link href="/" className="logo font-inter font-bold text-lg">Exclusive</Link>
                { /* Navigation */}
                <nav className="flex flex-col sm:flex-row gap-8">
                    <Link href={ROUTES.HOME} className={`${pathname === ROUTES.HOME ? 'underline':''} decoration-gray-300 underline-offset-4 hover:underline hover:decoration-black`}>Home</Link>
                    <Link href={ROUTES.CONTACT} className={`${pathname === ROUTES.CONTACT ? 'underline':''} decoration-gray-300 underline-offset-4 hover:underline hover:decoration-black`}>Contact</Link>
                    <Link href={ROUTES.ABOUT} className={`${pathname === ROUTES.ABOUT ? 'underline':''} decoration-gray-300 underline-offset-4 hover:underline hover:decoration-black`}>About</Link>
                    <Link href={ROUTES.SIGNUP} className={`${pathname === ROUTES.SIGNUP ? 'underline':''} decoration-gray-300 underline-offset-4 hover:underline hover:decoration-black`}>Sign Up</Link>
                </nav>
                { /* Right Side */}
                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative z-0" style={{ backgroundColor: "#F5F5F5" }}>
                        <input type="text" placeholder="Search" className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:border-blue-500" />
                        <svg className="z-0 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    {/* Wishlist Icon */}
                    <Link href={ROUTES.WHISHLIST} className="cursor-pointer">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    {/* Cart Icon */}
                    <Link href={ROUTES.CART} className="cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    {/* User Icon */}
                    <Link href={user ? ROUTES.ACCOUNT : ROUTES.LOGIN}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}