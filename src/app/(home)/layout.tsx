import { auth } from "@/auth/auth"; // ajuste o caminho relativo se necessário
import Navbar from "@/src/components/layout/geral/NavbarComponent";
import Footer from "@/src/components/layout/geral/FooterComponent";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <section>
      <Navbar session={session} />
      {children}
      <Footer />
    </section>
  );
}