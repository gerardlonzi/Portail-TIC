import { getSession } from 'next-auth/react';
import { NextApiRequest ,NextApiResponse} from 'next'
import prisma from '@/lib/prisma';




export default async function handler(req:NextApiRequest, res:NextApiResponse){
    console.log(req.body)
    try {
        const session = await getSession({ req: req }) // Passer l'objet req correctement
        
        if (!session) {
            return res.status(404).json({message:"Vous n'êtes pas authentifié"}) 
        }
        const email = session.user?.email;

        if (email) {
            const isUserData = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if (isUserData) {
                if(!req.body){
                    return
                }

                const data = req.body

               
                const authVerified = await prisma.userDocument.update({
                    where: {
                        userId: isUserData.id
                    },
                    data :data
                    
                })

                return res.status(200).json({message:authVerified})  
            }
        } else {
            console.error("Cette adresse email n'existe pas")
            return res.status(404).json({message:"Cette adresse email n'existe pas"})   
     
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Une erreur est survenue lors du traitement de votre requête"})  
      
    }
}

