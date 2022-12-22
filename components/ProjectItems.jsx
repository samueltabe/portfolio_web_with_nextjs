import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectItems({title, backgroundImg, projectUrl}) {
  return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-orange-300 to-orange-700'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wide text-center'>{title}</h3>
                <p className='text-lg text-white text-center py-3'>React Js</p>
                <Link href={projectUrl}>
                    <p className='text-center py-1 rounded-full bg-white font-semibold cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>
  )
}

export default ProjectItems
