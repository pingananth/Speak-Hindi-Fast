"use client";

import { useAuth, SignInButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Lesson } from "@/data/lessons";
import { AUTH_GATED_LESSON_ID, PAID_LESSON_START_ID } from "@/config/lessons";
import { Lock, Mail, ChevronRight } from "lucide-react";
import styles from "./GatedLessonContent.module.css";
import DownloadButton from "./DownloadButton";
import Link from "next/link";

interface GatedLessonContentProps {
    lesson: Lesson;
}

export default function GatedLessonContent({ lesson }: GatedLessonContentProps) {
    const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
    const user = useQuery(api.users.currentUser);
    const isPro = user?.isPro ?? false;

    const isAuthGated = lesson.id === AUTH_GATED_LESSON_ID;
    const isPaidGated = lesson.id >= PAID_LESSON_START_ID;

    // Access Logic
    const hasAccess = 
        (!isAuthGated && !isPaidGated) || // Public
        (isAuthGated && isSignedIn) ||     // Auth-gated & Signed In
        (isPaidGated && isPro);            // Paid-gated & Is Pro

    if (!isAuthLoaded) {
        return <div className={styles.loading}>Checking access...</div>;
    }

    if (!hasAccess) {
        return (
            <div className={styles.lockedContainer}>
                <div className={styles.lockedCard}>
                    {isPaidGated ? (
                        <>
                            <div className={styles.iconWrapperPaid}>
                                <Lock size={48} />
                            </div>
                            <h2 className={styles.lockedTitle}>Premium Lesson</h2>
                            <p className={styles.lockedText}>
                                This lesson is part of the Full Course. Pre-order now to get lifetime access to all lessons dropping on April 14th.
                            </p>
                            <Link href="/course" className={styles.ctaButton}>
                                View Pre-order Details
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className={styles.iconWrapperAuth}>
                                <Mail size={48} />
                            </div>
                            <h2 className={styles.lockedTitle}>Free with Email</h2>
                            <p className={styles.lockedText}>
                                This lesson is free! Just sign in with your email to unlock the video and study materials.
                            </p>
                            <SignInButton mode="modal">
                                <button className={styles.ctaButton}>
                                    Sign In to Unlock <ChevronRight size={20} />
                                </button>
                            </SignInButton>
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Vimeo Video Widget */}
            {lesson.vimeoId && (
                <section className={styles.videoSection}>
                    <h2 className={styles.videoCaption}>Watch: {lesson.title}</h2>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src={`https://player.vimeo.com/video/${lesson.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title={lesson.title}
                        ></iframe>
                    </div>
                </section>
            )}

            {/* Notes / Activity Section */}
            <section className={styles.section}>
                <div className={styles.sectionTitle}>Notes & Activities</div>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: lesson.notes || "<p>No notes available.</p>" }}
                />

                {/* Downloads Section */}
                {lesson.downloads && lesson.downloads.length > 0 && (
                    <div className={styles.downloads}>
                        {lesson.downloads.map((download, index) => (
                            <DownloadButton
                                key={index}
                                label={download.label}
                                url={download.url}
                            />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
