'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginacaoProps = {
  totalPages: number;
};

export default function Paginacao({ totalPages }: PaginacaoProps) {
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
    <div className="flex items-center justify-center gap-2 mt-8 font-dm-sans">
      {/* botão voltar */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center justify-center p-2 rounded-lg border border-chocolate/30 text-chocolate hover:bg-chocolate/10 disabled:opacity-40 disabled:cursor-not-allowed transition"
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* indicador de páginas */}
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => handlePageChange(page)}
            className={`w-9 h-9 rounded-lg font-medium transition ${
              currentPage === page
                ? 'bg-chocolate text-white'
                : 'text-chocolate hover:bg-chocolate/10'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* botão próximo */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center justify-center p-2 rounded-lg border border-chocolate/30 text-chocolate hover:bg-chocolate/10 disabled:opacity-40 disabled:cursor-not-allowed transition"
        aria-label="Próxima página"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}