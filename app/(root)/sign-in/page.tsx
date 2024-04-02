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
      <div className='w-full hidden md:flex items-center  p-14 bg-purple-400'>
        <Image className='' src={"/imgs/login-illustrator.png"} alt='login-illustration.png' width={500} height={100} />
      </div>
      <div className='w-full p-5 md:p-10 lg:p-24'>

        <h2 className='text-3xl font-semibold'>Login</h2>
        <p className='mt-10'>Vous avez pas un compte ? <Link className='text-purple-600 ml-3 ' href={"/register"}>creer un compte</Link> </p>
        <div className='mt-10'>
          <Sign_in_form />

        </div>
        <div className='space-y-5 flex flex-col items-center mt-9'>

          <p className='font-semibold'>Or login with</p>
          <div className='space-x-5'>
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

