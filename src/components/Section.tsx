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
            <section id={id} className="relative min-h-fit flex flex-col justify-center overflow-hidden py-10 sm:py-14 lg:py-20 scroll-mt-16 md:scroll-mt-0">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <SectionTitle>
                            <h2 className="text-center text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
                                {title}
                            </h2>
                        </SectionTitle>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                            {description}
                        </p>
                    </div>

                    <div className="mt-8 lg:mt-12">
                        {children}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section