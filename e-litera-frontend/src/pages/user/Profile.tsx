import { fadeInAnimationVariant, fadeInReverseAnimationVariant, fadeInWidthBorrowBookAnimationReverseVariant, scaleInProfileIcon } from '@/components/animation/variant'
import NavUser from '@/components/layout/nav-user'
import { Button } from '@/components/ui/button'
import { useLogoutMutation, useUserQuery } from '@/store/slice/auth.service'
import { motion } from 'framer-motion'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoBookSharp } from 'react-icons/io5'
import { RiLogoutBoxLine } from 'react-icons/ri'

function Profile() {
  const { data: user } = useUserQuery()
  const [logout] = useLogoutMutation()

  async function handleLogout() {
    try {
        await logout().unwrap()
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className=''>
      <NavUser />
      <div className='flex flex-col items-center  justify-center gap-10 min-h-screen px-32'>
        <div className='flex items-center gap-6'>
          <motion.div variants={scaleInProfileIcon} initial="initial" whileInView={"animate"} viewport={{ once: false, }} className=' relative flex items-center justify-center'>
            <p className='absolute text-4xl border-2 border-white text-white '>
              <FaUser />
            </p>
            <p>
              <IoBookSharp className='text-6xl ' />
            </p>
          </motion.div>
          <motion.p variants={fadeInReverseAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }} className='text-4xl font-semibold'>{user?.name}</motion.p>
        </div>
        <h1 className='text-xl font-bold mt-10 text-gray-700'>
          About Me
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg rounded-xl bg-white p-6 shadow-md">
          <div className="flex flex-col">
            <p className="font-bold text-gray-600">Username:</p>
            <p className="text-gray-800">{user?.name || 'Not Available'}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-600">Email:</p>
            <p className="text-gray-800">{user?.email || 'Not Available'}</p>
          </div>
        </div>
        <Button className='flex font-semibold bg-purple-600' onClick={() => handleLogout()}>
          <RiLogoutBoxLine />
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Profile