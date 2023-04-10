import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/Fa'
const Layout = ({ children, currentPage = "" }) => {
    return (
        <div className="w-full relative text-white">
            <div className="h-screen w-[250px] bg-gray-700 fixed">
                <div className="flex flex-col mt-3">
                    <Link to="/" className='text-center text-4xl font-extrabold text-red-600 underline'>RandoStore</Link>
                    <div className="flex flex-col mt-20 gap-y-6 text-xl px-4">
                        <Link className='underline' to="/add-items">Put Items up for Sale</Link>
                        <Link className='underline' to="/items">Browse our Items!</Link>
                        <Link className='underline' to="/checkout">Check out</Link>
                        <Link className='underline invisible' to="/add-items/:id">Put Items up for Sale</Link>
                    </div>
                </div>
            </div>
            <div className="layout-screen flex flex-col absolute left-[250px]">
                <div className=" flex items-center justify-between layout-screen px-20 h-16 bg-gray-900 fixed z-50">
                    <h1 className='text-2xl font-bold text-center text-red-600'>{currentPage}</h1>
                    <Link className='text-4xl' to="/checkout"> <FaShoppingCart /> </Link>
                </div>
                <div className="mt-16 text-black">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout