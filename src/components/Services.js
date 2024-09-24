
import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa"

const Services = () => {

    const service = [
        {
            id:1,
            siteName:"Portfolio", 
            img: "https://marketbusinessnews.com/wp-content/uploads/2015/07/Portfoli.jpg", 
            demo: "", 
            githubLink: ""
         },
         {
            id:2,
            SiteName:"Dictionary",
            img:"https://www.collinsdictionary.com/images/full/dictionary_168552845.jpg",
            demo: "https://dictionary-application-9u1f.vercel.app/", 
            githubLink: "https://github.com/Olawale-Fakorede/Dictionary-Application"
         },
         {
            id:3,
            SiteName:"IP Address Tracker", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQXkiCgn6vvD7IE5q86vF79xg6YTKz3ywFw&s", 
            demo: "https://olawale-fakorede.github.io/IPAddressTrackerProject/", 
            githubLink: "https://github.com/Olawale-Fakorede/IPAddressTrackerProject"
         },
         {
            id:4,
            SiteName:"Timer", 
            img: "https://cdn.hswstatic.com/gif/How-to-make-a-one-minute-timer.jpg", 
            demo: "https://olawale-fakorede.github.io/TIMER-countdown-/", 
            githubLink: "https://github.com/Olawale-Fakorede/TIMER-countdown-"
    
         },
    {
        id:5,
        SiteName:"Learning App", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wsQUy_2Tm-elaPaPFs2TZ56R1JsCfsN6jQ&s", 
        demo: "https://alphabeth-learning-app.vercel.app/", 
        githubLink: "https://github.com/Olawale-Fakorede/ALPHABETH-LEARNING-APP"
    },
    {
        id:6,
        SiteName:"Quiz App",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqU5vrVQxCO7Nnb1Ahox2k06nF0kVD0MKjgA&s"
    
    },
    {
        id:7,
        SiteName:"Grading System", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdohaHdP8W0R5Lj5lvv_9jm2mZTw1R5AKzyA&s", 
        demo: "https://olawale-fakorede.github.io/Grading-System/", 
        githubLink: "https://github.com/Olawale-Fakorede/Grading-System"
    
    },
    {
        id:8,
        SiteName:"StopWatch", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyX9evwGk4Ao38I5UqPikJWLuTLHcfobD8g&s", 
        demo: "https://stopwatch-one-virid.vercel.app/", 
        githubLink: "https://github.com/Olawale-Fakorede/STOPWATCH"
    },
    {
        id:9,
        SiteName:"StopWatch", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyX9evwGk4Ao38I5UqPikJWLuTLHcfobD8g&s", 
        demo: "https://stopwatch-one-virid.vercel.app/", 
        githubLink: "https://github.com/Olawale-Fakorede/STOPWATCH"
    },
    {
        id:10,
        SiteName:"ToDo List", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjpHpnrh8l3uc5hxHZLv8AKCrAuEnXJECUg&s", 
        demo: "https://olawale-fakorede.github.io/ToDoList/", 
        githubLink: "https://github.com/Olawale-Fakorede/ToDoList"
    },
    {
        id:11,
        SiteName:"Arithmetic Table", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nKWgiLUyUWj76RaHd1Nm1_tisw0m78S2Dg&s", 
        demo: "https://arithmetic-table.vercel.app/", 
        githubLink: "https://github.com/Olawale-Fakorede/Arithmetic-Table"
    },
    {
        id:12,
        siteName:"Accordion", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiMPVWXGC5zR7d6p4e1gYRJh816F1ZGK_Zw&s", 
        demo: "", 
        githubLink: "https://github.com/Olawale-Fakorede/Accordion"
    }
    ];
  return (
    <Section 
    title='PROJECTS'
    subtitle="Here are some of the projects I have developed in the"
    >
        <div className='grid gap-8 lg:grid-cols-3'>
            {service.map((id, siteName, img, demo, githubLink) => (
                    <div>
                        <div className={`flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 space-y-2 ${id.animation}`}>
                            <img 
                                src={img} 
                                alt={id} 
                                className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-full" 
                            />
                            <h3 className='mt-5 text-base'>{siteName}</h3>
                            <p
                                className='rounded-md p-1 pr-2 bg-gradient-to-tr from-rose-600 to-teal-500 text-white cursor-pointer flex flex-row gap-2'
                            ><FaExternalLinkSquareAlt className='mt-1 ml-1'/><a href={demo} target="_blank" rel="noreferrer">Here</a></p>
                            <p
                                className='rounded-md p-1 pr-2 bg-gradient-to-tr from-rose-600 to-teal-500 text-white cursor-pointer flex flex-row gap-2'
                            ><FaGithub className='mt-1 ml-1'/><a href={githubLink} target="_blank" rel="noreferrer">GitHub</a></p>
                        </div>
                    </div>
                ))
            }
        </div>

    </Section>
  )
}

export default Services