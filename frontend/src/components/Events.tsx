import { events } from '@/data';
import Image from 'next/image';
import React from 'react';

export function Events() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <a
                        key={event.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block transform transition hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        <div className="overflow-hidden rounded-2xl shadow-md bg-white dark:bg-neutral-900">
                            <div className="relative w-full h-56 sm:h-48 lg:h-56">
                                <Image
                                    src={event.image}
                                    alt={event.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                />
                            </div>

                            <div className="p-4">
                                <h2 className="text-lg sm:text-xl font-semibold truncate" title={event.name}>
                                    {event.name}
                                </h2>
                                <div className="flex items-center gap-3 text-sm dark:text-white text-blue-500 mt-1">
                                    {event.location && (
                                        <div className="flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4 shrink-0"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M12 21s-7-5.5-7-10a7 7 0 0114 0c0 4.5-7 10-7 10z" />
                                                <circle cx="12" cy="11" r="2.5" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>
                                    )}

                                    {event.location && event.date && <span className="dark:text-white text-blue-500">|</span>}

                                    {event.date && (
                                        <div className="flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4 shrink-0"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <rect x="3" y="5" width="18" height="16" rx="2" />
                                                <path d="M16 3v4M8 3v4M3 11h18" />
                                            </svg>
                                            <span className="dark:text-white text-blue-500">{event.date}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

