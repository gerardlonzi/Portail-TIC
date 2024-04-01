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

const formSchema = z.object({
  
  email: z.string().email({
    message: "email invalide",
  }),
  password: z.string().min(8, {
    message: "le mot de passe doit comporter au moins 8 caracteres",
  }),
})


const Reset= () => {
  const { data, status } = useSession()
  console.log(status);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    <div className='flex w-full  '>
      <div className='w-full p-24 bg-purple-600'>
        <Image className='w-full h-full' src={"/imgs/login-illustrator.png"} alt='login-illustration.png' width={500} height={100} />
      </div>
      <div className='w-full p-20'>

        <h2 className='text-3xl font-semibold'>réinitialiser le mot de passe</h2>
        
        <div className='mt-14'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           
              <FormField
                control={form.control}
                name="email"

                render={({ field }) => (


                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johnDoe@gmail.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>

                )}
              />
              <div className='relative'>

                <FormField
                  control={form.control}
                  name="password"

                  render={({ field }) => (

                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type={inputType} {...field} />

                      </FormControl>

                      <FormMessage />
                      <span onClick={ClickEyes} className='absolute top-8  right-4'>
                        {
                          isShowEye ?
                            <Eye className='text-gray-400 w-5' />
                            :
                            <EyeOff className='text-gray-400 w-5' />
                        }
                      </span>
                    </FormItem>

                  )}

                />
              </div>
              <Button className='bg-purple-600 hover:bg-purple-800 block' type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>


    </div>
  )
}

export default Reset

