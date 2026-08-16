"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Minus, Plus, ShoppingCart, PackageX } from "lucide-react";
import { getProdutoById } from "@/src/data/produtos";

interface PaginaVisualizacaoProps {
  id?: string;
}

export default function PaginaVisualizacao({ id: idProp }: PaginaVisualizacaoProps) {
  const params = useParams<{ id?: string }>();
  const id = idProp ?? params?.id;

  const produto = id ? getProdutoById(id) : undefined;
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => setQuantidade((q) => Math.min(q + 1, 99));
  const diminuirQuantidade = () => setQuantidade((q) => Math.max(q - 1, 1));

  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  if (!produto) {
    return (
      <main className="min-h-screen bg-creme flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
          <PackageX className="w-12 h-12 text-militar-300" strokeWidth={1.5} />
          <h1 className="font-source-serif font-bold text-2xl text-chocolate">
            Produto não encontrado
          </h1>
          <p className="font-dm-sans text-militar-300">
            O produto que você procura não existe ou foi removido.
          </p>
          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-2 font-dm-sans text-sm text-militar-500 hover:text-oliva transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o cardápio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        {/* Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-dm-sans text-sm text-militar-300 hover:text-militar-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start animate-fade-in">
          {/* Imagem */}
          <div className="relative w-full aspect-square rounded-2xl border border-militar-100/40 bg-offwhite overflow-hidden shadow-sm">
            <Image
              src={produto.imagemUrl}
              alt={produto.nome}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Detalhes */}
          <div className="flex flex-col pt-1 md:pt-4">
            <h1 className="font-source-serif font-bold text-3xl sm:text-4xl text-chocolate leading-tight">
              {produto.nome}
            </h1>

            {produto.descricao && (
              <p className="font-dm-sans text-militar-300 mt-3 text-base leading-relaxed">
                {produto.descricao}
              </p>
            )}

            <p className="font-dm-sans font-bold text-2xl sm:text-3xl text-oliva mt-6">
              {formatarPreco(produto.preco)}
            </p>

            {/* Quantidade */}
            <div className="mt-8">
              <span className="font-dm-sans text-sm font-semibold text-chocolate">
                Quantidade
              </span>

              <div className="flex items-center gap-4 mt-3">
                <span className="font-dm-sans text-lg text-chocolate w-6 text-center">
                  {quantidade}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={aumentarQuantidade}
                    aria-label="Aumentar quantidade"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-militar-500 text-creme hover:bg-oliva transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={diminuirQuantidade}
                    aria-label="Diminuir quantidade"
                    disabled={quantidade <= 1}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-militar-500 text-creme hover:bg-oliva transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-militar-100/40 mt-8 mb-6" />

            {/* Adicionar ao carrinho */}
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-militar-500 hover:bg-oliva text-creme font-dm-sans font-medium px-8 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={2} />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

