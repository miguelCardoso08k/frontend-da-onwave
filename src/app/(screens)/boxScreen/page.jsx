import { Button } from "@/components/ui/button";
import Image from "next/image";
// PopUpEditar Component
// PopUpExcluir Component
// PopUpNovoProduto Component
//PopUpNovoLote Component
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
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getProducts } from "@/services/api";
import { Stock } from "@/components/ui/formCreateStockMovement";
import Link from "next/link";
import { DeleteButtonProducts } from "@/components/ui/deleteBtnProducts";

export default async function BoxScreen() {
  const session = await getServerSession(nextAuthOptions);
  const products = await getProducts(
    session.id,
    session.token,
    session.barbershopId
  );
  // console.log(products);
  return (
    <div className="flex flex-col h-screen">
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[40px] p-4 bg-white shadow-lg rounded-full">
          <input
            type="search"
            placeholder="Nome do produto"
            className="w-full h-full bg-transparent rounded-[46px] pl-4 pr-12 outline-none"
          />
          <Button
            size="sm"
            className="bg-transparent  absolute right-3 text-gray-500 cursor-pointe hover:bg-transparent"
          >
            <Image
              src="/pesquisa.png" 
              alt="Buscar"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 mt-6 space-x-4">
        {/* add product */}

        <Button className="w-[200px] h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
          <Link href="/createProduct" className="flex items-center gap-2">
            <Image
              src="/plus.png"
              alt="Adicionar Produto"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="ml-2 text-sm font-bold text-blue-600">
              Novo Produto
            </span>
          </Link>
        </Button>

        {/* stockMovement */}
        <Stock id={session.id} token={session.token} products={products} />
      </div>

      <div className="w-screen flex justify-center items-center">
        <div className=" max-w-[calc(100%-40px)] w-[600px] h-[60vh] overflow-y-auto pb-1 flex flex-col gap-1">
          {products.length === 0 ? (
            <p className="text-center text-white font-semibold">
              Nenhum produto cadastrado.
            </p>
          ) : (
            products.map((product) => (
              <div className="p-4" key={product.id}>
                <div className="items-center justify-center bg-white shadow-lg p-4 rounded-lg ">
                  <div className="flex flex-col">
                    <div className="flex items-center ">
                      <Image
                        src="/caixabox.png"
                        alt="Caixa Box"
                        width={32}
                        height={32}
                      />
                      <div className="ml-4 flex-1">
                        <div className="text-lg font-semibold text-black">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          Quantidade: {product.stock}
                        </div>
                      </div>
                      <div>
                        <button className="flex flex-col">
                          <Image
                            src="/check.png"
                            alt="novolote"
                            className="pb-4"
                            width={24}
                            height={24}
                          />
                        </button>
                        {/* Botão para abrir pop-up de edição */}
                        <Dialog>
                          <DialogTrigger>
                            <Image
                              src="/editar.png"
                              alt="Editar"
                              width={24}
                              height={24}
                            />
                          </DialogTrigger>
                          <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg items-center">
                            <DialogHeader>
                              <DialogTitle> Editar meu produto</DialogTitle>
                              <DialogDescription>
                                <h1 className="text-lg text-red-500 font-serif font-bold">
                                  Página em desenvolvimento
                                </h1>
                              </DialogDescription>
                            </DialogHeader>
                            <input
                              type="search"
                              placeholder="Nome do produto"
                              className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-10 border-2 border-[#008fd7] focus:outline-none"
                            />
                            {/* Input de número */}
                            <input
                              type="number"
                              placeholder="0000"
                              className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
                            />
                            {/* Botão de enviar */}
                            <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
                              Mudar
                            </button>
                          </DialogContent>
                        </Dialog>
                        {/* Botão para abrir pop-up de exclusão */}
                        <Dialog>
                          <DialogTrigger className="flex flex-col">
                            <Image
                              src="/lixeira.png"
                              alt="Excluir"
                              className="pt-4"
                              width={24}
                              height={24}
                            />
                          </DialogTrigger>
                          <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg items-center ">
                            <DialogHeader>
                              <DialogTitle> Excluir produto</DialogTitle>
                              <DialogDescription>
                                Essa ação não poderá ser revertida.
                              </DialogDescription>
                            </DialogHeader>
                            <DeleteButtonProducts
                              id={session.id}
                              token={session.token}
                              barbershopId={session.barbershopId}
                              productId={product.id}
                            >
                              Tenho certeza
                            </DeleteButtonProducts>
                            {/* Botão de desistir */}
                            <DialogClose className=" px-6 py-2 bg-black rounded-lg  text-white">
                              Desistir
                            </DialogClose>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
