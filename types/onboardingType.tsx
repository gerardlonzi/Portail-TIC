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