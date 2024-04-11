import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

const ActiveLinks = ({href,children}:{href:string,children:React.ReactNode}) => {
    const pathename = usePathname()

    const isActive = useMemo(()=>{
        return pathename === href
    },[pathename,href])
  return (
    <Link href={href}  className={clsx(isActive ? 'text-[#4b48ff]':"text-[#949494]","flex gap-5 items-center ")}>
        {
            children
        }
    </Link>
  )
}

export default ActiveLinks