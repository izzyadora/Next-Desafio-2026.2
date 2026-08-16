import Image from "next/image";
import Link from "next/link";
import InfoCard from "@/src/components/ui/CardInformacao";

export default function Hero() {
  return (
    <section className="bg-offwhite text-creme w-full flex flex-col items-center justify-center min-h-[80vh] gap-12 px-4 sm:px-8 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Lado Esquerdo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-lg mx-auto md:mx-0">
          <h1 className="font-source-serif font-bold text-chocolate text-[2.5rem] lg:text-[3rem] leading-tight">
            Descubra seu próximo café favorito!
          </h1>

          <p className="font-dm-sans text-militar-500 text-base lg:text-[1.125rem] opacity-90 max-w-md">
            Explore nossa seleção de cafés especiais, lanches, acessórios e kits para preparar a xícara perfeita.
          </p>

          <Link 
            href="/produtos" 
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-chocolate text-sm lg:text-base text-creme font-dm-sans font-semibold rounded-full hover:bg-militar-500 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Explorar catálogo <span className="text-lg">➔</span>
          </Link>

        </div>

        {/* Lado Direito */}
        <div className="hidden sm:flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-170">
            <Image
              src="/images/imagem_principal.png"
              alt="Hero Image - Xícara de Café"
              width={680}
              height={440}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <InfoCard />
    </section>
  );
}