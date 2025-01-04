import React from 'react';
import { assets } from '../assets/assets/assets_frontend/assets';

const Footer = () => {
    return (
        <footer className='font-poppins bg-primary rounded-t-2xl mt-20'>
            {/* Main Content Section */}
            <div className='container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm'>
                {/* Left Section */}
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                        <img className='w-16 h-16 rounded-xl' src={assets.logo} alt="Medify Logo" />
                        <p className='text-2xl font-semibold'>Medify</p>
                    </div>
                    <p className='leading-relaxed'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quod voluptatum. Magnam tempore ex fuga earum repellat officiis tenetur qui.
                    </p>
                </div>

                {/* Middle Section */}
                <div className='flex flex-col gap-4'>
                    <p className='text-lg font-medium'>Medify</p>
                    <ul className='space-y-2'>
                        <li>
                            <a href='#' className='hover:text-gray-300 transition-colors'>Home</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-gray-300 transition-colors'>About Us</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-gray-300 transition-colors'>Contact Us</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-gray-300 transition-colors'>Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className='flex flex-col gap-4'>
                    <p className='text-lg font-medium'>Get in Touch</p>
                    <ul className='space-y-2'>
                        <li>📞 +91 9876543210</li>
                        <li>📧 test@medify.com</li>
                    </ul>
                </div>
            </div>

            {/* Divider and Bottom Text */}
            <div className='border-t border-gray-700 py-4 text-center text-sm'>
                <p>Copyright © 2025 Medify. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
