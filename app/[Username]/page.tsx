'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LayoutSidebar from '@/components/LayoutSidebar'
import Navbar from '@/components/navbar'
import Container from '@/components/container'
import Image from 'next/image'



const page = () => {
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

              </div>
          </div>
          <div>
             <div>
                <Image src={image || ""} height={200} width={300}  alt='profilPicture' />
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