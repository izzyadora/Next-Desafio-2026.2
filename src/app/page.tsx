import Navbar from "@/src/components/layout/geral/navbar";
import Hero from "@/src/components/layout/home/hero";
import Footer from "@/src/components/layout/geral/footer";
import CarrosselProdutos from "@/src/components/layout/home/carrossel_maisvendidos";
import { PRODUTOS_MAIS_VENDIDOS } from "@/src/data/produtos"
import SobreEmpresa from "@/src/components/layout/home/sobre_empresa";
import Opinioes from "@/src/components/layout/home/opinioes";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SobreEmpresa />
      <CarrosselProdutos 
        titulo="Mais vendidos" 
        linkVerTudo="/produtos" 
        produtos={PRODUTOS_MAIS_VENDIDOS} 
      />
      <Opinioes />
      <Footer />
    </main>
  );
}