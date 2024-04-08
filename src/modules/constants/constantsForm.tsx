import { z } from 'zod'

export  const FormSchema = z.object({
    avatar: z.string(),
    username: z.string().min(2, {
        message: "le nom doit comporter au moins 2 caracteres",
    }),
    date_birthday: z.string().min(8, {
        message: "ce champs  est requis",
    }),
    profession: z.string().min(1, {
        message: 'ce champ est requis'
    }),
    bio: z.string().min(5, {
        message: 'ce champ est requis'
    }),
    adresse: z.string().min(2, {
        message: 'ce champ est requis'
    }),
    tel: z.string().min(6, {
        message: 'ce champ est requis'
    }),
    how_did_where: z.string().min(4, {
        message: 'ce champ est requis'
    }),
})