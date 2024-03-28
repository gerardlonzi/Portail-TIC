'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
    const {data , status} = useSession()
    console.log(status);
    
  return (
        <div >
            
            <button onClick={()=> signIn('github')} className='p-2 bg-black text-white '> 'sign in with github</button><p></p>
            <button onClick={()=> signIn('google')} className='p-2 bg-black text-white '> 'sign in with Google</button>

<p></p>
            <button onClick={()=> signOut()}>logOut</button>
        
        
        </div>
  )
}

export default page