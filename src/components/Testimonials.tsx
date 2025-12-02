import Image from "next/image";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
    const testimonials = [
        {
            quote:
                "This is the best spoken Hindi app I've used. The formula method makes it so easy to understand sentence structures without getting bogged down by the script.",
            author: "Lakshmi Narayan",
            role: "Software Architect",
            image: "/testimonials/lakshmi.png",
        },
        {
            quote:
                "I needed a Hindi language learning app that focused on conversation. In 30 days, I was able to speak in Hindi with my colleagues.",
            author: "Karthik Sundaram",
            role: "Product Manager",
            image: "/testimonials/karthik.png",
        },
        {
            quote:
                "The best Hindi course online for beginners. It covers Hindi grammar basics in a way that just clicks. Highly recommended!",
            author: "Anitha Reddy",
            role: "Marketing Director",
            image: "/testimonials/anitha.png",
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
                            <div className={styles.authorInfo}>
                                <Image
                                    src={t.image}
                                    alt={t.author}
                                    width={48}
                                    height={48}
                                    className={styles.avatar}
                                />
                                <div>
                                    <div className={styles.author}>{t.author}</div>
                                    <div className={styles.role}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
