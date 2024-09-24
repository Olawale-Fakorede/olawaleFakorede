
import React from 'react'
import { MdNightsStay, MdSunny } from "react-icons/md";
import myLogo from "../assets/Logo.jpg" 

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className='flex justify-between items-center p-6'>
            <img 
                src={myLogo} 
                alt='LOGO'
                className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full'
            />

            <div onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode?
                    <MdSunny className='text-2xl cursor-pointer'/> :
                    <MdNightsStay className='text-2xl cursor-pointer'/>  // Toggle between sun and moon icons based on darkMode state.
                }
                {/* <MdNightsStay className='text-2xl cursor-pointer'/>
                <MdSunny className='text-2xl cursor-pointer'/> */}
            </div>
        </nav>
    </header>
  ) 
}

export default Header