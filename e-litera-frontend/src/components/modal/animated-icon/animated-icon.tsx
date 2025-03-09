import React from 'react'
import { FaQuestion } from 'react-icons/fa'

const AnimatedIconModal = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-zoom">
      <div className="relative w-32 h-32 rounded-md  overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-white"></div>
        
        <div className="absolute flex items-center justify-center w-full h-full">
          {/* Inner Circle */}
          <div className="absolute w-16 h-16 z-20 rounded-full border-2 border-purple-400"></div>
          {/* Outer Circle */}
          <div className="absolute w-28 h-28 z-0 rounded-full border-2 border-purple-400 opacity-80"></div>
          {/* Question Mark */}
          <FaQuestion className="text-2xl text-purple-400  z-30 animate-rotate" />
        </div>
      </div>
    </div>
  )
}

export default AnimatedIconModal
