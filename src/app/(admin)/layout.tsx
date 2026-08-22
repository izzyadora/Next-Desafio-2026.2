import Sidebar from "@/src/components/layout/tabela/Sidebar";
import Footer from "@/src/components/layout/geral/FooterComponent";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <Footer />
    </section>
  );
}