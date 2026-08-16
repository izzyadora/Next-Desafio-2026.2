export default function Carrinho() {
    return(
    <section className="bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-dm-sans text-chocolate">
          <div className="max-w-5xl mx-auto space-y-10">
            
            {/* Cabeçalho */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-source-serif font-bold text-chocolate">
                Carrinho
              </h1>
              <p className="text-sm md:text-base text-militar-500 font-dm-sans">
                Confira os produtos que você adicionou ao seu carrinho e finalize sua compra.
              </p>
            </div>
        </div>
    </section>
    )
}