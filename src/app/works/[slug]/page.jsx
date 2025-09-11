import React from 'react'
import { workData } from '@/app/portfolio'
import Image from 'next/image'
import WorkCard from '@/app/components/WorkCard'
import Link from 'next/link'
import Title from '@/app/components/Title'

export default async function WorkDetailsPage({ params }) {

  const { slug } = await params

  const workInfo = workData.find(work => work.name.toLowerCase().replace(/\s+/g, '-') === slug)

  const src = workInfo.image

  const relatedWorks = workData.filter((card) => card.category === workInfo.category && workInfo.name !== card.name || card.type === workInfo.type && workInfo.name !== card.name)

  const relatedWorksCard = relatedWorks.map((card, index) => (
    <Link href={slug} key={index}>
      <WorkCard src={card.image} title={card.name} desc={card.description} year={card.year} cat={card.category} liveDemo={card.liveDemoLink} repoLink={card.repoLink} />
    </Link>
  )).slice(0,3)
  return (
    <div className='min-h-screen px-8 md:px-16 2xl:px-48'>
      <Image src={`/images/${src}.png`} width={500} height={500} alt={workInfo.name} />
      <h1>{workInfo.name}</h1>

      <section>

        <Title text="Related Projects"/>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 space-x-10 space-y-5 my-20'>
          {relatedWorksCard}
        </div>
      </section>
    </div>
  )
}
