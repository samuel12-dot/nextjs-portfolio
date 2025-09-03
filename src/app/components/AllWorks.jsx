import React from 'react'
import { workData } from '../portfolio'
import WorkCard from './WorkCard'

export default function AllWorks() {

    const workCards = workData.map((work, index) => (
        <WorkCard key={index} src={work.image} title={work.name} desc={work.description} year={work.year} cat={work.category}/>
    )).slice(0,6)

  return (
    <div className='px-8 md:px-16 2xl:px-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 2xl:gap-10'>{workCards}</div>
  )
}
