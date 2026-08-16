import CarrosselProdutos from "@/src/components/layout/produtos/CarrosselProdutos";
import { PRODUTOS_MAIS_VENDIDOS } from "@/src/data/produtos"; 

export default function Produtos() {
  const totalProdutos = PRODUTOS_MAIS_VENDIDOS.length;

  return (
    <section className="bg-offwhite min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Cabeçalho */}
        <div className="text-center">
          <h1 className="font-source-serif font-bold text-3xl sm:text-4xl text-chocolate">
            Produtos
          </h1>
          <p className="text-sm md:text-base text-militar-500 font-dm-sans">
            Descubra o melhor que o Midori Café tem a oferecer!
          </p>
        </div>

        {/* Quantidade de produtos encontrados */}
        <div>
          <p className="font-source-serif font-bold text-xl sm:text-2xl text-chocolate">
            {totalProdutos} produtos encontrados
          </p>
        </div>

        {/* Carrossel de Produtos */}
        <CarrosselProdutos produtos={PRODUTOS_MAIS_VENDIDOS} />
      </div>
    </section>
  );
}