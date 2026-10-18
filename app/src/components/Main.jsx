import { Link } from "react-router-dom";
const Main = () => {
    return(
        <div>
            <main className='flex items-center justify-center min-h-screen bg-black'>
                <div className="main-text text-[#ededed] font-bold font-sans text-4xl">
                    The Open - Source Platforms For <span className='text-green-500'>Clean Data</span><br />
                    <pre>    Accessible to Anyone For <span className='text-green-600'>Free</span></pre>
                    <p className='text-[15px] text-[#ededed] font-normal indent-40 p-4'>Get Free, Open-Source, Pre-Cleaned Data At Zeoul.</p>
                    <div className='flex justify-center items-center'>
                    <Link to={'/'} className='h-10 w-50 bg-[#ededed] text-gray-900 rounded-3xl text-[15px] flex items-center justify-center hover:scale-110'>Connect</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main;