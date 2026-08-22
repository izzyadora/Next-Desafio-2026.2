import GridTodosProdutos from "@/src/components/layout/produtos/GridTodosProdutos";
import { getProdutos } from "@/actions/produtos/actions";
import MiniBuscaProdutos from "./busca/MiniBuscaProdutos";

export default async function Produtos() {
  const {products, totalCount} = await getProdutos();

  return (
    <section className="bg-offwhite min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="font-source-serif font-bold text-3xl sm:text-4xl text-chocolate">
            Produtos
          </h1>
          <p className="text-sm md:text-base text-militar-500 font-dm-sans">
            Descubra o melhor que o Midori Café tem a oferecer!
          </p>
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:justify-between lg:px-12">
          <p className="font-source-serif font-bold text-2xl lg:text-3xl text-chocolate">
            {totalCount} produtos encontrados
          </p>
          <MiniBuscaProdutos/>
        </div>

        <div>
          <GridTodosProdutos products={products}/>
        </div>
      </div>
    </section>
  );
}