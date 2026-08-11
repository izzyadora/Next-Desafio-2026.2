import CardPilar from "@/src/components/ui/card_pilar";
import { PILARES_EMPRESA, PilarEmpresa } from "@/src/data/sobre";

interface PropsSobreEmpresa {
  pilares?: PilarEmpresa[];
}

export default function SobreEmpresa({
  pilares = PILARES_EMPRESA,
}: PropsSobreEmpresa) {
  return (
    <section className="bg-offwhite w-full pb-12 px-32">
      <div className="flex flex-col max-w-6xl mx-auto">
        {/* Titulo da seção */}
        <div className="flex flex-col">
          <p className="font-dm-sans text-[12px] text-militar-300 tracking-[1.2px] font-black">
            TRAZEMOS SABOR AO SEU DIA!
          </p>
          <h2 className="font-source-serif mb-10 text-2xl font-bold text-chocolate md:text-3xl">
            Conheça o<span className=""> Midori Café</span>:
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pilares.map((pilar) => (
            <CardPilar key={pilar.id} pilar={pilar} />
          ))}
        </div>
      </div>
    </section>
  );
}
