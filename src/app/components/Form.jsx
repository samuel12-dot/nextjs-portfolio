import React from 'react'
import LabelData from './LabelData'
import InputData from './InputData'

export default function Form() {
    return (
        <form>

            <div className='mt-40'>
                <LabelData name="Name" />
                <InputData type="name" id="name" placeholder="Enter your name here" />
            </div>

            <div className='my-10'>
                <LabelData name="Email Address" />
                <InputData type="email" id="email" placeholder="Enter your email" />
            </div>

            <div>
                <LabelData name="Company Name" />
                <InputData type="company-name" id="company-name" placeholder="Enter your company name" />
            </div>

            <div className='my-10'>
                <LabelData name="Your Budget" />
                <InputData type="budget" id="budget" placeholder="Enter your budget here" />
            </div>

        </form>
    )
}
