import React from 'react'
import { skills } from '../portfolio'
import Image from 'next/image'
import Title from './Title'

export default function Skills({ styles }) {
    return (
        <section className={`${styles} my-32 flex flex-col md:flex-row items-start justify-between`}>

            <div className='flex-1'>
                <Title text="My" color="text-white" />
                <Title text="Skills" color="text-[#E7C285]" />
            </div>

            <div className='grid grid-col-1 space-y-10 space-x-8 sm:grid-cols-2 md:grid-cols-3'>

                {skills.map((items, index) => (
                    <div key={index} className=''>

                        <div className='flex items-center gap-2'>
                            <Image src={items.src} width={50} height={50} alt={''} />
                            <h6 className='h6'>{items.name}</h6>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
