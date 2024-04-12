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
import {  useSession } from 'next-auth/react'
import CreatePostForm from '@/modules/form/createPostForm'
import AvatarPushProfile from './AvatarPushProfile'
  
const CreatePost = ({children}:{children:React.ReactNode}) => {

    const { data, status } = useSession()
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
                <AvatarPushProfile />
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