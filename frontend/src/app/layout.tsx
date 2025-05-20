import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SiWhatsapp } from "react-icons/si";

export const metadata: Metadata = {
  title: "Loan Projector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div>
          <NavBar />
          {children}
          <Footer />
          {/* WhatsApp floating button */}
          <a href={"https://wa.me/917829712159"} target="_blank">
            <div className="fixed bottom-15 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600">
              <SiWhatsapp className="text-2xl" />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
