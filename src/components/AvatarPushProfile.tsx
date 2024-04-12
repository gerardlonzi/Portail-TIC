import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import {  useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const AvatarPushProfile = ({ PrintTmage = true, children }: { PrintTmage?: boolean, children?: React.ReactNode }) => {


    const { data, status } = useSession()
    const image = data?.user?.image
    const name = data?.user?.name
    const router = useRouter()


    return (
        <Link onClick={()=> router.refresh()} href="[profile]" as={`${name?.replace(/\s+/g, '')}`}>
            {
                PrintTmage &&
                    <Avatar>
                        <AvatarImage className='' src={image || "A"} />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>  
            }
              {children}
        </Link>
    )
}

export default AvatarPushProfile