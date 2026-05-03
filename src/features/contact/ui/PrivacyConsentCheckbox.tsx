

export function PrivacyConsentCheckbox({ disabled }: { disabled?: boolean }) {
    return (
        <div className="w-full px-2 mb-6 flex items-center">
            <input
                type="checkbox"
                id="accept-privacy"
                name="accept_privacy"
                required
                className="mr-2 accent-primary"
                disabled={disabled}
            />
            <label htmlFor="accept-privacy" className="text-sm text-gray-700 dark:text-gray-200 select-none">
                I accept the <a href="/privacy" target="_blank" className="underline text-blue-600 dark:text-blue-400">data privacy policy</a> and terms.
            </label>
        </div>
    );
}