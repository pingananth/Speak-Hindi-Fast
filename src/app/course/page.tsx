"use client";

import Link from "next/link";
import { useState } from "react";
import { lessons } from "@/data/lessons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotifyModal from "@/components/NotifyModal";
import styles from "./course.module.css";

export default function CoursePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCTAClick = () => {
        setIsModalOpen(true);

        // Track CTA click in GA
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "cta_click", {
                event_category: "engagement",
                event_label: "want_more_lessons",
            });
        }
    };

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
                    {lessons.map((lesson) => (
                        <Link href={`/course/${lesson.slug}`} key={lesson.id} className={styles.card}>
                            <span className={styles.lessonNumber}>Lesson {lesson.id}</span>
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
                    ))}
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Want More Lessons?</h2>
                    <p className={styles.ctaText}>
                        We're adding new lessons regularly. Get notified when they're available!
                    </p>
                    <button onClick={handleCTAClick} className={styles.ctaButton}>
                        I Want More Lessons
                    </button>
                </div>
            </main>
            <Footer />

            <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
