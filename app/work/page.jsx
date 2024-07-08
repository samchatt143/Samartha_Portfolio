"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Sam Meals",
    description:
      "The one stop location for your hunger.'After a good meal,One can forgive anybody.Even one's own relatives.'So grab your meal from here.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://yourlunchisontheway.netlify.app/",
    github: "https://github.com/samchatt143/Food-ordering-APP",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Task Manager",
    description:
      "It's where the user can add tasks as many as they want also can remove tasks.It will help the user to keep a track of the DUE-TASKS in the near future.",
    stack: [{ name: "React.Js" }, { name: "Css 3" }, { name: "Firebase" }],
    image: "/assets/work/thumb2.png",
    live: "https://manageyourprojects.netlify.app/",
    github: "https://github.com/samchatt143/TaskManager",
  },
  {
    num: "03",
    category: "Frontend",
    title: "React Animation",
    description:
      "It is a website for the challenges that can enlisted by the user for ongoing or upcoming purposes",
    stack: [{ name: "React.Js" }, { name: "Css 3" }],
    image: "/assets/work/thumb3.png",
    live: "https://challengesanimation.netlify.app/",
    github: "https://github.com/samchatt143/challengesusingANIMATION",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Investment Calculator",
    description:
      "It calculates the 1)TOTAL SAVINGS 2)NUMBER OF YEARS(INTEREST) 3)TOTAL INTEREST 4)INVESTED CAPITAL for a particular duration of years given by the user.",
    stack: [{ name: "React.Js" }, { name: "Css 3" }],
    image: "/assets/work/thumb4.png",
    live: "https://yearlyinvestment.netlify.app/",
    github: "https://github.com/samchatt143/Investment-Calculator",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Accuracy Finder",
    description:
      "It is made for the people who wants to check their accuracy by enabling few types of timer and have to stop it at the mentioned time.",
    stack: [{ name: "React.Js" }, { name: "Css 3" }],
    image: "/assets/work/thumb5.png",
    live: "https://checkyouraccuracy.netlify.app/",
    github: "https://github.com/samchatt143/AccuracyFINDER",
  },
  {
    num: "06",
    category: "Java",
    title: "Atm Interface",
    description:
      "This complex project consists of five different classes and is a console-based application. When the system starts the user is prompted with user id and user pin.",
    stack: [{ name: "JAVA" }],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "https://github.com/samchatt143/Atm-Interface",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="w-full h-full relative">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
