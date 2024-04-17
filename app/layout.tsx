

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviders from "@/providers/AuthProviders";
import AuthLoader from "@/shared/AuthLoader";
import clsx from "clsx";
import { ThemeProvider } from "@/providers/ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "___",
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
        <body className={clsx(inter.className, 'flex h-screen w-full')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthLoader>
              {children}
            </AuthLoader>
          </ThemeProvider>
        </body>
      </AuthProviders>
    </html>
  );
}






