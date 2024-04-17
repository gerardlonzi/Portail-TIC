'use client'

import Link from 'next/link'
import React from 'react'
import { Bell } from 'lucide-react';
import { RiMessengerLine } from "react-icons/ri"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Search } from 'lucide-react';
import {
  Sun, Moon, Cloud,
  CreditCard,
  LogOut,
  Mail,
  Settings,
  User,
  UserPlus,
  Users,

} from 'lucide-react'
import {  BiSolidPencil } from "react-icons/bi"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuGroup,


} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'

import { signOut, useSession } from 'next-auth/react'
import AvatarPushProfile from './AvatarPushProfile';




const Navbar = () => {

  const { data, status } = useSession()

  const image = data?.user?.image
  const name = data?.user?.name



  const { setTheme } = useTheme()
  return (
    <div className='flex fixed w-full py-5 pr-16 bg-[#0b0b0b] z-40 top-0 items-center justify-between  '>
      <div className="flex gap-5 ">
        <Link className='w-10 h-10 p-2  bg-[#7976FF] rounded-full' href={"/"} >SC</Link>
     
        <div>
          <Popover>
            <PopoverTrigger>
              <label className="relative  w-full block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Search className="w-4 h-4" />
                </span>
                <input autoComplete='off' className="placeholder:italic dark:placeholder:text-[#414141]  block  w-full border-b border-b-black  dark:border-b-[#3b3b3b] bg-white dark:bg-[#0a0a0a] py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
              </label>
            </PopoverTrigger>
            <PopoverContent>
              <p>Aucun resultat desoler </p>
            </PopoverContent>
          </Popover>



        </div>
      </div>
      <div className='flex gap-9'>


        <div className='flex  items-center gap-8   '>
        <BiSolidPencil className=' w-8 h-8 rounded-full border p-1 hover:text-[#6a68ff]' />

          <Link href={"/"}><RiMessengerLine className='w-6 h-6 hover:text-[#6a68ff]' /></Link>
          <Popover>
            <PopoverTrigger>
              <div className='relative'>
                <Bell className="hover:text-[#6a68ff]"/>
                <div className='absolute right-0 -top-1'>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8987ff] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4b48ff]"></span>
                  </span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <p>Aucun notification  </p>
            </PopoverContent>
          </Popover>



        </div>
        <div className='flex items-center  gap-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>

              <div className='cursor-pointer  w-full flex items-center text-sm gap-2 font-semibold bg-[#7976FF] rounded-full p-1'>
                <Avatar>
                  <AvatarImage className='' src={image || "A"} />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <p>{name}</p>
                <IoMdArrowDropdown className='pr-1 w-5 h-5' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <AvatarPushProfile PrintTmage={false}>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </AvatarPushProfile>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span onClick={async()=> await signOut() }>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>



    </div>

  )
}

export default Navbar