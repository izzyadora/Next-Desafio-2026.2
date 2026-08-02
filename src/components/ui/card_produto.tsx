'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

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
}

export default function CardProduto({ produto, aoAdicionarAoCarrinho }: PropsCardProduto) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="bg-creme text-chocolate flex h-full flex-col justify-between rounded-[24px] px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Imagem */}
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-white">
        {produto.imagemUrl ? (
          <Image
            src={produto.imagemUrl}
            alt={produto.nome}
            fill
            className="object-cover"
          />
        ) : (
          <div className="bg-offwhite h-full w-full" />
        )}
      </div>

      {/* Informações */}
      <div className="flex flex-1 flex-col justify-between pt-2">
        <div className="mb-4">
          <h3 className="font-dm-sans text-[1.2rem] font-bold leading-tight text-chocolate">
            {produto.nome}
          </h3>
          <p className="font-dm-sans mt-1 text-[0.8rem] text-chocolate/80">
            {produto.descricao}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="font-dm-sans text-[1.2rem] font-bold text-chocolate">
            {precoFormatado}
          </span>

          <button
            onClick={() => aoAdicionarAoCarrinho?.(produto)}
            className="bg-militar-500 hover:bg-militar-300 flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-offwhite transition-colors font-dm-sans"
          >
            <ShoppingCart className="h-3 w-3" />
            <span>Adicionar ao carrinho</span>
          </button>
        </div>
      </div>
    </div>
  );
}