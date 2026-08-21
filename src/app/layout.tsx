import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Serif_4, Fraunces} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-source-serif',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Midori Café",
  description: "Site de e-commerce de produtos de café, oferecendo uma experiência única para os amantes da bebida."
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSans.variable} ${sourceSerif.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}