const Template = ({data}: any) => {
    return(
        <div className="p-4 m-4 flex flex-col gap-4 border-[0.5px] border-white max-w-225 bg-black text-white">
            <div className="text-[20px] font-sans text-[#ededed]">
           <p>{data.explanation}</p>
            </div>
            <div><h1 className="text-[20px] font-bold font-noraml text-[#ededed]">Your Data -</h1></div>
           <div className="data border-[0.5px] border-white p-4">
            <h1>{data.livedata}</h1>
           </div>
           <div className="border-[0.5px] border-white p-4">
           <code className="text-blue-500">{data.code}</code>
           </div>
        </div>
    )
}

export default Template;