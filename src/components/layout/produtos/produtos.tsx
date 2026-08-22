import CarrosselProdutos from "@/src/components/layout/produtos/CarrosselProdutos";
import { getProdutos } from "@/actions/produtos/actions";

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

        <div>
          <p className="font-source-serif font-bold text-xl sm:text-2xl text-chocolate">
            {totalCount} produtos encontrados
          </p>
        </div>

        <CarrosselProdutos produtos={products} />
      </div>
    </section>
  );
}