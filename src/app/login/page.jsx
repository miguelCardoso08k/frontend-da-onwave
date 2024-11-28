import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/ui/LoginForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RememberPassword from "@/components/ui/rememberPassword";

export default function Login() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className=" w-[300px] h-[600px] bg-white/50 backdrop-blur-[50px] items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] flex flex-col justify-center "
      >
        <Image
          src="/logoonwave.png"
          alt="Onwave Logo"
          className="dark:invert"
          width={200}
          height={200}
        />
        <LoginForm />

        <RememberPassword />
      </div>
    </div>
  );
}
