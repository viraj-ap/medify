import React from 'react'

const Header = () => {
    return (
        <div className='mt-32 font-poppins flex flex-col md:flex-row flex-wrap bg-white rounded-3xl px-6 md:px-10 lg:px-20'>
            {/* left side */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight '>
                    Book Appointment <br /> With Trusted Doctors.
                </p>    
                <div className='flex flex-col md:flex-row items-center gap-2 text-sm font-medium tracking-tight'>
                    <img className='w-28' src="/assets/assets/assets_frontend/group_profiles.png" alt="" />
                    <p>
                        Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />
                        and schedule you appointment hassle-free.
                    </p>
                </div>
                <a href="#speciality" className='flex items-center gap-2 bg-green-300 hover:bg-green-400 px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:mt-5 md:m-0 hover:scale-105 transition-all duration-300'>
                    Book Appointment <img className='w-3' src="/assets/assets/assets_frontend/arrow_icon.svg" alt="" />
                </a>
            </div>
            {/* right side */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src="/assets/assets/assets_frontend/header_img.png" alt="" />
            </div>
        </div>
    )
}

export default Header
