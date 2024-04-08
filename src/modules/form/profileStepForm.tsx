import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { Form } from '@/components/ui/form'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from '@/components/ui/textarea'
import { onSubmitProfile } from '../../../types/onboardingType'
import { ImageUp } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'





const ProfileStepForm = ({ isLoading, form }: onSubmitProfile) => {

    const [date, setDate] = useState<Date>()
    const [image, setImage] = useState<string | ArrayBuffer | null>()


    const handleTakeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
    
        if(file){
                const reader = new FileReader()
                reader.onload = () => {
                    setImage(reader.result)
                }
                console.log(image);

                return reader.readAsDataURL(file);

        }
    

    }





    useEffect(() => {
        if (date) {
            form.setValue("date_birthday", format(date, "MM/dd/yyyy"))
        }
    }, [date, form])





    return (
        <Form {...form}>
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="avatar"

                    render={({ field }) => (


                        <FormItem>
                            <FormLabel>Avatar</FormLabel>
                            <FormControl>
                                <div className=' flex-col gap-5 flex items-center '>
                                    {
                                        image ? <Image className='w-48 h-48 rounded-full object-cover' src={image.toString()} alt='Avatar' width={500} height={100}/> :
                                            <div className='p-5 inline-block border-dashed border-2 rounded-lg'>
                                                <ImageUp className='w-24 h-24 text-gray-200' />
                                            </div>
                                    }
                                    <div className=''>
                                        <Input accept='image/*' onChangeCapture={handleTakeImage} className='file:bg-[#7976FF] h-14 rounded-full  file:p-[9px] inline file:text-white file:mr-6 file:rounded-full file:cursor-pointer' disabled={isLoading} type='file' {...field} />
                                        <span className='text-xs text-gray-300'>ce champs est facultaive</span>

                                    </div>

                                </div>
                            </FormControl>

                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="username"

                    render={({ field }) => (


                        <FormItem>
                            <FormLabel >Username</FormLabel>
                            <FormControl>
                                <Input disabled={isLoading} placeholder="john Doe" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>

                    )}
                />


                <FormField
                    control={form.control}
                    name="date_birthday"

                    render={({ field }) => (

                        <FormItem>
                            <FormLabel className='block mb-1'>Date d'anniversaire</FormLabel>
                            <FormControl>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button disabled={isLoading}  {...field}
                                            variant={"outline"}
                                            className={cn(
                                                " justify-start text-left font-normal w-full",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "MM/dd/yyyy") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus

                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}

                />
                <FormField
                    control={form.control}
                    name="profession"

                    render={({ field }) => (


                        <FormItem>
                            <FormLabel>Profession</FormLabel>
                            <FormControl>
                                <Input disabled={isLoading} placeholder='developpeur web'  {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Biographie</FormLabel>
                            <FormControl>
                                <Textarea disabled={isLoading} {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="tel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tel</FormLabel>
                            <FormControl>
                                <Input disabled={isLoading} type='number'  {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="adresse"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Adresse</FormLabel>
                            <FormControl>
                                <Input disabled={isLoading}   {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="how_did_where"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Ou nous avez vous connues</FormLabel>
                            <FormControl>
                                <Textarea disabled={isLoading}  {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>

                    )}
                />

            </form>
        </Form>


    )
}

export default ProfileStepForm

