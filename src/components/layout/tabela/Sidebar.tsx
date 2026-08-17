"use client";
import Link from "next/link";
import {
  SquareArrowRightExit,
  Menu,
  House,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-chocolate font-dm-sans w-20 sm:w-48 h-screen flex flex-col rounded-r-3xl justify-between transition-all duration-300 z-9999">
      {/* topo */}
      <div className="flex justify-center text-offwhite p-6 hover:cursor-pointer transition-colors">
        <Menu className="h-7 w-7" />
      </div>

      {/* meio */}
      <div className="text-offwhite flex flex-col justify-center gap-4 px-6 flex-1">
        <Link
          href="/"
          className="flex items-center gap-3 hover:text-chocolate hover:bg-creme py-2 px-4 hover:rounded-3xl transition-transform"
        >
          <House className="h-5 w-5" />
          <span className="hidden sm:inline">Home</span>
        </Link> 

        <Link
          href="/"
          className="flex items-center gap-3 hover:text-chocolate hover:bg-creme py-2 px-4 hover:rounded-3xl transition-transform"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">Produtos</span>
        </Link>
      </div>

      {/* fim */}
      <div className="text-offwhite flex flex-col items-center gap-1 p-6 border-t border-offwhite/10">
        <div className="bg-offwhite text-chocolate rounded-full w-12 h-12 flex items-center justify-center">
          <User />
        </div>
        <span className="hidden sm:inline text-sm">Seu Nome</span>
        <span className="hidden sm:inline text-xs text-offwhite/70">
          email@gmail.com
        </span>

        <Link href="/login">
          <button className="flex items-center gap-2 bg-offwhite text-chocolate rounded-4xl px-4 py-2 mt-4 hover:bg-creme hover:cursor-pointer transition-colors">
            <SquareArrowRightExit className="h-5 w-5" />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
