"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; //Ajuda a identificar a rota atual para podermos deixar ativo ou não o link


export function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const pathname = usePathname();

    return (
        <div>
            {/* MOSTRANDO SOMENTE CASO A TELA FOR TAMANHO LG > */}
            <header className="hidden lg:block">
                {/* LINHA SUPERIOR DO HEADER */}
                <section className="bg-[#2B2B23]/95 flex justify-around p-2">
                    <h1 className="text-white"><span className="text-[#E2CCA6] font-semibold">inscreva-se</span> para ganhar 20% no seu primeiro cadastro</h1>
                    <h1 className="text-white"><span className="text-[#E2CCA6] font-semibold">Telefone</span> +55 (49) 999-99999</h1>
                </section>

                {/* LINHA INFERIOR DO HEADER */}
                <section className="flex gap-10 justify-center items-center bg-[#2B2B23]">
                    <div className="">
                        <Image className="" alt="Imagem da Logo" src={"/imagens/logo.png"} width={80} height={80} priority={true} />
                    </div>
                    <div className="flex items-center bg-[#948C70] rounded-full py-1 px-3">
                        <input className="text-white outline-none" type="text" placeholder="Pesquisar..." />
                        <Icon icon={"material-symbols:search"} color="white" width="24" height="24" />
                    </div>
                    <nav>
                        <ul className="flex gap-2">
                            <li className={`${pathname === "/site_online/pg_produtos" ? "text-[#E2CCA6]/50" : "text-white"} hover:text-[#E2CCA6]/50 transition-colors duration-300`}><Link href={"/site_online/pg_produtos"}>-NOSSOS PRODUTOS-</Link></li>
                            {/* <li className={`${pathname === "/site_online/pg_restaurentes" ? "text-[#E2CCA6]/50" : "text-white"} hover:text-[#E2CCA6]/50 transition-colors duration-300`}><Link href={"/"}>-RESTAURANTES-</Link></li> */}
                            <li className={`${pathname === "/site_online/pg_espera_digital" ? "text-[#E2CCA6]/50" : "text-white"} hover:text-[#E2CCA6]/50 transition-colors duration-300`}><Link href={"/site_online/pg_espera_digital"}>-ESPERA DIGITAL-</Link></li>
                            {/* <li className={`${pathname === "/site_online/pg_delivery" ? "text-[#E2CCA6]/50" : "text-white"} hover:text-[#E2CCA6]/50 transition-colors duration-300`}><Link href={"/"}>-DELIVERY-</Link></li> */}
                        </ul>
                    </nav>
                    <nav>
                        <ul className=" flex gap-4">
                            <li><Icon icon={"ic:baseline-facebook"} color="#E2CCA6" width="24" height="24" /></li>
                            <li><Icon icon={"mdi:instagram"} color="#E2CCA6" width="24" height="24" /></li>
                            <li><Icon icon={"ic:baseline-whatsapp"} color="#E2CCA6" width="24" height="24" /></li>
                            <li><Icon icon={"prime:twitter"} color="#E2CCA6" width="24" height="24" /></li>
                            <li><Icon icon={"mdi:youtube"} color="#E2CCA6" width="24" height="24" /></li>
                        </ul>
                    </nav>
                </section>
            </header>

            {/* **** HEADER MOBILE **** */}
            <header className="block lg:hidden">

                {/* LINHA SUPERIOR DO HEADER */}
                <section className="bg-[#2B2B23]/95 flex flex-col md:flex-row text-center justify-around p-2 gap-2">
                    <h1 className="text-white"><span className="text-[#E2CCA6] font-semibold">inscreva-se</span> para ganhar 20% no seu primeiro cadastro</h1>
                    <h1 className="text-white"><span className="text-[#E2CCA6] font-semibold">Telefone</span> +55 (49) 999-99999</h1>
                </section>

                {/* LINHA INFERIOR DO HEADER */}
                <section className="flex gap-3 justify-center items-center bg-[#2B2B23] p-1">
                    <div className="">
                        <Image className="" alt="Imagem da Logo" src={"/imagens/logo.png"} width={80} height={80} priority={true} />
                    </div>
                    <div className="flex items-center bg-[#948C70] rounded-full py-1 px-3">
                        <input className="text-white outline-none" type="text" placeholder="Pesquisar..." />
                        <Icon icon={"material-symbols:search"} color="white" width="24" height="24" />
                    </div>
                    <Icon onClick={() => setMenuAberto(true)} icon={"material-symbols:menu-rounded"} color="#948C70" width={24} height={24} />
                </section>

                {/* MOSTRANDO O ASIDE SOMENTE SE O USUÁRIO CLICAR NO MENU */}
                {menuAberto && (
                    <>
                        {/* OVERLAY ESCURO */}
                        <div className="fixed inset-0 bg-black/60" onClick={() => setMenuAberto(false)} />

                        {/* ASIDE PARA SOBREPOR OS CONTEUDOS DO DRAWER DO MENU */}
                        <aside className={`fixed top-0 right-0 bg-white h-screen w-60 md:w-80 shadow-2xl transition-transform duration-300 ease-in-out z-50 ${menuAberto ? "translate-x-0" : "translate-x-full"}`}>

                            {/* LINHA SUPERIOR DO DRAWER */}
                            <div className="flex items-center justify-between p-3">
                                <h1>Menu</h1>
                                <Icon onClick={() => setMenuAberto(false)} icon={"material-symbols:close"} width={24} height={24} />
                            </div>

                            {/* NAVEGAÇÃO DE ITENS */}
                            <nav>
                                <ul className="flex flex-col gap-4 p-2">
                                    <li>
                                        <Link className="flex items-center gap-1" href={"/"}>
                                            <Icon icon={"material-symbols:menu-book-2"} width={30} height={30} />
                                            Nossos Produtos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-1" href={"/"}>
                                            <Icon icon={"ic:baseline-place"} width={30} height={30} />
                                            Restaurantes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-1" href={"/site_online/pg_espera_digital"}>
                                            <Icon icon={"material-symbols:table-bar"} width={30} height={30} />
                                            Espera Digital
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-1" href={"/"}>
                                            <Icon icon={"streamline-cyber:delivery-package-2"} width={30} height={30} />
                                            Delivery
                                        </Link>

                                    </li>
                                </ul>
                            </nav>
                        </aside>
                    </>
                )}
            </header>

        </div >
    )
}