import { useState } from "react"
import { Images, ArrowUpFromLine, Trash2 } from 'lucide-react'
import { DialogHeader } from "@/components/ui/dialog"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { useRef,useImperativeHandle } from "react"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
  
import { zodResolver } from "@hookform/resolvers/zod"
  
import { useForm } from "react-hook-form"
  
import { z } from "zod"
  





type Inputs = {
    example: string
    coverProfile: string
}


export function CoverProfileOldPicture() {

    const [IsGetCoverPicture, setIsGetCoverPicture] = useState<boolean>(false)
    const [IsGetotherPicture, setIsGetotherPicture] = useState<boolean>(false)



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    console.log(watch("example")) // watch input value by passing the name of it


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog>
                <DialogTrigger asChild>
                    <div><Images /><span>choisir une photo de couverture</span></div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Selectionner une photo</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                        {/* <input {...register("coverProfile", { required: true })} />
                        {errors.coverProfile && <span>This field is required</span>}
                        <input type="submit" /> */}


                </DialogContent>
            </Dialog>

        </form>
    )
}


{/* <div><ArrowUpFromLine/><span>importer une photo </span></div>
                            <div><Trash2/><span>Delete</span></div> */}




const formSchema = z.object({
    coverPicture: z.string()
    })
                              
export function CoverProfileImport() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            coverPicture: "",
        },
      })
    
      function onSubmit(values: z.infer<typeof formSchema>) {
    
        console.log(values)
      }

    const inputRef = useRef<HTMLInputElement>(null) 
    // const {ref, ...rest} = ("coverProfile")

    function InPutClick(){
        inputRef.current?.click()
    }

    // useImperativeHandle(ref,() => inputRef?.current)

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <div onClick={InPutClick}>
        //        <ArrowUpFromLine/><span>importer une photo </span>
        //     </div>
        //         <input type="file" accept="image/*"  {...register("coverProfile")} />
        //     <input type="submit" />
        // </form>
        
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
          <FormField
            control={form.control}
            name="coverPicture"

            render={({ field }) => (


              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="file"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}
          />
         
          <Button className='bg-[#7976FF] hover:bg-purple-500 block' type="submit">Submit</Button>
        </form>
      </Form>
 
    )
}


{/* <div><ArrowUpFromLine/><span>importer une photo </span></div>
                                                        <div><Trash2/><span>Delete</span></div> */}

