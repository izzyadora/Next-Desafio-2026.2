'use client';

import { Search, X } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function BuscaTabela() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const queryValue = searchParams.get('query')?.toString() || '';

  return (
    <div className="relative flex items-center w-full sm:max-w-xs">
      <Search className="absolute left-3.5 h-4 w-4 text-offwhite/60 pointer-events-none" />
      <input
        type="text"
        placeholder="Buscar produto..."
        className="w-full rounded-full bg-white/10 py-2 pl-10 pr-9 text-sm text-offwhite placeholder:text-offwhite/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-militar-500 focus:border-transparent transition-all"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={queryValue}
      />
      {queryValue && (
        <button
          type="button"
          onClick={() => handleSearch('')}
          className="absolute right-3 text-offwhite/60 hover:text-offwhite transition"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}