'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CardProduto, { Produto } from "@/src/components/ui/CardProduto";
import { ChevronRight, ChevronLeft } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarrosselMaisVendidos() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper rounded-lg shadow-lg"
      >
        <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white h-64 rounded-lg text-xl font-bold">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-green-500 text-white h-64 rounded-lg text-xl font-bold">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-purple-500 text-white h-64 rounded-lg text-xl font-bold">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
}