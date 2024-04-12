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
    <Link href={href}  className={clsx(isActive ? 'text-[#6a68ff]':"text-[#949494]","flex gap-5 items-center hover:text-[#6a68ff] transition duration-100 ease-in")}>
        {
            children
        }
    </Link>
  )
}

export default ActiveLinks