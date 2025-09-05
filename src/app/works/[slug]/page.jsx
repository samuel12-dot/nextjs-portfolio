import React from 'react'
import { workData } from '@/app/portfolio'
import Image from 'next/image'

export default async function WorkDetailsPage({params}) {

    const { slug } = await params

    const workInfo = workData.find(work => work.name.toLowerCase().replace(/\s+/g, '-') === slug)

    const src = workInfo.name
  return (
    <div className='min-h-screen px-8 md:px-16 2xl:px-48'>
        <Image src={`/images/${src}.png`} width={500} height={500} alt={workInfo.name}/>
        <h1>{workInfo.name}</h1>
    </div>
  )
}
