import type { Metadata } from "next";
import Link from "next/link";
import { siteDetails } from "@/data";

const effectiveDate = "April 15, 2026";

export const metadata: Metadata = {
    title: `Terms of Service | ${siteDetails.siteName}`,
    description: `Review the terms that govern use of the ${siteDetails.siteName} website and services.`,
};

export default function TermsOfServicePage() {
    return (
        <section className="bg-slate-50 pb-16 pt-28 sm:pb-20 sm:pt-32 md:pt-36">
            <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
                <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                    <header className="mb-8 border-b border-slate-200 pb-6">
                        <h1 className="manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">Terms of Service</h1>
                        <p className="mt-3 text-base text-slate-600">Effective date: {effectiveDate}</p>
                        <p className="mt-4 text-slate-700">
                            These Terms of Service ("Terms") govern your use of the {siteDetails.siteName} website and related
                            services. By using this website, you agree to these Terms.
                        </p>
                    </header>

                    <div className="space-y-8 text-slate-700">
                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">1. Website Use</h2>
                            <p className="mt-3">
                                You agree to use this website only for lawful purposes and in a way that does not infringe the rights
                                of others or restrict their use of the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">2. Intellectual Property</h2>
                            <p className="mt-3">
                                All content on this website, including text, graphics, logos, and design elements, is owned by or
                                licensed to {siteDetails.siteName} and protected by applicable intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">3. Service Information</h2>
                            <p className="mt-3">
                                Information on this site is provided for general informational purposes and may be updated or changed
                                without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">4. Third-Party Links</h2>
                            <p className="mt-3">
                                This site may include links to third-party websites. We are not responsible for the content, policies,
                                or practices of third-party sites.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">5. Disclaimer of Warranties</h2>
                            <p className="mt-3">
                                This website is provided on an "as is" and "as available" basis, without warranties of any kind,
                                express or implied, to the fullest extent permitted by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">6. Limitation of Liability</h2>
                            <p className="mt-3">
                                To the fullest extent permitted by law, {siteDetails.siteName} will not be liable for indirect,
                                incidental, consequential, or special damages arising from or related to your use of this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">7. Governing Law</h2>
                            <p className="mt-3">
                                These Terms are governed by applicable laws of the jurisdiction in which {siteDetails.siteName}
                                operates, without regard to conflict-of-law principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">8. Changes to Terms</h2>
                            <p className="mt-3">
                                We may update these Terms from time to time. Continued use of the website after updates means you
                                accept the revised Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="manrope text-2xl font-bold text-slate-900">9. Contact</h2>
                            <p className="mt-3">
                                For any questions about these Terms, contact us at info@novexpower.com.
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
