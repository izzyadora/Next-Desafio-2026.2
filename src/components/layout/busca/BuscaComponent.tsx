import Link from "next/link";
import BuscaAuxiliar from "./BuscaAuxiliar";

export default function Busca() {
  const count = 0;

  return (
    <div className="bg-offwhite w-full font-dm-sans">
      <BuscaAuxiliar count={count} />
      {count === 0 ? (
        <div className="w-full flex flex-col">
          <span className="text-2xl font-semibold">Nenhum item encontrado</span>
          <span>
            Tente refinar sua busca, ou explore{" "}
            <Link href="/produtos" className="text-militar-300">nossos produtos</Link>.
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-12"></div>
      )}
    </div>
  );
}
