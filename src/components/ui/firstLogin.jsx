"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";

import { signOut, useSession } from "next-auth/react";
import { Input } from "./input";
import { useState } from "react";
import { updatePassword } from "@/services/api";

export default function FirstLogin({ id, token }) {
  async function logout() {
    await signOut({
      redirect: true,
    });
  }
  const user = useSession().data;
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSavePassword = async () => {
    const res = await updatePassword(user.id, user.token, password);
    console.log(res);
    window.alert("faça login novamente");
    logout();
  };
  return (
    <AlertDialog open={user.firstLogin}>
      <AlertDialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Registre sua nova senha</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex gap-3 items-center">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            placeholder="Digite sua nova senha"
            onChange={handlePasswordChange}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleSavePassword}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
