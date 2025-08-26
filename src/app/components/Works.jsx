import React from 'react'
import InactiveButton from './InactiveButton'
import Image from 'next/image'

export default function Works() {
  return (
    <div className='mx-40 mb-40'>
        <h2 className='h2'>Explore my most<br />recent creations</h2>
        <InactiveButton text="View All"/>


<div className='grid grid-cols-2 gap-x-5 gap-y-5'>

        <div>
            <Image src={'/images/thumbnail1.png'} width={500} height={800} alt={''} className='rounded-2xl scale-100 hover:scale-110 cursor-pointer transition:scale duration-500 hover:rounded-sm transition:rounded'/>
        </div>
        <div>
            <Image src={'/images/thumbnail1.png'} width={500} height={800} alt={''} className='rounded-2xl scale-100 hover:scale-110 cursor-pointer transition:scale duration-500 hover:rounded-sm transition:rounded'/>
        </div>
        <div>
            <Image src={'/images/thumbnail1.png'} width={500} height={800} alt={''} className='rounded-2xl scale-100 hover:scale-110 cursor-pointer transition:scale duration-500 hover:rounded-sm transition:rounded'/>
        </div>
        <div>
            <Image src={'/images/thumbnail1.png'} width={500} height={800} alt={''} className='rounded-2xl scale-100 hover:scale-110 cursor-pointer transition:scale duration-500 hover:rounded-sm transition:rounded'/>
        </div>

</div>


    </div>
  )
}
