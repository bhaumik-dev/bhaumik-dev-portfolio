import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-serif",
// });
const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Bhaumik Raja | Frontend Developer | Webflow Developer",
  description: "Bhaumik Raja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          // playfair.variable,
          dmsans.variable,
          "bg-background text-text antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
