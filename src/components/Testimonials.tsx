import styles from "./Testimonials.module.css";

export default function Testimonials() {
    const testimonials = [
        {
            quote:
                "This is the best spoken Hindi app I've used. The formula method makes it so easy to understand sentence structures without getting bogged down by the script.",
            author: "Sarah Jenkins",
            role: "Travel Blogger",
        },
        {
            quote:
                "I needed a Hindi language learning app that focused on conversation. In 30 days, I was able to speak in Hindi with my colleagues.",
            author: "David Chen",
            role: "Software Engineer",
        },
        {
            quote:
                "The best Hindi course online for beginners. It covers Hindi grammar basics in a way that just clicks. Highly recommended!",
            author: "Priya Patel",
            role: "Student",
        },
    ];

    return (
        <section className={styles.testimonials}>
            <div className="container">
                <h2 className={styles.heading}>Success Stories</h2>
                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.quote}>"{t.quote}"</p>
                            <div>
                                <div className={styles.author}>{t.author}</div>
                                <div className={styles.role}>{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
