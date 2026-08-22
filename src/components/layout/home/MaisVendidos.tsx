import CarrosselMaisVendidos from "@/src/components/layout/home/carrossel/CarrosselMaisVendidos"
import { getMaisVendidos } from "@/actions/home/actions";


export default async function MaisVendidos() {
  const produtos = await getMaisVendidos();

  return (
    <section className="flex flex-col gap-4 w-full p-6 bg-white border-b border-chocolate/20">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2 max-w-2xl mx-auto text-center">
        <p className="font-dm-sans text-xs sm:text-sm text-militar-300 tracking-[0.15em] font-black uppercase">
          Os mais populares entre a galera!
        </p>
        <h2 className="font-source-serif text-2xl sm:text-4xl md:text-[2.4rem] font-bold text-chocolate leading-tight">
          Mais vendidos:
        </h2>
      </div>

      <div>
        <CarrosselMaisVendidos products={produtos}/>
      </div>
    </section>
  );
}
