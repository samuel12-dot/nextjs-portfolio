import React from 'react'
import DescriptionText from '../components/DescriptionText'
import Button from '../components/Button'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import Experiences from '../components/Experiences'
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import Stats from '../components/Stats';

export default function About() {
  return (
    <section className='min-h-screen px-8 md:px-16 2xl:px-48 my-32'>

      <div className='flex justify-between items-start'>


        <div className='flex-1'>
          <DescriptionText text="about me" />
          <h2 className="h2">Cutting-edge designer<br />for the digital era.</h2>
        </div>

        <div className='max-w-[650px]'>
          <p className="p">I am Ayodeji Samuel, a Lagos-based full-stack software engineer intern at volts by univelcity. My passion lies in crafting user-friendly and delightful digital experiences that deliver results.</p>


          <div className='flex items-center gap-20'>

            <Button text="Let's Talk" />

            <div className="flex items-center gap-5 text-xl cursor-pointer">

              <Link href="https://github.com/samuel12-dot">
                <FaGithub className="hover:text-[#E7C285] transition-colors duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/in/samuel-ayodeji-3a0433246/">
                <FaLinkedin className="hover:text-[#E7C285] transition-colors duration-300" />
              </Link>

              <FaFacebook className="hover:text-[#E7C285] transition-colors duration-300" />

            </div>

          </div>

        </div>

      </div>

      <div className='w-[1200px] h-[600px] bg-[#E7C285] mt-20 mx-auto rounded-lg'></div>

      <Experiences />

      <Skills />

      <Awards />

      <Stats />


    </section>

  )
}
