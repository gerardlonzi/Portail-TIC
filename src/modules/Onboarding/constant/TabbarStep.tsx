import React from 'react'
import { ActionStep } from '../../../../types/onboardingType'
import clsx from 'clsx'

const TabbarStep = ({ 
    getCurrentStep,StepList

}: ActionStep) => {
  return (
    <div className='relative inline-block  '>
     
        <div className='w-full flex space-x-14  '>
            {
                StepList?.map((el,index)=>(
                    <div key={index} className={clsx(getCurrentStep()?.id == el.id && 'border-[#7976FF] border-b-2','space-x-3 pb-2  text-gray-600 ')}>
                        <span className={clsx(getCurrentStep()?.id == el.id ? "bg-[#7976FF]" :"bg-gray-600" , 'text-xs px-2 py-1 rounded-full  text-white')}>{el.id}</span>
                        <span>{el.label}</span>
                    </div>
                ))
            }
        </div>
        <div className='absolute -z-10 border-b-2 w-full  bottom-0 border-gray-300'></div>
 
    </div>
  )
}

export default TabbarStep