import {  useSession } from 'next-auth/react'
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
import React from 'react'

const formSchema = z.object({
  
  email: z.string().email({
    message: "email invalide",
  }),
  password: z.string().min(8, {
    message: "le mot de passe doit comporter au moins 8 caracteres",
  }),
})



const ResetPassword_form = () => {
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
  const inputType:string = isShowEye ? "text" : "password"


  return (
   
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
              <Button className='bg-[#7976FF] hover:bg-purple-500 block' type="submit">Submit</Button>
            </form>
          </Form>
     
  )
}

export default ResetPassword_form