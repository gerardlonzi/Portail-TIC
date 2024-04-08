import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff} from 'lucide-react'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {  useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '@/components/ui/form'




const formSchema = z.object({
  
  email: z.string().email({
  message: "email invalide",
  }),
  password: z.string().min(8, {
    message: "le mot de passe doit comporter au moins 8 caracteres",
  }),
})

const Register_form = () => {

  
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
  <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <FormField
              control={form.control}
              name="email"

              render={({ field }) => (


                <FormItem>
                  <FormLabel >Email</FormLabel>
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
          
            <Button className='bg-[#7976FF] w-full hover:bg-purple-500 block' type="submit">Submit</Button>
          </form>
        </Form>


)
}

export default Register_form

