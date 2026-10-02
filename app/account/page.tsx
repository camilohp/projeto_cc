import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const displayName =
    typeof user.user_metadata.full_name === "string"
      ? user.user_metadata.full_name
      : user.email;

  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col items-start gap-4 px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Olá, {displayName}!
      </h1>
      <p className="text-foreground/70">
        Esta é a sua área de cliente na Camilo&apos;s Petshop. E-mail cadastrado: {user.email}.
      </p>
      <form action={signOut}>
        <Button type="submit" variant="outline">
          Sair
        </Button>
      </form>
    </div>
  );
}
