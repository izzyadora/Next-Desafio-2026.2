import Navbar from "../../components/layout/geral/navbar";
import Footer from "@/src/components/layout/geral/footer";

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