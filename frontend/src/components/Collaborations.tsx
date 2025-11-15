import { collaborators } from '@/data';
import Image from 'next/image';
import React from 'react';


export function Collaboration() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10">
            {collaborators && collaborators.map((collab) => (
                <div
                    key={collab.name}
                    className="flex flex-col items-center space-y-2 text-center"
                >
                    <a
                        href={collab.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="bg-gray-200 dark:bg-gray-200 rounded-xl p-2 shadow-sm group-hover:shadow-md transition">
                            <Image
                                src={collab.logo}
                                alt={`${collab.name} logo`}
                                width={120}
                                height={60}
                                className="object-contain grayscale group-hover:grayscale-0 transition"
                            />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};
