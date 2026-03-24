function About() {
    return (
        <div className="max-w-full min-h-[70vh]">
            <div className="text-center text-3xl font-bold p-6">
                <p><i class="fa-solid fa-user"></i>About Me</p>
            </div>
            <div className="flex max-w-7xl mx-auto">
                <div className="w-1/2">
                    <img src="/about.jpg" alt="myself" className="w-96 h-96" />
                </div>
                <div className="w-1/2 text-left ml-16">
                    <p className="py-3 font-normal text-2xl text-slate-500">
                        A passionate Full Stack Software Developer having an experience of building Web applications.
                    </p>
                    <div className="flex py-5 text-gray-700">
                        <ul className="flex space-x-6 list-none m-0 p-0 cursor-pointer">
                            <li>
                                <i className="fa-brands fa-html5 transition-transform text-5xl transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                                <p className="text-center">html5</p>
                            </li>
                            <li>
                                <i className="fa-brands fa-css3-alt transition-transform text-5xl transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                                <p className="text-center">css3</p>
                            </li>
                            <li>
                                <i className="fa-brands fa-js transition-transform text-5xl transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                                <p className="text-center">javascript</p>
                            </li>
                            <li>
                                <i className="fa-brands fa-react transition-transform text-5xl transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                                <p className="text-center">react</p>
                            </li>
                            <li>
                                <i className="fa-brands fa-node transition-transform text-5xl transform hover:scale-150 hover:text-blue-700 cursor-pointer"></i>
                                <p className="text-center">nodejs</p>
                            </li>
                            <li>
                                <i className="fa-brands fa-npm transition-transform text-5xl transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                                <p className="text-center">npm</p>
                            </li>
                            <li>
                                <i className="fa-solid fa-database transition-transform text-5xl transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                                <p className="text-center">sql</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-6">
                        <span className="text-xl p-2 rounded-xl cursor-pointer bg-blue-400 text-center text-white font-semibold">
                            CONTACT ME
                            <i className="fa-solid fa-angle-right"></i>
                        </span>
                        <span className="text-xl p-2 rounded-xl cursor-pointer bg-blue-400 text-center text-white font-semibold">
                            RESUME
                            <i className="fa-solid fa-angle-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About;