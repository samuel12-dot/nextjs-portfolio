import React from 'react'
import Link from 'next/link'

export default function LiveDemoBtn({ text }) {
    return (
        <Link>
            <Button type="button">{text}</Button>
        </Link>
    )
}
