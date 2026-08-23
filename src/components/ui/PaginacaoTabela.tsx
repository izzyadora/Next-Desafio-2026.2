'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginacaoTabelaProps = {
  totalPages: number;
};

export default function PaginacaoTabela({ totalPages }: PaginacaoTabelaProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;

  if (totalPages <= 1) return null;

  function handlePageChange(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col rounded-b-2xl sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-offwhite border-t border-chocolate/10 font-dm-sans">
      <span className="text-xs text-chocolate/70">
        Página <span className="font-semibold text-chocolate">{currentPage}</span> de{' '}
        <span className="font-semibold text-chocolate">{totalPages}</span>
      </span>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex items-center justify-center p-2 rounded-lg border border-chocolate/20 text-chocolate hover:bg-chocolate/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => handlePageChange(page)}
            className={`h-8 w-8 text-xs rounded-lg font-medium transition ${
              currentPage === page
                ? 'bg-chocolate text-offwhite font-bold'
                : 'text-chocolate hover:bg-chocolate/10'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="flex items-center justify-center p-2 rounded-lg border border-chocolate/20 text-chocolate hover:bg-chocolate/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}