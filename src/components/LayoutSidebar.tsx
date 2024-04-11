import React from 'react'
import SidebarLeft from './sidebarLeft'
import SidebarRight from './SidebarRight'

const LayoutSidebar = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex w-full gap-5 '>
        <SidebarLeft /> 
            {
        children
        }
     <SidebarRight />
    </div>
  )
}

export default LayoutSidebar