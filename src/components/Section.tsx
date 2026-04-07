"use client";
import React from "react";
import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <>
            <section id={id} className="min-h-fit flex flex-col justify-center py-6 sm:py-8 md:py-10 lg:py-20 scroll-mt-16 md:scroll-mt-0">
                <SectionTitle>
                    <h2 className="text-center mb-2 sm:mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
                </SectionTitle>
                <p className="mb-8 sm:mb-10 md:mb-12 text-center text-xs sm:text-sm md:text-base px-4">{description}</p>
                {children}
            </section>
        </>
    );
};

export default Section