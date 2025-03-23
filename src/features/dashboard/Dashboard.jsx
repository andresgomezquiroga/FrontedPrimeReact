import React from 'react'
import Sidebar from './components/Sidebar'
import MenuBar from './components/MenuBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='fixed w-full h-full flex'>
      <Sidebar />
      <div className='w-full h-full'>
            <MenuBar />
            <div className='p-4'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
