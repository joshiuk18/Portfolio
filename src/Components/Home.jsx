function Home({ theme }) {
    return (
        <div id="home" className="flex items-center justify-center min-h-[90vh] px-6 bg-white text-black dark:bg-gray-900 dark:text-white">

            <div className="flex flex-col-reverse md:flex-row max-w-7xl w-full items-center gap-14">

                <div className="w-full md:w-2/3 text-center md:text-left space-y-6">

                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                        <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap"><span>Hi all, 👋</span></div>
                        <div className="mt-2">
                            I'm <span className="text-blue-700 font-bold">Prashant</span>
                        </div>
                    </div>

                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-gray-300">
                        A Passionate &nbsp;
                        <span className="font-semibold text-blue-700">Full Stack Developer</span>
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        I build responsive, modern and scalable web applications using
                        React, Node.js and databases. I love turning ideas into real products.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="/cv.pdf" target="_blank" className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold 
                        hover:bg-blue-700 transition inline-flex items-center justify-center">
                            RESUME<i className="fa-solid fa-angle-right ml-2"></i>
                        </a>

                        <button className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold 
                        hover:bg-blue-100 dark:hover:bg-gray-800 transition">
                            CONTACT ME<i className="fa-solid fa-angle-right ml-2"></i>
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-6 text-2xl md:text-3xl">
                        <i className="fa-brands fa-github hover:scale-150 text-[#181717] dark:text-white cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-linkedin hover:scale-150 text-[#0A66C2] cursor-pointer transition-transform"></i>
                        <i className="fa-solid fa-envelope hover:scale-150 text-[#EA4335] cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-square-instagram hover:scale-150 text-[#E4405F] cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-facebook hover:scale-150 text-[#1877F2] cursor-pointer transition-transform"></i>
                        <i className="fa-brands fa-square-x-twitter hover:scale-150 text-black dark:text-white cursor-pointer transition-transform"></i>
                        <i className="fa-solid fa-phone-volume hover:scale-150 text-[#25D366] cursor-pointer transition-transform"></i>
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 blur-3xl opacity-20 rounded-full"></div>
                        <img src={theme === "dark" ? "/picblack.jpg" : "/picwhite.png"} alt="avatar" className="relative w-52 sm:w-64 md:w-80 lg:w-96 object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;