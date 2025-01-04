import React, { useContext } from 'react';
import { doctors } from '../assets/assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

// Functional component for displaying top doctors
const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)

    return (
        // Main container for the component
        <div className='flex flex-col items-center gap-4 my-16 text-white md:mx-10'>
            {/* Heading */}
            <h1 className='text-white text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Browse through our list of doctors</p>

            <div className='w-full'>
                {/* Doctor Cards Grid */}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 gap-y-6 px-4 sm:px-0'>
                    {doctors.slice(0, 10).map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            className='border-solid border-2 border-white rounded-md hover:translate-y-[-10px] duration-500 cursor-pointer'
                            key={index}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-56 object-cover bg-blue-50 rounded-t-md'
                            />
                            <div className='text-white p-4'>
                                {/* Availability indicator */}
                                <div className='flex items-center gap-2 text-green-500 text-sm'>
                                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                    <p>Available</p>
                                </div>
                                <p className='text-lg font-medium'>{item.name}</p>
                                <p className='text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDoctors;
