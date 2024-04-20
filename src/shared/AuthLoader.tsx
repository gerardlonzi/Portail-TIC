'use client'

import ScreenLoader from '@/modules/ScreenLoader'
import { useSession } from 'next-auth/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {getDocValues} from './fechApi/getUserDocData'
import { usePathname } from 'next/navigation'


const AuthLoader =  ({children}:{children:React.ReactNode}) =>{

    const {status,data}= useSession()
    console.log(status);
    const router = useRouter()
    const pathename  = usePathname()
    const [onboardingIscompleted, setOnboardingIscompleted] = useState<boolean | null>(null)

    useEffect(() => {
        const fetchDocValues = async () => {
            const docData = await getDocValues()
            setOnboardingIscompleted(docData?.onboardingCompleted)
        }
        fetchDocValues()
    }, [])
    console.log(onboardingIscompleted);
    
    
 useCallback(()=>{


    const ShoulRedirectOnboarding = (()=>{
        return  !onboardingIscompleted && status === "authenticated" && pathename !== "/auth/onboarding"
    })

    const ShoulNotRedirectOnboarding = (()=>{
        return  onboardingIscompleted && status === "authenticated" && pathename === "/auth/onboarding"
    })

    const ShoulNotRedirectSign_in = (()=>{
        return   status === "unauthenticated" && pathename !== "/auth/sign-in" ||  pathename !== "/auth/register"
    })

    if (status === "loading") {
        return <ScreenLoader />
    }
    if(ShoulNotRedirectSign_in()){
         router.push('/auth/sign-in')
        return <ScreenLoader />
        
    }

    if(ShoulNotRedirectOnboarding()){
        router.push('/')
        return <ScreenLoader />
    }

    if(ShoulRedirectOnboarding()){
        router.push('/auth/onboarding')
        return <ScreenLoader />
    }

    return <> {children} </>

},[onboardingIscompleted,pathename,status])   
return null
    }

export default AuthLoader