import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { menuItems } from '@/data';

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export function Menu({ isOpen, toggleMenu, activeSection, setActiveSection }: MenuProps) {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Small offset for better accuracy

            menuItems.forEach((item, index) => {
                const section = document.querySelector(item.url);
                if (section) {
                    const sectionTop = (section as HTMLElement).offsetTop;
                    const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

                    // Special case for the first section
                    if (index === 0 && scrollPosition < sectionBottom) {
                        setActiveSection(item.url);
                    }
                    // Regular case for other sections
                    else if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(item.url);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Menu */}
            <ul className="hidden md:flex fixed items-center text-center top-1/2 right-4 -translate-y-1/2 flex-col space-y-10 p-4">
                {menuItems && menuItems.map((item) => (
                    <li key={item.text} className="flex items-center justify-between w-full relative">
                        {/* Clickable Circle */}
                        <div
                            className={`w-8 h-8 my-6 rounded-full transition-colors self-center ml-1 cursor-pointer ${activeSection === item.url ? "bg-primary" : "bg-gray-300"}`}
                            onClick={() => window.location.href = item.url}
                            onMouseEnter={() => setHoveredItem(item.text)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="w-full h-full flex items-center justify-center">
                                <span className={`text-sm font-semibold ${activeSection === item.url ? 'text-white' : 'text-gray-700'}`}>
                                    {activeSection === item.url ? (
                                        <span className="text-xl font-extrabold text-white">+</span>
                                    ) : (
                                        <span className="text-xl font-extrabold text-gray-700">-</span>
                                    )}
                                </span>
                            </span>
                            {/* Hover element */}
                            {hoveredItem === item.text && (
                                <ul className="absolute left-0 top-0 transform translate-x-[-100%] transition-all duration-200">
                                    <li className="text-white w-full bg-primary px-6 py-3 rounded-full transition-colors whitespace-nowrap">
                                        {item.text}
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white dark:bg-[--primary-accent] shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 pt-8 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text} className="border-b border-gray-700">
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Transition>
        </>
    );
}