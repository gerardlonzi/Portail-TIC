import { ComponentType } from "react"


export interface BaseComponentsProps {
    getCurrentStep : any 
    Next : () => void
    Prev : () => void
    IsFirstStep : ()=> boolean
    IsLastStep : ()=> boolean
    StepList : BaseComponentsPropsStepLIst[] | undefined
}

export interface BaseComponentsPropsStepLIst {
    id : number
    label : string
    component : {step: ComponentType<BaseComponentsProps>}
}

export interface ActionStep {
    Prev:() => void
    Next:() => void
    IsFirstStep:()=> boolean
    IsLastStep:()=> boolean
    getCurrentStep? : any 
    StepList? : BaseComponentsPropsStepLIst[] | undefined
}


export interface onSubmitProfile {
    
    isLoading : boolean
    form :any

}

