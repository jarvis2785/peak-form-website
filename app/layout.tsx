import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peakform | Fitness Coaching for Founders",
  description:
    "Peakform coaches founders and entrepreneurs to reach their peak physical and mental form while building their businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* META PIXEL PLACEHOLDER - insert tracking code here */}
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} antialiased bg-background text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}
