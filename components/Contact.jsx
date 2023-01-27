import React from 'react'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

function Contact() {
  return (
    <div id='contact' className='w-full my-52 lg:h-screen'>
        <div className='max-w-6xl mx-auto px-4'>
           <p className='text-2xl px-4 font-bold tracking-wide text-orange-400'>My Contact</p>
           <h2 className=' text-xl font-semibold py-4 px-4'>Get In Touch</h2>
           <div className='grid lg:grid-cols-5 gap-8'>
                {/*left section */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full rounded-xl'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div>
                            <h2 className='py-2 text-xl text-orange-300 font-semibold'>Name Here</h2>
                            <p>Data Analyst</p>
                            <p className='py-4'>I am available for freelance or full time position. Contact me let&apos;s talk</p>
                        </div>
                        <div>
                        <p className='text-xl pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                            <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-4 cursor-pointer'>
                                <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-4 cursor-pointer'>
                                <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-4 cursor-pointer'>
                                <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-lg hover:scale-110  shadow-gray-400 p-4 cursor-pointer'>
                                <BsFillPersonLinesFill/>
                            </div>
                        </div>
                    </div>
                    </div> 
                </div>
                {/*right section */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                   <div className='p-4'>
                        <form
                        action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                        method='POST'
                        encType='multipart/form-data'
                        >
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input className='border-2 rounded-lg p-1 flex border-gray-300' type='text' name='name' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input className='border-2 rounded-lg p-1 flex border-gray-300' type='text' name='phone'/>
                            </div>
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-1 flex border-gray-300' type='email' name='email' />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-1 flex border-gray-300' type='text' name='subject' />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
                        </div>
                        <div className='text-center'>
                            <button className=' w-[33.3%]  p-2 rounded-full text-white bg-orange-600 mt-4'>
                                Send Message
                            </button>
                        </div>
                        
                        </form>
                   </div>
                </div>
           </div>
           <div className='flex justify-center py-12'>
                <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-orange-400' size={20}/>
                </div>
                </Link>
            </div>
        </div>
 </div>
  )
}

export default Contact  