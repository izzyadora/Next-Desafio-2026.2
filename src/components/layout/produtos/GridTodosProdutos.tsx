"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardProduto from "@/src/components/ui/CardProduto";
import { ProductCard } from "@/types/data";

type MaisVendidosProps = {
  products: ProductCard[];
};

export default function GridTodosProdutos({ products }: MaisVendidosProps) {
   return (
    <section className="mx-auto w-full max-w-7xl px-8 py-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {products.map((product) => (
          <CardProduto key={product.id} produto={product} />
        ))}
      </div>
    </section>
  );
}