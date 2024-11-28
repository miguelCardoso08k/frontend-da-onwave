import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MoneyScreen() {
  return (
    <>
      <div className="h-20 w-full bg-blue-700  relative flex justify-center items-center flex-col">
        {/* Contéudo da div azul (opcional) */}
      </div>
      <div className="absolute left-1/2 top-12 w-[274px] h-20 bg-white rounded-[14px] shadow-inner flex items-center px-4 transform -translate-x-1/2">
   
        <span className="text-left font-semibold text-xl text-black mr-4">
          R$ 00.00
        </span>
        <Image
          src="/porquinhomoney.png"
          alt="porquinhomoney"
          className="absolute right-5"
          width={40}
          height={40}
        />
      </div>
      <div className="shadow-lg transform left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-40px)] h-[240px] bg-gray-100 border border-gray-300 rounded-xl absolute top-[140px] flex flex-col justify-center px-6 py-6">
        <div className="flex  items-center">
          <span className="text-[#4a4a6a] font-bold text-2xl">
            Meus gastos:
          </span>
          <span className=" absolute right-4  mt-1 text-[#4a4a6a] font-medium text-lg">
            Mês 07-2000
          </span>
        </div>

        <span className="text-[#4a4a6a] font-semibold text-2xl mt-4">
          R$ -100,00
        </span>

        {/* Gasto 1 */}
        <div className="flex items-center mt-4">
          <Image
            src="/check.svg"
            alt="check"
            width={20}
            height={20}
            className="opacity-80"
          />
          <span className="text-[#8c8ca1] text-base font-medium ml-2">
            Gasto1 - R$50,00
          </span>
        </div>

        {/* Gasto 2 */}
        <div className="flex items-center mt-2">
          <Image
            src="/check.svg"
            alt="check"
            width={20}
            height={20}
            className="opacity-80"
          />
          <span className="text-[#8c8ca1] text-base font-medium ml-2">
            Gasto2 - R$50,00
          </span>
        </div>
      </div>

      <div className="flex pt-5">
        <Dialog>
          <DialogTrigger className="h-10 w-10 absolute right-8 top-[330px] bg-white shadow-md rounded-full flex items-center justify-center">
            <Image src="/plus.png" alt="plus" width={20} height={20} />
          </DialogTrigger>
          <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg items-center">
            <DialogHeader>
              <DialogTitle>Adicione um gasto</DialogTitle>
              <DialogDescription>
                Nomeie um gasto e adicione o preço
              </DialogDescription>
            </DialogHeader>
            <input
              type="text"
              placeholder="Nome do gasto "
              className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-12
      border-2 border-[#008fd7] focus:outline-none relative"
            />
            <Image
              src="/desenhomoney.png"
              alt="desenho"
              width={32}
              height={32}
              className=""
            />

            {/* Input de número pequeno */}
            <input
              type="number"
              placeholder="0000"
              className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
            />

            {/* Botão de enviar */}
            <button className="bg-blue-700 hover:bg-blue-800 h-10 w-[200px] rounded text-white ">
              Enviar
            </button>

            {/* Botão de fechar */}
            <DialogClose>
              <Image src="/voltar.png" alt="sair" width={32} height={32} />
            </DialogClose>
          </DialogContent>
        </Dialog>

        {/* Botão de editar */}
        <Dialog>
          <DialogTrigger className="h-10 w-10 absolute right-20 top-[330px] bg-white shadow-md rounded-full flex items-center justify-center">
            <Image
              src="/editar.png"
              alt="editarfinanças"
              width={20}
              height={20}
            />
          </DialogTrigger>
          <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg items-center">
            <DialogHeader>
              <DialogTitle> Editar meus gastos</DialogTitle>
              <DialogDescription>
                Essa ação não poderá ser revertida
              </DialogDescription>
            </DialogHeader>
            <input
              type="search"
              placeholder="Nome do gasto"
              className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-10
      border-2 border-[#008fd7] focus:outline-none"
            />

            {/* Input de número */}
            <input
              type="number"
              placeholder="0000"
              className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
            />

            {/* Botão de enviar */}
            <button
              className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] 
      justify-center items-center gap-2 inline-flex
      text-center text-white text-lg font-bold leading-[18px] mb-6"
            >
              Mudar
            </button>

            {/* Botão de fechar */}
            <DialogClose>
              <Image src="/voltar.png" alt="sair" width={32} height={32} />
            </DialogClose>
          </DialogContent>
        </Dialog>
        {/* Botão de excluir */}
        <Dialog>
          <DialogTrigger className="h-10 w-10 absolute right-32 top-[330px] bg-white shadow-md rounded-full flex items-center justify-center">
            <Image src="/lixeira.png" alt="lixeira" width={20} height={20} />
          </DialogTrigger>
          <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg items-center">
            <DialogHeader>
              <DialogTitle>Delete um gasto</DialogTitle>
              <DialogDescription>
                Pesquise o nome do gasto que quer deletar
              </DialogDescription>
            </DialogHeader>

            <input
              type="search"
              placeholder="Nome do gasto"
              className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-10
      border-2 border-[#008fd7] focus:outline-none"
            />

            {/* Botão de enviar */}
            <button
              className="w-[268.04px] h-[44.55px] px-9 py-6 bg-white/100 rounded-[40px] 
      justify-center items-center gap-2 inline-flex border-2 border-[#008fd7] focus:outline-none
      text-center text-white text-lg font-bold leading-[18px] mb-6"
            >
              <Image src="/lixeira.png" width={20} height={20} />
            </button>

            {/* Botão de fechar */}
            <DialogClose>
              <Image src="/voltar.png" alt="sair" width={32} height={32} />
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>

      {/*aqui é o botao do gráfico */}

      <Dialog>
        <DialogTrigger
          className="fixed inset-0 m-auto top-[215px] w-[200px] h-[90px] 
    bg-gradient-to-r from-[#ffffff] to-[#f7f7fb] rounded-xl shadow-md flex flex-col items-center justify-center 
    font-semibold text-[#4a4a6a] text-base hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <Image
            src="/lupaG.png"
            alt="grafico"
            className="mb-2"
            width={40}
            height={40}
          />
          Ver com gráfico
        </DialogTrigger>
        <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg items-center">
          <DialogHeader>
            <DialogTitle>Gráfico</DialogTitle>
            <DialogDescription>
              O gráfico irá mudar de acordo com os seus gastos
            </DialogDescription>
          </DialogHeader>
          <span className="text-[#5d5988] font-bold text-lg text-normal">
            Mês 07-2000
          </span>

          <div>
            <Image
              src="/grafico.svg"
              alt="grafico"
              className=""
              width={100}
              height={100}
            />
          </div>
          <table className="w-full text-center mt-6">
            <thead>
              <tr>
                <th className="py-2 px-2 text-left text-base font-normal tracking-tight">
                  Saldo Líquido
                </th>
                <th className="py-2 px-2 text-right text-base font-normal tracking-tight text-blue-500">
                  R$ 1.000
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Linha com valores de saldo e gastos */}
              <tr>
                <td className="py-2 px-2 text-left text-base font-normal tracking-tight">
                  Gastos
                </td>
                <td className="py-2 px-2 text-right text-base font-normal tracking-tight text-gray-500">
                  R$ 10.000
                </td>
              </tr>

              {/* Linha divisória */}
              <tr>
                <td className="border-t border-black" colSpan="2"></td>
              </tr>

              {/* Resultado final */}
              <tr>
                <td className="py-2 px-2 text-left text-base font-normal tracking-tight">
                  Resultado
                </td>
                <td className="py-2 px-2 text-right text-base font-normal tracking-tight text-blue-500">
                  R$ -9000
                </td>
              </tr>
            </tbody>
          </table>
          <DialogFooter>
            <DialogClose className="bg-red-500 text-white  px-2 py-2 pt-2 rounded text-bold">
              Voltar
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex flex-rol items-center justify-center  min-h-screen mt-24 py-10">
        <Button className="bg-blue-700 hover:bg-blue-800 h-10 w-[200px]">
          <Link
            href="/saleScreen"
            className="flex items-center justify-center text-center "
          >
            Minhas vendas
          </Link>
        </Button>
      </div>
    </>
  );
}
