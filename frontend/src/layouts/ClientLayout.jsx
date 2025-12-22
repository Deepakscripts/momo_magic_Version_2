import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/client/Navbar'
import Footer from '@/components/client/Footer'
import ScrollToTop from '@/components/client/ScrollToTop'
import FloatingCartButton from '@/components/client/FloatingCartButton'

export default function ClientLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <FloatingCartButton />
      <Footer />
    </>
  )
}
