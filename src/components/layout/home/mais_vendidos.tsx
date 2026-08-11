"use client";

import { ArrowRight } from "lucide-react";
import { Produto } from "../../ui/card_produto";
import CarrosselMaisVendidos from "./carrossel/carrossel_maisvendidos";
import PaginacaoMaisVendidos from "./carrossel/paginacao_maisvendidos";

interface PropsCarrosselProdutos {
  titulo: string;
  linkVerTudo?: string;
  produtos: Produto[];
  aoAdicionarAoCarrinho?: (produto: Produto) => void;
}

export default function MaisVendidos({
  titulo,
  linkVerTudo,
  produtos,
  aoAdicionarAoCarrinho,
}: PropsCarrosselProdutos) {
  return (
    <section className="bg-offwhite w-full pb-12 px-32">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-col">
            <p className="font-dm-sans text-[12px] text-militar-300 tracking-[1.2px] font-black">
              OS QUERIDINHOS DA LOJA!
            </p>

            <h2 className="font-source-serif text-4xl font-bold text-chocolate">
              {titulo}
            </h2>
          </div>

          {linkVerTudo && (
            <a
              href={linkVerTudo}
              className="border-oliva text-oliva font-dm-sans font-bold hover:bg-oliva hover:text-offwhite flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition-all"
            >
              <span>Ver tudo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <CarrosselMaisVendidos
          produtos={produtos}
          aoAdicionarAoCarrinho={aoAdicionarAoCarrinho}
        />
        <PaginacaoMaisVendidos />
      </div>
    </section>
  );
}
