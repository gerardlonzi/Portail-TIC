import { getSession } from 'next-auth/react';
import { NextApiRequest ,NextApiResponse} from 'next'
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';



export default async function handler(req:NextApiRequest, res:NextApiResponse){
    try {
        const session = await getSession({ req: req }) // Passer l'objet req correctement
        console.log(session);
        
        if (!session) {
            return new NextResponse(JSON.stringify({message:"Vous n'êtes pas authentifié"}),{status:404}) 
        }

        const email = session.user?.email;

        if (email) {
            const isUserData = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if (isUserData) {
                const authVerified = await prisma.userDocument.findUnique({
                    where: {
                        userId: isUserData.id
                    }
                })

                return  new NextResponse(JSON.stringify({message:authVerified}),{status:200})
            }
        } else {
            console.error("Cette adresse email n'existe pas")
            return new NextResponse(JSON.stringify({message:"Cette adresse email n'existe pas"}),{status:400})
        }
    } catch (error) {
        console.error(error)
        return new NextResponse(JSON.stringify({message : "Une erreur est survenue lors du traitement de votre requête"}),{status:500}) 
    }
}

