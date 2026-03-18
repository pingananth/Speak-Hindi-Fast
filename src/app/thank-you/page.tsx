import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./thankyou.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You | SpeakHindiFast",
    description: "Your pre-order was successful. Full course launches on 14th April.",
};

export default function ThankYouPage() {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <h1 className={styles.title}>Payment Successful!</h1>

                    <p className={styles.message}>
                        Thank you for pre-ordering. Details will be emailed to the email ID you provided during checkout.
                    </p>

                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Full course launches on</span>
                            <span className={styles.infoValue}>14th April 2026</span>
                        </div>
                    </div>

                    <p className={styles.support}>
                        For any questions or support, reach out to{" "}
                        <a href="mailto:pingananth@gmail.com" className={styles.emailLink}>
                            pingananth@gmail.com
                        </a>
                    </p>

                    <Link href="/course" className={styles.backButton}>
                        ← Back to Course
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
