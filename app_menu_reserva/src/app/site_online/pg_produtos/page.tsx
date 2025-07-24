import Image from "next/image";
import CorpoPagina from "../_components/corpoPagina/page";
import { Header } from "../_components/header/page";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PaginaProdutos() {
    return (
        <div>
            {/* Cabeçalho padrão para as páginas do site online */}
            <Header />
            <CorpoPagina>
                {/* SESSÃO DE EXPLORE NOSSO CARDÁPIO */}
                <section className="bg-[url('/imagens/local_escuro.jpg')] h-100 bg-cover bg-position-[50%_80%]">
                    <div className="flex flex-col lg:flex-row justify-between items-center py-20 px-10 ">
                        <h1 className="text-white text-3xl text-center md:text-6xl mb-1 lg:mb-0 ">EXPLORE <br/> NOSSO CARDÁPIO</h1>
                        <h1 className="text-white text-3xl font-prata md:text-6xl">DIFERENCIADO</h1>
                    </div>

                    <div className="flex justify-center items-center gap-x-5">
                        <div className="flex bg-[#948C70] p-1.5 rounded-lg">
                            <Icon icon={"material-symbols:search"} width={30} height={30} color="white" className="p-1" />
                            <input placeholder="Procure seu produto" type="text" className="outline-none text-white lg:w-100 ml-2" />
                        </div>
                        <div className="bg-[#948C70] p-1.5 rounded-full">
                            <Icon icon={"mingcute:settings-6-line"} width={30} height={30} color="white" className="p-0.5" />
                        </div>
                    </div>
                </section>

                {/* SESSÃO DE ALGUNS DOS NOSSOS PRATOS */}
                <section className="bg-[#2B2B23]">

                    {/* TITULO ALGUNS DOS NOSSOS PRATOS */}
                    <div className="flex justify-center items-center gap-2 py-8">
                        <Icon icon={"streamline-plump:fork-plate-solid"} width={40} height={40} color="white" className="p-0.5" />
                        <h1 className="text-white md:text-2xl lg:text-4xl">ALGUNS DOS NOSSOS PRATOS</h1>
                        <Icon icon={"streamline-plump:fork-plate-solid"} width={40} height={40} color="white" className="p-0.5" />
                    </div>

                    {/* SESSÃO DISPLAY GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-10 py-4 gap-5">

                        {/* CARDS DOS PRODUTOS */}
                        <div className="w-70 rounded-lg bg-black shadow-lg shadow-black">
                            <img src="/imagens/prato_lasanha.jpg" alt="" className="w-full h-48 object-cover rounded-t-lg mb-2" />
                            <div className="px-2">
                                <h5 className="text-white font-prata">Prato de lasanha refinado</h5>
                                <hr className="w-[20%] border-4 border-[#E2CCA6] my-2" />
                                <p className="text-white/60 text-sm"><span className="text-white font-semibold text-lg">Descrição:</span> Prato de lasanha com a massa mais refinada
                                    possivel com longo tempo de duração e qualidade.
                                </p>
                            </div>
                        </div>

                        <div className="w-70 rounded-lg bg-black shadow-lg shadow-black">
                            <img src="/imagens/prato_comida_japonesa.jpg" alt="" className="w-full h-48 object-cover rounded-t-lg mb-2" />
                            <div className="px-2">
                                <h5 className="text-white font-prata">Prato Japones</h5>
                                <hr className="w-[20%] border-4 border-[#E2CCA6] my-2" />
                                <p className="text-white/60 text-sm"><span className="text-white font-semibold text-lg">Descrição: </span>
                                    Prato Japones com as mais diversas Iguaris encontradas em nosso oceanos, 
                                    com a melhor qualidade e frescor possiveis
                                </p>
                            </div>
                        </div>

                        <div className="w-70 rounded-lg bg-black shadow-lg shadow-black">
                            <img src="/imagens/prato_comida_italiano.jpg" alt="" className="w-full h-48 object-cover object-bottom rounded-t-lg mb-2" />
                            <div className="px-2">
                                <h5 className="text-white font-prata">Prato de mariscos Italiano</h5>
                                <hr className="w-[20%] border-4 border-[#E2CCA6] my-2" />
                                <p className="text-white/60 text-sm"><span className="text-white font-semibold text-lg">Descrição:</span> Prato de lasanha com a massa mais refinada
                                    possivel com longo tempo de duração e qualidade.
                                </p>
                            </div>
                        </div>

                        <div className="w-70 rounded-lg bg-black shadow-lg shadow-black">
                            <img src="/imagens/prato_japones.jpg" alt="" className="w-full h-48 object-cover rounded-t-lg mb-2" />
                            <div className="px-2">
                                <h5 className="text-white font-prata">Prato Japones</h5>
                                <hr className="w-[20%] border-4 border-[#E2CCA6] my-2" />
                                <p className="text-white/60 text-sm"><span className="text-white font-semibold text-lg">Descrição:</span> Prato de lasanha com a massa mais refinada
                                    possivel com longo tempo de duração e qualidade.
                                </p>
                            </div>
                        </div>

                        <div className="w-70 rounded-lg bg-black shadow-lg shadow-black">
                            <img src="/imagens/hamburguer.jpg" alt="" className="w-full h-48 object-cover rounded-t-lg mb-2" />
                            <div className="px-2">
                                <h5 className="text-white font-prata">Hamburguer Top</h5>
                                <hr className="w-[20%] border-4 border-[#E2CCA6] my-2" />
                                <p className="text-white/60 text-sm"><span className="text-white font-semibold text-lg">Descrição:</span> Prato de lasanha com a massa mais refinada
                                    possivel com longo tempo de duração e qualidade.
                                </p>
                            </div>
                        </div>

                    </div>


                </section>




            </CorpoPagina>
        </div>
    )
}