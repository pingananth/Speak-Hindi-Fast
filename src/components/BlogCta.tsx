"use client";

import Link from "next/link";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

interface BlogCtaProps {
    href: string;
    label: string;
    className?: string;
    postSlug: string;
    postTitle: string;
}

export default function BlogCta({
    href,
    label,
    className = "",
    postSlug,
    postTitle,
}: BlogCtaProps) {
    const handleClick = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "blog_cta_click", {
                event_category: "Blog",
                event_label: postTitle,
                blog_slug: postSlug,
                cta_destination: href,
            });
        }
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {label}
        </Link>
    );
}
