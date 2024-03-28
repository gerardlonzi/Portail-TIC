'use client'

import ScreenLoader from '@/modules/ScreenLoader'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

function AuthLoader({children}:{children:React.ReactNode}){

    const {status}= useSession()
    console.log(status);
    

    if (status === "loading") {
            return <ScreenLoader />
    }

    return <>{children}</>
    }

export default AuthLoader