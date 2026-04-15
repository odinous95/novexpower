"use client"; // Mark this component as a client component

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { footerDetails, siteDetails } from '@/data';
import { getPlatformIconByName } from '@/utils';
import { Logo } from './logo';

const ContactModal = dynamic(
    () => import('./ContactModal').then((mod) => mod.ContactModal),
    { ssr: false }
);

const Footer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black py-12 text-white dark:from-gray-800 dark:to-gray-900 sm:py-14 lg:py-16">
            {/* Main Content */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-12 lg:grid-cols-4 lg:gap-10 xl:gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <span className="flex items-center gap-3 mb-4">
                            <Logo />
                            <h3 className="manrope cursor-pointer text-xl font-bold text-white sm:text-2xl">
                                {siteDetails.siteName}
                            </h3>
                        </span>
                        <p className="text-sm leading-relaxed text-gray-300">
                            {footerDetails.subheading}
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-500 pb-2">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link
                                        href={link.url}
                                        className="text-gray-300 hover:text-blue-400 transition duration-300 text-sm"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-500 pb-2">
                            Get in Touch
                        </h4>
                        <div className="space-y-4">
                            {footerDetails.email && (
                                <a
                                    href={`mailto:${footerDetails.email}`}
                                    className="flex items-center gap-2 break-all text-sm text-gray-300 transition duration-300 hover:text-blue-400"
                                >
                                    <span>✉</span> {footerDetails.email}
                                </a>
                            )}
                            {footerDetails.telephone && (
                                <a
                                    href={`tel:${footerDetails.telephone}`}
                                    className="text-gray-300 hover:text-blue-400 transition duration-300 text-sm flex items-center gap-2"
                                >
                                    <span>☎</span> {footerDetails.telephone}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Social & CTA Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-500 pb-2">
                            Connect With Us
                        </h4>
                        <div className="space-y-4">
                            {footerDetails.socials && (
                                <div className="flex items-center gap-4 flex-wrap">
                                    {Object.keys(footerDetails.socials).map(platformName => {
                                        if (platformName && footerDetails.socials[platformName]) {
                                            return (
                                                <Link
                                                    href={footerDetails.socials[platformName]}
                                                    key={platformName}
                                                    aria-label={platformName}
                                                    className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                                                >
                                                    {getPlatformIconByName(platformName)}
                                                </Link>
                                            )
                                        }

                                        return null;
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-10 flex justify-center">
                    <button
                        onClick={openModal}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                    >
                        Interested
                    </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Footer Bottom */}
                <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-300 sm:flex-row sm:text-left">
                    <p className="max-w-xl text-balance">
                        Copyright &copy; {new Date().getFullYear()}
                        <span className="font-semibold text-white ml-1">{siteDetails.siteName}</span>.
                        All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
                        <Link href="/data-policy" className="hover:text-blue-400 transition duration-300">
                            Data Policy
                        </Link>
                        <Link href="/terms" className="hover:text-blue-400 transition duration-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};

export default Footer;

