import { PilarEmpresa } from "@/src/data/sobre";

interface PropsCardPilar {
  pilar: PilarEmpresa;
}

export default function CardPilar({ pilar }: PropsCardPilar) {
  return (
    <div className="bg-oliva text-creme flex flex-col items-center rounded-3xl p-8 text-center shadow-md hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:cursor-pointer">
      <h3 className="font-source-serif mb-6 text-xl font-bold tracking-wider uppercase md:text-2xl">
        {pilar.titulo}
      </h3>
      <p className="font-dm-sans text-sm font-light leading-relaxed text-creme/90 md:text-base">
        {pilar.descricao}
      </p>
    </div>
  );
}