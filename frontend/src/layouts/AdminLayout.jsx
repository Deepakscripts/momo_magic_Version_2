import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'

export default function AdminLayout() {
  return (
    <SidebarProvider defaultOpen>
      <Outlet />
      <Toaster />
    </SidebarProvider>
  )
}
