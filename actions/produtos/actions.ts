"use server";

import prisma from "@/src/lib/db";

export async function FetchProdutos(id: number){
    const produto = await prisma.product.findUnique({
        where: {id},
        select: {
            id: true,
            image: true,
            title: true,
            price: true,
            description: true,
        },
    });
    return produto;
}

export async function getProdutos(query?: string, page: number = 1, limit: number = 12){
    const skip = (page - 1) * limit;
    
    const whereClause = query ? {
        OR: [
            { title: { contains: query, mode: 'insensitive' as const } },
            { description: { contains: query, mode: 'insensitive' as const } },
        ],
    } : undefined;

    const [products, totalCount] = await Promise.all([
        prisma.product.findMany({
            where: whereClause,
            select: {
                id: true,
                image: true,
                title: true,
                price: true,
                description: true,
            },
            skip,
            take: limit,
        }),
        prisma.product.count({ where: whereClause }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return { products, totalCount, totalPages, currentPage: page };
}
