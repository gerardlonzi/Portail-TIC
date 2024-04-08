import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { ActionStep } from '../../../../types/onboardingType'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'



const Footertab = ({ Prev,
    Next,
    IsFirstStep,
    IsLastStep,

}: ActionStep) => {


    let actionstep: React.ReactNode





    if (IsFirstStep()) {
        actionstep =
        <div className='flex justify-end '>
            <Button onClick={Next} className='hover:bg-purple-500  bg-[#7976FF] text-white'>Commencer</Button>

        </div>
    }

    if (IsLastStep()) {
        actionstep =
        <div className='flex justify-end '>
            <Button onClick={Next} className='hover:bg-purple-500   bg-[#7976FF] text-white'>Terminer</Button>
        </div>
            
    }
    if (!IsFirstStep() && !IsLastStep()) {
        actionstep = <>
            <div className='flex justify-between'>
                <Button onClick={Prev} className='hover:bg-gray-100 border border-black flex items-end bg-white text-black'>Retour</Button>
                <Button onClick={Next} className= ' bg-[#7976FF]   hover:bg-purple-500 flex items-end text-white'>Suivant</Button>
            </div>
        </>
    }

    return (
        <div>
            
                    {
                        actionstep
                    }
               
        </div>
    )
}

export default Footertab