function Heading() {
    return (
        <div className="w-full flex space-x-4 px-8 py-4 font-normal border-b-2 sticky top-0 bg-white z-50">
            <span className="text-2xl w-1/5">
                <i class="fa-solid fa-less-than"></i>
                <i className="text-3xl hover:text-blue-600 font-serif cursor-pointer">Prashant Joshi /</i>
                <i class="fa-solid fa-greater-than"></i>
            </span>
            <div className="w-4/5 flex justify-end">
                <ul className="flex space-x-4 list-none m-0 p-0 cursor-pointer">
                    <li className="pl-4 text-2xl hover:text-blue-600">Home</li>
                    <li className="pl-4 text-2xl hover:text-blue-600">About</li>
                    <li className="pl-4 text-2xl hover:text-blue-600">Education</li>
                    <li className="pl-4 text-2xl hover:text-blue-600">Contact Me</li>
                </ul>
            </div>
        </div >
    )
}
export default Heading;