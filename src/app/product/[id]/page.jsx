"use client"

import Image from "next/image"
import { useState } from "react"
import Product from "@/components/Product";

export default function ProductPage() {

    const [size, setSize] = useState("M");
    const [quantity, setQuantity] = useState(2);
    const sizeChangeHanlde = (e) => {
        setSize(e.target.innerText);
    }
    const quantityChangeHanlde = (e) => {
        console.log(e.target.dataset.operator)
        if(e.target.dataset.operator === "+") {
            setQuantity(quantity => ++quantity);
        }else {
            if(quantity > 1){
                setQuantity(quantity => --quantity);
            }
        }
    }
    return (
        <div className="flex flex-col my-10 md:px-10 px-10">
            <div className="">Product</div>
            <div className="current-product flex flex-col md:flex-row gap-24 mt-6 mb-20">
                <div className="show flex flex-col-reverse md:flex-row justify-center items-center gap-3 w-full md:w-1/2">
                    <div className="left flex flex-row md:flex-col gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                            <Image 
                                src="/product.png"
                                alt="product"
                                width={125}
                                height={100}
                                className=""
                            />
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                            <Image 
                                src="/product.png"
                                alt="product"
                                width={125}
                                height={100}
                                className=""
                            />
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                            <Image 
                                src="/product.png"
                                alt="product"
                                width={125}
                                height={100}
                                className=""
                            />
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                            <Image 
                                src="/product.png"
                                alt="product"
                                width={125}
                                height={100}
                                className=""
                            />
                        </div>
                    </div>
                    <div className="main flex flex-col justify-center items-center p-4 bg-gray-100 h-full w-full rounded">
                        <Image 
                            src="/product.png"
                            alt="product"
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="details flex flex-col items-stretch gap-4 md:w-2/5 w-full">
                    <h2 className="text-3xl">Product</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-row items-center gap-2">
                            <div className="starts flex flex-row">
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
                            </div>
                            <span className="text-sm text-gray-400">&#40;150 reviews&#41;</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-green-500">In-stock</span>
                        </div>
                    </div>
                    <div className="text-lg">$ 124</div>
                    <div className="text-sm pb-4 border-b-2 border-gray-100 flex-1">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</div>
                    <div className="colors flex flex-row gap-3">
                        <span>Colors: </span>
                        {true && (
                            <div className="flex gap-2 mt-1">
                                <div data-color="red" className={`w-4 h-4 rounded-full bg-red-500 cursor-pointer border-2 border-black`}></div>
                                <div data-color="blue" className={`w-4 h-4 rounded-full bg-blue-500 cursor-pointer border-2 border-black`}></div>
                            </div>
                        )}
                    </div>
                    <div className="sizes flex flex-row gap-4 items-center">
                        <span>Size: </span>
                        <div className="flex flex-row gap-4">
                            <div className={`border-1 border-gray-300 w-7 text-center cursor-pointer rounded hover:bg-red-400 ${size === "XS" ? "bg-red-400" : ""}`} onClick={sizeChangeHanlde}>XS</div>
                            <div className={`border-1 border-gray-300 w-7 text-center cursor-pointer rounded hover:bg-red-400 ${size === "S" ? "bg-red-400" : ""}`} onClick={sizeChangeHanlde}>S</div>
                            <div className={`border-1 border-gray-300 w-7 text-center cursor-pointer rounded hover:bg-red-400 ${size === "M" ? "bg-red-400" : ""}`} onClick={sizeChangeHanlde}>M</div>
                            <div className={`border-1 border-gray-300 w-7 text-center cursor-pointer rounded hover:bg-red-400 ${size === "L" ? "bg-red-400" : ""}`} onClick={sizeChangeHanlde}>L</div>
                            <div className={`border-1 border-gray-300 w-7 text-center cursor-pointer rounded hover:bg-red-400 ${size === "XL" ? "bg-red-400" : ""}`} onClick={sizeChangeHanlde}>XL</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                        <div className="quantity flex flex-row">
                            <button data-operator="-" className="border-l border-t border-b border-gray-300 text-center p-2 rounded-tl rounded-bl cursor-pointer hover:bg-red-400 rounded-rb w-9" onClick={quantityChangeHanlde}>-</button>
                            <span className="border-1 border-gray-300 text-center w-18 flex flex-col justify-center">{quantity}</span>
                            <button data-operator="+" className="border-r border-t border-b border-gray-300 text-center p-2 rounded-tr rounded-br cursor-pointer hover:bg-red-400 w-9" onClick={quantityChangeHanlde}>+</button>
                        </div>
                        <button className="px-10 py-2 text-xs text-white font-medium rounded cursor-pointer w-full" style={{backgroundColor: "#DB4444"}}>Buy Now</button>
                        <button className="border-1 border-gray-300 p-2 cursor-pointer hover:bg-red-400 rounded">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="border border-gray-300 w-full rounded">
                        <div className="flex flex-row gap-3 items-center pl-5 px-10 py-6 border-b-1 border-gray-300">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_261_4843)">
                                    <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 11.8182H11.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.81836 15.4545H8.48503" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 19.0909H11.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_261_4843">
                                        <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="flex flex-col gap-2">
                                <span>Free Delivery</span>
                                <p className="text-sm underline">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center pl-5 px-10 py-6">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_261_4865)">
                                    <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_261_4865">
                                        <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="flex flex-col gap-2">
                                <span>Return Delivery</span>
                                <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-products flex flex-col gap-9 pb-16">
                <div className="header flex flex-row gap-2">
                    <div className="border-x-7 w-0 rounded" style={{borderColor: "#DB4444"}}>&nbsp;</div>
                    <div className="font-semibold font-Poppins text-base" style={{color: "#DB4444"}}>Related Items</div>     
                </div>
                <div className="products flex flex-row justify-center items-center flex-wrap">
                    <Product id={0} imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product id={1} imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product id={2} imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product id={3} imageName={"product.png"} title={"product"} description={"product"}/>
                </div>
            </div>
        </div>
    )
}