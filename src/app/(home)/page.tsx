import Hero from "@/src/components/layout/home/hero";
import CarrosselProdutos from "@/src/components/layout/home/mais_vendidos";
import { PRODUTOS_MAIS_VENDIDOS } from "@/src/data/produtos";
import SobreEmpresa from "@/src/components/layout/home/sobre_empresa";
import Opinioes from "@/src/components/layout/home/opinioes";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-0 m-0 p-0">
        <Hero />
        <SobreEmpresa />
        <CarrosselProdutos
          titulo="Mais vendidos"
          linkVerTudo="/produtos"
          produtos={PRODUTOS_MAIS_VENDIDOS}
        />
        <Opinioes />
      </div>
    </main>
  );
}
