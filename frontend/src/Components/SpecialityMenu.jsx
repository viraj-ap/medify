import React from 'react';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10 px-4 w-full'>
            {/* Title */}
            <div className='text-white text-3xl sm:text-4xl font-poppins text-center'>
                Find by Speciality
            </div>

            {/* Subtitle */}
            <div className='text-white text-center mt-3 sm:mt-5 text-sm sm:text-base'>
                Simply browse through our extensive list of trusted doctors,
                <br className='hidden sm:block' />
                and schedule your appointment hassle-free.
            </div>

            {/* Speciality Menu */}
            <div className='text-white text-center mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4 sm:gap-x-10 justify-center'>
                {/* General Physician */}
                <div className='flex flex-col items-center hover:translate-y-[-5px] sm:hover:translate-y-[-10px] transition-all duration-300'>
                    <Link to="/doctors/general physician">
                        <img className="w-20 h-20 sm:w-24 sm:h-24" src="assets/assets/assets_frontend/General_physician.svg" alt="General Physician" />
                    </Link>
                    <div className='mt-2 text-sm sm:text-base'>General Physician</div>
                </div>

                {/* Dermatologist */}
                <div className='flex flex-col items-center hover:translate-y-[-5px] sm:hover:translate-y-[-10px] transition-all duration-300'>
                    <Link to="/doctors/dermatologist">
                        <img className="w-20 h-20 sm:w-24 sm:h-24" src="assets/assets/assets_frontend/Dermatologist.svg" alt="Dermatologist" />
                    </Link>
                    <div className='mt-2 text-sm sm:text-base'>Dermatologist</div>
                </div>

                {/* Gastroenterologist */}
                <div className='flex flex-col items-center hover:translate-y-[-5px] sm:hover:translate-y-[-10px] transition-all duration-300'>
                    <Link to="/doctors/gastroenterologist">
                        <img className="w-20 h-20 sm:w-24 sm:h-24" src="assets/assets/assets_frontend/Gastroenterologist.svg" alt="Gastroenterologist" />
                    </Link>
                    <div className='mt-2 text-sm sm:text-base'>Gastroenterologist</div>
                </div>

                {/* Gynecologist */}
                <div className='flex flex-col items-center hover:translate-y-[-5px] sm:hover:translate-y-[-10px] transition-all duration-300'>
                    <Link to="/doctors/gynecologist">
                        <img className="w-20 h-20 sm:w-24 sm:h-24" src="assets/assets/assets_frontend/Gynecologist.svg" alt="Gynecologist" />
                    </Link>
                    <div className='mt-2 text-sm sm:text-base'>Gynecologist</div>
                </div>

                {/* Neurologist */}
                <div className='flex flex-col items-center hover:translate-y-[-5px] sm:hover:translate-y-[-10px] transition-all duration-300'>
                    <Link to="/doctors/neurologist">
                        <img className="w-20 h-20 sm:w-24 sm:h-24" src="assets/assets/assets_frontend/Neurologist.svg" alt="Neurologist" />
                    </Link>
                    <div className='mt-2 text-sm sm:text-base'>Neurologist</div>
                </div>

                {/* Pediatrician */}
                <div className='flex flex-col items-center hover:translate-y-[-5px] sm:hover:translate-y-[-10px] transition-all duration-300'>
                    <Link to="/doctors/pediatrician">
                        <img className="w-20 h-20 sm:w-24 sm:h-24" src="assets/assets/assets_frontend/Pediatricians.svg" alt="Pediatrician" />
                    </Link>
                    <div className='mt-2 text-sm sm:text-base'>Pediatrician</div>
                </div>
            </div>
        </div>
    );
}

export default SpecialityMenu;
