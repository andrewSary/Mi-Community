import { FaLinkedinIn } from "react-icons/fa"; 
import { FaFacebookF } from "react-icons/fa"; 
import { GrMail } from "react-icons/gr"; 
import { BsDot } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import { HiMail } from "react-icons/hi"; 
import './home.css'
import img1 from '../../assets/images/Image 1.png'
import img2 from '../../assets/images/Image 2.png'
import img3 from '../../assets/images/Image 3.png'
import img4 from '../../assets/images/Image 1.png'
import img5 from '../../assets/images/Image-2.png'
import img6 from '../../assets/images/Image-3.png'
import img7 from '../../assets/images/Image-4.png'
import img8 from '../../assets/images/Image-5.png'
import img9 from '../../assets/images/Image.png'
import { Link } from 'react-router-dom'
import image1 from '../../assets/images/Group 95.png'
import image2 from '../../assets/images/Vector 23.png'
import icon1 from '../../assets/images/Frame.png'
import icon2 from '../../assets/images/ms.png'
import icon3 from '../../assets/images/location.png'
import imag1 from '../../assets/images/Group 90.png'
import imag2 from '../../assets/images/Group 92 (1).png'
import imag3 from '../../assets/images/Group 91 (2).png'
import Home3 from "../home3/home3";
import mask1 from '../../assets/images/1.png'
import mask2 from '../../assets/images/Ellipse 19.png'
import mask3 from '../../assets/images/Mask group (1).png'
import mask4 from '../../assets/images/Mask group (2).png'
import mask5 from '../../assets/images/Mask group (3).png'
import mask6 from '../../assets/images/Ellipse 20.png'
import mask7 from '../../assets/images/Mask group (4).png'
import mask8 from '../../assets/images/Mask group (5).png'
import saly from '../../assets/images/Saly-1.png'
import boxone1 from '../../assets/images/2 (1).png'
import boxone2 from '../../assets/images/Union.png'
import boxone3 from '../../assets/images/Rectangle 74.png'
import boxtwo from '../../assets/images/Frame 2.png'
import boxthree1 from '../../assets/images/Polygon 5.png'
import boxthree2 from '../../assets/images/Vector 34.png'
import boxthree3 from '../../assets/images/Polygon 6.png'
import boxthree4 from '../../assets/images/Polygon 7.png'
import boxthree5 from '../../assets/images/Ellipse 223.png'
import boxthree6 from '../../assets/images/Ellipse 224.png'
import logoend from '../../assets/images/سس 2.png'
import Nav from "../nav/nav";



