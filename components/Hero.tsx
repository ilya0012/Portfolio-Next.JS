"use client"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id='home'>
        <div className="flex flex-col text-center items-center justify-center my-10 py-10 
        md:flex-row md:space-x-4 md:text-left md:py-40 sm:py-24">
            <div className="md:w-1/2 md:mt-2xl">
                <Image className="rounded-full  shadow-2xl" src='/MyPhoto.jpg' alt='image' width={400} height={400} />
            </div>
            <div className="mt-2 md:w-3/5">
                <h1 className="mt-5 md:mt-0 font-serif font-bold text-4xl md:text-3xl">Hi, I am Ilia, Web Developer!</h1>
                <p className="md:text-[20px] mt-4 mb-6 font-serif   ">
                    Based in Everett, WA.<br/> I create responsive websites for your business.
                </p>
                <Link 
                to='projects' 
                className="cursor-pointer rounded-md text-neutral-100 font-semibold px-6 py-3 bg-teal-600"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                Projects
                </Link>
            </div> 
        </div>
        <div>
            <Link 
                className="flex flex-row justify-center"
                to='about' 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                    <HiArrowDown size={35} className="cursor-pointer animate-bounce" />
            </Link>
        </div>
    </section>
  )
}

export default Hero