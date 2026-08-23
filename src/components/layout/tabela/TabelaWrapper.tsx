import Tabela from "@/src/components/layout/tabela/Tabela";
import { getProdutos } from "@/actions/admin/actions";

type TabelaWrapperProps = {
  query: string;
  currentPage: number;
};

export default async function TabelaWrapper({ query, currentPage }: TabelaWrapperProps) {
  const LIMITE_POR_PAGINA = 10;

  const { products, totalCount, totalPages } = await getProdutos(
    query,
    currentPage,
    LIMITE_POR_PAGINA
  );

  return (
    <Tabela
      produtos={products}
      total={totalCount}
      totalPages={totalPages}
    />
  );
}