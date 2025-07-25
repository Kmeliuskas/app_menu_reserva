// 'use client';

import { Icon } from "@iconify/react/dist/iconify.js";
import CorpoPagina from "../_components/corpoPagina/page";
import Header from "../_components/header/page";
import SliderDeCards from "../_components/Slider/SliderDeCards";


export default async function ProdutoPage({ params, }: {
  params: Promise<{ idmesa: string }> //O parametro idmesa deve ser o mesmo nome da pasta que está em []
}) {

  //Aqui retorna o parametro dinamico
  const { idmesa } = await params; //Retonar o ID da Mesa que vai ACessar o QRCODE

  const dados = [
    // grupo 1
    [
      {
        imagem: '/imagens/hamburguer.jpg',
        titulo: 'Hamburguer Da casa',
        descricao: 'Hamburguer de carne suculenta dos nossos bois',
      },
      {
        imagem: '/imagens/hamburguer.jpg',
        titulo: 'Hamburguer Da casa',
        descricao: 'Hamburguer de carne suculenta dos nossos bois',
      },
      {
        imagem: '/imagens/hamburguer.jpg',
        titulo: 'Hamburguer Da casa',
        descricao: 'Hamburguer de carne suculenta dos nossos bois',
      },
      {
        imagem: '/imagens/hamburguer.jpg',
        titulo: 'Hamburguer Da casa',
        descricao: 'Hamburguer de carne suculenta dos nossos bois',
      },
      {
        imagem: '/imagens/hamburguer.jpg',
        titulo: 'Hamburguer Da casa',
        descricao: 'Hamburguer de carne suculenta dos nossos bois',
      },
      // repita para mais opções
    ],

    // grupo 2 (outro slide)
    [
      {
        imagem: '/imagens/hamburguer.jpg',
        titulo: 'Cheddar Max',
        descricao: 'Explosão de cheddar com carne angus',
      },
      // etc
    ],

    // grupo 2 (outro slide)
    [
      {
        imagem: '/imagens/hamburguer.jpg',
        titulo: 'Cheddar Max',
        descricao: 'Explosão de cheddar com carne angus',
      },
      // etc
    ],
  ];

  return (
    <div>
      {/* HEADER PADRÃO PARA A PÁGINA DE QRCODES (FOCADO NO MOBILE) */}
      <Header />

      {/* COMPONENTE PADRÃO PARA PODERMOS CRIAR AS PÁGINAS */}
      <CorpoPagina className="relative bg-[url(/imagens/jantar_natalino.jpg)] min-h-screen bg-cover bg-top">

        {/* CAMADA DE ESCURECIMENTO */}
        <div className="absolute inset-0 bg-[#2B2B23]/75 z-0"></div>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="relative z-1">

          {/* SESSÃO DE NOSSAS OPÇÕES */}
          <section className="flex justify-center items-center gap-2 py-4">
            <Icon icon={"material-symbols:dinner-dining"} width={24} height={24} color="white" />
            <h1 className="text-2xl text-white">NOSSAS <br /> OPÇÕES</h1>
            <Icon icon={"material-symbols:dinner-dining"} width={24} height={24} color="white" />
          </section>

          {/* SESSÃO DO FORMULÁRIO */}
          <section className="flex justify-center">
            <SliderDeCards grupos={dados} />
          </section>

        </main>

      </CorpoPagina>
    </div>
  );
}
