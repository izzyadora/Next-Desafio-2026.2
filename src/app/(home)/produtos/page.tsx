import Produtos from "@/src/components/layout/produtos/Produtos";

export const metadata = {
  title: "Midori Café - Produtos",
};

export default async function ProdutosPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <Produtos query={query} currentPage={currentPage} />
    </main>
  );
}