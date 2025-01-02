const Loader = ()=>{
    return (
        <div className="fixed flex justify-center items-center bg-[#dedde2] z-50 left-0 top-0 w-full h-full">
            <div>
                {"LOADING".split('').map((_,i)=>(
                    <span className="text-5xl font-bold mx-[1px]" key={i}>{_}</span>
                ))}
            </div>
        </div>
    )
}

export default Loader;