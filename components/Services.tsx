// icons
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

// components
import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {
            id: 1,
            icon: <FaReact size={55} />,
            title: "Frontend",
            info: "The frontend is the user interface of a software application, where design and functionality meet. It's the visible part users interact with, encompassing elements that enhance the overall user experience.",
        },

        {
            id: 2,
            icon: <FaLaptopCode size={55} />,
            title: "FullStack",
            info: "Fullstack development integrates both frontend and backend tasks, combining UI/UX design with server-side logic to ensure complete functionality and enhance user satisfaction.",
        },
        {
            id: 3,
            icon: <FaNodeJs size={55} />,
            title: "Backend",
            info: "The backend is the hidden engine of a software application, managing data, executing logic, and ensuring seamless functionality. It works behind the scenes, supporting the frontend for user interaction.",
        },
    ];
    return (
        <div className="py-24 px-3">
            <div className="flex flex-col xs:flex-row xs:flex-wrap items-center justify-center gap-8">
                {services.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </div>
    );
}
