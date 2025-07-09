import React from 'react'

const BlurCircle = ({top = "auto", bottom = "auto", left = "auto", right = "auto" }) => {
  return (
    <div className='absolute -z-50 size-58 aspect-square rounded-full bg-primary/30 blur-3xl' 
    style={{top: top, left: left, right:right, bottom:bottom}}
    ></div>
  )
}

export default BlurCircle