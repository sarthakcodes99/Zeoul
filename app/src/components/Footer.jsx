const Footer = () => {
    return(
        <div>
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

export default Footer;