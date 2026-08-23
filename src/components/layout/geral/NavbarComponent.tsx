'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [estaAtivo, setEstaAtivo] = useState(false);

  return (
    <nav className="relative bg-creme font-dm-sans px-8  z-50 border-b border-chocolate/20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo120x120.png"
            alt="Logo da Midori Café"
            width={96}
            height={96}
            className="transition-transform duration-300 ease-in-out hover:scale-120"
          />
        </Link>

        {/* Links no desktop */}
        <div className="hidden md:flex gap-6 font-semibold text-chocolate">
          <Link href="/" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-militar-500">Home</Link>
          <Link href="/produtos" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-militar-500">Produtos</Link>
          <Link href="/contato" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-militar-500">Contato</Link>
        </div>

        {/* Ações no desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/carrinho">
            <Image src="/icons/shopping-cart.svg" alt="Ícone de carrinho" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />
          </Link>

          <Link href="/login">
            <button className="px-4 py-2 bg-militar-500 rounded-full text-creme font-semibold hover:bg-chocolate transition-transform duration-300 hover:scale-105">Login</button>
          </Link>
        </div>

        {/* Botão hambúrguer */}
        <button 
          onClick={() => setEstaAtivo(!estaAtivo)} 
          aria-label={estaAtivo ? "Fechar menu" : "Abrir menu"}
          aria-expanded={estaAtivo}
          className="md:hidden text-chocolate focus:outline-none p-2 relative z-50"
        >
          {estaAtivo ? (
            /* Ícone de Fechar */
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Ícone Hambúrguer */
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown menu */}
      {estaAtivo && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-creme shadow-xl flex flex-col gap-4 p-6 border-t border-chocolate/10 z-50">
          <Link 
            href="/" 
            onClick={() => setEstaAtivo(false)}
            className="font-semibold text-chocolate hover:text-militar-500 text-lg"
          >
            Home
          </Link>
          <Link 
            href="/produtos" 
            onClick={() => setEstaAtivo(false)}
            className="font-semibold text-chocolate hover:text-militar-500 text-lg"
          >
            Produtos
          </Link>
          <Link 
            href="/contato" 
            onClick={() => setEstaAtivo(false)}
            className="font-semibold text-chocolate hover:text-militar-500 text-lg"
          >
            Contato
          </Link>

          <hr className="border-chocolate/20 my-2" />

          {/* Ações no Mobile */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-4 items-center">
              <Link href="/carrinho" onClick={() => setEstaAtivo(false)}>
                <Image src="/icons/shopping-cart.svg" alt="Ícone de carrinho" width={24} height={24} />
              </Link>
            </div>

            <Link href="/login" onClick={() => setEstaAtivo(false)}>
              <button className="px-5 py-2 bg-militar-500 rounded-full text-creme font-semibold hover:bg-chocolate transition-colors">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}