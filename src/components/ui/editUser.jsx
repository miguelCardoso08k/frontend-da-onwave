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
import { useState } from "react";
import { useSession } from "next-auth/react";
import { updateCellphone, updatePassword } from "@/services/api";

export default function EditUser() {
  const user = useSession().data;
  const [password, setPassword] = useState("");
  const [cellphone, setCellphone] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCellphoneChange = (e) => {
    setCellphone(e.target.value);
  };

  const handleSavePassword = async () => {
    const res = await updatePassword(user.id, user.token, password);
    console.log(res);
    window.location.reload();
  };

  const handleSaveCellphone = async () => {
    const res = await updateCellphone(user.id, user.token, cellphone);
    console.log(res);
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute right-5 top-5">
          <Image
            src="/editar.png"
            alt="editarfinanças"
            width={20}
            height={20}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
        <DialogHeader>
          <DialogTitle>Atualize seu perfil</DialogTitle>
          <DialogDescription>Escolha uma opção</DialogDescription>
        </DialogHeader>
        {/* mudar Celular */}

        <Dialog>
          <DialogTrigger>
            <Button className="bg-blue-600 hover:bg-blue-600 font-semibold">
              Atualizar Contato
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Contato</DialogTitle>
              <DialogDescription>
                Atualize seu número para contato
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 items-center">
              <label htmlFor="cellphone">Celular</label>
              <Input
                type="text"
                pattern="\d{2}\s9\d{4}-\d{4}"
                placeholder="xx xxxxx-xxxx"
                onChange={handleCellphoneChange}
              />
            </div>
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 font-semibold"
                  onClick={handleSaveCellphone}
                >
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* mudar senha */}
        <Dialog>
          <DialogTrigger>
            <Button className="px-6 bg-blue-600 hover:bg-blue-600 font-semibold  ">
              Atualizar Senha
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Senha</DialogTitle>
              <DialogDescription>Atualize sua senha</DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 items-center">
              <label htmlFor="cellphone">Senha</label>
              <Input
                type="password"
                placeholder="Digite sua nova senha"
                onChange={handlePasswordChange}
              />
            </div>
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 font-semibold"
                  onClick={handleSavePassword}
                >
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* <Button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-600 font-semibold  "
                  >
                    Salvar
                  </Button> */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Voltar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
