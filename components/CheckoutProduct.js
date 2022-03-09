import React from 'react'
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter";
import Image from 'next/image'

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime }) {
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} alt="" height={200} width={200} objectFit="contain" />
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {
                        Array(rating).fill().map((_, i) => (
                            <StarIcon key={i} className='h-5 text-yellow-500' />
                        ))
                    }

                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <div className='mb-5'>
                    <Currency quantity={price} currency="GBP" />
                </div>

                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img className='w-12' loading='lazy' src="https://links.papareact.com/fdw" alt="" />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct