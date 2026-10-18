const Cleandata = () => {  
    const Data = [{
        id: 1,
        title: "Medical Data", 
        filetype: ".csv",
        para: "Lorem ipsumcing elit. Omnis, aliquid."
    }, 
    {
        id: 2,
        title: "Some Data",
        filetype: ".csv",
        para: "Lorem ipsumcing elit. Omnis, aliquid."
    },
    {
        id:3,
        title: "Dogs Data",
        filetype: ".csv",
        para: "Lorem ipsumcing elit. Omnis, aliquid."
    },
    {
        id:4,
        title: "Cats Data",
        filetype: ".csv",
        para: "Lorem ipsumcing elit. Omnis, aliquid."
    }
] 
    return(
        <div className="min-h-screen w-full bg-black">
           <div id="CARDS" className="cards text-[#ededed] font-normal p-4 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {Data.map((item)=>(
                    <div className="card h-70 w-110 bg-gray-800 text-[#ededed] p-4 font-bold text-[20px] flex gap-40 border-[0.5px] border-[#ededed]" key={item.id}>
                            <div className="head-file-type flex gap-50">
                            <div>
                                {item.title}
                                <div className="font-thin">
                                {item.para}
                                </div>
                                <div className="mt-25 flex items-center justify-center bg-white h-10 w-40 rounded-4xl hover:scale-110">
                                    <button className="text-black text-[17px]">Get Data</button>
                                </div>
                                </div>
                                {item.filetype}
                            </div>
                    </div>
                ))}        
        </div>
    </div>
    )
    
}

export default Cleandata;           