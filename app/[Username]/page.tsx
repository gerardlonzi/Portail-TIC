'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LayoutSidebar from '@/components/LayoutSidebar'
import Navbar from '@/components/navbar'
import Container from '@/components/container'
import Image from 'next/image'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { useState } from 'react'
import { CoverProfileImport, DeleteCoverProfile } from '@/modules/form/CoverProfilePicture'


const page = () => { 


  const [IsGetCoverPicture, setIsGetCoverPicture] = useState<boolean>(false)
  const [IsGetotherPicture, setIsGetotherPicture] = useState<boolean>(false)

  const { data } = useSession()


  const name = data?.user?.name
  const nameUrl = data?.user?.name?.replace(/\s+/g, '')

  const image = data?.user?.image

  const pathename = usePathname()
  const router = useRouter()

  const usernameEmphy = pathename?.split("/")[1];

  const isNameProfilIsValid = useMemo(() => {
    return nameUrl === usernameEmphy
  }, [name, usernameEmphy])

  // if (!isNameProfilIsValid) {
  //   router.push("/404_error")
  //   return
  // }




  return (
    <Container>

      <Navbar />

      <LayoutSidebar animateSidebarLeft={true} PrintSidebarRight={false}>

        <div className='w-full '>
        <div className='rounded-xl bg-[#151515] w-full h-96'>
                <div>
                    <Popover>
                        <PopoverTrigger>
                          {
                            IsGetCoverPicture ? <button>Modifier la photo de couverture</button>: <button>Ajouter une photo de couverture</button>
                          }
                        </PopoverTrigger>
                        <PopoverContent>
                          <div>
                            <CoverProfileImport />
                            <DeleteCoverProfile />
                          </div>
                            


                        </PopoverContent>
                    </Popover>

                </div>
            </div>
          <div>
             <div>
                <Image src={image || ""} height={10} width={1000} className='outline outline-purple-500 rounded-full object-cover w-40 h-40' alt='profilPicture' />
             </div>
             <p>
              {name}
             </p>
          </div>
          <div>

          </div>
          
        </div>

      </LayoutSidebar>

    </Container>

  )
}

export default page