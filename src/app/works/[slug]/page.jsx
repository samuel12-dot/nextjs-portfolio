import React from 'react'
import { workData } from '@/app/portfolio'
import Image from 'next/image'
import WorkCard from '@/app/components/WorkCard'
import Link from 'next/link'
import Title from '@/app/components/Title'
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


export default async function WorkDetailsPage({ params }) {

  const { slug } = await params

  const workInfo = workData.find(work => work.name.toLowerCase().replace(/\s+/g, '-') === slug)

  const src = workInfo.image

  const relatedWorks = workData.filter((card) => card.category === workInfo.category && workInfo.name !== card.name || card.type === workInfo.type && workInfo.name !== card.name)

  const relatedWorksCard = relatedWorks.map((card, index) => (
    <Link href={slug} key={index}>
      <WorkCard src={card.image} title={card.name} desc={card.description} year={card.year} cat={card.category} liveDemo={card.liveDemoLink} repoLink={card.repoLink} />
    </Link>
  )).slice(0, 3)
  return (
    <section className='min-h-screen px-8 md:px-16 2xl:px-48'>

      <div className='flex flex-col md:flex-row items-center gap-20 mt-20'>



        <Image src={`/images/${src}.png`} width={500} height={500} alt={workInfo.name} />

        <div>


          <h2 className='font-bold text-4xl my-4'>{workInfo.name}</h2>

          <p className='max-w-xl p mb-10'>{workInfo.fullDescription}</p>

          <div className='my-5'>
            <h6 className='text-[#E7C285] text-xl my-2'>Category</h6>
            <p className='p text-lg'>{workInfo.category}</p>
          </div>

          <div className='my-5'>
            <h6 className='h6 text-[#E7C285] text-xl my-2'>Type</h6>
            <p className='p text-lg'>{workInfo.type}</p>
          </div>

          <div className='my-5'>
            <h6 className='h6 text-[#E7C285] text-xl my-2'>Year</h6>
            <p className='p text-lg'>{workInfo.year}</p>
          </div>

            <h5 className='h6 text-[#E7C285]'>Websites</h5>
          <div className='flex items-center gap-10 mt-5'>
            {workInfo.liveDemoLink && (
              <Link href={workInfo.liveDemoLink} target="_blank" rel="noopener noreferrer" className='bg-[#E7C285] py-2.5 px-6 rounded-md capitalize'>
                <span>live demo</span>
              </Link>

            )}

            {workInfo.repoLink && (
              <Link href={workInfo.repoLink} target="_blank" rel="noopener noreferrer">
                <div className='flex items-center gap-3'>

                  <span>
                    <FaGithub className="text-[#E7C285] transition-colors duration-300" />
                  </span>

                  <span className='text-[#E7C285] capitalize'>repo</span>
                </div>
              </Link>
            )}

          </div>



        </div>


      </div>

      <div className='mt-20 mb-40'>
        <h3 className='h3'>Overview</h3>
        <p className='p max-w-2xl my-5'>{workInfo.overview}</p>

        <ul>{workInfo.overviewDescription.map((desc, index) => (
          <li key={index} className='flex items-center gap-2 p'>
            <GoDotFill />
            <span>{desc}</span>
          </li>
        ))}</ul>

      </div>

      <section>

        <h4 className='text-3xl font-bold'>Related Projects</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-10 space-y-5 my-20'>
          {relatedWorksCard}
        </div>
      </section>
    </section>
  )
}
