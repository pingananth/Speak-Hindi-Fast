import { lessons } from "@/data/lessons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import styles from "./lesson.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return lessons.map((lesson) => ({
        slug: lesson.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const lesson = lessons.find((l) => l.slug === slug);
    if (!lesson) return { title: "Lesson Not Found" };
    return {
        title: `${lesson.title} | Speak Hindi Fast`,
        description: lesson.description,
    };
}

export default async function LessonPage({ params }: PageProps) {
    const { slug } = await params;
    const lesson = lessons.find((l) => l.slug === slug);

    if (!lesson) {
        notFound();
    }

    // Find next and previous lessons
    const currentIndex = lessons.findIndex((l) => l.id === lesson.id);
    const prevLesson = lessons[currentIndex - 1];
    const nextLesson = lessons[currentIndex + 1];

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://speakhindifast.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Course",
                "item": "https://speakhindifast.in/course"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": lesson.title,
                "item": `https://speakhindifast.in/course/${lesson.slug}`
            }
        ]
    };

    // JSON-LD Schema for LearningResource with embedded VideoObject and enhanced properties
    const learningResourceSchema = {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        "name": lesson.title,
        "description": lesson.description,
        "url": `https://speakhindifast.in/course/${lesson.slug}`,
        "educationalLevel": "Beginner",
        "learningResourceType": ["Video Lesson", "Exercise", "Activity"],
        "timeRequired": `PT${lesson.duration}M`,
        "inLanguage": "en",
        "interactivityType": "active",
        "position": lesson.id,
        "isPartOf": {
            "@type": "Course",
            "name": "Learn Hindi in 30 Days",
            "url": "https://speakhindifast.in/course",
            "provider": {
                "@type": "Organization",
                "name": "SpeakHindiFast"
            }
        },
        "video": {
            "@type": "VideoObject",
            "name": lesson.title,
            "description": lesson.description,
            "thumbnailUrl": `https://vumbnail.com/${lesson.vimeoId}.jpg`,
            "uploadDate": lesson.lastUpdated ? new Date(lesson.lastUpdated).toISOString() : new Date().toISOString(),
            "contentUrl": `https://player.vimeo.com/video/${lesson.vimeoId}`,
            "embedUrl": `https://player.vimeo.com/video/${lesson.vimeoId}`,
            "duration": `PT${lesson.duration}M`,
        },
        ...(lesson.downloads && lesson.downloads.length > 0 && {
            "associatedMedia": lesson.downloads.map(download => ({
                "@type": "DigitalDocument",
                "name": download.label,
                "url": `https://speakhindifast.in${download.url}`,
                "fileFormat": download.url.endsWith('.xlsx') ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : "application/pdf"
            }))
        }),
        "teaches": [
            "Hindi pronunciation",
            "Conversational Hindi phrases",
            "Hindi vocabulary through English"
        ]
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }}
            />

            <Navbar />
            <main className={styles.container}>
                <div className={styles.header}>
                    <Link href="/course" className={styles.backLink}>
                        ← Back to Course
                    </Link>
                    <h1 className={styles.title}>{lesson.title}</h1>
                    <div className={styles.meta}>
                        <span>{lesson.duration} mins</span>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className={styles.section}>
                    <div className={styles.sectionTitle}>Introduction</div>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: lesson.introduction || "<p>No introduction available.</p>" }}
                    />
                </section>

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

                {/* Navigation */}
                <div className={styles.navigation}>
                    {prevLesson ? (
                        <Link href={`/course/${prevLesson.slug}`} className={styles.navButton}>
                            ← {prevLesson.title}
                        </Link>
                    ) : (
                        <div></div> // Spacer
                    )}

                    {nextLesson ? (
                        <Link href={`/course/${nextLesson.slug}`} className={styles.navButton}>
                            {nextLesson.title} →
                        </Link>
                    ) : (
                        <div></div> // Spacer
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
