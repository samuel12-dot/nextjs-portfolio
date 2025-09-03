import React from 'react'

export default function InputData({type, placeholder}) {
  return (
    <input type={type} name={type} id={type} placeholder={placeholder} className='block text-sm border-b-1 w-full pt-2 pb-5' />
  )
}
