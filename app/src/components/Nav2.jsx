import { Link } from "react-router-dom";
const Nav2 = ({myCustomFunction}) => {
    return(
        <div>
            <nav className="2 flex justify-center gap-[15vw] p-2 bg-black opacity-95 border-[0.5px] border-[#ededed] font-normal cursor-pointer text-[#ededed]">
                <Link to={'/'} onClick={()=>{
                    myCustomFunction()
                }} className='hover:scale-110'>Clean Data</Link>
                <div className='divider h-7 w-[0.5px] bg-white'></div>
                <Link to={'/'} className='hover:scale-110'>Raw Data</Link>
                <div className='divider h-7 w-[0.5px] bg-white'></div>
                <Link to={'/'} className='hover:scale-110'>PlayGround</Link>
            </nav>
        </div>
    )
}

export default Nav2;