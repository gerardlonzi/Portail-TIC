import React from 'react'
import Footertab from '../constant/Footertab'
import { ActionStep, BaseComponentsProps } from '../../../../types/onboardingType'
import Image from 'next/image'
import TabbarStep from '../constant/TabbarStep'



const Welcome = ({ Prev,
  Next,
  IsFirstStep,
  IsLastStep,
  StepList, getCurrentStep
 
}: ActionStep) => {
  return (
    <>
    <div className='flex items-center  w-full '>
      <div className='px-36 h-screen flex items-center  justify-center bg-[rgb(244,244,255)] border-r-2 border-[#7976FF]'>
        <Image  src={"/imgs/onboarding-ytb.webp"} alt='onboarding-ytb.webp' width={550} height={550}/>
      </div>
      <div className='w-full p-16 space-y-14'>
        <TabbarStep  Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} StepList={StepList} getCurrentStep={getCurrentStep}/>
        <div className='space-y-10'>
          <h1 className='text-6xl font-semibold'>Bienvenue Sur SellCode</h1>
          <p className='text-gray-600 pr-44'>Nous sommes ravis de t'accueillir dans notre communauté dynamique et diversifiée. Que tu sois ici pour partager tes passions, découvrir de nouvelles idées, ou simplement pour te connecter avec des personnes partageant les mêmes centres d'intérêt, tu es au bon endroit.</p>
        </div>
        
         <Footertab  Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} />
      </div>

    </div>
    
    </>
  )
}

export default Welcome