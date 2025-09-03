import React from 'react'
import Title from './Title'
import Button from './Button'
import MainTitle from './MainTitle'

export default function Cta() {
  return (
    <section className='my-32 mx-48'>

        <div className='flex flex-col items-center justify-center bg-[#272728] py-28 space-y-5 rounded-3xl'>
            <MainTitle text="Let's discuss about project" color=""/>
            <Button text="Work with me"/>
        </div>

    </section>
  )
}
