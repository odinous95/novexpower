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

    const [local, domain] = email.split("@");
    const safeEmail = `${local}@${domain}`;

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
                    className="flex items-center gap-1 transition text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                    <MdEmail size={15} />
                    Show Email
                </button>
            ) : (
                <div className="flex items-center gap-3">
                    <a
                        href={`mailto:${safeEmail}`}
                        className="break-all transition text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                    >
                        {safeEmail}
                    </a>

                    <button
                        onClick={handleCopy}
                        className="text-xs px-2 py-1 rounded transition
              bg-gray-200 hover:bg-gray-300 text-gray-800
              dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                    >
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            )}
        </div>
    );
}