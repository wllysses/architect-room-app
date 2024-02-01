"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import {
  FolderKanbanIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  SquareUserIcon,
  UserIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DashboardHeader() {
  const { data: session, status } = useSession();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Card className="p-4 rounded-none">
      <CardContent className="p-0 w-full container mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl uppercase">
            Architect<span className="text-primary text-lg">room</span>
          </h2>
          <p className="text-muted-foreground text-[10px]">
            Tenha todos os seus projetos em um só lugar
          </p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="mt-4">
              {status === "authenticated" && (
                <div className="mb-6 w-full flex items-center justify-between">
                  <div>
                    <span className="text-muted-foreground text-xs">
                      Bem-vindo(a)!
                    </span>
                    <h4 className="font-semibold">{session.user.name}</h4>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    title="Sair"
                    onClick={handleSignOut}
                  >
                    <LogOutIcon size={18} />
                  </Button>
                </div>
              )}
              <nav className="w-full flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "justify-start gap-2"
                  )}
                >
                  <HomeIcon size={18} />
                  Início
                </Link>
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "justify-start gap-2"
                  )}
                >
                  <UserIcon size={18} />
                  Usuário
                </Link>
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "justify-start gap-2"
                  )}
                >
                  <SquareUserIcon size={18} />
                  Perfil
                </Link>
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "justify-start gap-2"
                  )}
                >
                  <FolderKanbanIcon size={18} />
                  Projetos
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}
