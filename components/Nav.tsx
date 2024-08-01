"use client";
// next
import Link from "next/link";
import { useEffect, useState } from "react";

// icons
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// framer motion
import { motion } from "framer-motion";

type navLinks = {
    id: number;
    title: string;
    href: string;
};

export default function Nav() {
    const [active, setActive] = useState<boolean>(false);
    const navLinks = [
        {
            id: 1,
            title: "Home",
            href: "/",
        },
        {
            id: 2,
            title: "About",
            href: "/about",
        },
        {
            id: 3,
            title: "Feedback",
            href: "/feedback",
        },
    ];

    useEffect(() => {
        window.addEventListener("click", () => setActive(false));
        window.addEventListener("scroll", () => setActive(false));
    });

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between px-3 py-4 md:px-9 lg:px-12"
        >
            <Link
                className={`${
                    active ? "text-black lg:text-white" : "text-white"
                } uppercase font-bold tracking-[1px] z-10`}
                href="/"
            >
                abbas.dev
            </Link>
            <div>
                <button
                    onClick={() => setActive(!active)}
                    className="bg-white rounded-full p-1 relative z-20"
                >
                    {active ? (
                        <IoClose fill="#000" size={30} />
                    ) : (
                        <HiMenuAlt4 fill="#000" size={30} />
                    )}
                </button>
                <div
                    className={`absolute right-0 w-full h-[60%] bg-white p-4 transition-all duration-300 rounded-2xl lg:w-[200px] lg:h-[200px] lg:bg-transparent
                        ${
                            active
                                ? "top-0 lg:top-0 lg:right-12"
                                : "top-[-100%]"
                        }`}
                >
                    <ul className="flex flex-col items-center justify-center gap-3 h-full lg:flex-row">
                        {navLinks.map((link: navLinks) => (
                            <li
                                key={link.id}
                                className="text-black font-medium text-2xl lg:text-xl tracking-[1px] uppercase lg:text-white"
                            >
                                <Link
                                    className="lg:hover:underline"
                                    onClick={() => setActive(false)}
                                    href={link.href}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}
