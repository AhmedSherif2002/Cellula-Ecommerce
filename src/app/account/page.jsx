"use client"

import React, { useState } from 'react'

export default function AccountPage() {
    const [section, setSection] = useState("profile");
    const sectionChangeHandler = (e) => {
        const currentSection = e.target.dataset.section;
        setSection(currentSection);
    }

    return (
        <div className='flex flex-col gap-8 m-12 lg:mx-25'>
            <div className='flex flex-row justify-between items-center'>
                <div>Account</div>
                <div>Welcome! <span className='' style={{color: "#DB4444"}}>Ahmed</span></div>
            </div>
            <div className='flex flex-row w-4/5 justify-between'>
                <div className='left flex flex-col gap-6 w-fit sticky self-start top-0 w-1/3'>
                    <h1 className='text-xl font-semibold'>Manage My Account</h1>
                    <div className='ml-9'>
                        <ul className='flex flex-col gap-1'>
                            <li data-section="profile" className={`${section === "profile" ? "text-red-400" : "text-gray-500"} cursor-pointer hover:text-red-400`} onClick={sectionChangeHandler}>My Profile</li>
                            <li data-section="address-book" className={`${section === "address-book" ? "text-red-400" : "text-gray-500"} cursor-pointer hover:text-red-400`} onClick={sectionChangeHandler}>Address Book</li>
                            <li data-section="address-options" className={`${section === "address-options" ? "text-red-400" : "text-gray-500"} cursor-pointer hover:text-red-400`} onClick={sectionChangeHandler}>My Address Options</li>
                        </ul>
                    </div>
                    <h1 className='text-xl font-semibold'>My Orders</h1>
                    <div className='ml-9'>
                        <ul className='flex flex-col gap-1'>
                            <li data-section="returns" className={`${section === "returns" ? "text-red-400" : "text-gray-500"} cursor-pointer hover:text-red-400`} onClick={sectionChangeHandler}>My Returns</li>
                            <li data-section="cancellations" className={`${section === "cancellations" ? "text-red-400" : "text-gray-500"} cursor-pointer hover:text-red-400`} onClick={sectionChangeHandler}>My Cancellations</li>
                        </ul>
                    </div>
                    <h1 className='text-xl font-semibold'>My Wishlist</h1>
                </div>
                <form className='main-section flex flex-col w-2/3 gap-6'>
                    <h1 className='font-medium text-xl' style={{color: "#DB4444"}}>Edit Your Profile</h1>
                    <div className='name flex flex-row justify-between'>
                        <div className='flex flex-col gap-2'>
                            <label className='' htmlFor="">First Name</label>
                            <input className='bg-gray-100 p-3 rounded outline-none w-90' disabled placeholder='Ahmed' type="text" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='' htmlFor="">Last Name</label>
                            <input className='bg-gray-100 p-3 rounded outline-none w-90' disabled placeholder='Ahmed' type="text" />
                        </div>
                    </div>
                    <div className='mail-address flex flex-row justify-between'>
                        <div className='flex flex-col gap-2'>
                            <label className='' htmlFor="">Email</label>
                            <input className='bg-gray-100 p-3 rounded outline-none w-90' disabled placeholder='ahmed@gmail.com' type="text" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='' htmlFor="">Address</label>
                            <input className='bg-gray-100 p-3 rounded outline-none w-90' placeholder='abc street, cairo, Egypt' type="text" />
                        </div>
                    </div>
                    <div className='password flex flex-col gap-2'>
                        <label htmlFor="">Password Changes</label>
                        <input className='bg-gray-100 p-3 rounded outline-none' type="password" placeholder='Current Password' />
                        <input className='bg-gray-100 p-3 rounded outline-none' type="password" placeholder='New Password'/>
                        <input className='bg-gray-100 p-3 rounded outline-none' type="password" placeholder='Confirm New Password'/>
                    </div>
                    <div className='flex flex-row justify-end gap-6'>
                        <button className='cursor-pointer' onClick={(e)=> e.preventDefault()}>Cancel</button>
                        <button className='px-10 py-4 text-white rounded cursor-pointer' style={{backgroundColor: "#DB4444"}}>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
