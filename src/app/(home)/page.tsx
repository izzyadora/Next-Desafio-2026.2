import Hero from "@/src/components/layout/home/HeroSection";
import SobreEmpresa from "@/src/components/layout/home/SobreEmpresa";
import Opinioes from "@/src/components/layout/home/Opinioes";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-0 m-0 p-0">
        <Hero />
        <SobreEmpresa />
        <Opinioes />
      </div>
    </main>
  );
}
