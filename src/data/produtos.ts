import { Produto } from "@/src/components/ui/CardProduto";

export const PRODUTOS: Produto[] = [
  {
    id: "1",
    nome: "Panqueca de Blueberry",
    descricao: "Macia, quentinha e recheada com mirtilos frescos.",
    preco: 24.99,
    imagemUrl: "/images/panqueca_blueberry.jpg",
  },
  {
    id: "2",
    nome: "Croissant Tradicional",
    descricao: "Massa folhada artesanal com crocância e manteiga de primeira.",
    preco: 14.50,
    imagemUrl: "/images/croissant.jpg",
  },
  {
    id: "3",
    nome: "Cheesecake de Frutas Vermelhas",
    descricao: "Creme suave de queijo com calda artesanal levemente azedinha.",
    preco: 22.00,
    imagemUrl: "/images/cheesecake.jpg",
  },
  {
    id: "4",
    nome: "Cinnamon Roll",
    descricao: "Pão doce trançado com canela e cobertura de cream cheese.",
    preco: 16.90,
    imagemUrl: "/images/cinnamonroll.jpg",
  },
  {
    id: "5",
    nome: "Pudim de Leite Condensado",
    descricao: "Clássico sem furinhos, extremamente cremoso com calda de caramelo.",
    preco: 12.00,
    imagemUrl: "/images/pudim.jpg",
  },
  {
    id: "6",
    nome: "Panqueca Americana Clássica",
    descricao: "Acompanha manteiga cremosa e bastante xarope de bordo.",
    preco: 19.90,
    imagemUrl: "/images/panqueca_normal.jpg",
  },
  {
    id: "7",
    nome: "Panqueca de Blueberry Dupla",
    descricao: "Porção reforçada com duas camadas e calda extra.",
    preco: 29.90,
    imagemUrl: "/images/panqueca_blueberry.jpg",
  },
  {
    id: "8",
    nome: "Croissant de Amêndoas",
    descricao: "Folhado recheado com creme de amêndoas e lascas tostadas.",
    preco: 17.50,
    imagemUrl: "/images/croissant.jpg",
  },
  {
    id: "9",
    nome: "Cheesecake de Doce de Leite",
    descricao: "Combinação perfeita de cheesecake clássico com doce de leite caseiro.",
    preco: 23.50,
    imagemUrl: "/images/cheesecake.jpg",
  },
  {
    id: "10",
    nome: "Mini Cinnamon Rolls (4 unid)",
    descricao: "Perfeitos para compartilhar ou acompanhar um bom café.",
    preco: 21.00,
    imagemUrl: "/images/cinnamonroll.jpg",
  },
  {
    id: "11",
    nome: "Fatia de Pudim Especial",
    descricao: "Fatia generosa servida geladinha com raspas de limão.",
    preco: 13.50,
    imagemUrl: "/images/pudim.jpg",
  },
  {
    id: "12",
    nome: "Panqueca com Mel e Frutas",
    descricao: "Combinação saudável com bananas e mel orgânico.",
    preco: 22.90,
    imagemUrl: "/images/panqueca_normal.jpg",
  },
  {
    id: "13",
    nome: "Café Gelado da Casa",
    descricao: "Café extraído a frio com toque de baunilha e gelo.",
    preco: 12.90,
    imagemUrl: "/images/cafe_gelado.jpg",
  },
  {
    id: "14",
    nome: "Café Coado Simples",
    descricao: "Café especial moído na hora e coado no filtro de papel.",
    preco: 7.50,
    imagemUrl: "/images/cafe_simples.jpg",
  },
  {
    id: "15",
    nome: "Cappuccino Italiano",
    descricao: "Café expresso com leite vaporizado e espuma cremosa.",
    preco: 14.00,
    imagemUrl: "/images/cappuccino.jpg",
  },
  {
    id: "16",
    nome: "Chá de Hibisco com Anis",
    descricao: "Infusão refrescante e aromática com toque especiado.",
    preco: 10.90,
    imagemUrl: "/images/cha_hibisco_anis.jpg",
  },
  {
    id: "17",
    nome: "Chocolate Quente Cremoso",
    descricao: "Chocolate nobre derretido com leite e pitada de canela.",
    preco: 15.90,
    imagemUrl: "/images/chocolate_quente.jpg",
  },
  {
    id: "18",
    nome: "Cookie com Gotas de Chocolate",
    descricao: "Crocante por fora, macio por dentro e com chocolate meio amargo.",
    preco: 9.50,
    imagemUrl: "/images/cookies.jpg",
  },
  {
    id: "19",
    nome: "Donut de Chocolate",
    descricao: "Massa fofinha com cobertura generosa de ganache.",
    preco: 11.00,
    imagemUrl: "/images/donut_chocolate.jpg",
  },
  {
    id: "20",
    nome: "Donut Tradicional Glaceado",
    descricao: "Rosquinha artesanal com cobertura clássica de açúcar.",
    preco: 9.90,
    imagemUrl: "/images/donut.jpg",
  },
  {
    id: "21",
    nome: "Café Expresso Duplo",
    descricao: "Sabor intenso e encorpado, extraído sob alta pressão.",
    preco: 8.00,
    imagemUrl: "/images/expresso.jpg",
  },
];

const IDs_MAIS_VENDIDOS = ["1", "3", "4", "5", "13", "15", "18", "19"];

export const PRODUTOS_MAIS_VENDIDOS: Produto[] = PRODUTOS.filter((produto) =>
  IDs_MAIS_VENDIDOS.includes(produto.id)
);

export function getProdutoById(id: string): Produto | undefined {
  return PRODUTOS.find((produto) => produto.id === id);
}