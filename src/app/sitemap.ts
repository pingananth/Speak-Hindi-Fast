import { MetadataRoute } from 'next';
import { lessons } from '@/data/lessons';
import { getSortedPostsData } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        {
            url: `${baseUrl}/blog`,
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

    // Dynamic blog pages
    const allPosts = await getSortedPostsData();
    const blogPages = allPosts.map((post: { slug: string; date: string }) => {
        const postDate = new Date(post.date);
        const isValidDate = !isNaN(postDate.getTime());
        
        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: isValidDate ? postDate : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };
    });

    return [...staticPages, ...lessonPages, ...blogPages];
}
