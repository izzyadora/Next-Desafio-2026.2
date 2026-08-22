"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

interface ItemCarrinho {
  id: string;
  nome: string;
  imagemUrl: string;
  preco: number;
  quantidade: number;
}

const CARRINHO_MOCK: ItemCarrinho[] = [
  {
    id: "p1",
    nome: "Panqueca de Blueberry",
    imagemUrl: "/images/panqueca_blueberry.jpg",
    preco: 24.99,
    quantidade: 2,
  },
  {
    id: "p2",
    nome: "Cinnamon Roll",
    imagemUrl: "/images/cinnamonroll.jpg",
    preco: 16.9,
    quantidade: 2,
  },
];

const formataDinheiro = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function PaginaCarrinho() {
  const [itens, setItems] = useState<ItemCarrinho[]>(CARRINHO_MOCK);
  const [cep, setCep] = useState("");

  const mudaQtd = (id: string, diferenca: number) => {
    setItems((anterior) =>
      anterior.map((item) => {
        if (item.id !== id) return item;
        const novaQtd = Math.min(Math.max(item.quantidade + diferenca, 1), 99);
        return { ...item, quantidade: novaQtd };
      }),
    );
  };

  const tiraDoCarrinho = (id: string) => {
    setItems((anterior) => anterior.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () => itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0),
    [itens],
  );

  const frete = 0;
  const total = subtotal + frete;

  return (
    <section className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-dm-sans text-chocolate">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-source-serif font-bold">
            Carrinho
          </h1>
          <p className="text-sm md:text-base text-militar-500">
            Confira os produtos que você adicionou ao seu carrinho e finalize
            sua compra.
          </p>
        </header>

        {itens.length === 0 ? (
          <CarrinhoVazio />
        ) : (
          <>
            <div className="flex justify-end">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 rounded-full border border-chocolate/20 px-5 py-2.5 text-sm font-semibold hover:bg-creme transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Continuar comprando
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden border border-militar-100/30 bg-white">
              <div className="hidden md:grid grid-cols-[2fr_1fr_1.4fr_1fr_auto] items-center gap-4 bg-chocolate text-creme px-6 py-4 text-sm font-semibold">
                <span>Produto</span>
                <span>Preço Unitário</span>
                <span className="text-center">Quantidade</span>
                <span className="text-right">Total</span>
                <span className="sr-only">Ações</span>
              </div>

              <ul className="divide-y divide-militar-100/30">
                {itens.map((item) => (
                  <ItensCarrinho
                    key={item.id}
                    item={item}
                    mudaQtd={mudaQtd}
                    tiraDoCarrinho={tiraDoCarrinho}
                  />
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-creme rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="font-source-serif text-xl sm:text-2xl font-bold">
                  Calcular frete
                </h2>
                <div className="space-y-2">
                  <label htmlFor="cep" className="block text-sm">
                    Digite o CEP
                  </label>
                  <input
                    id="cep"
                    type="text"
                    inputMode="numeric"
                    placeholder="00000-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    maxLength={9}
                    className="w-full sm:w-64 rounded-full border border-chocolate/30 bg-white px-4 py-2.5 text-sm placeholder:text-militar-100 focus:outline-none focus:ring-2 focus:ring-militar-500"
                  />
                </div>
              </div>

              <div className="bg-creme rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="font-source-serif text-xl sm:text-2xl font-bold">
                  Resumo do Pedido
                </h2>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>{formataDinheiro(frete)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-chocolate/10">
                    <span>TOTAL</span>
                    <span>{formataDinheiro(total)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-chocolate hover:bg-oliva text-creme font-medium py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  Ir para o Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ItensCarrinho({
  item,
  mudaQtd,
  tiraDoCarrinho,
}: {
  item: ItemCarrinho;
  mudaQtd: (id: string, diferenca: number) => void;
  tiraDoCarrinho: (id: string) => void;
}) {
  return (
    <li className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1.4fr_1fr_auto] items-center gap-4 px-6 py-5">
      <div className="flex items-center gap-4 col-span-2 md:col-span-1">
        <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden bg-offwhite border border-militar-100/30">
          <Image
            src={item.imagemUrl}
            alt={item.nome}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <span className="text-sm sm:text-base font-medium">{item.nome}</span>
      </div>

      <span className="text-sm sm:text-base">
        <span className="md:hidden text-militar-300 mr-1">Preço:</span>
        {formataDinheiro(item.preco)}
      </span>

      <div className="flex items-center gap-2 md:justify-center">
        <button
          type="button"
          onClick={() => mudaQtd(item.id, -1)}
          disabled={item.quantidade <= 1}
          aria-label={`Diminuir quantidade de ${item.nome}`}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-militar-500 text-creme hover:bg-oliva transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>

        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-offwhite text-sm font-semibold">
          {item.quantidade}
        </span>

        <button
          type="button"
          onClick={() => mudaQtd(item.id, 1)}
          aria-label={`Aumentar quantidade de ${item.nome}`}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-militar-500 text-creme hover:bg-oliva transition-colors"
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
      </div>

      <span className="text-sm sm:text-base font-bold md:text-right">
        <span className="md:hidden text-militar-300 mr-1 font-normal">
          Total:
        </span>
        {formataDinheiro(item.preco * item.quantidade)}
      </span>

      <button
        type="button"
        onClick={() => tiraDoCarrinho(item.id)}
        aria-label={`Remover ${item.nome}`}
        className="justify-self-end w-9 h-9 flex items-center justify-center rounded-full text-militar-300 hover:text-red-600 hover:bg-red-50 transition-colors"
      >
        <Trash2 className="w-4 h-4" strokeWidth={2} />
      </button>
    </li>
  );
}

function CarrinhoVazio() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center animate-fade-in">
      <ShoppingBag className="w-12 h-12 text-militar-300" strokeWidth={1.5} />
      <p className="text-militar-300">Seu carrinho está vazio.</p>
      <Link
        href="/produtos"
        className="inline-flex items-center gap-2 mt-2 rounded-full border border-chocolate/20 px-5 py-2.5 text-sm font-semibold hover:bg-creme transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Continuar comprando
      </Link>
    </div>
  );
}
