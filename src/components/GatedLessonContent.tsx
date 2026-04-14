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
import { track } from "@amplitude/unified";
import { useEffect } from "react";
import VocabularyTable from "./VocabularyTable";
import QuestionTable from "./QuestionTable";

import { useSearchParams } from "next/navigation";

interface GatedLessonContentProps {

    lesson: Lesson;
}

export default function GatedLessonContent({ lesson }: GatedLessonContentProps) {
    const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
    const searchParams = useSearchParams();
    const user = useQuery(api.users.currentUser);
    const isPro = user?.isPro ?? false;

    // Local Testing Bypass: Add ?testPro=true to the URL in dev mode to skip the license check
    const isTestPro = process.env.NODE_ENV === "development" && searchParams.get("testPro") === "true";

    // Track Lesson Viewed on mount
    useEffect(() => {
        if (isAuthLoaded) {
            track("Lesson Viewed", {
                lessonId: lesson.id,
                lessonTitle: lesson.title,
                isGated: lesson.id >= AUTH_GATED_LESSON_ID,
                isPurchased: isPro || isTestPro,
                isSignedIn: !!isSignedIn,
                isTestBypass: isTestPro
            });
        }
    }, [isAuthLoaded, lesson.id, lesson.title, isPro, isSignedIn, isTestPro]);

    const isAuthGated = lesson.id === AUTH_GATED_LESSON_ID;

    const isPaidGated = lesson.id >= PAID_LESSON_START_ID;

    // Access Logic
    const hasAccess = 
        (!isAuthGated && !isPaidGated) || // Public
        (isAuthGated && isSignedIn) ||     // Auth-gated & Signed In
        (isPaidGated && (isPro || isTestPro));            // Paid-gated & (Is Pro or Test Bypass)

    if (!isAuthLoaded && !isTestPro) {
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
                                This lesson is part of the Full Course. Enroll now to get instant lifetime access to all lessons and study materials.
                            </p>
                            <Link 
                                href="/course" 
                                className={styles.ctaButton}
                                onClick={() => track("Enroll Clicked", { lessonId: lesson.id, lessonTitle: lesson.title })}
                            >
                                View Enrollment Details
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
                                <button 
                                    className={styles.ctaButton}
                                    onClick={() => track("Sign In Started", { lessonId: lesson.id, lessonTitle: lesson.title })}
                                >
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

            {/* Vocabulary Table Section */}
            {lesson.vocabulary && lesson.vocabulary.length > 0 && (
                <section className={styles.section}>
                    <div className={styles.sectionTitle}>Vocabulary & Pronunciation</div>
                    <VocabularyTable vocabulary={lesson.vocabulary} />
                </section>
            )}

            {/* Question/Example Table Section */}
            {lesson.questions && lesson.questions.length > 0 && (
                <section className={styles.section}>
                    <div className={styles.sectionTitle}>Question Verbs & Examples</div>
                    <QuestionTable questions={lesson.questions} />
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
