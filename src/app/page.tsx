import Navbar from "@/src/components/layout/navbar";
import Hero from "@/src/components/ui/hero";
import Footer from "@/src/components/layout/footer";
import CarrosselProdutos from "@/src/components/layout/carrossel_produtos";
import { PRODUTOS_MAIS_VENDIDOS } from "@/src/data/produtos"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CarrosselProdutos 
        titulo="Mais vendidos" 
        linkVerTudo="/produtos" 
        produtos={PRODUTOS_MAIS_VENDIDOS} 
      />
      <Footer />
    </main>
  );
}