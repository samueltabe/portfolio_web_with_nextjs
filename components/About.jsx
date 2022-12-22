import React from 'react'

function About() {
  return (
    <div id='about' className='w-full my-20 p-2 flex items-center'>
      <div className=' max-w-6xl m-auto md:grid grid-cols-3 gap-8'>
        <div className=' col-span-2 p-8'>
            <p className=' text-2xl font-bold tracking-wide text-orange-400'>About Me  </p>
            <h2 className='py-2 text-gray-700 text-lg font-semibold'>Who I am</h2>
            <p className='text-gray-600 tracking-wide'>
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
            <p className='text-gray-600 underline cursor-pointer'>
              Checkout more details about me 
            </p>
        </div>
        <div className='w-full m-auto p-4 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
