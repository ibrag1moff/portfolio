"use client";
// framer motion
import { motion } from "framer-motion";

type ServiceCardProps = {
    id: number;
    icon: JSX.Element;
    title: string;
    info: string;
};

export default function ServiceCard({
    id,
    icon,
    title,
    info,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: id * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 items-center justify-center w-[270px] min-h-[340px] xs:w-[320px] border p-4 bg-transparent rounded-xl"
        >
            <span>{icon}</span>
            <h1 className="text-3xl font-semibold uppercase tracking-[2px]">
                {title}
            </h1>
            <p className="text-center font-medium tracking-[2px]">{info}</p>
        </motion.div>
    );
}
