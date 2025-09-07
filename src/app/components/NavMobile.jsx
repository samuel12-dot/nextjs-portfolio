"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { useState } from "react"
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { mobileLinks } from "../portfolio";
import Link from "next/link";


export default function NavMobile() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <Sheet className="" open={isOpen} onOpenChange={setIsOpen} >
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src={'/images/logo.svg'} width={150} height={150} alt={''} />
                </Link>
                <SheetTrigger className="text-4xl" onClick={() => setIsOpen(true)}>
                    <IoMdMenu />
                </SheetTrigger>
            </div>
            <SheetContent className="bg-[#272728] border-none text-white">
                <div className="flex items-center">
                    <SheetHeader className="mt-7">
                        <SheetTitle>
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <Image src={'/images/logo.svg'} width={150} height={150} alt={''} />
                            </Link>
                        </SheetTitle>
                        <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
                        <ul className="w-full flex flex-col gap-10 justify-center text-left text-xl mt-10">
                            {mobileLinks.map((link, index) => (
                                <li key={index} className="text-white uppercase font-semibold">
                                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </SheetHeader>
                </div>
            </SheetContent>
        </Sheet >
    )
}
