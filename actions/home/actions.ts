"use server";

import prisma from "@/src/lib/db";

export default async function getMaisVendidos() {
    const posts = await prisma.product.findMany({
        select:{
            id: true,
            title: true,
            description: true,
            image: true,
            price: true,
        },
        take: 6,
    });
    return posts;
}