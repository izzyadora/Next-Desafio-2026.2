"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Loader2 } from "lucide-react";
import { updateCartItem, removeFromCart } from "@/actions/carrinho/actions";
import { calcularFreteBack } from "@/actions/frete/actions";

type ItemCarrinho = {
  id: number;
  nome: string;
  imagemUrl: string;
  preco: number;
  quantidade: number;
};

type OpcaoFrete = {
  id: number;
  name: string;
  price: string;
  custom_price: string;
  discount: string;
  currency: string;
  delivery_time: number;
  error?: string;
};

const formataDinheiro = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function PaginaCarrinho({
  itensIniciais,
}: {
  itensIniciais: ItemCarrinho[];
}) {
  const [itens, setItems] = useState<ItemCarrinho[]>(itensIniciais);
  const [cep, setCep] = useState("");
  
  const [opcoesFrete, setOpcoesFrete] = useState<OpcaoFrete[]>([]);
  const [freteSelecionado, setFreteSelecionado] = useState<OpcaoFrete | null>(null);
  const [carregandoFrete, setCarregandoFrete] = useState(false);
  const [erroFrete, setErroFrete] = useState<string | null>(null);

  const mudaQtd = async (id: number, diferenca: number) => {
    const itemAtual = itens.find((index) => index.id === id);
    if (!itemAtual) return;

    const novaQtd = Math.min(Math.max(itemAtual.quantidade + diferenca, 1), 99);

    setItems((anterior) =>
      anterior.map((item) => (item.id === id ? { ...item, quantidade: novaQtd } : item))
    );

    try {
      await updateCartItem(id, novaQtd);
    } catch {
      setItems((anterior) =>
        anterior.map((item) => (item.id === id ? { ...item, quantidade: itemAtual.quantidade } : item))
      );
    }
  };

  const tiraDoCarrinho = async (id: number) => {
    const itemRemovido = itens.find((index) => index.id === id);
    setItems((anterior) => anterior.filter((item) => item.id !== id));

    try {
      await removeFromCart(id);
    } catch {
      if (itemRemovido) {
        setItems((anterior) => [...anterior, itemRemovido]);
      }
    }
  };

  // função para chamar a API de frete
  const calcularFrete = async () => {
  const cepLimpo = cep.replace(/\D/g, "");
  if (cepLimpo.length !== 8) {
    setErroFrete("Digite um CEP válido com 8 dígitos.");
    return;
  }

  setCarregandoFrete(true);
  setErroFrete(null);
  setOpcoesFrete([]);
  setFreteSelecionado(null);


  const resultado = await calcularFreteBack(cepLimpo);

  if (resultado.error) {
    setErroFrete(resultado.error);
  } else if (resultado.data) {
    setOpcoesFrete(resultado.data);
    if (resultado.data.length > 0) {
      setFreteSelecionado(resultado.data[0]); 
    }
  }

  setCarregandoFrete(false);
};


  const subtotal = useMemo(
    () => itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0),
    [itens]
  );

  const valorFrete = freteSelecionado ? parseFloat(freteSelecionado.custom_price || freteSelecionado.price) : 0;
  const total = subtotal + valorFrete;

  return (
    <section className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-dm-sans text-chocolate">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-source-serif font-bold">Carrinho</h1>
          <p className="text-sm md:text-base text-militar-500">
            Confira os produtos que você adicionou ao seu carrinho e finalize sua compra.
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

            {/* tabela de Produtos */}
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

            {/* frete e Resumo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* cálculo do Frete */}
              <div className="bg-creme rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="font-source-serif text-xl sm:text-2xl font-bold">Calcular frete</h2>
                
                <div className="space-y-2">
                  <label htmlFor="cep" className="block text-sm font-medium">
                    Digite seu CEP
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="cep"
                      type="text"
                      inputMode="numeric"
                      placeholder="00000-000"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      maxLength={9}
                      className="w-full rounded-full border border-chocolate/30 bg-white px-4 py-2.5 text-sm placeholder:text-militar-100 focus:outline-none focus:ring-2 focus:ring-militar-500"
                    />
                    <button
                      type="button"
                      onClick={calcularFrete}
                      disabled={carregandoFrete}
                      className="px-5 py-2.5 bg-militar-500 text-creme font-semibold rounded-full hover:bg-chocolate transition-colors disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer"
                    >
                      {carregandoFrete ? <Loader2 className="w-4 h-4 animate-spin" /> : "Calcular"}
                    </button>
                  </div>
                  {erroFrete && <p className="text-xs text-red-600 pt-1">{erroFrete}</p>}
                </div>

                {/* opções de frete retornadas */}
                {opcoesFrete.length > 0 && (
                  <div className="pt-4 border-t border-chocolate/10 space-y-2">
                    <span className="text-xs font-semibold text-chocolate/80">Opções de entrega:</span>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {opcoesFrete.map((opcao) => (
                        <label
                          key={opcao.id}
                          className={`flex items-center justify-between p-3 rounded-xl border text-sm cursor-pointer transition-colors ${
                            freteSelecionado?.id === opcao.id
                              ? "border-militar-500 bg-white font-semibold"
                              : "border-chocolate/10 bg-white/50 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="opcaoFrete"
                              checked={freteSelecionado?.id === opcao.id}
                              onChange={() => setFreteSelecionado(opcao)}
                              className="accent-militar-500"
                            />
                            <span>{opcao.name}</span>
                            <span className="text-xs text-militar-500">
                              ({opcao.delivery_time} {opcao.delivery_time === 1 ? "dia útil" : "dias úteis"})
                            </span>
                          </div>
                          <span>{formataDinheiro(parseFloat(opcao.custom_price || opcao.price))}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* resumo do pedido */}
              <div className="bg-creme rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="font-source-serif text-xl sm:text-2xl font-bold">Resumo do Pedido</h2>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formataDinheiro(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>{freteSelecionado ? formataDinheiro(valorFrete) : "Calcule o frete"}</span>
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
  mudaQtd: (id: number, diferenca: number) => void;
  tiraDoCarrinho: (id: number) => void;
}) {
  return (
    <li className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1.4fr_1fr_auto] items-center gap-4 px-6 py-5">
      <div className="flex items-center gap-4 col-span-2 md:col-span-1">
        <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden bg-offwhite border border-militar-100/30">
          <Image src={item.imagemUrl} alt={item.nome} fill sizes="56px" className="object-cover" />
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
        <span className="md:hidden text-militar-300 mr-1 font-normal">Total:</span>
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
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
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