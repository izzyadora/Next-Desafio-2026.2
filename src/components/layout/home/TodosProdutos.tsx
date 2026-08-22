import Link from "next/link";
import GridTodosProdutos from "@/src/components/layout/produtos/GridTodosProdutos"
import { getTodosProdutos } from "@/actions/home/actions";


export default async function TodosProdutos() {
  const produtos = await getTodosProdutos();

  return (
    <section className="flex flex-col gap-4 min-w-[0.8] p-6 bg-white border-b border-chocolate/20">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2 max-w-2xl mx-auto text-center">
        <p className="font-dm-sans text-xs sm:text-sm text-militar-300 tracking-[0.15em] font-black uppercase">
          Conheça tudo que o Midori tem a oferecer!
        </p>
        <h2 className="font-source-serif text-2xl sm:text-4xl md:text-[2.4rem] font-bold text-chocolate leading-tight">
          Todos os produtos:
        </h2>
      </div>
      <div>
        <div className="max-w-[85rem] flex justify-end">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-chocolate text-sm lg:text-base text-creme font-dm-sans font-semibold rounded-full hover:bg-militar-500 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Veja mais
          </Link>
        </div>
      </div>
      <div>
        <GridTodosProdutos products={produtos}/>
      </div>
    </section>
  );
}
