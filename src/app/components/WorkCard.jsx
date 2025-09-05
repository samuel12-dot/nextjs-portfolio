import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function WorkCard({ src, title, desc, year, cat }) {
    return (
        <section className=''>
            <Link href={`/works/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Image src={`/images/${src}.png`} width={500} height={500} alt={title} className='scale-100 hover:scale-105 transition:hover duration-500 rounded-xl hover:rounded-none transition:rounded mb-10'/>
            </Link>
            <h2 className='flex flex-col items-start sm:flex-col md:flex-row md:justify-between sm:items-start font-bold text-xl'>
                <span>{title}</span>
                <span>{year}</span>
            </h2>

            <p className='font-medium my-2 text-[#E7C285] text-left'>{cat}</p>
            <p className='p'>{desc}</p>
        </section>
    )
}
