import React from 'react'
import SidebarLeft from './sidebarLeft'
import SidebarRight from './SidebarRight'

const LayoutSidebar = ({ children, PrintSidebarLeft = true,
  PrintSidebarRight = true, animateSidebarLeft }: {
    children: React.ReactNode
    PrintSidebarLeft?: boolean
    PrintSidebarRight?: boolean
    animateSidebarLeft?: boolean

  }) => {
  return (
    <div className='flex w-full h-full gap-5 mt-20'>
      {
       
          PrintSidebarLeft &&  <SidebarLeft animateSidebarLeft={animateSidebarLeft} />
        
      }
      {
     

          children
      
      }

      {
        
          PrintSidebarRight &&  <SidebarRight /> 
        
      }
    </div>
  )
}

export default LayoutSidebar