import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='flex gap-5 justify-center m-8'>
        <Link to="/Homeuser">
            <button className='bg-red-600 border rounded mt-4 px-4 py-2 text-white shadow-md'>
                User Home Sector
            </button>
        </Link>

        <Link to="/Homeadmin">
            <button className='bg-green-600 border rounded mt-4 px-4 py-2 text-white shadow-sm'>
                Admin Home Sector
            </button>
        </Link>
    </div>
  )
}

export default Button