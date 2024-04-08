'use client'

import ResetPassword_form from "@/modules/form/resetPassword-form"
import AuthLoader from "@/shared/AuthLoader"
import Image from "next/image"



const Reset= () => {
  


  return (
    <AuthLoader>



    <div className='flex w-full  '>
    <div className='w-full p-24 border-r-2 border-[#7976FF]  bg-[#b2a3ff]'>
      <Image className='w-full h-full' src={"/imgs/forget.png"} alt='login-illustration.png' width={500} height={100} />
    </div>
    <div className='w-full p-20'>

      <h2 className='text-3xl font-semibold'>réinitialiser le mot de passe</h2>
      
      <div className='mt-14'>
    <ResetPassword_form />
    </div>
      </div>


    </div>
    </AuthLoader>
  )
}

export default Reset

