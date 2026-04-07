"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById(id);
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) observer.unobserve(section);
        };
    }, [id]);

    return (
        <>
            {/* Mobile Sticky Header */}
            {isVisible && title && (
                <div className="md:hidden sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-foreground/10 py-3 px-4 transition-all duration-300">
                    <p className="text-sm font-semibold text-primary">{title}</p>
                </div>
            )}

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