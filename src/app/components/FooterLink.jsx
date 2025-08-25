import React from 'react'
import Link from 'next/link'

export default function FooterLink({li, link}) {
  return (
    <li>
        <Link href={link}>{li}</Link>
    </li>
  )
}
