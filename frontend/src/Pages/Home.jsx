import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Layout currentPage="Home Page">
            <div className="flex items-center justify-center mt-32">
                <div className="w-3/4 h-44 bg-gray-800 flex flex-col gap-y-5 items-center justify-center text-black">
                    <h1 className='text-6xl font-bold'>RandoStore</h1>
                    <Link className='underline text-3xl' to='/items'>let shop!</Link>
                </div>
            </div>
        </Layout>

    )
}

export default Home