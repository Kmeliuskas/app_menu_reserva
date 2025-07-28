export default function PaginaCozinha() {
    return (
        <div className="relative min-h-screen">

            {/* IMAGEM RESPONSÁVEL PELO FUNDO */}
            <div className="absolute inset-0 bg-[url('/imagens/bg.jpg')] bg-cover bg-center z-0"></div>

            {/* CABEÇALHO DA PÁGINA */}
            <header className="relative z-1 p-8 text-center border-b border-white">
                <h1 className="text-white text-2xl font-bold">
                    GERENCIAMENTO DE PEDIDOS COZINHA
                </h1>
            </header>

            {/* DEVIDINDO A TELA SEMPRE EM 2 PARTES LADO ESQUERDO PEDIDOS NOVOS/ LADO DIREITO PEDIDOS FINALIZADOS */}
            <section className="relative grid grid-cols-2 min-h-screen">

                {/* LADO ESQUERDO (PEDIDOS NOVOS) */}
                <div className="">
                    <h1 className="text-center text-[#E2CCA6] font-semibold  text-4xl py-3 border-b">NOVOS PEDIDOS</h1>

                    {/* NOVOS PEDIDOS VAO VIR EM FORMATO DE CARD*/}
                    <div className="p-2 grid grid-cols-2 justify-items-center gap-2">

                        {/* CARD 1 */}
                        <div className="w-full min-h-60 bg-white rounded-lg shadow-md shadow-white/50">
                            <h1 className="text-center text-2xl p-2 text-[#E2CCA6] font-semibold uppercase text-shadow-sm text-shadow-[#E2CCA6]">Pedido: 123 / Mesa: 13</h1>
                            <ul className="py-2 list-disc pl-8 ">
                                <li className="">2 Hamburgueres da casa sem cebola e com adicional de 2 hamburugers</li>
                                <li className="">2 porções de batata frita</li>
                            </ul>
                        </div>

                        {/* CARD 2  */}
                        <div className="w-full min-h-60 bg-white rounded-lg shadow-md shadow-white/50">
                            <h1 className="text-center text-2xl p-2 text-[#E2CCA6] font-semibold uppercase text-shadow-sm text-shadow-[#E2CCA6]">Pedido: 1233333 / Mesa: 13</h1>
                            <ul className="py-2 list-disc pl-8 ">
                                <li className="">2 Hamburgueres da casa sem cebola e com adicional de 2 hamburugers</li>
                                <li className="">2 porções de batata frita</li>
                            </ul>
                        </div>

                        {/* CARD 3  */}
                        <div className="w-full min-h-60 border bg-white rounded-lg"></div>
                    </div>

                </div>

                {/* LINHA DIVISÓRIA */}
                <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-white z-10" />


                {/* LADO DIREITO (PEDIDOS FINALIZADOS) */}
                <div className="">Lado direito</div>

            </section>
        </div>
    );
}
