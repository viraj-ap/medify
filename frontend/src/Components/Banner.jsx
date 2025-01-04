import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className='text-white font-poppins rounded-3xl bg-primary flex rounded-g px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 mt-64'>
            {/* left side */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-3xl'>
                    <p>Book appointment</p>
                    <p className='mt-4'>with with 100+ trusted doctors</p>
                </div>
                <button onClick={()=>{
                    navigate('/login');
                    scrollTo(0,0)
                }} className='border rounded-2xl bg-white text-black font-semibold p-4 mt-5 hover:scale-105 transition-all duration-300'>Create Account</button>
            </div>
            {/* right side */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner
