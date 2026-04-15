import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    variant?: "auto" | "dark-bg" | "light-bg";
};

export function Logo({ variant = "auto" }: LogoProps) {
    if (variant === "dark-bg") {
        return (
            <Link href="/" aria-label="Go to homepage">
                <Image
                    alt="NovexPower logo"
                    className="cursor-pointer h-auto w-auto"
                    height={70}
                    width={70}
                    sizes="50px"
                    src="/images/logo-dark.png"
                />
            </Link>
        );
    }

    if (variant === "light-bg") {
        return (
            <Link href="/" aria-label="Go to homepage">
                <Image
                    alt="NovexPower logo"
                    className="cursor-pointer h-auto w-auto"
                    height={70}
                    width={70}
                    sizes="50px"
                    src="/images/logo-light.png"
                />
            </Link>
        );
    }

    return (
        <Link href="/" aria-label="Go to homepage">
            {/* Dark mode logo */}
            <Image
                alt="NovexPower logo"
                className="hidden dark:block cursor-pointer w-auto h-auto"
                height={70}
                width={70}
                sizes="50px"
                src="/images/logo-dark.png"
            />

            {/* Light mode logo */}
            <Image
                alt="NovexPower logo"
                className="block dark:hidden cursor-pointer w-auto h-auto"
                height={70}
                width={70}
                sizes="50px"
                src="/images/logo-light.png"
            />

        </Link>
    );
}
