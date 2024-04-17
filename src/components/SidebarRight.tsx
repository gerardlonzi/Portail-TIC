

import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"


//  <button className='px-10 py-3 bg-purple-700' onClick={ async() => await signOut()}>logOut</button> 

const SidebarRight = () => {



  return (
    <ScrollArea className='w-[40%]  sticky top-0 overflow-y-hidden  border-l-2  py-10 pl-10' >
    
      <aside className='h-full '>
        <div>
          <p>Story</p>
          <div>
            <p>vous avez pas encore d'amis</p>
          </div>
        </div>
      </aside>
    
    </ScrollArea>
  )
}

export default SidebarRight









