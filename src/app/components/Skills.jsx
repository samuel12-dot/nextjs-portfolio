import React from 'react'
import { skills } from '../portfolio'
import Image from 'next/image'
import Title from './Title'

export default function Skills() {
    return (
        <section className="my-32">
            <Title text="My" color="text-white"/>
            <Title text="Skills" color="text-[#E7C285]" />

            {skills.map((items, index) => (
                <div key={index}>

                    <Image src={items.src} width={50} height={50} alt={''} />
                    <h6 className='h6'>{items.name}</h6>

                </div>
            ))}
        </section>
    )
}
