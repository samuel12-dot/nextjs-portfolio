import React from 'react'

export default function FormButton({ text }) {
    return (
        <button className='my-10 bg-[#E7C285] uppercase h-[50px] w-[200px] rounded-md border-1 border-[hsla(37,100%,89%,90)] transition-border duration-300 cursor-pointer'>{text}</button>
    )
}
