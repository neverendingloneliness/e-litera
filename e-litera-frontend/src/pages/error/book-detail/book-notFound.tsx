import { fadeInAnimationVariant, fadeInReverseAnimationVariant } from '@/components/animation/variant';
import NavUser from '@/components/layout/nav-user'
import { motion } from 'framer-motion';
import React from 'react'
import { ImCross } from "react-icons/im";

const BookNotFound = () => {
  return (
    <div>
      <NavUser />
      <div className="flex flex-col gap-5  items-center justify-center min-h-screen bg-white ">
        <motion.h1 variants={fadeInReverseAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false, }} className='text-xl font-bold'>No Book Found</motion.h1>
        <motion.div variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false, }} className="relative w-32 h-40 border-4 border-gray-800 rounded-md shadow-lg overflow-hidden ">
          {/* Background Book */}
          <div className="absolute inset-0 bg-purple-500" />
          {/* Textures */}
          <div className="absolute inset-0 flex flex-col justify-center z-30 p-3 ">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-2 translate-y-5   bg-white rounded my-1 "></div>
            ))}
          </div>
          <div className="absolute inset-0 animate-shake  flex items-center -mt-20 justify-center z-40">
            <ImCross className="text-4xl" />
          </div>
          <div className="absolute inset-0 bg-white z-30  h-1/2 " />
        </motion.div>
      </div>
    </div>
  )
}

export default BookNotFound