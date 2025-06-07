import React from 'react';
import Image from 'next/image';
import { team_members } from '@/data/team_members';
import LineSep from './LineSep';

const Team: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {team_members.map((member, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        <Image
                            src={member.avatar}
                            alt={`${member.name} avatar`}
                            width={80}
                            height={80}
                            className="rounded-full shadow-md"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-secondary">{member.name}</h3>
                            <p className="text-sm text-foreground-accent">{member.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent text-center lg:text-left">{member.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;
