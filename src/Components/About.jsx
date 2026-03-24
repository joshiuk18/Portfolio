function About({ theme }) {
    return (
        <div id="about" className="scroll-mt-20 w-full min-h-[70vh] px-4 bg-white text-black dark:bg-gray-900 dark:text-white">

            <div className="text-center text-2xl sm:text-3xl font-bold py-6">
                <p><i className="fa-solid fa-user mr-2"></i>About Me</p>
            </div>

            <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-10">

                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={theme === "dark" ? "/aboutblack.jpg" : "/aboutwhite.jpg"} alt="myself"
                        className="w-60 sm:w-72 md:w-80 lg:w-96 h-auto object-contain rounded-xl"
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">

                    <p className="py-3 font-normal text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-300">
                        A passionate Full Stack Software Developer having experience in building web applications.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6 py-5">
                        <div className="flex flex-col items-center">
                            <i className="fa-brands fa-html5 text-3xl sm:text-4xl md:text-5xl hover:scale-125 hover:text-orange-500 transition-transform cursor-pointer"></i>
                            <p className="text-sm sm:text-base mt-1">HTML5</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fa-brands fa-css3-alt text-3xl sm:text-4xl md:text-5xl hover:scale-125 hover:text-blue-500 transition-transform cursor-pointer"></i>
                            <p className="text-sm sm:text-base mt-1">CSS3</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fa-brands fa-js text-3xl sm:text-4xl md:text-5xl hover:scale-125 hover:text-yellow-400 transition-transform cursor-pointer"></i>
                            <p className="text-sm sm:text-base mt-1">JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fa-brands fa-react text-3xl sm:text-4xl md:text-5xl hover:scale-125 hover:text-cyan-400 transition-transform cursor-pointer"></i>
                            <p className="text-sm sm:text-base mt-1">React</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fa-brands fa-node text-3xl sm:text-4xl md:text-5xl hover:scale-125 hover:text-green-500 transition-transform cursor-pointer"></i>
                            <p className="text-sm sm:text-base mt-1">Node.js</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fa-brands fa-npm text-3xl sm:text-4xl md:text-5xl hover:scale-125 hover:text-red-500 transition-transform cursor-pointer"></i>
                            <p className="text-sm sm:text-base mt-1">npm</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="/cv.pdf" target="_blank" className="px-6 py-3 rounded-xl bg-blue-500 text-white 
                        font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center">
                            RESUME <i className="fa-solid fa-angle-right ml-2"></i>
                        </a>

                        <button className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-100 dark:hover:bg-gray-800 transition">
                            CONTACT ME <i className="fa-solid fa-angle-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;