'use client';

import { Search as SearchIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function BuscaProdutos() {
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

  return (
    <form className="flex w-full" id="auxSearch" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col w-full gap-2 my-4">
        <div className="relative flex items-center w-full bg-white rounded-xl font-dm-sans">
          <SearchIcon className="w-5 h-5 absolute text-militar-500 left-4" />
          <input
            id="aux-search-input"
            name="aux-search"
            type="text"
            className="w-full rounded-xl px-12 py-4 text-chocolate border-2 border-chocolate/50 focus:ring-militar-500 transition-all duration-300"
            placeholder="Busque seu produto aqui..."
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
          />
        </div>
      </div>
    </form>
  );
}