"use client";

import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useSession } from "next-auth/react";
import { createProduct } from "@/services/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export default function FormCreateProduct() {
  const user = useSession().data;
  const form = useForm({
    defaultValues: {
      name: "",
      weight: "",
      nameWeight: "",
      cost: "",
      price: "",
      workTop: "",
      stock: "",
      categoryId: "",
    },
  });
  const submit = async (data) => {
    const res = await createProduct(
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
        className="w-[300px]  h-[65%] fixed top-[125px] bg-white flex flex-col items-center rounded-[13px] shadow-lg p-4 gap-2 overflow-y-scroll overflow-x-hidden"
      >
        <h1 className="text-2xl font-extrabold text-slate-600 text-center">
          Cadastre seu <br /> novo produto
        </h1>
        <span className="text-center text-sm text-muted-foreground">
          {" "}
          Preencha corretamente as informações do seu novo Produto
        </span>
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome do produtos"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center w-full px-4 gap-1">
          <FormField
            name="weight"
            render={({ field }) => (
              <FormItem className="w-[60%]">
                <FormLabel>Peso</FormLabel>
                <FormControl>
                  <Input placeholder="Peso do produto" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nameWeight"
            render={({ field }) => (
              <FormItem className="flex flex-col w-[40%]">
                <FormLabel>Unidade de medida</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  required
                >
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Kg">Kg</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="ml">ml</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Categoria do Produto</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                required
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cm3p32px90001jd77wbe19dg5">
                      Cabelo
                    </SelectItem>
                    <SelectItem value="cm3wqz80s00072mvabq2wjvw7">
                      Barba
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workTop"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Produto de bancada?</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                required
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Sim" name="Sim">
                      Sim
                    </SelectItem>
                    <SelectItem value="Não" name="Não">
                      Não
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          name="cost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor de compra</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o custo"
                  {...field}
                  required
                  type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor de venda</FormLabel>
              <FormControl>
                <Input placeholder="Digite o valor" {...field} type="number" />
              </FormControl>
              <FormDescription>
                Produtos de bancada não precisam de preço
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantas unidades em estoque?</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite a quantidade"
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
            <Link href="boxScreen">Cancelar</Link>
          </Button>
          <Button className="bg-blue-500 w-24 hover:bg-blue-700">Criar</Button>
        </div>
      </form>
    </Form>
  );
}
