import React, { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5; // Adjust speed
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  if (progress >= 100) return null; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100">
      {/* Book container */}
      <div className="relative w-32 h-40 border-4 border-gray-800 rounded-md overflow-hidden shadow-lg">
         {/* Page lines to give texture */}
         <div className="w-full px-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-2 bg-gray-100 rounded my-3"></div>
              ))}
            </div>
        {/* Background book (outline) */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Filling effect */}
        <div
          className="absolute bottom-0 left-0 w-full bg-blue-500 transition-all duration-500"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
