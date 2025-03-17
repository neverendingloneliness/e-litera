import NavUser from '@/components/layout/nav-user'
import { motion } from 'framer-motion'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <NavUser />
      <div className='min-h-screen gap-2 flex flex-col justify-center items-center' >
        <motion.h1 className='text-7xl font-bold ' >404</motion.h1>
        <p className='text-3xl font-semibold' >NOT FOUND</p>
      </div>
    </div>
  )
}

export default NotFound