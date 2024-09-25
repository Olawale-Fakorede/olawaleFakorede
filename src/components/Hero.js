
import React from 'react'
import { FaTwitter, 
    FaLinkedin, 
    FaFacebook, 
    // FaArrowDown 
} from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import myImage from "../assets/Group.png" 

const Hero = () => {

    const mySocial =[
        {
            id: 1,
            link: "http://www.twitter.com",
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: "http://www.facebook.com",
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: "http://www.linkedin.com",
            icon: <FaLinkedin />
        },
    ];

    // window.addEventListener("scroll", function () {
    //     const downArrow = document.querySelector(".downArrow");
        
    //     if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow")
    //     else downArrow.classList.remove("hide-down-arrow")
    // });
    
    // window.addEventListener("scroll", function () {
    //     const downArrow = document.querySelector(".downArrow");
        
    //     if (this.scrollY >= 90) {
    //       downArrow.setAttribute("class", downArrow.getAttribute("class") + " hide-down-arrow");
    //     } else {
    //       downArrow.setAttribute("class", downArrow.getAttribute("class").replace("hide-down-arrow", ""));
    //     }
    //   });
      
    
    
  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-600 font-bold uppercase '>Olawale Fakorede</h2>
        <h3 className='py-3 text-2xl'>Full Stack Web Development</h3>
        <p className='max-w-xl font-light text-gray-500'>
            <span className='animate-pulse text-2xl text-yellow-500 flex items-center justify-center'>
                <p className='text-white mr-3'>Hello </p>
                <FaHandsClapping/>
            </span>
            <br />
            I'm Olawale, a passionate and dedicated  developer with a strong background in web development and design interpretation.
            <br/>
            I'm currently looking for opportunities to combine my skills and bring my creativity to life.
            As a Full-Stack Developer, I specialize in creating the visual and interactive elements of websites and web applications. 
            I ensure a seamless and responsive user experience across various devices and browsers by building user interfaces. 
            I collaborate with designers to implement designs and develop servers, as a backend developers I integrate server-side logic. 
            My focus is on performance optimization, accessibility, and maintaining clean, efficient code. I have great strength in backend 
            web development. Creating a well structured database server.
        </p>

        {/* social icons */}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {mySocial.map(({id, link, icon}) => (
                <a href={link} key={id}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer duration-300 hover:text-rose-600'
                >
                    {icon}
                </a>
            ))}
        </div>

            {/* avatar and resume */}
            <div>
                <img 
                src={myImage} 
                alt='avatar' 
                className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5'
                />
                <a href='/OLAWALE-RESUME.pdf'
                    download={true}
                    className='flex items-center justify-center mt-10 bg-gradient-to-tr from-rose-600 to-teal-500 text-white py-2 rounded-lg'
                >
                    Resume 
                </a>
            </div>
            
            {/* arrow down animation */}
        <div className='mt-10 down-arrow'>
            {/* <FaArrowDown className='animate-bounce text-2xl text-gray-400' /> */}
        </div>
    </section>
  )
}

export default Hero