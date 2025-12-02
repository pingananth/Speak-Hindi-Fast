export interface Lesson {
    id: number;
    title: string;
    description: string;
    duration: number; // in minutes
}

export const lessons: Lesson[] = [
    {
        id: 1,
        title: "Introduction to Hindi Pronouns",
        description: "Learn the basic sounds of Hindi Pronouns in English.",
        duration: 5,
    },
    {
        id: 2,
        title: "Basic Greetings & Introductions",
        description: "Learn how to say hello, introduce yourself, and ask 'How are you?' in a formal and informal way.",
        duration: 20,
    },
    {
        id: 3,
        title: "Sentence Structure: SOV",
        description: "Understand the Subject-Object-Verb order in Hindi and how it differs from English. Build your first simple sentences.",
        duration: 25,
    },
    {
        id: 4,
        title: "Gender in Hindi",
        description: "Everything in Hindi has a gender. Learn the rules for masculine and feminine nouns and how they affect verbs.",
        duration: 30,
    },
    {
        id: 5,
        title: "Present Tense Verbs",
        description: "Master the present tense. Learn how to conjugate common verbs like 'to be', 'to eat', and 'to go'.",
        duration: 25,
    },
];
