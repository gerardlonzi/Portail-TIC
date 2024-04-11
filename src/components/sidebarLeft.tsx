'use client'
import Link from 'next/link'
import React, { useMemo } from 'react'
import {Home ,ShoppingBag,History,SquarePlay,Users} from 'lucide-react';
import { MdOutlineGroupAdd } from "react-icons/md"
import { NavData } from '@/modules/constants/navLinkConstant';
import ActiveLinks from './ActiveLinks';

const SidebarLeft = () => {
   

    return (
        <div className='w-[40%] bg-[#151515] rounded-xl py-10 pl-10'>
            <aside className=' h-full space-y-10 '>
               
                <div className='space-y-8'>
                <div>
                    <p>Menu</p>
                </div>
                {
                        NavData?.map((el,index)=>(
                            <ActiveLinks key={index} href={el.path}>
                                    <span className='w-6 h-6'>{el.icons}</span><span>{el.name}</span>
                            </ActiveLinks>
                        ))
                }
                
                    <Link className='flex gap-5 items-center text-[#5a4c4c]' href={"/"}></Link>
                    <Link  className='flex gap-5 text-[#949494] items-center' href={"/"}><span><SquarePlay className='w-6 h-6'/></span><span>Video(s)</span></Link>
                    <Link className='flex gap-5 text-[#949494] items-center' href={"/"}><span><ShoppingBag className='w-6 h-6'/></span><span>Shop</span></Link>
                    <Link className='flex gap-5 text-[#949494] items-center'  href={"/"}><span><History className='w-6 h-6'/></span><span>History</span></Link>
                    <Link  className='flex gap-5 text-[#949494] items-center' href={"/"}><span><Users className='w-6 h-6'/></span><span>Groupe(s)</span></Link>
                    <Link  className='flex gap-5 text-[#949494] items-center' href={"/"}><span><MdOutlineGroupAdd className='w-6 h-6'/></span><span>Suggestions</span></Link>

                    

                </div>
                <div>
                    <p>Trends for you</p>
                </div>

            </aside>
        </div>
    )
}

export default SidebarLeft