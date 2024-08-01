// icons
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRapid, SiThemoviedatabase, SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export type Portfolio = {
    id: number;
    title: string;
    image: string;
    type: string;
    tools: { icons: JSX.Element[] };
    description: string;
    visitLink: string;
    codeLink: string;
};

export const portfolio = [
    {
        id: 1,
        title: "Grill Galaxy",
        image: "/project-1.jpg",
        type: "Food website",
        tools: {
            icons: [
                <FaReact size={20} />,
                <TbBrandNextjs size={20} />,
                <SiTypescript size={20} />,
                <RiTailwindCssFill size={20} />,
            ],
        },
        description:
            "Welcome to GRILL GALAXY, where gastronomic delights meet cutting-edge technology. Our burger haven, crafted with Next.js TypeScript and stylized with Tailwind CSS, offers an interstellar experience. Navigate our menu seamlessly, savoring the fusion of flavors in an aesthetically pleasing digital space. Welcome to a celestial journey of taste at GRILL GALAXY!",
        visitLink: "https://grill-galaxy.vercel.app/",
        codeLink: "https://github.com/ibrag1moff/grillGalaxy",
    },
    {
        id: 2,
        title: "MLAND",
        image: "/project-2.jpg",
        type: "Movie website",
        tools: {
            icons: [
                <FaReact size={20} />,
                <TbBrandNextjs size={20} />,
                <SiTypescript size={20} />,
                <RiTailwindCssFill size={20} />,
                <SiThemoviedatabase size={20} />,
            ],
        },
        description:
            "Explore MOVIELAND, a dynamic film haven crafted with Next.js and powered by THEMOVIEDB. Dive into an ever-expanding universe of cinema, seamlessly navigating an intuitive interface. With personalized watchlists, up-to-date movie data, and a responsive design, MOVIELAND ensures an unparalleled, immersive movie experience for every cinephile.",
        visitLink: "https://movieland-gray.vercel.app/",
        codeLink: "https://github.com/ibrag1moff/movieland",
    },
    {
        id: 3,
        title: "Weather App",
        image: "/project-3.jpg",
        type: "Weather website",
        tools: {
            icons: [
                <FaReact size={20} />,
                <TbBrandNextjs size={20} />,
                <SiTypescript size={20} />,
                <RiTailwindCssFill size={20} />,
                <TbApi size={20} />,
            ],
        },
        description:
            "Stay ahead of the weather with our app! Get real-time updates, detailed forecasts, and personalized alerts for your location. Whether it's rain, shine, or a storm, our user-friendly interface keeps you informed and prepared for any weather condition. Perfect for planning your day or week.",
        visitLink: "https://weather-app-v2-iota.vercel.app/",
        codeLink: "https://github.com/ibrag1moff/weather-app-next",
    },
    {
        id: 4,
        title: "YT Clone",
        image: "/project-4.jpg",
        type: "Entertainment website",
        tools: {
            icons: [
                <FaReact size={20} />,
                <TbBrandNextjs size={20} />,
                <RiTailwindCssFill size={20} />,
                <SiRapid size={20} />,
            ],
        },
        description:
            "Introducing YT CLONE, your go-to video haven designed with React and powered by Rapid API. Immerse yourself in a familiar yet enhanced video-sharing experience. With React's dynamic interface and Rapid API's robust data delivery, YT CLONE offers seamless video exploration, ensuring you stay connected to your favorite content effortlessly. Enjoy the future of online video with YT CLONE!",
        visitLink: "https://youtube-clone-swart-zeta.vercel.app/",
        codeLink: "https://github.com/ibrag1moff/youtube-clone",
    },
    {
        id: 5,
        title: "FATIMA",
        image: "/project-5.jpg",
        type: "Ecommerce website",
        tools: {
            icons: [
                <FaReact size={20} />,
                <TbBrandNextjs size={20} />,
                <SiTypescript size={20} />,
                <RiTailwindCssFill size={20} />,
                <TbApi size={20} />,
            ],
        },
        description:
            "FATIMA revolutionizes shopping with its intuitive eCommerce app. Browse a wide range of products, enjoy effortless navigation, and secure transactions. Get personalized recommendations and exclusive deals tailored to your preferences. Fast delivery and exceptional customer service make FATIMA your ultimate destination for a superior shopping experience.",
        visitLink: "https://fatima-ecommerce-ruby.vercel.app",
        codeLink: "https://github.com/ibrag1moff/ecommerce-next",
    },
    {
        id: 6,
        title: "AutoWheels Inc",
        image: "/project-6.jpg",
        type: "Car website",
        tools: {
            icons: [
                <FaReact size={20} />,
                <TbBrandNextjs size={20} />,
                <SiTypescript size={20} />,
                <RiTailwindCssFill size={20} />,
                <TbApi size={20} />,
            ],
        },
        description:
            "AutoWheels Inc offers a hassle-free car rental experience with a diverse fleet of vehicles to suit every need. Enjoy competitive rates, seamless booking, and excellent customer service. Whether you need a compact car for city driving or an SUV for a road trip, AutoWheels Inc has you covered.",
        visitLink: "https://autowheels.vercel.app/",
        codeLink: "https://github.com/ibrag1moff/autowheels",
    },
];
