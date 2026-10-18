import { Link } from "react-router-dom";
const Navbar = () => {
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
        </div>
    )
}

export default Navbar;