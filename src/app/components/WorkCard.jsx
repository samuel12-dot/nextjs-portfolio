import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function WorkCard({ src, title, desc, year }) {
    return (
        <section>
            <Link href={`/works/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Image src={`/images/${src}.png`} width={800} height={800} alt={title} className='scale-100 hover:scale-105 transition:hover duration-300 rounded-xl hover:rounded-none transition:rounded mb-10'/>
            </Link>
            <h2 className='flex items-center justify-between'>
                <span className='font-bold'>{title}</span>
                <span className='font-bold'>{year}</span>
            </h2>

            <p className='p'>{desc}</p>
        </section>
    )
}
