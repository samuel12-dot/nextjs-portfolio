import React from 'react'
import { workData } from '../portfolio'
import WorkCard from './WorkCard'

export default function AllWorks() {

    const workCards = workData.map((work, index) => (
        <WorkCard key={index} src={work.image} title={work.name} desc={work.description} year={work.year}/>
    )).slice(0,4)

  return (
    <div className='mx-48 grid xl:grid-cols-2 grid-cols-1 gap-20'>{workCards}</div>
  )
}
