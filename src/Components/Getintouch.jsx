function Getintouch() {
    return (
        <div className="max-w-full min-h-[70vh]">
            <p className="p-4 text-3xl font-bold text-center"><i className="fa-solid fa-headset"></i>
                Get in <span className="text-blue-700">Touch</span>
            </p>
            <div className='flex max-w-7xl mx-auto rounded-3xl bg-white overflow-hidden shadow-2xl'>
                <div className="w-1/2 flex bg-white items-center justify-center">
                    <img src="/GetinTouch.jpg" alt="Get in Touch" className="w-96 h-96" />
                </div>
                <div className="w-1/2 bg-white p-6">
                    <form className="grid gap-4">
                        <div className="relative">
                            <i className="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                className="w-full border border-black rounded-lg pl-10 p-2"
                            />
                        </div>
                        <div className="relative">
                            <i className="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full border border-black rounded-lg pl-10 p-2"
                            />
                        </div>
                        <div className="relative">
                            <i className="fa-solid fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input
                                type="tel"
                                placeholder="Phone"
                                required
                                className="w-full border border-black rounded-lg pl-10 p-2"
                            />
                        </div>
                        <div className="relative">
                            <i className="fa-solid fa-comment-dots absolute left-3 top-3 text-gray-500"></i>
                            <textarea
                                placeholder="Type your message..."
                                required
                                rows="4"
                                className="w-full border border-black rounded-lg pl-10 p-2 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-400 text-white font-semibold py-2 rounded-xl hover:bg-blue-500 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Getintouch;