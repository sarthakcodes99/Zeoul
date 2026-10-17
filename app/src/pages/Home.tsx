import { Link } from 'react-router-dom';
const Home = () => {
    return(
<div>
            <nav className="flex justify-center items-center gap-[50%] bg-black h-20 text-white">
                <div className='flex items-center justify-center'>
                <h1 className='text-[30px] text-[#ededed] font-extrabold'>Zeoul.</h1>
                <p className='pt-3 font-sans text-[#ededed]'>Beta</p>
                </div> 
                <div className="right flex gap-4">
                    <Link className='text-[15px] font-normal border-[0.5px] border-gray-500 text-[#ededed] h-10 w-50 rounded-lg bg-gray-900 flex items-center justify-center hover:scale-110' to={"/"}>Our Data Sources</Link>
                    <Link className='text-[15px] font-normal border-[0.5px] border-gray-500 text-[#ededed] h-10 w-30 rounded-lg bg-gray-900 flex items-center justify-center hover:scale-110' to={"/"}>About</Link>
                </div>
            </nav>
            <nav className="2 flex justify-center gap-[15vw] p-2 bg-black opacity-95 border-[0.5px] border-[#ededed] font-normal cursor-pointer text-[#ededed]">
                <Link to={'/'} className='hover:scale-110'>Clean Data</Link>
                <div className='divider h-7 w-[0.5px] bg-white'></div>
                <Link to={'/'} className='hover:scale-110'>Raw Data</Link>
                <div className='divider h-7 w-[0.5px] bg-white'></div>
                <Link to={'/'} className='hover:scale-110'>PlayGround</Link>
            </nav>
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

            <footer>
                <div className='flex justify-center text-4xl font-bold bg-black text-[#ededed] p-4'>
                <h1>Why Choose Us?</h1>
                </div>
                <div className="why-us flex items-center justify-center bg-black p-4 pb-10 font-bold gap-[20%]">
            <div className='flex flex-col items-center gap-6'>
                    <div className='h-20 w-20 bg-white rounded-[50%] text-black font-bold text-[20px] flex justify-center items-center'>1</div>
                    <div className="card1 hover:scale-110 hover:bg-white hover:text-black h-60 w-50 rounded-2xl bg-gray-900 border-[0.5px] border-white text-[#ededed] flex flex-col items-center p-5">
                        <h1 className='text-[17px]'>Reliable Data</h1>
                        <p className='font-light'>The data we provide in the Clean Data section is 100% pre-cleaned and can be used without a second thougth!!!</p>
                 </div>
            </div>
            <div className='flex flex-col items-center gap-6'>
                    <div className='h-20 w-20 bg-white rounded-[50%] text-black font-bold text-[20px] flex justify-center items-center'>2</div>
                    <div className="card2 hover:scale-110 hover:bg-white hover:text-black h-60 w-50 rounded-2xl bg-gray-900 text-[#ededed] flex flex-col items-center border-[0.5px] border-white p-4">
                        <h1 className='text-[17px]'>Open - Sourced</h1>
                        <p className='font-light'>All The data we provide is open - sourced and present on Github! this website is created to make accessing the data easier.</p>

            </div>
             </div>
             <div className='flex flex-col items-center gap-6'>
                    <div className='h-20 w-20 bg-white rounded-[50%] text-black font-bold text-[20px] flex justify-center items-center'>3</div>
                    <div className="card3 hover:scale-110 hover:bg-white hover:text-black h-60 w-50 rounded-2xl bg-gray-900 text-[#ededed] flex flex-col items-center border-[0.5px] border-white p-4">
                        <h1 className='text-[17px]'>Play Ground</h1>
                        <p className='font-light'>We have a proper Play Ground section just for those new Machine Learning </p>
             </div>
            </div>
                </div>
            </footer>
</div>
    )
}

export default Home;