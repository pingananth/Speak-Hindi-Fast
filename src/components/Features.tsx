import styles from "./Features.module.css";

export default function Features() {
    const features = [
        {
            title: "No Hindi Script",
            description:
                "Forget the alphabet. Start to speak Hindi language immediately using our transliteration method.",
        },
        {
            title: "Via English",
            description:
                "Learn Hindi through English. We use familiar concepts to explain Hindi grammar and vocabulary.",
        },
        {
            title: "Simple Formula for Grammar",
            description:
                "Master the easy way to learn Hindi grammar with our unique formula-based approach.",
        },
        {
            title: "Self-paced Online Videos",
            description:
                "Learn how to learn Hindi fast with our comprehensive video library available 24/7.",
        },
    ];

    return (
        <section className={styles.features}>
            <div className="container">
                <h2 className={styles.heading}>Why Choose Us?</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
