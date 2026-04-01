"use client"; // Mark this component as a client component

import React, { useState } from 'react';
import Link from 'next/link';
import { footerDetails, siteDetails } from '@/data';
import { getPlatformIconByName } from '@/utils';
import { Logo } from './logo';
import { ContactModal } from './ContactModal'; // Import the ContactModal

const Footer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 dark:from-gray-800 dark:to-gray-900">
            {/* Main Content */}
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <span className="flex items-center gap-3 mb-4">
                            <Logo />
                            <h3 className="manrope text-2xl font-bold cursor-pointer text-white">
                                {siteDetails.siteName}
                            </h3>
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {footerDetails.subheading}
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">
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
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">
                            Get in Touch
                        </h4>
                        <div className="space-y-4">
                            {footerDetails.email && (
                                <a
                                    href={`mailto:${footerDetails.email}`}
                                    className="text-gray-300 hover:text-blue-400 transition duration-300 text-sm flex items-center gap-2"
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
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">
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
                                    })}
                                </div>
                            )}
                            <button
                                onClick={openModal}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 mt-4"
                            >
                                Interested
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-300 text-sm">
                    <p>
                        Copyright &copy; {new Date().getFullYear()}
                        <span className="font-semibold text-white ml-1">{siteDetails.siteName}</span>.
                        All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-blue-400 transition duration-300">
                            Privacy Policy
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

