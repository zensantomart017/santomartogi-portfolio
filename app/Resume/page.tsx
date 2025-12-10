"use client"
import React, { useState } from 'react';
import { FaJava } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiDart, SiFirebase, SiFlutter, SiGit, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPython, SiReact, SiSwift, SiTailwindcss } from 'react-icons/si';

export default function Resume() {

    const [activateTab, setActivateTab] = useState("Skills");

    const tabs = ["Experience", "Education", "Skills", "About Me"];

    // Experience
    const experiences = [
        {
            date: "2023 - Present",
            role: "Web Developer",
            company: "Technology Solution Inc."
        },
        {
            date: "2023 - Present",
            role: "iOS Developer",
            company: "Technology Solution Inc."
        },
        {
            date: "2023 - Present",
            role: "Cyber Security",
            company: "Technology Solution Inc."
        },
        {
            date: "2023 - Present",
            role: "Cyber Security",
            company: "Technology Solution Inc."
        },
        {
            date: "2023 - Present",
            role: "Cyber Security",
            company: "Technology Solution Inc."
        },
        {
            date: "2023 - Present",
            role: "Cyber Security",
            company: "Technology Solution Inc."
        },
    ];

    // Education
    const educations = [
        { year: "2023 - 2026", degree: "Information Technology Diploma", institute: "Del Institute of Technology" },
        { year: "2020 - 2023", degree: "Science Major High School", institute: "SMA N 1 Laguboti" }
    ];


    //Skills
    const skills = [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "Javascript", icon: <SiJavascript /> },
        { name: "Swift", icon: <SiSwift /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
    ];

    return (
        <section className='flex flex-col min-h-screen justify-center px-[5%] lg:px-[15%] py-15 text-white'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left Sidebar */}
                <div>
                    <h2 className='text-4xl font-unbounded font-bold mb-4'>
                        Why Hire Me?
                    </h2>
                    <p className='text-gray-400 mt-6 mb-10'>
                        Lorem Ipsum
                    </p>
                    <div className="flex flex-col gap-5">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActivateTab(tab)}
                                className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer
                            ${activateTab === tab ? "bg-[var(--primary-color)] text-white" : "bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-2">
                    <h2 className='text-4xl font-unbounded font-bold mb-4'>
                        {activateTab}
                    </h2>
                    <p className="text-gray-400 mb-10">
                        Ha
                    </p>

                    {/* Experience */}
                    {activateTab === "Experience" && (
                        <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className='skill-card relative bg-gray-500/5 hover:bg-gray-500/10 
    border border-gray-500 rounded-xl px-5 py-10
    hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer'
                                    >
                                        <span className='animated-silver-border'/>
                                        <h3 className='text-[color:var(--primary-color)] font-semibold my-2'>
                                            {exp.date}
                                        </h3>
                                        <h4 className='text-3xl font-normal font-unbounded mb-1'>{exp.role}</h4>
                                        <p className="text-gray-400 flex items-center text-sm mt-2">
                                            <span className='text-[color:var(--primary-color)] text-2xl pe-2'>•</span> {exp.company}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {activateTab == "Education" && (
                        <div className='h-[500px] overflow-y-scroll pr-2 custom-scrollbar'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {educations.map((edu, index) => (
                                    <div
                                        key={index}
                                        className='skill-card relative bg-gray-500/5 hover:bg-gray-500/10 
                                border border-gray-500 rounded-xl px-5 py-10
                                hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer'
                                    >
                                        <span className='animated-silver-border' />
                                        <h3 className='text-[color:var(--primary-color)] font-semibold my-2'>
                                            {edu.year}
                                        </h3>
                                        <h4 className='text-3xl font-normal font-unbounded mb-1'>{edu.degree}</h4>
                                        <p className="text-gray-400 flex items-center text-sm mt-2">
                                            <span className='text-[color:var(--primary-color)] text-2xl pe-2'>•</span> {edu.institute}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Skills */}
                    {activateTab === "Skills" && (
                        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
                            {skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="skill-card relative cursor-pointer bg-gray-500/5 rounded-xl
                py-11 border border-gray-500 flex flex-col items-center group overflow-hidden
                hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                                >
                                    {/* Animated Silver Border */}
                                    <span className="animated-silver-border" />

                                    {/* Icon */}
                                    <i
                                        className="text-6xl group-hover:text-[color:var(--primary-color)]
                    transition-all duration-500"
                                    >
                                        {skill.icon}
                                    </i>

                                    {/* Tooltip */}
                                    <span
                                        className="absolute bottom-[5px] scale-0 rounded bg-gray-800 px-2 py-1 
                    font-semibold text-1xl text-white transition-all duration-300 
                    group-hover:scale-100 group-hover:text-[color:var(--primary-color)]"
                                    >
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}


                    {/* About */}
                    {activateTab === "About Me" && (
                        <div className="text-gray-400 space-y-4">
                            <p>
                                Hi! I'm <span className="text-[color:var(--primary-color)] font-semibold">Santo Martogi Simangunsong </span>
                                Let's Connect.
                            </p>
                            <ul className="space-y-2">
                                <li><strong>Experience:</strong> 4+ year in Web/App Development</li>
                                <li><strong>Nationally:</strong> Indonesian</li>
                                <li><strong>Work:</strong> Open to Work</li>
                                <li><strong>Phone:</strong> (+62) 812 6117 9294</li>
                                <li><strong>E-mail:</strong> sans@gmail.com</li>
                                <li><strong>Language:</strong> Indonesia, English</li>
                            </ul>
                            <p>I specialize in Web/App Development and Cyber Security</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
