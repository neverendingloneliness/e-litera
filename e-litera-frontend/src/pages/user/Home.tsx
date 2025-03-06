import Sidebar from '@/components/layout/Sidebar'
import { useUserQuery } from '@/store/slice/auth.service'
import React from 'react'

const Home = () => {
    const { data: user } = useUserQuery()

    return (
      <div>

        <div className='hidden lg:block w-[18%] '>
            <Sidebar
             navigation1={'Home'}
             navigation2={'Collections'} 
             navigation3={'Chat'} />

        </div>

        <div>

        </div>
      </div>
    )
}

export default Home