import Hero from "@/src/components/layout/home/HeroSection";
import SobreEmpresa from "@/src/components/layout/home/SobreEmpresa";
import Opinioes from "@/src/components/layout/home/Opinioes";
import MaisVendidos from "@/src/components/layout/home/MaisVendidos";
import { getIdentities } from "@/src/lib/api/get-mvv";


export const metadata = {
  title: 'Midori Café - Home',
};

export default async function Home() {
  
  try{
    const data = await getIdentities();

    return (
    <main>
      <Hero />
      <SobreEmpresa pilares={data}/>
      <MaisVendidos />
      <Opinioes />
    </main>
  );

  } catch (error) {
    console.error("Erro ao dar fetch nas identities", error);
    return <p>Ops, ocorreu um erro ao carregar os dados! :/</p>
  }
  
}
