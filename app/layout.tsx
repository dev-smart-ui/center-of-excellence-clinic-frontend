import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Header} from "@/components/layout/header";

export const metadata: Metadata = {
    title: "Center of Excellence Clinic",
    description: "Center of Excellence Clinic",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`antialiased font-[family-name:var(--font-geist-sans)]`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div className={'grid grid-rows-[50px_1fr] gap-20 h-screen overflow-hidden relative'}>
                <Header />
                <div className={'w-full mx-auto max-w-[1440px] h-full pb-5 px-4 overflow-hidden'}>{children}</div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
