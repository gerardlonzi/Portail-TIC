'use client'

import {  useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import Register_form from '@/modules/form/register-form'




const Regidter= () => {
  const { data, status } = useSession()
  console.log(status);



  return (

    <div className='flex w-full h-screen 
     '>
      <div className=' p-14  w-full  hidden md:flex items-center border-r-2   border-[#7976FF]   bg-[#b2a3ff]'>
        <Image className=' ' src={"/imgs/login-illustration.png"} alt='login-illustration.png' width={500} height={100} />
      </div> 
      <div className='w-full p-5 md:p-10 lg:p-24'>

        <h2 className='text-3xl font-semibold'>Inscription</h2>
        <p className='mt-10'>Vous avez déjà un compte ? <Link className='text-[#7976FF] ml-3 ' href={"/auth/sign-in"}>se connecter</Link> </p>
        <div className='mt-14'>
          <Register_form />
              
        </div>
      </div>


    </div>

  )
}

export default Regidter

