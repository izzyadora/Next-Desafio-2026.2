"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";

//crud carrinho

export async function addToCart(productID: number){
    const produto = await prisma.product.findUnique({
        where: {
            id: productID,
        },
    });

    if(!produto){
        throw new Error("Produto não encontrado");
    }
    revalidatePath("/carrinho");
    return produto;
}

export async function updateCartItem(){
    const updatedItem = await prisma.itemCart.update({
        where: {
            id: itemCartId,
        },
        data: {
            quantity,
        },
    });
}

export async function removeFromCart(){

}

export async function clearCart(){

}

export async function getCart(){
    const carrinho = await prisma.cart.findUnique({
        where: {
            userId,
        },
        include: {
            items: {
                include: {
                    product: true,
                },
            },
        },
    });
}

