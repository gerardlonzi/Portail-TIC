
'use client'

import React, { useEffect } from 'react'
import { Ellipsis, Heart, Forward, MessageCircle, Dot  } from 'lucide-react';
import { FaHeart, FaBagShopping } from "react-icons/fa6"
import LayoutSidebar from '@/components/LayoutSidebar'
import Navbar from '@/components/navbar'
import Container from '@/components/container'
import AvatarPushProfile from '@/components/AvatarPushProfile'
import Image from 'next/image';




const Home = () => {
const Newdate:any = new Date().getMinutes()



  return (
    <div className=' w-full '>
      <Container>
        <Navbar />
        <LayoutSidebar>
         

         
          <div className='py-10 mx-20 border p-6  rounded-xl'>
            <div className='flex gap-4'>
              <AvatarPushProfile />
              <div className='w-full space-y-2'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-4'>
                    <p className='font-semibold'>Gerard Lonzi</p>
                    <button className='text-[#7775ff] flex'>< Dot className='text-' />Suivre</button>
                  </div>
                  <Ellipsis />
                </div>
                <div>
                  <p className='text-xs'>il y'a {Newdate} min </p>
                </div>
              </div>
            </div>
            <div className=' mt-6 space-y-8'>
              <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptates unde neque voluptas aliquam at necessitatibus! Quod amet beatae ducimus, fugit aliquam iure magnam, nesciunt dicta nisi rem, omnis a!</p>
              <Image src={'/imgs/9.jpg'} alt='post' width={500} height={100} className="w-full h-[37rem] object-cover" />
            </div>
            <div>
              <div className='flex justify-between mt-4'>
                <div className='flex items-center gap-2'>
                  <FaHeart className='text-red-700' /> 22k annie et une autre persomme 
                </div>
                <button className='underline'>20 commentaires</button>
              </div>
              <div className='flex justify-between gap-3 mt-8'>
                <button className='border py-3 w-full flex rounded-md  justify-center'>
                  <Heart />
                </button>
                <button className='border py-3 w-full flex rounded-md  justify-center'>
                  <MessageCircle />
                </button>
                <button className='border py-3 w-full flex rounded-md  justify-center'>
                  <Forward /> 14
                </button>
                <button className='border py-3 w-full flex rounded-md  justify-center'>
                  <FaBagShopping/>
                  </button>
              </div>
            </div>

          </div>
         
        </LayoutSidebar>
      </Container>
    </div>
  )
}

export default Home



