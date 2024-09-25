
import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkAlt, } from "react-icons/fa";


const Services = () => {

    const mySkills = [
        {
            id: 1,
            title: "Portfolio",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9hcKUbxsmY5HmX_26-QuaiandcalBf8UDg&s",
            link: "",
            gitHub: "https://github.com/Olawale-Fakorede/olawaleFakorede"
        },
        {
            id: 2,
            title: "Dictionary",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAgtEsbr5qq-WgfBySGI9oKzIibCkAj-sXQ&s",
            link: "https://dictionary-application-9u1f.vercel.app/",
            gitHub: "https://github.com/Olawale-Fakorede/Dictionary-Application"
        },
        {
            id: 3,
            title: "IP Address Tracker",
            image: "https://res.cloudinary.com/dz209s6jk/image/upload/v1598711973/Challenges/ld4kxbjoxpqpjenak8w6.jpg",
            link: "https://olawale-fakorede.github.io/IPAddressTrackerProject/",
            gitHub: "https://github.com/Olawale-Fakorede/IPAddressTrackerProject"
          
        },
        {
            id: 4,
            title: "Alphabet Learning App",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sqWuB9SFhu9ou7w5p7QGy-sl1MQdsQZYSg&s",
            link: "https://alphabeth-learning-app.vercel.app/",
            gitHub: "https://github.com/Olawale-Fakorede/ALPHABETH-LEARNING-APP"
        },
        {
            id: 5,
            title: "Timer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-Z47PF7uLMQs5awo4t-1xG7kKdHxIDs0qg&s",
            link: "https://olawale-fakorede.github.io/TIMER-countdown-/",
            gitHub: "https://github.com/Olawale-Fakorede/TIMER-countdown-"
        },
        {
            id: 6,
            title: "Quiz App",
            image: "https://miro.medium.com/v2/resize:fit:1000/1*FBRsnCP9wE84UVW1Kkv5Yw.jpeg",
            link: "",
            gitHub: ""
        },
        {
            id: 7,
            title: "Grading System",
            image: "https://www.gradebook.app/static/images/index/course.jpg",
            link: "https://olawale-fakorede.github.io/Grading-System/",
            gitHub: "https://github.com/Olawale-Fakorede/Grading-System"
        },
        {
            id: 8,
            title: "StopWatch",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyX9evwGk4Ao38I5UqPikJWLuTLHcfobD8g&s",
            link: "https://stopwatch-one-virid.vercel.app/",
            gitHub: "https://github.com/Olawale-Fakorede/STOPWATCH"
        },
        {
            id: 9,
            title: "ToDo List",
            image: "https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg",
            link: "https://olawale-fakorede.github.io/ToDoList/",
            gitHub: "https://github.com/Olawale-Fakorede/ToDoList"
        },
        {
            id: 10,
            title: "Arithmetic Table",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxaaPHqpOFBLn9ojSebvJhKfp8icHdyZD9Q&s",
            link: "https://arithmetic-table.vercel.app/",
            gitHub: "https://github.com/Olawale-Fakorede/Arithmetic-Table"
        },
        {
            id: 11,
            title: "Accordion",
            image: "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/faqpage99.jpg",
            link: "",
            gitHub: "https://github.com/Olawale-Fakorede/Accordion"
        },
    ];

  return (
    <Section 
    title='Projects'
    subtitle="Here are some projects I have developed."
    >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 items-center justify-center p-5 shadow-lg dark:shadow-gray-800 rounded-xl space-y-2'>
            {mySkills.map((tool) => (
                    <span className="flex items-center gap-7 justify-center p-5 shadow-lg dark:shadow-gray-500 rounded-xl duration-300 ease-in-out hover:scale-110">
                        <div className="flex flex-col gap-1 items-center justify-center p">
                            <img src={tool.image} 
                            alt={tool.id}
                            className="w-40 h-40 md:w-44 md:h-44 lg:w-60 lg:h-64 object-contain rounded-full"
                            />
                            <h2 className='items-center justify-center text-center -mt-10'>{tool.title}</h2>
                        </div>
                        <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 items-center justify-center p">
                            <a href={tool.link} target="_blank" rel="noopener noreferrer"
                                className='items-center justify-center rounded-lg p-2 bg-gradient-to-tr from-rose-600 to-teal-500 text-white cursor-pointer flex flex-row gap-2'
                            >
                                <FaGithub size="20" />
                            </a>
                            <a href={tool.link} target="_blank" rel="noopener noreferrer"
                                className='items-center justify-center rounded-lg p-2 bg-gradient-to-tr from-rose-600 to-teal-500 text-white cursor-pointer flex flex-row gap-2'
                            >
                                <FaExternalLinkAlt size="20" />
                            </a>
                        </div>
                    </span>
            ))}
        </div>

    </Section>
  )
}

export default Services