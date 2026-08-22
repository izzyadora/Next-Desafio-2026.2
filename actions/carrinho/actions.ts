"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";

//crud carrinho

export async function addToCart(productID: number){
    const product = await prisma.product.findUnique({
        where: {
            id: productID,
        },
    });

    if(!product){
        throw new Error("Produto não encontrado");
    }
    revalidatePath("/carrinho");
}

export async function updateCartItem(){

}

export async function removeFromCart(){

}

export async function clearCart(){

}

export async function getCart(){

}

