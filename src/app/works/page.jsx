"use client"

import React from 'react'
import { useState } from 'react'
import { workData } from '../portfolio'
import WorkCard from '../components/WorkCard'
import Link from 'next/link'

export default function Works() {


  const [searchProject, setSearchProject] = useState('')

  function filterSearch(e) {
    setSearchProject(e.target.value)
  }

  const filterLists = workData.filter(work => work.name.toLowerCase().includes(searchProject.toLowerCase()) || work.category.toLowerCase().includes(searchProject.toLowerCase()))

  const cards = filterLists.length == 0 ? (<h1>Sorry, search item does not exist.</h1>) : filterLists.map((card, index) => (
    <section key={index}>
      <Link href={`/works/${card.name.toLowerCase().replace(/\s+/g, '-')}`} className='cursor-pointer'>
        <WorkCard src={card.image} title={card.name} desc={card.description} year={card.year} />
      </Link>
    </section>
  ))

  return (
    <div className='mx-48'>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchProject}
        onChange={filterSearch}
        className="w-1/2 block mx-auto p-2 my-14 border border-gray-300 rounded-lg"
      />

      {/* Projects Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards}
      </div>
    </div>
  )
}
