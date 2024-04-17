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
                    <div><Images /><span>choisir une photo de couverture sur Sellcode</span></div>
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

  const [image , setImage] = useState<ArrayBuffer| string | null>()

  function handleTakeImage(e:React.ChangeEvent<HTMLInputElement>){

 
    if(e.target.files){
      const file = e.target.files[0]

      const reader = new FileReader()
      reader.onload = ()=>{
        setImage(reader.result)
      }

      return reader.readAsDataURL(file)


    }


  }

  SendFrondCoverpictures(image)

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
    
        
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
          <FormField
            control={form.control}
            name="coverPicture"

            render={({ field }) => (


              <FormItem>
                <FormControl>
                  <Input onChangeCapture={handleTakeImage} className="rounded-none text-white  dark:text-black" type="file"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}
          />
         
        </form>
      </Form>
 
    )
}


export const SendFrondCoverpictures = (image:any) =>{
  
  return image



} 
  const formSchemas = z.object({
    coverPicture: z.string()
    })
                              
  export function DeleteCoverProfile() {
  
    const form = useForm<z.infer<typeof formSchemas>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            coverPicture: "",
        },
      })
    
      function onSubmit(values: z.infer<typeof formSchemas>) {
    
        console.log(values)
      }
  
    const inputRef = useRef<HTMLInputElement>(null) 
    // const {ref, ...rest} = ("coverProfile")
  
    function InPutClick(){
        inputRef.current?.click()
    }
  
    // useImperativeHandle(ref,() => inputRef?.current)
  
    return (
    
        
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
          <FormField
            control={form.control}
            name="coverPicture"
  
            render={({ field }) => (
  
  
              <FormItem>
                <FormControl>
                <Button className='rounded-none flex hover:bg-red-900 items-center gap-5 w-full bg-red-800' type="submit"><Trash2/><span>Delete</span></Button>
                </FormControl>
                <FormMessage />
              </FormItem>
  
            )}
          />
         
        </form>
      </Form>
  
    )
  }



