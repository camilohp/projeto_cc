"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { signInSchema, signUpSchema, type SignInInput, type SignUpInput } from "@/types/auth";

export type AuthActionState = { status: "idle" } | { status: "error"; message: string };

function getSupabaseErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
    if (error.message.includes("Invalid login credentials")) {
      return "E-mail ou senha incorretos.";
    }
    if (error.message.includes("User already registered")) {
      return "Este e-mail já está cadastrado.";
    }
    return error.message;
  }
  return "Ocorreu um erro inesperado. Tente novamente.";
}

export async function signUp(input: SignUpInput): Promise<AuthActionState> {
  const parsed = signUpSchema.safeParse(input);

  if (!parsed.success) {
    return { status: "error", message: "Verifique os campos do formulário." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: { data: { full_name: parsed.data.name } },
  });

  if (error) {
    return { status: "error", message: getSupabaseErrorMessage(error) };
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function signIn(input: SignInInput): Promise<AuthActionState> {
  const parsed = signInSchema.safeParse(input);

  if (!parsed.success) {
    return { status: "error", message: "Verifique os campos do formulário." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    return { status: "error", message: getSupabaseErrorMessage(error) };
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
