"use client"; // Mark this component as a client component

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { footerDetails, siteDetails } from '@/data';
import { getPlatformIconByName } from '@/utils/getPlatformIcon';
import { Logo } from './logo';
import { MdEmail, MdPhone } from 'react-icons/md';
import { EmailReveal } from '.';

const ContactModal = dynamic(
    () => import('./ContactModal').then((mod) => mod.ContactModal),
    { ssr: false }
);

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-12 lg:grid-cols-3 lg:gap-10 xl:gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <span className="flex items-center gap-3 mb-4">
                            <Logo variant="dark-bg" />
                            <h3 className="manrope cursor-pointer text-xl font-bold text-white sm:text-2xl">
                                {siteDetails.siteName}
                            </h3>
                        </span>
                        <p className="text-sm leading-relaxed text-gray-300">
                            {footerDetails.subheading}
                        </p>
                        <button
                            onClick={openModal}
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(14,165,233,0.35)] transition duration-300 hover:-translate-y-0.5 hover:from-sky-400 hover:to-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
                        >
                            Interested
                        </button>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-500 pb-2">
                            Get in Touch
                        </h4>
                        <div className="space-y-4">
                            {footerDetails.email && (
                                <EmailReveal email={footerDetails.email} />
                            )}
                            {footerDetails.telephone && (
                                <a
                                    href={`tel:${footerDetails.telephone}`}
                                    className="flex items-center gap-2 break-all text-sm text-gray-300 transition duration-300 hover:text-blue-400"
                                >
                                    <MdPhone size={30} /> {footerDetails.telephone}
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

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Footer Bottom */}
                <div className=" mt-10 pt-6">
                    <div className="flex flex-col items-center gap-4 text-sm text-gray-400 sm:flex-row sm:justify-between sm:items-center">

                        {/* Left section */}
                        <p className="text-center sm:text-left max-w-md leading-relaxed">
                            © {new Date().getFullYear()}
                            <span className="font-semibold text-white ml-1">
                                {siteDetails.siteName} AB
                            </span>. All rights reserved.
                        </p>

                        {/* Middle section */}
                        <span className="text-gray-500 text-xs sm:text-sm">
                            Org.nr 559554-1557
                        </span>

                        {/* Right section */}
                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Data Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Terms of Service
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};


