"use client";

import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Product from "@/components/Product";

export default function Home() {
    const navigatorRef = useRef(null);
    const SliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const navigatorDots = navigatorRef.current.querySelectorAll(".dot");
        navigatorDots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                setCurrentSlide(index);
            });
        })
    },[])

    useEffect(() => {
        const navigatorDots = navigatorRef.current.querySelectorAll(".dot");
        navigatorDots.forEach((dot, index) => {
            dot.classList.add("bg-gray-700");
            dot.classList.remove("bg-red-500");
            if (index === currentSlide) {
                dot.classList.remove("bg-gray-700");
                dot.classList.add("bg-red-500");
            }
        });

        const slides = SliderRef.current.querySelectorAll(".slide");
        slides.forEach((slide, index) => {
            if(index === currentSlide) {
                slide.classList.remove("hidden");
                setTimeout(() => {
                    slide.classList.remove("-left-full");
                    slide.classList.remove("left-full");
                    slide.classList.add("left-0");
                }, 100);
            } else if(index < currentSlide) {
                slide.classList.remove("left-0");
                slide.classList.remove("left-full");
                slide.classList.add("-left-full");
                setTimeout(() => {
                    slide.classList.add("hidden");
                }, 100);

            } else if(index > currentSlide) {
                slide.classList.remove("left-0");
                slide.classList.remove("-left-full");                                                                                                                                                                         
                slide.classList.add("left-full");
                setTimeout(() => {
                    slide.classList.add("hidden");
                }, 100);
            }
        });

        const intervalId = setInterval(() => {
            setCurrentSlide(prev => {
                const nextSlide = (prev + 1) % navigatorDots.length;
                return nextSlide;
            });
        }, 5000);

        return () => clearInterval(intervalId);

    },[currentSlide]);
    return (
        <div className="home-page px-5 sm:px-10 sm:mx-14 mb-8 flex flex-col gap-16">
            <div className="flex flex-col sm:flex-row sm:gap-16 relative">
                <div className="side pt-8 w-fit sm:border-r-2 border-gray-300 pr-4">
                    <div className="menu flex flex-row flex-wrap sm:flex-col justify-center gap-4">
                        <div className="dropdown-menu flex flex-row justify-between items-center gap-14 cursor-pointer bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">
                            <span>Woman's Fashion</span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="dropdown-menu flex flex-row justify-between items-center gap-14 cursor-pointer bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">
                            <span>Men's Fashion</span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="black"/>
                            </svg>
                        </div>
                        <Link href=""><div className="bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">Electronics</div></Link>
                        <Link href=""><div className="bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">Home & Lifestyle</div></Link>
                        <Link href=""><div className="bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">Medicine</div></Link>
                        <Link href=""><div className="bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">Sports & Outdoor</div></Link>
                        <Link href=""><div className="bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">Baby's & Toys</div></Link>
                        <Link href=""><div className="bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">Groceries & pets</div></Link>
                        <Link href=""><div className="bg-gray-300 p-2 rounded-full sm:bg-transparent sm:p-0 sm:rounded-none">Health & Beauty</div></Link>
                    </div>
                </div>
                <div className="hero-slider relative w-full sm:w-4/6 gap-1 mt-8">
                    <div className="slider relative sm:h-full h-60 w-full overflow-hidden" ref={SliderRef}>
                        <div className="slide lg:pl-0 bg-black h-full md:pl-10 pl-6  flex flex-row justify-center items-center absolute top-0 left-0 w-full transition-all duration-500 ease-in-out">
                            <div className="info flex flex-col justify-center items-start gap-3 sm:w-3/4 md:w-1/2 lg:w-1/4">
                                <div className="flex flex-row justify-start items-center text-center justify-between gap-4">
                                    <div className="image w-[40px]">
                                        <Image 
                                            src="/apple.png"
                                            alt="Hero Image"
                                            width={1000}
                                            height={1000}
                                            layout="responsive"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-white">iPhone 14 Series</span>
                                </div>
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white md:leading-10 sm:leading-8 whitespace-normal break-words">Up to 10% off Voucher</div>
                                <Link href={ROUTES.PRODUCTS} className="flex flex-row items-center gap-2">
                                    <span className="text-white underline underline-offset-6">Shop Now</span>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="image w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                                <Image 
                                    src="/hero.jpg"
                                    alt="Hero Image"
                                    width={1000}
                                    height={1000}
                                    layout="responsive"
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                        </div>
                        <div className="slide lg:pl-0 bg-black h-full md:pl-10 pl-6  flex flex-row justify-center items-center absolute top-0 left-0 w-full transition-all duration-500 ease-in-out">
                            <div className="info flex flex-col justify-center items-start gap-3 sm:w-3/4 md:w-1/2 lg:w-1/4">
                                <div className="flex flex-row justify-start items-center text-center justify-between gap-4">
                                    <div className="image w-[40px]">
                                        <Image 
                                            src="/apple.png"
                                            alt="Hero Image"
                                            width={1000}
                                            height={1000}
                                            layout="responsive"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-white">iPhone 14 Series</span>
                                </div>
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white md:leading-10 sm:leading-8 whitespace-normal break-words">Up to 10% off Voucher</div>
                                <Link href={ROUTES.PRODUCTS} className="flex flex-row items-center gap-2">
                                    <span className="text-white underline underline-offset-6">Shop Now</span>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="image w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                                <Image 
                                    src="/hero.jpg"
                                    alt="Hero Image"
                                    width={1000}
                                    height={1000}
                                    layout="responsive"
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                        </div>
                        <div className="slide lg:pl-0 bg-black h-full md:pl-10 pl-6  flex flex-row justify-center items-center absolute top-0 left-0 w-full transition-all duration-500 ease-in-out">
                            <div className="info flex flex-col justify-center items-start gap-3 sm:w-3/4 md:w-1/2 lg:w-1/4">
                                <div className="flex flex-row justify-start items-center text-center justify-between gap-4">
                                    <div className="image w-[40px]">
                                        <Image 
                                            src="/apple.png"
                                            alt="Hero Image"
                                            width={1000}
                                            height={1000}
                                            layout="responsive"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-white">iPhone 14 Series</span>
                                </div>
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white md:leading-10 sm:leading-8 whitespace-normal break-words">Up to 10% off Voucher</div>
                                <Link href={ROUTES.PRODUCTS} className="flex flex-row items-center gap-2">
                                    <span className="text-white underline underline-offset-6">Shop Now</span>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="image w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                                <Image 
                                    src="/hero.jpg"
                                    alt="Hero Image"
                                    width={1000}
                                    height={1000}
                                    layout="responsive"
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                        </div>
                        <div className="slide lg:pl-0 bg-black h-full md:pl-10 pl-6  flex flex-row justify-center items-center absolute top-0 left-0 w-full transition-all duration-500 ease-in-out">
                            <div className="info flex flex-col justify-center items-start gap-3 sm:w-3/4 md:w-1/2 lg:w-1/4">
                                <div className="flex flex-row justify-start items-center text-center justify-between gap-4">
                                    <div className="image w-[40px]">
                                        <Image 
                                            src="/apple.png"
                                            alt="Hero Image"
                                            width={1000}
                                            height={1000}
                                            layout="responsive"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-white">iPhone 14 Series</span>
                                </div>
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white md:leading-10 sm:leading-8 whitespace-normal break-words">Up to 10% off Voucher</div>
                                <Link href={ROUTES.PRODUCTS} className="flex flex-row items-center gap-2">
                                    <span className="text-white underline underline-offset-6">Shop Now</span>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="image w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                                <Image 
                                    src="/hero.jpg"
                                    alt="Hero Image"
                                    width={1000}
                                    height={1000}
                                    layout="responsive"
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                        </div>
                        <div className="slide lg:pl-0 bg-black h-full md:pl-10 pl-6  flex flex-row justify-center items-center absolute top-0 left-0 w-full transition-all duration-500 ease-in-out">
                            <div className="info flex flex-col justify-center items-start gap-3 sm:w-3/4 md:w-1/2 lg:w-1/4">
                                <div className="flex flex-row justify-start items-center text-center justify-between gap-4">
                                    <div className="image w-[40px]">
                                        <Image 
                                            src="/apple.png"
                                            alt="Hero Image"
                                            width={1000}
                                            height={1000}
                                            layout="responsive"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-white">iPhone 14 Series</span>
                                </div>
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white md:leading-10 sm:leading-8 whitespace-normal break-words">Up to 10% off Voucher</div>
                                <Link href={ROUTES.PRODUCTS} className="flex flex-row items-center gap-2">
                                    <span className="text-white underline underline-offset-6">Shop Now</span>
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="image w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                                <Image 
                                    src="/hero.jpg"
                                    alt="Hero Image"
                                    width={1000}
                                    height={1000}
                                    layout="responsive"
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="navigator absolute left-1/2 top-full -translate-x-1/2 -translate-y-full flex flex-row justify-center items-center gap-4 pb-2" ref={navigatorRef}>
                        <div className="dot cursor-pointer w-[20px] h-[20px] bg-gray-700 text-white rounded-full"></div>
                        <div className="dot cursor-pointer w-[20px] h-[20px] bg-gray-700 text-white rounded-full"></div>
                        <div className="dot cursor-pointer w-[20px] h-[20px] bg-gray-700 text-white rounded-full"></div>
                        <div className="dot cursor-pointer w-[20px] h-[20px] bg-gray-700 text-white rounded-full"></div>
                        <div className="dot cursor-pointer w-[20px] h-[20px] bg-gray-700 text-white rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="sales flex flex-col gap-9 border-b-1 border-gray-300 pb-16">
                <div className="header flex flex-row gap-2">
                    <div className="border-x-7 w-0 rounded" style={{borderColor: "#DB4444"}}>&nbsp;</div>
                    <div className="font-semibold font-Poppins text-base" style={{color: "#DB4444"}}>Today's</div>
                </div>
                <div className="second-header flex md:flex-row flex-col justify-between items-center">
                    <div className="flex flex-row items-center gap-18">
                        <div className="text-base sm:text-3xl font-semibold">Flash Sales</div>
                        <div className="counter">
                            <div className="flex flex-row text-black text-xs font-medium text-center">
                                <div className="w-[60px] text-center">Days</div>
                                <div className="w-[60px] text-center">Hours</div>
                                <div className="w-[60px] text-center">Minutes</div>
                                <div className="w-[60px] text-center">Seconds</div>
                            </div>
                            <div className="flex flex-row text-black sm:text-3xl text-xl font-bold text-center">
                                <div className="w-[50px]  text-center">02</div>
                                <span className="w-[10px]" style={{color: "#DB4444"}}>:</span>
                                <div className="w-[50px] text-center">23</div>
                                <span className="w-[10px]" style={{color: "#DB4444"}}>:</span>
                                <div className="w-[50px] text-center">59</div>
                                <span className="w-[10px]" style={{color: "#DB4444"}}>:</span>
                                <div className="w-[50px] text-center">40</div>
                            </div>
                        </div>
                    </div>
                    <div className="navigator flex flex-row gap-1">
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 cursor-pointer hover:-translate-x-1/5 transition-all duration-300 ease-in">&larr;</button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 cursor-pointer hover:translate-x-1/5 transition-all duration-300 ease-in">&rarr;</button>
                    </div>
                </div>
                <div className="products flex flex-row justify-center items-center flex-wrap">
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                </div>
                <div className="flex justify-center items-center">
                    <button className="w-fit px-13 py-4 text-base text-white rounded cursor-pointer" style={{backgroundColor: "#DB4444"}}>View All Products</button>
                </div>
            </div>
            <div className="gategories flex flex-col gap-9 border-b-1 border-gray-300 pb-16">
                <div className="header flex flex-row gap-2">
                    <div className="border-x-7 w-0 rounded" style={{borderColor: "#DB4444"}}>&nbsp;</div>
                    <div className="font-semibold font-Poppins text-base" style={{color: "#DB4444"}}>Categories</div>
                </div>
                <div className="second-header flex md:flex-row flex-col justify-between items-center">
                    <div className="flex flex-row items-center gap-18">
                        <div className="text-base sm:text-3xl font-semibold">Browse By Categories</div>
                        
                    </div>
                    <div className="navigator flex flex-row gap-1">
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 cursor-pointer hover:-translate-x-1/5 transition-all duration-300 ease-in">&larr;</button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 cursor-pointer hover:translate-x-1/5 transition-all duration-300 ease-in">&rarr;</button>
                    </div>
                </div>
                <div className="products flex flex-row justify-center items-center flex-wrap gap-4">
                    <div className="category-box flex-1 flex flex-col items-center justify-center gap-3 border-1 border-gray-200 p-4 rounded-lg transition-shadow duration-300 hover:bg-red-500 cursor-pointer">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1451_868)">
                                <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25.6667 7H31.1354" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M28 44.0052V44.0305" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" strokeWidth="2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1451_868">
                                    <rect width="56" height="56" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div>Phone</div>
                    </div>
                    <div className="category-box flex-1 flex flex-col items-center justify-center gap-3 border-1 border-gray-200 p-4 rounded-lg transition-shadow duration-300 hover:bg-red-500 cursor-pointer">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1455_613)">
                                <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.3333 46.6666H39.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 37.3334V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M35 37.3334V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 32H48" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1455_613">
                                    <rect width="56" height="56" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div>Computers</div>
                    </div>
                    <div className="category-box flex-1 flex flex-col items-center justify-center gap-3 border-1 border-gray-200 p-4 rounded-lg transition-shadow duration-300 hover:bg-red-500 cursor-pointer">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1455_629)">
                                <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 42V49H35V42" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 14V7H35V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="24" y1="23" x2="24" y2="34" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="28" y1="28" x2="28" y2="34" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="32" y1="26" x2="32" y2="34" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1455_629">
                                    <rect width="56" height="56" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div>Smart Watches</div>
                    </div>
                    <div className="category-box flex-1 flex flex-col items-center justify-center gap-3 border-1 border-gray-200 p-4 rounded-lg transition-shadow duration-300 hover:bg-red-500 cursor-pointer">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1451_868)">
                                <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25.6667 7H31.1354" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M28 44.0052V44.0305" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" strokeWidth="2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1451_868">
                                    <rect width="56" height="56" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div>Cameras</div>
                    </div>
                    <div className="category-box flex-1 flex flex-col items-center justify-center gap-3 border-1 border-gray-200 p-4 rounded-lg transition-shadow duration-300 hover:bg-red-500 cursor-pointer">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1455_809)">
                                <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M35 25.6666V25.6908" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M42 30.3333V30.3574" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1455_809">
                                    <rect width="56" height="56" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div>Gaming</div>
                    </div>

                </div>
            </div>
            <div className="best-selling flex flex-col gap-9 pb-16">
                <div className="header flex flex-row gap-2">
                    <div className="border-x-7 w-0 rounded" style={{borderColor: "#DB4444"}}>&nbsp;</div>
                    <div className="font-semibold font-Poppins text-base" style={{color: "#DB4444"}}>This Month</div>
                </div>
                <div className="second-header flex md:flex-row flex-col justify-between items-center">
                    <div className="flex flex-row items-center gap-18">
                        <div className="text-base sm:text-3xl font-semibold">Best Selling Products</div>
                       
                    </div>
                    <div className="flex justify-center items-center">
                    <button className="w-fit px-13 py-4 text-base text-white rounded cursor-pointer" style={{backgroundColor: "#DB4444"}}>View All</button>
                </div>
                </div>
                <div className="products flex flex-row justify-center items-center flex-wrap">
                    <Product key={1} imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product key={2} imageName={"product.png"} title={"product"} description={"product"}/>
                </div>
                
                <div className="Hero-section p-6 flex flex-col-reverse md:flex-row justify-center items-center sm:gap-10 bg-black">
                    <div className="left flex flex-col justify-center items-center sm:items-start gap-2 sm:gap-16 text-white">
                        <h2 className="font-semibold" style={{color: "#00FF66"}}>Categories</h2>
                        <p className="text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-16 text-center sm:text-start">Enhance Your<br /> Music Experience</p>
                        <div className="counter flex flex-row justify-center items-center gap-4">
                            <div className="flex flex-col justify-center items-center bg-white text-black rounded-full w-20 h-20 p-4">
                                <span className="font-semibold">23</span>
                                <span>Hours</span>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white text-black rounded-full w-20 h-20 p-4">
                                <span className="font-semibold">05</span>
                                <span>Days</span>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white text-black rounded-full w-20 h-20 p-4">
                                <span className="font-semibold">59</span>
                                <span>Minutes</span>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white text-black rounded-full w-20 h-20 p-4">
                                <span className="font-semibold">35</span>
                                <span>Seconds</span>
                            </div>
                        </div>
                        <button className="text-white text-base font-normal px-10 sm:px-14 py-4 rounded cursor-pointer" style={{backgroundColor: "#00FF66"}}>Buy Now!</button>
                    </div>

                    <div className="image w-3/5 max-h-[530px] flex flex-col justify-center items-center">   
                        <Image 
                            src="/hero.png"
                            alt="Hero Image"
                            width={600}
                            height={600}
                            // layout="responsive"
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className="our-products flex flex-col gap-9 pb-16">
                <div className="header flex flex-row gap-2">
                    <div className="border-x-7 w-0 rounded" style={{borderColor: "#DB4444"}}>&nbsp;</div>
                    <div className="font-semibold font-Poppins text-base" style={{color: "#DB4444"}}>Our Products</div>     
                </div>
                <div className="second-header flex md:flex-row flex-col justify-between items-center">
                    <div className="flex flex-row items-center gap-18">
                        <div className="text-base sm:text-3xl font-semibold">Explore Our Products</div>

                    </div>
                    <div className="navigator flex flex-row gap-1">
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 cursor-pointer hover:-translate-x-1/5 transition-all duration-300 ease-in">&larr;</button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 cursor-pointer hover:translate-x-1/5 transition-all duration-300 ease-in">&rarr;</button>
                    </div>
                </div>
                <div className="products flex flex-row justify-center items-center flex-wrap">
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                    <Product imageName={"product.png"} title={"product"} description={"product"}/>
                </div>
                <div className="flex justify-center items-center">
                    <button className="w-fit px-13 py-4 text-base text-white rounded cursor-pointer" style={{backgroundColor: "#DB4444"}}>View All Products</button>
                </div>
            </div>
            <div className="featured-products flex flex-col gap-9 pb-16">
                <div className="header flex flex-row gap-2">
                    <div className="border-x-7 w-0 rounded" style={{borderColor: "#DB4444"}}>&nbsp;</div>
                    <div className="font-semibold font-Poppins text-base" style={{color: "#DB4444"}}>Featured</div>     
                </div>
                <div className="second-header flex md:flex-row flex-col justify-between items-center">
                    <div className="flex flex-row items-center gap-18">
                        <div className="text-base sm:text-3xl font-semibold">New Arrival</div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="ps5 bg-black relative flex-1 flex flex-col justify-end">
                        <div className="image flex justify-center">
                            <Image
                                src="/ps5.png"
                                alt="Product Image"
                                width={1000}
                                height={1000}
                                layout="responsive"
                                className="w-full h-full object-cover"  
                            />
                        </div>
                        <div className="absolute w-1/2 bottom-0 left-0 right-0 p-4 flex flex-col gap-2 bg-transparent">
                            <h3 className="text-white text-lg font-semibold">PlayStation 5</h3>
                            <p className="text-white text-sm">Black and White version of the PS5 coming out on sale.</p>
                            <button className="text-white w-fit underline underline-offset-3 hover:decoration-gray-300">Shop Now</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 flex-1">
                        <div className="women relative flex-1 flex flex-row justify-end bg-black">
                            <div className="image flex flex-row justify-center items-center">
                                <Image
                                    src="/woman.jpg"
                                    alt="Product Image"
                                    width={500}
                                    height={500}
                                    // layout="responsive"
                                    className="w-full h-full object-cover scale-x-[-1]"  
                                />
                            </div>
                            <div className="absolute w-1/2 bottom-0 left-0 right-0 p-4 flex flex-col gap-2 bg-transparent">
                                <h3 className="text-white text-lg font-semibold">Women’s Collections</h3>
                                <p className="text-white text-sm">Featured woman collections that give you another vibe.</p>
                                <button className="text-white w-fit underline underline-offset-3 hover:decoration-gray-300">Shop Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 flex-1">
                            <div className="bg-black relative flex-1 flex flex-col justify-center">
                                <div className="image flex flex-row justify-center items-center">
                                    <Image
                                        src="/speakers.png"
                                        alt="Product Image"
                                        width={1000}
                                        height={1000}
                                        layout="responsive"
                                        className="w-full h-full object-cover scale-x-[-1]"  
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 bg-transparent">
                                    <h3 className="text-white text-lg font-semibold">Speakers</h3>
                                    <p className="text-white text-sm">Amazon wireless speakers.</p>
                                    <button className="text-white w-fit underline underline-offset-3 hover:decoration-gray-300">Shop Now</button>
                                </div>
                            </div>
                            <div className="bg-black relative flex-1 flex flex-row justify-center">
                                <div className="image flex flex-row justify-center items-center">
                                    <Image
                                        src="/perfumes.png"
                                        alt="Product Image"
                                        width={1000}
                                        height={1000}
                                        layout="responsive"
                                        className="w-full h-full object-cover scale-x-[-1]"  
                                    />
                                </div>
                                <div className="absolute w-1/2 bottom-0 left-0 right-0 p-4 flex flex-col gap-2 bg-transparent">
                                    <h3 className="text-white text-lg font-semibold">perfume</h3>
                                    <p className="text-white text-sm">GUCCI INTENSE OUD EDP</p>
                                    <button className="text-white w-fit underline underline-offset-3 hover:decoration-gray-300">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-30 justify-center items-center py-16">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="bg-black border-20 border-gray-200 rounded-full p-4">
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1474_335)">
                                <path d="M12.1667 31.6667C14.0076 31.6667 15.5 30.1743 15.5 28.3333C15.5 26.4924 14.0076 25 12.1667 25C10.3257 25 8.83334 26.4924 8.83334 28.3333C8.83334 30.1743 10.3257 31.6667 12.1667 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.83331 28.3335H7.49998C6.39541 28.3335 5.49998 27.4381 5.49998 26.3335V21.6668M3.83331 8.3335H20.1666C21.2712 8.3335 22.1666 9.22893 22.1666 10.3335V28.3335M15.5 28.3335H25.5M32.1667 28.3335H33.5C34.6046 28.3335 35.5 27.4381 35.5 26.3335V18.3335M35.5 18.3335H22.1666M35.5 18.3335L31.0826 10.9712C30.7211 10.3688 30.0701 10.0002 29.3676 10.0002H22.1666" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.5 11.8184H12.1667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.31818 15.4546H8.98484" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.5 19.0908H12.1667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1474_335">
                                    <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-lg font-semibold">FREE AND FAST DELIVERY</div>
                    <div>Free delivery for all orders over $140</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="bg-black border-20 border-gray-200 rounded-full p-4">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1474_352)">
                                <path d="M13.3334 24.9998C13.3334 23.1589 11.841 21.6665 10 21.6665C8.15907 21.6665 6.66669 23.1589 6.66669 24.9998V28.3332C6.66669 30.1741 8.15907 31.6665 10 31.6665C11.841 31.6665 13.3334 30.1741 13.3334 28.3332V24.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M33.3334 24.9998C33.3334 23.1589 31.841 21.6665 30 21.6665C28.1591 21.6665 26.6667 23.1589 26.6667 24.9998V28.3332C26.6667 30.1741 28.1591 31.6665 30 31.6665C31.841 31.6665 33.3334 30.1741 33.3334 28.3332V24.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66669 24.9998V19.9998C6.66669 16.4636 8.07145 13.0722 10.5719 10.5717C13.0724 8.07126 16.4638 6.6665 20 6.6665C23.5362 6.6665 26.9276 8.07126 29.4281 10.5717C31.9286 13.0722 33.3334 16.4636 33.3334 19.9998V24.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M30 31.6665C30 32.9926 28.9464 34.2644 27.0711 35.202C25.1957 36.1397 22.6522 36.6665 20 36.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1474_352">
                                    <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-lg font-semibold">24/7 CUSTOMER SERVICE</div>
                    <div>Friendly 24/7 customer support</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="bg-black border-20 border-gray-200 rounded-full p-4">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.983 2.5874C21.0046 2.5874 22.004 2.73663 22.7574 3.01807L31.0748 6.13525H31.0758C33.2953 6.96202 35.0504 9.50761 35.0504 11.8667V24.2495C35.0504 25.3367 34.7062 26.5895 34.1237 27.7485C33.5777 28.8348 32.8403 29.8024 32.0309 30.4556L31.8678 30.5825L24.7008 35.9321L24.6949 35.937C23.4122 36.9261 21.7236 37.4331 19.9996 37.4331C18.2769 37.433 16.5846 36.9263 15.2643 35.9478H15.2633L8.09924 30.5991C7.22654 29.9484 6.4252 28.9208 5.84241 27.7593C5.25956 26.5976 4.91663 25.3447 4.91663 24.2661V11.8667C4.91663 9.50749 6.67157 6.96189 8.89124 6.13525H8.89221L17.2086 3.01807C17.962 2.73655 18.9614 2.58743 19.983 2.5874ZM20.0006 4.08545C19.202 4.08763 18.3751 4.19487 17.7418 4.43115L17.7408 4.43213L9.42444 7.54834H9.42346C8.59596 7.85993 7.85473 8.52245 7.32385 9.29053C6.79277 10.0589 6.43323 10.9898 6.43323 11.8833V24.2661C6.43323 25.1606 6.74381 26.1893 7.20081 27.1011C7.65769 28.0126 8.29305 28.8726 9.00061 29.4009L16.1676 34.7505C17.2294 35.5444 18.628 35.9252 20.0016 35.9253C21.3755 35.9253 22.7778 35.5442 23.8473 34.7515L23.8492 34.7505L31.0153 29.4009L31.0162 29.3999C31.731 28.8638 32.3666 28.0049 32.8219 27.0942C33.2772 26.1836 33.5836 25.1596 33.5836 24.2661V11.8667C33.5836 10.9807 33.2232 10.0539 32.693 9.28662C32.1625 8.51907 31.422 7.85386 30.5973 7.53369L30.5924 7.53174L22.275 4.41455L22.2662 4.41162C21.6281 4.18643 20.8 4.08327 20.0006 4.08545Z" fill="#FAFAFA" stroke="#FAFAFA"/>
                            <path d="M24.4039 14.77C24.692 14.4822 25.1755 14.482 25.4635 14.77C25.7514 15.058 25.7513 15.5415 25.4635 15.8296L18.2965 22.9966C18.1452 23.1478 17.9574 23.2163 17.7662 23.2163C17.5752 23.2162 17.3881 23.1477 17.2369 22.9966L14.5533 20.313C14.2655 20.0249 14.2654 19.5414 14.5533 19.2534C14.8414 18.9654 15.3248 18.9655 15.6129 19.2534L17.7662 21.4067L18.1207 21.0532L24.4039 14.77Z" fill="#FAFAFA" stroke="#FAFAFA"/>
                        </svg>
                    </div>
                    <div className="text-lg font-semibold">MONEY BACK GUARANTEE</div>
                    <div>We reurn money within 30 days</div>
                </div>
            </div>
        </div>
    );
}