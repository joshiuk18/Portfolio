import Lottie from "lottie-react";
import Support from '../Animation/Support.json';

function Getintouch({ theme }) {
    return (
        <div
            id="contact"
            className="scroll-mt-20 w-full px-4 py-10 bg-gray-100 text-black dark:bg-gray-900 dark:text-white"
        >
            <p className="text-3xl sm:text-4xl font-bold text-center mb-8">
                <i className="fa-solid fa-headset mr-2"></i>
                Get in <span className="text-blue-600">Touch</span>
            </p>

            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto rounded-3xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden">


                <div className="w-full md:w-1/2 flex justify-center items-center p-2">
                    <div className="max-w-xl w-full">
                        <Lottie animationData={Support} />
                    </div>
                </div>


                <div className="w-full md:w-1/2 p-4">
                    <form className="flex flex-col gap-2">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border rounded-xl p-3 bg-white dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded-xl p-3 bg-white dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full border rounded-xl p-3 bg-white dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="w-full border rounded-xl p-3 resize-none bg-white dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Getintouch;