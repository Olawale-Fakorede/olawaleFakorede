import React from 'react'
import Section from './common/Section'
import { FaTwitter, 
    FaLinkedin, 
    FaFacebook, 
    // FaArrowDown 
} from "react-icons/fa";


const Contact = () => {

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
    <Section
    title='Contact'
    subtitle="Let's discuss your next project together."
    >
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div> 
                <img src="https://www.whiteriver.org/wp-content/uploads/2018/10/ContactUsHeader.jpg" 
                alt='Contact-info'
                className='w-48 h-32 md:w-72 md:h-44 lg:w-80 lg:h-48'
                /> 
            </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'>
                    I am open to talk regarding Backend, Frontend and tutoring opportunities.
                    Feel free to conatct me using any preffered medium.
                </p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3xl'>
                {mySocial.map(({id, link, icon}) => (
                    <a href={link} key={id} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600'>
                        {icon}
                    </a>
                ))}
            </div>

            {/* Bottom form */}
            <div className='p-8 text-left w-full flex items-center justify-center'>
                <form action='https://getform.io/f/byvpxlqa' method='POST'>
                    <div className='gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                name
                            </label>
                            <input type='text' 
                                name='name' 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                phone
                            </label>
                            <input type='text' 
                                name='phone' 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                email
                            </label>
                            <input type='text' 
                                name='email' 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                message
                            </label>
                            <textarea name='message' rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                        </div>  
                    </div>
                    <div className='flex item-center justify-center'>
                        <button type='submit' className='mt-5 bg-gradient-to-tr from-rose-600 to-teal-500 text-white py-3 rounded-md px-6 font-semibold uppercase tracking-wider cursor-pointer hover:scale-105 duration-200'>
                            send message
                        </button> 
                    </div>
                </form>
            </div>
        </div>

        
    </Section>
  )
}

export default Contact