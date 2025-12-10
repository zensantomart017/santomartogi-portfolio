"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import { SiBootstrap, SiFigma, SiGit, SiGithub, SiLaravel, SiPhp, SiReact, SiSwift, SiTailwindcss } from 'react-icons/si';
import { FaJs } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import Link from 'next/link';

export default function ProjectSlider() {

    const projects = [
        {
            id: "01",
            title: "Calorizz - iOS Calorie Tracker App",
            desc: "An iOS application for calculating food calories using a scanning feature and a categorized food list.",
            tech: ["Figma", "Swift", "Git", "GitHub"],
            img: "/project-1.png",
            link: "https://github.com/zensantomart017/CalorieTrackerApp-CALORIZZ"
        },
        {
            id: "02",
            title: "S'Mart Weather - iOS Weather Tracker App",
            desc: "An iOS app for tracking real-time weather using SwiftUI.",
            tech: ["Figma", "Swift", "GitHub"],
            img: "/project-2.png",
            link: "https://github.com/zensantomart017/WeatherApp-SMart-Weather"
        },
        {
            id: "03",
            title: "Roiyall Coffee Website Design and Development.",
            desc: "A website development project for Roiyall Coffee, Siborong-borong, Sumatera Utara, Indonesia.",
            tech: ["Figma", "PHP", "Laravel", "Bootstrap", "Git", "GitHub"],
            img: "/project-3.jpeg",
            link: "https://github.com/zensantomart017/PA-1-Rancang-Bangun-Website-Roiyall-Coffee"
        },
        {
            id: "04",
            title: "Kawal- PTN Website Development.",
            desc: "A web platform developed to help students prepare for PTN entrance by providing tryout features and university information.",
            tech: ["Figma", "Javascript", "Golang", "React JS", "Tailwind CSS"],
            img: "/project-4.png",
            link: "https://github.com/jmsrzk14/PA2-Kel08"
        },
    ];

    return (
        <div className='flex flex-col min-h-screen justify-center px-[5%] lg:px-[15%] py-15 text-white relative'>
            <div className='max-w-[1400px] mx-auto w-full'>
            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                speed={1200}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={40}
                slidesPerView={1}
                style={{
                    transitionTimingFunction: "ease-in-out",
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="grid md:grid-cols-2 gap-10 items-center">

                            {/* Left SIde */}
                            <div className="work-content">
                                <h2 className="text-8xl font-bold stroke-text">{project.id}</h2>
                                <h3 className='text-5xl font-semibold font-unbounded mt-4'>{project.title}</h3>
                                <p className='text-gray-400 mt-3 text-lg leading-relaxed'>{project.desc}</p>

                                {/* tech icon */}
                                <div className="flex gap-4 mt-4">
                                    {project.tech.map((tech, index) => {
                                        let IconComponent;
                                        switch (tech.toLocaleLowerCase()) {
                                            case "react js":
                                                IconComponent = SiReact;
                                                break;
                                            case "tailwind css":
                                                IconComponent = SiTailwindcss;
                                                break;
                                            case "javascript":
                                                IconComponent = FaJs;
                                                break;
                                            case "laravel":
                                                IconComponent = SiLaravel;
                                                break;
                                            case "bootstrap":
                                                IconComponent = SiBootstrap;
                                                break;
                                            case "php":
                                                IconComponent = SiPhp;
                                                break;
                                            case "swift":
                                                IconComponent = SiSwift;
                                                break;
                                            case "github":
                                                IconComponent = SiGithub;
                                                break;
                                            case "git":
                                                IconComponent = SiGit;
                                                break;
                                            case "figma":
                                                IconComponent = SiFigma;
                                                break;
                                            case "golang":
                                                IconComponent = FaGolang;
                                                break;
                                            default:
                                                IconComponent = null;
                                        }
                                        return IconComponent ? (
                                            <div key={index} className="work-icons text-4xl text-[color:var(--primary-color)] cursor-pointer hover:text-white
                                            transition-all duration-300" title={tech}>
                                                <IconComponent />
                                            </div>
                                        ) : null;
                                    })}
                                </div>

                                {/* Icons */}
                                <div className="work-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                                    <Link
                                        href="#"
                                        className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white
                                    transition-all duration-500"
                                    >
                                        <i className="bi bi-arrow-up-right text-2xl"></i>
                                    </Link>
                                    <Link
                                        href={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white
                                    transition-all duration-500"
                                    >
                                        <i className="bi bi-github text-2xl"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className='relative work-image'>
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={650}
                                    height={300}
                                    className='rounded-lg shadow-lg'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Button */}
                <div className="flex gap-3 justify-end mt-6">
                    <button className='custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
                    text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500'>
                        <i className="bi bi-arrow-left text-2xl"></i>
                    </button>
                    <button className='custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
                    text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500'>
                        <i className="bi bi-arrow-right text-2xl"></i>
                    </button>
                </div>
            </Swiper>
        </div>
        </div>
    )
}
