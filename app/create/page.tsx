'use client'

import React from 'react'

import { PiVideoFill } from "react-icons/pi";
import { BiSolidImageAdd, BiSolidPencil } from "react-icons/bi"
import CreatePost from '@/components/CreatePost'

import AvatarPushProfile from '@/components/AvatarPushProfile'
import Navbar from '@/components/navbar';
import Container from '@/components/container';

const page = () => {
  return (
    <Container>
        <Navbar />
        <div className='flex absolute top-72 left-[27rem] flex-col w-1/2'>
            <div className='flex py-10 px-5   gap-5 bg-[#151515] rounded-xl'>
               <AvatarPushProfile />
              <div className='w-full space-y-10'>
                <CreatePost>
                  <input autoComplete='off' className="placeholder:italic dark:placeholder:text-[#414141]  block  w-full border border-black rounded-full dark:border-[#3b3b3b] bg-white dark:bg-[#232323] py-2 px-3 shadow-sm focus:outline-none sm:text-sm" placeholder="What happening..." type="text" name="search" />

                </CreatePost>
                <div className='flex justify-center gap-10'>
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


          </Container>
  )
}

export default page