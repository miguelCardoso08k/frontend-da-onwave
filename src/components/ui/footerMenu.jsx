"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function FooterMenu() {
  const pathname = usePathname();
  const user = useSession().data;

  const [activeItem, setActiveItem] = useState(pathname);
  const router = useRouter();

  const handleClick = (item) => {
    setActiveItem(item.href);
    router.push(item.href);
  };

  const routerAdmin = [
    {
      id: "home",
      label: "Home",
      img: "/homeactive.svg",
      href: "/homeScreen",
      width: 24,
      height: 24,
    },
    {
      id: "carteira",
      label: "Carteira",
      img: "/moneyactive.png",
      href: "/moneyScreen",
      width: 24,
      height: 24,
    },
    {
      id: "estoque",
      label: "Estoque",
      img: "/boxes/box.png",
      href: "/boxScreen",
      width: 20,
      height: 20,
    },
    {
      id: "equipe",
      label: "Equipe",
      img: "/usersactive.svg",
      href: "/myEmployeesScreen",
      width: 24,
      height: 24,
    },
  ];
  const routerUser = [
    {
      id: "home",
      label: "Home",
      img: "/homeactive.svg",
      href: "/homeScreen",
      width: 24,
      height: 24,
    },
  ];

  return (
    <footer className="w-[311px] h-[61px] bg-white  flex justify-center items-center min-w-screen fixed left-1/2 bottom-8 transform -translate-x-1/2 rounded-[75px]">
      <ul className="flex space-x-8">
        {routerAdmin.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col items-center justify-center h-[60px] transition-all duration-300 ${
              activeItem === item.href
                ? "bg-blue-200 rounded-full px-4"
                : "bg-transparent"
            }`}
            onClick={() => handleClick(item)}
          >
            <Image
              src={item.img}
              alt={item.id}
              width={item.width}
              height={item.height}
              className="max-w-full max-h-full object-contain"
            />
            {activeItem === item.href && (
              <span className="text-sm font-bold text-slate-900">
                {item.label}
              </span>
            )}
          </li>
        ))}

        {/* user.role === "ADMIN" ? routerAdmin.map((item) => (
            <li
              key={item.id}
              className={`flex flex-col items-center justify-center h-[60px] transition-all duration-300 ${
                activeItem === item.id
                  ? "bg-blue-200 rounded-full px-4"
                  : "bg-transparent"
              }`}
              onClick={() => handleClick(item)}
            >
              <Image
                src={item.img}
                alt={item.id}
                width={item.width}
                height={item.height}
                className="max-w-full max-h-full object-contain"
              />
              {activeItem === item.id && (
                <span className="text-sm font-bold text-slate-900">
                  {item.label}
                </span>
              )}
            </li>
            )) : routerUser.map((item) => (
            <li
              key={item.id}
              className={`flex flex-col items-center justify-center h-[60px] transition-all duration-300 ${
                activeItem === item.id
                  ? "bg-blue-200 rounded-full px-4"
                  : "bg-transparent"
              }`}
              onClick={() => handleClick(item)}
            >
              <Image
                src={item.img}
                alt={item.id}
                width={item.width}
                height={item.height}
                className="max-w-full max-h-full object-contain"
              />
              {activeItem === item.id && (
                <span className="text-sm font-bold text-slate-900">
                  {item.label}
                </span>
              )}
          </li>
          ))*/}
      </ul>
    </footer>
  );
}
