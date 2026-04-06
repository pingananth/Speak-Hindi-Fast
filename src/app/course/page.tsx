"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { lessons } from "@/data/lessons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./course.module.css";
import { AUTH_GATED_LESSON_ID, PAID_LESSON_START_ID } from "@/config/lessons";
import { Lock, Mail, PlayCircle } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAuth } from "@clerk/nextjs";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export default function CoursePage() {
    const [isIndia, setIsIndia] = useState(true);

    useEffect(() => {
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setIsIndia(tz === "Asia/Kolkata" || tz === "Asia/Calcutta");
        } catch {
            setIsIndia(true);
        }
    }, []);

    const handlePreorderClick = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "preorder_cta_click", {
                event_category: "conversion",
                event_label: isIndia ? "india" : "row",
                price: isIndia ? "999" : "19",
                currency: isIndia ? "INR" : "USD",
            });
        }
    };

    const paymentLink = isIndia
        ? "https://rzp.io/rzp/tkRbcZqM"
        : "https://polar.sh/checkout/polar_c_ZCD0GfiCQiQEqpbyP3khu6SNbn4EIYetnSRow4AUTOk";

    const price = isIndia ? "₹999" : "$19";

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Course Curriculum</h1>
                    <p className={styles.subtitle}>
                        A step-by-step journey to fluent Hindi. Master the language with our structured lessons designed for English speakers.
                    </p>
                </div>

                <div className={styles.grid}>
                    {lessons.map((lesson) => {
                        const isAuthGated = lesson.id === AUTH_GATED_LESSON_ID;
                        const isPaidGated = lesson.id >= PAID_LESSON_START_ID;
                        
                        return (
                            <Link href={`/course/${lesson.slug}`} key={lesson.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.lessonNumber}>Lesson {lesson.id}</span>
                                    {isPaidGated ? (
                                        <Lock size={16} className={styles.lockIcon} />
                                    ) : isAuthGated ? (
                                        <Mail size={16} className={styles.authIcon} />
                                    ) : (
                                        <PlayCircle size={16} className={styles.freeIcon} />
                                    )}
                                </div>
                                <h2 className={styles.lessonTitle}>{lesson.title}</h2>
                                <p className={styles.lessonDescription}>{lesson.description}</p>
                                <div className={styles.meta}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className={styles.icon}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {lesson.duration} minutes
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Pre-Order Section */}
                <div className={styles.ctaSection}>
                    <span className={styles.badge}>Pre-Order</span>
                    <h2 className={styles.ctaTitle}>Full Course Dropping 14th April</h2>
                    <p className={styles.ctaText}>
                        Get lifetime access at the lowest price. Pre-order now before prices go up.
                    </p>

                    <p className={styles.nextLessons}>
                        Next lessons: Other Tenses · More Verbs, Adverbs · Exceptions · Prepositions, Conjunctions, Conjugations, Adjectives and a lot more
                    </p>
                    <ul className={styles.perks}>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Now at <strong>{price}</strong> — one-time payment
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Lifetime access to all videos &amp; future features
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Prices will increase post launch
                        </li>
                    </ul>

                    <a
                        href={paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                        onClick={handlePreorderClick}
                    >
                        Pre-Order for {price}
                    </a>

                </div>
            </main>
            <Footer />
        </>
    );
}

