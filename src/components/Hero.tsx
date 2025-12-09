import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className="container">
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Speak Hindi Fluent in 30 Days: The Formula Way
                    </h1>
                    <p className={styles.subtext}>
                        Learn Hindi through English online with our structured system designed for
                        Hindi conversation through English. No script required—perfect for
                        professionals, students, and travelers who need fast, real-world results.
                    </p>
                    <Link href="/course" className={`btn-primary ${styles.cta}`}>
                        Start Free lesson
                    </Link>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero-formula.webp"
                        alt="Learn Hindi formula: English to Hindi translation example showing 'I am eating' becomes 'Main kha raha hoon'"
                        width={600}
                        height={400}
                        priority
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </section>
    );
}
