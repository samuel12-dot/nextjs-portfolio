import React from 'react'
import { skills } from '../portfolio'
import Image from 'next/image'

export default function Skills() {
  return (
    <div>
        {skills.map((items, index) => (
            <div key={index}>
                <Image src={items.src} width={50} height={50} alt={''}/>
                <h6>{items.name}</h6>
            </div>
        ))}
    </div>
  )
}
