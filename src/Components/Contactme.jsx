function Contactme() {
    return (
        <div className="w-full px-4 bg-gray-100 text-black dark:bg-gray-900 dark:text-white">

            <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-10 py-10">

                <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Reach Out to me!</p>
                    <p className="py-4 text-base sm:text-lg md:text-xl font-light text-slate-600 dark:text-gray-300">
                        Thank you for visiting my personal portfolio website.
                        <br />
                        Connect with me over socials.
                        <br />
                        My inbox is open for all.
                    </p>
                    <span className="flex flex-wrap justify-center md:justify-start gap-6 pt-6 text-xl sm:text-2xl md:text-3xl">
                        <i className="fa-brands fa-github hover:scale-150 text-[#181717] dark:text-white cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-linkedin hover:scale-150 text-[#0A66C2] cursor-pointer transition-transform"></i>
                        <i className="fa-solid fa-envelope hover:scale-150 text-[#EA4335] cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-square-instagram hover:scale-150 text-[#E4405F] cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-facebook hover:scale-150 text-[#1877F2] cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-square-x-twitter hover:scale-150 text-black dark:text-white cursor-pointer transition-transform"></i>
                        <i className="fa-solid fa-phone-volume hover:scale-150 text-[#25D366] cursor-pointer transition-transform"></i>
                    </span>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-blue-100 dark:border-gray-700">
                        <img src="/pj.jpg" alt="myself" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <hr className="max-w-7xl mx-auto border-gray-300 dark:border-gray-700" />
            <p className="text-center text-sm sm:text-base md:text-lg font-light py-4 text-slate-600 dark:text-gray-400">
                Made with
                <i className="fa-solid fa-heart text-red-500 mx-2 transform transition-transform duration-300 hover:scale-125"></i>
                Crafted by Prashant
            </p>
        </div>
    );
}

export default Contactme;