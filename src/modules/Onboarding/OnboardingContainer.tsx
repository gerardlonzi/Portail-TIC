'use client'
import React, { useState } from 'react'
import { BaseComponentsProps, BaseComponentsPropsStepLIst } from '../../../types/onboardingType'
import Welcome from './Steps/Welcome'
import ProfileStep from './Steps/ProfileStep'
import Succes from './Steps/Succes'
import OnboardingView from './OnboardingView'



const OnboardingContainer = () => {

    const [currentStep, setCurrenStep] = useState<number>(1)

const StepList : BaseComponentsPropsStepLIst[] = [

{
    id : 1,
    label : "Bienvenue",
    component : {step : Welcome}
},
{
    id : 2,
    label : "Profil",
    component : {step : ProfileStep}
},
{
    id : 3,
    label : "Success",
    component : {step : Succes}
}



]

function GetCurrentStep(){

   return StepList.find((el) => el.id === currentStep)

}

function Prev(){
    if( currentStep > 1 ){
        return setCurrenStep(currentStep - 1)
    }
}

function Next(){
    if( currentStep < StepList.length ){
        return setCurrenStep(currentStep + 1)
    }
}

function IsFirstStep(){
    return currentStep === 1
}

function IsLastStep(){
    return currentStep === StepList.length
}


  return (
    <OnboardingView  Next={Next} Prev={Prev} StepList={StepList} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} getCurrentStep={GetCurrentStep}/>
  )
}

export default OnboardingContainer