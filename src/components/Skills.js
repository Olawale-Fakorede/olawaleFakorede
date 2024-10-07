
import React from 'react'
import Section from './common/Section'
// import { FaGit, FaGithub, FaNodeJs, FaFigma,  } from "react-icons/fa";
// import { VscVscode } from "react-icons/vsc";
// import { SiAdobephotoshop } from "react-icons/si";

const Skills = () => {

    const mySkills = [
        {
            id: 1,
            title: "HTML",
            image: "https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png"
        },
        {
            id: 2,
            title: "CSS",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_IbJtl-qSocIkXYAggGPggHVgJ4RawbukA&s"
        },
        {
            id: 3,
            title: "TAILWIND CSS",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
          
        },
        {
            id: 4,
            title: "JAVASCRIPT",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyolY2yvY10JwDCQj_Tzc8vIoAHFikCWqng&s"
        },
        {
            id: 5,
            title: "ReactJS",
            image: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
        },
        {
            id: 6,
            title: "NextJS",
            image: "https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp"
        },
        {
            id: 7,
            title: "NodeJs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ8ZykYG8EI_WRXx6EWfNwgu4Hk15YIzzfw&s"
        },
        {
            id: 8,
            title: "ExpressJS",
            image: "https://media.licdn.com/dms/image/C4E12AQGn33c8MuVS1g/article-cover_image-shrink_720_1280/0/1594043887838?e=2147483647&v=beta&t=j0UcoLhDunH_S5I4lb0jwgF6mXO1CuNqopiXaiq7PUo"
        },
        {
            id: 9,
            title: "MongoDB",
            image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
        },
        {
            id: 10,
            title: "Bootstrap",
            image: "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png"
        },
    ];

  return (
    <Section 
    title='Technologies'
    subtitle="Here are some of the skills I developed myself in."
    >
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center justify-center p-5 shadow-lg dark:shadow-gray-800 rounded-xl space-y-2'>
            {mySkills.map((tool) => (
                
                    <span className="grid items-center gap-3 justify-center p-5 shadow-lg dark:shadow-gray-500 rounded-xl duration-300 ease-in-out hover:scale-110">
                        <img src={tool.image} 
                        alt={tool.id}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
                        />
                        <div>{tool.title}</div>
                    </span>

            ))}
        </div>

    </Section>
  )
}

export default Skills