import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/app/components/Providers";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "ArtistryHub",
  description: "Connect artists and clients through commissions",
};

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
