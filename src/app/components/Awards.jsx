import React from 'react'
import Title from './Title'
import { awards } from '../portfolio'


export default function Awards({styles}) {
    return (
        <section className={`${styles} my-32`}>

            <div className='flex flex-col lg:flex-row items-start justify-between gap-20'>

                <div>
                    <Title text="Awards &" color="text-white" />
                    <Title text="Recognition" color="text-[#E7C285]" />
                    <p className='p sm:max-w-lg'>Highlighting notable achievements and milestones in my journey as a developer.</p>
                </div>

                <div className='flex-1 w-full'>{awards.map((section, index) => (

                    <section key={index}>

                        <div>
                            <h5 className='h5'>{section.title}</h5>
                        </div>

                        <div className='flex items-center gap-2 text-[#777777]'>
                            <p>{section.year}</p>
                            <span>-</span>
                            <p>{section.name}</p>
                        </div>

                        <hr className='my-10 w-full' />

                    </section>

                ))}</div>


            </div>


        </section>
    )
}
