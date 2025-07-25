import CorpoPagina from "../_components/corpoPagina/page";
import { Header } from "../_components/header/page";

export default function PaginaEsperaDigital() {
    return (
        <div>
            {/* Cabeçalho padrão para as páginas do site online */}
            <Header />
            <CorpoPagina className="relative bg-[url(/imagens/cafe_manha_escuro_1.png)] min-h-screen flex justify-center items-center bg-no-repeat bg-cover bg-top">
                <div className="absolute inset-0 bg-[#2a2a22]/40 z-0"></div> {/* Overlay com #2a2a22 */}
                <div className="backdrop-blur-xs text-center border border-red-500 w-100 md:w-250 h-100 flex borde">
                   <form className="flex flex-col">
                   <label className="text-white">Nome Completo</label>
                   <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputNomeCompleto" placeholder="Digite seu nome completo..." required />
                   <label className="text-white">Nome Completo</label>
                   <input className="border border-[#E2CCA6]/60 rounded-md text-white outline-none px-2 py-1" type="text" name="inputNomeCompleto" placeholder="Digite seu nome completo..." required />
                   </form>

                </div>
            </CorpoPagina>
        </div>
    )
}