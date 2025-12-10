"use client"
import React from 'react'

// Services Data
const ServicesData = [
    {
        id: '01',
        title: "Web Development",
        desc: "Lorem"
    },
    {
        id: '02',
        title: "iOS App Development",
        desc: "Lorem"
    },
    {
        id: '03',
        title: "Full-Stack",
        desc: "Lorem"
    },
    {
        id: '04',
        title: "Cyber Security",
        desc: "Lorem"
    }
]

export default function Services() {
    return (
        <section className='min-h-screen flex flex-col justify-center px-[5%] lg:px-[15%] py-15 text-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {ServicesData.map((service, index) => (
                    <div key={index} className="relative group">

                        <div className="animated-border" />

                        <div className='relative bg-black/20 border border-gray-700 
                        rounded-xl px-10 py-15 transition-all duration-500 
                        cursor-pointer group-hover:border-[var(--primary-color)]
                        overflow-hidden'>

                            <div className="flex justify-between items-center mb-5">
                                <h3 className='text-6xl font-bold stroke-text text-gray-400 
                             transition-all duration-500 group-hover:text-[var(--primary-color)] 
                             group-hover:stroke-[var(--primary-color)]'>
                                    {service.id}
                                </h3>

                                <div className="w-20 h-20 flex items-center justify-center rounded-full 
                             bg-white text-black transition-all duration-500
                             group-hover:bg-[var(--primary-color)] group-hover:text-white">
                                    <i className='bi bi-arrow-up-right text-3xl'></i>
                                </div>
                            </div>

                            <h2 className='text-4xl font-normal font-unbounded mb-5 transition-colors duration-300
                        group-hover:text-[var(--primary-color)]'>
                                {service.title}
                            </h2>

                            <p className='text-gray-400 text-lg'>
                                {service.desc}
                            </p>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
