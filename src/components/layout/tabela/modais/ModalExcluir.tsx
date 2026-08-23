"use client";

import { Trash2 } from "lucide-react";
import EstruturaModal from "@/src/components/layout/tabela/modais/EstruturaModal";
import { DeleteProduto } from "@/actions/admin/actions";

type Produto = {
  id: number;
  title: string;
};

interface ModalExcluirProps {
  isOpen: boolean;
  onClose: () => void;
  produto: Produto | null;
  onConfirmar: (id: number) => void;
}

export default function ModalExcluir({
  isOpen,
  onClose,
  produto,
  onConfirmar,
}: ModalExcluirProps) {
  if (!isOpen || !produto) return null;

  const handleDeletar = async () => {
    await DeleteProduto(produto.id);
    onConfirmar(produto.id);
    onClose();
  };

  return (
    <EstruturaModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center py-12 px-6 space-y-6">
        <Trash2 className="w-16 h-16 text-red-800" />

        <div className="text-center">
          <p className="text-chocolate font-dm-sans text-[1.25rem] font-semibold">
            Deseja deletar &quot;{produto.title}&quot;?
          </p>
          <p className="text-red-800 font-dm-sans text-[1rem]">
            Esta ação é <span className="font-bold">irreversível!</span>
          </p>
        </div>

        <div className="flex flex-row justify-center gap-6 font-dm-sans font-semibold">
          <button
            type="button"
            onClick={onClose}
            className="bg-chocolate text-offwhite py-2 px-4 rounded-4xl hover:cursor-pointer"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={handleDeletar}
            className="bg-red-800 text-offwhite py-2 px-4 rounded-4xl hover:cursor-pointer"
          >
            Deletar
          </button>
        </div>
      </div>
    </EstruturaModal>
  );
}
