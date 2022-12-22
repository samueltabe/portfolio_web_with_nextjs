import React from 'react'
import ProjectItems from './ProjectItems'
import propertyImg from '../public/asset/projects/property.jpg'
import cryptoImg from '../public/asset/projects/crypto.jpg'
import netflixImg from '../public/asset/projects/netflix.jpg'
import twitchImg from '../public/asset/projects/twitch.jpg'

function Project() {
  return (
    <div id='project' className='w-full my-52'>
       <div className='max-w-6xl mx-auto px-4'>
            <p className='text-2xl px-4 font-bold tracking-wide text-orange-400'>Projects</p>
            <h2 className='text-xl font-semibold py-4 px-4'>What I have built</h2>
            <div className='grid md:grid-cols-2 gap-8 px-4'>
                
              <ProjectItems
              title='Property Finder' 
              backgroundImg={propertyImg} 
              projectUrl='/propery'
              />

              <ProjectItems
              title='Crypto App' 
              backgroundImg={cryptoImg} 
              projectUrl='/propery'
              />

              <ProjectItems
              title='Movie App' 
              backgroundImg={netflixImg} 
              projectUrl='/propery'
              />

              <ProjectItems
              title='Property Finder' 
              backgroundImg={twitchImg} 
              projectUrl='/propery'
              />

            </div>
       </div>
    </div>
  )
}

export default Project