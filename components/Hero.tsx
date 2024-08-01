"use client";
// framer motion
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 text-white py-24"
        >
            <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-[120px] h-[120px] object-cover rounded-full border-2"
                src="/profile.jpg"
                alt="Profile Photo"
                loading="lazy"
            />
            <motion.h3
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="tracking-[2px] text-gray-300 font-medium"
            >
                Hi, I'm Abbas
            </motion.h3>
            <motion.h1
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl xs:text-4xl px-1 max-w-[320px] xs:max-w-[370px] text-center mb-4"
            >
                Building digital products, brands, and experience.
            </motion.h1>
            <motion.a
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                href="/CV.pdf"
                download="CV.pdf"
            >
                <button className="bg-white lg:hover:bg-[#e5e5e5] transition-all duration-300 rounded-3xl py-3 px-9 text-black font-medium tracking-[1px] uppercase">
                    Download CV
                </button>
            </motion.a>
        </motion.div>
    );
}
