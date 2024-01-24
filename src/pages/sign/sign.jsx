import { BiChevronDown } from "react-icons/bi"; 
import { AiOutlineEye } from "react-icons/ai"; 
import { Form, Link, useLocation } from 'react-router-dom'
import '../sign/sign.css'
import facebook from '../../assets/images/facebook.png'
import linked from '../../assets/images/Linkedin.png'
import gmail from '../../assets/images/Gmail.png'
import signIn from '../../assets/images/signIn.png'
import signup from '../../assets/images/Mask group.png'
import { useEffect, useRef, useState } from "react";



export default function Sign(){

    const [img ,setImg] = useState(signIn)
    const movingImg = useRef()
    const signInForm = useRef()
    const signUpForm = useRef()


    function moveImg() {
        movingImg.current.style.transform = "translateX(680px)"
        movingImg.current.style.transition = "1s"
        signInForm.current.style.opacity = "0"
        signInForm.current.style.transition = "1s"
        signUpForm.current.style.opacity = "1"
        signUpForm.current.style.transition = "1.5s"
        setImg(signup)
    }
    function imgMove2(){
        movingImg.current.style.transform ="translateX(0px)"
        movingImg.current.style.transition ="1s"
        signUpForm.current.style.opacity = "0"
        signUpForm.current.style.transition = "1.5s"
        signInForm.current.style.opacity = "1"
        signInForm.current.style.transition = "1.5s"
        setImg(signIn)
    }



    const currentLocation = useLocation()
    console.log(currentLocation)
    useEffect(()=>{
        if(currentLocation.pathname === "/sign-up") {
            moveImg()
        }else if (currentLocation.pathname === "/sign-in"){
            imgMove2()
        }
    },[currentLocation.pathname])






    return(
        <section>
            <div className="container mx-auto relative">
            <div className="parantSing flex justify-between   ">


                
<div ref={movingImg} className="absolute z-50 w-[800px] h-[850px] top-[20px] left-[20px]  ">
    <img className="w-full h-full rounded-lg" src={img} alt="" />
</div>




<div ref={signUpForm} className="sign-up relative top-[80px] left-[100px] opacity-0 ">
    <div className='text-center'>
        <h2 className="font-[700] text-[35px] bg-clip-text text-transparent ">Welcome to Hi Community</h2>
        <p className='font-[500] text-[25px]'>Register you account</p>
    </div>
    <div className="input text-center">
        <form className='mt-[23px]  ' action="#">
            <div className="input">
                <input required className=' bg-[#f5f5f5] hover:border-[blue] placeholder:duration-300 hover:placeholder:text-[blue] duration-300  border-[2px] mb-3 w border-black py-[15px] ps-[30px] w-[550px] h-[67px]  rounded-[15px] placeholder:text-black placeholder:font-[400]  ' type="text" placeholder='Username' />
            </div>
            <div className="input">
                <input required className='bg-[#f5f5f5] hover:border-[blue] placeholder:duration-300 hover:placeholder:text-[blue] duration-300  border-[2px] mb-3 w border-black py-[15px] ps-[30px] w-[550px] h-[67px] rounded-[15px] placeholder:text-black placeholder:font-[400]  ' type="email" placeholder='Email' />
            </div>
            <div className="input relative">
                <input required className=' bg-[#f5f5f5] hover:border-[blue] placeholder:duration-300 hover:placeholder:text-[blue] duration-300  border-[2px] mb-3 w border-black py-[15px] ps-[30px] w-[550px] h-[67px] rounded-[15px] placeholder:text-black placeholder:font-[400]  ' type="password" placeholder='Password' />
            <div className="icon absolute left-[500px] top-[25px]">

                <AiOutlineEye />
            </div>
            </div>
            <div className="input">
                <input required className='bg-[#f5f5f5] hover:border-[blue] placeholder:duration-300 hover:placeholder:text-[blue] duration-300  border-[2px] mb-3 w border-black py-[15px] w-[550px] h-[67px] rounded-[15px] ps-[30px] placeholder:text-black placeholder:font-[400]  ' type="text" placeholder='Date Of Birth' />
            </div>
            <div className="input relative">
                <input required className='bg-[#f5f5f5] hover:border-[blue] placeholder:duration-300 hover:placeholder:text-[blue] duration-300  border-[2px] mb-5  border-black py-[15px] w-[550px] h-[67px] rounded-[15px] ps-[30px] placeholder:text-black placeholder:font-[400]  ' type="text" placeholder='Type' />
                <div className="icon absolute left-[500px] top-[25px] ">

                <BiChevronDown />
                </div>
            </div>
        <button className="text-white px-[180px] py-[15px] w-[550px] rounded-[18px] bg-gradient-to-r from-[#0157B9] to-[#038AFB]"> Sign Up</button>
        </form>
        <Link onClick={()=>{
            imgMove2()
        }} >
        <p className="text-center"> Already Have an acconnt? <span className="text-[blue]"> sign in</span> </p>
        </Link>

    </div>
    <div className='relative mt-5 '>
        <div className='bg-gradient-to-r from-[#222831] to-[#22283100] w-[280px] h-[1.8px] absolute left-[345px] top-[50%] translate-y-[-50%] '>
        </div>
            <div className='bg-gradient-to-r from-[#22283100] to-[#222831] w-[280px] h-[1.8px] absolute left-[-78px] top-[50%] translate-y-[-50%] '>
            </div>
            <p className="text-center ">or connect with</p>
    </div>
    <div className="imgIcon flex  justify-center items-center gap-14 mt-6 ">
    <div className="after:bg-[#E3E3E3] after:absolute relative after:w-full after:h-full after:inset-0 after:blur-[1px] after:z-[-1] px-[30px] py-[17px] blur-[px]  ">
        <img className="" src={facebook} alt='' />
    </div>
    <div className="after:bg-[#E3E3E3] after:absolute relative after:w-full after:h-full after:inset-0 after:blur-[1px] after:z-[-1] px-[10px] py-[5px] blur-[px]  ">
        <img className="" src={linked} alt='' />
    </div>
    <div className="after:bg-[#E3E3E3] after:absolute relative after:w-full after:h-full after:inset-0 after:blur-[1px] after:z-[-1] px-[10px] py-[5px] blur-[px]  ">
        <img className="" src={gmail} alt='' />
    </div>
        
        
    </div>
</div >




<div ref={signInForm} className="singIn me-28 mb-20 ">

<Link onClick={() => {
    moveImg()
}} >
    <p className="text-end mb-20 mt-10"> Not a member? <span className="text-[blue]"> Register now</span> </p>
</Link>
<div className='text-center'>
        <h2 className="font-[700] mb-3 text-[35px] bg-clip-text text-transparent ">Hello Again!</h2>
        <p className='font-[500] text-[25px]'>Welcome back you've been missed!</p>
    </div>
    <form action="#" className='mt-[23px]' >

            <div className="input mb-5">
                <input required className=' bg-[#f5f5f5] hover:border-[blue] placeholder:duration-300 hover:placeholder:text-[blue] duration-300  border-[2px] mb-3 w border-black py-[15px] ps-[30px] w-[550px] h-[67px]  rounded-[15px] placeholder:text-black placeholder:font-[400]  ' type="text" placeholder='Username' />
            </div>
            <div className="input relative">
                <input required className=' bg-[#f5f5f5] hover:border-[blue] placeholder:duration-300 hover:placeholder:text-[blue] duration-300  border-[2px] mb-3 w border-black py-[15px] ps-[30px] w-[550px] h-[67px] rounded-[15px] placeholder:text-black placeholder:font-[400]  ' type="password" placeholder='Password' />
            </div>
            <button className="text-white px-[180px] mt-[30px] py-[15px] w-[550px] rounded-[18px] bg-gradient-to-r from-[#0157B9] to-[#038AFB]"> Sign In</button>
    </form>
    <p className='font-[400] text-[15px] text-center mt-2'>Recovery Password</p>
    
    <div className='relative mt-16 '>
        <div className='bg-gradient-to-r from-[#222831] to-[#22283100] w-[280px] h-[1.8px] absolute left-[345px] top-[50%] translate-y-[-50%] '>
        </div>
            <div className='bg-gradient-to-r from-[#22283100] to-[#222831] w-[280px] h-[1.8px] absolute left-[-78px] top-[50%] translate-y-[-50%] '>
            </div>
            <p className="text-center ">or connect with</p>
    </div>
    <div className="imgIcon flex  justify-center items-center gap-14 mt-6 ">
    <div className="after:bg-[#E3E3E3] after:absolute relative after:w-full after:h-full after:inset-0 after:blur-[1px] after:z-[-1] px-[30px] py-[17px] blur-[px]  ">
        <img className="" src={facebook} alt='' />
    </div>
    <div className="after:bg-[#E3E3E3] after:absolute relative after:w-full after:h-full after:inset-0 after:blur-[1px] after:z-[-1] px-[10px] py-[5px] blur-[px]  ">
        <img className="" src={linked} alt='' />
    </div>
    <div className="after:bg-[#E3E3E3] after:absolute relative after:w-full after:h-full after:inset-0 after:blur-[1px] after:z-[-1] px-[10px] py-[5px] blur-[px]  ">
        <img className="" src={gmail} alt='' />
    </div>
        
        
    </div>
</div>



</div>
            </div>

        </section>
    )
}