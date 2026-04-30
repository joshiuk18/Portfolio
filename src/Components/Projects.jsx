function Projects() {
    return (
        <div className="w-full px-4 py-16 bg-gray-100 text-black dark:bg-gray-900 dark:text-white">

            <h1 className="text-center text-3xl font-bold mb-12">
                <i className="fa-solid fa-laptop-code"></i> Projects
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                    <img src="/planet.jpg" className="w-full h-48 object-cover" />
                    <div className="p-5 space-y-3">
                        <h2 className="text-xl font-semibold">Planet-AI Chatbot</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Developed a modern AI-powered chat application inspired by ChatGPT
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="text-blue-600 pr-2 py-1 rounded">#React</span>
                            <span className="text-green-600 px-2 py-1 rounded">#Tailwind</span>
                            <span className="text-pink-600 px-2 py-1 rounded">#Javascript</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <a href="https://myaiplanet.vercel.app/" target="_blank"
                                className="text-slate-300 text-base font-medium text-center py-2 rounded-xl bg-gray-700 hover:bg-gray-600">
                                View &nbsp; <i className="fa-solid fa-eye"></i>
                            </a>
                            <a href="https://github.com/joshiuk18/PLANET.git" target="_blank"
                                className="text-slate-300 text-base font-medium text-center py-2 rounded-xl bg-gray-700 hover:bg-gray-600">
                                Code &nbsp; <i className="fa-solid fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                    <img src="/weather.jpg" className="w-full h-48 object-cover" />
                    <div className="p-5 space-y-3">
                        <h2 className="text-xl font-semibold">Weather Forecast App</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Developed a responsive weather application to display real-time weather data based on city search
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="text-blue-600 pr-2 py-1 rounded">#React</span>
                            <span className="text-green-600 px-2 py-1 rounded">#Tailwind</span>
                            <span className="text-pink-600 px-2 py-1 rounded">#Javascript</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <a href="https://myskyapp.vercel.app/" target="_blank"
                                className="text-slate-300 text-base font-medium text-center py-2 rounded-xl bg-gray-700 hover:bg-gray-600">
                                View &nbsp; <i className="fa-solid fa-eye"></i>
                            </a>
                            <a href="https://github.com/joshiuk18/WeatherApp.git" target="_blank"
                                className="text-slate-300 text-base font-medium text-center py-2 rounded-xl bg-gray-700 hover:bg-gray-600">
                                Code &nbsp; <i className="fa-solid fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                    <img src="/flipkart.jpg" className="w-full h-48 object-cover" />
                    <div className="p-5 space-y-3">
                        <h2 className="text-xl font-semibold">Flipkart E-commerce Landing Page</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Developed a single-page e-commerce UI inspired by Flipkart
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="text-blue-600 pr-2 py-1 rounded">#React</span>
                            <span className="text-green-600 px-2 py-1 rounded">#Tailwind</span>
                            <span className="text-pink-600 px-2 py-1 rounded">#Javascript</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <a href="https://flipzonestore.netlify.app/" target="_blank"
                                className="text-slate-300 text-base font-medium text-center py-2 rounded-xl bg-gray-700 hover:bg-gray-600">
                                View &nbsp; <i className="fa-solid fa-eye"></i>
                            </a>
                            <a href="https://github.com/joshiuk18/Flipkart.git" target="_blank"
                                className="text-slate-300 text-base font-medium text-center py-2 rounded-xl bg-gray-700 hover:bg-gray-600">
                                Code &nbsp; <i className="fa-solid fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;