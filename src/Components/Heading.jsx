import { useState } from "react";

function Heading() {

    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <div className="w-full sticky top-0 z-50 bg-white shadow-sm border-b">

            <div className="flex justify-between items-center px-4 md:px-6 py-4">

                <span className="text-lg sm:text-xl md:text-2xl font-serif cursor-pointer text-blue-700">{"< Prashant Joshi />"}</span>
                <ul className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg font-medium">
                    <li onClick={() => scrollToSection("home")} className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li onClick={() => scrollToSection("about")} className="hover:text-blue-600 cursor-pointer">About</li>
                    <li onClick={() => scrollToSection("education")} className="hover:text-blue-600 cursor-pointer">Education</li>
                    <li onClick={() => scrollToSection("contact")} className="hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>
                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            {open && (
                <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white border-t">
                    <p onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-600">Home</p>
                    <p onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-600">About</p>
                    <p onClick={() => scrollToSection("education")} className="cursor-pointer hover:text-blue-600">Education</p>
                    <p onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-blue-600">Contact</p>
                </div>
            )}

        </div>
    );
}

export default Heading;