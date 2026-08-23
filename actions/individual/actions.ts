"use server";

import prisma from "@/src/lib/db";

export async function fetchProductByID(id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
    });
    return product;
}

