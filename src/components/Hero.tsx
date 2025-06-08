import React from 'react';
import Image from 'next/image';

// import AppStoreButton from './AppStoreButton';
// import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-6/12">
                <div className="absolute inset-0 h-full bg-hero-background bg-[linear-gradient(to_left,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#069670_2px,transparent_1px)] bg-[size:40px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_100%,#000_60%,transparent_100%)]">
                </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 -z-20 w-6/12">
                <div className="absolute inset-0 h-full bg-hero-background bg-[linear-gradient(to_left,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#069670_2px,transparent_1px)] bg-[size:40px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_100%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-20 bg-gradient-to-b from-transparent via-[rgba(249,255,233,0.5)] to-[rgba(202,230,228,0.5)]">
            </div> */}

            <div className="w-full max-w-xl mx-auto text-center px-2">
                <h1 className="whitespace-normal md:whitespace-nowrap backdrop-blur-[2px] bg-gradient-to-b text-2xl sm:text-3xl md:text-5xl md:leading-tight font-bold text-foreground mx-auto hero-title">
                    {heroDetails.heading}
                </h1>
                <p className="mt-3 sm:mt-4 text-foreground max-w-md mx-auto text-base sm:text-lg backdrop-blur-[2px] bg-gradient-to-b">
                    {heroDetails.subheading}
                </p>
                {/* <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div> */}
                <div className="relative mt-8 md:mt-16 flex justify-center">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={320}
                        height={284}
                        quality={100}
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                        className="mx-auto z-10 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
                    />
                </div>
            </div>


        </section>
    );
};

export default Hero;
