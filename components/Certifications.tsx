"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { FaLocationArrow } from "react-icons/fa"; // Import icon if needed

const Certifications = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>
      <div className="my-20 md:grid md:grid-cols-3 grid-cols-1 md:gap-4 justify-center relative flex flex-col gap-5">
        {/* Top Row Cards */}
        <Card 
          title="Salesforce Developer Virtual Internship" 
          icon={<AceternityIcon order="Certificate 1" />} 
          colorClass="bg-emerald-900" 
          colors={[[0, 128, 0]]} 
          link="https://smartinternz.com/internships/salesforce_certificates/6aa21dd9979a2b2d07e367e25963ba1e" 
        />
        <Card 
          title="AWS Cloud Virtual Internship Certificate" 
          icon={<AceternityIcon order="Certificate 2"/>} 
          colorClass="bg-red-900" 
          colors={[[255, 0, 0]]} 
          link="https://drive.google.com/file/d/1qtTpNBYrg_NGm_MBbV3s2SDvcNbr-BlX/view" 
        />
        <Card 
          title="Excelerate Project Management Virtual Internship" 
          icon={<AceternityIcon order="Certificate 3"/>} 
          colorClass="bg-sky-600" 
          colors={[[125, 211, 252]]} 
          link="https://drive.google.com/file/d/1c3TtQXHXwwr6KXbksZbcTCgP9GxCvuQ9/view" 
        />

        {/* Second Row Cards - Centered beneath the top row */}
        <div className="md:col-span-3 md:grid md:grid-cols-2 lg:gap-3 md:gap-2 justify-center mt-4 flex flex-col gap-5">
          <Card 
            title="AWS AI-ML Virtual Internship Certificate" 
            icon={<AceternityIcon order="Certificate 4"/>} 
            colorClass="bg-indigo-900" 
            colors={[[75, 0, 130]]} 
            link="https://drive.google.com/file/d/13R7pJCFLiUks4tRjDCKscUyo90MMbjj-/view" 
          />
          <Card 
            title="Building Incredible Chatbots - Infosys" 
            icon={<AceternityIcon order="Certificate 5"/>} 
            colorClass="bg-yellow-500" 
            colors={[[255, 223, 0]]} 
            link="https://drive.google.com/file/d/16yd2UqjU92bJKJ3OknwNnnNJ8FQUhtVl/view" 
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  colorClass,
  colors,
  link
}: {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  colors?: number[][];
  link: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[15rem] bg-black transition-all duration-300 ${hovered ? colorClass : "bg-black"} rounded-2xl overflow-hidden`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect animationSpeed={5} containerClassName={colorClass} colors={colors} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 mt-8 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>

        {/* Link with text and icon only, visible on hover */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`absolute top-[75%] left-1/2 transform -translate-x-1/2 transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <span className="flex items-center gap-2 text-white font-semibold pt-7">
            View Certificate <FaLocationArrow />
          </span>
        </a>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: {order: string}) => {
  return (
    <div className="justify-center align-middle">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export default Certifications;
