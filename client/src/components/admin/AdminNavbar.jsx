import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
        <Link to={'/admin'}>
        <h1 className='text-2xl font-semibold'> <span className='text-red-500'>M</span>ovieMania</h1>
      </Link>
    </div>
  )
}

export default AdminNavbar