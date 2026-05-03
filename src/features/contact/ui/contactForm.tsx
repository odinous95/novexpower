"use client";

import { useActionState, useEffect, useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ContactData } from "../types";
import { Input, SubmitButton } from "@/components/index";
import { sendTicket } from "../actions/supportTicket";
import { PrivacyConsentCheckbox } from "./PrivacyConsentCheckbox";

type ContactFormProps = {
  data: ContactData;
  mode?: "section" | "embedded";
  onSuccess?: () => void;
};

export function ContactForm({ data, mode = "section", onSuccess }: ContactFormProps) {
  const {
    enable,
    title,
    description,
    inputs,
    textareas,
    submit,
    successMessage,
    errorMessage,
  } = data.frontmatter;

  const [state, formAction, isPending] = useActionState(sendTicket, null);
  const [fieldValues, setFieldValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state?.success) {
      setFieldValues({
        name: "",
        email: "",
        message: "",
      });
      onSuccess?.();
    }
  }, [state?.success, onSuccess]);

  if (!enable) return null;

  const isEmbedded = mode === "embedded";

  return (
    <section
      id="contact"
      className={isEmbedded ? "overflow-hidden" : "overflow-hidden pb-12 pt-0 md:pb-16 lg:pb-20"}
    >
      <div className={isEmbedded ? "" : "container"}>
        <div
          className={`mx-auto mb-0 w-full rounded-2xl border border-black/5 bg-white/95 px-3 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:px-5 sm:py-5 md:px-6 md:py-6 ${isEmbedded ? "max-w-none" : "max-w-5xl sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12"}`}
          data-wow-delay=".15s"
        >
          <h2 className={`text-center font-bold tracking-tight text-slate-950 dark:text-white ${isEmbedded ? "mb-2 text-xl sm:text-2xl" : "mb-3 text-2xl sm:text-3xl lg:text-4xl"}`}>
            {title}
          </h2>
          <p className={`mx-auto text-center font-medium leading-6 text-slate-600 dark:text-slate-300 ${isEmbedded ? "mb-4 max-w-2xl text-xs sm:text-sm" : "mb-8 max-w-3xl text-sm sm:text-base md:mb-10 md:leading-8"}`}>
            {description}
          </p>

          <form action={formAction}>
            <div className={isEmbedded ? "space-y-3 sm:space-y-4" : "space-y-4 sm:space-y-5"}>
              {/* Render text inputs */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {inputs.map((field, index) => (
                  <div
                    key={field.name}
                    className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                  >
                    <Input
                      id={field.name}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      disabled={isPending}
                      value={fieldValues[field.name as "name" | "email"] ?? ""}
                      onChange={(event) => {
                        const value = event.target.value;
                        setFieldValues((prev) => ({
                          ...prev,
                          [field.name]: value,
                        }));
                      }}
                      error={
                        !state?.success
                          ? state?.errors?.[field.name as "name" | "email"]
                          : undefined
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Render textareas */}
              {textareas.map((field) => (
                <div key={field.name}>
                  <textarea
                    name={field.name}
                    rows={field.rows || 4}
                    placeholder={field.label}
                    value={fieldValues[field.name as "message"] ?? ""}
                    onChange={(event) => {
                      const value = event.target.value;
                      setFieldValues((prev) => ({
                        ...prev,
                        [field.name]: value,
                      }));
                    }}
                    className={`w-full resize-none rounded-2xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-emerald-400 dark:focus:bg-white/10 sm:px-5 sm:py-4 sm:text-base ${!state?.success && state?.errors?.message
                      ? "border-red-400 focus:border-red-400 dark:border-red-400 dark:focus:border-red-400"
                      : "border-slate-200"
                      }`}
                    disabled={isPending}
                    aria-invalid={Boolean(!state?.success && state?.errors?.message)}
                    aria-describedby={!state?.success && state?.errors?.message ? "message-error" : undefined}
                  />
                  {!state?.success && state?.errors?.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-600 dark:text-red-400">
                      {state.errors.message}
                    </p>
                  )}
                </div>
              ))}
              <PrivacyConsentCheckbox />
              <div>
                <SubmitButton
                  title={submit.label}
                  aria-disabled={isPending}
                  pending={isPending}
                />
              </div>
            </div>

            {state && (
              <div
                className={`mt-4 flex items-center gap-2 rounded-2xl p-3 text-sm sm:p-4 ${state.success
                  ? "bg-green-50 text-green-600 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-300"
                  }`}
                aria-live="polite"
                aria-atomic="true"
              >
                <ExclamationCircleIcon
                  className={`h-5 w-5 shrink-0 ${state.success ? "text-green-500" : "text-red-500"
                    }`}
                />
                <strong className="leading-6">
                  {state.success
                    ? successMessage
                    : state.message || errorMessage}
                </strong>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
