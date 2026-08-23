import { X } from "lucide-react";
import Image from "next/image";
import { ReadProduto } from "@/actions/admin/actions";
import EstruturaModal from "@/src/components/layout/tabela/modais/EstruturaModal";

type Produto = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

interface ModalVisualizarProps {
  isOpen: boolean;
  onClose: () => void;
  produto: Produto | null;
}

const formataDinheiro = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ModalVisualizar({
  isOpen,
  onClose,
  produto,
}: ModalVisualizarProps) {
  if (!isOpen || !produto) return null;
  return (
    <EstruturaModal isOpen={isOpen} onClose={onClose}>
      {/* Corpo do modal */}
      <div className="flex flex-col font-dm-sans text-chocolate px-6 py-10 sm:px-10">
        <h1 className="text-center font-source-serif text-2xl font-bold">
          Visualizar produto
        </h1>

        <div className="mt-6 flex flex-col items-center gap">
          <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
            Imagem
          </label>
          <Image
            src={produto.image}
            alt={produto.title}
            width={180}
            height={180}
            className="border-chocolate/50 border-4 rounded-[100%] object-cover"
          />
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
              Nome do produto
            </label>
            <input
              type="text"
              value={produto.title}
              disabled
              className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-3 text-sm leading-relaxed text-chocolate"
            ></input>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
              Descrição
            </label>
            <textarea
              value={produto.description}
              disabled
              rows={3}
              className="w-full resize-none rounded-xl border border-chocolate/15 bg-white/60 px-4 py-3 text-sm leading-relaxed text-chocolate"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-chocolate/60">
            Preço
          </label>
          <input
            type="text"
            value={formataDinheiro(produto.price)}
            disabled
            className="w-full rounded-xl border border-chocolate/15 bg-white/60 px-4 py-3 text-sm leading-relaxed text-chocolate"
          ></input>
        </div>

        {/* Botões */}
        <div className="flex justify-center gap-6 font-dm-sans font-semibold pt-4">
          <button
            className="bg-chocolate text-offwhite w-10/12 py-2 px-4 rounded-4xl hover:cursor-pointer"
            onClick={onClose}
          >
            Voltar
          </button>
        </div>
      </div>
    </EstruturaModal>
  );
}
