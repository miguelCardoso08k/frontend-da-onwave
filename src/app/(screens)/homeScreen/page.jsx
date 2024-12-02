import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import FirstLogin from "@/components/ui/firstLogin";

import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function HomeScreen() {
  const user = await getServerSession(nextAuthOptions);

  return (
    <div>
      <div className="h-20 w-full bg-transparent rounded-b-md flex items-center justify-center fixed overflow-hidden">
        <Link href="/userScreen">
          <div className="fixed top-5 right-[-0.25rem] flex items-center bg-white shadow-lg p-3 rounded-lg">
            <Image
              src="/userbarb.png"
              alt="User"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <div className="ml-3 text-lg font-bold text-gray-800">
              {user.firstname} {user.lastname}
            </div>
          </div>
        </Link>
      </div>
      <FirstLogin id={user.id} token={user.token} />
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className="w-[300px] h-[250px] fixed top-[130px] bg-white flex flex-col  items-center rounded-[13px] shadow-lg ">
          <Image
            src="/logoonwave.png"
            alt="Onwave Logo"
            className=""
            width={200}
            height={200}
            priority
          />
          <span className="text-center text-black text-sm font-bold px-2 break-word">
            Seja bem-vindo, {user.firstname} {user.lastname}. Esse é o mural de
            notificações.
          </span>
        </div>

        <Link
          href="/historyScreen"
          passHref
          className="w-[150px] h-[43px] px-7 fixed bottom-[190px] flex items-center bg-white rounded-full shadow-lg"
        >
          <Image
            src="/historicobook.png"
            alt="Histórico"
            width={30}
            height={30}
            className=""
          />
          <span className="pl-2 text-black text-sm font-bold">Histórico</span>
        </Link>

        <Link
          href="/serviceScreen"
          passHref
          className="w-[150px] h-[43px] px-2 fixed bottom-[120px] flex items-center bg-white rounded-full shadow-lg"
        >
          <Image
            src="/atendimentotesoura.png"
            alt="Atendimento Tesoura"
            width={30}
            height={30}
            className=""
          />
          <span className="pl-2 text-black text-sm font-bold">Atendimento</span>
        </Link>
      </div>
    </div>
  );
}
