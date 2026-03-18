import { getPostData, getAllPostSlugs } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./post.module.css";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return {
    title: `${postData.title} | SpeakHindiFast`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
    }
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <>
      <main>
        <Navbar />
        <article className="container">
          <div className={styles.postContainer}>
            <Link href="/blog" className={styles.backLink}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 10H4.16666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 15.8333L4.16666 10L10 4.16666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
            
            <header>
              <h1 className={styles.title}>{postData.title}</h1>
              <p className={styles.date}>Published on {new Date(postData.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </header>

            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />

            <div className={styles.cta}>
              <h2>Ready to Speak Hindi Fluently?</h2>
              <p>Join 5,300+ learners who have mastered spoken Hindi without the headache of grammar overload.</p>
              <Link href="/course" className="btn-primary">
                Start My 30-Day Journey
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
