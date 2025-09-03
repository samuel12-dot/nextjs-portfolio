import React from 'react'
import { socials } from '../portfolio'
import Link from 'next/link'

export default function Socials() {
  return (
    <div>
        {socials.map((item, index) => (
            <ul key={index}>
                <li>
                    <Link href={item.href}>{item.icon}</Link>
                </li>
            </ul>
        ))}
    </div>
  )
}
