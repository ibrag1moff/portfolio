// next
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

// providers
import Providers from "./providers";

// components
import Footer from "@/components/Footer";

const font = Ubuntu({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "abbas.dev",
    description: "Created by ibrag1moff.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${font.className} bg-gradient-to-r from-[#090909] to-[#0b0b0b] text-white`}
            >
                <Providers>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
