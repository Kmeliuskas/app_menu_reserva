'use client';

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();

  const [menuAberto, setMenuAberto] = useState(true);

  const links = [
    { href: "/dashboard/pg_dashboard", label: "DASHBOARD", icon: "carbon:dashboard" },
    { href: "/dashboard/pg_pedidos", label: "PEDIDOS", icon: "lsicon:order-outline" },
    { href: "/dashboard/pg_itens_do_menu", label: "ITENS DO MENU", icon: "material-symbols:menu-book-2" },
    { href: "/dashboard/pg_pagamentos", label: "PAGAMENTO", icon: "streamline-ultimate:cash-payment-bill-bold" },
    { href: "/dashboard/pg_reservas", label: "RESERVAS", icon: "solar:calendar-bold" },
    { href: "/dashboard/pg_configuracoes", label: "CONFIGURAÇÕES", icon: "lets-icons:setting-fill" },
  ];

  // Encontra o índice do link ativo
  const linkAtivo = links.findIndex(link => link.href === pathname);

  return (
    <aside className={`bg-white ${menuAberto ? 'w-60' : 'w-20'} transition-all min-h-screen flex flex-col justify-between`}>

      {/* LOGO */}
      <div className={`flex justify-around items-center py-2 transition-all duration-200 bg-[#2B2925] ${pathname === "/dashboard/pg_dashboard" ? 'rounded-br-2xl' : 'rounded-none'}`}>
        {menuAberto && (
          <Image priority={true} src={"/imagens/logo.png"} width={80} height={80} alt="Logo" />
        )}
        <Icon className="cursor-pointer" icon={"oui:menu-left"} width={40} height={40} color="#E2CCA6" onClick={() => { setMenuAberto(!menuAberto) }} />
      </div>

      <nav className="flex flex-col flex-grow bg-[#2B2925]">
        <ul className="flex flex-col">

          {links.map((link, index) => {

            //VERIFICA SE O LINK ESTÁ ATIVO
            const isActive = pathname === link.href; //Verifica com o patch retorna true ou false caso não seja igual o caminho

            const baseStyle = "flex items-center gap-2 px-4 py-2 transition-all duration-200";
            const activeStyle = isActive ? "bg-white rounded-l-full text-[#2B2925] font-semibold" : "bg-[#2B2925] text-[#E2CCA6]";
            const iconColor = isActive ? "#2B2925" : "#E2CCA6";

            // Adiciona borda inferior se este for o item acima do ativo
            const extraBorder = isActive ? "rounded-br-2xl" : "";

            return (
              <li key={link.href} className={`bg-[#2B2925] pl-3 ${extraBorder}`}>
                <Link href={link.href} className={`${baseStyle} ${activeStyle}`}>
                  <Icon icon={link.icon} width={24} height={24} color={iconColor} />
                  {menuAberto && (
                    <span>
                      {link.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* SAIR */}
        <div className="mt-auto p-2 flex justify-center items-center">
          <ul>
            <li className="flex items-center gap-2 text-[#E2CCA6] cursor-pointer hover:text-white">
              <Icon icon={"mingcute:exit-line"} width={24} height={24} />
              <span>SAIR</span>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
