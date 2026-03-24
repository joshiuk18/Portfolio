function Education({ theme }) {

    return (
        <div id="education" className="scroll-mt-20 w-full px-4 py-12 md:py-16 bg-white text-black dark:bg-gray-900 dark:text-white" >

            <div className="text-center text-2xl sm:text-3xl font-bold mb-8">
                <p><i className="fa-solid fa-graduation-cap mr-2"></i>Education</p>
            </div>

            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto rounded-3xl bg-white dark:bg-gray-800 overflow-hidden shadow-2xl">

                <div className="w-full md:w-1/2 flex justify-center items-center p-6">
                    <img src={theme === "dark" ? "/collegeblack.jpg" : "/collegewhite.png"} alt="collegepic"
                        className="w-48 sm:w-64 md:w-72 h-auto object-contain" />
                </div>

                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center text-center md:text-left space-y-4">
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-400">
                        Uttarakhand Technical University
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-medium">
                        Doon Institute of Engineering & Technology
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Bachelor of Technology in Computer Science & Engineering
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
                        <i className="fa-solid fa-calendar mr-2"></i>
                        2022 - 2025
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;