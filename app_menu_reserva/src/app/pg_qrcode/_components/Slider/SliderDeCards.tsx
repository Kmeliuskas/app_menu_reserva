'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Item {
  imagem: string;
  titulo: string;
  descricao: string;
}

interface SliderDeCardsProps {
  grupos: Item[][];
}

export default function SliderDeCards({ grupos }: SliderDeCardsProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full px-5 md:w-md lg:w-2xl">

      {/* Setas fora do Swiper */}
      <button ref={prevRef} className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:bg-white hover:text-black transition">
        <Icon icon={"ep:arrow-left-bold"} width={20} height={20} />
      </button>

      <button ref={nextRef} className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:bg-white hover:text-black transition">
        <Icon icon={"ep:arrow-right-bold"} width={20} height={20} />
      </button>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onInit={(swiper) => {
          // Linkando as setas aos elementos DOM reais
          //@ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {grupos.map((grupo, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#2B2B23]/60 rounded-xl p-4 h-[400px] overflow-hidden flex flex-col">

              {/* SCROLL INTERNO DOS ITENS */}
              <div className="overflow-y-auto flex-1 pr-2 space-y-4 esconder-scroll ">
                {grupo.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-4 ">

                      {/* IMAGEM VINDA DO OBJETO DO PRODUTO */}
                      <img src={item.imagem} alt={item.titulo} className="w-14 h-14 rounded-xl object-cover" />

                      {/* DESCRIÇÃO DOS ITENS DO PRODUTO */}
                      <div className="text-white text-sm">

                         {/* TITULO DO PRODUTO */}
                        <h3 className="font-bold text-[#E2CCA6] mb-2 uppercase">{item.titulo}</h3>
                        
                        {/* DESCRIÇÃO DO PRODUTO */}
                        <p className='text-[#E2CCA6]'>Descrição: <span className='text-white'>{item.descricao}</span></p>
                      </div>
                    </div>

                    {/* LINHA INFERIOR DE DIVISÃO DOS PRODUTOS */}
                    <div className='flex items-center'>
                      <hr className='w-[50%] border-1 border-[#E2CCA6] me-1' />
                      <Icon icon={"fluent-emoji-high-contrast:fork-and-knife-with-plate"} width={40} height={40} color='#E2CCA6' />
                      <hr className='w-[50%] border-1 border-[#E2CCA6] ms-1' />
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTÃO FIXO NO FINAL */}
              <div className="text-white text-center pt-3 text-xs font-bold flex justify-center items-center gap-2">
                MAIS OPÇÕES
                <Icon icon={"ep:arrow-down-bold"} width={20} height={20} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
