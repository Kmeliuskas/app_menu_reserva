import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Rodape() {
    return (
        <footer className="bg-[#2B2B23] min-w-full p-2">
            <nav className="flex justify-center items-center">
                <ul className="flex gap-15">
                    <li className="flex flex-col justify-center items-center">
                        <div className="relative">
                            {/* BADGE QUE FICA EM CIMA DO ICONE DE SACOLA */}
                            <span className="absolute font-semibold text-white flex justify-center items-center top-1 -right-1 bg-red-500 w-6 h-6 rounded-full">2</span>
                            <Icon icon={"game-icons:shopping-bag"} width={50} height={50} color="#E2CCA6" />
                        </div>
                        <h1 className="text-white">PEDIDOS</h1>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <Icon icon={"mdi:cash-register"} width={50} height={50} color="#E2CCA6"/>
                        <h1 className="text-white">FECHAR CONTA</h1>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}