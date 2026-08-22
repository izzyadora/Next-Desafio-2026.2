'use server';

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";

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