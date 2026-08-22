"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const CART_COOKIE = "cartID";

//crud carrinho

//cria o carrinho ou pega pelo cookie
async function getOrCreateCart() {
  const cookie = await cookies();
  const cartId = cookie.get(CART_COOKIE)?.value;

  if (cartId) {
    const cart = await prisma.cart.findUnique({
      where: { id: Number(cartId) },
    });
    if (cart) return cart;
  }

  const newCart = await prisma.cart.create({ data: {} });
  cookie.set(CART_COOKIE, String(newCart.id), {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // no máximo 7 dias
  });
  return newCart;
}

export async function addToCart(productId: number, quantity: number = 1) {
  const produto = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  const cart = await getOrCreateCart();

  // se o item já existe no carrinho, só soma a quantidade
  const existingItem = await prisma.itemCart.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (existingItem) {
    await prisma.itemCart.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + quantity },
    });
  } else {
    await prisma.itemCart.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });
  }

  revalidatePath("/carrinho");
}

export async function updateCartItem(itemCartId: number, quantity: number) {
  if (quantity <= 0) {
    // se zerar, remove
    return removeFromCart(itemCartId);
  }

  await prisma.itemCart.update({
    where: { id: itemCartId },
    data: { quantity },
  });

  revalidatePath("/carrinho");
}

export async function removeFromCart(itemCartId: number) {
  await prisma.itemCart.delete({
    where: { id: itemCartId },
  });

  revalidatePath("/carrinho");
}

export async function clearCart() {
  const cookie = await cookies();
  const cartId = cookie.get(CART_COOKIE)?.value;

  if (!cartId) return;

  await prisma.itemCart.deleteMany({
    where: { cartId: Number(cartId) },
  });

  revalidatePath("/carrinho");
}

export async function getCart() {
  const cookie = await cookies();
  const cartId = cookie.get(CART_COOKIE)?.value;

  if (!cartId) {
    return { items: [], total: 0 };
  }

  const cart = await prisma.cart.findUnique({
    where: { id: Number(cartId) },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!cart) {
    return { items: [], total: 0 };
  }

  const total = cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  return { items: cart.items, total };
}
