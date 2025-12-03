import { MetadataRoute } from 'next';
import { lessons } from '@/data/lessons';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://speakhindifast.in'; // Update with your actual domain

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/course`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    // Dynamic lesson pages
    const lessonPages = lessons.map((lesson) => ({
        url: `${baseUrl}/course/${lesson.slug}`,
        lastModified: lesson.lastUpdated ? new Date(lesson.lastUpdated) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...lessonPages];
}
