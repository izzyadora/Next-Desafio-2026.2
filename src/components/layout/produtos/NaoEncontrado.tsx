import { ArrowLeft, PackageX } from "lucide-react";
import Link from "next/link";

export default function NaoEncontrado() {
  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
        <PackageX className="w-12 h-12 text-militar-300" strokeWidth={1.5} />
        <h1 className="font-source-serif font-bold text-2xl text-chocolate">
          Produto não encontrado
        </h1>
        <p className="font-dm-sans text-militar-300">
          O produto que você procura não existe ou foi removido.
        </p>
        <Link
          href="/produtos"
          className="mt-2 inline-flex items-center gap-2 font-dm-sans text-sm text-militar-500 hover:text-oliva transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o cardápio
        </Link>
      </div>
    </div>
  );
}
