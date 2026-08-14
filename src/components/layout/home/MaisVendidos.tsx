export default function MaisVendidos(){
  return (
    <section className="flex flex-col gap-4 w-full p-6 bg-white">
      {/* Cabeçalho */}
      <div className="items-center justify-between">
        <div className="">
          <p className="font-dm-sans text-[12px] text-center text-militar-300 tracking-[1.2px] font-black">
            OS QUERIDINHOS DA LOJA!
          </p>

          <h2 className="font-source-serif text-center text-[1.4rem] font-bold text-chocolate">
            Mais vendidos:
          </h2>
        </div>

        {/* {linkVerTudo && (
            <a
              href={linkVerTudo}
              className="border-oliva text-oliva font-dm-sans font-bold hover:bg-oliva hover:text-offwhite flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition-all"
            >
              <span>Ver tudo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          )} */}
      </div>
    </section>
  );
}
