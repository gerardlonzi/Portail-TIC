'use client'

import ScreenLoader from '@/modules/ScreenLoader'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'
import getDocValues from './fechApi/getUserDocData'
import { usePathname } from 'next/navigation'


function AuthLoader({children}:{children:React.ReactNode}){

    const {status,data}= useSession()
    console.log(status);
    const router = useRouter()
    const pathename  = usePathname()

    const dataUserDoc =  getDocValues()
    
    const onboardingIscompleted =  dataUserDoc?.onboardingCompleted
    console.log(onboardingIscompleted);
    
    
    
    const ShoulRedirectOnboarding = (()=>{
        return  !onboardingIscompleted && status === "authenticated" && pathename !== "/auth/onboarding"
    })

    const ShoulNotRedirectOnboarding = (()=>{
        return  onboardingIscompleted && status === "authenticated" && pathename === "/auth/onboarding"
    })

    if (status === "loading") {
        return <ScreenLoader />
    }
    if(status === "unauthenticated"){
        router.push('/auth/sign-in')
        
    }

    if(ShoulNotRedirectOnboarding()){
        router.push('/')
        return <ScreenLoader />
    }

    if(ShoulRedirectOnboarding()){
        router.push('/auth/onboarding')
        return <ScreenLoader />
    }

    return <>{children}</>
    }

export default AuthLoader