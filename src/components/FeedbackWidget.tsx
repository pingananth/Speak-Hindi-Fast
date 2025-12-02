"use client";

import { useState } from "react";
import styles from "./FeedbackWidget.module.css";

export default function FeedbackWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setStatus("loading");

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, message }),
            });

            if (!response.ok) throw new Error("Failed to send feedback");

            setStatus("success");
            setMessage("");

            // Track in GA
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "feedback_submitted", {
                    event_category: "engagement",
                    event_label: "feedback_widget",
                });
            }

            // Close after a delay
            setTimeout(() => {
                setIsOpen(false);
                setStatus("idle");
            }, 3000);
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className={styles.widgetContainer}>
            {isOpen && (
                <div className={styles.panel}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>Share Feedback</h3>
                        <button onClick={toggleOpen} className={styles.closeButton} aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {status === "success" ? (
                        <div className={`${styles.message} ${styles.success}`}>
                            Thank you for your feedback! We appreciate it.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="feedback-email" className={styles.label}>
                                    Email (Optional)
                                </label>
                                <input
                                    id="feedback-email"
                                    type="email"
                                    className={styles.input}
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="feedback-message" className={styles.label}>
                                    Your Feedback
                                </label>
                                <textarea
                                    id="feedback-message"
                                    className={styles.textarea}
                                    placeholder="Tell us what you think..."
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            {status === "error" && (
                                <div className={`${styles.message} ${styles.error}`}>
                                    Something went wrong. Please try again.
                                </div>
                            )}
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Sending..." : "Send Feedback"}
                            </button>
                        </form>
                    )}
                </div>
            )}

            <button onClick={toggleOpen} className={styles.toggleButton} aria-label="Open Feedback">
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3.75h9m-9 3.75h9m-9 3.75h9" />
                    </svg>
                )}
            </button>
        </div>
    );
}
