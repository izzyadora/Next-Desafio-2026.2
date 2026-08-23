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
      <div className="flex-column text-chocolate py-12 px-4 space-y-6">
        <h1 className="font-dm-sans font-semibold text-xl">
          Visualizar produto
        </h1>

        <div>
          <label className="">Imagem</label>
          <Image
            src={produto.image}
            alt={produto.title}
            width={120}
            height={120}
          />
        </div>

        <label className="">Nome do produto</label>
        <input type="text" value={produto.title} disabled className=""></input>

        <label className="">Preço</label>
        <input
          type="text"
          value={formataDinheiro(produto.price)}
          disabled
          className=""
        ></input>

        <label className="">Descrição</label>
        <input
          type="text"
          value={produto.description}
          disabled
          className=""
        ></input>

        {/* Botões */}
        <div className="flex max-w-10/12 align-center justify-center gap-6 font-dm-sans font-semibold">
          <button className="bg-chocolate text-offwhite w-full py-2 px-4 rounded-4xl hover:cursor-pointer">
            Voltar
          </button>
        </div>
      </div>
    </EstruturaModal>
  );
}
