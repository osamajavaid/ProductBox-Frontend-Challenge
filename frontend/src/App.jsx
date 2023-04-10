import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Add_Items from './Pages/Add_Items'
import Checkout from './Pages/Checkout'
import Items from './Pages/Items'
import Update_Items from './Pages/Update_Item'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add-items' element={<Add_Items />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/items' element={<Items />}></Route>
      <Route path='/add-items/:id' element={<Update_Items />}></Route>
    </Routes>
  )
}

export default App
