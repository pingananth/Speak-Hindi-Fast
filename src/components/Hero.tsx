import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className="container">
            <div className={styles.hero}>
                <h1 className={styles.title}>
                    Speak Hindi Fluent in 30 Days: The Formula Way
                </h1>
                <p className={styles.subtext}>
                    The only structured system that eliminates the Hindi script barrier to
                    unlock practical fluency. Perfect for professionals, students, and
                    travelers who need fast, real-world results.
                </p>
                <button className={`btn-primary ${styles.cta}`}>
                    Start Free lesson
                </button>
            </div>
        </section>
    );
}
