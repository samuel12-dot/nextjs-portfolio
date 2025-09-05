import React from 'react'
import DescriptionText from '../components/DescriptionText'
import Form from '../components/Form'

export default function Contact() {
  return (
    <section className='min-h-screen px-8 md:px-16 2xl:px-48 my-32'>

      <div className='flex flex-col items-start sm:flex-row sm:gap-10 md:items-end justify-between'>

        <div className=''>
          <DescriptionText text="contact me" />
          <h2 className="h2 text-left text-nowrap">Say Hi! and tell me<br />about your idea.</h2>
        </div>

        <p className="p sm:max-w-[650px]">Do you have a dream project that's been brewing in your mind, waiting for the right moment to take flight? I'd love to hear all about it and discuss how we can turn that vision into reality.</p>

      </div>

      <Form />


    </section>
  )
}
