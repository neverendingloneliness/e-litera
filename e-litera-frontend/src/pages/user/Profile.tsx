import { fadeInAnimationVariant, fadeInReverseAnimationVariant, fadeInWidthBorrowBookAnimationReverseVariant, scaleInProfileIcon } from '@/components/animation/variant'
import NavUser from '@/components/layout/nav-user'
import { useUserQuery } from '@/store/slice/auth.service'
import { motion } from 'framer-motion'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoBookSharp } from 'react-icons/io5'

function Profile() {
  const { data: user } = useUserQuery()

  return (
    <div className=''>
      <NavUser />
      <div className='flex flex-col  justify-center gap-10 min-h-screen px-32'>
        <div className='flex items-center gap-6'>
          <motion.div variants={scaleInProfileIcon} initial="initial" whileInView={"animate"}  viewport={{ once: false, }} className=' relative flex items-center justify-center'>
            <p  className='absolute text-4xl border-2 border-white text-white '>
              <FaUser />
            </p>
            <p>
              <IoBookSharp className='text-6xl ' />
            </p>
          </motion.div>
          <motion.p variants={fadeInReverseAnimationVariant} initial="initial" whileInView={"animate"}  viewport={{ once: false, }}  className='text-4xl font-semibold'>{user?.name}</motion.p>
        </div>
        <h1 className='font-bold'>
          About Me :
        </h1>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col'>
            <p className='font-bold'>Username</p>
            <p>{user?.name}</p>
          </div>
          <div className='flex flex-col'>
            <p className='font-bold'>Email</p>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile