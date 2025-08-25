import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="mx-40 py-8 text-lg">
            <ul className="flex items-center justify-between font-bold">
                <div className="flex items-center gap-10">
                    <li>
                        <Link href="/" className="text-[#E7C285]">Home</Link>
                    </li>
                    <li className="hover:text-orange-300 active:text-orange-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/works">Works</Link>
                    </li>
                </div>

                <div className="">
                    <li>
                        <Link href="/"><Image src={'/images/logo.svg'} width={150} height={150} alt={''}/></Link>
                    </li>
                </div>

                <div className="flex items-center gap-10">
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}