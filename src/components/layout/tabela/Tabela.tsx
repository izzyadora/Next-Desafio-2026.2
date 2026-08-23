"use client";

import { useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { getProdutos } from "@/actions/produtos/actions";

import ModalEditar from "./modais/ModalEditar";
import ModalExcluir from "./modais/ModalExcluir";
import ModalVisualizar from "./modais/ModalVisualizar";
import ModalCriar from "./modais/ModalCriar";

type Produto = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

type TabelaProps = {
  produtos: Produto[];
  total: number;
  // totalPages: number;
  // currentPage: number;
  // search: string;
};

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function AcoesProduto({
  produto,
  onVisualizar,
  onEditar,
  onExcluir,
}: {
  produto: Produto;
  onVisualizar: (produto: Produto) => void;
  onEditar: (produto: Produto) => void;
  onExcluir: (produto: Produto) => void;
}) {
  return (
    <div className="flex items-center justify-end gap-3 sm:justify-center">
      <button
        type="button"
        aria-label={`Visualizar ${produto.title}`}
        className="text-chocolate/70 transition hover:text-chocolate"
        onClick={() => onVisualizar(produto)}
      >
        <Eye className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label={`Editar ${produto.title}`}
        className="text-chocolate/70 transition hover:text-chocolate"
        onClick={() => onEditar(produto)}
      >
        <Pencil className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label={`Excluir ${produto.title}`}
        className="text-red-900 transition hover:text-red-950"
        onClick={() => onExcluir(produto)}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

// export default function Tabela({produtos, total, totalPages, currentPage, search}: TabelaProps) {
export default function Tabela({ produtos, total }: TabelaProps) {
  //const [paginaAtual, setPaginaAtual] = useState(1);
  const [isModalCriarOpen, setIsModalCriarOpen] = useState(false);
  const [isModalEditarOpen, setIsModalEditarOpen] = useState(false);
  const [isModalVisualizarOpen, setIsModalVisualizarOpen] = useState(false);
  const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);

  const handleVisualizar = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalVisualizarOpen(true);
  };

  const handleEditar = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalEditarOpen(true);
  };

  const handleExcluir = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalExcluirOpen(true);
  };

  return (
    <div className="bg-militar-300 px-4 py-16 sm:px-6 lg:px-10 z-0">
      <div className="mx-auto w-full max-w-6xl">
        {/* Cabeçalho */}
        <header className="mb-6 text-center sm:mb-8">
          <h1 className="font-source-serif text-4xl font-bold tracking-tight text-chocolate sm:text-5xl">
            Produtos
          </h1>
          <p className="mt-1 text-sm text-chocolate/70">
            {total} produtos encontrados.
          </p>
        </header>

        {/* tabela */}
        <div className="overflow-hidden rounded-2xl bg-offwhite shadow-lg font-dm-sans">
          {/* barra do topo + criar */}
          <div className="bg-chocolate px-4 py-4 sm:px-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-militar-500 px-4 py-2 text-sm font-medium text-offwhite transition hover:bg-militar-500 hover:cursor-pointer active:scale-[0.98]"
              onClick={() => setIsModalCriarOpen(true)}
            >
              <Plus className="h-4 w-4" />
              Cadastrar novo produto
            </button>
          </div>

          {/* DESKTOP */}
          <table className="hidden w-full lg:table">
            <thead>
              <tr className="bg-chocolate text-center text-xs font-semibold uppercase tracking-wide text-[#F5EFE6]/90">
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
                  <td className="px-6 py-4 text-center text-sm">
                    {produto.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="mx-auto grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-white border-[0.75px] border-chocolate/40">
                      <Image
                        src={produto.image}
                        alt={produto.title}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {produto.title}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {formatarPreco(produto.price)}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-chocolate/80">
                    {produto.description}
                  </td>
                  <td className="px-6 py-4">
                    <AcoesProduto
                      produto={produto}
                      onVisualizar={handleVisualizar}
                      onEditar={handleEditar}
                      onExcluir={handleExcluir}
                    />
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
                      src={produto.image}
                      alt={produto.title}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {produto.title}
                    </p>
                    <p className="text-xs text-chocolate/60">
                      ID #{produto.id}
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      {formatarPreco(produto.price)}
                    </p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-chocolate/80">
                  {produto.description}
                </p>
                <div className="mt-1 border-t border-chocolate/10 pt-3">
                  <AcoesProduto
                    produto={produto}
                    onVisualizar={handleVisualizar}
                    onEditar={handleEditar}
                    onExcluir={handleExcluir}
                  />
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
                    src={produto.image}
                    alt={produto.title}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {produto.title}
                  </p>
                  <p className="text-xs text-chocolate/60">
                    #{produto.id} · {formatarPreco(produto.price)}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-chocolate/70">
                    {produto.description}
                  </p>
                </div>
                <AcoesProduto
                  produto={produto}
                  onVisualizar={handleVisualizar}
                  onEditar={handleEditar}
                  onExcluir={handleExcluir}
                />
              </div>
            ))}
          </div>
        </div>

        {/* chamada dos modais de CRUD*/}
        <ModalVisualizar
          isOpen={isModalVisualizarOpen}
          onClose={() => {
            setIsModalVisualizarOpen(false);
            setSelectedProduto(null);
          }}
          produto={selectedProduto}
        />

        <ModalCriar
          isOpen={isModalCriarOpen}
          onClose={() => setIsModalCriarOpen(false)}
        />

        <ModalEditar
          key={selectedProduto?.id ?? "editar-vazio"}
          isOpen={isModalEditarOpen}
          onClose={() => {
            setIsModalEditarOpen(false);
            setSelectedProduto(null);
          }}
          produto={selectedProduto}
        />

        <ModalExcluir
          isOpen={isModalExcluirOpen}
          onClose={() => {
            setIsModalExcluirOpen(false);
            setSelectedProduto(null);
          }}
          produto={selectedProduto}
          onConfirmar={() => {}}
        />
      </div>
    </div>
  );
}
