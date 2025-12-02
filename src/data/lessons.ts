export interface Lesson {
    id: number;
    slug: string;
    title: string;
    description: string;
    duration: number; // in minutes
    introduction: string;
    vimeoId: string;
    notes: string;
}

export const lessons: Lesson[] = [
    {
        id: 1,
        slug: "introduction-to-hindi-pronouns",
        title: "Introduction to Hindi Pronouns",
        description: "Learn the basic sounds of Hindi Pronouns in English.",
        duration: 5,
        introduction: `
<h3>Welcome to your first lesson!</h3>
<p>In this lesson, we will explore the fundamental building blocks of Hindi pronouns. Understanding these basics is crucial for constructing simple sentences and communicating effectively.</p>
<p><strong>Learning Outcomes:</strong></p>
<ul>
<li>Identify the main personal pronouns in Hindi.</li>
<li>Understand the difference between formal and informal 'you'.</li>
<li>Pronounce these pronouns correctly.</li>
</ul>
        `,
        vimeoId: "1142601455", // Example Vimeo ID
        notes: `
<h3>Summary</h3>
<p>We covered the following pronouns:</p>
<ul>
<li><strong>Main / My</strong> - I</li>
<li><strong>Thu / Thum </strong> - You (Informal)</li>
<li><strong>Aap </strong> - You (Formal)</li>
<li><strong>Vah </strong> - He/She/That</li>
<li><strong>Yeh </strong> - It/That</li>
</ul>

<h3>Quick Tips</h3>
<ul>
<li>1. When speaking colloquially, people tend to mix up Yeh/Vah. So, keep your ears open based on where you live and adapt.</li>
<li>2. People also generalise He/She/That/It etc with a common word 'Vo' based on regions where it is spoken</li>
<li>3. Our Goal is not to master the grammar but improve connection. So, don't worry if you don't get it right away.</li>
</ul>

<h3>Activity</h3>
<p>Try to introduce yourself to a friend using "Main" (I) and point to them using "Tum" (You).</p>

<h3>Quiz</h3>
<ol>
<li>What is the formal word for "You" in Hindi?</li>
<li>How do you say "I"?</li>
</ol>
        `
    },
    {
        id: 2,
        slug: "basic-greetings-introductions",
        title: "Basic Greetings & Introductions",
        description: "Learn how to say hello, introduce yourself, and ask 'How are you?' in a formal and informal way.",
        duration: 20,
        introduction: "Start your conversation journey here.",
        vimeoId: "76979871",
        notes: "Notes for greetings."
    },
    {
        id: 3,
        slug: "sentence-structure-sov",
        title: "Sentence Structure: SOV",
        description: "Understand the Subject-Object-Verb order in Hindi and how it differs from English. Build your first simple sentences.",
        duration: 25,
        introduction: "Understanding the grammar backbone.",
        vimeoId: "76979871",
        notes: "Notes for SOV."
    },
    {
        id: 4,
        slug: "gender-in-hindi",
        title: "Gender in Hindi",
        description: "Everything in Hindi has a gender. Learn the rules for masculine and feminine nouns and how they affect verbs.",
        duration: 30,
        introduction: "Masculine vs Feminine nouns.",
        vimeoId: "76979871",
        notes: "Notes for gender."
    },
    {
        id: 5,
        slug: "present-tense-verbs",
        title: "Present Tense Verbs",
        description: "Master the present tense. Learn how to conjugate common verbs like 'to be', 'to eat', and 'to go'.",
        duration: 25,
        introduction: "Conjugating verbs in present tense.",
        vimeoId: "76979871",
        notes: "Notes for verbs."
    },
];
