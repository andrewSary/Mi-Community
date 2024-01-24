import imag1 from '../../assets/images/Group 90.png'
import imag2 from '../../assets/images/Group 92 (1).png'

export default function Home3({imag , h2 , desc}){
    return(
        <div className="section1 flex justify-between mt-[200px] items-center gap-[30px]">
        <img className='w-[550px]' src={imag} alt="" />
        <div className="textsection">
        <h2 className="bg-clip-text text-transparent font-[500] text-[40px]">An easy and effortless way to <br />connect with your community</h2>
        <p className="font-[600] text-[25px] mt-[20px]">{desc}</p>
        </div>
    </div>


    )
}