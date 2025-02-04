import { Open_Sans, DM_Sans, Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Halan Halal",
  description:
    "Welcome to Halan Halal - Your trusted source for premium halal food. Discover our wide range of delicious and authentic halal products, crafted with care and quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={` ${poppins.variable} ${dmSans.variable} ${openSans.variable} ${nunito.variable} bg-background antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
