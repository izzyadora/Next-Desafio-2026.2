import { Suspense } from 'react';
import BuscaProdutos from "@/src/components/layout/produtos/busca/BuscaProdutos";
import WrapperGridProdutos from "@/src/components/layout/produtos/WrapperGridProdutos";
import ProdutosSkeleton from "@/src/components/layout/produtos/ProdutosSkeleton";

type ProdutosProps = {
  query: string;
  currentPage: number;
};

export default async function Produtos({ query, currentPage }: ProdutosProps) {
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
          <BuscaProdutos />
        </div>

        <Suspense key={query + currentPage} fallback={<ProdutosSkeleton />}>
          <WrapperGridProdutos query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </section>
  );
}