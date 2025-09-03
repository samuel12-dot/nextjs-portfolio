import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="mx-48 py-8 text-lg">

            <ul className="hidden md:flex items-center justify-between font-bold">
                <div className="flex items-center gap-10">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-[#E7C285]">
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/works">Projects</Link>
                    </li>
                </div>

                <div className="">
                    <li>
                        <Link href="/"><Image src={'/images/logo.svg'} width={150} height={150} alt={''}/></Link>
                    </li>
                </div>

                <div className="flex items-center gap-10">
                    <li>
                        <Link href="/blogs">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}