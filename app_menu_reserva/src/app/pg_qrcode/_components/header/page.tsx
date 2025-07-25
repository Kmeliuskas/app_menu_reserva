import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex bg-[#2B2B23] gap-3 p-2">
            <div>
                <Image src={"/imagens/logo.png"} alt="Imagem da Logo" width={50} height={50} />
            </div>
            <nav>
                <ul className="flex flex-col gap-2">
                    <li className="flex gap-2">
                        <Icon icon={"ri:whatsapp-fill"} width={24} height={24} className="text-[#E2CCA6]/70" />
                        <p className="text-white">DELIVERY <span className="text-[#E2CCA6]">+55 (49) 9999-99999</span></p>
                    </li>
                    <li className="flex gap-2">
                        <Icon icon={"mdi:location"} width={24} height={24} className="text-[#E2CCA6]/70" />
                        <p className="text-white">Rua tal 135, Bairro tal</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}