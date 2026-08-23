import Sidebar from "@/src/components/layout/tabela/Sidebar";
import Footer from "@/src/components/layout/geral/FooterComponent";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}