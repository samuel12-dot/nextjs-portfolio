import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";





export default function Header({ name }) {
    return (
        <header className="mx-40">
            <h1 className="text-8xl tracking-widest uppercase text-center mt-10 font-bold mt-36">{name}</h1>
            <div className="flex items-start gap-16 mt-16">
                <div className="h-[1px] w-[500px] bg-amber-50"></div>
                <p className="max-w-[650px]">Skilled frontend developer based in Lagos blending clean code with creative design. Building seamless, responsive interfaces that deliver engaging user experiences and lasting impact."</p>
            </div>

            <div className="flex items-center mt-10">
                <div className="flex items-center gap-5 text-xl mr-[460px]">
                    <FaGithub />
                    <FaInstagram />
                    <FaFacebook />
                </div>
                    <Button text="Let's Talk" />
            </div>
            <div className="flex flex-col items-center justify-center mt-10 text-3xl">
            <IoIosArrowDown className="-mb-5"/>
            <IoIosArrowDown className="-mb-5 opacity-50"/>
            <IoIosArrowDown className="opacity-30"/>
            </div>


        </header>
    )
}