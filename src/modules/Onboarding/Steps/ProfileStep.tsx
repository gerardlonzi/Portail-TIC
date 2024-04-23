import React, { useState } from 'react'
import Footertab from '../constant/Footertab'
import { ActionStep } from '../../../../types/onboardingType'
import TabbarStep from '../constant/TabbarStep'
import Image from 'next/image'
import ProfileStepForm from '@/modules/form/profileStepForm'
import axios from 'axios'
import { FormSchema } from '@/modules/constants/constantsForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import UpdateUserDocument from '@/shared/fechApi/UpdateUserDocument'





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





async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true)

  const { avatar, ...others} = values
    console.log(values)
    
    
    let avatars ;

    
    try {
      // if(avatar){
  
      //   const formdata  = new FormData()
      //   formdata.append("file",avatar)
      //   formdata.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME || "")
      //     const response  = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formdata ,{
      //       headers: {
      //         'Content-Type': 'multipart/form-data'
      //       }
      //     }
      //   )
        
      //   console.log(response.data)
       
        
      //    }else{
      //      console.error("l'avatar est indefini");
           
      //    }
       await UpdateUserDocument(others)
         
         Next()
      }
      catch(err){
        console.error("une erreur s'est produite" + err)
      }
      finally{
          setIsLoading(false)
      }


}


  return (
    <>


      <div className='flex   md:w-full '>
        <div className='px-36 h-screen sticky top-0 hidden md:flex items-center  justify-center bg-[rgb(244,244,255)] border-r-2 border-[#7976FF]'>
          <Image src={"/imgs/onboarding-profile.webp"} alt='onboarding-ytb.webp' width={550} height={550} />
        </div>
        <div className='w-full p-16 space-y-14'>
          <div className='sticky top-0 pt-3 bg-[#0A0A0A]  '>
             <TabbarStep Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} StepList={StepList} getCurrentStep={getCurrentStep} />
          </div>
          <div className='space-y-10'>
            <h1 className='text-6xl font-semibold'>Presente - toi</h1>
            <ProfileStepForm form={form} isLoading={isLoading}  />
          </div>

          <Footertab isLoadding={isLoading} Next={form.handleSubmit(onSubmit)} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} />
        </div>

      </div>


    </>
  )
}

export default ProfileStep