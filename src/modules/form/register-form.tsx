import { Button } from '@/components/ui/button'
import FieldForm from '@/components/component-create/fieldForm'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Link } from 'lucide-react'
import { Input } from 'postcss'
import React, { useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import { z } from 'zod'



const formSchema = z.object({
    username : z.string().min(2, {
        message: "le nom doit comporter au moins 2 caracteres",
      }),
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
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FieldForm name='username' labelName='Username' placeholder='john Doe' form={form} />
                <FieldForm inputType='email' name='email' labelName='Email' placeholder='johnDoe@gmail.com' form={form} />
              
              
              <div className='relative'>
              <FieldForm children={
                     <span onClick={ClickEyes} className='absolute top-8  right-4'>
                     {
                       isShowEye ?
                         <Eye className='text-gray-400 w-5' />
                         :
                         <EyeOff className='text-gray-400 w-5' />
                     }
                   </span>

              } name='password' inputType={inputType} labelName='Password' placeholder='78yrtlrt' form={form} />
              </div>
              <Link href={"/forgetpassword/Send-Mail"} className='flex items-end justify-end text-purple-600'>Mot de passe oublier?</Link>
              <Button className='bg-purple-600 hover:bg-purple-800 block' type="submit">Submit</Button>
            </form>
          </Form>
  )
}

export default Register_form