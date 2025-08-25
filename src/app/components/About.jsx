import Image from "next/image"
import Button from "../components/Button"

export default function About() {
    return (
        <div className="mx-40">
            <div className="flex items-center">
                <Image src={'/images/user-1.png'} width={500} height={500} alt={''} />
                <div>
                    <h2>Crafting experiences that engage and inspire.</h2>
                    <p>Let me transform your vision into a standout digital presence, giving you the freedom to focus on scaling your business while I handle the details."</p>
                    <Button text="About Me" />
                </div>
            </div>
        </div>
    )
}