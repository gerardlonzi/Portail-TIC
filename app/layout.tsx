
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviders from "@/providers/AuthProviders";
import AuthLoader from "@/shared/AuthLoader";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TIC Portal",
  description: "next Generation of Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <AuthProviders>
          <body className={inter.className}>{children}</body>
      </AuthProviders>
    </html>
  );
}
