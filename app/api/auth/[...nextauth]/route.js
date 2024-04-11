import NextAuth from "next-auth"
import AuthOptions from "@/utils/auth"
import prisma from "@/lib/prisma";


const handler = NextAuth({
    ...AuthOptions, 
    events: {
      async signIn(message) {
        const email = message?.user?.email;
        const image = message?.user?.image;
        
        if (email) {
          try {
            const existingUser = await prisma.user.findUnique({
              where: {
                email: email
              }
            });
            
            if (existingUser ) {
              const newDocument = await prisma.userDocument.create({
                data: {
                  email: email,
                  avatar: image,
                  userId: existingUser.id
                }
              });
              console.log(newDocument);
              console.log('Document utilisateur ajouté');
            } else {
              console.log("Cet utilisateur n'existe pas");
            }
          } catch (err) {
            console.error('Erreur lors de la création du document utilisateur :', err);
          }
        }
      }
    }
  })

export {handler as GET , handler as POST};