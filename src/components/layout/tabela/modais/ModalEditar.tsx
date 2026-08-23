"use client";

import { useState } from "react";
import EstruturaModal from "@/src/components/layout/tabela/modais/EstruturaModal";
import { UpdateProduto } from "@/actions/admin/actions";

type Produto = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

interface ModalEditarProps {
  isOpen: boolean;
  onClose: () => void;
  produto: Produto | null;
}

export default function ModalEditar({
   isOpen,
  onClose,
  produto,
}: ModalEditarProps) {
  const [form, setForm] = useState({
    title: produto?.title ?? "",
    description: produto?.description ?? "",
    price: produto ? String(produto.price).replace(".", ",") : "",
    image: produto?.image ?? "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !produto) return null;

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await UpdateProduto(produto.id, {
      title: form.title,
      description: form.description,
      price: Number(form.price.replace(",", ".")),
      image: form.image,
    });

    setIsSubmitting(false);
    onClose();
  };

  return (
    <EstruturaModal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col font-dm-sans text-chocolate px-6 py-10 sm:px-10"
      >
        <h1 className="text-center font-source-serif text-2xl font-bold">
          Editar produto
        </h1>

        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
              URL da imagem
            </label>
            <input
              type="text"
              value={form.image}
              onChange={handleChange("image")}
              className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-2.5 text-sm text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
              Nome do produto
            </label>
            <input
              type="text"
              value={form.title}
              onChange={handleChange("title")}
              className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-2.5 text-sm text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
              Preço
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={form.price}
              onChange={handleChange("price")}
              className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-2.5 text-sm text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
              Descrição
            </label>
            <textarea
              rows={3}
              value={form.description}
              onChange={handleChange("description")}
              className="w-full resize-none rounded-xl border border-chocolate/15 bg-white/60 px-4 py-3 text-sm leading-relaxed text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-1/2 rounded-full border border-chocolate/30 px-4 py-2.5 font-semibold text-chocolate transition hover:bg-chocolate/5"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-1/2 rounded-full bg-chocolate px-4 py-2.5 font-semibold text-offwhite transition hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </EstruturaModal>
  );
}