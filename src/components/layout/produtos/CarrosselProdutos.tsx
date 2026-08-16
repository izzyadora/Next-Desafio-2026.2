"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardProduto, { Produto } from "@/src/components/ui/CardProduto";
import { PRODUTOS } from "@/src/data/produtos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarrosselProdutosProps {
  produtos?: Produto[];
}

export default function CarrosselProdutos({
  produtos = PRODUTOS,
}: CarrosselProdutosProps) {
  const itensPorPagina = 16;

  const paginasDeProdutos = Array.from(
    { length: Math.ceil(produtos.length / itensPorPagina) },
    (_, i) => produtos.slice(i * itensPorPagina, (i + 1) * itensPorPagina),
  );

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }}
        className="w-full pb-6"
      >
        {paginasDeProdutos.map((pagina, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {pagina.map((produto) => (
                <div key={produto.id} className="h-full">
                  <CardProduto produto={produto} />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginação */}
      <div className="text-militar-500 font-dm-sans mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Página anterior"
          className="swiper-button-prev-custom hover:text-militar-300 cursor-pointer text-xl font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          &lt;
        </button>

        <div className="swiper-pagination-custom flex items-center justify-center gap-2" />

        <button
          aria-label="Próxima página"
          className="swiper-button-next-custom hover:text-militar-300 cursor-pointer text-xl font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
