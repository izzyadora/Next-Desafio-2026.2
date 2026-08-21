
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
      </div>
    </section>
  );
}
