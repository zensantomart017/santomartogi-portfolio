"use client"

import React, { useEffect, useRef } from 'react'
import { CountUp } from "countup.js"
import ShapeBlur from "../app/components/ShapeBlur";
import Link from "next/link";
import Image from 'next/image';
import Hero from "@/public/Profile.png";

export default function Header() {
    // statsData
    const statsData = [
        { value: 3, label: "Years of\nExperience" },
        { value: 10, label: "Projects\nCompleted" },
        { value: 7, label: "Technologies\nMastered" },
        { value: 450, label: "Code\nCommits" },
    ];

    const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);

    useEffect(() => {
        countRefs.current.forEach((el, index) => {
            if (el) {
                const countUp = new CountUp(el, statsData[index].value, {
                    duration: 3,
                    separator: ",",
                });
                if (!countUp.error) {
                    countUp.start();
                }
                else {
                    console.log(countUp.error);
                }
            }
        })
    }, [])

    return (
        <header className='min-h-screen flex flex-col justify-center text-white relative'>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 sm:px-10 lg:px-[16%]">
                {/* Left Content */}
                <div className="lg:w-[75%]">
                    {/* <p className="text-lg mb-2 text-gray-400">Web Developer</p> */}
                    <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl text-start font-unbounded font-normal leading-tight'>
                        Hello, I'm <br /><span className='text-[color:var(--primary-color)]'>Santo Martogi Simangunsong</span></h1>
                    <p className='text-gray-400 text-md lg:text-xl font-normal font-sora my-8'>
                        I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-6 items-center">
                        <Link
                            href="/Santo Martogi Simangunsong-resume-(eng).pdf"
                            download
                            className="border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-6 py-3
                    rounded hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500"
                        >
                            <i className="bi bi-download me-2"></i>Download CV
                        </Link>

                        <div className="flex hero-social gap-4 text-xl">
                            <a
                                href="https://github.com/zensantomart017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer"
                            >
                                <i className="bi bi-github"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/santo-martogi-simangunsong-84a504283"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/santoomrtg_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Right Image */}
                {/* <div className="lg:w-[45%] flex justify-center mt-10 lg:mt-0">
                    <div className="hero-image relative w-[70vw] h-[70vw] max-w-[400px] max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] rounded-full overflow-hidden">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br 
                      from-[var(--hero-image-form)] to-[var(--hero-image-to)]" />
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <Image
                                src={Hero}
                                alt="Portfolio Picture"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div> */}
                <div
                    className="relative rounded-full overflow-hidden
    w-[60vw] h-[60vw]
    sm:w-[50vw] sm:h-[50vw]
    md:w-[300px] md:h-[300px]
    lg:w-[420px] lg:h-[420px]"
                >
                    <Image
                        src={Hero}
                        alt="Profile Picture"
                        fill
                        className="object-cover object-top pointer-events-none rounded-full"
                    />

                    <ShapeBlur
                        className="absolute inset-0 rounded-full pointer-events-auto"
                        variation={2}
                        shapeSize={1}
                        borderSize={0.04}
                        circleSize={0.22}
                        circleEdge={0.55}
                    />
                </div>

            </div>

            {/* Stats */}
            <div className="w-full mt-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-25 px-[15%]">
                    {statsData.map((stat, index) => (
                        <div key={index} className='flex gap-2 items-center'>
                            <h1
                                ref={(el) => {
                                    countRefs.current[index] = el;
                                }}
                                className='text-6xl lg:text-7xl font-unbounded font-bold'
                            >
                                0
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-400 font-semibold whitespace-pre-line">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}
