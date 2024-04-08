'use client'


import React, { useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'


const Home = () => {

    const {data,status} = useSession()
    console.log(status)
    console.log(data)

  
  return (
    <div>

      <div>votre page d'accueil</div>
      <Link  href= {'/shop'} >ok</Link>
   
      <div>
        {
          data?.user?.email &&
        <p>{data.user.email}</p>
        }
        {
        
          data?.user?.image && data.user.email && // Vérifier si data.user.email est défini et non null
          <p><img src={data.user.image} alt="" /></p>
        
        }
      </div>

         <button className='px-10 py-3 bg-purple-700' onClick={ async() => await signOut()}>logOut</button> 

    </div>
  )
}

export default Home