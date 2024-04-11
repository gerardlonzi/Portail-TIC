
'use client'

import React, { useEffect } from 'react'


import LayoutSidebar from '@/components/LayoutSidebar'
import Navbar from '@/components/navbar'
import Container from '@/components/container'
import { signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PiVideoFill } from "react-icons/pi";
import { BiSolidImageAdd, BiSolidPencil } from "react-icons/bi"
import CreatePost from '@/components/CreatePost'




const Home = () => {
  const { data, status } = useSession()

  const image = data?.user?.image
  const name = data?.user?.name




  return (
    <div className=' w-full'>
      <Container>
        <Navbar />
        <LayoutSidebar>
          <div className='flex w-full flex-col'>
            <div className='flex py-3 px-5 gap-5 bg-[#151515] rounded-xl'>
              <Avatar>
                <AvatarImage className='' src={image || "A"} />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className='w-full space-y-3'>
                <CreatePost>
                  <input autoComplete='off' className="placeholder:italic dark:placeholder:text-[#414141]  block  w-full border border-black rounded-full dark:border-[#3b3b3b] bg-white dark:bg-[#232323] py-2 px-3 shadow-sm focus:outline-none sm:text-sm" placeholder="What happening..." type="text" name="search" />

                </CreatePost>
                <div className='flex justify-center gap-5'>
                  <CreatePost>
                    <div className='flex border cursor-pointer rounded-full space-x-2 items-center text-sm py-1 px-3 '>
                      <BiSolidImageAdd className='w-6 h-6 text-green-400' />
                      <span>Image</span>
                    </div>
                  </CreatePost>
                  <CreatePost>
                    <div className='flex border cursor-pointer rounded-full space-x-2 items-center text-sm py-1 px-3 '>
                      <PiVideoFill className='w-6 h-6 text-blue-500' />
                      <span>Videos</span>
                    </div>
                  </CreatePost>
                  <CreatePost>
                    <div className='flex cursor-pointer  border rounded-full space-x-2 items-center text-sm py-1 px-3 '>
                      <BiSolidPencil className='text-red-600 w-6 h-6' />
                      <span>Text</span>
                    </div>
                  </CreatePost>
                </div>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </Container>
    </div>
  )
}

export default Home



