"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './slideUp'

const projects = [
  {
    name: 'Modern GPT3 Website',
    description: 'Modern presentation of GPT3, built on React with CSS using BEM Methodology, full responsive on mobile and Desktop',
    image: '/modernAIApp.jpg',
    gitHub: 'https://github.com/ilya0012/Modern-Website-GP3',
    link: 'https://modernairepresentation.website'
  },
  {
    name: 'Modern Restaurant Menu',
    description: 'Modern Restaurant Menu, built on React with CSS using BEM Methodology, full responsive on mobile and Desktop',
    image: '/RestaurantMenuApp.jpg',
    gitHub: 'https://github.com/ilya0012/Modern-Restaurant-Menu',
    link: 'https://iliachistov.com/'
  },
  {
    name: 'Modern Bank application',
    description: 'Modern crypto page bank application, built on React + Vite and TailWind, full responsive on Mobile and Desktop',
    image: '/bank.jpg',
    gitHub: 'https://github.com/ilya0012/bank_modern_app',
    link: 'http://modernapp-iliachistov.website'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>
        Last Projects
        <hr className='w-full h-1 mx-auto my-4 bg-blue-500 border-0 rounded mb-20'></hr>
      </h1>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, id) => {
          return(
            <div key={id}>
              <SlideUp offset='-0px'>
                <div className='flex flex-col-reverse animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className='md:w-1/2'>
                    <Link href={project.link} target='_blank' >
                      <Image
                      src={project.image} 
                      alt={project.name}
                      width={500}
                      height={500}
                      className='cursor-pointer rounded-xl shadow-xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div>
                    <h1 className='text-3xl font-bold mb-2'>{project.name}</h1>
                    <p className={`mb-6 text-xl leading-8 text-neutral-600 dark:text-neutral-400`}>{project.description}</p>
                    <div className='flex flex-row space-x-5 align-bottom'>
                      <Link href={project.gitHub} target='_blank'>
                        <BsGithub 
                        size={30}
                        className='mb-5 md:mb-0 hover:-translate-y-1 transition-transform cursor-pointer' />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare 
                        size={30}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'/>
                      </Link></div>
                    </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects