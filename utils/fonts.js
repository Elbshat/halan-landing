import { Open_Sans, DM_Sans, Poppins, Nunito } from "next/font/google";

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
