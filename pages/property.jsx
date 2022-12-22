import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import propertyImg from '../public/asset/projects/property.jpg'

function property() {
  return (
    <div className='w-full mb-20'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' src={propertyImg} alt='/'/>
            <div className='absolute top-[70%] max-w-6xl w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10'>
              <h2 className='py-2 text-3xl font-bold'>Property Finder</h2>
              <h3 className='text-xl'>React Js / Tailwind / Firebase</h3>
            </div>
        </div>
        <div className='max-w-6xl grid-cols-5 gap-8 pt-8 mx-auto p-2 grid md:'>
           <div className='col-span-4'>
              <p className=' text-2xl font-bold tracking-wide text-orange-400'>About Me  </p>
              <h2 className='py-2 text-gray-700 text-lg font-semibold'>Who I am</h2>
              <p>
                Vestibulum tempor urna ut nisi sollicitudin elementum. Praesent 
                a feugiat libero, vel placerat est. Nulla enim sem, malesuada vel 
                mollis id, dictum ac lorem. Donec ultrices venenatis scelerisque. 
                Morbi dapibus scelerisque tortor eu feugiat. Praesent ultrices 
                justo at est posuere pellentesque sed sed ante. Sed volutpat
                augue sit amet mattis. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Aenean dictum, ipsum sit amet viverra feugiat, 
                lacus elit sollicitudin massa, vitae hendrerit odio nisl eget libero. 
                Morbi bibendum enim nec odio tempus, ac pellentesque neque consectetur.  
              </p>
              <button className='px-8 py-2 font-semibold mt-4 bg-orange-500 text-white rounded-full mr-8'>Demo</button>
              <button className='px-8 py-2 font-semibold mt-4 bg-orange-500 text-white rounded-full'>Code</button> 
           </div>

           <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default property
