import React from 'react'
import Title from './Title'
import Button from './Button'

export default function Cta() {
  return (
    <section className='my-32 mx-48'>

        <div className='flex flex-col items-center justify-center bg-[#272728] py-28 space-y-5'>
            <Title text="Let's discuss about" color=""/>
            <Title text="project" color=""/>

            <Button text="Work with me"/>
        </div>

    </section>
  )
}
