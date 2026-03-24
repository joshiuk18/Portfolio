function Contactme() {
    return (
        <div>
            <div className="flex max-w-7xl mx-auto ">
                <div className="w-1/2 py-16">
                    <p className="text-4xl ">
                        Reach Out to me!
                    </p>
                    <p className="py-4 text-xl font-light text-slate-600" >
                        Thank you for visiting my personal portfolio website.
                        <br />
                        Connect with me over socials.
                        <br />
                        My Inbox is open for all.
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
                <div className="w-1/2 grid p-4">
                    <img src="/pj.jpg" alt="myself" className="w-72 h-72 rounded-full object-cover place-self-end" />
                </div>
            </div>
            <hr />
            <p className="text-center text-xl font-light p-4 text-slate-600">Made with<i className="fa-solid fa-heart"></i>
                Crafted by Prashant
            </p>
        </div>
    )
}
export default Contactme;