import React from 'react'

export default function InputText({placeholder}) {
  return (
    <textarea placeholder={placeholder} className='block border-b-1 text-sm outline-0 resize-none w-full h-40 mt-2'></textarea>
  )
}
