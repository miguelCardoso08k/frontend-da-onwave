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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Stock({ id, token, products }) {
  const router = useRouter();
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

  const handleProductSelect = (productId, productName) => {
    setSelectedProduct(productName);
    form.setValue("productId", productId);

    setOpen(false);
  };

  const onSubmit = async (data) => {
    if (data.movementType === "IN") {
      const res = await stockIn(id, token, data.productId, {
        quantity: data.quantity,
        description: data.description,
      });
      if (res) {
        window.location.reload();
      }
    } else {
      const res = await stockOut(id, token, data.productId, {
        quantity: data.quantity,
        description: data.description,
      });
      if (res) {
        window.location.reload();
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-[200px] h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
        <Image
          src="/plus.png"
          alt="Adicionar Lote"
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <span className="ml-2 text-sm font-bold text-blue-600">
          Movimentação
        </span>
      </DialogTrigger>
      <DialogContent className="w-[90%] h-[85%] flex flex-col justify-between rounded-lg items-center overflow-y-scroll ">
        <DialogHeader>
          <DialogTitle>Adicionar movimentação de estoque</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 flex flex-col items-center"
          >
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
                        className={cn(
                          "w-[300px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                        role="combobox"
                      >
                        {selectedProduct
                          ? selectedProduct
                          : "Selecione um produto"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className={cn("w-[200px] p-0")}>
                      <Command>
                        <CommandInput placeholder="Pesquisar produto..." />
                        <CommandList>
                          <CommandEmpty>
                            Nenhum produto encontrado.
                          </CommandEmpty>
                          <CommandGroup className="z-[100]">
                            {products.map((product) => (
                              <CommandItem
                                className="z-[100]"
                                key={product.id}
                                value={product.name}
                                onSelect={() =>
                                  handleProductSelect(product.id, product.name)
                                }
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
                    <SelectTrigger className="min-w-[300px]">
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
            <Button disabled={selectedProduct ? false : true} type="submit">
              Cadastrar Movimentação
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
