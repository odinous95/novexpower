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

                                <div className="flex items-center gap-2 text-sm text-neutral-200 mt-1">
                                    {event.location && <span>{event.location}</span>}
                                    {event.location && event.date && <span>|</span>}
                                    {event.date && <span className="text-neutral-200">{event.date}</span>}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

