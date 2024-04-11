import AuthLoader from "@/shared/AuthLoader";
import type { Metadata } from "next";

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
    <>
            <AuthLoader>
             {children}
           </AuthLoader>
    </>
          
  );
}
