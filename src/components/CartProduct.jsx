import Link from 'next/link'

import React, { useState } from 'react'
import Image from 'next/image';

export default function CartProduct({ id, title, image, quantity, price, deleteHandle, changeQuantityHandle }) {
    const [quantityState, setQuantity] = useState(quantity);

    const quantityChangeHanlde = (e) => {
        const value = e.target.value;
        setQuantity(value);
        changeQuantityHandle(id, value);
    }

       
    return (
    <div className="flex flex-row justify-between items-center p-4 py-7 ring-black/5 ring-1 rounded">
        <Link href="/product/1">
            <div className='product flex flex-row gap-4 items-center justify-center w-60 text-center cursor-pointer rounded-sm p-1 hover:bg-gray-100'>
                <div className='image relative w-20 h-20'>
                    <Image 
                        alt={title}
                        src={image}
                        fill
                        className="object-contain p-2"
                    />
                </div>
                <span className='title'>{title}</span>
            </div>
        </Link>
        <div className='price w-60 text-center'>$<span>{price}</span></div>
        <div className='qunatity w-60 text-center'>
            <input type="number" className='w-16 text-center outline rounded' defaultValue={quantity} min={1} onChange={quantityChangeHanlde}/>
        </div>
        <div className="subtotal w-60 text-center">$<span>{parseFloat(quantityState * price).toFixed(2)}</span></div>
        <button className="delete w-15 text-center bg-red-500 rounded text-white cursor-pointer font-medium" onClick={() => deleteHandle(id)}>Delete</button>
    </div>
  )
}