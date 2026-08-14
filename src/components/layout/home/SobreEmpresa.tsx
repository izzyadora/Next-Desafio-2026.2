import CardPilar from "@/src/components/ui/CardPilar";
import { PILARES_EMPRESA, PilarEmpresa } from "@/src/data/sobre";

interface PropsSobreEmpresa {
  pilares?: PilarEmpresa[];
}

export default function SobreEmpresa({
  pilares = PILARES_EMPRESA,
}: PropsSobreEmpresa) {
  return (
    <section className="flex flex-col gap-4 w-full bg-white">
      <div>
        <p className="font-dm-sans text-[12px] text-center text-militar-300 tracking-[1.2px] font-black">
          TRAZEMOS SABOR AO SEU DIA!
        </p>
        <h2 className="font-source-serif text-center text-[1.4rem] font-bold text-chocolate">
          Conheça a gente:
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-[90%] mx-auto">
        {pilares.map((pilar) => (
          <CardPilar key={pilar.id} pilar={pilar} />
        ))}
      </div>
    </section>
  );
}
