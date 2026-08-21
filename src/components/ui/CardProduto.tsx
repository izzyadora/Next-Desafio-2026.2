"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, ListPlus } from "lucide-react";

import { Product } from "@/types/data";

export interface MaisVendidosProps {
  product: Product;
}

export default function CardProduto({ product }: MaisVendidosProps) {
  const router = useRouter();


  const handleVerProduto = () => {
    router.push(`/visualizacao/${product.id}`);
  };

  const handleAdicionarECarrinho = () => {
    router.push("/carrinho");
  };

  return (
    <Link href={`/visualizacao/${product.id}`}>
      <div className="bg-creme text-chocolate flex h-full w-full flex-col justify-between rounded-3xl px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-2xl bg-white">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-offwhite flex h-full w-full items-center justify-center">
              <p className="text-xs">Imagem não encontrada!</p>
            </div>
          )}
        </div>

        {/* Informações */}
        <div className="flex flex-1 flex-col justify-between pt-2">
          <div className="mb-4">
            <h3 className="font-dm-sans line-clamp-1 text-[1rem] font-bold leading-tight text-chocolate">
              {product.title}
            </h3>
            <p className="font-dm-sans mt-1 line-clamp-2 text-[0.8rem] text-chocolate/80">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-dm-sans text-[1.2rem] font-bold text-chocolate">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>

            <div className="flex gap-2">
              <button
                onClick={handleVerProduto}
                aria-label="Ver detalhes do produto"
                className="bg-militar-500 hover:bg-militar-300 font-dm-sans text-offwhite rounded-lg p-3 transition-colors"
              >
                <ListPlus className="h-4 w-4" />
              </button>

              <button
                onClick={handleAdicionarECarrinho}
                aria-label="Adicionar ao carrinho"
                className="bg-militar-500 hover:bg-militar-300 font-dm-sans text-offwhite rounded-lg p-3 transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
