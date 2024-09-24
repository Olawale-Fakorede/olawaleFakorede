
import React from 'react'
import { FaTwitter, FaLinkedin, FaFacebook, FaArrowDown } from "react-icons/fa"
import myImage from "../assets/myImage.jpg" 

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
  return (
    <div>
        
    </div>
  )
}

export default Hero