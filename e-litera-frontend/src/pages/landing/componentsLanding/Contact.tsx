import { fadeInAnimationVariant, fandeInContactAnimationVariant } from '@/components/animation/variant'
import { CONTACTLIST } from '@/constant/landing/LANDINGCONSTANT'
import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen justify-center gap-10 items-center flex flex-col px-32'>
        <div   className='flex flex-col items-center gap-10'>
            <motion.h1 variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false }} className='text-4xl font-bold'>
                Contact 
            </motion.h1>
            <motion.p variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false }} className='w-[40rem] text-center'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ipsa voluptas aliquid consectetur, dicta inventore.
            </motion.p>
        </div>

        <div className='grid grid-cols-3 gap-10'>
            {CONTACTLIST.map((contact, index) => (
                <motion.a  variants={fandeInContactAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false, }} custom={index} href={contact.linksosmed} target='_blank' key={index} 
                 className={`${index % 2 !== 1 ? 'bg-purple-400 text-white hover:bg-white hover:text-black border-2 border-purple-400' : 'bg-white border-2 border-purple-400 hover:bg-purple-400 hover:text-white'} font-semibold rounded-xl py-2 px-5 text-xl flex gap-5 items-center duration-300`}>
                    <p>{contact.icon}</p>
                    <p>{contact.namasosmed}</p>
                </motion.a>
            ))}
        </div>
    </div>
  )
}

export default Contact