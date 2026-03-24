import { useState } from "react";

function Heading({ theme, setTheme }) {

    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    };

    return (
        <div className="w-full sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md dark:ring-1 dark:ring-white/10">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4" >

                <div className="text-lg sm:text-xl md:text-2xl font-serif  whitespace-nowrap">{"< Prashant Joshi />"}</div>

                <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-base lg:text-lg font-medium">
                    <li onClick={() => scrollToSection("home")} className="hover:text-blue-600 cursor-pointer transition">Home</li>
                    <li onClick={() => scrollToSection("about")} className="hover:text-blue-600 cursor-pointer transition">About</li>
                    <li onClick={() => scrollToSection("education")} className="hover:text-blue-600 cursor-pointer transition">Education</li>
                    <li onClick={() => scrollToSection("contact")} className="hover:text-blue-600 cursor-pointer transition">Contact</li>
                    <li>
                        <button onClick={toggleTheme} className="ml-2 px-1 py-1 rounded-md text-sm transition">
                            {theme === "dark" ? (
                                <img src="/sun.png" alt="light mode" className="h-8 w-8" />
                            ) : (
                                <img src="/moon.png" alt="dark mode" className="h-8 w-8" />
                            )}
                        </button>
                    </li>
                </ul>

                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div >

            {open && (
                <div className="md:hidden flex flex-col items-center gap-5 py-5 bg-white dark:bg-gray-900 border-t text-black dark:text-white">

                    <p onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-600">Home</p>
                    <p onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-600">About</p>
                    <p onClick={() => scrollToSection("education")} className="cursor-pointer hover:text-blue-600">Education</p>
                    <p onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-blue-600">Contact</p>

                    <button onClick={toggleTheme} className="px-3 py-1 border rounded-md text-sm">
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>
                </div>
            )}
        </div >
    );
}

export default Heading;