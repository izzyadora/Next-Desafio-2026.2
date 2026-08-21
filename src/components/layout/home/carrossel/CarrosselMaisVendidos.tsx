"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CardProduto from "@/src/components/ui/CardProduto";
import { Product } from "@/types/data";

type MaisVendidosProps = {
  products: Product[];
};



export default function CarrosselMaisVendidos({products}: MaisVendidosProps) {
  return (
    <></>
  );
}
