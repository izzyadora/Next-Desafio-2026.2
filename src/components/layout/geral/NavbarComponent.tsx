'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logOut } from '@/actions/login/actions';
import type { Session } from 'next-auth';

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  const [estaAtivo, setEstaAtivo] = useState(false);

  const isLogado = !!session?.user;
  const isAdmin = session?.user?.role === 'ADMIN';

  return (
    <nav className="relative bg-creme font-dm-sans px-8 z-50 border-b border-chocolate/20">
      <div className="flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <Image
            src="/images/logo120x120.png"
            alt="Logo da Midori Café"
            width={96}
            height={96}
            className="transition-transform duration-300 ease-in-out hover:scale-120"
          />
        </Link>

        {/* links no desktop */}
        <div className="hidden md:flex gap-6 font-semibold text-chocolate">
          <Link href="/" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-militar-500">
            Home
          </Link>
          <Link href="/contato" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-militar-500">
            Contato
          </Link>
          <Link href="/produtos" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-militar-500">
            Produtos
          </Link>
          
          {/* gerenciamento apenas para admin */}
          {isAdmin && (
            <Link href="/tabela" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-militar-500 font-bold">
              Gerenciamento
            </Link>
          )}
        </div>

        {/* ações no desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/carrinho">
            <Image src="/icons/shopping-cart.svg" alt="Ícone de carrinho" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />
          </Link>

          {/* logout x login */}
          {isLogado ? (
            <button
              onClick={() => logOut()}
              className="px-4 py-2 bg-chocolate text-creme rounded-full font-semibold hover:bg-militar-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 bg-militar-500 rounded-full text-creme font-semibold hover:bg-chocolate transition-transform duration-300 hover:scale-105">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* botão hambúrguer */}
        <button 
          onClick={() => setEstaAtivo(!estaAtivo)} 
          aria-label={estaAtivo ? "Fechar menu" : "Abrir menu"}
          aria-expanded={estaAtivo}
          className="md:hidden text-chocolate focus:outline-none p-2 relative z-50"
        >
          {estaAtivo ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* dropdown menu (mobile) */}
      {estaAtivo && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-creme shadow-xl flex flex-col gap-4 p-6 border-t border-chocolate/10 z-50">
          <Link href="/" onClick={() => setEstaAtivo(false)} className="font-semibold text-chocolate hover:text-militar-500 text-lg">Home</Link>
          <Link href="/contato" onClick={() => setEstaAtivo(false)} className="font-semibold text-chocolate hover:text-militar-500 text-lg">Contato</Link>
          <Link href="/produtos" onClick={() => setEstaAtivo(false)} className="font-semibold text-chocolate hover:text-militar-500 text-lg">Produtos</Link>
          
          {isAdmin && (
            <Link href="/tabela" onClick={() => setEstaAtivo(false)} className="font-semibold text-militar-500 hover:text-chocolate text-lg">
              Gerenciamento
            </Link>
          )}

          <hr className="border-chocolate/20 my-2" />

          <div className="flex items-center justify-between pt-2">
            <Link href="/carrinho" onClick={() => setEstaAtivo(false)}>
              <Image src="/icons/shopping-cart.svg" alt="Ícone de carrinho" width={24} height={24} />
            </Link>

            {isLogado ? (
              <button
                onClick={() => { setEstaAtivo(false); logOut(); }}
                className="px-5 py-2 bg-chocolate text-creme rounded-full font-semibold hover:bg-militar-500 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" onClick={() => setEstaAtivo(false)}>
                <button className="px-5 py-2 bg-militar-500 rounded-full text-creme font-semibold hover:bg-chocolate transition-colors">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}