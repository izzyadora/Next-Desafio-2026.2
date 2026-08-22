"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardProduto from "@/src/components/ui/CardProduto";
import { ProductCard } from "@/types/data";

type MaisVendidosProps = {
  products: ProductCard[];
};

export default function CarrosselMaisVendidos({ products }: MaisVendidosProps) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-8 py-6">
      <button
        id="btn-prev-mais-vendidos"
        aria-label="Anterior"
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 p-2 text-chocolate transition-opacity hover:opacity-70 disabled:opacity-25"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        id="btn-next-mais-vendidos"
        aria-label="Próximo"
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 p-2 text-chocolate transition-opacity hover:opacity-70 disabled:opacity-25"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={products.length > 4}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
          bulletClass: "swiper-bullet-custom",
          bulletActiveClass: "swiper-bullet-active-custom",
        }}
        navigation={{
          prevEl: "#btn-prev-mais-vendidos",
          nextEl: "#btn-next-mais-vendidos",
        }}
        className="w-full pb-2"
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!h-full flex">
            <CardProduto produto={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-swiper-pagination mt-4 flex justify-center gap-2" />
    </section>
  );
}