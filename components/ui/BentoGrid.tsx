'use client'

import { cn } from "@/lib/utils";
// import { line, object } from "framer-motion/client";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
// import { animate } from "framer-motion";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaLocationArrow } from 'react-icons/fa'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  function handleCopy(): void {
    navigator.clipboard.writeText('mdrohitreddy@gmail.com');
    setCopied(true);
  }

  function redirectCurrentWork(): void {
    window.open('https://slu-cyberbillikens.vercel.app/', '_blank');
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-3 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
            {img && id!==1 && (
                <img
                    src={img}
                    className={cn(imgClassName, 'object-cover, object-center')}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
            {spareImg && (
                <img
                src={spareImg}
                alt={spareImg}
                className={'object-cover object-center w-full h-full'}
                />
            )}
            </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/* <div className=" absolute z-50 flex items-center justify-center text-white font-bold"/> */}
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
                    id === 1 ? 'p-0 lg:p-5' : ''
                    )}>
                        {id !== 1 && (
                          <>
                        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                            {description}
                        </div>
                        <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
                            {title}
                        </div>
                        </>
                        )}

                        {id === 2 && <GlobeDemo />}

                        {id === 3 && (
                            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-4 lg:-right-2">
                                <div className="flex flex-col gap-3 lg:gap-3">
                                  {[,'React.JS', 'Express.JS', 'Node.js', 'TypeScript'].map((item) => (
                                    <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                      {item}
                                    </span>
                                  ))}
                                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                                  </div>
                                <div className="flex flex-col gap-3 lg:gap-3">
                                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                                  {['Next.JS', 'MongoDB', 'AWS', 'Tailwind'].map((item) => (
                                    <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                      {item}
                                    </span>
                                  ))}
                                  </div> 
                                  </div>)
                                  }
                        {id === 6 && (
                          <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                              <Lottie options={{
                                loop: copied,
                                autoplay: copied,
                                animationData,
                                rendererSettings: {
                                  preserveAspectRatio: "xMidYMid slice",
                                }
                              }}/>
                            </div>

                            <MagicButton 
                              title={copied ? 'Email Copied!' : 'Copy my email'}
                              icon={<IoCopyOutline />}
                              position="left"
                              otherClasses="!bg-[#161a31]"
                              handleClick={handleCopy}
                            />
                          </div>
                        )}

                        {id === 5 && (
                          <MagicButton 
                          title={"Check out my work"}
                          icon={<FaLocationArrow />}
                          position="right"
                          otherClasses="!bg-[#161a31]"
                          handleClick={redirectCurrentWork}
                        />
                        )}


                          {id === 1 && (
                            <div className=" h-54 flex flex-col items-center justify-center relative p-3 md:p-6 rounded-3xl bg-gradient-to-br from-[#0d0d1b] to-[#10132E] shadow-xl transform hover:scale-105 transition-transform duration-300 ease-out">

                              {/* Image Section */}
                              <div className="relative w-[70%] h-54 rounded-3xl overflow-hidden mb-6 group">
                                <img
                                  src={img}  // Assuming the image file is linked properly
                                  alt="Profile"
                                  className={cn(imgClassName, 'object-cover w-full h-full rounded-3xl transition-transform duration-500 group-hover:scale-110')}
                                />
                                {/* Floating Icon Overlay on Hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                                  <div className="text-white text-2xl font-bold">👋 Hello There!</div>
                                </div>
                              </div>

                              {/* Information Section */}
                              <div className="text-center space-y-4">
                                <h2 className="text-2xl font-extrabold text-white tracking-wide mb-2">Rohit Reddy Musukudabbidi</h2>
                                <p className="text-md font-light text-gray-300 leading-relaxed max-w-xs">
                                  Full-Stack Developer | AWS Enthusiast | Passionate about crafting scalable, high-performance web applications.
                                </p>

                                {/* Animated Tech Skill Badges */}
                                <div className="justify-center mt-6 space-x-3 hidden lg:flex">
                                  {["MERN Stack", "AWS", "Project Management"].map((skill, index) => (
                                    <div key={index} className="relative group">
                                      <span className="bg-[#1c1e38] text-white py-2 px-4 rounded-lg text-sm font-semibold shadow-md transform transition-transform duration-300 group-hover:scale-110">
                                        {skill}
                                      </span>
                                      {/* Hover effect */}
                                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Floating Action Button */}
                              <div className="absolute hidden -bottom-8 right-8 bg-pink-500 p-3 rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4v8" />
                                </svg>
                              </div>
                            </div>
                          )}





                </div> 
      </div>
    </div>
  );
};
