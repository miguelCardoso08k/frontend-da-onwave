import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";

export default function ServiceScreen() {
  const atendimentos = [
    {
      cliente: "João da Silva",
      data: "01/09/2024",
      servico: [
        { name: "Dregade", id: 1 },
        { name: "social", id: 3 },
      ],
      produto: [
        { name: "Shampoo", id: 1 },
        { name: "gel", id: 3 },
      ],
      pagamento_produto: 32,
      pagamento_servico: 23.6,
    },
    {
      cliente: "Carlos Almeida",
      data: "01/09/2024",
      servico: [
        { name: "Dregade", id: 1 },
        { name: "social", id: 3 },
      ],
      produto: [
        { name: "Shampoo", id: 1 },
        { name: "gel", id: 3 },
      ],
      pagamento_produto: 32,
      pagamento_servico: 23.6,
    },
    {
      cliente: "Igor Taváres",
      data: "01/09/2024",
      servico: [
        { name: "Dregade", id: 1 },
        { name: "social", id: 3 },
      ],
      produto: [
        { name: "Shampoo", id: 1 },
        { name: "gel", id: 3 },
      ],
      pagamento_produto: 32,
      pagamento_servico: 23.6,
    },
    {
      cliente: "Lucas Pereira",
      data: "01/09/2024",
      servico: [
        { name: "Dregade", id: 1 },
        { name: "social", id: 3 },
      ],
      produto: [
        { name: "Shampoo", id: 1 },
        { name: "gel", id: 3 },
      ],
      pagamento_produto: 32,
      pagamento_servico: 23.6,
    },
  ];

  return (
    <>
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[50px] bg-white shadow-lg rounded-lg">
          <span className="text-lg font-semibold text-black text-center">
            Atendimentos
          </span>
        </div>
      </div>

      <div>
        <Link href="/homeScreen" className="fixed top-5 left-3">
          <Image
            src="/voltar.png"
            alt="Onwave Logo"
            className="dark:invert pb-2"
            width={32}
            height={32}
          />
        </Link>
      </div>

      {/* Renderizando o componente de atendimentos */}
      <div className="flex justify-center items-center pt-[40px]">
        <div className="bg-white rounded-lg shadow-lg max-w-[calc(100%-40px)] w-[600px] h-[65vh] overflow-y-auto p-6 flex flex-col gap-2">
          {atendimentos.length === 0 ? (
            <p className="text-center text-gray-500">
              Nenhum atendimento em andamento.
            </p>
          ) : (
            atendimentos.map((atendimento, index) => (
              <Dialog key={index}>
                <div className="bg-blue-100/50 p-4 rounded-lg shadow-md border-2 border-blue-600 hover:shadow-lg transition-shadow">
                  <DialogTrigger className="flex w-full justify-between gap-2 px-1">
                    <h1 className="text-lg font-bold text-blue-700 ">
                      {atendimento.cliente}
                    </h1>
                    <div className="text-xs text-gray-600 font-semibold">
                      {atendimento.data}
                    </div>
                  </DialogTrigger>
                  <div className="pt-2 flex justify-center gap-2">
                    <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition">
                      Cancelar
                    </button>
                    <Link href="/paymentScreen">
                      <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
                        Finalizar
                      </button>
                    </Link>
                  </div>
                </div>

                <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg">
                  <DialogHeader>
                    <DialogTitle>
                      <h1 className="text-lg font-bold text-blue-700 ">
                        {atendimento.cliente}
                      </h1>
                    </DialogTitle>
                    <DialogDescription className="text-center items-center">
                      Faça seu chekout!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="bg-blue-100/50 p-4 rounded-lg shadow-md border-2 border-blue-600 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col gap-1">
                      <div className="text-gray-700 flex flex-col items-start w-full">
                        <h3 className="text-gray-700 text-xl font-semibold">
                          Serviços:
                        </h3>
                        {atendimento.servico.map((item) => (
                          <div
                            key={item.id}
                            className="w-full flex justify-between"
                          >
                            <span>{item.name}</span>
                            <span>
                              R$ {atendimento.pagamento_servico.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="text-gray-700 flex flex-col items-start w-full">
                        <h3 className="text-gray-700 text-xl font-semibold">
                          Produtos:
                        </h3>
                        {atendimento.produto.map((item) => (
                          <div
                            key={item.id}
                            className="w-full flex justify-between"
                          >
                            <span>{item.name}</span>
                            <span>
                              R$ {atendimento.pagamento_produto.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <hr className="bg-blue-600 h-[2px] mt-3" />
                      <div className="w-full flex justify-between">
                        <h3 className="text-gray-700 text-xl font-bold">
                          Total:
                        </h3>
                        <span className="text-gray-700 text-xl font-semibold">
                          R${" "}
                          {(
                            atendimento.pagamento_produto +
                            atendimento.pagamento_servico
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Link href="/sellProducts" className="flex justify-center">
                      <Button
                        type="submit"
                        className="bg-blue-400 hover:bg-blue-500 font-semibold"
                      >
                        Adicionar novos serviços e produtos
                      </Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))
          )}
          {/* Botão centralizado com a imagem */}
          <Dialog>
            <DialogTrigger className="flex items-center justify-center mx-auto my-6 bg-white px-2 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-100 ease-in-out">
              <Image
                src="/plus.png"
                alt="Adicionar Atendimento"
                width={32}
                height={32}
              />
            </DialogTrigger>
            <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
              <DialogHeader>
                <DialogTitle>Registre o seu próximo atendimento.</DialogTitle>
                <DialogDescription>
                  Atente-se aos dados do atendimento
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium ">
                    Nome do Cliente:
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-full p-3 border border-gray-300  focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-transparent"
                    placeholder="Digite o nome"
                  />
                </div>

                <div className="flex justify-end space-x-11 mt-6">
                  <button
                    type="button"
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
                  >
                    Cancelar
                  </button>
                  <Link href="/sellProducts">
                    <button className="bg-blue-500 rounded-full text-white px-6 py-2  hover:bg-blue-600 transition-all duration-300">
                      Confirmar
                    </button>
                  </Link>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
