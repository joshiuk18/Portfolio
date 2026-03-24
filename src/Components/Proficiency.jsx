function Proficiency() {
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center px-4">

            <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full">

                <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
                    <p className="font-light text-3xl sm:text-4xl md:text-5xl text-center md:text-left">Proficiency</p>
                    <div>
                        <p className="text-lg sm:text-xl md:text-2xl py-2 font-medium">Frontend / Desig</p>
                        <div className="h-4 sm:h-5 md:h-6 rounded-full bg-gray-200 overflow-hidden">
                            <div className="h-full w-[75%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl md:text-2xl py-2 font-medium">Backend</p>
                        <div className="h-4 sm:h-5 md:h-6 rounded-full bg-gray-200 overflow-hidden">
                            <div className="h-full w-[50%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl md:text-2xl py-2 font-medium">Programming</p>
                        <div className="h-4 sm:h-5 md:h-6 rounded-full bg-gray-200 overflow-hidden">
                            <div className="h-full w-[35%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                    <img src="proficiency.jpg" alt="proficiency" className="w-64 sm:w-72 md:w-80 lg:w-[450px] h-auto object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Proficiency;