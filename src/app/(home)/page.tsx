import Hero from "@/src/components/layout/home/HeroSection";
import SobreEmpresa from "@/src/components/layout/home/SobreEmpresa";
import Opinioes from "@/src/components/layout/home/Opinioes";
import MaisVendidos from "@/src/components/layout/home/MaisVendidos";

export default function Home() {
  
  return (
    <main>
      <Hero />
      <SobreEmpresa />
      <MaisVendidos />
      <Opinioes />
    </main>
  );
}
