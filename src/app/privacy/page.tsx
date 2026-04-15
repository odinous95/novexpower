import type { Metadata } from "next";
import Link from "next/link";
import { siteDetails } from "@/data";

const effectiveDate = "April 15, 2026";

export const metadata: Metadata = {
    title: `Privacy & Data Policy | ${siteDetails.siteName}`,
    description: `Learn how ${siteDetails.siteName} collects, uses, and protects your personal information.`,
};

export default function PrivacyPolicyPage() {
    return (
        <section className="bg-slate-50 pb-16 pt-28 sm:pb-20 sm:pt-32 md:pt-36">
            <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
                <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                    <header className="mb-8 border-b border-slate-200 pb-6">
                        <h1 className="manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">Privacy &amp; Data Policy</h1>
                        <p className="mt-3 text-base text-slate-600">Effective date: {effectiveDate}</p>
                        <p className="mt-4 text-slate-700">
                            This policy explains how {siteDetails.siteName} ("we", "us", or "our") collects, uses,
                            discloses, and safeguards your information when you visit our website.
                        </p>
                    </header>

                    <div className="space-y-8 text-slate-700">
                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">1. Information We Collect</h2>
                            <p className="mt-3">We may collect the following categories of information:</p>
                            <ul className="mt-3 list-disc space-y-2 pl-6">
                                <li>Contact information you submit, such as name, email address, company name, and phone number.</li>
                                <li>Inquiry details and communications you send through our contact form or email.</li>
                                <li>Technical and usage data such as browser type, pages visited, and approximate location.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
                            <p className="mt-3">We use information to:</p>
                            <ul className="mt-3 list-disc space-y-2 pl-6">
                                <li>Respond to your requests and provide customer support.</li>
                                <li>Evaluate project opportunities and deliver requested services.</li>
                                <li>Improve website performance, reliability, and user experience.</li>
                                <li>Comply with legal obligations and protect our rights.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">3. Sharing of Information</h2>
                            <p className="mt-3">
                                We do not sell your personal information. We may share information with service providers who help us
                                operate our website and communications, and when required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">4. Data Retention</h2>
                            <p className="mt-3">
                                We retain personal information only for as long as reasonably necessary to fulfill the purposes
                                described in this policy, unless a longer retention period is required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">5. Your Choices</h2>
                            <p className="mt-3">
                                You may request access, correction, or deletion of your personal information by contacting us at
                                info@novexpower.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">6. Security</h2>
                            <p className="mt-3">
                                We use reasonable administrative and technical safeguards to protect personal information. No security
                                method is guaranteed to be fully secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">7. Cookies and Tracking</h2>
                            <p className="mt-3">
                                We use cookies and similar technologies for essential functionality and website analytics.
                                You can accept or reject non-essential cookies using the cookie banner. Your choice is stored
                                in your browser and can be changed by clearing site storage.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">8. Policy Updates</h2>
                            <p className="mt-3">
                                We may update this Privacy and Data Policy from time to time. Changes are effective when posted
                                on this page with a revised effective date.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">9. Contact</h2>
                            <p className="mt-3">
                                If you have questions about this Privacy Policy, contact us at info@novexpower.com.
                            </p>
                        </section>
                    </div>

                    <div className="mt-10 border-t border-slate-200 pt-6">
                        <Link href="/" className="font-semibold text-sky-700 transition hover:text-sky-600">
                            Return to home
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}
