import Image from "next/image"
import Button from "../components/Button"

export default function About() {
    return (
        <div className="mx-40">
            <div className="flex items-start gap-40">
                <Image src={'/images/user-1.png'} width={500} height={500} alt={''} className="rounded-md"/>
                <div>
                    <h2 className="h2">Crafting experiences that<br/><span className="text-[#E7C285]">Engage</span> and <span className="text-[#E7C285]">Inspire</span>.</h2>
                    <p className="max-w-[500px]">Let me transform your vision into a standout digital presence, giving you the freedom to focus on scaling your business while I handle the details."</p>
                    <Button text="About Me" />
                </div>
            </div>
        </div>
    )
}