
"use client";
import { useState } from "react";
import { MdEmail } from "react-icons/md";

type Props = {
    email?: string;
};

export function EmailReveal({ email }: Props) {
    const [showEmail, setShowEmail] = useState(false);
    const [copied, setCopied] = useState(false);

    if (!email) return null;

    const emailParts = email.split("@");
    const safeEmail = `${emailParts[0]}@${emailParts[1]}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(safeEmail);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            console.error("Copy failed");
        }
    };

    return (
        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            {!showEmail ? (
                <button
                    onClick={() => setShowEmail(true)}
                    className="hover:text-blue-400 transition flex items-center gap-1"
                >
                    <MdEmail size={15} />  Show Email
                </button>
            ) : (
                <div className="flex items-center gap-3">
                    <a
                        href={`mailto:${safeEmail}`}
                        className="hover:text-blue-400 transition break-all"
                    >
                        {safeEmail}
                    </a>

                    <button
                        onClick={handleCopy}
                        className="text-xs px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 transition"
                    >
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            )}
        </div>
    );
}