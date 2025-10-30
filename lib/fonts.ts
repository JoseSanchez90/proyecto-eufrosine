import { Oleo_Script } from "next/font/google";
import { Pacifico } from "next/font/google";

export const oleo = Oleo_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});