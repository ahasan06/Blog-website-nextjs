import React from 'react'

function RedCircles() {
  return (
    <div>
       <div className="absolute top-0 left-0 -translate-y-1/2  -translate-x-1/2 -z-10 w-40 h-40  bg-red-300  rounded-full"></div>
       <div className="absolute bottom-0 right-0 translate-y-1/2  translate-x-1/2 -z-10 w-40 h-40  bg-red-300  rounded-full"></div>
    </div>
  )
}

export default RedCircles
