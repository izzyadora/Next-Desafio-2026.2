"use client";

import { useState } from "react";
import Link from "next/link";
import { logOut } from "@/actions/login/actions";
import type { Session } from "next-auth";
import {
  SquareArrowRightExit,
  Menu,
  House,
  ShoppingCart,
  User as UserIcon,
} from "lucide-react";

interface SidebarProps {
  session: Session | null;
}

export default function Sidebar({ session }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const usuario = session?.user;

  return (
    <div className="bg-transparent sticky top-0 h-screen shrink-0">
      <div
        className={`bg-chocolate font-dm-sans h-screen flex flex-col justify-between transition-all duration-300 z-50 ${
          isOpen ? "w-48" : "w-20"
        }`}
      >
        {/* topo */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-center text-offwhite p-6 hover:cursor-pointer transition-colors"
        >
          <Menu className="h-7 w-7" />
        </button>

        {/* meio */}
        <div className="text-offwhite flex flex-col justify-center gap-4 px-6 flex-1">
          <Link
            href="/"
            className={`flex items-center gap-3 hover:text-chocolate hover:bg-creme py-2 px-4 hover:rounded-3xl transition-transform ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <House className="h-5 w-5 shrink-0" />
            {isOpen && <span className="whitespace-nowrap">Home</span>}
          </Link>

          <Link
            href="/tabela"
            className={`flex items-center gap-3 hover:text-chocolate hover:bg-creme py-2 px-4 hover:rounded-3xl transition-transform ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <ShoppingCart className="h-5 w-5 shrink-0" />
            {isOpen && <span className="whitespace-nowrap">Produtos</span>}
          </Link>
        </div>

        {/* fim */}
        <div className="text-offwhite flex flex-col items-center gap-1 p-6 border-t border-offwhite/10">
          <div className="bg-offwhite text-chocolate rounded-full w-12 h-12 flex items-center justify-center shrink-0">
            <UserIcon />
          </div>

          {isOpen && (
            <>
              <span className="text-sm font-semibold whitespace-nowrap truncate max-w-35 text-center">
                {usuario?.name || "Usuário"}
              </span>
              <span className="text-xs text-offwhite/70 whitespace-nowrap truncate max-w-35 text-center">
                {usuario?.email || "sem-email@dominio.com"}
              </span>
            </>
          )}

          {isOpen && (
            <button
              className="flex items-center gap-2 bg-offwhite text-chocolate rounded-4xl px-4 py-2 mt-4 hover:bg-creme hover:cursor-pointer transition-colors"
              onClick={() => logOut()}
            >
              <SquareArrowRightExit className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap">Sair</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}