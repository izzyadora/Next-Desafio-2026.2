import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const products = [
    {
      title: "Panqueca de Blueberry",
      description: "Macia, quentinha e recheada com mirtilos frescos.",
      price: 24.99,
      createdAt: new Date(),
    },
    {
      title: "Croissant Tradicional",
      description:
        "Massa folhada artesanal com crocância e manteiga de primeira.",
      price: 14.5,
      createdAt: new Date(),
    },
    {
      title: "Cheesecake de Frutas Vermelhas",
      description:
        "Creme suave de queijo com calda artesanal levemente azedinha.",
      price: 22.0,
      createdAt: new Date(),
    },
    {
      title: "Cinnamon Roll",
      description: "Pão doce trançado com canela e cobertura de cream cheese.",
      price: 16.9,
      createdAt: new Date(),
    },
    {
      title: "Pudim de Leite Condensado",
      description:
        "Clássico sem furinhos, extremamente cremoso com calda de caramelo.",
      price: 12.0,
      createdAt: new Date(),
    },
    {
      title: "Panqueca Americana Clássica",
      description: "Acompanha manteiga cremosa e bastante xarope de bordo.",
      price: 19.9,
      createdAt: new Date(),
    },
    {
      title: "Panqueca de Blueberry Dupla",
      description: "Porção reforçada com duas camadas e calda extra.",
      price: 29.9,
      createdAt: new Date(),
    },
    {
      title: "Croissant de Amêndoas",
      description: "Folhado recheado com creme de amêndoas e lascas tostadas.",
      price: 17.5,
      createdAt: new Date(),
    },
    {
      title: "Cheesecake de Doce de Leite",
      description:
        "Combinação perfeita de cheesecake clássico com doce de leite caseiro.",
      price: 23.5,
      createdAt: new Date(),
    },
    {
      title: "Mini Cinnamon Rolls (4 unid)",
      description: "Perfeitos para compartilhar ou acompanhar um bom café.",
      price: 21.0,
      createdAt: new Date(),
    },
    {
      title: "Fatia de Pudim Especial",
      description: "Fatia generosa servida geladinha com raspas de limão.",
      price: 13.5,
      createdAt: new Date(),
    },
    {
      title: "Panqueca com Mel e Frutas",
      description: "Combinação saudável com bananas e mel orgânico.",
      price: 22.9,
      createdAt: new Date(),
    },
    {
      title: "Café Gelado da Casa",
      description: "Café extraído a frio com toque de baunilha e gelo.",
      price: 12.9,
      createdAt: new Date(),
    },
    {
      title: "Café Coado Simples",
      description: "Café especial moído na hora e coado no filtro de papel.",
      price: 7.5,
      createdAt: new Date(),
    },
    {
      title: "Cappuccino Italiano",
      description: "Café expresso com leite vaporizado e espuma cremosa.",
      price: 14.0,
      createdAt: new Date(),
    },
    {
      title: "Chá de Hibisco com Anis",
      description: "Infusão refrescante e aromática com toque especiado.",
      price: 10.9,
      createdAt: new Date(),
    },
    {
      title: "Chocolate Quente Cremoso",
      description: "Chocolate nobre derretido com leite e pitada de canela.",
      price: 15.9,
      createdAt: new Date(),
    },
    {
      title: "Cookie com Gotas de Chocolate",
      description:
        "Crocante por fora, macio por dentro e com chocolate meio amargo.",
      price: 9.5,
      createdAt: new Date(),
    },
    {
      title: "Donut de Chocolate",
      description: "Massa fofinha com cobertura generosa de ganache.",
      price: 11.0,
      createdAt: new Date(),
    },
    {
      title: "Donut Tradicional Glaceado",
      description: "Rosquinha artesanal com cobertura clássica de açúcar.",
      price: 9.9,
      createdAt: new Date(),
    },
    {
      title: "Café Expresso Duplo",
      description: "Sabor intenso e encorpado, extraído sob alta pressão.",
      price: 8.0,
      createdAt: new Date(),
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
