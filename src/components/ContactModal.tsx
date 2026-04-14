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
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-2 sm:p-4 md:items-center"
            onClick={handleOverlayClick}
        >
            <div className="relative my-4 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl bg-white p-3 shadow-xl dark:bg-slate-900 sm:my-6 sm:p-4 md:p-5">
                <button
                    onClick={onClose}
                    className="absolute right-3 top-2 z-20 text-xl text-slate-500 transition hover:text-slate-700 dark:text-slate-300 dark:hover:text-white sm:right-4 sm:top-3 sm:text-2xl"
                    aria-label="Close contact modal"
                >
                    ×
                </button>
                <ContactForm
                    data={defaultContactData}
                    mode="embedded"
                    onSuccess={onClose}
                />
            </div>
        </div>
    );
};