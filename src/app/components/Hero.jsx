import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";


export default function Hero({ name }) {
    return (
        <header className="px-8 md:px-16 2xl:px-48 mb-40">
            <h1 className="h1">{name}</h1>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start gap-16 mt-16">
                <div className="h-[1px] w-full sm:max-w-[500px] bg-amber-50"></div>
                <p className="text-wrap sm:max-w-[650px] p">I&quot;m a software engineer skilled in full-stack web development, building responsive frontends with HTML, CSS, JavaScript, and React, and scalable backends with Node.js, Express.js, and MongoDB. I focus on writing clean, efficient code and creating seamless user experiences through modern web technologies.</p>
            </div>

            <div className="flex flex-col items-start gap-5 sm:gap-0 sm:flex-row sm:items-center mt-10">
                <div className="flex items-center gap-5 text-xl mr-[460px] cursor-pointer">
                    <FaGithub className="hover:text-[#E7C285] transition-colors duration-300" />
                    <FaInstagram className="hover:text-[#E7C285] transition-colors duration-300" />
                    <FaFacebook className="hover:text-[#E7C285] transition-colors duration-300" />
                </div>
                <Button text="Let's Talk" />
            </div>
            <div className="flex flex-col items-center justify-center my-20 text-3xl">
                <IoIosArrowDown className="-mb-5 animate-bounce" />
                <IoIosArrowDown className="-mb-5 opacity-50 animate-bounce delay-150" />
                <IoIosArrowDown className="opacity-30 animate-bounce delay-300" />
            </div>


        </header>
    )
}
