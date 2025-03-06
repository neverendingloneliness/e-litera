import { fadeInAnimationVariant, fadeInReverseAnimationVariant, fadeInWidthAnimationVariant } from '@/components/animation/variant'
import { UPCOMINGBOOK } from '@/constant/landing/LANDINGCONSTANT'
import { motion } from 'framer-motion'
import React from 'react'

const Upcoming = () => {
  return (
    <div className='flex flex-col justify-center items-center px-32 min-h-screen gap-16'>
      <div className='flex flex-col gap-5'>
        <motion.h1  variants={fadeInReverseAnimationVariant} initial="initial" whileInView={"animate"}  viewport={{once:false, }} className='text-4xl font-bold'>Our Upcoming Collection!</motion.h1>
        <motion.p  variants={fadeInReverseAnimationVariant} initial="initial" whileInView={"animate"}  viewport={{once:false, }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</motion.p>
      </div>

      <div className='grid grid-cols-3 gap-20   '>
          {UPCOMINGBOOK.img.map((img, index) => (
            <motion.div key={index} className='relative z-20' variants={fadeInWidthAnimationVariant} initial="initial" whileInView={"animate"}  viewport={{once:false, }} custom={index}>
                <img  src={img.image} alt="" width={300} className='z-20 relative'/>
                <div className='absolute inset-y-[-5%] w-[120%] translate-y-12  grid place-content-center  z-10  bg-purple-300 shadow-lg'></div>
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default Upcoming