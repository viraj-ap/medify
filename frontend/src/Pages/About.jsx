import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-3xl text-white mt-32'>
        <p>About Us</p>
      </div>

      <div className='flex text-white items-center justify-around mt-12'>
        <img 
        className='h-96'
        src={assets.about_image} alt="" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
