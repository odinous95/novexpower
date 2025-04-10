import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href={"/"}>
            {/* Dark mode logo */}
            <Image
                alt="logo"
                className="hidden dark:block cursor-pointer w-auto h-auto"
                height="70"
                width="70"
                sizes="50px"
                src="/images/logo-dark.png"
            />

            {/* Light mode logo */}
            <Image
                alt="logo"
                className="block dark:hidden cursor-pointer w-auto h-auto"
                height="70"
                width="70"
                sizes="70px"
                src="/images/logo-light.png"
            />

        </Link>
    );
}
