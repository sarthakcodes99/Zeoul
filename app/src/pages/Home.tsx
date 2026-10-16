import { Link } from 'react-router-dom';
const Home = () => {
    return(
<div>
            <nav className="flex justify-center items-center gap-[50%] bg-black h-20 text-white">
                <h1 className='text-[30px] font-extrabold'>Zeoul</h1>
                <div className="right flex gap-4">
                    <Link className='text-[20px] font-extralight text-amber-700' to={"/"}>Our Data Sources</Link>
                    <Link className='text-[20px] font-extralight text-amber-400' to={"/"}>About</Link>
                </div>
            </nav>
            <nav className="2">
                
            </nav>
</div>
    )
}

export default Home;