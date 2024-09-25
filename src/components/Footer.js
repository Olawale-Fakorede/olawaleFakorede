import React from 'react'
import myLogo from "../assets/Logo.jpg" 

const Footer = () => {
  return (
    <section className='min-h-fit flex gap-20 md:gap-40 lg:gap-96 justify-start items-center py-5 px-3 p-4 shadow-lg dark:shadow-gray-300 rounded-xl duration-300 ease-in-out'>
        <img 
            src={myLogo} 
            alt='LOGO'
            className='ml-4 md:ml-28 lg:ml-44 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full'
        />
            
        <p className='max-w-xl font-light text-gray-500'>
            Copyright © 2024 Olawale F.
        </p>
    </section>
  )
}

export default Footer