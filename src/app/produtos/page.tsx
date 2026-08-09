import Navbar from "@/src/components/layout/geral/navbar";
import Footer from "@/src/components/layout/geral/footer";
import Produtos from "@/src/components/layout/produtos/produtos";

export default function ProdutosPage() {
  return (
    <main>
      <Navbar />
      <Produtos />
      <Footer />
    </main>
  );
}