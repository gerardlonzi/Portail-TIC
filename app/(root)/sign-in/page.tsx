'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Sign_in_form from '@/modules/form/sign-in-form';




const SignIn = () => {
  const { data, status } = useSession()
  console.log(status);





  return (
    <div className='flex w-full  '>
      <div className='w-full p-24 bg-purple-600'>
        <Image className='w-full h-full' src={"/imgs/login-illustrator.png"} alt='login-illustration.png' width={500} height={100} />
      </div>
      <div className='w-full p-20'>

        <h2 className='text-3xl font-semibold'>Login</h2>
        <p className='mt-5'>Vous avez pas un compte ? <Link className='text-purple-600 ml-3 ' href={"/register"}>creer un compte</Link> </p>
        <div className='mt-10'>
          <Sign_in_form />

        </div>
        <div className='space-y-5 flex flex-col items-center mt-14'>

          <p className='font-semibold'>Or login with</p>
          <div className='space-x-5'>
            <button onClick={() => signIn('github')} > <FaGithub className='w-10 h-10 ' /></button>
            <button onClick={() => signIn('google')} > <FcGoogle className='w-10 h-10 ' /></button>
          </div>

          {/* <button onClick={() => signOut()}>logOut</button> */}
        </div>


      </div>


    </div>
  )
}

export default SignIn

