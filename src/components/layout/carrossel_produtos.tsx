'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import CardProduto, { Produto } from '@/src/components/ui/card_produto';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PropsCarrosselProdutos {
  titulo: string;
  linkVerTudo?: string;
  produtos: Produto[];
  aoAdicionarAoCarrinho?: (produto: Produto) => void;
}

export default function CarrosselProdutos({
  titulo,
  linkVerTudo,
  produtos,
  aoAdicionarAoCarrinho,
}: PropsCarrosselProdutos) {
  const refAnterior = useRef<HTMLButtonElement>(null);
  const refProximo = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-offwhite w-full py-12 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-source-serif text-2xl md:text-3xl font-bold text-chocolate">
            {titulo}
          </h2>

          {linkVerTudo && (
            <a
              href={linkVerTudo}
              className="border-oliva text-oliva font-dm-sans font-bold hover:bg-oliva hover:text-offwhite flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition-all"
            >
              <span>Ver tudo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Swiper Container */}
        <div className="relative px-6 md:px-10">
          {/* Botão Anterior */}
          <button
            ref={refAnterior}
            aria-label="Anterior"
            className="text-chocolate hover:text-militar-500 absolute top-1/2 left-0 z-10 -translate-y-1/2 transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Botão Próximo */}
          <button
            ref={refProximo}
            aria-label="Próximo"
            className="text-chocolate hover:text-militar-500 absolute top-1/2 right-0 z-10 -translate-y-1/2 transition-colors disabled:opacity-30"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.paginacao-carrossel-customizada',
            }}
            navigation={{
              prevEl: refAnterior.current,
              nextEl: refProximo.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = refAnterior.current;
                swiper.params.navigation.nextEl = refProximo.current;
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="py-2"
          >
            {produtos.map((produto) => (
              <SwiperSlide key={produto.id} className="h-auto">
                <CardProduto
                  produto={produto}
                  aoAdicionarAoCarrinho={aoAdicionarAoCarrinho}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Paginação */}
          <div className="paginacao-carrossel-customizada mt-6 flex justify-center gap-1.5 [&_.swiper-pagination-bullet-active]:!bg-militar-500 [&_.swiper-pagination-bullet]:!bg-militar-100 [&_.swiper-pagination-bullet]:!opacity-100" />
        </div>
      </div>
    </section>
  );
}