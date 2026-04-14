import styles from "./Footer.module.css";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} SpeakHindiFast. All rights reserved.
                    </div>
                    <div className={styles.links}>
                        <Link href="/blog" className={styles.link}>
                            Blog
                        </Link>
                        <Link href="/privacy" className={styles.link}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className={styles.link}>
                            Terms of Service
                        </Link>
                        <Link href="/copyright" className={styles.link}>
                            Copyright Policy
                        </Link>
                        <a 
                            href="https://www.instagram.com/speakhindifast/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.socialLink}
                        >
                            <Instagram size={18} />
                            <span>Follow us on Instagram</span>
                        </a>
                    </div>
                    <div className={styles.attribution}>
                        SpeakHindiFast is a product from Simul Company
                    </div>
                </div>
            </div>
        </footer>
    );
}

