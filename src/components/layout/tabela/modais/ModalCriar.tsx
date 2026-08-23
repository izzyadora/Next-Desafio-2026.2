"use client";

import { useState } from "react";
import Image from "next/image";
import EstruturaModal from "@/src/components/layout/tabela/modais/EstruturaModal";
import { CreateProduto } from "@/actions/admin/actions";

interface ModalCriarProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialForm = {
  title: "",
  description: "",
  price: "",
  image: "",
};

export default function ModalCriar({ isOpen, onClose }: ModalCriarProps) {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleClose = () => {
    setForm(initialForm);
    setError(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const price = Number(form.price.replace(",", "."));

    //validação do preço (vou deixar sem valor em real msm, vai adaptar no front)
    if (!form.title.trim() || !form.description.trim() || !form.image.trim()) {
      setError("Preencha todos os campos.");
      return;
    }
    if (!price || price <= 0) {
      setError("Informe um preço válido.");
      return;
    }

    try {
      setIsSubmitting(true);
      await CreateProduto({
        title: form.title.trim(),
        description: form.description.trim(),
        price,
        image: form.image.trim(),
      });
      handleClose();
    } catch (err) {
      setError("Não foi possível cadastrar o produto. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EstruturaModal isOpen={isOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col font-dm-sans text-chocolate px-6 py-6 sm:px-10"
      >
        <h1 className="text-center font-source-serif text-2xl font-bold">
          Cadastrar produto
        </h1>

        {/* preview da imagem a partir do https */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
            Imagem
          </label>
          <div className="grid h-28 w-28 place-items-center overflow-hidden rounded-full border-4 border-chocolate/20 bg-white shadow-sm">
            {form.image ? (
              <Image
                src={form.image}
                alt="Pré-visualização"
                width={120}
                height={120}
                className="h-full w-full object-cover"
                onError={() => {}}
              />
            ) : (
              <span className="px-2 text-center text-[10px] text-chocolate/40">
                Sem imagem
              </span>
            )}
          </div>
        </div>

        {/* campos de texto */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="image"
              className="text-xs font-semibold uppercase tracking-wide text-chocolate/60"
            >
              URL da imagem
            </label>
            <input
              id="image"
              type="text"
              placeholder="https://..."
              value={form.image}
              onChange={handleChange("image")}
              className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-2.5 text-sm text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-xs font-semibold uppercase tracking-wide text-chocolate/60"
            >
              Nome do produto
            </label>
            <input
              id="title"
              type="text"
              placeholder="Insira o nome aqui..."
              value={form.title}
              onChange={handleChange("title")}
              className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-2.5 text-sm text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="price"
              className="text-xs font-semibold uppercase tracking-wide text-chocolate/60"
            >
              Preço
            </label>
            <input
              id="price"
              type="text"
              inputMode="decimal"
              placeholder="Insira o preço aqui..."
              value={form.price}
              onChange={handleChange("price")}
              className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-2.5 text-sm text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-xs font-semibold uppercase tracking-wide text-chocolate/60"
            >
              Descrição
            </label>
            <textarea
              id="description"
              rows={3}
              placeholder="Descreva o produto..."
              value={form.description}
              onChange={handleChange("description")}
              className="w-full resize-none rounded-xl border border-chocolate/15 bg-white/60 px-4 py-3 text-sm leading-relaxed text-chocolate outline-none focus:border-chocolate/40"
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 text-center text-sm font-medium text-red-800">
            {error}
          </p>
        )}

        {/* botões */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={handleClose}
            className="w-1/2 rounded-full border border-chocolate/30 px-4 py-2.5 font-semibold text-chocolate transition hover:bg-chocolate/5"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-1/2 rounded-full bg-chocolate px-4 py-2.5 font-semibold text-offwhite transition hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Salvando..." : "Cadastrar"}
          </button>
        </div>
      </form>
    </EstruturaModal>
  );
}