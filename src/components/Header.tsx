'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import { Logo } from './logo';
import ThemeToggler from './ToggleTheme';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [activeSection, setActiveSection] = useState("")
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
        handleScroll(); // Call once to set active section on load

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // console.log(pathname);
    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white dark:bg-[--background] md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <span className="flex items-center">
                        <Logo />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer backdrop-blur-[2px] bg-gradient-to-b">
                            {siteDetails.siteName}
                        </span>
                    </span>
                    <span className="hidden md:flex">
                        <ThemeToggler />
                    </span>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <span className="mr-4">
                            <ThemeToggler />
                        </span>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>

                    </div>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex fixed items-center text-center top-1/2 right-4 -translate-y-1/2 flex-col space-y-10 p-4">

                        {menuItems.map((item) => (
                            <li key={item.text} className="flex items-center justify-between w-full relative"> {/* Added relative for positioning */}
                                {/* Clickable Circle */}
                                <span
                                    className={`w-8 h-8 my-6 rounded-full transition-colors self-center ml-1 cursor-pointer ${activeSection === item.url ? "bg-primary" : "bg-gray-300"}`}
                                    onClick={() => window.location.href = item.url} // Navigate to the URL on click
                                    onMouseEnter={() => setHoveredItem(item.text)} // Set the hovered item (use item.text for comparison)
                                    onMouseLeave={() => setHoveredItem(null)} // Reset the hovered item
                                >
                                    {/* Hover element */}
                                    {hoveredItem === item.text && (
                                        <ul className="absolute left-0 top-0 transform translate-x-[-100%] transition-all duration-200">
                                            <li className="text-white w-full bg-primary px-6 py-3 rounded-full transition-colors whitespace-nowrap">
                                                {item.text}
                                            </li>
                                        </ul>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>

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
                        {/* <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                Get Started
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
