import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
    return (
        <header className={"bg-[#faecd4] w-full flex justify-between items-center p-4"}>
            {/* TITULO DO HEADER */}
            <h1 className="font-semibold">CONFIGURAÇÕES</h1>

            {/* RESTANTE DO HEADER */}
            <div className="flex justify-center items-center">
                {/* INPUT DE PESQUISAR */}
                <div className="bg-[#2B2925]/60 flex w-60 items-center justify-items-center p-2 rounded-lg">
                    <Icon icon={"material-symbols:search"} color="white" width={24} />
                    <input type="search" placeholder="Pesquisar..." name="pesquisar" className="text-white w-full outline-none ms-1" />
                </div>

                {/* BOTAO DE NOTIFICAÇÕES */}
                <div className="bg-[#2B2925]/60 p-2 ms-3 rounded-lg">
                    <Icon icon={"guidance:bell"} color="#e4b666" width={24} />
                </div>

                {/* BOTAO DE AVATAR */}
                <div className="bg-[#2B2925]/60 p-2 ms-3 rounded-full">
                    <h1 className="text-white font-semibold">MK</h1>
                </div>
            </div>
        </header>
    );
}