export default function Home (){
    return(
        <>
        <Nav/>
        <div className="container w-[1400px] m-auto">
            <div className="homeOne flex  justify-between ">
            <div className="textHome1">
                <h1 className=" h1 mt-[100px] font-bold text-[65px] bg-clip-text text-transparent ">Find the right <br />community for you</h1>
                <p className="font-[600] text-[25px] ">Your new social life, <br />We help people connect with the <br />right communities for them</p>
                <div className="sing flex gap-3 mt-8">
                    <Link to="/sign-in" className='font-[700] text-[25px] bg-gradient-to-r from-[#0156B9] to-[#028AFB] py-2 px-[70px] rounded-[15px] text-[white]'>sign in</Link>
                    <Link to="/sign-up" className=' singup font-[700] text-[25px] border-[2px] border-[blue] rounded-[15px] py-2 px-[70px] bg-clip-text text-transparent'>sign up</Link>
                </div>
                    <div className="icons flex gap-[25px] text-[40px] ms-14 mt-14">
                        <HiMail />
                        <CgFacebook />
                        <AiOutlineInstagram />
                        <AiOutlineTwitter />
                        <FaLinkedinIn />
                    </div>
                    
                    
            </div>
            <div className="images flex overflow-hidden mt-[50px] ms-[60px] h-[500px]">
                <div className="images1">
                    <img className='w-[180px]' src={img1} alt="" />
                    <img className='w-[180px]' src={img2} alt="" />
                    <img className='w-[180px]' src={img8} alt="" />
                    <img className='w-[180px]' src={img3} alt="" />
                    <img className='w-[180px]' src={img7} alt="" />
                    <img className='w-[180px]' src={img5} alt="" />
                    <img className='w-[180px]' src={img4} alt="" />
                    <img className='w-[180px]' src={img9} alt="" />
                    <img className='w-[180px]' src={img6} alt="" />
                </div>
                <div className="images2 ">
                
                <img className='w-[180px]' src={img1} alt="" />
                    <img className='w-[180px]' src={img9} alt="" />
                    <img className='w-[180px]' src={img3} alt="" />
                    <img className='w-[180px]' src={img2} alt="" />
                    <img className='w-[180px]' src={img5} alt="" />
                    <img className='w-[180px]' src={img6} alt="" />
                    <img className='w-[180px]' src={img4} alt="" />
                    <img className='w-[180px]' src={img8} alt="" />
                    <img className='w-[180px]' src={img7} alt="" />
                </div>
                <div className="images1">
                <img className='w-[180px]' src={img1} alt="" />
                    <img className='w-[180px]' src={img2} alt="" />
                    <img className='w-[180px]' src={img5} alt="" />
                    <img className='w-[180px]' src={img3} alt="" />
                    <img className='w-[180px]' src={img8} alt="" />
                    <img className='w-[180px]' src={img6} alt="" />
                    <img className='w-[180px]' src={img4} alt="" />
                    <img className='w-[180px]' src={img7} alt="" />
                    <img className='w-[180px]' src={img9} alt="" />
                </div>
            </div>
            </div>
            <div className="arrow mt-[100px]">
                    <img className=" absolute left-[50%] translate-x-[-104%] top-[-50%] translate-y-[330%] " src={image2} alt="" />
                    <BsDot className=" absolute left-[165px] top-[690px] text-[100px]  " />
                    <img className=" mx-auto " src={image1} alt="" />
               </div>
               <div className="homeTwo mt-[400px]">
                <div className="textHome2 text-center">
                    <h2 className="bg-clip-text text-transparent font-bold text-[65px]">Core Features</h2>
                    <p className="font-[600] text-[25px] mt-[20px]">You will learn the problems that Subsocial Network is trying to <br />solve, a description of existing features</p>
                </div>
                <div className="boxs text-white flex items-center justify-center gap-[80px] mt-[30px] ">
                    <div className="box h-[320px]  pt-5 bg-gradient-to-r from-[#0156B9] to-[#028AFB]  w-[340px] text-center p-3 rounded-[57px]">
                        <img className=" mx-auto" src={icon1} alt="" />
                        <h3 className="my-[5px] font-[700] text-[25px]">community</h3>
                        <p className="font-[400] text-[18px] ">community is one of the factors affecting mental health without social relations the human collapses physically and morally.</p>
                    </div>
                    <div className="box  h-[320px] pt-5  bg-gradient-to-l from-[#374153] to-[#151C26] w-[340px]  text-center p-3 rounded-[57px]">
                        <img className=" mx-auto" src={icon2} alt="" />
                        <h3 className="my-[5px] font-[700] text-[25px]">messages</h3>
                        <p className="font-[400] text-[18px] ">A way to get to know each other and make new friends to sharedaily life.</p>
                    </div>
                    <div className="box  h-[320px] pt-5  bg-gradient-to-l from-[#374153] to-[#151C26] w-[340px]  text-center p-3 rounded-[57px]">
                        <img className="h-[135px] object-cover mx-auto" src={icon3} alt="" />
                        <h3 className="my-[5px] font-[700] text-[25px]">Places</h3>
                        <p className="font-[400] text-[18px] ">to facilitate access to mmany people and be opennes to new ideasand help to present thought.</p>
                    </div>
                    
                    
                </div>
                <div className="textEnd text-center mt-[200px]">

                <h2 className="bg-clip-text text-transparent font-bold text-[50px]">About us</h2>
                    <p className="font-[600] text-[25px] mt-[20px]">It is a social network to allow people to communicate. <br /> Post updates and respond to others' posts.</p>
                </div>
               </div>
               <div className="home3">
               <Home3  imag={imag1} desc={`You can easily communicate with your team in different ways, You can create manage and edit whatever you want within the community.`} h2={`An easy and effortless way to  connect with your community`}/>
                <div className="section1 flex mt-[200px] items-center gap-[30px] justify-between">
                    <div className="textsection">

                    <h2 className="bg-clip-text text-transparent font-[500] text-[40px]">An easy and effortless way to <br />connect with your community</h2>
                    <p className="font-[600] text-[25px] mt-[20px]">You can easily communicate with your team in <br /> different ways,You can create manage and edit <br /> whatever you want within the community.</p>
                    </div>
                    <img className="w-[580px]" src={imag3} alt="" />
                </div>
                <Home3  imag={imag2} h2={`Are you ready to find the right  community for you`} desc={'Search in any field you are interested in, by searching on the search page you can  discover a lot of communities suitable for you'}/>
               </div>
               <div className="home4 relative">
                <img className="absolute w-[190px] h-[190px] top-[-200px] left-[200px]" src={mask1} alt="" />
                <img className="absolute w-[100px] h-[100px] top-[-50px] left-[30px]" src={mask2} alt="" />
                <img className="absolute w-[190px] h-[190px] top-[150px] left-[80px]" src={mask3} alt="" />
                <img className="absolute w-[190px] h-[190px] top-[280px] left-[300px]" src={mask4} alt="" />
                <img className="absolute w-[190px] h-[190px] top-[200px] right-[290px]" src={mask5} alt="" />
                <img className="absolute w-[100px] h-[100px] top-[130px] right-[150px]" src={mask6} alt="" />
                <img className="absolute w-[190px] h-[190px] top-[-250px] right-[290px]" src={mask8} alt="" />
                <img className="absolute w-[190px] h-[190px] top-[-100px] right-[90px]" src={mask7} alt="" />
                <div className="textHome4 mx-auto mt-72  w-fit text-center">
                    <p className="font-[600] text-[35px]">Whatever community you're about to create, <br />we've have solutions for you. Start Socialize today.</p>
                    <a className=" text-white mx-auto px-[50px] py-[10px] block w-fit rounded-[35px] mt-[20px] bg-gradient-to-r from-[#0053B5] to-[#028DFF]" href="#">create now</a>
                </div>
               </div>
               <div className="home5 flex items-center mt-[100px]">
                <img className="w-[43%] mt-[300px]" src={saly} alt="" />
                <div className="textHome5 text-center mt-[250px]">
                    <h2 className="bg-clip-text text-transparent font-[700] text-[50px]">Find the right community for you</h2>
                    <p className="font-[600] text-[35px]">Facilitating access to many people <br />all places and meeting friends</p>
                    <div className="Rectangles w-[65%] relative ms-36">
                        <div className="Rectangle bg-[#131A24] py-[15px] pe-[15px] ps-[100px] mt-[50px] rounded-[100px]">
                            <h3 className="font-[600] text-[25px] text-white ">Easy and distinctive home page</h3>
                            <img  className="absolute top-[6px] left-[10px] w-[60px]"   src={boxone1} alt="" />
                            <img  className="absolute top-[7px] left-[18px] w-[55px]" src={boxone2} alt="" />
                            <img className="absolute top-[40px] left-[40px] w-[15px]"  src={boxone3} alt="" />
                        </div>
                        <div className="Rectangle bg-[#131A24] py-[15px] pe-[15px] ps-[100px] mt-[50px] rounded-[100px]">
                            <h3 className="font-[600] text-[25px] text-white ">Find the best places on the map</h3>
                            <img  className="absolute top-[120px] left-[15px] w-[50px]"   src={boxtwo} alt="" />
                           
                        </div>
                        <div className="Rectangle bg-[#131A24] py-[15px] pe-[15px] ps-[100px] mt-[50px] rounded-[100px]">
                            <h3 className="font-[600] text-[25px] text-white ">The best social life experience</h3>
                            <img  className="absolute bottom-[6px] left-[14px] w-[50px]"   src={boxthree1} alt="" />
                            <img  className="absolute bottom-[30px] left-[48px] w-[22px]" src={boxthree2} alt="" />
                            <img className="absolute bottom-[45px] left-[35px] w-[14px]"  src={boxthree3} alt="" />
                            <img className="absolute bottom-[30px] left-[70px] w-[14px]"  src={boxthree4} alt="" />
                            <img className="absolute bottom-[25px] left-[50px] w-[13px]"  src={boxthree5} alt="" />
                            <img className="absolute bottom-[47px] left-[70px] w-[13px]"  src={boxthree6} alt="" />
                        </div>
                    </div>
                </div>
               </div>
        </div>
               <section className="home6 mt-[70px] flex items-center justify-between relative after:absolute after:bg-[#0053B5] after:w-[600px] after:h-[850px] after:top-[-80px] after:right-0 after:z-[-1] before:absolute before:bg-[#0053B5] before:w-[77px] before:h-[77px] before:top-[-30px] before:right-[760px] ">
                <div className="textHome6 ms-10 ">
                    <img className="mb-20" src={logoend} alt="" />
                    <h2 className="font-[600] text-[55px] after:rounded-md   relative  after:absolute after:w-[32%] after:bg-black  after:h-[4px]   after:bottom-0 after:left-0  pb-[14px] " >Contact Us</h2>
                    <p className="font-[500] text-[25px] mt-[30px]">Feel free yo contact us any time , we will get  <br /> back to you as soon as we can!</p>
                    <form action="#" className="mt-10">
                        <div>
                            <input className="border-b-4 outline-none border-[#393E46] pb-3 w-[500px] placeholder:text-[20px] placeholder:font-[700] placeholder:text-[#393E46] " type="text" placeholder="Name"/>
                        </div>
                        <div>
                            <input className="border-b-4 my-10 outline-none  border-[#393E46] pb-3 w-[500px] placeholder:text-[20px] placeholder:font-[700] placeholder:text-[#393E46] " type="text" placeholder="Email"/>
                        </div>
                        <div>
                            <input className="border-b-4 outline-none border-[#393E46] pb-3 w-[500px] placeholder:text-[20px] placeholder:font-[700] placeholder:text-[#393E46] " type="text" placeholder="Message"/>
                        </div>
                        <Link className="tracking-[12px] text-[18px] text-white font-[700] mt-[30px] block bg-gradient-to-r from-[#0053B5] to-[#028DFE] w-fit py-[15px] px-[180px] rounded-[14px] ">S E N D</Link>
                    </form>
                    </div>
                    <div className="mdia bg-[#131A24] text-white ps-20 pt-20 pb-10 w-[800px] "> 
                        <h2 className="font-[600] text-[30px] mb-5 text-white ">Info</h2>
                        <div className="icons text-[35px] ">
                            <div className="flex items-center gap-10 mb-10 " >
                                <GrMail />
                                <p className="text-[30px] ">hicommunity@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-10 mb-10 " >
                                <FaFacebookF />
                                <p className="text-[30px] ">hicommunity@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-10 mb-10 " >
                                <AiOutlineInstagram />
                                <p className="text-[30px] ">hicommunity@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-10 mb-10 " >
                                <AiOutlineTwitter />
                                <p className="text-[30px] ">hicommunity@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-10 mb-10 " >
                                <FaLinkedinIn />
                                <p className="text-[30px] ">hicommunity@gmail.com</p>
                            </div>

                        </div>
                    
                    </div>
               </section>
    </>
    )
}