"use client"
import Image from 'next/image';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/data";

export function FAQ() {
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <div className="mt-6 lg:mt-10 max-w-xs mx-auto lg:mx-0">
                        <Image
                            src="/images/faq-illustration.svg"
                            alt="FAQ illustration"
                            width={640}
                            height={420}
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto">
                    {faqs && faqs.map((faq, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <span>
                                        <DisclosureButton className="flex items-center w-full gap-3 px-4 pt text-lg text-left">
                                            <div
                                                className={`w-6 h-6 my-2 rounded-full transition-colors shrink-0 self-center cursor-pointer ${open ? "bg-primary" : "bg-gray-300"}`}
                                            >
                                                <span className="w-full h-full flex items-center justify-center">
                                                    {open ? (
                                                        <BiMinus className="w-5 h-5 text-white" aria-hidden="true" />
                                                    ) : (
                                                        <BiPlus className="w-5 h-5 text-gray-700" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </div>
                                            <span className="text-2xl font-semibold">{faq.question}</span>
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </span>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
