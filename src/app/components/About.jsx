import Image from "next/image"
import InactiveButton from "./InactiveButton"
export default function About() {
    return (
        <div className="px-8 md:px-16 2xl:px-48 mb-5">
            
        

            <div className="flex flex-col items-center justify-center md:flex-col lg:flex-row sm:items-start sm:gap-10 lg:gap-28 xl:gap-40">
                <Image src={'/images/user-1.png'} width={500} height={500} alt={''} className="rounded-md md:mx-auto"/>
                <div>
                    <h2 className="h2 text-left">Crafting experiences that<br/><span className="text-[#E7C285]">Engage</span> and <span className="text-[#E7C285]">Inspire</span>.</h2>
                    <p className="max-w-[500px] p my-5">Let me transform your vision into a standout digital presence, giving you the freedom to focus on scaling your business while I handle the details."</p>
                    <InactiveButton text="About Me" />
                </div>
            </div>
        </div>
    )
}