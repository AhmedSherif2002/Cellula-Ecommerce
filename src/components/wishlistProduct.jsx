import { getProduct } from "@/lib/api/products";
import { removeFromWishlist } from "@/lib/wishlist";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function WishlistProduct({ id, triggerDelete }) {
    const [showAddToCart, setShowAddToCart] = useState(false);
    const [product, setProduct] = useState(null);
    const [color, setColor] = useState("red"); // Example colors, replace with actual data
    const productRef = useRef(null);
    console.log(id)

    const handleDelete = () => {
        // Delete item from wishlist
        removeFromWishlist(id);
        triggerDelete();
        alert(`Removed ${product.title}-${id} from wishlist.`);
    }

    useEffect(() => {
        getProduct(id).then(setProduct).catch(e => console.error("Error fetching product:", e));
    }, []);

    useEffect(()=>{ // debugging
        console.log("prod:", product);
    },[product])

    return product && (
        <div className="product p-2 w-full sm:w-1/2 md:w-1/4 ">
            <Link href="/product/id">
                <div className="main relative bg-gray-100 h-fit rounded py-10 flex justify-center items-center flex-col" ref={productRef}>
                    <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                        {true && ( // Discount condition, replace with actual logic
                            <div className="discount text-white text-xs font-normal sm:px-2 py-1 rounded" style={{ backgroundColor: "#DB4444" }}>
                                - {40}%
                            </div>
                        )}
                        {false && ( // New condition, replace with actual logic
                            <div className="discount text-white text-xs font-normal sm:px-2 py-1 rounded" style={{ backgroundColor: "#00FF66" }}>
                                NEW
                            </div>
                        )}
                        {/* DeleteIcon */}
                         <div className="flex flex-col gap-2">
                             <div className="delete cursor-pointer bg-white rounded-full sm:p-2 flex justify-center items-center hover:bg-gray-200 transition-colors duration-300" onClick={(e)=>{
                                e.preventDefault();
                                handleDelete();
                             }}>
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:   www.w3.org/2000/svg">
                                     <path d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143" stroke="black" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round"/>
                                 </svg>
                             </div>
                         </div>
                    </div>
                    <div className="h-50 flex justify-center items-center">
                        <Image 
                            alt={product.title}
                            src={product.image}
                            fill
                            className="object-contain p-10"
                        />
                    </div>
                    <button className={`absolute bottom-0 w-full bg-black text-white px-4 py-2 rounded cursor-pointer`}>Add to Cart</button>
                </div>
                <div className="p-2 flex flex-col gap-2">
                    <h3 className="text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis" title={product.title}>{product.title}</h3>
                {/* price */}
                    <div className="price text-base font-medium">
                        <span className="" style={{color: "#DB4444"}}>$60</span> {/* Discounted price */}
                        <span className="text-gray-500 line-through">${product.price}</span> {/* Original price */}
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
            </Link>
        </div>
    );
}