import React from 'react'
import { BaseComponentsProps } from '../../../types/onboardingType'

const OnboardingView = ({getCurrentStep,
    Next,
    Prev,
    IsFirstStep,
    IsLastStep,
    StepList}:BaseComponentsProps) => {

    if(getCurrentStep()?.component){
       const Conponent = getCurrentStep().component.step
        
        return (
            <div>
                <Conponent Next={Next}
                 Prev={Prev}
                 IsFirstStep = {IsFirstStep}
                 IsLastStep = {IsLastStep} StepList ={StepList} getCurrentStep ={getCurrentStep}/>
            </div>
  )
    }
}

export default OnboardingView

