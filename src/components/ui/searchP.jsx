"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; // Certifique-se de que o Input do ShadCN UI esteja importado
// import { Listbox } from "@/components/ui/listbox"; // Utilize Listbox para exibir as opções de seleção
import { Button } from "@/components/ui/button"; // Caso queira um botão para interagir
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function SearchP() {
  const [searchQuery, setSearchQuery] = useState(""); // Controle da pesquisa do input
  const [products, setProducts] = useState([]); // Lista de produtos encontrados
  const [selectedProduct, setSelectedProduct] = useState(null); // Produto selecionado

  // Lista simulada de produtos (substitua com dados reais)
  const mockProducts = [
    { id: "prod1", name: "Shampoo" },
    { id: "prod1", name: "Shampoo 2 em 1" },
    { id: "prod2", name: "Pente" },
    { id: "prod3", name: "Tesoura" },
    { id: "prod4", name: "Corte de cabelo" },
    { id: "prod5", name: "Pomada" },
    { id: "prod6", name: "Escova" },
  ];

  // Função para filtrar os produtos conforme a pesquisa
  const searchProducts = (query) => {
    const filtered = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  // Quando o usuário digita no input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      // Pesquisa apenas se o texto for maior que 2 caracteres
      searchProducts(query);
    } else {
      setProducts([]); // Limpa a lista de produtos se o texto for menor que 3 caracteres
    }
  };

  // Quando o produto é selecionado
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSearchQuery(product.name); // Atualiza o input com o nome do produto selecionado
    setProducts([]); // Limpa a lista de sugestões
  };

  return (
    <div className="w-full max-w-xs mx-auto p-4">
      {/* Input de pesquisa */}
      <div className="flex flex-col items-center">
        <label className="mb-2 text-lg">Pesquisar Produto</label>
        <Input
          type="search"
          placeholder="Digite o nome do produto"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>

      {/* Exibição da lista de sugestões */}
      {searchQuery && (
        <div className="mt-2 w-full max-h-40 overflow-y-auto border rounded shadow">
          {products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-2 text-gray-400">Nenhum produto encontrado</p>
          )}
        </div>
      )}

      {/* Exibição do produto selecionado com a opção de alterar */}
      {selectedProduct && (
        <div className="mt-4">
          <span>Produto Selecionado: {selectedProduct.name}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-blue-500 p-0 mt-2">
                Alterar Produto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Alterar Produto</DialogTitle>
              <DialogDescription>
                Você deseja alterar o produto selecionado?
              </DialogDescription>
              <Button
                variant="outline"
                onClick={() => setSelectedProduct(null)}
              >
                Sim
              </Button>
              <Button variant="outline" onClick={() => {}}>
                Não
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
