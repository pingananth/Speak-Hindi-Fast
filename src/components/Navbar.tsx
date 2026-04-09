"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import SyncUser from "./SyncUser";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const { isSignedIn, isLoaded } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="container">
            <SyncUser />
            <div className={styles.navbar}>
                <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
                    <Logo />
                    SpeakHindiFast
                </Link>

                <button 
                    className={styles.hamburger} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={`${styles.navRight} ${isOpen ? styles.active : ""}`}>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/course" className={styles.link} onClick={() => setIsOpen(false)}>
                                Course
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className={styles.link} onClick={() => setIsOpen(false)}>
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



