import image from '../../assets/images/سس 1.png';
import './navBar.css'


export default function Nav(){
    return(
        <div className="container w-[1400px] mx-auto mt-[30px] ">

        <div className="nav flex justify-between">
            <div className="logo">

        <img className='w-[205px] h-[47px]' src={image} alt="" />
            </div>
            <div className="ul me-[80px]">
                <ul className='flex gap-[50px] mt-[20px]'>
                    <li><a className='start font-bold	text-[21px] bg-clip-text text-transparent border-b-[3px] border- ' href="#">START</a></li>
                    <li className='font-bold	text-[21px]'><a href="#">FEATURES</a></li>
                    <li className='font-bold	text-[21px]'><a href="#">ABOUT US</a></li>
                    <li className='font-bold	text-[21px]'><a href="#">CONTACT</a></li>
                </ul>

            </div>
            <div></div>
        </div>
        </div>
    )
}