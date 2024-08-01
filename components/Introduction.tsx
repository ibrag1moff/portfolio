"use client";
// framer motion
import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="py-32 px-4"
        >
            <h1 className="text-white font-bold tracking-[1px] text-xl md:max-w-[620px] text-center mx-auto md:text-2xl lg:text-4xl lg:max-w-[85%]">
                Welcome! I'm thrilled to have you here. My name is Abbas, and
                I'm a passionate full-stack developer with a knack for turning
                ideas into reality through code. Within these digital walls,
                you'll find a showcase of my journey, projects, and the skills
                I've honed along the way.
            </h1>
        </motion.div>
    );
}
