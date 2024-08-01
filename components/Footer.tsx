// icons
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between bg-black border-t border-gray-600 py-3 px-2 xs:p-4 md:px-9 lg:px-12">
            <h1 className="text-md tracking-[2px] font-medium">
                &copy; ibrag1moff 2024
            </h1>
            <a className="bg-white text-black p-1 rounded-full" href="#">
                <FaLongArrowAltUp size={20} />
            </a>
        </footer>
    );
}
