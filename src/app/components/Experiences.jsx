import React from 'react'
import { experiences } from '../portfolio'
import Title from './Title'

export default function Experiences() {
    return (
        <section className="my-32">
            <Title text="My" />
            <Title text="Experiences" color="text-[#E7C285]" />

            <div>{experiences.map((section, index) => (

                <section key={index}>

                    <div className='flex items-center justify-between'>

                        <div>
                            <h5 className='h5'>{section.title}</h5>
                            <h6 className='h6'>{section.company}</h6>
                        </div>

                        <div className='flex items-center gap-2 text-[#777777]'>
                            <p>{section.startDate}</p>
                            <span className='text-5xl'>&middot;</span>
                            <p>{section.endDate}</p>
                        </div>

                    </div>
                    <hr className='my-10' />

                </section>

                //Awards and Recognitions

            ))}</div>
        </section>
    )
}
