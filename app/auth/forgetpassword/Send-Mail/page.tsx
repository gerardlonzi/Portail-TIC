'use client'

import SendMailPassword from '@/modules/form/sendMailPassword'
import Link  from 'next/link';
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa";
import AuthLoader from '@/shared/AuthLoader';


const Send_Mail = () => {
 

  return (
    <AuthLoader>
    <div className='flex w-full h-screen '>
      <div className='w-full p-24 border-[#7976FF] border-r-2  bg-[#b2a3ff]  hidden md:flex items-center'>
        <Image className='' src={"/imgs/forget.png"} alt='login-illustration.png' width={500} height={100} />
      </div>
      <div className='w-full p-5 md:p-10 lg:p-24 flex gap-20 flex-col justify-center'>
        <Link href='/sign-in'><FaArrowLeft className='w-6 h-6 hover:scale-150 transition ease-out duration-100 hover:text-purple-600' /></Link>
        <div>
          <h2 className='text-3xl font-semibold'>Recevoir l'email de reinitialisation</h2>
          
          <div className='mt-14'>
            <SendMailPassword />
          </div>
        </div>
        </div>
     


    </div>
    </AuthLoader>
  )
}

export default Send_Mail

