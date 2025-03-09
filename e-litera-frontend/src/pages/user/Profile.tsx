import NavUser from '@/components/layout/nav-user'
import { useUserQuery } from '@/store/slice/auth.service'
import React from 'react'
import { FaUser } from 'react-icons/fa'

function Profile() {
  const { data: user } = useUserQuery()

  return (
    <div className=''>
      <NavUser />
      <div className='flex flex-col items-center justify-center gap-5 min-h-screen px-32'>
        <div className='flex items-center gap-6'>
          <FaUser className='text-4xl' />
          <p className='text-4xl'>{user?.name}</p>
        </div>
        <div className=''>
          <p>Email</p>
        </div>
      </div>
    </div>
  )
}

export default Profile