export default function TabelaSkeleton() {
  return (
    <div className="bg-militar-300 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl animate-pulse">
        {/* Cabeçalho */}
        <div className="mb-6 text-center sm:mb-8 flex flex-col items-center gap-2">
          <div className="h-10 w-48 bg-chocolate/20 rounded-md" />
          <div className="h-4 w-32 bg-chocolate/10 rounded-md" />
        </div>

        {/* Tabela Skeleton */}
        <div className="overflow-hidden rounded-2xl bg-offwhite shadow-lg h-[500px]">
          <div className="bg-chocolate h-16 w-full" />
          <div className="p-6 space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-12 bg-chocolate/10 rounded-lg w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}