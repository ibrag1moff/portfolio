"use client";
// next
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <h1 className="font-bold text-7xl tracking-[2px]">404</h1>
            <h1 className="font-bold text-4xl tracking-[2px] mb-4">
                NOT FOUND
            </h1>
            <Link
                className="font-medium tracking-[2px] bg-white py-2 px-9 text-black uppercase rounded-full"
                href="/"
            >
                go home
            </Link>
        </div>
    );
}
