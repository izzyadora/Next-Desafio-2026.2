export default function ProdutosSkeleton() {
  return (
    <section className="mx-auto w-full max-w-7xl px-8 py-6">
      <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse mb-6 lg:ml-12" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 p-4 bg-white rounded-2xl border border-gray-100 animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200 rounded-xl" />

            <div className="h-5 w-3/4 bg-gray-200 rounded" />

            <div className="h-4 w-full bg-gray-200 rounded" />

            <div className="h-6 w-1/2 bg-gray-200 rounded mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
}