"use client";

import { useState } from "react";
import styles from "./NotifyModal.module.css";

interface NotifyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NotifyModal({ isOpen, onClose }: NotifyModalProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setStatus("loading");

        try {
            const response = await fetch("/api/notify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error("Failed to submit");

            setStatus("success");

            // Track in GA
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "lesson_notification_signup", {
                    event_category: "engagement",
                    event_label: "course_page_cta",
                });
            }

            // Close after delay
            setTimeout(() => {
                onClose();
                setStatus("idle");
                setEmail("");
            }, 2000);
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={styles.closeButton} aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className={styles.content}>
                    <h2 className={styles.title}>Get Notified</h2>

                    {status === "success" ? (
                        <div className={styles.successMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.successIcon}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Thank you! We'll notify you when new lessons are available.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <p className={styles.description}>
                                Enter your email to get notified when we add more lessons to the course.
                            </p>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.input}
                                required
                                disabled={status === "loading"}
                            />
                            {status === "error" && (
                                <p className={styles.errorMessage}>
                                    Something went wrong. Please try again.
                                </p>
                            )}
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Submitting..." : "Notify Me"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
