"use client";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import {
  updateCommissionProcedure,
  updateCommissionProduct,
  updateFixedPayment,
} from "@/services/api";
import { useState } from "react";

export default function EditEmployee({ id, token, employeeId }) {
  // console.log(id);
  const [fixedPayment, setFixedPayment] = useState(0);
  const [commissionProcedure, setCommissionProcedure] = useState(0);
  const [commissionProduct, setCommissionProduct] = useState(0);

  const handleFixedPaymentChange = (e) => {
    setFixedPayment(e.target.value);
  };

  // Função para atualizar a comissão de corte
  const handleCommissionProcedureChange = (e) => {
    setCommissionProcedure(e.target.value);
  };

  // Função para atualizar a comissão de produto
  const handleCommissionProductChange = (e) => {
    setCommissionProduct(e.target.value);
  };

  const handleSaveFixedPayment = async () => {
    try {
      const result = await updateFixedPayment(
        id,
        token,
        employeeId,
        fixedPayment
      );
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      alert("Erro ao atualizar os dados");
    }
  };

  const handleSaveCommissionProcedure = async () => {
    try {
      const result = await updateCommissionProcedure(
        id,
        token,
        employeeId,
        commissionProcedure
      );

      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      alert("Erro ao atualizar os dados");
    }
  };

  const handleSaveCommissionProduct = async () => {
    try {
      const result = await updateCommissionProduct(
        id,
        token,
        employeeId,
        commissionProduct
      );

      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      alert("Erro ao atualizar os dados");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-slate-100 shadow-md h-10 w-10 rounded-full absolute right-0 top-2 flex justify-center items-center">
        <Image src="/editar.png" alt="editarfinanças" width={20} height={20} />
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
        <DialogHeader>
          <DialogTitle>Atualize os dados do funcionário</DialogTitle>
          <DialogDescription>
            Só é possivel atualizar os dados de pagamento e comissão
          </DialogDescription>
        </DialogHeader>
        {/* fixo */}
        <Dialog>
          <DialogTrigger>
            <Button className="min-w-[185px] bg-blue-600 hover:bg-blue-600 text-slate-200 font-semibold px-6">
              Pagamento Fixo
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Atualize o pagamento fixo</DialogTitle>
              <DialogDescription>Digite o valor em reais</DialogDescription>
            </DialogHeader>
            <Input
              type="number"
              value={fixedPayment}
              onChange={handleFixedPaymentChange}
              placeholder="Digite o valor do pagamento fixo"
            />
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 font-semibold"
                  onClick={handleSaveFixedPayment}
                >
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Comissão corte */}
        <Dialog>
          <DialogTrigger>
            <Button className="w-[185px] bg-blue-600 hover:bg-blue-600 text-slate-200 font-semibold px-6">
              Comissão de corte
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Atualize a comissão de corte</DialogTitle>
              <DialogDescription>
                O valor digitado será usado em %
              </DialogDescription>
            </DialogHeader>
            <Input
              type="number"
              value={commissionProcedure}
              onChange={handleCommissionProcedureChange}
              placeholder="Digite o valor da comissão"
            />
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 font-semibold"
                  onClick={handleSaveCommissionProcedure}
                >
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* comissão por produto */}
        <Dialog>
          <DialogTrigger>
            <Button className="w-[185px] bg-blue-600 hover:bg-blue-600 text-slate-200 font-semibold px-4">
              Comissão de produto
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Atualize a comissão de produto</DialogTitle>
              <DialogDescription>
                O valor digitado será usado em %
              </DialogDescription>
            </DialogHeader>
            <Input
              type="number"
              value={commissionProduct}
              onChange={handleCommissionProductChange}
              placeholder="Digite o valor da comissão"
            />
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 font-semibold"
                  onClick={handleSaveCommissionProduct}
                >
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <DialogFooter>
          <DialogClose>
            <div>
              <Button className="text-slate-200" variant="destructive">
                Fechar
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
