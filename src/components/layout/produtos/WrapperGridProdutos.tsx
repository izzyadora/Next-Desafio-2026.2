import { getProdutos } from "@/actions/produtos/actions";
import GridTodosProdutos from "@/src/components/layout/produtos/GridTodosProdutos";
import Paginacao from "@/src/components/layout/produtos/paginacao/Paginacao";

type Props = {
  query: string;
  currentPage: number;
};

export default async function ProdutosGridWrapper({ query, currentPage }: Props) {
  const LIMITE_PAGINA = 12;
  const { products, totalCount, totalPages } = await getProdutos(query, currentPage, LIMITE_PAGINA);
  const quantidadeNaPagina = products.length;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center lg:px-12">
        <p className="font-source-serif font-bold text-2xl lg:text-3xl text-chocolate min-[320px]:text-[1.1rem] min-[375px]:text-[1.25rem]">
          Mostrando {quantidadeNaPagina} de {totalCount} {totalCount === 1 ? 'produto' : 'produtos'}
        </p>
      </div>

      <GridTodosProdutos products={products} />
      <Paginacao totalPages={totalPages} />
    </div>
  );
}