"use server";

import prisma from "@/src/lib/db";

export async function getMaisVendidos() {
    const products = await prisma.product.findMany({
        select:{
            id: true,
            title: true,
            description: true,
            image: true,
            price: true,
        },
        take: 6,
    });
    return products;
}

export async function getTodosProdutos() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      price: true,
    },
  });

  return products;
}