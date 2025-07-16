import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import { Space_Grotesk } from 'next/font/google'
// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   variable: '--font-space-grotesk',
//   weight: ['400', '500', '600', '700'], // choose the weights you need
//   display: 'swap',
// })


export const metadata: Metadata = {
  title: "Abdullah Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${spaceGrotesk.variable} antialiased`}
        className="font-serif"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
