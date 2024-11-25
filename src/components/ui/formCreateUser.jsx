"use client";

import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useSession } from "next-auth/react";
import { createEmployee } from "@/services/api";

export default function FormCreateUser() {
  const user = useSession().data;
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      cellphone: "",
      fixedPayment: "",
      commissionProcedure: "",
      commissionProduct: "",
    },
  });
  const submit = async (data) => {
    const res = await createEmployee(
      data,
      user.id,
      user.barbershopId,
      user.token
    );
    console.log(res);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => submit(data))}
        className="w-[300px]  h-[65%] fixed top-[125px] bg-white flex flex-col  items-center rounded-[13px] shadow-lg p-4 gap-2 overflow-y-scroll"
      >
        <h1 className="text-2xl font-extrabold text-slate-600 text-center">
          Cadastre seu <br /> novo funcionário
        </h1>
        <span className="text-center text-sm text-muted-foreground">
          {" "}
          Preencha corretamente as informações do seu novo funcionário
        </span>
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobrenome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o sobrenome" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o email"
                  type="email"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cellphone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celular pra contato</FormLabel>
              <FormControl>
                <Input placeholder="Digite o celular" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fixedPayment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pagamento fixo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o valor em reais"
                  {...field}
                  type="number"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="commissionProcedure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comissão para cortes</FormLabel>
              <FormControl>
                <Input
                  placeholder="Valor em porcentagem"
                  type="number"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="commissionProduct"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comissão para produtos</FormLabel>
              <FormControl>
                <Input
                  placeholder="Valor em porcentagem"
                  type="number"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-evenly pt-2 w-full">
          <Button
            asChild
            className="bg-red-500 rounded-md text-primary-foreground hover:bg-red-700 py-2 h-10 w-24"
          >
            <Link href="myEmployeesScreen">Cancelar</Link>
          </Button>
          <Button className="bg-blue-500 w-24 hover:bg-blue-700">Criar</Button>
        </div>
      </form>
    </Form>
  );
}
