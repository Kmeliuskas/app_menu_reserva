import CorpoPagina from "../_components/corpoPagina/page";
import { Header } from "../_components/header/page";

export default function PaginaEsperaDigital() {
    return (
        <div>
            {/* Cabeçalho padrão para as páginas do site online */}
            <Header />
            <CorpoPagina className="bg-green-500">
                <h1>Teste</h1>
            </CorpoPagina>
        </div>
    )
}