import CardPilar, { IdentityItem } from "@/src/components/ui/CardPilar";

type SobreEmpresaProps = {
  pilares: IdentityItem[];
};

export default function SobreEmpresa({ pilares }: SobreEmpresaProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-12 w-full bg-white py-12 md:py-20 px-4 sm:px-8 border-b border-chocolate/20">
      <div className="flex flex-col gap-2 max-w-2xl mx-auto text-center">
        <p className="font-dm-sans text-xs sm:text-sm text-militar-300 tracking-[0.15em] font-black uppercase">
          TRAZEMOS SABOR AO SEU DIA!
        </p>
        <h2 className="font-source-serif text-2xl sm:text-4xl md:text-[2.4rem] font-bold text-chocolate leading-tight">
          Conheça a gente:
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl w-full mx-auto">
        {pilares.map((item) => (
          <CardPilar key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}