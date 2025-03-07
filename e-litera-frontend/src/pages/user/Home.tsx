import NavUser from '@/components/layout/nav-user'
import { useUserQuery } from '@/store/slice/auth.service'
import React from 'react'

const Home = () => {
    const { data: user } = useUserQuery()

    return (
      <div>
          <NavUser />
        <div>

        </div>
      </div>
    )
}

export default Home