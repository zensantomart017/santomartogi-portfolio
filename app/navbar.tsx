"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const navLinks = [
        { name : "Home", href: '/' },
        { name : "Services", href: '/Services' },
        { name : "Resume", href: '/Resume' },
        { name : "Work", href: '/Work' },
        { name : "Contact", href: '/Contact' },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-[9999] bg-transparent backdrop-blur-md">
            <div className="w-full px-6 lg:px-12 py-4 pt-5 flex justify-between items-center">
                
                <Link href="/" className="text-4xl font-bold font-unbounded text-white">
                    Santo<span className="text-[var(--primary-color)] font-unbounded"> Martogi.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="flex items-center gap-5 whitespace-nowrap">
                    <div className="hidden lg:flex nav-menu items-center gap-8 text-[17px] font-semibold">
                        {navLinks.map(link => (
                            <Link
                            key={link.name}
                            href={link.href}
                                className={`relative text-[20px] font-semibold tracking-wide transition-all text-white relative px-2 py-2 rounded hover:text-[--primary-color] ${
                                 pathname === link.href ? "active-links text-[--primary-color]" : ""
                                }`}
                            >
                            {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                    href="/Contact"
                        className="bg-[var(--primary-color)] px-5 py-2 text-xl text-white font-semibold cursor-pointer rounded-full transition-all duration-300
                        hover:bg-transparent shadow-md hover:shadow-[0px_2px_5px_var(--primary-color)]">
                        Hire Us
                    </Link>
                </div>

                {/* Mobile menu button*/}
                <button
                className="lg:hidden text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="ri-menu-2-fill text-white"></i>
                </button>
            </div>

            {/* Side Menu with Smooth Transition */}
            <div
            className={`lg:hidden bg-[#1c1b21] text-white border-y border-[--primary-color] px-[5%] overflow-hidden transition-all duration-500
            ease-in-out ${
            isMenuOpen ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
            }`}
            >
                <ul className="space-y-4 menu">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                            href={link.href}
                            className="block text-base relative"
                            onClick={() => setIsMenuOpen}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}