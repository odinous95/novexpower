"use client";

type Props = {
  title: string;
  pending: boolean;
};
export function SubmitButton({ title, pending }: Props) {
  return (
    <div className="relative">
      <button
        disabled={pending}
        type="submit"
        className={`inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(2,132,199,0.25)] transition duration-300 sm:py-3.5 sm:text-base ${pending
          ? "cursor-not-allowed bg-slate-400"
          : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:-translate-y-0.5 hover:from-sky-500 hover:to-cyan-500"
          }`}
      >
        {pending ? "Sending..." : title}
      </button>
    </div>
  );
}
