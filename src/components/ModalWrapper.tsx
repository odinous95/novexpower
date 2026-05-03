"use client";
import React, { useState } from 'react';
import { ContactModal } from './ContactModal';

const ModalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {children}
            <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
                Open Contact Form
            </button>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default ModalWrapper;