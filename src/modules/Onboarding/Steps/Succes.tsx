import React from 'react'
import Footertab from '../constant/Footertab'
import { ActionStep, BaseComponentsProps } from '../../../../types/onboardingType'

const Succes = ({ Prev,
  Next,
  IsFirstStep,
  IsLastStep,
 
}: ActionStep) => {
return (
  <>
  
  <div>Success</div>
  <Footertab  Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} />
  </>
)
}

export default Succes