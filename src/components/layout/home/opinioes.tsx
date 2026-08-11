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
    <section className="bg-offwhite w-full pb-12 px-32">
      <div className="mx-auto max-w-6xl">
        {/* Título */}
        <div>
          <p className="font-dm-sans text-[12px] text-militar-300 tracking-[1.2px] font-black">
              SATISFAÇÃO GARANTIDA!
            </p>
          <h2 className="font-source-serif mb-10 text-2xl font-bold text-chocolate md:text-3xl">
            {titulo}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {opinioes.map((item) => (
            <CardOpiniao key={item.id} opiniao={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
