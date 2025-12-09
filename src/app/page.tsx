import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SpeakHindiFast",
    "url": "https://speakhindifast.in",
    "logo": "https://speakhindifast.in/icon.svg",
    "description": "Learn to speak Hindi fluently in 30 days with our structured formula-based approach.",
    "sameAs": [
      // Add your social media URLs here when available
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SpeakHindiFast",
    "url": "https://speakhindifast.in",
    "description": "The only structured system that eliminates the Hindi script barrier to unlock practical fluency.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://speakhindifast.in/course?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Hindi in English: Learn to Speak Hindi in 30 Days",
    "description": "A structured 30-day Hindi speaking course that eliminates the Hindi script barrier.",
    "provider": {
      "@type": "Organization",
      "name": "SpeakHindiFast",
      "sameAs": "https://speakhindifast.in"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT30D"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <main>
        <Navbar />
        <Hero />
        <Features />
        <WhoIsThisFor />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

