import CardPilar from "@/src/components/ui/CardPilar";
import { PILARES_EMPRESA, PilarEmpresa } from "@/src/data/sobre";

interface PropsSobreEmpresa {
  pilares?: PilarEmpresa[];
}

export default function SobreEmpresa({
  pilares = PILARES_EMPRESA,
}: PropsSobreEmpresa) {
  return (
    <section className="flex flex-col gap-8 md:gap-12 w-full bg-white py-12 md:py-20 px-4 sm:px-8">
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col gap-2 max-w-2xl mx-auto text-center">
        <p className="font-dm-sans text-xs sm:text-sm text-militar-300 tracking-[0.15em] font-black uppercase">
          TRAZEMOS SABOR AO SEU DIA!
        </p>
        <h2 className="font-source-serif text-2xl sm:text-4xl md:text-[2.4rem] font-bold text-chocolate leading-tight">
          Conheça a gente:
        </h2>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl w-full mx-auto">
        {pilares.map((pilar) => (
          <CardPilar key={pilar.id} pilar={pilar} />
        ))}
      </div>
    </section>
  );
}