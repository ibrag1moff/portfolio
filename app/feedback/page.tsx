"use client";
// react
import { FormEvent, useEffect, useState, useRef } from "react";

// framer motion
import { motion } from "framer-motion";

// emailjs
import emailjs from "@emailjs/browser";

export default function Feedback() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [services, setServices] = useState<string>("");
    const [budget, setBudget] = useState<string>("");
    const [inform, setInform] = useState<string>("");

    const form = useRef<any>();

    const [alert, setAlert] = useState<string>("");

    const sendMsg = (e: FormEvent) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    setAlert("Your message has been successfully sent!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setAlert("Something went wrong! Try again later");
                }
            );
    };

    useEffect(() => {
        if (alert) {
            setName("");
            setEmail("");
            setServices("");
            setBudget("");
            setInform("");
            const timer = setTimeout(() => setAlert(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <>
            {alert && (
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/80 flex justify-center items-center">
                    <div className="text-white p-4">{alert}</div>
                </div>
            )}
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onSubmit={sendMsg}
                ref={form}
                className="flex flex-col gap-4 px-4 py-6 lg:w-[800px] lg:mx-auto"
            >
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                >
                    <label className="font-medium" htmlFor="name">
                        Name *
                    </label>
                    <input
                        className="border-b bg-transparent outline-none py-2 tracking-[1px]"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        name="user_name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                >
                    <label className="font-medium" htmlFor="email">
                        Email *
                    </label>
                    <input
                        className="border-b bg-transparent outline-none py-2 tracking-[1px]"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        name="user_email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                >
                    <label className="font-medium" htmlFor="services">
                        Services
                    </label>
                    <input
                        className="border-b bg-transparent outline-none py-2 tracking-[1px]"
                        type="text"
                        id="services"
                        placeholder="Which service can I help you with?"
                        value={services}
                        name="user_services"
                        onChange={(e) => setServices(e.target.value)}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                >
                    <label className="font-medium" htmlFor="budget">
                        Budget
                    </label>
                    <input
                        className="border-b bg-transparent outline-none py-2 tracking-[1px]"
                        type="text"
                        id="budget"
                        placeholder="What is your project budget?"
                        value={budget}
                        name="user_budget"
                        onChange={(e) => setBudget(e.target.value)}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                >
                    <label className="font-medium" htmlFor="information">
                        Information *
                    </label>
                    <textarea
                        className="border-b bg-transparent outline-none py-2 tracking-[1px] resize-none"
                        id="information"
                        rows={3}
                        placeholder="Please describe your project"
                        value={inform}
                        name="message"
                        onChange={(e) => setInform(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white py-3 text-black uppercase font-semibold tracking-[2px]"
                    type="submit"
                >
                    send
                </motion.button>
            </motion.form>
        </>
    );
}
