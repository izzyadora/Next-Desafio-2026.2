import { Suspense } from "react";
import TabelaWrapper from "@/src/components/layout/tabela/TabelaWrapper";
import TabelaSkeleton from "@/src/components/layout/tabela/TabelaSkeleton";

type SearchParamsProps = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function TabelaPage(props: SearchParamsProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <Suspense key={query + currentPage} fallback={<TabelaSkeleton />}>
        <TabelaWrapper query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}