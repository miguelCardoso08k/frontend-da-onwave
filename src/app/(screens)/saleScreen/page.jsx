"use client";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerDemo() {
  const [date, setDate] = React.useState(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

const barbeiros = [
  { id: 1, name: "Joaquim", comission: 12000 },
  { id: 2, name: "Joaquim", comission: 12000 },
  { id: 3, name: "Joaquim", comission: 12000 },
  { id: 4, name: "Joaquim", comission: 12000 },
  { id: 5, name: "Joaquim", comission: 12000 },
];

export default function SaleScreen() {
  return (
    <>
      <div className="bg-blue-700 h-16 w-full relative items-center"></div>
      <div className="flex justify-center absolute top-4 w-full pt-2">
        <form className="w-[272px] h-[51px] bg-white rounded-[46px] flex items-center relative shadow-xl">
          <input
            type="search"
            placeholder="Nome do produto"
            className="w-full h-full bg-transparent rounded-[46px] pl-4 pr-12 outline-none"
          />
          <span className="absolute right-3 text-gray-500 cursor-pointer">
            <Image
              src="/pesquisa.png" 
              alt="Buscar"
              width={20}
              height={20}
            />
          </span>
        </form>
      </div>

      <div className="absolute top-24 left-3">
        <Link href="/moneyScreen">
          <Image
            src="/voltar.png"
            alt="Voltar"
            className="dark:invert pb-2"
            width={32}
            height={32}
          />
        </Link>
      </div>

      <div className="flex justify-center items-center absolute top-32 w-full">
        <DatePickerDemo />
      </div>
      <div className="relative top-32 w-[300px] max-w-md mx-auto p-6 pb-2 bg-white rounded-lg shadow-md h-[350px] overflow-y-auto">
        {/* Cabeçalho com nome do produto, ícone e preço */}
        <div className="flex items-center justify-between mb-4">
          {/* Ícone e Nome do Produto */}
          <div className="flex items-center justify-center w-full">
            <Image src="/boxG.png" alt="Caixa Box" width={64} height={64} />
          </div>
        </div>

        {/* Primeira Tabela */}
        <div className="w-full flex flex-col gap-1">
          <div>
            <div className="px-4 py-3 text-lg text-center font-bold tracking-tight text-slate-700">
              Foram vendidos:
            </div>

            <div className="px-10 h-6  bg-blue-400 text-center rounded-full text-base font-bold text-white">
              100
            </div>
          </div>

          <div>
            <div>
              <div className="px-4 py-3 text-xl text-center font-bold tracking-tight text-slate-700">
                Barbeiros:
              </div>
              <div className="text-base font-medium text-blue-600 flex justify-between flex-col">
                <div className="flex justify-between px-4">
                  <span className="pl-4">Nome</span>
                  <span>Comissão</span>
                </div>

                {barbeiros.map((barbeiro) => {
                  return (
                    <div
                      key={barbeiro.id}
                      className="px-4 text-lg font-medium text-slate-600 flex justify-between"
                    >
                      <span> {barbeiro.name}:</span>
                      <span>{barbeiro.comission.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <br />
          </div>
        </div>

        {/* Divisória */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Tabela de Saldo Líquido e Gastos */}
        <table className="w-full text-left mt-4">
          <thead>
            <tr>
              <th className="py-3 px-4 text-base font-normal text-gray-700">
                Saldo Líquido
              </th>
              <th className="py-3 px-4 text-right text-base font-normal text-blue-500">
                R$ 1.000
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 text-base font-normal text-gray-700">
                Gastos
              </td>
              <td className="py-3 px-4 text-right text-base font-normal text-gray-500">
                R$ 10.000
              </td>
            </tr>

            {/* Linha divisória */}
            <tr>
              <td className="border-t border-gray-300" colSpan="2"></td>
            </tr>

            {/* Resultado final */}
            <tr>
              <td className="py-3 px-4 text-base font-normal text-gray-700">
                Resultado
              </td>
              <td className="py-3 px-4 text-right text-base font-normal text-red-500">
                R$ -9000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
