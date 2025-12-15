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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I learn Hindi in 30 days?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! With just 15 minutes of daily practice, you can understand conversations and speak basic Hindi in less than 30 days. Our structured approach helps you build a strong foundation quickly. However, achieving complete fluency requires continued practice beyond the initial 30 days."
        }
      },
      {
        "@type": "Question",
        "name": "What are the prerequisites to start learning spoken Hindi for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You only need simple English, curiosity, and a willingness to practice. This course is designed specifically as spoken hindi for beginners, eliminating the need to learn the script first."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to become conversational in Hindi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will start to understand basic conversations within just 7 lessons. By consistently practicing out loud, you can learn to speak hindi in 30 days using our structured formula."
        }
      },
      {
        "@type": "Question",
        "name": "Who is this Hindi speaking course designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This course is perfect for: Working professionals moving to a Hindi-speaking city, Campus-placed students embarking on new careers, Travelers exploring India, Language enthusiasts eager to master spoken Hindi, and anyone seeking basic conversational Hindi."
        }
      },
      {
        "@type": "Question",
        "name": "Who is this course NOT suitable for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This course is not for those who want to read or write Hindi script, advanced native Hindi speakers, or school students preparing for academic exams. We focus purely on fast-tracking spoken hindi for non-native speakers."
        }
      },
      {
        "@type": "Question",
        "name": "What topics or skills are NOT covered in this course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not cover reading and writing the Hindi script (Devanagari), regional dialects, or preparation for school exams or degrees. Our focus is strictly on practical, conversational fluency."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

