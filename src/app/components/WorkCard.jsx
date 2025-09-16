import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";



export default function WorkCard({ src, title, desc, year, cat, liveDemo, repoLink }) {
    return (
        <section className=''>
            <Link href={`/works/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Image src={`/images/${src}.png`} width={500} height={500} alt={title} className='scale-100 hover:scale-105 transition:hover duration-500 rounded-xl hover:rounded-none transition:rounded mb-10' />
            </Link>
            <h2 className='flex flex-col items-start sm:flex-col md:flex-row md:justify-between sm:items-start font-bold text-xl'>
                <span>{title}</span>
                <span>{year}</span>
            </h2>

            <p className='font-medium my-2 text-[#E7C285] text-left'>{cat}</p>
            <p className='p'>{desc}</p>

            <div className='flex justify-between mt-5'>


                {liveDemo && (
                    <Link href={liveDemo} target="_blank" rel="noopener noreferrer" className='bg-[#E7C285] py-2.5 px-6 rounded-md capitalize'>
                        <span>live demo</span>
                    </Link>

                )}

                {repoLink && (
                    <Link href={repoLink} target="_blank" rel="noopener noreferrer">
                        <div className='flex items-center gap-3'>

                            <span>
                                <FaGithub className="text-[#E7C285] transition-colors duration-300" />
                            </span>

                            <span className='text-[#E7C285] capitalize'>repo</span>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
}
