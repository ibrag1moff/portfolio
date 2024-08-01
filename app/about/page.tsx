"use client";
// next
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="overflow-hidden ">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-9">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center px-2 gap-4"
                >
                    <h1 className="text-5xl font-semibold tracking-[2px] uppercase">
                        About me
                    </h1>
                    <p className="tracking-[1px] font-medium text-center px-1 md:max-w-[600px]">
                        Welcome! I'm Abbas Ibragimov, a seasoned Software
                        Engineer based in Baku, Azerbaijan. Are you seeking a
                        skilled developer to deliver a high-quality website on
                        time and within budget? I specialize in providing
                        top-notch FrontEnd and BackEnd development services for
                        both small businesses and large enterprises.
                        <br /> <br />
                        With extensive experience in HTML, CSS, JavaScript,
                        React, Next.js, and other technologies, I am committed
                        to bringing your vision to life with precision and
                        excellence. Whether you're a startup or an established
                        company, I can help you create a robust and scalable web
                        solution tailored to your needs.
                        <br />
                        <br /> Feel free to reach out to discuss how I can
                        assist you in achieving your goals!
                    </p>
                    <div className="flex flex-col xs:flex-row items-center gap-4">
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
                        <Link
                            className="bg-white lg:hover:bg-[#e5e5e5] transition-all duration-300 rounded-3xl py-3 px-9 text-black font-medium tracking-[1px] uppercase"
                            href="/feedback"
                        >
                            hire me
                        </Link>
                    </div>
                </motion.div>
                <motion.img
                    initial={{ x: 250, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center ml-4 md:w-[500px]"
                    src="/me.png"
                    alt=""
                />
            </div>
        </div>
    );
}
