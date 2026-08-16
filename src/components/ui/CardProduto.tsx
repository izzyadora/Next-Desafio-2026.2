"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingCart, ListPlus } from "lucide-react";

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl: string;
}

interface PropsCardProduto {
  produto: Produto;
  aoAdicionarAoCarrinho?: (produto: Produto) => void;
  redirecionarIndividual?: (produto: Produto) => void;
}

export default function CardProduto({
  produto,
  aoAdicionarAoCarrinho,
  redirecionarIndividual,
}: PropsCardProduto) {
  const router = useRouter();

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleVerProduto = () => {
    if (redirecionarIndividual) {
      redirecionarIndividual(produto);
    } else {
      router.push(`/visualizacao/${produto.id}`);
    }
  };

  const handleAdicionarECarrinho = () => {
    if (aoAdicionarAoCarrinho) {
      aoAdicionarAoCarrinho(produto);
    }
    router.push("/carrinho");
  };

  return (
  
    <div className="bg-creme text-chocolate flex h-full w-full flex-col justify-between rounded-3xl px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-2xl bg-white">
        {produto.imagemUrl ? (
          <Image
            src={produto.imagemUrl}
            alt={produto.nome}
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
            {produto.nome}
          </h3>
          <p className="font-dm-sans mt-1 line-clamp-2 text-[0.8rem] text-chocolate/80">
            {produto.descricao}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="font-dm-sans text-[1.2rem] font-bold text-chocolate">
            {precoFormatado}
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
  );
}