'use client'

import ScreenLoader from '@/modules/ScreenLoader'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'


function AuthLoader({children}:{children:React.ReactNode}){

    const {status,data}= useSession()
    console.log(status);
    const router = useRouter()
    

    useEffect(() => {
        
        if (status === "authenticated") {
        
                router.push('/')
          
        }

    }, [status, router])

    if (status === "loading" || status === "authenticated" || data =='undefined') {
        return <ScreenLoader />
    }

    return <>{children}</>
    }

export default AuthLoader