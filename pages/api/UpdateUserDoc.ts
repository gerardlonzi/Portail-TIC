import { getSession } from 'next-auth/react';
import { NextApiRequest ,NextApiResponse} from 'next'
import prisma from '@/lib/prisma';



export default async function handler(req:NextApiRequest, res:NextApiResponse){
    try {
        const session = await getSession({ req: req }) // Passer l'objet req correctement
        
        if (!session) {
            return res.status(404).json("Vous n'êtes pas authentifié")
        }

        const email = session.user?.email;

        if (email) {
            const isUserData = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if (isUserData) {
                if(!req.query){
                    return
                }

                const {username,avatar,bio,profession,date_birthday,adresse,tel,how_did_where} = req.query

               
                const authVerified = await prisma.userDocument.update({
                    where: {
                        userId: isUserData.id
                    },
                    data :{
                        username: Array.isArray(username) ? username[0] : username,
                        bio: Array.isArray(bio) ? bio[0] : bio,
                        avatar:Array.isArray(avatar) ? avatar[0] : avatar,
                        profession: Array.isArray(profession) ? profession[0] : profession,
                        date_birthday: Array.isArray(date_birthday) ? date_birthday[0] : date_birthday,
                        onboardingCompleted: true,
                        adresse: Array.isArray(adresse) ? adresse[0] : adresse,
                        tel: Array.isArray(tel) ? tel[0] : tel,
                        how_did_where: Array.isArray(how_did_where) ? how_did_where[0] : how_did_where,
                    }

                    
                    
                })

                return res.status(200).json(authVerified)
            }
        } else {
            console.error("Cette adresse email n'existe pas")
            return res.status(400).json("Cette adresse email n'existe pas")
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json("Une erreur est survenue lors du traitement de votre requête")
    }
}

