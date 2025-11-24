"use client"
import React from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data';

export function Hero() {
    return (
        <>
            <div className="relative w-full">
                {/* LEFT GRID (no electron) */}
                <div className="absolute left-0 top-0 -z-20 w-5/12 h-full">
                    <div
                        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_left,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_80%_20%,#000_60%,transparent_100%)]"
                        aria-hidden
                    >
                    </div>
                </div>


                <div className="absolute right-0 top-0 -z-20 w-7/12 h-full">
                    <div
                        aria-hidden
                    >
                        <svg
                            viewBox="0 0 860 800"
                            preserveAspectRatio="none"
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            aria-hidden
                        >
                            <defs>
                                {/* reduced blur to improve perf */}
                                <filter id="glowR" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            <path
                                id="rightPath"
                                d="M40 90 L820 90 L820 150 L40 150 L40 210 L820 210 L820 270 L40 270 L40 330 L820 330"
                                fill="none"
                                stroke="rgba(128,128,128,0.05)"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            {/* single lightweight electron */}
                            <circle r="3.2" cx="0" cy="0" fill="#7bf7d8" style={{ filter: 'url(#glowR)' }} className="right-electron" />
                        </svg>
                    </div>
                </div>

                {/* Centered content */}
                <div className="w-full max-w-xl mx-auto text-center px-2 relative z-10 py-16">
                    <h1 className="whitespace-normal md:whitespace-nowrap backdrop-blur-[2px] bg-gradient-to-b text-2xl sm:text-3xl md:text-5xl md:leading-tight font-bold text-foreground mx-auto hero-title">
                        {heroDetails.heading}
                    </h1>
                    <p className="mt-3 sm:mt-4 text-foreground max-w-md mx-auto text-base sm:text-lg backdrop-blur-[2px] bg-gradient-to-b">
                        {heroDetails.subheading}
                    </p>

                    <div className="relative mt-8 md:mt-16 flex justify-center">
                        <Image
                            src="images/hero-mockup.webp"
                            width={320}
                            height={284}
                            quality={100}
                            sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 384px"
                            priority={true}
                            unoptimized={true}
                            alt="Hero image"
                            draggable={false}
                            onMouseDown={(e) => e.preventDefault()}
                            style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
                            className="mx-auto z-10 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto select-none"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
        /* shared electron rules */
        .right-electron {
          transform: translate(-4px, -4px);
          will-change: offset-distance, transform;
          mix-blend-mode: screen;
          offset-path: path('M40 90 L820 90 L820 150 L40 150 L40 210 L820 210 L820 270 L40 270 L40 330 L820 330');
          offset-distance: 0%;
          /* slowed for a calm flow */
          animation: rightTravel 18s linear infinite;
        }

        @keyframes rightTravel {
          0% { offset-distance: 0%; }
          50% { offset-distance: 100%; }
          100% { offset-distance: 0%; }
        }

        /* graceful fallback if offset-path is unsupported */
        @supports not (offset-path: path('M0 0')) {
          .right-electron {
            opacity: 0.95;
            transform: translate(-4px, -4px) translateX(40px);
          }
        }

        svg { pointer-events: none; }
      `}</style>
        </>
    );
}
