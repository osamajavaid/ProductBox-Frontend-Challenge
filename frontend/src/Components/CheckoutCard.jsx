import React, { useState } from 'react'

const CheckoutCards = ({ data }) => {

    const RemoveItemHandler = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const updatedCartItems = cartItems.filter((item) => item.id !== data.id)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        window.location.reload() // Refresh the page
    }

    return (
        <div className="w-60 rounded-xl h-[300px]shadow bg-gray-800 z-0">

            <div className='m-4 relative overflow-hidden rounded-xl z-10'>
                <img className="w-full h-28 object-cover" src={data?.img} alt="product image" />
            </div>
            <div className="px-4 pb-5 flex flex-col gap-y-4">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-white">{data?.name}</h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">${data?.price}</span>
                    <a onClick={RemoveItemHandler} href="#" className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-2.5 text-center">Remove to cart</a>
                </div>
            </div>
        </div >
    )
}

export default CheckoutCards