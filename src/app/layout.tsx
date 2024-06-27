import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lemonclick.vercel.app"),
  keywords: ["lemon", "click", "open in app link", "lemon click"],
  title: {
    default: "Lemon Click",
    template: "%s | Lemon Click",
  },
  openGraph: {
    description: "Create and share open in app links with ease",
    siteName: "Lemon Click",
    images: ["/lemonclick-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
