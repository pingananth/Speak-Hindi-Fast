"use client";

import React from "react";
import { Volume2 } from "lucide-react";
import styles from "./VocabularyTable.module.css";

interface VocabularyItem {
    emoji: string;
    english: string;
    hindi: string;
    transliteration: string;
}

interface VocabularyTableProps {
    vocabulary: VocabularyItem[];
}

const VocabularyTable: React.FC<VocabularyTableProps> = ({ vocabulary }) => {
    const playSound = (text: string) => {
        if (!window.speechSynthesis) {
            alert("Sorry, your browser does not support text to speech!");
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "hi-IN"; // Hindi (India)
        
        // Find a Hindi voice if possible
        const voices = window.speechSynthesis.getVoices();
        const hindiVoice = voices.find(voice => voice.lang.includes("hi-IN"));
        if (hindiVoice) {
            utterance.voice = hindiVoice;
        }

        utterance.rate = 0.9; // Slightly slower for better clarity
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.emojiCell}>Icon</th>
                        <th>English</th>
                        <th>Hindi</th>
                        <th style={{ textAlign: "center" }}>Sound</th>
                    </tr>
                </thead>
                <tbody>
                    {vocabulary.map((item, index) => (
                        <tr key={index} className={styles.row}>
                            <td className={styles.emojiCell}>{item.emoji}</td>
                            <td>{item.english}</td>
                            <td className={styles.translitCell}>{item.transliteration}</td>
                            <td style={{ textAlign: "center" }}>
                                <button
                                    className={styles.playButton}
                                    onClick={() => playSound(item.hindi)}
                                    title={`Listen to ${item.english} in Hindi`}
                                    aria-label={`Play sound for ${item.english}`}
                                >
                                    <Volume2 size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default VocabularyTable;
