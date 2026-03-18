import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/blog";
import styles from "./blog.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpeakHindiFast Blog | Learn Spoken Hindi Faster",
  description: "Read our latest articles on how to learn spoken Hindi quickly using our formula-based approach. No script, no grammar overload.",
};

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return (
    <>
      <main>
        <Navbar />
        <div className={styles.blogContainer}>
          <div className="container">
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.subtitle}>
              Insights, tips, and stories to help you master spoken Hindi without the struggle of learning a new script.
            </p>

            <div className={styles.grid}>
              {allPostsData.map(({ slug, date, title, description }) => (
                <Link href={`/blog/${slug}`} key={slug} className={styles.card}>
                  <div className={styles.cardContent}>
                    <p className={styles.date}>{new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <h2 className={styles.postTitle}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <span className={styles.readMore}>
                      Read Article 
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            {allPostsData.length === 0 && (
              <p style={{ textAlign: 'center', color: '#6b7280' }}>Coming soon: More Hindi learning tips and stories.</p>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
