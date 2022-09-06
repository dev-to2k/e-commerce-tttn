import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function Home() {
  return (
    <div className='home h-full absolute top-0 bottom-0 left-0 right-0 flex items-stretch'>
      <div className='sidebar w-2/12 bg-gray-50'>
        <Sidebar />
      </div>
      <div className='content w-10/12 bg-white px-4 overflow-y-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
