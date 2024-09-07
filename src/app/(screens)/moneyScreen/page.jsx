"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function moneyScreen() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType); // 'gasto' ou 'grafico'
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
        </div>
      </div>

      {/* Botão para abrir o modal */}
      <button
        onClick={() => openModal("btnadd")}
        className="h-10 w-10 absolute right-8 top-[310px] bg-white shadow-inner rounded-[14px] flex items-center justify-center"
      >
        <Image src="/plus.png" alt="plus" width={20} height={20} />
      </button>

      {/* Modal */}
      {activeModal === "btnadd" && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)]  p-8 rounded-lg shadow-lg relative flex flex-col items-center">
            <h2 className="text-2xl mb-4 text-[#5d5988] font-bold">
              Adicione um gasto
            </h2>

            {/* Input de string com borda azul sempre */}
            <input
              type="text"
              placeholder="Nome do gasto <Image src='/desenhomoney.png' classname='right-3' width={32} height={32} /> "
              className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-10
      border-2 border-[#008fd7] focus:outline-none "
            />

            {/* Input de número pequeno */}
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
              Enviar
            </button>

            {/* Botão de fechar */}

            {/* Botão de fechar */}
            <button onClick={closeModal}>
              <Image src="/voltar.png" alt="sair" width={32} height={32} />
            </button>
          </div>
        </div>
      )}
      {/* opa filhota, aqui já é o botao de editar.. fica ligada! */}
      <button
        onClick={() => openModal("btneditar")}
        className="h-10 w-10 absolute right-20 top-[310px] space-x-1.5 bg-white shadow-inner rounded-[14px] flex items-center justify-center"
      >
        <Image src="/editar.png" alt="editarfinanças" width={20} height={20} />
      </button>
      {activeModal === "btneditar" && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)]  p-8 rounded-lg shadow-lg relative flex flex-col items-center">
            <h2 className="text-2xl mb-4 text-[#5d5988] font-bold">
              Editar meus gastos
            </h2>

            {/* Input de string  */}
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
            <button onClick={closeModal}>
              <Image src="/voltar.png" alt="sair" width={32} height={32} />
            </button>
          </div>
        </div>
      )}

      {/* aqui é o botao de excluir ein siliga */}

      <button className="h-10 w-10 absolute right-32 top-[310px] space-x-1.5 bg-white shadow-inner rounded-[14px] flex items-center justify-center">
        <Image src="/lixeira.png" alt="lixeira" width={20} height={20} />
      </button>

      {/*aqui é o botao do gráfico */}
      <div className="">
        <button
          onClick={() => openModal("btngrafico")}
          className="fixed inset-0 m-auto top-[215px] w-[200px] h-[90px] 
  bg-white rounded-[14px] shadow-inner flex flex-col items-center justify-center 
  font-bold text-black text-normal underline"
        >
          <Image
            src="/calendario.png"
            alt="calendario"
            className="py-2"
            width={40}
            height={40}
          />
          Ver com gráfico
        </button>

        {/* pop up com grafico */}
        {activeModal === "btngrafico" && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white transform max-w-[calc(100%-40px)] h-[500px] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
              <span className="text-3xl mb-2 text-normal text-[#5d5988] font-bold">
                Gráfico{" "}
              </span>
              <div className="text-center text-[#9795b4] relative  text-lg text-normal mb-4">
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

              <button
                onClick={closeModal}
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
