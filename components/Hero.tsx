import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'; // Import Image component
import myimage from './myimage.png'

const Hero = () => {
  return (
    <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 maw-w-80 mb-6 md:mb-0'>
          Rohit Reddy Musukudabbidi.
        </h2>
        

          <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-auto'>
              <Image
                src={myimage}
                alt='Hero Image'
                width={1300} // Adjusted for mobile
                height={1800} // Adjusted for mobile
                className='rounded-lg md:mb-0 mr-0 md:mr-6' // Add margin bottom on mobile and margin right on desktop
              />
            </div>

            <TextGenerateEffect
              words='Building seamless digital experiences.'
              className='text-center text-[30px] md:text-5xl lg:text-6xl md:ml-8' // Reduced font size on mobile, added margin-left for larger screens
            />
          </div>


      <p className='relative text-center md:tracking-wider mb-4 text-sm md:text:lg lg:text-2xl'>
      Hi, I&apos;m Rohit, a web developer crafting seamless experiences.  
      </p>

      <a href='https://drive.google.com/file/d/17jUdCjQTvDGZAujdzGd5n7LkK8b5niFy/view?usp=sharing' target='_blank'>
        <MagicButton 
        title = "Download Resume"
        icon = {<FaLocationArrow/>}
        position = "right"
        />
      </a>  

    
      </div>
      </div>
    </div>

  )
}

export default Hero
