import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className='flex justify-center flex-row-reverse items-center min-h-screen gap-16'>
      {/* img */}
        <div className=''>
            <img src="/assets/landingAssets/Hero.png" alt="img" width={500} className=''/>
        </div>

      {/* Content of The Text */}
        <div className='flex flex-col gap-10'>
            <h1 className='text-5xl font-semibold flex gap-5'>Welcome To 
              <div className='flex items-center gap-2'>
                <span className='bg-gradient-to-t from-violet-500 px-2 rounded-md to-purple-700 font-bold text-white'>
                E
                </span>
                <span className='text-purple-800 font-bold'>-</span>
                <span className='font-semibold'>Litera</span>
              </div>
            </h1>
            <p className='w-[30rem] text-lg'>Discover a world of knowledge at your <span className='font-semibold text-purple-600'>fingertips</span>. Explore, read, and grow with our vast collection of <span className='font-semibold text-purple-600'>books</span></p>
            <p className='w-[30rem] text-lg'>Whether you're a student, researcher, or just a curious mind, <span className='font-semibold text-purple-600'>E-Litera</span> has something for you.</p>
            <div className='flex gap-10 items-center'>
              <Link to={'/login'}>
                    <Button className='bg-purple-600 hover:bg-white hover:text-purple-600 hover:border-purple-600 border-2'>
                          Explore Now
                    </Button>
              </Link>
              <Link to={'/'}>
                    <Button className='bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'>
                          Our Customer Service
                    </Button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
