"use client";
import React from "react";

type Props = {
  id: string;
  name: string;
  label: string;
  type: string;
  disabled: boolean;
  error?: string | undefined;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ id, name, label, type, disabled, error, value, onChange }: Props) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        disabled={disabled}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`peer relative z-10 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-white/10 sm:px-5 sm:py-4 sm:text-base ${error
          ? "border-red-400 focus:border-red-400 dark:border-red-400 dark:focus:border-red-400"
          : "border-slate-200"
          }`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3 z-20 origin-[0] -translate-y-4 scale-75 text-xs text-slate-600 transition duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-emerald-600 dark:text-slate-300 dark:peer-focus:text-emerald-300 sm:left-5 sm:top-4"
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
