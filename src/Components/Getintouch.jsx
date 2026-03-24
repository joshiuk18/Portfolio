function Getintouch({ theme }) {
    return (
        <div id="contact" className="scroll-mt-20 w-full px-4 py-6 bg-white text-black dark:bg-gray-900 dark:text-white">

            <p className="text-2xl sm:text-3xl font-bold text-center mb-4">
                <i className="fa-solid fa-headset mr-2"></i>Get in <span className="text-blue-700">Touch</span>
            </p>

            <div className="flex flex-col md:flex-row max-w-7xl mx-auto rounded-3xl bg-white dark:bg-gray-800 overflow-hidden shadow-lg">

                <div className="w-full md:w-1/2 flex justify-center items-center p-3">
                    <img src={theme === "dark" ? "/GetinTouchblack.jpg" : "/GetinTouchwhite.jpg"} alt="Get in Touch"
                        className="w-48 sm:w-60 md:w-72 lg:w-80 h-auto object-contain" />
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <form className="grid gap-3">
                        <input type="text" placeholder="Name"
                            className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                        <input type="email" placeholder="Email"
                            className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                        <input type="number" placeholder="Phone"
                            className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                        <textarea rows="3" placeholder="Message"
                            className="w-full border rounded-lg p-2 resize-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        </textarea>
                        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-700 transition">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Getintouch;