import { image } from "framer-motion/client";
import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-[60%] h-[70%]",
      titleClassName: "justify-end",
      img: "/mypic.jpeg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Happy to adjust my schedule to fit everyone's time zone.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on bug fixes for Cyberbillikens",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "On the lookout for internships!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "SLU Cyber Billikens | Explore Cybersecurity",
      des: "Discover the world of cybersecurity with the SLU Cyber Billikens. A platform that provides resources and updates on cybersecurity competitions and events.",
      img: "cyberbillikens.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongo.svg", "/node.svg"],
      link: "https://slu-cyberbillikens.vercel.app/",
    },
    {
      id: 2,
      title: "NeoSmiles | Dental Practice Website",
      des: "Enhance your dental practice experience with NeoSmiles. A professional website that connects patients with expert dental care services.",
      img: "neosmiles.png",
      iconLists: ["/re.svg", "/bootstrap.svg", "/s3.svg", "/express.svg", "/c.svg"],
      link: "https://neosmiles.s3.us-east-2.amazonaws.com/index.html",
    },
    {
      id: 3,
      title: "Real-Time Polling System",
      des: "An advanced polling system that allows for real-time data collection and analysis, offering instant feedback and results using cutting-edge technology.",
      img: "polling.png",
      iconLists: ["/re.svg", "/socket.svg", "/ac.webp", "/mongo.svg", "/js.svg"],
      link: "https://realtime-polling-frontend.vercel.app/",
    },
    {
      id: 4,
      title: "AI Personalize",
      des: "Explore AI Personalize, a website showcasing AI-driven user personalization, adaptive UI designs, and cutting-edge technology integration using Bootstrap.",
      img: "aiperson.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/node.svg", "/bootstrap.svg"],
      link: "https://rmusukudabbidi.github.io/AI-Personalize/#/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
      "Earned the Best Academic Performance award in the Academic Years 2020-21 and 2021-22 for maintaining exceptional academic excellence and commitment to learning.",
    name: "Best Academic Performance Award",
    title: "Vignana Bharathi Institute of Technology",
    image: "/vbit.png",
    },
    {
      quote:
      "Secured the Best Debutant Award as a Software Intern at KEKA in the 2nd quarter (April-June 2023), recognized for outstanding performance and rapid skill development.",
    name: "Best Debutant Award",
    title: "KEKA HR Software",
    image: "/keka.svg",
    },
    {
      quote:
      "Awarded the prestigious Global Grad Scholarship by Saint Louis University, valued at $4,000, in recognition of my academic merit and commitment to academic excellence.",
    name: "Global Grad Scholarship",
    title: "Saint Louis University",
    image: "/slu2.png",
    },
    {
      quote:
      "Proudly hosted and developed challenges for the Cyber Billikens Capture The Flag (CTF) event, where students engaged in various cybersecurity challenges. Led the team in challenge development and infrastructure management for a highly successful event.",
    name: "Hosting Cyber Billikens CTF Event",
    title: "Cyberbillikens",
    image: "/cyber.png",
    },
    {
      quote:
      "Successfully organized and executed a Capture The Flag event at Saint Louis University, featuring web security, cryptography, and network forensics challenges. Contributed to event planning, challenge development, and infrastructure, resulting in a memorable and educational experience for participants.",
    name: "Cyber Billikens CTF Event Success",
    title: "Cyberbillikens",
    image: "/cyber.png",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "KEKA HR",
      img: "/keka.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "VBIT",
      img: "/vbit.png",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "EXCELERATE",
      img: "/excelerate.jpeg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "SLU",
      img: "/slu2.png",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "cyberbillikens.",
      img: "/cyber.png",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Associate Software Engineer",
      company: "KEKA HR Software",
      duration: "Jan 2023 - Aug 2023",
      desc: "Improved software reliability by reducing bugs, enhancing performance through API integrations.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
      keypoints: ["Spearheaded the identification and resolution of bugs in HR software, progressing to deploying solutions that significantly enhanced system reliability and user experience, leading to a 20% reduction in reported bugs over six months.", "Gained comprehensive experience in both client-side and server-side development, implementing API integrations and optimizing database interactions, which led to a 15% increase in application performance and responsiveness.", "Actively participated in cross-functional teams, leading to improved project coordination and a 25% reduction in development cycle time. My role involved ensuring smooth communication and integration between team members.", "Earned the Best Debutant Award for outstanding performance and contributions during the second quarter of 2023, for significantly improving the bug resolution process by reducing the average resolution time from 48 hours to 12 hours, and enhancing overall software stability."]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "NeoSmiles Dental",
      duration: "May 2024 - Aug 2023",
      desc: "Designed and launched a scalable, SEO-optimized website for increased customer engagement.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
      keypoints: ["Designed and developed a complete website for NeoSmiles Dental, incorporating user-friendly features such as a location finder, which resulted in a significant increase in customer visits.", "Integrated AWS services, including EC2, to host and manage the web application, ensuring high availability and scalability.", "Implemented SEO best practices, leading to a 15% increase in organic search traffic and improved online visibility for the dental practice.", "Enhanced user experience by adding appointment booking, service information, and patient testimonials, which contributed to a 12% increase in new patient registrations."]
    },
    {
      id: 3,
      title: "Web Developer",
      company: "SLU Cyberbillikens",
      duration: "Mar 2024 - current",
      desc: "Developed MERN stack platform for a CTF challenge, boosting accessibility, student engagement.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp4.svg",
      keypoints: ["Developed and implemented backend routes using Node.js, and integrated the frontend with the backend utilizing React, Node.js, Express.js, and MongoDB, effectively deploying a full MERN stack application.", "Engineered Capture The Flag (CTF) challenges for students, hosting the web challenge on a physical Ubuntu server, and managed networking configurations to ensure the site was publicly accessible even outside the local network, reducing site downtime by 50% and improving overall accessibility for participants.", "Successfully optimized the system's performance and usability, leading to increased engagement and interaction with the platform among students."]
    },
    {
      id: 4,
      title: "Project Management Intern",
      company: "Excelerate",
      duration: "Aug 2024 - Oct 2024",
      desc: "Managed task coordination and budgeting for global HackQuest for student engagement.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
      keypoints: [
        "Collaborated on the global Excelerate HackQuest initiative, an innovative hackathon aimed at engaging high school and college students in the future of virtual experiences using AR, VR, and Mixed Reality.",
        "Implemented project management tools such as Trello and showcased task prioritization through Kanban boards and Gantt charts, which streamlined the workflow and improved team coordination.",
        "Participated in task management, focusing on dependencies and prioritization, ensuring tasks like marketing, judging setup, and tech infrastructure were strategically planned and executed.",
        "Supported the budgeting process by gathering vendor quotes and industry standards to estimate costs for technical infrastructure, marketing, and event logistics, which resulted in a balanced and actionable budget plan for HackQuest 2024."
      ]    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/RohitReddyy"
    },
    {
      id: 2,
      img: "/twit.svg",
      link: ""
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/rohit-reddy-musukudabbidi/"
    },
  ];
  