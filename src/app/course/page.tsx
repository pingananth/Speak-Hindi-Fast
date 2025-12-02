import { lessons } from "@/data/lessons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./course.module.css";

export const metadata = {
    title: "Course Curriculum | Speak Hindi Fast",
    description: "Explore our structured 30-day Hindi speaking course curriculum. From basic sounds to complex sentences.",
};

export default function CoursePage() {
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
                        <div key={lesson.id} className={styles.card}>
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
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
