export default function InfoCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white text-chocolate rounded-2xl px-4 py-6 sm:px-6 md:px-8 gap-6 md:gap-8 items-center shadow-lg">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="p-2.5 sm:p-3 bg-chocolate text-creme rounded-2xl shrink-0">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 17a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM3 9h11v8H3V9zm11 0h4l3 3v5h-7V9z"
            ></path>
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="font-bold font-dm-sans text-sm sm:text-base leading-tight">
            Envio para todo o Brasil
          </h3>
          <p className="text-xs text-stone-600 font-dm-sans mt-0.5">
            Frete grátis acima de R$200 em compras
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="p-2.5 sm:p-3 bg-chocolate text-creme rounded-2xl shrink-0">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="font-bold font-dm-sans text-sm sm:text-base leading-tight">
            Pagamento Seguro
          </h3>
          <p className="text-xs text-stone-600 font-dm-sans mt-0.5">
            Seus dados estão 100% protegidos
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
        <div className="p-2.5 sm:p-3 bg-chocolate text-creme rounded-2xl shrink-0">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm18 0a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"
            ></path>
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="font-bold font-dm-sans text-sm sm:text-base leading-tight">
            Ouvidoria 24 horas
          </h3>
          <p className="text-xs text-stone-600 font-dm-sans mt-0.5">
            Suporte humanizado via WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}