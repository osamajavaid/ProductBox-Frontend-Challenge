import React from 'react'
import Layout from '../Layout/Layout'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';


const Add_Items = () => {
    return (
        <Layout currentPage="Add Items Page">
            <h1 className='text-2xl font-bold text-center mt-10'>Add item for sale</h1>
            <div className="flex items-center justify-center mt-2">

                <Formik
                    initialValues={{
                        img: "",
                        name: '',
                        price: ''
                    }}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)

                        axios.post("http://localhost:3000/items/", values)
                            .then((res) => {
                                alert("Record added Successfully")
                            }).catch(err => {
                                alert("failed to add!")
                            })

                        resetForm({
                            img: '',
                            name: '',
                            price: '',
                        });
                    }}
                >
                    {({ errors, touched, setFieldValue, values }) =>

                    (<Form className='flex flex-col gap-6 w-1/2 bg-gray-600 p-4 rounded-2xl'>
                        <div className='flex flex-row items-center'>
                            <label className="w-[25%] mb-2 text-sm text-gray-300" htmlFor="main_picture">Image URL</label>
                            <div className='flex flex-col w-3/4'>
                                <Field placeholder="Enter image url" id="img" type="url" name='img' className="p-2 w-[100%] rounded-md border sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />

                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <label htmlFor="name" className="w-[25%] mb-2 text-sm text-gray-900 dark:text-gray-300">Name</label>
                            <div className='flex flex-col w-3/4 '>
                                <Field placeholder="Enter item name" type="text" name='name' id="name" className="p-2 w-[100%] rounded-md border sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />

                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <label htmlFor="price" className="w-[25%] mb-2 text-sm text-gray-900 dark:text-gray-300">Price</label>
                            <div className='w-3/4 flex flex-col'>
                                <Field placeholder="Enter item price" min='1' type="number" name='price' id="price" className="p-2 w-[100%] rounded-md border sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        <div className='flex flex-row justify-end gap-4'>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new item</button>
                        </div>
                    </Form>)}
                </Formik>
            </div>
        </Layout >
    )
}

export default Add_Items