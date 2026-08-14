import Navbar from "@/src/components/layout/geral/NavbarComponent";
import Footer from "@/src/components/layout/geral/FooterComponent";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar/>
      {children}
      <Footer/>
    </section>
  );
}