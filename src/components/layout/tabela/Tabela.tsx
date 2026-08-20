"use client";

import { useMemo, useState } from "react";
import { Eye, Pencil, Trash2, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Produto {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
  descricao: string;
}

const PRODUTOS_MOCK: Produto[] = [
  {
    id: 1,
    imagem: "/pancake.png",
    nome: "Panqueca de Blueberry",
    preco: 24.99,
    descricao: "Leve, macia, cheia de sabor.",
  },
  {
    id: 2,
    imagem: "/pancake.png",
    nome: "Panqueca de Blueberry",
    preco: 24.99,
    descricao: "Leve, macia, cheia de sabor.",
  },
  {
    id: 3,
    imagem: "/pancake.png",
    nome: "Panqueca de Blueberry",
    preco: 24.99,
    descricao: "Leve, macia, cheia de sabor.",
  },
  {
    id: 4,
    imagem: "/pancake.png",
    nome: "Panqueca de Blueberry",
    preco: 24.99,
    descricao: "Leve, macia, cheia de sabor.",
  },
];

const ITENS_POR_PAGINA = 4;
const TOTAL_PAGINAS = 4;

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Paginacao({
  paginaAtual,
  totalPaginas,
  onChange,
}: {
  paginaAtual: number;
  totalPaginas: number;
  onChange: (pagina: number) => void;
}) {
  return (
    <nav
      aria-label="Paginação de produtos"
      className="mt-6 flex items-center justify-center gap-1 sm:gap-2"
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(1, paginaAtual - 1))}
        disabled={paginaAtual === 1}
        aria-label="Página anterior"
        className="grid h-8 w-8 place-items-center rounded-full text-chocolate transition hover:bg-chocolate/10 disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
        <button
          key={pagina}
          type="button"
          onClick={() => onChange(pagina)}
          aria-current={pagina === paginaAtual ? "page" : undefined}
          className={`grid h-8 w-8 place-items-center rounded-full text-sm font-medium transition ${
            pagina === paginaAtual
              ? "bg-chocolate text-offwhite"
              : "text-chocolate hover:bg-chocolate/10"
          }`}
        >
          {pagina}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(Math.min(totalPaginas, paginaAtual + 1))}
        disabled={paginaAtual === totalPaginas}
        aria-label="Próxima página"
        className="grid h-8 w-8 place-items-center rounded-full text-chocolate transition hover:bg-chocolate/10 disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}

function AcoesProduto({ nome }: { nome: string }) {
  return (
    <div className="flex items-center justify-end gap-3 sm:justify-center">
      <button
        type="button"
        aria-label={`Visualizar ${nome}`}
        className="text-chocolate/70 transition hover:text-chocolate"
      >
        <Eye className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label={`Editar ${nome}`}
        className="text-chocolate/70 transition hover:text-chocolate"
      >
        <Pencil className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label={`Excluir ${nome}`}
        className="text-[#B0473F] transition hover:text-[#8f342d]"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function Tabela() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtos = useMemo(() => PRODUTOS_MOCK, []);

  return (
    <div className="min-h-screen bg-militar-300 px-4 py-16 sm:px-6 lg:px-10 z-0">
      <div className="mx-auto w-full max-w-6xl">
        {/* Cabeçalho */}
        <header className="mb-6 text-center sm:mb-8">
          <h1 className="font-source-serif text-4xl font-bold tracking-tight text-chocolate sm:text-5xl">
            Produtos
          </h1>
          <p className="mt-1 text-sm text-chocolate/70">
            {produtos.length * TOTAL_PAGINAS} produtos encontrados
          </p>
        </header>

        {/* Painel principal */}
        <div className="overflow-hidden rounded-2xl bg-offwhite shadow-lg font-dm-sans">
          {/* Barra de ação */}
          <div className="bg-chocolate px-4 py-4 sm:px-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-militar-500 px-4 py-2 text-sm font-medium text-offwhite transition hover:bg-militar-500 active:scale-[0.98]"
            >
              <Plus className="h-4 w-4" />
              Cadastrar novo produto
            </button>
          </div>

          {/* DESKTOP */}
          <table className="hidden w-full lg:table">
            <thead>
              <tr className="bg-chocolate text-left text-xs font-semibold uppercase tracking-wide text-[#F5EFE6]/90">
                <th className="px-6 py-4 text-center font-semibold">ID</th>
                <th className="px-6 py-4 text-center font-semibold">Imagem</th>
                <th className="px-6 py-4 font-semibold">Nome</th>
                <th className="px-6 py-4 text-center font-semibold">Preço</th>
                <th className="px-6 py-4 font-semibold">Descrição</th>
                <th className="px-6 py-4 text-center font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-chocolate/10">
              {produtos.map((produto) => (
                <tr key={produto.id} className="text-chocolate">
                  <td className="px-6 py-4 text-center text-sm">{produto.id}</td>
                  <td className="px-6 py-4">
                    <div className="mx-auto grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-white">
                      <Image
                        src={produto.imagem}
                        alt={produto.nome}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{produto.nome}</td>
                  <td className="px-6 py-4 text-center text-sm">
                    {formatarPreco(produto.preco)}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-chocolate/80">
                    {produto.descricao}
                  </td>
                  <td className="px-6 py-4">
                    <AcoesProduto nome={produto.nome} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* TABLET */}
          <div className="hidden gap-4 p-4 sm:grid sm:grid-cols-2 sm:p-6 lg:hidden">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="flex flex-col gap-3 rounded-xl bg-white/40 p-4 text-chocolate"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-md bg-white">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{produto.nome}</p>
                    <p className="text-xs text-chocolate/60">ID #{produto.id}</p>
                    <p className="mt-1 text-sm font-medium">{formatarPreco(produto.preco)}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-chocolate/80">{produto.descricao}</p>
                <div className="mt-1 border-t border-chocolate/10 pt-3">
                  <AcoesProduto nome={produto.nome} />
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE */}
          <div className="flex flex-col gap-3 p-4 sm:hidden">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="flex items-center gap-3 rounded-xl bg-white/40 p-3 text-chocolate"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-md bg-offwhite">
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{produto.nome}</p>
                  <p className="text-xs text-chocolate/60">
                    #{produto.id} · {formatarPreco(produto.preco)}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-chocolate/70">
                    {produto.descricao}
                  </p>
                </div>
                <AcoesProduto nome={produto.nome} />
              </div>
            ))}
          </div>
        </div>

        <Paginacao
          paginaAtual={paginaAtual}
          totalPaginas={TOTAL_PAGINAS}
          onChange={setPaginaAtual}
        />
      </div>
    </div>
  );
}