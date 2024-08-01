"use client";
// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// icons
import { SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";
import {
    MdLanguage,
    MdOutlineDesignServices,
    MdDesignServices,
} from "react-icons/md";
import {
    FaHtml5,
    FaReact,
    FaSass,
    FaGithub,
    FaNodeJs,
    FaGulp,
} from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";

// framer motion
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 justify-center py-24"
        >
            <Tabs>
                <TabList className="flex flex-col xs:flex-row justify-center items-center gap-1 mb-8 xs:mb-3">
                    <Tab className="flex items-center justify-center gap-1 py-2 px-3 outline-none font-medium border">
                        <SiTypescript size={15} />
                        Software
                    </Tab>
                    <Tab className="flex items-center justify-center gap-1 py-2 px-3 outline-none font-medium border">
                        <MdOutlineDesignServices size={15} />
                        Services
                    </Tab>
                    <Tab className="flex items-center justify-center gap-1 py-2 px-3 outline-none font-medium border">
                        <MdLanguage size={15} />
                        Languages
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="flex flex-col xs:flex-row xs:flex-wrap justify-center px-2 items-center gap-3 mb-3">
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaHtml5 />
                            html
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaCss3 />
                            css
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <SiJavascript />
                            javascript
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <SiTypescript />
                            typescript
                        </h2>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:flex-wrap justify-center px-2 items-center gap-3 mb-3">
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaReact />
                            react
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <RiNextjsFill />
                            next.js
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <RiTailwindCssFill />
                            tailwind
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaSass />
                            SCSS
                        </h2>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:flex-wrap justify-center px-2 items-center gap-3">
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaGithub />
                            github
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaNodeJs />
                            express
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <SiMongodb />
                            mongodb
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaGulp />
                            gulp
                        </h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex  flex-col xs:flex-row xs:flex-wrap justify-center px-2 items-center gap-3 mb-3">
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaReact />
                            frontend
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <FaNodeJs />
                            backend
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <MdDesignServices />
                            ux/ui design
                        </h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex  flex-col xs:flex-row xs:flex-wrap justify-center px-2 items-center gap-3 mb-3">
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <IoLanguage />
                            english
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <IoLanguage />
                            russian
                        </h2>
                        <h2 className="flex items-center w-max px-2 py-1 rounded-sm gap-1 font-medium text-lg uppercase tracking-[2px] border">
                            <IoLanguage />
                            azerbaijani
                        </h2>
                    </div>
                </TabPanel>
            </Tabs>
        </motion.div>
    );
}
