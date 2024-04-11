'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CreatePostForm from '@/modules/form/createPostForm'
  
const CreatePost = ({children}:{children:React.ReactNode}) => {

    const { data, status } = useSession()

    const image = data?.user?.image
    const name = data?.user?.name
  
  return (
    <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>Creer une publication</DialogTitle>
        <DialogDescription>
        <div className='cursor-pointer mt-5  w-full flex items-center text-sm gap-2 font-semibold '>
                <Avatar>
                  <AvatarImage className='' src={image || "A"} />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <p>{name}</p>
        </div>
        </DialogDescription>
      </DialogHeader>
        <CreatePostForm name={name || ''} />
      
    </DialogContent>
  </Dialog>
  )
}

export default CreatePost