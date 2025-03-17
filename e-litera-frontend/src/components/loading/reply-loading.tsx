import React from 'react'

const ReplyLoading = () => {
    return (
        <div className='mt-64 flex flex-col justify-center items-center'>
            <div className="relative w-16 h-16 rounded-full bg-purple-500/80">
                <div className="absolute left-0 bottom-0 w-16 h-16 rounded-full bg-purple-500 opacity-50 animate-slide"></div>
                <div className="absolute left-0 bottom-0 w-16 h-16 rounded-full bg-purple-500 opacity-100 animate-slide2"></div>

                <style>
                    {`
          @keyframes slide {
            0%, 20% { transform: translate(0, 0); }
            80%, 100% { transform: translate(15px, 15px); }
          }
          @keyframes slide2 {
            0%, 20% { transform: translate(0, 0); }
            80%, 100% { transform: translate(-15px, -15px); }
          }
          .animate-slide {
            animation: slide 1s infinite linear alternate;
          }
          .animate-slide2 {
            animation: slide2 1s infinite linear alternate;
          }
        `}
                </style>
            </div>
        </div>
    )
}

export default ReplyLoading