"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";

export async function getProdutos(
  query?: string,
  page: number = 1,
  limit: number = 10
) {
  const skip = (page - 1) * limit;

  const whereClause = query
    ? {
        OR: [
          { title: { contains: query, mode: "insensitive" as const } },
          { description: { contains: query, mode: "insensitive" as const } },
        ],
      }
    : undefined;

  const [products, totalCount] = await Promise.all([
    prisma.product.findMany({
      where: whereClause,
      select: {
        id: true,
        image: true,
        title: true,
        description: true,
        price: true,
      },
      skip,
      take: limit,
      orderBy: { id: "asc" },
    }),
    prisma.product.count({ where: whereClause }),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return { products, totalCount, totalPages, currentPage: page };
}

export async function CreateProduto(data: {
  title: string;
  description: string;
  price: number;
  image: string;
}) {
  const produto = await prisma.product.create({
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      image: data.image,
    },
  });
  revalidatePath("/tabela");
  return produto;
}

export async function ReadProduto(id: number) {
  const produto = await prisma.product.findUnique({
    where: { id },
  });
  return produto;
}

export async function UpdateProduto(
  id: number,
  data: {
    title?: string;
    description?: string;
    price?: number;
    image?: string;
  },
) {
  const produto = await prisma.product.update({
    where: { id },
    data,
  });
  revalidatePath("/tabela");
  return produto;
}

export async function DeleteProduto(id: number) {
  const produto = await prisma.product.delete({
    where: { id },
  });
  revalidatePath("/tabela");
  return produto;
}

export async function CountProdutos() {
  const count = await prisma.product.count();
  return count;
}
