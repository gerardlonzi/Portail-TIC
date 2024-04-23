'use client'

import OnboardingContainer from '@/modules/Onboarding/OnboardingContainer'
import React from 'react'
import { useSession } from 'next-auth/react'

const page = () => {

const {status} = useSession()
console.log(status);



  return (
    <OnboardingContainer />
  )
}

export default page