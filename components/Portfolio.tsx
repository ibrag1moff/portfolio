"use client";
// next
import Link from "next/link";

// data
import { portfolio } from "@/data/portfolio";
import type { Portfolio } from "@/data/portfolio";

// framer motion
import { motion } from "framer-motion";

export default function Portfolio() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-24">
            <motion.div
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col xs:flex-row xs:flex-wrap items-center justify-center gap-4 px-2"
            >
                {portfolio.slice(0, 3).map((portfolio: Portfolio) => (
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative group cursor-pointer"
                        key={portfolio.id}
                    >
                        <img
                            className="w-[320px]"
                            src={portfolio.image}
                            alt="Project image"
                        />
                        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center h-full bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <Link
                                className="bg-white py-2 px-9 rounded-full text-black uppercase tracking-[2px] font-medium"
                                href={`/portfolio/${portfolio.id}`}
                            >
                                learn more
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                initial={{ x: 120 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col xs:flex-row xs:flex-wrap items-center justify-center gap-4 px-2"
            >
                {portfolio.slice(3, 6).map((portfolio: Portfolio) => (
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative group cursor-pointer"
                        key={portfolio.id}
                    >
                        <img
                            className="w-[320px]"
                            src={portfolio.image}
                            alt="Project image"
                        />
                        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center h-full bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <Link
                                className="bg-white py-2 px-9 rounded-full text-black uppercase tracking-[2px] font-medium"
                                href={`/portfolio/${portfolio.id}`}
                            >
                                learn more
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
