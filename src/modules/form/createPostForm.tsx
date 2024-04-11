import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'

import React, { useState} from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { string, z } from 'zod'
import { FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useSession } from 'next-auth/react'
import { Textarea } from '@/components/ui/textarea'
import { MdAddToPhotos } from "react-icons/md";
import Image from 'next/image'
import { RxCross2 } from "react-icons/rx"
import clsx from 'clsx'



const formSchema = z.object({
    desc: z.string(),
    file: z.string()
})


const CreatePostForm = ({ name }: { name: string }) => {

    const data = useSession()
   


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {

            desc: "",
            file: "",

        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {



        console.log(values)
    }

    const [isLoading, seTisLoading] = useState(false)
    const [emphy, setEmphy] = useState<string>()
    const [hiddenFieldfile, sethiddenFieldfile] = useState<boolean>(false)

    const [File, setFile] = useState<ArrayBuffer | string | null>()
    const [FileType, setFileType] = useState<File>()
    

   
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

  
    if (file) {
            setFileType(file)
            
            const reader = new FileReader()
            reader.onload = () => {
                setFile(reader.result)
            }
            return reader.readAsDataURL(file)
        }


    }


    return (


        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">



                <FormField
                    control={form.control}
                    name="desc"

                    render={({ field }) => (

                        <FormItem>
                            <FormControl>
                                <Textarea onChangeCapture={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setEmphy(e.target.value)}} disabled={isLoading} placeholder={`Quoi de neuf  ${name} ?`} {...field}/>
                            </FormControl>

                            <FormMessage />

                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="file"

                    render={({ field }) => (


                        <FormItem>

                            <FormControl>
                                <div className='relative cursor-pointer '>
                                    <div className={clsx(hiddenFieldfile?"hidden":"block",'border relative p-1 rounded-xl bg-white dark:bg-[#181818] border-[#00000]')}>
                                        <div className='dark:hover:bg-[#181818] hover:bg-[#ececec] bg-[#f1f1f1] dark:bg-[#121212]'>
                                            {
                                                File ?
                                                    FileType?.type.includes('video') ? <video className='w-full' controls width={100} height={100}>
                                                        <source src={File.toString()} type="video/mp4"/>
                                                    </video> :
                                                    <div className='max-w-[28rem] max-h-72 overflow-hidden'>
                                                                                                                                                            <Image alt='file post' src={File.toString()} width={100} height={100} className='w-full h-full rounded-xl object-cover'/>
                                                    </div>
                                    
                                                    :
                                                    <div className='flex text-[#c3c3c3] flex-col py-20 items-center gap-2 text-sm justify-center '>
                                                        <p><MdAddToPhotos className='w-9 h-9' /></p>
                                                        <p>Ajouter des photos/Videos</p>
                                                        {/* <span className='text-xs'>Cliquer ici pour selectionner une image </span> */}

                                                    </div>
                                            }
                                        </div>
                                        <RxCross2 onClick={()=>sethiddenFieldfile(!hiddenFieldfile)} className="absolute cursor-pointer w-5 h-5 top-2 text-white dark:text-black dark:bg-white bg-black p-1 rounded-full right-2"/>
                                    </div>
                                    {/* <p  className='absolute top-0 -z-10'> */}
                                    <Input onClick={()=>
                                        hiddenFieldfile === true && sethiddenFieldfile(!hiddenFieldfile)} onChangeCapture={handleChange} accept='image/*, video/*' disabled={isLoading} className=' rounded-xl -z-10' type='file' {...field} />
                                    {/* </p> */}
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <Button disabled={!emphy && !File ||  isLoading} className='bg-[#7976FF] gap-3 text-white flex items-center justify-center  w-full  hover:bg-purple-500 ' type="submit"> {
                    isLoading && <Image src={"/imgs/spin.png"} className='animate-spin brightness-[7]' alt='spin' width={20} height={20} />
                } <span>Poster</span> </Button>

            </form>
        </Form>

    )
}

export default CreatePostForm 