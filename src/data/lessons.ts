export interface Lesson {
    id: number;
    slug: string;
    title: string;
    description: string;
    duration: number; // in minutes
    introduction: string;
    vimeoId: string;
    notes: string;
    downloads?: Array<{
        label: string;
        url: string;
    }>;
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
<li>When speaking colloquially, people tend to mix up Yeh/Vah. So, keep your ears open based on where you live and adapt.</li>
<li>People also generalise He/She/That/It etc with a common word 'Vo' based on regions where it is spoken</li>
<li>Our Goal is not to master the grammar but improve connection. So, don't worry if you don't get it right away.</li>
</ul>

<h3>Activity</h3>
<p>Try to introduce yourself to a friend using "Main" (I) and point to them using "Tum" (You).</p>

<h3>Quiz</h3>
<ol>
<li>What is the formal word for "You" in Hindi?</li>
<li>How do you say "I"?</li>
</ol>
        `,
    },
    {
        id: 2,
        slug: "basic-hindi-verbs",
        title: "Basic Hindi Verbs",
        description: "Learn the basic English to Hindi verbs that is used daily",
        duration: 3,
        introduction: "Start your building blocks here.",
        vimeoId: "1142619676",
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Don't focus on the getting the pronunciation right. Familiarise with the sound.</li>
<li>Don't worry about getting the spelling right. It is just for guidance.</li>
</ul>

<h3>Activity</h3>
<p>Try to say the sounds loudly if you are beginner to get familiar.</p>
        
<h3>Quiz</h3>
<ol>
<li>What is the word for "Sit" and "Stand" in Hindi?</li>
</ol>
`
    },
    {
        id: 3,
        slug: "action-words",
        title: "Action Commands",
        description: "Learn the basics of how to invite an action in spoken Hindi.",
        duration: 5,
        introduction: "Understanding to Invite a 2nd person to Act",
        vimeoId: "1142642949",
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Speak out loud and Practice.</li>
<li>Think about your day when you invited someone for action in mother tongue / english.Now, say it out in Hindi.</li>
</ul>

<h3>Activity</h3>
<ul>
<li>Download and Complete the Working Sheet</li>
<li>Check against the solution sheet if you are not sure.</li>
</ul>
        
<h3>Quiz</h3>
<ol>
<li>How will you say 'You sit' in Hindi?</li> 
<li>How will you say 'You stand' in Hindi?</li>
<li>How will you say 'You don't sleep' in Hindi?</li>
<li>How will you say 'Don't speak' ( colloquial) in Hindi?</li>
<li>What is the english equivalent of 'Muth paddea' in Hindi?</li>
</ol>
`
        ,
        downloads: [
            {
                label: "Working Sheet",
                url: "/downloads/lesson-3-worksheet.xlsx"
            },
            {
                label: "Solution Sheet",
                url: "/downloads/lesson-3-solutions.xlsx"
            }
        ]
    },
    /*
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
    },*/
];
