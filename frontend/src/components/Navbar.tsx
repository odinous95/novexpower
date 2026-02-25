'use client';
import React from 'react';
import { ThemeToggler, Logo } from '.';
import { siteDetails } from '@/data';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

interface NavbarProps {
    toggleMenu: () => void;
    isOpen: boolean;
}

export function Navbar({ toggleMenu, isOpen }: NavbarProps) {
    return (
        <nav className="shadow-md md:shadow-none bg-white dark:bg-[--background] md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
            {/* Logo */}
            <span className="flex items-center">
                <Logo />
                <span className="manrope text-xl font-semibold text-foreground cursor-pointer backdrop-blur-[2px] bg-gradient-to-b ml-2">
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
        </nav>
    );
}