// Tipos gerados a partir do schema.prisma

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type Product = {
  id?: number;
  title: string;
  description?: string;
  image?: string | null;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  itemsCart?: ItemCart[];
}
export type ProductIndividual = {
  id?: number;
  title: string;
  description?: string;
  image?: string | null;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  itemsCart?: ItemCart[];
} | null;


export type User = {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  createdAt?: Date;
  updatedAt?: Date;
  cart?: Cart | null;
}

export type Cart = {
  id?: number;
  userId?: number;
  user?: User | null;
  createdAt?: Date;
  updatedAt?: Date;
  items?: ItemCart[];
}

export type ItemCart = {
  id?: number;
  cartId?: number;
  productId?: number;
  quantity?: number;
  cart?: Cart;
  product?: Product;
}