import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Product({ imageName, title, price, discountPrice, discountPercentage, ratings }) {
    const [showAddToCart, setShowAddToCart] = useState(false);
    const [color, setColor] = useState("red"); // Example colors, replace with actual data
    const productRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            setShowAddToCart(true);

        }
        const handleMouseLeave = () => {
            setShowAddToCart(false);
        }
        const productElement = productRef.current;
        if (productElement) {
            productElement.addEventListener("mouseenter", handleMouseEnter);
            productElement.addEventListener("mouseleave", handleMouseLeave);
        }
        return () => {
            if (productElement) {
                productElement.removeEventListener("mouseenter", handleMouseEnter);
                productElement.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="product p-2 w-full sm:w-1/2 md:w-1/4">
            <div className="main relative bg-gray-100 rounded py-10 flex justify-center items-center flex-col" ref={productRef}>
                {true && ( // Discount condition, replace with actual logic
                    <div className="discount absolute top-2 left-2 text-white text-xs font-normal sm:px-2 py-1 rounded" style={{ backgroundColor: "#DB4444" }}>
                        - {40}%
                    </div>
                )}
                {/* wishlistIcon */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <div className="wishlist cursor-pointer bg-white rounded-full sm:p-2 flex justify-center items-center hover:bg-gray-200 transition-colors duration-300">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="wishlist cursor-pointer bg-white rounded-full sm:p-2 flex justify-center items-center hover:bg-gray-200 transition-colors duration-300">
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <Image 
                        src={`/${imageName}`}
                        alt={title}
                        width={300}
                        height={300}
                        layout="responsive"
                        className="w-full h-full object-cover"
                    />
                </div>
                <button className={`${showAddToCart ? "block" : "hidden"} absolute bottom-0 w-full bg-black text-white px-4 py-2 rounded cursor-pointer`}>Add to Cart</button>
            </div>
            <div className="p-2 flex flex-col gap-2">
                <h3 className="text-base font-medium">{title}</h3>
            {/* price */}
                <div className="price text-base font-medium">
                    <span className="" style={{color: "#DB4444"}}>$60</span> {/* Discounted price */}
                    <span className="text-gray-500 line-through">$100</span> {/* Original price */}
                </div>
                {/* Ratings */}
                <div className="ratings flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.5L3.5 15L4.5 10.5L1 6.5L5.5 6L8 1L10.5 6L15 6.5L11.5 10.5L12.5 15L8 12.5Z" fill="#FFD700"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.5L3.5 15L4.5 10.5L1 6.5L5.5 6L8 1L10.5 6L15 6.5L11.5 10.5L12.5 15L8 12.5Z" fill="#FFD700"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.5L3.5 15L4.5 10.5L1 6.5L5.5 6L8 1L10.5 6L15 6.5L11.5 10.5L12.5 15L8 12.5Z" fill="#FFD700"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.5L3.5 15L4.5 10.5L1 6.5L5.5 6L8 1L10.5 6L15 6.5L11.5 10.5L12.5 15L8 12.5Z" fill="#FFD700"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.5L3.5 15L4.5 10.5L1 6.5L5.5 6L8 1L10.5 6L15 6.5L11.5 10.5L12.5 15L8 12.5Z" fill="#bbb"/>
                    </svg>
                    <span className="text-sm">4</span>
                </div>
                {/* colors */} 
                {true && (
                    <div className="flex gap-2 mt-1">
                    <div data-color="red" className={`w-4 h-4 rounded-full bg-red-500 cursor-pointer ${color === "red" ? "border-2 border-black" : ""}`} onClick={(e)=>{
                        setColor("red");
                    }}></div>
                    <div data-color="blue" className={`w-4 h-4 rounded-full bg-blue-500 cursor-pointer ${color === "blue" ? "border-2 border-black" : ""}`} onClick={(e)=>{
                        setColor("blue");
                    }}></div>
                </div>
                )}
            </div>
        </div>
    );
}