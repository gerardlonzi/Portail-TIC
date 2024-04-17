'use client'

import React from 'react'
import { NavData } from '@/modules/constants/navLinkConstant';
import ActiveLinks from './ActiveLinks';
import { ScrollArea } from "@/components/ui/scroll-area"
import clsx from 'clsx';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const SidebarLeft = ({ animateSidebarLeft = false }: { animateSidebarLeft?: boolean }) => {


    return (
      
        <ScrollArea className={clsx(animateSidebarLeft ? "py-10 px-5" :  "w-[24%] py-10 px-10", '    border-r-2        sticky top-0 ')} >

            <aside className=' space-y-10  '>
                <div className='space-y-8'>
                    {
                        !animateSidebarLeft && 
                    <div>
                        <p>Menu</p>
                    </div>
                    }
                    {
                        NavData?.map((el, index) => (
                            <ActiveLinks key={index} href={el.path}>
                                {
                                    animateSidebarLeft ?
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className='w-6 h-6'>{el.icons}</span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{el.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        :
                                        <>
                                            <span className='w-6 h-6'>{el.icons}</span><span>{el.name}</span>
                                        </>
                                }
                            </ActiveLinks>
                        ))
                    }
                </div>
                {
                        !animateSidebarLeft && 
                    <div>
                    <p>Trends for you</p>
                   
                    </div>
                    }

            </aside>

        </ScrollArea>
    )
}

export default SidebarLeft