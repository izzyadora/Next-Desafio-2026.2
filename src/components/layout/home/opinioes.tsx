import CardOpiniao from "@/src/components/ui/card_opiniao";
import { OPINIOES_CLIENTES, Opiniao } from "@/src/data/opinioes";

interface PropsOpinioes {
  titulo?: string;
  opinioes?: Opiniao[];
}

export default function Opinioes({
  titulo = "O que nossos clientes dizem",
  opinioes = OPINIOES_CLIENTES,
  }: PropsOpinioes) {
  return (
    <section className="bg-offwhite w-full py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Título */}
        <h2 className="font-source-serif mb-10 text-2xl font-bold text-chocolate md:text-3xl">
          {titulo}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {opinioes.map((item) => (
            <CardOpiniao key={item.id} opiniao={item} />
          ))}
        </div>
      </div>
    </section>
  );
}