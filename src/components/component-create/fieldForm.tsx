import React from 'react'
import {

    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { inputForm } from '../../../types/formType'

const FieldForm = ({ form,
    labelName,
    placeholder,
    inputType,
    children,
    name }: inputForm) => {
    return (
        <FormField
            control={form.control}
            name={name}

            render={({ field }) => (


                <FormItem>
                    <FormLabel> {labelName}</FormLabel>
                    <div className='relative'>
                        <FormControl>
                            <Input type={inputType} placeholder={placeholder} {...field} />
                        </FormControl>
                        {
                            children
                        }
                    </div>

                    <FormMessage />
                </FormItem>

            )}
        />
    )
}

export default FieldForm