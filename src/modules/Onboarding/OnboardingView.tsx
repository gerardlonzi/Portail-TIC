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
                 IsLastStep = {IsLastStep} StepList ={StepList}/>
            </div>
  )
    }
}

export default OnboardingView

// GITHUB_ID = 045c5f2a06cfed1511f6
// GITHUB_SECRET = 4ca4c0a460e7fbea59b1dd3ebbb1eac130042da5
// GOOGLE_CLIENT_ID =76065360969-l745l0mfmtjiveppeg59jhgcso0l6o36.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET = 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


// # connect database


// DATABASE_URL="mongodb+srv://gerard:KSycOQ9wOo8eopYF@cluster0.qcajmng.mongodb.net/SellCode?retryWrites=true&w=majority&appName=Cluster0"