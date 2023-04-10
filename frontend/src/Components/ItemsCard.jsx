import axios from 'axios'
import React, { useState } from 'react'
import { RiEditFill, RiDeleteBin6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const ItemsCard = ({ data, DeleteCard }) => {

    const addItemHandler = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const itemExists = cartItems.some(item => item.id === data.id)

        if (itemExists) {
            alert('Item already in cart')
        } else {
            cartItems.push(data)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            alert('Item added to cart')
        }
    }


    return (
        <div className="w-60 rounded-xl h-[300px]shadow bg-gray-800 z-0">
            <div className="flex items-center justify-between px-2 py-4">
                <Link to={`/add-items/${data.id}`} className='bg-gray-600 h-6 w-8 text-xl flex items-center justify-center rounded-full text-green-600'>
                    <RiEditFill />
                </Link>
                <span onClick={() => DeleteCard(data?.id)} className='bg-gray-600 h-6 w-8 text-xl flex items-center justify-center rounded-full text-red-600'>
                    <RiDeleteBin6Fill />
                </span>
            </div>
            <div className='m-4 relative overflow-hidden rounded-xl z-10'>
                <img className="w-full h-28 object-cover" src={data?.img} alt="product image" />
            </div>
            <div className="px-4 pb-5 flex flex-col gap-y-4">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-white">{data?.name}</h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">${data?.price}</span>
                    <a onClick={addItemHandler} href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                </div>
            </div>
        </div >
    )
}

export default ItemsCard