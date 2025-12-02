import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="container">
            <div className={styles.navbar}>
                <Link href="/" className={styles.logo}>
                    <Logo />
                    SpeakHindiFast
                </Link>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/" className={styles.link}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/course" className={styles.link}>
                            Course
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className={styles.link}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
