export interface Lesson {
    id: number;
    slug: string;
    title: string;
    description: string;
    duration: number; // in minutes
    introduction: string;
    vimeoId: string;
    notes: string;
    lastUpdated?: string; // ISO date string (YYYY-MM-DD)
    downloads?: Array<{
        label: string;
        url: string;
    }>;
}

export const lessons: Lesson[] = [
    {
        id: 1,
        slug: "introduction-to-hindi-pronouns",
        title: "Hindi Pronouns in English for Beginners",
        description: "Learn Hindi pronouns in English with this beginner-friendly lesson. Master Main, Tum, Aap, and Vah to start speaking Hindi confidently. No script needed!",
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
        title: "Basic Hindi Verbs for Daily Conversation",
        description: "Learn essential Hindi verbs for daily conversation. Master common action words through English transliteration. Perfect for beginners learning spoken Hindi.",
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
        title: "Hindi Action Words & Commands for Beginners",
        description: "Master Hindi action words and learn to give commands naturally. Practice inviting actions in spoken Hindi without the script. Includes worksheet downloads.",
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
    {
        id: 4,
        slug: "hindi-sentence-structure",
        title: "Hindi Sentence Structure: SOV Formula",
        description: "Understand Hindi sentence structure with our simple SOV formula. Master spoken Hindi grammar fast.",
        duration: 5,
        introduction: "Learn the difference between English and Hindi structure to learn to speak hindi.",
        vimeoId: "1143176591",
        notes: `
<h3>Activity</h3>
<ul>
<li>Observe simple hindi sentences to see the patterns</li>
<li>Compare english and hindi basic sentences using google translate to see and identify the patterns clearly</li>
</ul>

<h3>Quiz</h3>
<ul>
<li>Is hindi sov or svo? ( SVO = Subject Verb Object & SOV = Subject Object Verb )</li>
<li>Map out the hindi sentence formula for 'Hum office jathay hain'/li>

</ul>
        `
    },
    {
        id: 5,
        slug: "simple-present-tense-in-hindi",
        title: "Simple Present Tense in Hindi: Examples & Practice for Beginners",
        description: "Learn the present indefinite tense Hindi with easy examples in English. Master Hindi present tense verb conjugation for daily conversations. Perfect for spoken Hindi beginners!",
        duration: 5,
        introduction: "Conjugating verbs in present tense.",
        vimeoId: "1143380070",
        notes: `
<h3>Activity</h3>
<ul>
<li>Download the worksheet and practice the present tense verbs</li>
<li>Print out the worksheet if possible as most excel will autoprompt the formula</li>
<li>Observe and practice the present tense verbs</li>
</ul>

<h3>Spoken Hindi Tip</h3>
<ul>
<li>Don't try to find the hindi equivalent for all the words. Start with replacing the known verbs first.</li>
<li>Colloquially while speaking, people use 'na' instead of 'na hai' or 'na hain'or 'nahin'.</li>
<li>Colloquially while speaking, people won't end the sentences with 'hai' or 'hain' but its implied.</li>
</ul>

<h3>Quiz</h3>
<ul>
<li>Say 'I write poem' in Hindi</li>
<li>Say 'You stand straight' in Hindi</li>
<li>Say 'They didn't sit quietly' in Hindi</li>
</ul>
        `
        ,
        downloads: [
            {
                label: "Working Sheet",
                url: "/downloads/lesson-5-worksheet.xlsx"
            },
            {
                label: "Solution Sheet",
                url: "/downloads/lesson-5-solutions.xlsx"
            }
        ]
    },

    {
        id: 6,
        slug: "present-continuous-tense-in-hindi",
        title: "Present Continuous Tense in Hindi: Examples & Rules for Beginners",
        description: "Learn present continuous tense in Hindi with clear examples. Master Hindi present continuous tense to describe ongoing actions. Includes practice exercises!",
        duration: 5,
        introduction: "Learn to describe actions happening right now in Hindi.",
        vimeoId: "1144827452",
        notes: `
<h3>Activity</h3>
<ul>
<li>Download the worksheet and practice the present tense verbs</li>
<li>Print out the worksheet if possible as most excel will autoprompt the formula</li>
<li>Observe and practice the present tense verbs</li>
</ul>

<h3>Spoken Hindi Tip</h3>
<ul>
<li>Don't try to find the hindi equivalent for all the words. Start with replacing the known verbs first.</li>
<li>Colloquially while speaking, people use 'na' instead of 'na hai' or 'na hain'or 'nahin'.</li>
<li>Colloquially while speaking, people won't end the sentences with 'hai' or 'hain' but its implied.</li>
</ul>

<h3>Quiz</h3>
<ul>
<li>Say 'I write poem' in Hindi</li>
<li>Say 'You stand straight' in Hindi</li>
<li>Say 'They didn't sit quietly' in Hindi</li>
</ul>
        `
        ,
        downloads: [
            {
                label: "Working Sheet",
                url: "/downloads/lesson-6-worksheet.xlsx"
            },
            {
                label: "Solution Sheet",
                url: "/downloads/lesson-6-solutions.xlsx"
            }
        ]
    }
];
