"use client"

import React, { useEffect, useRef, useState } from 'react'
import { CountUp } from "countup.js"
import Link from "next/link"
import Image from 'next/image'
import Hero from "@/public/Profile.png"

export default function Header() {
    // statsData
    const statsData = [
        { value: 3, label: "Years of\nExperience" },
        { value: 10, label: "Projects\nCompleted" },
        { value: 7, label: "Technologies\nMastered" },
        { value: 450, label: "Code\nCommits" },
    ];

    const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const [isHovered, setIsHovered] = useState(false);

    const orbitRef = useRef<HTMLDivElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    const isHoveredRef = useRef(false);
    const orbitAngleRef = useRef(0);
    const borderAngleRef = useRef(0);
    const rafIdRef = useRef<number | null>(null);

    // Update ref saat isHovered setiap kali berubah
    useEffect(() => {
        isHoveredRef.current = isHovered;
    }, [isHovered]);

    // Animasi rotasi dengan requestAnimationFrame
    useEffect(() => {
        let lastTime: number | null = null;

        const animate = (time: number) => {
            if (lastTime === null) lastTime = time;
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            const hovered = isHoveredRef.current;

            // Orbit (counterclockwise)
            const orbitSpeed = hovered ? 120 : 30; // deg/s
            orbitAngleRef.current -= orbitSpeed * delta;
            if (orbitRef.current) {
                orbitRef.current.style.transform = `rotate(${orbitAngleRef.current}deg)`;
            }

            // Border gradient (clockwise)
            const borderSpeed = hovered ? 180 : 45; // deg/s
            borderAngleRef.current += borderSpeed * delta;
            if (borderRef.current) {
                borderRef.current.style.transform = `rotate(${borderAngleRef.current}deg)`;
            }

            rafIdRef.current = requestAnimationFrame(animate);
        };

        rafIdRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, []); // Hanya sekali saat mount

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
    }, []);

    return (
        <header className='min-h-screen flex flex-col justify-center text-white relative'>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 sm:px-10 lg:px-[16%]">
                {/* Left Content */}
                <div className="lg:w-[75%]">
                    <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl text-start font-unbounded font-normal leading-tight'>
                        Hello, I'm <br /><span className='text-[color:var(--primary-color)]'>Santo Martogi Simangunsong</span>
                    </h1>
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

                {/* Right Image - Triple Layer Animation with Orbiting Planets */}
                <div className="relative flex items-center justify-center">
                    <div 
                        className="relative flex items-center justify-center cursor-pointer
                            w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px]
                            lg:w-[350px] lg:h-[350px] xl:w-[420px] xl:h-[420px]"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        
                        {/* Orbiting Planets Container - Counterclockwise - OUTSIDE border */}
                        <div
                            ref={orbitRef}
                            className="absolute pointer-events-none"
                            style={{ inset: '-20px' }}
                        >
                            {/* Planet 1 - Top */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full 
                                    bg-gradient-to-br from-blue-400 to-blue-600 
                                    shadow-lg shadow-blue-500/50 
                                    ${isHovered ? 'animate-pulse-planet-fast' : 'animate-pulse-planet'}`} 
                                />
                            </div>
                            {/* Planet 2 - Right */}
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                                <div className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full 
                                    bg-gradient-to-br from-cyan-400 to-blue-500 
                                    shadow-lg shadow-cyan-500/50 
                                    ${isHovered ? 'animate-pulse-planet-fast' : 'animate-pulse-planet-delay-1'}`} 
                                />
                            </div>
                            {/* Planet 3 - Bottom */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full 
                                    bg-gradient-to-br from-blue-500 to-indigo-600 
                                    shadow-lg shadow-blue-600/50 
                                    ${isHovered ? 'animate-pulse-planet-fast' : 'animate-pulse-planet-delay-2'}`} 
                                />
                            </div>
                            {/* Planet 4 - Left */}
                            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                                <div className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full 
                                    bg-gradient-to-br from-sky-400 to-blue-500 
                                    shadow-lg shadow-sky-500/50 
                                    ${isHovered ? 'animate-pulse-planet-fast' : 'animate-pulse-planet-delay-3'}`} 
                                />
                            </div>
                        </div>

                        {/* Outer Glow Ring */}
                        <div 
                            className={`pointer-events-none absolute inset-0 rounded-full 
                                ${isHovered ? 'animate-pulse-glow-intense' : 'animate-pulse-glow'}`}
                            style={{
                                background: 'radial-gradient(circle, rgba(0,123,255,0.4) 0%, rgba(0,123,255,0) 70%)',
                            }}
                        />

                        {/* Rotating Gradient Border - Clockwise */}
                        <div
                            ref={borderRef}
                            className="pointer-events-none absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #007bff, #00d4ff, #007bff, #1a5fff, #007bff)',
                                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px))',
                                mask: 'radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px))',
                            }}
                        />

                        {/* Inner Subtle Ring */}
                        <div 
                            className="pointer-events-none absolute rounded-full animate-border-flow"
                            style={{
                                inset: '8px',
                                background: 'linear-gradient(90deg, rgba(0,123,255,0.3), rgba(0,212,255,0.5), rgba(0,123,255,0.3))',
                                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
                                mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
                            }}
                        />

                        {/* Profile Image */}
                        <div 
                            className={`relative w-full h-full rounded-full overflow-hidden bg-transparent 
                                transition-transform duration-300 
                                ${isHovered ? 'scale-105' : 'scale-100'}`}
                            style={{ padding: '12px' }}
                        >
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image
                                    src={Hero}
                                    alt="Santo Martogi Simangunsong Profile Photo"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
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