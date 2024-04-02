import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'

import { z } from 'zod'


const formSchema = z.object({
  
    email: z.string().email({
      message: "email invalide",
    })
  })

const SendMailPassword = () => {
    
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
  )
}

export default SendMailPassword