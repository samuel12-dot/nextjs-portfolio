import React from 'react'
import { workData } from '../portfolio'
import WorkCard from './WorkCard'

export default function AllWorks() {

    const workCards = workData.map((work, index) => (
        <WorkCard key={index} src={work.image} title={work.name} desc={work.description} year={work.year} cat={work.category}/>
    )).slice(0,6)

  return (
    <div className='mx-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>{workCards}</div>
  )
}
