import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} SpeakHindiFast. All rights reserved.
                    </div>
                    <div className={styles.links}>
                        <Link href="/privacy" className={styles.link}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className={styles.link}>
                            Terms of Service
                        </Link>
                        <Link href="/copyright" className={styles.link}>
                            Copyright Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
