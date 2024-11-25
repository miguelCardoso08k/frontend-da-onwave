"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { stockIn, stockOut } from "@/services/api";

export function Stock({ id, token, products }) {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const form = useForm({
    defaultValues: {
      productId: "",
      movementType: "",
      quantity: "",
      description: "",
    },
  });

  // Seleciona um produto e define o ID no formulário
  const handleProductSelect = (productId, productName) => {
    setSelectedProduct(productName);
    form.setValue("productId", productId); // Salva o ID do produto no formulário

    setOpen(false); // Fecha o popover após seleção
  };

  // Função para envio do formulário
  const onSubmit = async (data) => {
    if (data.movementType === "IN") {
      console.log(
        await stockIn(id, token, data.productId, {
          quantity: data.quantity,
          description: data.description,
        })
      );
    } else {
      console.log(
        await stockOut(id, token, data.productId, {
          quantity: data.quantity,
          description: data.description,
        })
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        {/* Campo de pesquisa do produto */}
        <FormField
          control={form.control}
          name="productId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Produto</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[200px] justify-between"
                    role="combobox"
                  >
                    {selectedProduct ? selectedProduct : "Selecione um produto"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className={cn("w-[200px] p-0")}>
                  <Command>
                    <CommandInput placeholder="Pesquisar produto..." />
                    <CommandList>
                      <CommandEmpty>Nenhum produto encontrado.</CommandEmpty>
                      <CommandGroup>
                        {products.map((product) => (
                          <CommandItem
                            key={product.id}
                            onSelect={() =>
                              handleProductSelect(product.id, product.name)
                            } // Seleciona o produto
                          >
                            {product.name}
                            <Check
                              className={cn(
                                "ml-auto",
                                selectedProduct === product.name
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="movementType"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tipo de Movimentação</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={selectedProduct ? false : true}
                required
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="IN">Entrada</SelectItem>
                    <SelectItem value="OUT">Saída</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade</FormLabel>
              <FormControl>
                <Input type="number" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Adicione uma descrição..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Botão para enviar */}
        <Button type="submit">Cadastrar Movimentação</Button>
      </form>
    </Form>
  );
}
