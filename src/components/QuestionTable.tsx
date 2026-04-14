import React from "react";
import styles from "./QuestionTable.module.css";
import { Volume2 } from "lucide-react";

interface QuestionItem {
    emoji?: string;
    english: string;
    hindi: string;
    hindiAudio?: string;
    englishExample: string;
    hindiExample: string;
}


interface QuestionTableProps {
    questions: QuestionItem[];
}

const QuestionTable: React.FC<QuestionTableProps> = ({ questions }) => {
    const playSound = (text: string) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "hi-IN";
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.tableHeader}>
                <div className={styles.headerCell}>English</div>
                <div className={styles.headerCell}>Hindi</div>
                <div className={styles.headerCell}>Sound</div>
                <div className={styles.headerCell}>English Example</div>
                <div className={styles.headerCell}>Hindi Example</div>
            </div>
            <div className={styles.tableBody}>
                {questions.map((item, index) => (
                    <div key={index} className={styles.row}>
                        <div className={styles.cell} data-label="English">
                            <span className={styles.mainText}>
                                {item.emoji && <span className={styles.emoji}>{item.emoji} </span>}
                                {item.english}
                            </span>
                        </div>

                        <div className={styles.cell} data-label="Hindi">
                            <span className={styles.hindiText}>{item.hindi}</span>
                        </div>
                        <div className={styles.cell} data-label="Sound">
                            {item.hindiAudio ? (
                                <button
                                    className={styles.playButton}
                                    onClick={() => playSound(item.hindiAudio!)}
                                    title={`Listen to ${item.english} in Hindi`}
                                    aria-label={`Play sound for ${item.english}`}
                                >
                                    <Volume2 size={20} />
                                </button>
                            ) : (
                                <span className={styles.noAudio}>-</span>
                            )}
                        </div>
                        <div className={styles.cell} data-label="English Example">
                            <span className={styles.exampleText}>{item.englishExample}</span>
                        </div>
                        <div className={styles.cell} data-label="Hindi Example">
                            <span className={styles.hindiExampleText}>{item.hindiExample}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default QuestionTable;
