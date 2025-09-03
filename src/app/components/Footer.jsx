import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerData } from '../portfolio'



export default function Footer() {
    return (
        <footer className='pl-48 py-10 bg-[#E7C285] text-black'>

            <div className='flex items-start justify-between'>
                <Image src={'/images/dark-logo.svg'} width={150} height={150} alt={''} className='mr-40'/>
                <div className='flex-1 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>{footerData.map((section, index) => {
                    return (
                        <div key={index}>
                            <h4 className='font-bold text-xl mb-2'>{section.title}</h4>
                            <ul>{section.links.map((link, i) => {
                                return (
                                    <li key={i} className='capitalize font-medium hover:text-white mb-1 transition-color duration-300'>
                                        <Link href={link.path}>{link.name}</Link>
                                    </li>
                                )
                            })}</ul>
                        </div>
                    )
                })}</div>
            </div>


            <div className='mt-5'>
                <p>&copy; The samuel ayodeji. All rights reserved</p>
            </div>
        </footer>
    )
}
