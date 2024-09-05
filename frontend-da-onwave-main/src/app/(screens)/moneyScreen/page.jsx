"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function moneyScreen() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md relative flex justify-center items-center flex-col">
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

      <div className="flex justify-center items-start relative">
        <div className=" shadow-inner transform left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-40px)] h-[219px] bg-[#f2f1f9] border border-black absolute top-[70px] flex flex-row items-center ">
          <span className="text-[#5d5988]  font-bold text-2xl absolute top-[20px] left-5">
            Meus gastos:
          </span>
          <span className="text-[#5d5988] absolute top-[25px] flex right-5 font-semibold text-lg">
            Mês 07-2000
          </span>
          <span className="text-[#5d5988]  font-semibold text-2xl absolute top-[60px] left-5">
            R$ -100.00
          </span>

          {/* daqui pra frente tem váriavel*/}
          <div className="">
            <Image
              src="/check.svg"
              alt="check"
              className="absolute left-5 top-[110px] "
              width={20}
              height={20}
            />
            <span className=" text-[#9795b4] text-base font-normal absolute top-[110px] left-12 leading-[18px]">
              Gasto1 - R$50.00
            </span>
          </div>

          <div className="">
            <Image
              src="/check.svg"
              alt="check"
              className="absolute left-5 top-[140px] "
              width={20}
              height={20}
            />
            <span className=" text-[#9795b4] text-base font-normal absolute top-[140px] left-12 leading-[18px]">
              Gasto2 - R$50.00
            </span>
          </div>

          <div className="items-center absolute right-5 top-[160px] flex space-x-1.5">
            <button className="h-10 w-10 bg-white shadow-inner rounded-[14px] flex items-center justify-center">
              <Image
                src="/plus.png"
                alt="plusfinanças"
                width={20}
                height={20}
              />
            </button>

            <button className="h-10 w-10 bg-white shadow-inner rounded-[14px] flex items-center justify-center">
              <Image
                src="/editar.png"
                alt="editarfinanças"
                width={20}
                height={20}
              />
            </button>

            <button className="h-10 w-10 bg-white shadow-inner rounded-[14px] flex items-center justify-center">
              <Image src="/lixeira.png" alt="lixeira" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
{/* pop up com grafico botao*/}
<div className="relative flex justify-center items-center h-screen">
  <button
    onClick={() => setShowModal(true)}
    className="w-[200px] h-[90px] absolute top-[315px] bg-white rounded-[14px] shadow-inner flex flex-col items-center justify-center font-bold text-black underline hover:bg-gray-200 transition duration-300"
  >
    <Image
      src="/calendario.png"
      alt="calendario"
      className="mb-2"
      width={40}
      height={40}
    />
    Ver com gráfico
  </button>

{/* pop up com grafico */}
  {showModal && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white transform max-w-[calc(100%-40px)] h-[500px] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
      <h2 className="text-2xl mb-4 text-[#5d5988] text-bold">Gráfico </h2>
      <div className="text-center text-[#9795b4] relative text-lg text-normal mb-4">
        O gráfico irá mudar de acordo com os seus gastos
      </div>

      <span className="text-[#5d5988] absolute top-[150px]  font-bold text-lg text-normal">
            Mês 07-2000
          </span>
<div className="pt-10">
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
    <tr className="bg-gray-200">
      <th className="py-2 px-4">Saldo Líquido</th>
      <th className="py-2 px-4">Gastos</th>
    </tr>
  </thead>
  <tbody>
    {/* Linha com valores de saldo e gastos */}
    <tr>
      <td className="py-2 px-4 text-right">R$ 1000</td>
      <td className="py-2 px-4 text-right">R$ 10000</td>
    </tr>

    {/* Linha divisória */}
    <tr>
      <td className="py-2 px-4 border-t border-gray-300" colSpan="2"></td>
    </tr>

    {/* Resultado final */}
    <tr className="bg-gray-100">
      <td className="py-2 px-4 font-bold">Resultado</td>
      <td className="py-2 px-4 font-bold text-right">
        {/* Resultado da subtração */}
        R$ -9000
      </td>
    </tr>
  </tbody>
</table>


      <button
        onClick={() => setShowModal(false)}
        className="bg-red-500 text-white absolute bottom-[10px] px-2 py-2 rounded text-bold"
      >
        Voltar
      </button>
    </div>
    </div>
   
 
  )}
 </div>


      <Link
        href="/"
        class=" text-center text-white text-sl font-bold h-[50px] w-[150px] 
 justify-center items-center flex 
px-2 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] absolute transform -translate-x-1/2 left-1/2 bottom-[110px] "
      >
        Minhas vendas
      </Link>
    </>
  );
}