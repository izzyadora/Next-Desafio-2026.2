import Hero from "@/src/components/layout/home/HeroSection";
import SobreEmpresa from "@/src/components/layout/home/SobreEmpresa";
import Opinioes from "@/src/components/layout/home/Opinioes";
import CarrosselMaisVendidos from "@/src/components/layout/home/carrossel/CarrosselMaisVendidos";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreEmpresa />
      <CarrosselMaisVendidos />o
      <Opinioes />
    </main>
  );
}
