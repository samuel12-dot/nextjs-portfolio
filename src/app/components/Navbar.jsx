import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (

        <section className="px-8 md:px-16 2xl:px-48 py-8">
            <nav className="text-lg hidden md:flex items-center justify-between font-bold">


                <ul className="flex items-center gap-10">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-[#E7C285]">
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/works">Projects</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link href="/"><Image src={'/images/logo.svg'} width={150} height={150} alt={''} /></Link>
                    </li>
                </ul>

                <ul className="flex items-center gap-10">

                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}