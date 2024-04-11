
import React from 'react'

const ScreenLoader = () => {
  return (
    <div className='w-screen  h-screen dark:bg-black bg-white flex items-center justify-center'>
        <div className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <svg className='fill-[#340bff] animate-spin sm:w-10 h-8 w-8 sm:h-10 lg:w-12 lg:h-12' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_13_6)">
                        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M50 85C54.5963 85 59.1475 84.0947 63.3939 82.3358C67.6403 80.5769 71.4987 77.9988 74.7487 74.7487C77.9988 71.4987 80.5769 67.6403 82.3358 63.3939C84.0947 59.1475 85 54.5963 85 50C85 45.4037 84.0947 40.8525 82.3358 36.6061C80.5769 32.3597 77.9988 28.5013 74.7487 25.2513C71.4987 22.0012 67.6403 19.4231 63.3939 17.6642C59.1475 15.9053 54.5963 15 50 15C40.7174 15 31.815 18.6875 25.2513 25.2513C18.6875 31.815 15 40.7174 15 50C15 59.2826 18.6875 68.185 25.2513 74.7487C31.815 81.3125 40.7174 85 50 85ZM50 100C77.615 100 100 77.615 100 50C100 22.385 77.615 0 50 0C22.385 0 0 22.385 0 50C0 77.615 22.385 100 50 100Z"  />
                        <path d="M0 50C0 22.385 22.385 0 50 0V15C40.7174 15 31.815 18.6875 25.2513 25.2513C18.6875 31.815 15 40.7174 15 50H0Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_13_6">
                            <rect width="100" height="100" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
    </div>
  )
}

export default ScreenLoader