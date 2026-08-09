// ARQUIVO PRA MOCKAR O CARROSSEL!

import { Produto } from "@/src/components/ui/card_produto";

export const PRODUTOS_MAIS_VENDIDOS: Produto[] = [
  {
    id: "1",
    nome: "Panqueca de Blueberry",
    descricao: "Leve, macia, cheia de sabor.",
    preco: 24.99,
    imagemUrl: "/images/panqueca.jpg",
  },
  {
    id: "2",
    nome: "Panqueca de Blueberry",
    descricao: "Leve, macia, cheia de sabor.",
    preco: 24.99,
    imagemUrl: "/images/panqueca.jpg",
  },
  {
    id: "3",
    nome: "Panqueca de Blueberry",
    descricao: "Leve, macia, cheia de sabor.",
    preco: 24.99,
    imagemUrl: "/images/panqueca.jpg",
  },
  {
    id: "4",
    nome: "Panqueca de Morango",
    descricao: "Doce na medida certa com morangos frescos.",
    preco: 26.99,
    imagemUrl: "/images/panqueca.jpg",
  },
];

export function getProdutoById(id: string): Produto | undefined {
  return PRODUTOS_MAIS_VENDIDOS.find((produto) => produto.id === id);
}