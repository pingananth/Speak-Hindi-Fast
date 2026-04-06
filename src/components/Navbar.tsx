"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import SyncUser from "./SyncUser";

export default function Navbar() {
    const { isSignedIn, isLoaded } = useAuth();

    return (
        <nav className="container">
            <SyncUser />
            <div className={styles.navbar}>
                <Link href="/" className={styles.logo}>
                    <Logo />
                    SpeakHindiFast
                </Link>
                <div className={styles.navRight}>
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
                    <div className={styles.auth}>
                        {isLoaded && (
                            <>
                                {!isSignedIn ? (
                                    <SignInButton mode="modal">
                                        <button className={styles.signInBtn}>Sign In</button>
                                    </SignInButton>
                                ) : (
                                    <UserButton />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}


