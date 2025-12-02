"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQ() {
    const faqs = [
        {
            question: "What are the prerequisites to start learning spoken Hindi for beginners?",
            answer: (
                <>
                    You only need simple English, curiosity, and a willingness to practice. This course is designed specifically as <strong>spoken hindi for beginners</strong>, eliminating the need to learn the script first.
                </>
            ),
        },
        {
            question: "How long does it take to become conversational in Hindi?",
            answer: (
                <>
                    You will start to understand basic conversations within just 7 lessons. By consistently practicing out loud, you can <strong>learn to speak hindi in 30 days</strong> using our structured formula.
                </>
            ),
        },
        {
            question: "Who is this Hindi speaking course designed for?",
            answer: (
                <>
                    This course is perfect for:
                    <ul>
                        <li>Working professionals moving to a Hindi‑speaking city.</li>
                        <li>Campus‑placed students embarking on new careers.</li>
                        <li>Travelers exploring India.</li>
                        <li>Language enthusiasts eager to master spoken Hindi.</li>
                        <li>Married South Indian women interested in Hindi serials.</li>
                        <li>Anyone seeking basic conversational Hindi.</li>
                    </ul>
                </>
            ),
        },
        {
            question: "Who is this course NOT suitable for?",
            answer: (
                <>
                    This course is not for those who want to read or write Hindi script, advanced native Hindi speakers, or school students preparing for academic exams. We focus purely on fast‑tracking <strong>spoken hindi</strong> for non‑native speakers.
                </>
            ),
        },
        {
            question: "What topics or skills are NOT covered in this course?",
            answer: (
                <>
                    We do not cover reading and writing the Hindi script (Devanagari), regional dialects, or preparation for school exams or degrees. Our focus is strictly on practical, conversational fluency.
                </>
            ),
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Frequently Asked Questions</h2>
                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.item}>
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className={styles.answer}>{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
