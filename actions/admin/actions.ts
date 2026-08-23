'use server';

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";

export async function getProdutos(){
    const produtos = await prisma.product.findMany({
        select: {
            id: true,
            image: true,
            title: true,
            description: true,
            price: true,
        },
        orderBy: { id: 'asc'},
    });
    return produtos;
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
    revalidatePath('/tabela');
    return produto;
}

export async function ReadProduto(id: number) {
  const produto = await prisma.product.findUnique({
    where: { id },
  });
  return produto;
}

export async function UpdateProduto(id: number, data: {
    title?: string;
    description?: string;
    price?: number;
    image?: string;
}) {
    const produto = await prisma.product.update({
        where: { id },
        data,
    });
    revalidatePath('/tabela');
    return produto;
}

export async function DeleteProduto(id: number) {
    const produto = await prisma.product.delete({
        where: { id },
    });
    revalidatePath('/tabela');
    return produto;
}

export async function CountProdutos() {
    const count = await prisma.product.count();
    return count;
}