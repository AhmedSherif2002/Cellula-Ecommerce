"use client";
import { useEffect, useState } from "react";
import WishlistProduct from "@/components/wishlistProduct";
import Product from "@/components/Product";

export default function WishlistPage() {

    const [items, setItems] = useState([]);

    const loadWishlist = () => {
        const wishlist = localStorage.getItem("wishlist") || [];
        const wishlistArray = Array.isArray(wishlist) ? wishlist : JSON.parse(wishlist);
        setItems(wishlistArray);
    }

    const triggerDelete = () => {
        loadWishlist();
    }

    useEffect(()=>{
        loadWishlist();
    }, [])


    return (
        <div className="sm:m-14">
            <div className="flex flex-row justify-between items-center p-4">
                <div>Wishlist <span>&#40;{items.length}&#41;</span></div>
                <button className="text-base bg-white border-1 border-gray-500 px-9 py-3 hover:bg-gray-100 cursor-pointer">Move All To Bag</button>
            </div>
            <div className="products flex flex-row flex-wrap justify-center items-center">
                {
                    items.length > 0 ?
                    items.map((product, index) => (
                        <WishlistProduct key={index} id={product.id} title={product.title} price={product.price} imageName={product.imageName} triggerDelete={triggerDelete}/>
                    )) : (
                        <>
                            <div className="text-3xl">No Items Yet</div>
                        </>
                    )
                }
            </div>
            <div className="just-for-you flex flex-col gap-9 border-b-1 border-gray-300 pb-16 mt-16">
                <div className="header flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <div className="border-x-7 w-0 rounded" style={{borderColor: "#DB4444"}}>&nbsp;</div>
                        <div className="font-Poppins text-[20px] font-normal">Just For You</div>
                    </div>
                    <button className="text-base bg-white border-1 border-gray-500 px-9 py-3 hover:bg-gray-100 cursor-pointer">See All</button>
                </div>
                <div className="products flex flex-row justify-center items-center flex-wrap">
                    <Product id={0} imageName={"product.png"} title={"product"} description={"product"} discountPercentage={20} discountPrice={100}/>
                    <Product id={1} imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product id={2} imageName={"product.png"} title={"product"} description={"product"} newLabel={true}/>
                    <Product id={3} imageName={"product.png"} title={"product"} description={"product"}/>
                </div>
                <div className="flex justify-center items-center">
                    <button className="w-fit px-13 py-4 text-base text-white rounded cursor-pointer" style={{backgroundColor: "#DB4444"}}>View All Products</button>
                </div>
            </div>
        </div>
    );
}