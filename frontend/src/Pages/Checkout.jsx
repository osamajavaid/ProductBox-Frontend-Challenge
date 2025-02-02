import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import ItemsCard from '../Components/ItemsCard'
import CheckoutCard from '../Components/CheckoutCard';

const Checkout = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            const items = JSON.parse(cartItems);
            setCart(items)
        }
    }, [])
    return (
        <Layout currentPage="Checkout Page">
            {!cart.length == 0 ?
                <div className="flex flex-wrap gap-6 items-center justify-center my-10">
                    {cart.map((data, key) => <CheckoutCard key={key} data={data} />
                    )}
                </div>
                :
                <div className="flex flex-wrap gap-6 items-center justify-center my-10 text-6xl text-black">
                    <h1> your cart is empty!</h1>
                </div>
            }
        </Layout>
    )
}

export default Checkout