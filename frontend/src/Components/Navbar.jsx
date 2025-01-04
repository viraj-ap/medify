import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState(true); // Change this as per your authentication logic

    const handleCreateAccount = () => {
        navigate("/login");
        setIsOpen(false);
    };

    const handleLogout = () => {
        setToken(false);
        setIsOpen(false); // Close the mobile drawer on logout
    };

    return (
        <nav className="z-[999] flex justify-center items-center fixed top-0 left-0 right-0">
            <div className="z-20 h-[65px] w-auto max-w-[800px] min-w-[70vw] backdrop-filter backdrop-blur-md bg-[rgba(255, 255, 255, 0.2)] border-2 border-solid shadow-2xl border-white border-opacity-10 rounded-xl flex items-center px-6 py-3 mt-7 justify-between">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <NavLink to="/">
                        <img className='h-12 cursor-pointer rounded' src="/assets/assets/assets_frontend/logo.svg" alt="Logo" />
                    </NavLink>
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex flex-grow items-center justify-center gap-6">
                    <ul className='flex gap-5 text-sm font-semibold whitespace-nowrap text-neutral-400'>
                        <NavLink to="/" className='hover:text-neutral-500'>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/doctors" className='hover:text-neutral-500'>
                            <li>All Doctors</li>
                        </NavLink>
                        <NavLink to="/about" className='hover:text-neutral-500'>
                            <li>About</li>
                        </NavLink>
                        <NavLink to="/contact" className='hover:text-neutral-500'>
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                </div>

                {/* Create Account Button */}
                <div className="flex-shrink-0 hidden md:block">
                    {
                        token ? (
                            <div className='flex items-center gap-2 cursor-pointer group relative'>
                                <img className='w-8 rounded-full' src="/assets/assets/assets_frontend/profile_pic.png" alt="Profile" />
                                <img className='w-2.5' src="/assets/assets/assets_frontend/dropdown_icon.svg" alt="Dropdown" />
                                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-48 bg-stone-100 rounded-xl flex flex-col gap-4 p-4 items-center'>
                                        <p onClick={() => navigate("my-profile")} className='hover:text-blue-500 cursor-pointer z-50'>My Profile</p>
                                        <p onClick={() => navigate("my-appointments")} className='hover:text-green-500 cursor-pointer z-50'>My Appointments</p>
                                        <p onClick={handleLogout} className='hover:text-red-500 cursor-pointer z-50'>Logout</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button onClick={handleCreateAccount} className="px-4 py-2 bg-primary font-poppin font-bold tracking-tight text-sm rounded-lg hover:bg-white hover:text-black">
                                Create Account
                            </button>
                        )
                    }
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.3)] backdrop-blur-lg border-2 border-white border-opacity-20 shadow-2xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 md:hidden`}>
                <div className="flex justify-end p-5">
                    <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className='flex flex-col items-center gap-4 mt-10 text-lg font-semibold whitespace-nowrap text-white'>
                    <NavLink to="/" className='hover:text-gray-300' onClick={() => setIsOpen(false)}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/doctors" className='hover:text-gray-300' onClick={() => setIsOpen(false)}>
                        <li>All Doctors</li>
                    </NavLink>
                    <NavLink to="/about" className='hover:text-gray-300' onClick={() => setIsOpen(false)}>
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/contact" className='hover:text-gray-300' onClick={() => setIsOpen(false)}>
                        <li>Contact</li>
                    </NavLink>

                    {/* Profile Options for Mobile View */}
                    {token ? (
                        <>
                            <NavLink to="my-profile" className='hover:text-gray-300' onClick={() => setIsOpen(false)}>
                                <li>My Profile</li>
                            </NavLink>
                            <NavLink to="my-appointments" className='hover:text-gray-300' onClick={() => setIsOpen(false)}>
                                <li>My Appointments</li>
                            </NavLink>
                            <li onClick={handleLogout} className='hover:text-red-500 cursor-pointer'>Logout</li>
                        </>
                    ) : (
                        <button onClick={handleCreateAccount} className="px-4 py-2 bg-primary font-poppin font-bold tracking-tight text-sm rounded-lg hover:bg-white hover:text-black">
                            Create Account
                        </button>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
