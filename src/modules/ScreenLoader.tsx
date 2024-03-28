import Image from 'next/image'
import React from 'react'

const ScreenLoader = () => {
  return (
    <div className='w-screen  h-screen bg-white flex items-center justify-center'>
        <Image alt='spinner' className='animate-spin grayscale' width={100} height={100} src={"/imgs/spin.png"} />
    </div>
  )
}

export default ScreenLoader