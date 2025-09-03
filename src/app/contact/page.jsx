import React from 'react'
import DescriptionText from '../components/DescriptionText'
import Form from '../components/Form'

export default function Contact() {
  return (
    <section className='min-h-screen mx-48'>

      <div className='flex items-end justify-between'>

        <div className=''>
          <DescriptionText text="contact me" />
          <h2 className="h2">Say Hi! and tell me<br />about your idea.</h2>
        </div>

        <p className="p max-w-[650px]">Do you have a dream project that's been brewing in your mind, waiting for the right moment to take flight? I'd love to hear all about it and discuss how we can turn that vision into reality.</p>

      </div>

      <Form />


    </section>
  )
}
