import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className="container">
            <div className={styles.hero}>
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
        </section>
    );
}
