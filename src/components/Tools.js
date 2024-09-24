
import React from 'react'
import Section from './common/Section'
// import { FaGit, FaGithub, FaNodeJs, FaFigma,  } from "react-icons/fa";
// import { VscVscode } from "react-icons/vsc";
// import { SiAdobephotoshop } from "react-icons/si";

const Tools = () => {

    const myTools = [
        {
            id: 1,
            title: "Git",
            image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png"
        },
        {
            id: 2,
            title: "Github",
            image: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
        },
        {
            id: 3,
            title: "Visual Studio Code",
            image: "https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png"
          
        },
        {
            id: 4,
            title: "NodeJS",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ8ZykYG8EI_WRXx6EWfNwgu4Hk15YIzzfw&s"
        },
        {
            id: 5,
            title: "Figma",
            image: "https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png"
        },
        {
            id: 6,
            title: "Photoshop",
            image: "https://w7.pngwing.com/pngs/548/34/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png"
        }
    ];

  return (
    <Section 
    title='Tools'
    subtitle="Here are some of the tools I make use in completion of projects I developed."
    >
        <div className='min-w-screen grid grid-col-2 md:grid md:grid-cols-3 gap-7 items-center justify-center p-5 shadow-lg dark:shadow-gray-800 rounded-xl space-y-2'>
            {myTools.map((tool) => (
                
                    <span className="grid items-center gap-3 justify-center p-5 shadow-lg dark:shadow-gray-400 rounded-xl duration-300 ease-in-out hover:scale-110">
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

export default Tools