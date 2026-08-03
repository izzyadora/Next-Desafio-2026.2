import CardPilar from '@/src/components/ui/card_pilar';
import { PILARES_EMPRESA, PilarEmpresa } from '@/src/data/sobre';

interface PropsSobreEmpresa {
  pilares?: PilarEmpresa[];
}

export default function SobreEmpresa({ pilares = PILARES_EMPRESA }: PropsSobreEmpresa) {
  return (
    <section className="bg-offwhite w-full py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Título da Seção */}
        <h2 className="font-source-serif mb-10 text-2xl font-bold text-chocolate md:text-3xl">
          Sobre a empresa
        </h2>

        {/* Grid de 3 colunas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pilares.map((pilar) => (
            <CardPilar key={pilar.id} pilar={pilar} />
          ))}
        </div>
      </div>
    </section>
  );
}