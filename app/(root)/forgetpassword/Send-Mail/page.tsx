'use client'

import {  useSession } from 'next-auth/react'
import Image from 'next/image'
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

const formSchema = z.object({
  
  email: z.string().email({
    message: "email invalide",
  })
})


const Send_Mail = () => {
  const { data, status } = useSession()
  console.log(status);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }




 

  return (
    <div className='flex w-full  '>
      <div className='w-full p-24 bg-purple-600'>
        <Image className='w-full h-full' src={"/imgs/login-illustrator.png"} alt='login-illustration.png' width={500} height={100} />
      </div>
      <div className='w-full p-20 flex flex-col justify-center'>

        <h2 className='text-3xl font-semibold'>Recevoir l'email de reinitialisation</h2>
        
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
             
              <Button className='bg-purple-600 hover:bg-purple-800 block' type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>


    </div>
  )
}

export default Send_Mail

