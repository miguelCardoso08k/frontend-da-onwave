import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const servicesAndProducts = [
  {
    id: 4,
    type: "product",
    name: "Produto 2",
    legend: "Descrição do produto 2",
  },

  {
    id: 5,
    type: "product",
    name: "produto 3",
    legend: "Descrição do produto 3",
  },
];

const products = servicesAndProducts.filter((item) => item.type === "product");
export default function sellProducts() {
  return (
    <>
      <h1 className="text-lg text-red-500 font-serif font-bold">
        Página em desenvolvimento
      </h1>
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Título */}

        <span className="text-center pt-14 text-[#5d5988] text-[28px] font-extrabold leading-[38px]">
          Produtos & Serviços
        </span>

        {/* Botões para selecionar tema */}
        <div className="flex justify-center">
          <form className="w-[272px] h-[51px] bg-white rounded-[46px] flex items-center relative">
            <input
              type="search"
              placeholder="Pesquisar..."
              className="w-full h-full border-blue-400 border-2 bg-transparent rounded-[46px] pl-4 pr-10 outline-none"
            />
            <span className="absolute right-3 text-gray-500 cursor-pointer">
              <Image
                src="/pesquisa.png" // Substitua pelo caminho do seu ícone de lupa
                alt="Buscar"
                width={20}
                height={20}
              />
            </span>
          </form>
        </div>

        {/* Carrossel de Produtos */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-2xl text-blue-500 text-[28px] font-extrabold leading-[38px]">
            Produtos
          </h2>
          <Carousel className="w-full max-w-xs ">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col bg-white w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center cursor-pointer">
                    <Image
                      src="/caixabox.png"
                      alt={product.name}
                      width={50}
                      height={50}
                    />
                    <h3 className="text-lg font-bold mt-2 text-blue-600/90 text-center">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-center px-3 text-blue-400">
                      {product.legend}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
