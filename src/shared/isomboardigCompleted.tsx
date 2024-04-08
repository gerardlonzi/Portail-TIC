import React, { useEffect, useState } from 'react'

import axios from 'axios'


const getDocValues = () => {

    const [value , setValue] = useState<any>()

    useEffect(()=>{

         axios.get("/api/userDocData")
        .then((result)=>{
            setValue(result.data.onboardingCompleted)
        })
        .catch(err=>{
            console.error(err);
            
        })
    },[])

  return value

}

export default getDocValues