"use client";
// next
import { useParams } from "next/navigation";

// data
import { portfolio } from "@/data/portfolio";

// framer motion
import { motion } from "framer-motion";

export default function PortfolioDetails() {
    const { id } = useParams();
    const project = portfolio.find((item) => item.id == Number(id));
    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center">
                Loading
            </div>
        );
    }

    const { title, image, type, tools, description, visitLink, codeLink } =
        project;
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly py-4 xl:py-20 px-2">
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="mb-4 lg:w-[600px]"
                src={image}
                alt="Project Image"
            />
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 justify-center items-center lg:items-end"
            >
                <h1 className="font-semibold uppercase text-xl tracking-[2px] lg:text-5xl">
                    {title}
                </h1>
                <span className="font-medium tracking-[2px]">- {type}</span>
                <div className="flex items-center gap-1 font-medium tracking-[2px]">
                    <span>Tools used:</span>
                    <div className="flex items-center gap-2">{tools.icons}</div>
                </div>
                <p className="font-medium tracking-[2px] text-center md:max-w-[700px] lg:max-w-[300px] xl:max-w-[400px] lg:text-right">
                    {description}
                </p>
                <div className="flex flex-col xs:flex-row items-center justify-center gap-2 mt-4">
                    <a
                        className="font-medium tracking-[2px] uppercase bg-white rounded-full text-black py-2 px-12 xl:hover:bg-[#e5e5e5] transition-all duration-300"
                        target="__blank"
                        href={visitLink}
                    >
                        Visit
                    </a>
                    <a
                        className="font-medium tracking-[2px] uppercase bg-white rounded-full text-black py-2 px-12 xl:hover:bg-[#e5e5e5] transition-all duration-300"
                        target="__blank"
                        href={codeLink}
                    >
                        view code
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
