"use client";
import { useState } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Input } from "./input";
import { rememberPassword } from "@/services/api";

export default function RememberPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const res = await rememberPassword(email);
    if (res) {
      window.location.reload();
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        className=" w-[232px] h-[25px] text-center text-black/80 text-[15px]
        font-bold "
      >
        Esqueci minha senha
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
        <DialogHeader>
          <DialogTitle>Recuperar senha</DialogTitle>
          <DialogDescription>Informe seu email</DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 items-center">
          <label htmlFor="email">Email</label>

          <Input
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <DialogFooter className=" w-full">
          <div className="flex justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 font-semibold"
              onClick={handleSubmit}
              disabled={email === "" ? true : false}
            >
              Salvar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
