import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import {ModalProvider} from "@/providers/model-provider";
import {ToasterProvider} from "@/providers/toast-provider";
import {ThemeProvider} from "@/providers/theme-provider";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "StyleSphere - Admin Panel",
    description: "Admin Panel for StyleSphere",
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} >
            <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <ToasterProvider/>
                <ModalProvider/>
                {children}
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}
