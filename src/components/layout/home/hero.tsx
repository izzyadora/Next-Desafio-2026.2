import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-offwhite text-creme md:pt-6 lg:pt-12 flex flex-col justify-center gap-16 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Lado Esquerdo */}
        <div className="flex flex-col items-start gap-6 text-left max-w-120">
          <h1 className="font-source-serif font-bold text-chocolate text-5xl">
          
            Descubra seu próximo café favorito!
          </h1>

          <p className="font-dm-sans text-militar-500 text-lg opacity-90">
            Explore nossa seleção de cafés especiais, lanches, acessórios e kits
            para preparar a xícara perfeita.
          </p>

          <button className="flex items-center gap-3 px-8 py-4 bg-chocolate text-creme font-dm-sans font-semibold rounded-full hover:cursor-pointer hover:bg-militar-500 transition-all duration-300 ease-in-out hover:scale-105">
            <a href='/produtos' className="flex items-center gap-3">
              Explorar catálogo
              <span className="text-xl">⭢</span>
            </a>
          </button>
        </div>

        {/* Lado Direito*/}
        <div className="flex justify-center w-full md:justify-end md:block">
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

      {/* Card de informações */}
      <div className="w-auto bg-white text-chocolate rounded-2xl px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-chocolate text-creme rounded-2xl">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 17a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM3 9h11v8H3V9zm11 0h4l3 3v5h-7V9z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="font-bold font-dm-sans text-base leading-tight">
              Envio para todo o Brasil
            </h3>
            <p className="text-xs text-stone-600 font-dm-sans mt-0.5">
              Frete grátis acima de R$200 em compras
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-chocolate text-creme rounded-2xl">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="font-bold font-dm-sans text-base leading-tight">
              Pagamento Seguro
            </h3>
            <p className="text-xs text-stone-600 font-dm-sans mt-0.5">
              Seus dados estão 100% protegidos
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-chocolate text-creme rounded-2xl">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm18 0a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="font-bold font-dm-sans text-base leading-tight">
              Ouvidoria 24 horas
            </h3>
            <p className="text-xs text-stone-600 font-dm-sans mt-0.5">
              Suporte humanizado via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
