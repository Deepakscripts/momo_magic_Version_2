import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/client/Home'
import Navbar from '@/components/client/Navbar'
import Footer from '@/components/client/Footer'
import Menu from '@/pages/client/Menu'
import MyCart from '@/pages/client/MyCart'
import MyOrder from '@/pages/client/MyOrder'
import ScrollToTop from '@/components/client/ScrollToTop'
import FloatingCartButton from '@/components/client/FloatingCartButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/mycart' element={<MyCart/>} />
        <Route path='/myorder' element={<MyOrder/>} />
      </Routes>
      <FloatingCartButton />
      <Footer/>
    </>
  )
}

export default App
