"use client"; // Mark this component as a client component

import React, { useState } from 'react';
import { ContactModal } from './ContactModal'; // Import the ContactModal

const ModalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const openModal = () => setIsModalOpen(true); // Function to open modal
    const closeModal = () => setIsModalOpen(false); // Function to close modal

    return (
        <>
            {children}
            <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
                Open Contact Form
            </button>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} /> {/* Modal component */}
        </>
    );
};

export default ModalWrapper;