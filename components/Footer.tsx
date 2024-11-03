import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <div className='w-full pb-10' id="contact">
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
            Looking for passionate intern? <span className='text-purple'>I'm here</span> to make an impact!
            </h1>
            <p className='text-white-200 md:mt-10 my-5'>I am actively seeking internship opportunities where I can contribute and grow. Feel free to reach out if you're interested in collaborating.</p>
            <a href='mailto:mdrohitreddy@gmail.com'>
                <MagicButton title='Lets get in touch' position='center' icon={<FaLocationArrow/>} />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light mb-2.5 sm:mb-0'>Copyright © 2025 Rohit</p>
            <div className='flex items-center md:gap-3 gap-6'>
    {socialMedia.map((profile) => (
        <a
            key={profile.id}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
        >
            <img src={profile.img} alt={"profile.id"} width={20} height={20} />
        </a>
    ))}
</div>

        </div>
    </div>
  )
}

export default Footer
