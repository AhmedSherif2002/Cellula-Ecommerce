import React from 'react'
import Image from 'next/image'

function OrderProduct({ id, title, image, price, quantity }) {

    return (
    <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center'>
            <div className='image relative w-16 h-16'>
                <Image 
                    alt={title}
                    src={image}
                    fill
                    className="object-contain p-2"
                />
            </div>
            <div className='w-40 text-base'>{title}</div>
            <span className='ml-10 text-gray-600'>&#40;X {quantity}&#41;</span>
        </div>
        <div>${(price * quantity).toFixed(2)}</div>
    </div>
    )
}

export default OrderProduct
