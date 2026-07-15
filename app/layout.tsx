import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}
