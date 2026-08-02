import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-2 bg-creme font-dm-sans">
      <Link href="/">
        <Image
          src="/images/logo120x120.png"
          alt="Logo da Midori Café"
          width={76}
          height={76}
          className="transition-transform duration-300 ease-in-out hover:scale-120"
        />
      </Link>
      <div className="flex gap-6 font-semibold text-chocolate">
        <Link href="/">Home</Link>
        <Link href="/menu">Produtos</Link>
        <Link href="/contato">Contato</Link>
      </div>
      <div className="flex gap-6 left items-center">
        <Link href="">
          <Image
              src="/icons/search_icon.svg"
              alt="Ícone de pesquisa"
              width={32}
              height={32}
              className="hover:transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>

        <Link href="/carrinho">
          <Image
              src="/icons/shopping-cart.svg"
              alt="Ícone de carrinho"
              width={24}
              height={24}
              className="hover:transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>

        <Link href="/login">
          <button className="px-4 py-2 bg-militar-500 rounded-full text-creme font-semibold hover:cursor-pointer hover:bg-chocolate hover:transition-transform duration-300 ease-in-out hover:scale-105">Login</button>
        </Link>
      </div>
    </nav>
  );
}