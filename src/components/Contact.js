import React, { useState } from 'react';
import Section from './common/Section';
import axios from 'axios';
import {  
    FaInstagramSquare,
    FaLinkedin, 
    FaFacebook, 
    FaWhatsappSquare,
    // FaArrowDown 
} from "react-icons/fa";
// import Githubcalender from './Githubcalender';
import { SiGmail } from "react-icons/si";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const mySocial =[
        {
            id: 1,
            link: "http://www.twitter.com/Prxfitee",
            icon: <FaXTwitter />
        },
        {
            id: 2,
            link: "http://www.facebook.com/fakorede.olarwale",
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: "http://www.linkedin.com/in/olawale-fakorede",
            icon: <FaLinkedin />
        },
        {
            id: 4,
            link: "mailto:ayomidefakored58@gmail.com",
            icon: <SiGmail />
        },
        {
            id: 5,
            link: "https://www.github.com/Olawale-Fakorede",
            icon: <FaGithub />
        },
        {
            id: 6,
            link: "https://www.instagram.com/proftee_divspan",
            icon: <FaInstagramSquare />
        },
        {
            id: 7,
            link: "https://wa.me/08122422728",
            icon: <FaWhatsappSquare />
        },
    ];
  
    const [valueForm, setValueForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value} = e.target
        setValueForm({
          ...valueForm,
          [name]: value
        })
    };

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Assuming valueForm is already defined and contains the data to post

        const isEmptyField = Object.values(valueForm).some(value => value.trim() === '');

        if (isEmptyField) {
            setErrorMessage('Please fill in all fields.');
            return;
        } else {
            setErrorMessage(''); // Clear error message if all fields are filled
        }
      
        try {
          const response = await axios.post('https://server-portfolio-eight.vercel.app/api/v1/contactme', valueForm);
      
          // Handle successful response (e.g., display success message, redirect)
          console.log('Message successfully sent:', response.data); // Example usage
          toast.success("Message sent successfully!");
            setValueForm({ name: '', email: '', phone: '', message: '' }); // Clear form after submission
        } catch (error) {
          // Handle errors gracefully (e.g., display error message)
          setErrorMessage('Error Sending Message:', error);
        }
      };

    //   const notify = () => toast.success("Message sent succesfully!");


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
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 w-full items-center justify-center ml-24 text-3xl'>
                {mySocial.map(({id, link, icon}) => (
                    <a href={link} key={id} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600'>
                        {icon}
                    </a>
                ))}
            </div>

            {/* Bottom form */}
            <div className='p-8 text-left w-full flex items-center justify-center'>
                <form onSubmit={handleSubmit}>
                    <div className='gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                name
                            </label>
                            <input 
                                type='text' 
                                placeholder='Name'
                                onChange={handleChange}
                                name='name'
                                value={valueForm.name}
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                phone
                            </label>
                            <input 
                                type="number" 
                                onChange={handleChange}
                                name='phone'
                                value={valueForm.phone} 
                                placeholder='Phone Number' 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                email
                            </label>
                            <input 
                                type="email" 
                                onChange={handleChange}
                                name='email'
                                value={valueForm.email} 
                                placeholder='Email' 
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                message
                            </label>
                            <textarea name='message' rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'
                                type="number" 
                                onChange={handleChange}
                                value={valueForm.message} 
                                ></textarea>
                        </div>  
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <div className='flex item-center justify-center'>
                        <button 
                            // onSubmit={handleSubmit} 
                            // onClick={notify}
                            type="submit" // Changed to type="submit"
                            className='mt-5 bg-gradient-to-tr from-rose-600 to-teal-500 text-white py-3 rounded-md px-6 font-semibold uppercase tracking-wider cursor-pointer hover:scale-105 duration-200'>
                            send message
                          
                        </button> 
                    </div>
                </form>
                <ToastContainer />

               {/* <Githubcalender/> */}
            </div>
        </div>

        
    </Section>
  )
}

export default Contact