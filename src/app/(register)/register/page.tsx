"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/services/api";

export default function Register() {
  const schema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z
      .string()
      .min(1, { message: "E-mail é obrigatório" })
      .email({ message: "Formato de e-mail inválido" }),
    password: z.string().min(5, { message: "Mínimo 5 caracteres" }),
  });

  type ValidationSchema = z.infer<typeof schema>;

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
  });

  const handleSignIn: SubmitHandler<ValidationSchema> = async (data) => {
    const fetchData = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (fetchData.status === "error") {
      alert(fetchData.message);
      return;
    }

    alert(fetchData.message);
    form.reset();
  };

  return (
    <main className="min-h-screen w-screen flex items-center justify-center">
      <div className="max-w-md w-full flex flex-col gap-4 px-4">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl uppercase">
            Architect<span className="text-primary text-2xl">ROOM</span>
          </h2>
          <p className="text-muted-foreground text-xs">
            Tenha todos os seus projetos em um só lugar
          </p>
        </div>

        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(handleSignIn)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="ex: João da Silva"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ex: joaodasilva@email.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="ex: senha123"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-4">
              Criar conta
            </Button>
          </form>
        </Form>

        <p className="text-center mt-4">
          Já possui conta?{" "}
          <Link href="/" className="font-semibold hover:underline">
            Faça login.
          </Link>
        </p>
      </div>
    </main>
  );
}
