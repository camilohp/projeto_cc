import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { error: "Informe seu nome completo." })
      .trim(),
    email: z.email({ error: "Informe um e-mail válido." }).trim(),
    password: z
      .string()
      .min(8, { error: "A senha deve ter ao menos 8 caracteres." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.email({ error: "Informe um e-mail válido." }).trim(),
  password: z.string().min(1, { error: "Informe sua senha." }),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
