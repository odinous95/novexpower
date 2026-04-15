"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "novexpower_cookie_consent";

export type CookieConsent = "accepted" | "rejected";

function readStoredConsent(): CookieConsent | null {
    if (typeof window === "undefined") {
        return null;
    }

    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
        return stored;
    }

    return null;
}

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(readStoredConsent() === null);
    }, []);

    const saveConsent = (consent: CookieConsent) => {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, consent);
        window.dispatchEvent(new Event("cookie-consent-changed"));
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-slate-300 bg-white/95 px-4 py-4 shadow-2xl backdrop-blur sm:px-6">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-slate-700">
                    We use cookies and similar technologies to improve website performance and analytics. Read our{" "}
                    <Link href="/data-policy" className="font-semibold text-sky-700 hover:text-sky-600">
                        Data Policy
                    </Link>
                    .
                </p>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => saveConsent("rejected")}
                        className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                        Reject
                    </button>
                    <button
                        type="button"
                        onClick={() => saveConsent("accepted")}
                        className="rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
