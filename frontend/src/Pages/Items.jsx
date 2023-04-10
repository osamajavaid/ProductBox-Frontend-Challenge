import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import ItemsCard from '../Components/ItemsCard'
import axios from 'axios'

const Items = () => {
    const [isData, setIsData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/items/')
            .then(({ data }) => {
                setIsData(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])
    console.log(isData)

    const DeleteCard = (id) => {
        axios.delete(`http://localhost:3000/items/${id}`)
            .then((res) => {
                alert("Record Deleted Successfully")
                setIsData(isData.filter(item => item.id !== id)); // update state after deleting record

                // Remove item from localStorage
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
                const updatedCartItems = cartItems.filter((item) => item.id !== id)
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
            }).catch(err => {
                alert("failed to Deleted!")
            })
    }
    return (
        <Layout currentPage="All Items Page">

            <div className="flex flex-wrap gap-6 items-center justify-center my-10">
                {isData?.map((data, key) => <ItemsCard DeleteCard={DeleteCard} key={key} data={data} />)}
            </div>

        </Layout>
    )
}

export default Items