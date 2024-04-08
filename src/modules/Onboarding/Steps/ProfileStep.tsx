import React, { useState } from 'react'
import Footertab from '../constant/Footertab'
import { ActionStep } from '../../../../types/onboardingType'
import TabbarStep from '../constant/TabbarStep'
import Image from 'next/image'
import ProfileStepForm from '@/modules/form/profileStepForm'
import {Cloudinary} from "@cloudinary/url-gen"
import {thumbnail} from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'


import { FormSchema } from '@/modules/constants/constantsForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const cld = new Cloudinary(
  {
    cloud:{
      cloudName :process.env.CLOUDNAME
    }
  }
)

const formSchema = FormSchema


const ProfileStep = ({ Prev,
  Next,
  IsFirstStep,
  IsLastStep,
  StepList,
  getCurrentStep

}: ActionStep) => {

const [isLoading , setIsLoading] = useState<boolean>(false)

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
      avatar: "",
      username: "",
      date_birthday: "",
      profession: "",
      bio: "",
      adresse: "",
      tel: "",
      how_did_where: ""

  },
})




function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true)

  const {username,
    bio,
    avatar,
    profession,
    date_birthday,
    adresse,
    tel,
    how_did_where} = values
  console.log(values)






  
 setIsLoading(false)

  Next()

}


  return (
    <>


      <div className='flex   w-full '>
        <div className='px-36 h-screen sticky top-0 flex items-center  justify-center bg-[rgb(244,244,255)] border-r-2 border-[#7976FF]'>
          <Image src={"/imgs/onboarding-profile.webp"} alt='onboarding-ytb.webp' width={550} height={550} />
        </div>
        <div className='w-full p-16 space-y-14'>
          <div className='sticky top-0 pt-3 bg-white'>
             <TabbarStep Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} StepList={StepList} getCurrentStep={getCurrentStep} />
          </div>
          <div className='space-y-10'>
            <h1 className='text-6xl font-semibold'>Presente - toi</h1>
            <ProfileStepForm form={form} isLoading={isLoading}  />
          </div>

          <Footertab Next={form.handleSubmit(onSubmit)} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} />
        </div>

      </div>


    </>
  )
}

export default ProfileStep