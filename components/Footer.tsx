
import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineYoutube, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl pt-20'>
        <hr className='w-full h-0.5 mx-auto my-4 bg-neutral-200 border-0'></hr>
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
            <div className='text-neutral-500 dark:text-neutral-100 mb-2'>© 2023 Ilia Chistov</div>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <a href='https://github.com/ilya0012' rel='noreferrer' target='_blank'>
                    <AiOutlineGithub
                    className='hover:-translate-y-1 transition-transform cursore-pointer text-neutral-500 dark:text-neutral-100'
                    size={30} />
                </a>
                <a href='https://www.linkedin.com/in/iliachistov/' rel='noreferrer' target='_blank'>
                    <AiOutlineLinkedin
                    className='hover:-translate-y-1 transition-transform cursore-pointer text-neutral-500 dark:text-neutral-100'
                    size={30} />
                </a>
                <a href='https://www.instagram.com/ilyxa_almighty/' rel='noreferrer' target='_blank'>
                    <AiOutlineInstagram
                    className='hover:-translate-y-1 transition-transform cursore-pointer text-neutral-500 dark:text-neutral-100'
                    size={30} />
                </a>
            </div>
        </div>
    <div className='flex flex-row items center justify-start'>
        <p className='text-neutral-500 dark:text-neutral-100 mb-2'>Mail: iliachistofff@gmail.com</p> 
        <AiOutlineMail className='hover:-translate-y-1 transition-transform cursore-pointer text-neutral-500 dark:text-neutral-100' />
    </div>
    </footer>
  )
}

export default Footer