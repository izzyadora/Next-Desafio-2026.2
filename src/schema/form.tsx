import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "O nome deve conter no mínimo 2 caracteres."
    }).max(100, {
        message: "O nome deve conter no máximo 100 caracteres."
    }),
    email: z.email({
        message: "Por favor, insira um e-mail válido!"
    })
})

export type FormValue = z.infer<typeof formSchema>