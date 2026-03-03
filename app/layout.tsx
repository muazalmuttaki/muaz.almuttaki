// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Muaz Al Muttaki",
    template: "%s | Muaz Al Muttaki",
  },
  description: "Islamic educator & Web Developer portfolio website.",
  keywords: ["Muaz", "Web Developer", "Islamic Educator", "Portfolio"],
  authors: [{ name: "Muaz Al Muttaki" }],
  openGraph: {
    title: "Muaz Al Muttaki",
    description: "Muaz Al Muttaki Official portfolio website",
    url: "https://muazalmuttaki.vercel.app/",
    siteName: "Muaz Al Muttaki Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}