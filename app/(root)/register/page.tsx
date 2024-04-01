'use client'

import {  useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Eye, EyeOff } from "lucide-react"
import Register_form from '@/modules/form/register-form'

const formSchema = z.object({
    username:z.string().min(2, {message:"le nom doit contenir plus de 2 caracteres"}),
  email: z.string().email({
    message: "email invalide",
  }),
  password: z.string().min(8, {
    message: "le mot de passe doit comporter au moins 8 caracteres",
  }),
})


const Regidter= () => {
  const { data, status } = useSession()
  console.log(status);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    username:"",
      email: "",
      password: "",

    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  const [isShowEye, setisShowEye] = useState(false)



  function ClickEyes() {
    setisShowEye(!isShowEye)
  }
  const inputType = isShowEye ? "text" : "password"


  return (
    <div className='flex w-full h-full
     '>
      <div className='w-full p-24  h-full  bg-purple-600'>
        <Image className='w-full  ' src={"/imgs/login-illustration.png"} alt='login-illustration.png' width={500} height={100} />
      </div>
      <div className='w-full p-20'>

        <h2 className='text-3xl font-semibold'>Inscription</h2>
        <p className='mt-5'>Vous avez déjà un compte ? <Link className='text-purple-600 ml-3 ' href={"/sign-in"}>se connecter</Link> </p>
        <div className='mt-14'>
          <Register_form />
              
        </div>
      </div>


    </div>
  )
}

export default Regidter

