function Getintouch() {
    return (
        <div id="contact" className="scroll-mt-20 w-full px-4 py-6">

            <p className="text-2xl sm:text-3xl font-bold text-center mb-4">
                <i className="fa-solid fa-headset mr-2"></i>
                Get in <span className="text-blue-700">Touch</span>
            </p>

            <div className="flex flex-col md:flex-row max-w-7xl mx-auto rounded-3xl bg-white overflow-hidden shadow-2xl">

                <div className="w-full md:w-1/2 flex justify-center items-center p-3">
                    <img src="/GetinTouch.jpg" alt="Get in Touch" className="w-48 sm:w-60 md:w-72 lg:w-80 h-auto object-contain" />
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <form className="grid gap-3">

                        <input type="text" placeholder="Name" className="w-full border rounded-lg p-2" />
                        <input type="email" placeholder="Email" className="w-full border rounded-lg p-2" />
                        <input type="number" placeholder="Phone" className="w-full border rounded-lg p-2" />
                        <textarea rows="3" placeholder="Message" className="w-full border rounded-lg p-2 resize-none"></textarea>

                        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 transition">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Getintouch;