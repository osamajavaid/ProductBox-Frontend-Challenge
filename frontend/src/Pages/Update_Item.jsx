import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update_Items = () => {
    const [data, setData] = useState({});

    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:3000/items/${id}`)
            .then(({ data }) => {
                setData(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])
    return (
        <Layout currentPage="Add Items Page">
            <h1 className='text-2xl font-bold text-center mt-10'>Update this item</h1>
            <div className="flex items-center justify-center mt-2">

                <Formik
                    enableReinitialize
                    initialValues={{
                        img: data.img || "",
                        name: data.name || "",
                        price: data.price || ""
                    }}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                        const obj = {
                            id: data.id,
                            img: values.img,
                            name: values.name,
                            price: values.price
                        }
                        const formData = new FormData()
                        formData.append('id', data?.id);
                        formData.append('img', values.img);
                        formData.append('name', values.name);
                        formData.append('price', values.price);
                        console.log(formData)

                        axios.put(`http://localhost:3000/items/${data?.id}`, obj)
                            .then((res) => {
                                alert("Record Updated Successfully")
                                setData("")
                            }).catch(err => {
                                alert("failed to update!")
                            });
                    }}
                >
                    {({ errors, touched, setFieldValue, values }) =>

                    (<Form className='flex flex-col gap-6 w-1/2 bg-gray-600 p-4 rounded-2xl'>
                        <div className='flex flex-row items-center'>
                            <label className="w-[25%] mb-2 text-sm text-gray-300" htmlFor="main_picture">Image URL</label>
                            <div className='flex flex-col w-3/4'>
                                <Field id="img" type="text" name='img' className="p-2 w-[100%] rounded-md border sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />

                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <label htmlFor="name" className="w-[25%] mb-2 text-sm text-gray-900 dark:text-gray-300">Name</label>
                            <div className='flex flex-col w-3/4 '>
                                <Field type="text" name='name' id="name" className="p-2 w-[100%] rounded-md border sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />

                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <label htmlFor="price" className="w-[25%] mb-2 text-sm text-gray-900 dark:text-gray-300">Price</label>
                            <div className='w-3/4 flex flex-col'>
                                <Field type="number" min='1' name='price' id="price" className="p-2 w-[100%] rounded-md border sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        <div className='flex flex-row justify-end gap-4'>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new item</button>
                        </div>
                    </Form>)}

                </Formik>
            </div>
        </Layout >
    )
}

export default Update_Items