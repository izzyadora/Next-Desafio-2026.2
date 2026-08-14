"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardProduto, { Produto } from "@/src/components/ui/CardProduto";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarrosselProdutosProps {
  produtos: Produto[];
}

export default function CarrosselProdutos({
  produtos,
}: CarrosselProdutosProps) {
  const itensPorPagina = 16;

  const paginasDeProdutos = Array.from(
    { length: Math.ceil(produtos.length / itensPorPagina) },
    (_, i) => produtos.slice(i * itensPorPagina, (i + 1) * itensPorPagina),
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass: "swiper-bullet-custom",
          bulletActiveClass: "swiper-bullet-active-custom",
        }}
        className="w-full pb-6"
      >
        {paginasDeProdutos.map((pagina, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pagina.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegação Inferior (Setas + Bolinhas) */}
      <div className="flex items-center justify-center gap-4 mt-8 font-dm-sans text-militar-500">
        <button
          aria-label="Página anterior"
          className="swiper-button-prev-custom text-xl font-bold cursor-pointer hover:text-militar-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          &lt;
        </button>

        <div className="swiper-pagination-custom flex items-center justify-center gap-2"></div>

        <button
          aria-label="Próxima página"
          className="swiper-button-next-custom text-xl font-bold cursor-pointer hover:text-militar-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          &gt;
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass:
            "inline-block h-2 w-2 rounded-full cursor-pointer transition-all duration-300 opacity-50 bg-militar-100",
          bulletActiveClass: "!opacity-100 !scale-125 !bg-militar-500",
        }}
      ></Swiper>
    </div>
  );
}
