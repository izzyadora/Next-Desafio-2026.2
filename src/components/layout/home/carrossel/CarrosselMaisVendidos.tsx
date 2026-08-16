"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardProduto, { Produto } from "@/src/components/ui/CardProduto";
import { PRODUTOS_MAIS_VENDIDOS } from "@/src/data/produtos";

interface CarrosselMaisVendidosProps {
  produtos?: Produto[];
  aoAdicionarAoCarrinho?: (produto: Produto) => void;
  redirecionarIndividual?: (produto: Produto) => void;
}

export default function CarrosselMaisVendidos({
  produtos = PRODUTOS_MAIS_VENDIDOS,
  aoAdicionarAoCarrinho,
  redirecionarIndividual,
}: CarrosselMaisVendidosProps) {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-2 max-w-2xl mx-auto text-center">
          <p className="font-dm-sans text-xs sm:text-sm text-militar-300 tracking-[0.15em] font-black uppercase">
            Os mais populares entre a galera!
          </p>
          <h2 className="font-source-serif text-2xl sm:text-4xl md:text-[2.4rem] font-bold text-chocolate leading-tight">
            Mais vendidos
          </h2>
        </div>

        <div className="relative pt-8">
          <button
            id="btn-prev-mais-vendidos"
            aria-label="Anterior"
            className="bg-creme/90 text-chocolate hover:bg-militar-500 hover:text-offwhite absolute -left-5 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full p-2.5 shadow-md transition-all duration-200 md:flex disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            id="btn-next-mais-vendidos"
            aria-label="Próximo"
            className="bg-creme/90 text-chocolate hover:bg-militar-500 hover:text-offwhite absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full p-2.5 shadow-md transition-all duration-200 md:flex disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: "#btn-prev-mais-vendidos",
              nextEl: "#btn-next-mais-vendidos",
            }}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
              bulletClass: "swiper-bullet-custom",
              bulletActiveClass: "swiper-bullet-active-custom",
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
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-4"
          >
            {produtos.map((produto) => (
              <SwiperSlide key={produto.id} className="!h-auto">
                <div className="h-full">
                  <CardProduto
                    produto={produto}
                    aoAdicionarAoCarrinho={aoAdicionarAoCarrinho}
                    redirecionarIndividual={redirecionarIndividual}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination mt-6 hidden justify-center gap-2 md:flex" />
        </div>
      </div>
    </section>
  );
}
