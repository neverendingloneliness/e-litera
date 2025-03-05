import { fadeInAnimationVariant } from '@/components/animation/variant'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'


const About = () => {
    

    const x = useMotionValue(0)
    const y = useMotionValue(0)
  
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)
  
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18.5deg", "-18.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18.5deg", "18.5deg"])
  
    const handleMouse = (e:any) => {
      const rect = e.target.getBoundingClientRect()
  
      const width = rect.width
      const height = rect.height
  
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
  
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
  
      x.set(xPct)
      y.set(yPct)
    }
  
    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }


  return (
    <div className='min-h-screen gap-16 items-center flex flex-row-reverse justify-center '>
        <div className='flex gap-5 justify-center flex-col'>
            <motion.h1  variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false, }}   className='text-5xl font-bold flex gap-5 items-center'>About <div className='flex items-center gap-2'>
                <span className='bg-gradient-to-t from-violet-500 px-2 rounded-md to-purple-700 font-bold text-white'>
                E
                </span>
                <span className='text-purple-800 font-bold'>-</span>
                <span className='font-semibold'>Litera</span>
              </div>
            </motion.h1>
            <motion.p variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false, }}  className='w-[24em] text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim repudiandae porro ipsa quasi exercitationem cupiditate reiciendis debitis iusto provident illum animi, distinctio ex inventore assumenda corporis consequuntur impedit earum officia!</motion.p>
        </div>

        <motion.div className='relative' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} style={{
          rotateX,
          rotateY,
          transformStyle:"preserve-3d",
          }}>
            <img src="/assets/landingAssets/About.png" width={500} alt="img" style={{transform:"translateZ(75px)", transformStyle:"preserve-3d",}}  />
            <div className='absolute inset-4 grid place-content-center rounded-xl bg-purple-200 shadow-lg' style={{
                transform: "translateZ(0)",
              }}/>
        </motion.div >
    </div>
  )
}

export default About