"use client"
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

import React from 'react'
import { statsData } from '../portfolio'

const Stats = () => {

    const ref = useRef(null)
    const inView = useInView(ref, {treshold: 0.2})
  return (
    <div ref={ref} className='flex mx-auto'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 text-center w-full'>

            {statsData.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center border-2 border-[#A4A4A4] rounded-full h-60 w-60'>

                    <div className='text-[#A4A4A4] font-semibold text-5xl'>
                        {inView && 
                        (<CountUp 
                            start={0}
                            end={item.endCountNum}
                            delay={0.10}
                            duration={3}

                        
                        />)}
                        <span>{item.endCountText}</span>
                    </div>
                    <p className='p'>{item.text}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Stats
