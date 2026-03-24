function Educatiion() {
    return (
        <div className="max-w-full min-h-[80vh]">
            <div className="text-center text-3xl font-bold p-6">
                <p><i class="fa-solid fa-graduation-cap"></i>Education</p>
            </div>
            <div className='flex max-w-7xl mx-auto rounded-3xl bg-white overflow-hidden shadow-2xl'>
                <div className="w-1/3">
                    <img src="college.png" alt="collegepic" />
                </div>
                <div className="w-2/3 p-6">
                    <p className="text-4xl font-semibold text-blue-800">Uttarakhand Technical University</p>
                    <p className="text-2xl pt-2 font-medium">Doon Institute of Engineering & Technology</p>
                    <p className="text-2xl pt-2">Bachelor of Technology in Computer Science & Engineering</p>
                    <p className="text-2xl pt-2">2022-2025</p>
                </div>
            </div>
        </div>
    )
}
export default Educatiion;