import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WishlistProduct({ id ,imageName, title, price, discountPrice, discountPercentage, ratings, triggerDelete }) {
    const [showAddToCart, setShowAddToCart] = useState(false);
    const [color, setColor] = useState("red"); // Example colors, replace with actual data
    const productRef = useRef(null);
    console.log(id)

    const handleDelete = () => {
        // Delete item from wishlist
        const wishlist = localStorage.getItem("wishlist");
        const wishlistArray = Array.isArray(wishlist) ? wishlist : JSON.parse(wishlist);
        const updatedWishListArray = wishlistArray.filter(item => item.id !== id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishListArray));
        console.log(updatedWishListArray)
        triggerDelete();
        alert(`Removed ${title}-${id} from wishlist.`);
    }

    return (
        <div className="product p-2 w-full sm:w-1/2 md:w-1/4">
            <div className="main relative bg-gray-100 rounded py-10 flex justify-center items-center flex-col" ref={productRef}>
                {true && ( // Discount condition, replace with actual logic
                    <div className="discount absolute top-2 left-2 text-white text-xs font-normal sm:px-2 py-1 rounded" style={{ backgroundColor: "#DB4444" }}>
                        - {40}%
                    </div>
                )}
                {/* DeleteIcon */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <div className="delete cursor-pointer bg-white rounded-full sm:p-2 flex justify-center items-center hover:bg-gray-200 transition-colors duration-300" onClick={handleDelete}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143" stroke="black" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round"/>
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
                {/* colors */} 
                {false && (
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