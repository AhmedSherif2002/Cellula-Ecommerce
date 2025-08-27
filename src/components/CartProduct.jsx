import Link from 'next/link'

import React from 'react'

export default function CartProduct() {
  return (
    <div className="flex flex-row justify-between items-center p-4 py-7 ring-black/5 ring-1 rounded">
        <Link href="/product/1">
            <div className='product flex flex-row gap-4 items-center justify-center w-60 text-center cursor-pointer'>
                <div className='image'>
                    Img Here
                </div>
                <span className='title'>Product Title</span>
            </div>
        </Link>
        <div className='price w-60 text-center'>$<span>300</span></div>
        <div className='qunatity w-60 text-center'>
            <input type="number" className='w-16 text-center outline rounded' defaultValue={1} min={1} />
        </div>
        <div className="subtotal w-60 text-center">$<span>300</span></div>
        <button className="delete w-15 text-center bg-red-500 rounded text-white cursor-pointer font-medium">Delete</button>
    </div>
  )
}