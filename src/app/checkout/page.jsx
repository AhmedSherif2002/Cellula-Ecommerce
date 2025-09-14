"use client"

import OrderProduct from '@/components/OrderProduct';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import validateEmail from '@/utils/validateEmail';

function Checkout() {

    const shippingFee = 50;
    const [orderItems, setOrderItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const formRef = useRef(null);

    const placeOrder  = () => {
        const form = formRef.current;
        const formData = new FormData(form);
        const details = Object.fromEntries(formData.entries());
        if(!validateForm(details, form)) return; // Validate form.
        // If form is valid, proceed with order placement.
        if(details["information-saver"]) { // Save user  details if user opts it.
            localStorage.setItem("userDetails", JSON.stringify(details));
        }
        if(orderItems.length === 0) return alert("Your cart is empty");
        alert("Your order placed successfully!");
        localStorage.removeItem("cart") // Clear cart
        window.location.href = "/home";
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setTotalPrice(cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0).toFixed(2));
        setOrderItems(cart);
    }, [])

    const validateForm = (details, form) => {
        console.log(details);
        const keys = Object.keys(details); // Convert details object to an array of keys.
        let isValid = true;
        // Validate that each field is filled.
        for(let key of keys){
            form[key].classList.remove("border", "border-red-500");
            if(!details[key]){
                form[key].classList.add("border", "border-red-500");
                isValid = false;
            }  
        }
        if(!isValid) return alert("Please fill all the required fields"); // Alert user in case of invalid form.
        if(!validateEmail(details["email"])) return alert("Please enter a valid email address"); // validate email
        return true;
    }

    return (
    <div className='sm:m-14 flex flex-col gap-6'>
        <div className=''>Checkout</div>
        <h1 className='md:text-3xl sm:text-2xl'>Billing Details</h1>
        <div className='flex flex-col sm:flex-row justify-between '>
            <form action="" className='flex flex-col gap-3 w-2/5' ref={formRef}>
                <div className='flex flex-col'>
                    <label htmlFor="first-name">First Name</label>
                    <input className='bg-gray-100 p-3 outline-none rounded-sm' type="text" name='first-name' id='first-name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="company-name">Company Name</label>
                    <input className='bg-gray-100 p-3 outline-none rounded-sm' type="text" name='company-name' id='company-name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="street-address">Street Address</label>
                    <input className='bg-gray-100 p-3 outline-none rounded-sm' type="text" name='street-address' id='street-address' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="optional-address">Apartment, floor, etc. (optional)</label>
                    <input className='bg-gray-100 p-3 outline-none rounded-sm' type="text" name='optional-address' id='optional-address' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="town">Town/City</label>
                    <input className='bg-gray-100 p-3 outline-none rounded-sm' type="text" name='town' id='town' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone-number">Phone Number</label>
                    <input className='bg-gray-100 p-3 outline-none rounded-sm' type="text" name='phone-number' id='phone-number' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email Address</label>
                    <input className='bg-gray-100 p-3 outline-none rounded-sm' type="text" name='email' id='email' />
                </div>
                <div className='flex flex-row gap-2'>
                    <input type="checkbox" name='information-saver' id='information-saver'/>
                    <label htmlFor="information-saver">Save this information for faster check-out next time</label>
                </div>
            </form>
            <div className='checkout flex flex-col gap-5 w-2/5'>
                <div className='your-order flex flex-col gap-6 max-h-[280px] overflow-y-auto border-t border-b border-gray-300 pt-3 pb-3'>
                    {orderItems.map(item => (
                        <OrderProduct key={item.id} title={item.title} image={item.imageUrl} price={item.price} quantity={item.quantity}/>
                    ))}
                </div>
                <div className='flex flex-row justify-between border-b-1 border-gray-600 pb-3'>
                    <span>Subtotal:</span>
                    <span>${totalPrice}</span>
                </div>
                <div className='flex flex-row justify-between border-b-1 border-gray-600 pb-3'>
                    <span>shipping:</span>
                    <span>{shippingFee === 0 ? "Free" : `$${shippingFee}`}</span>
                </div>
                <div className='flex flex-row justify-between pb-3'>
                    <span>Total:</span>
                    <span>${parseFloat(totalPrice + shippingFee).toFixed(2)}</span>
                </div>
                <div className='flex flex-row justify-between pb-3'>
                    <div className='flex flex-row gap-3 items-center'>
                        <input type="radio" id='bank' name='payment-method' checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")}/>
                        <label htmlFor="bank">Bank</label>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Image 
                            src="/bkash.png"
                            alt="bkash"
                            width={50}
                            height={50}
                            className='object-contain'
                        />
                        <Image 
                            src="/visa.png"
                            alt="visa"
                            width={50}
                            height={50}
                            className='object-contain'
                        />
                        <Image 
                            src="/mastercard.png"
                            alt="mastercard"
                            width={50}
                            height={50}
                            className='object-contain'
                        />
                        <Image 
                            src="/nagad.png"
                            alt="nagad"
                            width={50}
                            height={50}
                            className='object-contain'
                        />
                    </div>
                </div>
                <div className='flex flex-row gap-3 pb-3 items-center'>
                    <input type="radio" id='cod' name='payment-method' checked={paymentMethod === "cashOnDelivery"} onChange={() => setPaymentMethod("cashOnDelivery")}/>
                    <label htmlFor="cod">Cash of delivery</label>
                </div>
                <div className='flex flex-row justify-between gap-4 items-center'>
                    <input type="text" placeholder='Coupon Code' className='flex-2 h-full border-1 border-black rounded-sm outline-none px-3' />
                    <button className='text-white p-3 rounded-sm flex-1 bg-red-500 cursor-pointer'>Apply Coupon</button>
                </div>
                <button className='w-1/3 text-white p-3 rounded-sm bg-red-500 cursor-pointer' onClick={placeOrder}>Place Order</button>

            </div>
        </div>
    </div>
    )
}

export default Checkout
