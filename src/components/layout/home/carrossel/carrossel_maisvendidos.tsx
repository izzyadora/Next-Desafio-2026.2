import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardProduto, { Produto } from "@/src/components/ui/card_produto";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarrosselMaisVendidos({
  produtos,
  aoAdicionarAoCarrinho,
}: {
  produtos: Produto[];
  aoAdicionarAoCarrinho?: (produto: Produto) => void;
}): React.ReactNode {
  const refAnterior = useRef<HTMLButtonElement>(null);
  const refProximo = useRef<HTMLButtonElement>(null);
  return (
    <div className="relative px-10">
      <button
        ref={refAnterior}
        aria-label="Anterior"
        className="text-chocolate hover:text-militar-500 absolute top-1/2 left-0 z-10 -translate-y-1/2 transition-colors disabled:opacity-30"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

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
          el: ".paginacao-carrossel-customizada",
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
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
    </div>
  );
}
