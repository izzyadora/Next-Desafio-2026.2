import CardOpiniao from "@/src/components/ui/CardOpiniao";
import { OPINIOES_CLIENTES, Opiniao } from "@/src/data/opinioes";

interface PropsOpinioes {
  titulo?: string;
  opinioes?: Opiniao[];
}

export default function Opinioes({opinioes = OPINIOES_CLIENTES,}: PropsOpinioes) {
  return (
    <section className="flex flex-col gap-4 w-full p-6 bg-white">
      {/* Título */}
      <div>
        <p className="font-dm-sans text-[12px] text-center text-militar-300 tracking-[1.2px] font-black">
          SATISFAÇÃO GARANTIDA!
        </p>
        <h2 className="font-source-serif text-center text-[1.4rem] font-bold text-chocolate">
          Eles recomendam:
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {opinioes.map((item) => (
          <CardOpiniao key={item.id} opiniao={item} />
        ))}
      </div>
    </section>
  );
}
