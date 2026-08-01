import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-creme px-8 py-4 text-militar-500 font-dm-sans">
      <h1 className="text-xl font-bold">
        MidoriCafe
      </h1>

      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/contato">Contato</Link>
        </li>

        <li>
          <Link href="/contato">Produtos</Link>
        </li>
      </ul>
    </nav>
  );
}