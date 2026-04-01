"use client"
import React from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data';

export function Hero() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center">
            {/* LEFT GRID */}
            <div className="absolute left-0 top-0 -z-20 w-5/12 h-full">
                <div
                    className="absolute inset-0 h-full w-full bg-[linear-gradient(to_left,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_80%_20%,#000_60%,transparent_100%)]"
                    aria-hidden
                />
            </div>

            {/* RIGHT BACKGROUND */}
            <div className="absolute right-0 top-0 -z-20 w-7/12 h-full">
                <svg
                    viewBox="0 0 860 800"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    aria-hidden
                >
                    <path
                        d="M40 90 L820 90 L820 150 L40 150 L40 210 L820 210 L820 270 L40 270 L40 330 L820 330"
                        fill="none"
                        stroke="rgba(128,128,128,0.05)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Centered content */}
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
                <h1 className="whitespace-normal md:whitespace-nowrap backdrop-blur-[2px] bg-gradient-to-b text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mx-auto hero-title leading-tight">
                    {heroDetails.heading}
                </h1>
                <p className="text-foreground max-w-lg mx-auto text-base sm:text-lg md:text-xl backdrop-blur-[2px] bg-gradient-to-b">
                    {heroDetails.subheading}
                </p>

                <div className="relative flex justify-center w-full mt-0 sm:mt-1">
                    <Image
                        src="/images/hero-mockup.png"
                        width={1200}
                        height={20}
                        quality={75}
                        sizes="(max-width: 480px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, (max-width: 1536px) 80vw, 85vw"
                        priority={true}
                        unoptimized={false}
                        alt="Hero image"
                        draggable={false}
                        onMouseDown={(e) => e.preventDefault()}
                        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
                        className="mx-auto z-10 w-full h-auto select-none rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
