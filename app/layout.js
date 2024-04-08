import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Levi Hinnenthal",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      </body>
    </html>
  );
}
