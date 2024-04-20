import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios'

export const getDocValues =()=> {
    
    const [value , setValue] = useState<any>(null)
    useEffect(()=>{

         axios.get("/api/userDocData")
        .then((result)=>{
            setValue(result.data)
        })
        .catch(err=>{
            console.error(err);
            
        })
    },[])

  return value

}

