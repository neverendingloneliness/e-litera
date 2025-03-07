import { useUserQuery } from '@/store/slice/auth.service'
import React from 'react'

function Profile() {
  const {data : user} = useUserQuery()
  
    return (
    <div className='flex'>
        <div className='hidden lg:block w-[18%] '>
        </div>
        <div className='flex flex-col'>
            <p>User ID : {user?.id}</p>
            <p>Username : {user?.name}</p>
        </div>
    </div>
  )
}

export default Profile