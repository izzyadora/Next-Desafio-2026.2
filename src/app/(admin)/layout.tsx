import { auth } from "@/auth/auth"; // ajuste o caminho relativo se necessário
import Sidebar from "@/src/components/layout/tabela/Sidebar";
import Footer from "@/src/components/layout/geral/FooterComponent";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <div className="flex min-h-screen">
      <Sidebar session={session} />
      <div className="flex flex-col flex-1 min-w-0">
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}