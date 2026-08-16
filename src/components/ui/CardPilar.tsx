import { PilarEmpresa } from "@/src/data/sobre";

interface PropsCardPilar {
  pilar: PilarEmpresa;
}

export default function CardPilar({ pilar }: PropsCardPilar) {
  return (
    <div className="flex flex-col gap-1 bg-oliva text-creme p-6 rounded-xl text-center shadow-md hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:cursor-pointer">
      <h3 className="font-source-serif text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-bold tracking-wider uppercase items-center">
        {pilar.titulo}
      </h3>
      <p className="font-dm-sans text-[0.7rem] md:[0.8rem] lg:text-[0.9rem] font-light leading-1.1 text-creme/90">
        {pilar.descricao}
      </p>
    </div>
  );
}