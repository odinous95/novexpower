"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Props = {
    analyticsId: string;
};

const COOKIE_CONSENT_KEY = "novexpower_cookie_consent";

function hasAnalyticsConsent(): boolean {
    if (typeof window === "undefined") {
        return false;
    }

    return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

export default function AnalyticsConsentScript({ analyticsId }: Props) {
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        setAllowed(hasAnalyticsConsent());

        const update = () => setAllowed(hasAnalyticsConsent());

        window.addEventListener("storage", update);
        window.addEventListener("cookie-consent-changed", update);

        return () => {
            window.removeEventListener("storage", update);
            window.removeEventListener("cookie-consent-changed", update);
        };
    }, []);

    if (!analyticsId || !allowed) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}');
        `}
            </Script>
        </>
    );
}
