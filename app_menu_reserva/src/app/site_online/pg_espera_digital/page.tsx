import CorpoPagina from "../_components/corpoPagina/page";
import { Header } from "../_components/header/page";

export default function PaginaEsperaDigital() {
    return (
        <div>
            {/* Cabeçalho padrão para as páginas do site online */}
            <Header />
            <CorpoPagina>
                <h1>Teste</h1>
            </CorpoPagina>
        </div>
    )
}