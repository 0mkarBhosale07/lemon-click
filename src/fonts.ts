import {
  Inter,
  Oswald,
  Playfair_Display,
  Pacifico,
  Courgette,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin"],
});
export const playfair = Playfair_Display({ subsets: ["latin"] });
export const pascifico = Pacifico({ subsets: ["cyrillic"], weight: "400" });
export const courgette = Courgette({ subsets: ["latin-ext"], weight: "400" });
