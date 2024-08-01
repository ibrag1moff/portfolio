// next
import type { Metadata } from "next";
import { ReactNode } from "react";

interface AboutLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: "About me",
    description: "Created by ibrag1moff.",
};

export default function AboutLayout({ children }: AboutLayoutProps) {
    return <div className="bg-black">{children}</div>;
}
