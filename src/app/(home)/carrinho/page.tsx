import Carrinho from "@/src/components/layout/carrinho/Carrinho";
import { getCart } from "@/actions/carrinho/actions";

export const metadata = {
  title: 'Midori Café - Carrinho',
};

export default async function CarrinhoPage() {
  const { items } = await getCart();

  const itensFormatados = items.map((item) => ({
    id: item.id,
    nome: item.product.title,
    imagemUrl: item.product.image,
    preco: item.product.price,
    quantidade: item.quantity
  }))

  return (
    <main>
      <Carrinho itensIniciais={itensFormatados}/>
    </main>
  );
}