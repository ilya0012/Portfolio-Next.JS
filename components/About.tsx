import React from 'react'
import Image from 'next/image'

const skills = [
    {skill: "JavaScript"},
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "TailWind"},
    {skill: "React.js"},
    {skill: "Node.js"},
    {skill: "Express.js"},
    {skill: "MongoDB"},
    {skill: "Git"},
    {skill: "GitHub"},
    {skill: "WordPress"},
    {skill: "Next.js"},
    {skill: "MongoDB"},
    {skill: "TypeScript"},
    {skill: "Docker"}
]

const About = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>About Me
                <hr className='w-full h-1 mx-auto my-4 bg-blue-500 border-0 rounded'></hr>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top 
            md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 '>
                <div className='md:w-1/2 text-lg '>
                    <h1 className='text-center text-2xl font-bold my-8 md:text-left '>Get to know me!</h1>
                    <p>               
                        <span className='font-bold'>{` `}</span> My name is Ilia, {" "} 
                        <span className='font-bold'>{`highly ambitious`}</span>, 
                        <span className='font-bold'>{` self-motivated`}</span>, and
                        <span className='font-bold'>{` quick learning`}</span> Front End Developer
                        based in Seattle, WA. 
                    </p>
                    <br />

                    <p>
                        With a strong passion for technology
                        and problem-solving, I have dedicated myself to mastering
                        various programming languages and frameworks.
                        I am proficient in JavaScript,
                        with experience working on both frontend and backend projects.
                        My expertise in web development extends to working with technologies
                        like React, Node.js. I am also well-versed in database management, 
                        utilizing tools like MongoDB to ensure efficient data storage and retrieval.
                    </p>
                    <br />

                    <p>
                        As a team player, I enjoy collaborating with
                        colleagues to create innovative solutions and
                        continuously improve our processes. I am committed
                        to staying up-to-date with the latest industry trends
                        and best practices, and I am always eager to learn
                        new skills and technologies to enhance my capabilities
                        as a software developer. 
                    </p>
                    <br />

                    <p>
                        When I am not working, I take pleasure in immersing myself in nature through hiking,
                        camping, and wildlife photography, finding inspiration and tranquility in the great
                        outdoors. I firmly believe that maintaining a healthy work-life balance fosters
                        creativity and personal growth, ultimately allowing me to have a more meaningful impact
                        in the tech industry.
                    </p>

                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {skills.map((item, id) => {
                            return (
                            <p key={id}
                            className='bg-gray-200 px-4 py-2 mt-2 
                            text-gray-500 rounded foont-semibold'>
                                {item.skill}</p>
                            )
                        })}
                    </div>
                    <Image
                    className='hidden md:block md:relative md:bottom-4 md:left-20 md:z-0  ' 
                    src='/greetings.png'
                    alt='image' width={1000} height={1000} />
                </div> 
            </div>
        </div>
    </section>
  )
}

export default About