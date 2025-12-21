function Home() {
    return (
        <div className="flex items-center justify-center min-h-[90vh]">
            <div className="flex max-w-7xl w-full items-center">
                <div className="w-2/3">
                    <p className="text-6xl font-semibold text-blue-700 leading-tight mb-2">
                        Hi all,
                        <br />
                        I'm Prashant
                        <i className="fa-solid fa-hand"></i>
                    </p>
                    <p className="text-3xl text-slate-500">
                        A Full Stack Developer
                    </p>
                    <span className="flex space-x-6 pt-8 text-3xl text-gray-700">
                        <i className="fa-brands fa-github transition-transform transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                        <i className="fa-brands fa-linkedin transition-transform transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                        <i className="fa-solid fa-envelope transition-transform transform hover:scale-150 hover:text-blue-600 cursor-pointer"></i>
                        <i className="fa-brands fa-square-instagram transition-transform transform hover:scale-150 hover:text-rose-600 cursor-pointer"></i>
                        <i className="fa-brands fa-facebook transition-transform transform hover:scale-150 hover:text-blue-700 cursor-pointer"></i>
                        <i className="fa-brands fa-square-x-twitter transition-transform transform hover:scale-150 hover:text-blue-400 cursor-pointer"></i>
                        <i className="fa-solid fa-phone-volume transition-transform transform hover:scale-150 hover:text-green-500 cursor-pointer"></i>
                    </span>
                </div>
                <div className="w-1/3">
                    <img src="/pic.png" alt="avtar" className="w-96 h-96" />
                </div>
            </div>
        </div>
    )
}
export default Home;