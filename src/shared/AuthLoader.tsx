'use client'

import ScreenLoader from '@/modules/ScreenLoader'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'
import getDocValues from './isomboardigCompleted'
import { usePathname } from 'next/navigation'


function AuthLoader({children}:{children:React.ReactNode}){

    const {status,data}= useSession()
    console.log(status);
    const router = useRouter()
    const pathename  = usePathname()
    const onboardingIscompleted =  getDocValues()
    console.log(onboardingIscompleted);
    
    
    
    const ShoulRedirectOnboarding = (()=>{
        return status === "authenticated" && !onboardingIscompleted && pathename !== "/onboarding"
    })

    const ShoulNotRedirectOnboarding = (()=>{
        return status === "authenticated" && onboardingIscompleted && pathename === "/onboarding"
    })

    if (status === "loading") {
        return <ScreenLoader />
    }

    if(ShoulNotRedirectOnboarding()){
        router.push('/')
        return <ScreenLoader />
    }

    if(ShoulRedirectOnboarding()){
        router.push('/onboarding')
        return <ScreenLoader />
    }

    return <>{children}</>
    }

export default AuthLoader