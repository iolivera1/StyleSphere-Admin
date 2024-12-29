import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/model-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const inter = Inter({ subsets: ["latin"] });

type Params = Promise<{ storeId: string }>;

export const metadata: Metadata = {
  title: "StyleSphere - Admin Panel",
  description: "Admin Panel for StyleSphere",
};

export default async function RootLayout(props: { children: React.ReactNode; params: Params }) {

  const params = await props.params;
  const { storeId } = params;
  const { userId } = await auth();


  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/sign-in");
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <ToasterProvider />
            <ModalProvider />
            {props.children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}