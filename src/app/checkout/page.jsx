"use client"

import OrderProduct from '@/components/OrderProduct';
import React, { useEffect, useState } from 'react'

function Checkout() {

    const [orderItems, setOrderItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const shippingFee = 50;

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setTotalPrice(cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0).toFixed(2));
        setOrderItems(cart);
    }, [])

    return (
    <div className='sm:m-14 flex flex-col gap-6'>
        <div className=''>Checkout</div>
        <h1 className='md:text-3xl sm:text-2xl'>Billing Details</h1>
        <div className='flex flex-col sm:flex-row justify-between '>
            <form action="" className='flex flex-col gap-3 w-2/5'>
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
                <div className='your-order flex flex-col gap-6 h-[280px] overflow-y-auto border-t border-b border-gray-300 pt-3 pb-3'>
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
                    <span>{shippingFee === 0 ? "Free" : shippingFee}</span>
                </div>
                <div className='flex flex-row justify-between pb-3'>
                    <span>Total:</span>
                    <span>{parseFloat(totalPrice + shippingFee).toFixed(2)}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Checkout
