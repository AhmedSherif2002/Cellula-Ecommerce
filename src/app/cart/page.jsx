"use client"

import CartProduct from "@/components/CartProduct"
import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react"
import Link from "next/link";
import { ROUTES } from "@/constants/routes"

export default function Cart() {
    const shippingFees = parseFloat(50);
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState(0);

    const deleteProduct = (id) =>{
        setProducts(products.filter(product => product.id !== id));
    }

    const changeProductQuantity = (id, quantity) => {
        const newProducts = products.map(product => product.id == id ? { ...product, quantity} : product);
        setProducts(newProducts);
    }

    const calculatePrice = () => {
        const price = products.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
        setPrice(price.toFixed(2));
        return price;
    }

    const updateCartHandle = () => {
        localStorage.setItem("cart", JSON.stringify(products))
    }

    useEffect(()=>{
        const products = JSON.parse(localStorage.getItem("cart")) || [];
        setProducts(products);
    }, [])

    useEffect(() => {
        console.log("products have been changed", products)
        calculatePrice();
    }, [products]);


  return (
    <div className="sm:m-14 flex flex-col gap-6">
        <div className="">Cart</div>
        <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between items-center p-4 ring-black/5 ring-1 rounded">
                <div className="w-60 text-center">Product</div>
                <div className="w-60 text-center">Price</div>
                <div className="w-60 text-center">Quantity</div>
                <div className="w-60 text-center">SubTotal</div>
                <div className="delete w-15 text-center"></div>
            </div>
            <div className="products flex flex-col gap-6">
                {
                    products.map(product => {
                        console.log("product iddd:", product.id)
                        return <CartProduct key={product.id} id={product.id} title={product.title} image={product.imageUrl} price={product.price} quantity={product.quantity} deleteHandle={deleteProduct} changeQuantityHandle={changeProductQuantity}/>   
                    })
                }
            </div>
        </div>
        <div className="flex flex-row justify-between items-center">
            <button className="rounded border-2 border-gray-300 px-8 py-2 cursor-pointer hover:bg-red-400 hover:border-red-400 hover:text-white">Return To Shop</button>
            <button className="rounded border-2 border-gray-300 px-8 py-2 cursor-pointer hover:bg-red-400 hover:border-red-400 hover:text-white" onClick={updateCartHandle}>Update Cart</button>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
            <div className="coupon flex flex-row gap-4">
                <input type="text" className="outline rounded px-4 py-2 w-60" placeholder="Coupon Code" />
                <button className="rounded rounded text-white px-8 py-2 cursor-pointer" style={{backgroundColor: "#DB4444"}}>Apply Coupon</button>
            </div>
            <div className="cart-totals mt-10 sm:mt-0 p-6 border-1 border-black rounded w-full sm:w-120">
                <div className="flex flex-col gap-6">
                    <div className="text-lg font-semibold">Cart Totals</div>
                    <div className="flex flex-row justify-between items-center border-b-1 border-gray-300 pb-4">
                        <span className="font-medium">Subtotal</span>
                        <span className="font-medium">${price}</span>
                    </div>
                    <div className="flex flex-row justify-between items-center border-b-1 border-gray-300 pb-4">
                        <span className="font-medium">Shipping</span>
                        <span className="font-medium">${shippingFees}</span>
                    </div>
                    <div className="flex flex-row justify-between items-center ">
                        <span className="font-bold text-lg">Total</span>
                        <span className="font-bold text-lg">${(parseFloat(price)+shippingFees).toFixed(2)}</span>
                    </div>
                    <Link className="rounded text-white px-8 py-2 cursor-pointer w-full" style={{backgroundColor: "#DB4444"}} href={ROUTES.CHECKOUT}>
                        Proceed To Checkout
                    </Link>
                    {/* <button className="rounded text-white px-8 py-2 cursor-pointer w-full" style={{backgroundColor: "#DB4444"}}>Proceed To Checkout</button> */}
                </div>
            </div>
        </div>
    </div>
  )
}


