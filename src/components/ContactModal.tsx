"use client";

import React from "react";
import { ContactForm, defaultContactData } from "@/features/contact/ui";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/70 p-2 backdrop-blur-sm sm:p-3 md:items-center md:p-4"
            onClick={handleOverlayClick}
        >
            <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] dark:border-white/10 dark:bg-slate-950">
                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 z-20 rounded-full bg-white/90 p-2 text-xl text-slate-500 shadow-sm transition hover:text-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white sm:right-4 sm:top-4 sm:p-2.5 sm:text-2xl"
                    aria-label="Close contact modal"
                >
                    ×
                </button>
                <div className="grid max-h-[88vh] overflow-y-auto lg:grid-cols-[0.88fr_1.12fr]">
                    <aside className="hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white lg:block xl:p-8">
                        <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm xl:p-8">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Get in touch</p>
                                <h2 className="mt-3 text-2xl font-bold leading-tight xl:text-3xl">Tell us what you need and we’ll map the next step fast.</h2>
                                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                                    We’ll review your message, route it to the right person, and get back to you with a clear next step.
                                </p>
                            </div>

                            <div className="space-y-3 text-sm text-slate-300">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                                    <p className="font-semibold text-white">Fast response</p>
                                    <p className="mt-1 leading-6">We aim to respond quickly with practical guidance.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                                    <p className="font-semibold text-white">Tailored support</p>
                                    <p className="mt-1 leading-6">Share your project context so we can provide the right solution.</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className="max-h-[88vh] overflow-y-auto bg-white p-3 sm:p-4 md:p-6 lg:p-8 dark:bg-slate-950">
                        <ContactForm
                            data={defaultContactData}
                            mode="embedded"
                            onSuccess={onClose}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};