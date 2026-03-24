function Educatiion() {
    return (
        <div id="education" className="scroll-mt-20 max-w-full min-h-[80vh] px-4">

            <div className="text-center text-3xl font-bold p-6">
                <p><i className="fa-solid fa-graduation-cap mr-2"></i>Education</p>
            </div>

            <div className="flex flex-col md:flex-row max-w-7xl mx-auto rounded-3xl bg-white overflow-hidden shadow-2xl">

                <div className="w-full md:w-1/3 flex justify-center items-center p-4">
                    <img src="college.png" alt="collegepic" className="w-40 sm:w-52 md:w-full h-auto object-contain" />
                </div>

                <div className="w-full md:w-2/3 p-4 sm:p-6 text-center md:text-left space-y-2">
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-800"> Uttarakhand Technical University</p>
                    <p className="text-base sm:text-lg md:text-2xl font-medium">Doon Institute of Engineering & Technology</p>
                    <p className="text-sm sm:text-base md:text-xl">Bachelor of Technology in Computer Science & Engineering</p>
                    <p className="text-sm sm:text-base md:text-xl text-gray-600">2022 - 2025</p>
                </div>
            </div>
        </div>
    );
}

export default Educatiion;