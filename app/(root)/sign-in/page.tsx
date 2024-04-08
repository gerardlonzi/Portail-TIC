'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Sign_in_form from '@/modules/form/sign-in-form';
import AuthLoader from '@/shared/AuthLoader';




const SignIn = () => {
  const { data, status } = useSession()
  console.log(status);





  return (
    <AuthLoader>
      <div className='flex  w-full h-screen  '>
        <div className='w-full h-screen hidden md:flex items-center border-r-2 border-[#7976FF]  p-14 bg-[#b2a3ff]'>
          <Image className='' src={"/imgs/login-illustrator.png"} alt='login-illustration.png' width={500} height={100} />
        </div>
        <div className='w-full p-5 md:p-10 lg:p-24'>

          <h2 className='text-3xl font-semibold'>Login</h2>
          <p className='mt-10'>Vous avez pas un compte ? <Link className='text-[#7976FF] ml-3 ' href={"/register"}>creer un compte</Link> </p>
          <div className='mt-10'>
            <Sign_in_form />

          </div>
          <div className='space-y-5  mt-9'>
            <div className='flex gap-2 items-center'>
              <span className='border w-full border-gray-400'></span>
              <p className='font-semibold'>Or </p>
              <span className='border w-full border-gray-400'></span>

            </div>

            <div className='space-x-5 flex justify-center items-center'>
              <button onClick={() => signIn('github')} > <FaGithub className='w-8 h-8 ' /></button>
              <button onClick={() => signIn('google')} > <FcGoogle className='w-8 h-8 ' /></button>
            </div>

            {/* <button onClick={() => signOut()}>logOut</button> */}
          </div>


        </div>


      </div>
    </AuthLoader>
  )
}

export default SignIn

