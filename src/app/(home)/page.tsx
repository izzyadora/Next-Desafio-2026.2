import Hero from "@/src/components/layout/home/HeroSection";
import SobreEmpresa from "@/src/components/layout/home/SobreEmpresa";
import Opinioes from "@/src/components/layout/home/Opinioes";
import CarrosselMaisVendidos from "@/src/components/layout/home/carrossel/CarrosselMaisVendidos";
import getMaisVendidos from "@/actions/home/actions";

export default async function Home() {
  const products = await getMaisVendidos();
  
  return (
    <main>
      <Hero />
      <SobreEmpresa />
      <CarrosselMaisVendidos products={products} />
      <Opinioes />
    </main>
  );
}
