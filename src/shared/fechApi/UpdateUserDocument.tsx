import React from 'react'
import axios from 'axios'


interface props {
    username:string
    bio:string
    profession:string
    date_birthday:string
    adresse:string
    tel:string
    how_did_where:string
}

const UpdateUserDocument = async (data:props): Promise<any> => {
    
    try{
        const response  = await axios.put('/api/UpdateUserDoc', data)
                console.log(response.data);
                return  response.data
        }
        catch(err){
            console.error("une erreur est survenue lors de la mise a jour des donnees " + err)
           throw err
        }
 
}

export default UpdateUserDocument