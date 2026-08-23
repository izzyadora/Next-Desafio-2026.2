import Link from "next/link";
import BuscaAuxiliar from "@/src/components/layout/busca/BuscaAuxiliar";
import { HeartCrack } from "lucide-react";

export default function Busca() {
  const count = 0;

  return (
    <div className="bg-offwhite w-full font-dm-sans p-12">
      <div className="flex items-center justify-center">
        <BuscaAuxiliar count={count} />
      </div>
      {count === 0 ? (
        <div className="w-full flex flex-col items-center justify-center p-24">
          <HeartCrack className="w-16 h-16 text-chocolate"></HeartCrack>
          <span className="text-2xl font-semibold font-source-serif text-chocolate">Nenhum item encontrado</span>
          <span className="text-chocolate/70">
            Tente refinar sua busca, ou explore{" "}
            <Link href="/produtos" className="text-militar-300 font-bold">nossos produtos</Link>.
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-12"></div>
      )}
    </div>
  );
}
