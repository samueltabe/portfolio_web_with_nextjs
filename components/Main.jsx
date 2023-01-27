import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='capitalize tracking-wider text-gray-600'>Securing your data for efficiency</p>
                <h1 className='capitalize py-4 text-gray-700 text-5xl font-bold'>Hi, I&apos; m <span className='text-orange-400'>Samtabe</span></h1>
                <h1 className='capitalize py-2  text-gray-700 text-5xl font-bold'>
                    I&apos; m a data analyst
                </h1>
                <p className='py-4 text-gray-600 max-w-[65%] m-auto'>
                    There are many variations of passages of 
                    Lorem Ipsum available, but the majority have 
                    suffered alteration in some form, by injected 
                    humour, or randomised words which dont look even
                    suffered alteration in some form, by injected 
                    humour, or randomised words which dont look even
                    suffered alteration in some form, by injected 
                    humour, or randomised words which dont look even 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-6 cursor-pointer'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-6 cursor-pointer'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-6 cursor-pointer'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-6 cursor-pointer'>
                        <BsFillPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main