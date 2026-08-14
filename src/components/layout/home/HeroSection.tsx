import Image from "next/image";
import InfoCard from "@/src/components/ui/CardInformacao";

export default function Hero() {
  return (
    <section className="bg-offwhite text-creme">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-12">
        {/* Lado Esquerdo */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-source-serif font-bold text-chocolate text-[2.2rem] text-center leading-none">
            Descubra seu próximo café favorito!
          </h1>

          <p className="font-dm-sans text-militar-500 text-[0.8rem] text-center opacity-90">
            Explore nossa seleção de cafés especiais e lanches, sempre trazendo
            a xícara perfeita.
          </p>

          <button className="flex items-center gap-3 px-4 py-3 bg-chocolate text-[0.7rem] text-creme font-dm-sans font-semibold rounded-full hover:cursor-pointer hover:bg-militar-500 transition-all duration-300 ease-in-out hover:scale-105">
            <a href="/produtos" className="flex items-center gap-3"> Explorar catálogo </a>
          </button>
        </div>

        {/* Lado Direito */}
        <div className="flex justify-center hidden sm:block">
          <div className="relative overflow-hidden">
            <Image
              src="/images/imagem_principal.png"
              alt="Hero Image - Xícara de Café"
              width={680}
              height={440}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <InfoCard />
    </section>
  );
}
