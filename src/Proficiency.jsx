function Proficiency() {
    return (
        <div className="flex items-center justify-center max-w-7xl mx-auto min-h-[80vh]">
            <div className="w-1/2 grid gap-y-6">
                <p className="font-light text-5xl">Proficiency</p>
                <div>
                    <p className="text-2xl py-2">Frontend/Design</p>
                    <div className="border-2 h-6 rounded-3xl bg-slate-300 overflow-hidden">
                        <span className="block h-full w-3/4 bg-blue-400"></span>
                    </div>
                </div>
                <div>
                    <p className="text-2xl py-2">Backend</p>
                    <div className="border-2 h-6 rounded-3xl bg-slate-300 overflow-hidden">
                        <span className="block h-full w-1/2 bg-blue-400"></span>
                    </div>
                </div>
                <div>
                    <p className="text-2xl py-2">Programming</p>
                    <div className="border-2 h-6 rounded-3xl bg-slate-300 overflow-hidden">
                        <span className="block h-full w-1/3 bg-blue-400"></span>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src="proficiency.jpg" alt="image" className="w-full h-96" />
            </div>
        </div>
    )
}
export default Proficiency;