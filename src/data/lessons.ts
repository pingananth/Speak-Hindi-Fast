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
    vocabulary?: Array<{
        emoji: string;
        english: string;
        hindi: string;
        transliteration: string;
    }>;
    questions?: Array<{
        english: string;
        hindi: string;
        hindiAudio?: string; // Devanagari script for TTS
        englishExample: string;
        hindiExample: string;
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
    },
    {
        id: 7,
        slug: "parts-of-the-body",
        title: "Parts of the Body in Hindi: Vocabulary & Pronunciation",
        description: "Learn essential Hindi vocabulary for parts of the body. Master the names of body parts with our interactive table and audio pronunciation. Perfect for beginners!",
        duration: 5,
        introduction: "In this lesson, we'll learn common Hindi words for parts of the body. Use the interactive table below to practice your pronunciation.",
        vimeoId: "", // No video for this lesson as per request
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Practice speaking the words aloud along with the audio.</li>
<li>Try to identify these parts on your own body as you say them.</li>
</ul>

<h3>Activity</h3>
<p>Point to different parts of your body and say their Hindi names from memory.</p>
        `,
        vocabulary: [
            { emoji: "❤️", english: "Heart", hindi: "हृदय", transliteration: "Hridaya" },
            { emoji: "👤", english: "Head", hindi: "सिर", transliteration: "Seer" },
            { emoji: "👁️", english: "Eye", hindi: "आँख", transliteration: "Aank" },
            { emoji: "👃", english: "Nose", hindi: "नाक", transliteration: "Naak" },
            { emoji: "👄", english: "Mouth", hindi: "मुख", transliteration: "Mukgh" },
            { emoji: "🦷", english: "Teeth", hindi: "दांत", transliteration: "Dhaanth" },
            { emoji: "👅", english: "Tongue", hindi: "जीभ", transliteration: "Jeeb" },
            { emoji: "👂", english: "Ear", hindi: "कान", transliteration: "Kaan" },
            { emoji: "✋", english: "Hand", hindi: "हाथ", transliteration: "Haath" },
            { emoji: "🦵", english: "Leg", hindi: "पैर", transliteration: "Pair" },
            { emoji: "☝️", english: "Finger", hindi: "उंगली", transliteration: "Ungli" },
            { emoji: "🤰", english: "Stomach", hindi: "पेट", transliteration: "Paed" },
            { emoji: "🚶", english: "Back", hindi: "पीठ", transliteration: "Teet" },
            { emoji: "🩸", english: "Blood", hindi: "खून", transliteration: "Koon" },
            { emoji: "💅", english: "Nail", hindi: "नाखून", transliteration: "Nakoon" },
            { emoji: "💪", english: "Shoulder", hindi: "कंधा", transliteration: "Bhuja" },
            { emoji: "😊", english: "Face", hindi: "चेहरा", transliteration: "Muk / Chahara" },
            { emoji: "💇", english: "Hair", hindi: "बाल", transliteration: "Baal" },
            { emoji: "🦴", english: "Bone", hindi: "हड्डी", transliteration: "Haddi" },
            { emoji: "🧑", english: "Skin", hindi: "त्वचा", transliteration: "Chamada" },
            { emoji: "🧬", english: "Nerve", hindi: "नस", transliteration: "Nas" },
            { emoji: "🧠", english: "Mind", hindi: "मन", transliteration: "Mann / Dhil" },
            { emoji: "🧠", english: "Brain", hindi: "मस्तिष्क", transliteration: "Mastisk / Dhimaang" },
            { emoji: "🗣️", english: "Throat", hindi: "गला", transliteration: "Gala" }
        ]
    },
    {
        id: 8,
        slug: "hindi-question-verbs",
        title: "Hindi Question Verbs: Master Asking Questions",
        description: "Learn how to ask questions in Hindi using basic question verbs like What, Where, Why, and more. Master spoken Hindi questions with practical examples.",
        duration: 8,
        introduction: "Asking questions is one of the most important skills in daily conversation. In this lesson, we'll learn common Hindi question words and how to use them in simple sentences.",
        vimeoId: "", // Video placeholder
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Hindi question words usually come right before the verb or at the place where the item being asked about would be.</li>
<li><strong>Spoken Tip:</strong> In casual conversation, 'hai' or 'hain' are often omitted at the end of a sentence as they are auto-implied.</li>
<li>Don't worry too much about grammar right now; focus on the sounds of the question words.</li>

</ul>

<h3>Activity</h3>
<p>Try to ask simple questions to yourself in Hindi throughout the day, like "Aap kya kar rahe hain?" (What are you doing?).</p>
        `,
        questions: [
            { english: "What", hindi: "Kya", englishExample: "What are you doing?", hindiExample: "Aap kya kar rahe hain?" },
            { english: "Where", hindi: "Kahaan / Khidhar", englishExample: "Where are you going?", hindiExample: "Aap kahaan ja rahe hain?" },
            { english: "Here", hindi: "Yahan / Idhar", englishExample: "Come here.", hindiExample: "Yahan aao." },
            { english: "There", hindi: "Vahan / Udhar", englishExample: "Go there.", hindiExample: "Vahan jao." },
            { english: "Who", hindi: "Kaun", englishExample: "Who is at the door?", hindiExample: "Darvaze par kaun hai?" },
            { english: "When", hindi: "Kub", englishExample: "When will you come?", hindiExample: "Aap kub aaenge?" },
            { english: "Why", hindi: "Kyon", englishExample: "Why are you crying?", hindiExample: "Aap kyon ro rahe hain?" },
            { english: "Which", hindi: "Kis / Kaun-sa", englishExample: "Which one is yours?", hindiExample: "Kaun-sa aapka hai?" },
            { english: "Whose", hindi: "Kiska", englishExample: "Whose book is this?", hindiExample: "Yah kiska kitab hai?" },
            { english: "How", hindi: "Kaisa / Kaisay / Kaisi", englishExample: "How are you?", hindiExample: "Aap kaise hain?" },
            { english: "How much", hindi: "Kithna", englishExample: "How much sugar?", hindiExample: "Kithna cheeni?" },
            { english: "How many", hindi: "Kithnae", englishExample: "How many people?", hindiExample: "Kithnae log?" }
        ]
    },
    {
        id: 9,
        slug: "additional-hindi-verbs",
        title: "Additional Hindi Verbs & Actions",
        description: "Expand your Hindi vocabulary with 40+ essential verbs and action words. Learn practical usage through everyday examples.",
        duration: 15,
        introduction: "Now that you've mastered the basics, let's expand your vocabulary with more action words. This lesson covers a wide range of verbs you'll use daily.",
        vimeoId: "", // Video placeholder
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Try to use these verbs in short sentences throughout your day.</li>
<li>Don't worry about perfect conjugation yet; focus on connecting the English meaning to the Hindi sound.</li>
</ul>

<h3>Activity</h3>
<p>Pick 5 verbs from this list and write a simple sentence for each based on your daily routine.</p>
        `,
        questions: [
            { english: "Wait", hindi: "Rukh", englishExample: "Wait for me.", hindiExample: "Mere liye rukh." },
            { english: "Stop / Halt", hindi: "Roak", englishExample: "Stop the car.", hindiExample: "Gaadi roak." },
            { english: "Buy / Purchase", hindi: "Karidh", englishExample: "I want to buy a pen.", hindiExample: "Main pen karidhna chahta hoon." },
            { english: "Run", hindi: "Doud / Bagh", englishExample: "Run fast.", hindiExample: "Tez doud." },
            { english: "Laugh", hindi: "Hans", englishExample: "Don't laugh.", hindiExample: "Haso mat." },
            { english: "Cry", hindi: "Ro", englishExample: "Why are you crying?", hindiExample: "Aap kyon ro rahe hain." },
            { english: "Send", hindi: "Bhej", englishExample: "Send the message.", hindiExample: "Message bhej." },
            { english: "Open", hindi: "Kol", englishExample: "Open the door.", hindiExample: "Darvaza kol." },
            { english: "Live / Stay", hindi: "Ragh", englishExample: "Where do you live?", hindiExample: "Aap kahaan raghte hain?" },
            { english: "Keep", hindi: "Rak", englishExample: "Keep it here.", hindiExample: "Ise yahan rak." },
            { english: "Tell", hindi: "Batha / Kagh", englishExample: "Tell me the truth.", hindiExample: "Mujhe sach batha." },
            { english: "Bath", hindi: "Naha", englishExample: "Go take a bath.", hindiExample: "Naha lo." },
            { english: "Understand", hindi: "Samaj", englishExample: "Do you understand?", hindiExample: "Kya aap samajhte hain?" },
            { english: "Reach", hindi: "Pahunch", englishExample: "I will reach soon.", hindiExample: "Main jaldi pahunch jaunga." },
            { english: "Want / Need", hindi: "Chaag", englishExample: "I want water.", hindiExample: "Mujhe paani chaagiye." },
            { english: "Search", hindi: "Doond / Koj", englishExample: "Search for keys.", hindiExample: "Chaabi doond." },
            { english: "Short Stay", hindi: "Tahar", englishExample: "Stay for a while.", hindiExample: "Thodi der tahar." },
            { english: "Call", hindi: "Bula", englishExample: "Call him.", hindiExample: "Use bula." },
            { english: "Fear", hindi: "Dar", englishExample: "Don't fear.", hindiExample: "Daro mat." },
            { english: "Catch", hindi: "Pakad", englishExample: "Catch the ball.", hindiExample: "Ball pakad." },
            { english: "Sell", hindi: "Baech", englishExample: "Sell this house.", hindiExample: "Yah ghar baech do." },
            { english: "Ask", hindi: "Pooch", englishExample: "Ask her name.", hindiExample: "Uska naam pooch." },
            { english: "Meet", hindi: "Mil", englishExample: "Let's meet tomorrow.", hindiExample: "Kal milte hain." },
            { english: "Receive / Get", hindi: "Mil", englishExample: "I received a gift.", hindiExample: "Mujhe gift mil gaya." },
            { english: "Dance", hindi: "Notch", englishExample: "Dance with me.", hindiExample: "Mere saath notch." },
            { english: "Become", hindi: "Bun", englishExample: "Become a doctor.", hindiExample: "Doctor bun." },
            { english: "Forget", hindi: "Bhool", englishExample: "Don't forget.", hindiExample: "Bhoolna mat." },
            { english: "Put", hindi: "Daal", englishExample: "Put sugar in tea.", hindiExample: "Chai mein cheeni daal." },
            { english: "Prepare", hindi: "Bana", englishExample: "Prepare food.", hindiExample: "Khana bana." },
            { english: "Teach", hindi: "Pada / Sika", englishExample: "Teach me Hindi.", hindiExample: "Mujhe Hindi sika." },
            { english: "Show", hindi: "Dika", englishExample: "Show me your photo.", hindiExample: "Mujhe apni photo dika." },
            { english: "Start", hindi: "Nikal", englishExample: "Start the journey.", hindiExample: "Yatra nikal." },
            { english: "Takeout", hindi: "Nikaal", englishExample: "Take out the trash.", hindiExample: "Kachra nikaal." },
            { english: "Wake up", hindi: "Jaga", englishExample: "Wake up early.", hindiExample: "Jaldi jaga." },
            { english: "Celebrate", hindi: "Mana", englishExample: "Celebrate Diwali.", hindiExample: "Diwali mana." },
            { english: "Lift", hindi: "Utta", englishExample: "Lift the bag.", hindiExample: "Bag utta." },
            { english: "Drive", hindi: "Chala", englishExample: "Drive carefully.", hindiExample: "Dheere chala." },
            { english: "Price", hindi: "Dham", englishExample: "What is the price?", hindiExample: "Dham kya hai?" },
            { english: "Take", hindi: "Lay", englishExample: "Take this.", hindiExample: "Yah lay." },
            { english: "Give", hindi: "Dhay", englishExample: "Give me money.", hindiExample: "Mujhe paise dhay." },
            { english: "Forward", hindi: "Aagae", englishExample: "Go forward.", hindiExample: "Aagae jao." },
            { english: "Fight", hindi: "Ladd", englishExample: "Don't fight.", hindiExample: "Laddo mat." },
            { english: "Flood", hindi: "Baad", englishExample: "The flood came.", hindiExample: "Baad aa gaya." }
        ]
    },
    {
        id: 10,
        slug: "days-of-the-week-in-hindi",
        title: "Days of the Week & Units of Time",
        description: "Learn the Hindi names for the days of the week and common units of time like day, month, and year. Master pronunciation with audio support.",
        duration: 5,
        introduction: "In this lesson, we'll learn how to talk about time and the days of the week in Hindi. Use the interactive table to practice your pronunciation.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Most days in Hindi end in 'Vaar', which means 'day'.</li>
<li>'Haftha' is the most common word for week, but you might also hear 'Saptah' in very formal settings.</li>
<li>Consistent practice will help you remember these daily terms quickly.</li>
</ul>

<h3>Activity</h3>
<p>Try to say today's day and the current month in Hindi!</p>
        `,
        vocabulary: [
            { emoji: "☀️", english: "Sunday", hindi: "रविवार", transliteration: "Ravivaar" },
            { emoji: "🌙", english: "Monday", hindi: "सोमवार", transliteration: "Somvaar" },
            { emoji: "🔥", english: "Tuesday", hindi: "मंगलवार", transliteration: "Mangalvaar" },
            { emoji: "📚", english: "Wednesday", hindi: "बुधवार", transliteration: "Budhanvaar" },
            { emoji: "🎓", english: "Thursday", hindi: "गुरुवार", transliteration: "Guruvaar" },
            { emoji: "💎", english: "Friday", hindi: "शुक्रवार", transliteration: "Shukravaar" },
            { emoji: "🪐", english: "Saturday", hindi: "शनिवार", transliteration: "Sanivaar" },
            { emoji: "☀️", english: "Day", hindi: "दिन", transliteration: "Dhin" },
            { emoji: "🌙", english: "Night", hindi: "रात", transliteration: "Raath" },
            { emoji: "🌅", english: "Morning", hindi: "सुबह", transliteration: "Subak / Saberay" },
            { emoji: "☀️", english: "Afternoon", hindi: "दोपहर", transliteration: "Dhopahar" },
            { emoji: "🌆", english: "Evening", hindi: "शाम", transliteration: "Shyam" },
            { emoji: "📅", english: "Week", hindi: "हफ्ता", transliteration: "Hafthay / Haftha" },
            { emoji: "🗓️", english: "Month", hindi: "महीना", transliteration: "Mahina / Mahinay" },
            { emoji: "🗓️", english: "Year", hindi: "साल", transliteration: "Saal" }
        ]
    },
    {
        id: 11,
        slug: "hindi-numbers-for-beginners",
        title: "Numbers in Hindi: 1 to 1 Crore",
        description: "Master Hindi numbers from 1 to large figures like Lakhs and Crores. Learn pronunciation through transliteration and interactive audio.",
        duration: 8,
        introduction: "Counting is essential for shopping, telling time, and daily life. In this lesson, we'll learn key numbers and how they sound in Hindi.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Hindi numbers follow a slightly different pattern than English, but mastering 1-10 is the best starting point.</li>
<li>For large numbers, India uses 'Lakh' (100,000) and 'Crore' (10,000,000) instead of millions/billions.</li>
</ul>

<h3>Activity</h3>
<p>Try to count your fingers in Hindi: Ek, Dho, Theen, Chaar, Paanch...</p>
        `,
        vocabulary: [
            { emoji: "1️⃣", english: "1", hindi: "एक", transliteration: "Ek" },
            { emoji: "2️⃣", english: "2", hindi: "दो", transliteration: "Dho" },
            { emoji: "3️⃣", english: "3", hindi: "तीन", transliteration: "Theen" },
            { emoji: "4️⃣", english: "4", hindi: "चार", transliteration: "Chaar" },
            { emoji: "5️⃣", english: "5", hindi: "पाँच", transliteration: "Paanch" },
            { emoji: "6️⃣", english: "6", hindi: "छह", transliteration: "Chay" },
            { emoji: "7️⃣", english: "7", hindi: "सात", transliteration: "Saath" },
            { emoji: "8️⃣", english: "8", hindi: "आठ", transliteration: "Aat" },
            { emoji: "9️⃣", english: "9", hindi: "नौ", transliteration: "Now" },
            { emoji: "🔟", english: "10", hindi: "10", transliteration: "Dhus" },
            { emoji: "🔢", english: "11", hindi: "ग्यारह", transliteration: "Gyaaragh" },
            { emoji: "🔢", english: "12", hindi: "बारह", transliteration: "Baarak" },
            { emoji: "🔢", english: "15", hindi: "पंद्रह", transliteration: "Pandhragh" },
            { emoji: "🔢", english: "20", hindi: "बीस", transliteration: "Bees" },
            { emoji: "🔢", english: "25", hindi: "पच्चीस", transliteration: "Pachees" },
            { emoji: "🔢", english: "30", hindi: "तीस", transliteration: "Thees" },
            { emoji: "🔢", english: "35", hindi: "पैंतीस", transliteration: "Painthees" },
            { emoji: "🔢", english: "40", hindi: "चालीस", transliteration: "Chalees" },
            { emoji: "🔢", english: "45", hindi: "पैंतालीस", transliteration: "Painthalees" },
            { emoji: "🔢", english: "50", hindi: "पचास", transliteration: "Pachaaz" },
            { emoji: "🔢", english: "55", hindi: "पचपन", transliteration: "Pachpan" },
            { emoji: "🔢", english: "60", hindi: "साठ", transliteration: "Saat" },
            { emoji: "🔢", english: "65", hindi: "पैंसठ", transliteration: "Painsaat" },
            { emoji: "🔢", english: "70", hindi: "सत्तर", transliteration: "Satthar" },
            { emoji: "🔢", english: "75", hindi: "पचहत्तर", transliteration: "Panchanthar" },
            { emoji: "🔢", english: "80", hindi: "अस्सी", transliteration: "Hussy" },
            { emoji: "🔢", english: "85", hindi: "पचासी", transliteration: "Pachaasi" },
            { emoji: "🔢", english: "90", hindi: "नब्बे", transliteration: "Nabbay" },
            { emoji: "🔢", english: "95", hindi: "पंचानबे", transliteration: "Panchanavay" },
            { emoji: "💯", english: "100", hindi: "सौ", transliteration: "Ek Sow" },
            { emoji: "🔢", english: "1000", hindi: "हजार", transliteration: "Ek hazaar" },
            { emoji: "💰", english: "100,000", hindi: "लाख", transliteration: "Ek Lakh" },
            { emoji: "💎", english: "1 Crore", hindi: "करोड़", transliteration: "Ek Carore" }
        ]
    },
    {
        id: 12,
        slug: "hindi-ordinals-first-to-tenth",
        title: "Hindi Ordinals: Ranking & Position",
        description: "Learn how to say 1st, 2nd, 3rd and more in Hindi. Master the ordinals and ranking vocabulary with our interactive pronunciation guide.",
        duration: 5,
        introduction: "Ordinals are used to describe position or order (e.g., 'the first floor'). In this lesson, we will learn the most common Hindi ordinals.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Hindi ordinals change slightly depending on whether you are talking about a masculine or feminine object (e.g., Pehla vs. Pehli). For now, focus on the base versions.</li>
<li>From 'Fifth' onwards, you'll notice many words end in 'van', which is a common suffix for ordinals.</li>
</ul>

<h3>Activity</h3>
<p>Try to rank your favorite activities in Hindi: Pehla, Dhoosra, Theesra...</p>
        `,
        vocabulary: [
            { emoji: "🥇", english: "1st", hindi: "पहला", transliteration: "Pehla" },
            { emoji: "🥈", english: "2nd", hindi: "दूसरा", transliteration: "Dhoosra" },
            { emoji: "🥉", english: "3rd", hindi: "तीसरा", transliteration: "Theesra" },
            { emoji: "🔢", english: "4th", hindi: "चौथा", transliteration: "Chauntha" },
            { emoji: "🔢", english: "5th", hindi: "पाँचवाँ", transliteration: "Paanchvan" },
            { emoji: "🔢", english: "6th", hindi: "छठा", transliteration: "Sathvan" },
            { emoji: "🔢", english: "7th", hindi: "सातवाँ", transliteration: "Saathavan" },
            { emoji: "🔢", english: "8th", hindi: "आठवाँ", transliteration: "Aatavan" },
            { emoji: "🔢", english: "9th", hindi: "नौवाँ", transliteration: "Nowavan" },
            { emoji: "🔢", english: "10th", hindi: "दसवाँ", transliteration: "Dasavan" },
            { emoji: "🔢", english: "11th", hindi: "ग्यारहवाँ", transliteration: "Gyaaravan" },
            { emoji: "🔢", english: "12th", hindi: "बारहवाँ", transliteration: "Baaravan" },
            { emoji: "⭕", english: "0", hindi: "शून्य", transliteration: "Shoonyah" }
        ]
    },
    {
        id: 13,
        slug: "hindi-family-relationships",
        title: "Family, Relationships & People",
        description: "Learn how to talk about your family and describe people in Hindi. Master essential terms for relatives and gender with our interactive audio guide.",
        duration: 8,
        introduction: "In Hindi culture, relationship terms are very specific. In this lesson, we will learn the names for family members and general terms for people.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Hindi has different names for paternal vs. maternal grandparents (e.g., Dadha vs. Nana).</li>
<li>Adding 'ji' to a relationship term (like Maathaji, Pithaji) is a way to show respect.</li>
<li>Many terms have regional variations based on local dialects.</li>
</ul>

<h3>Activity</h3>
<p>Try to introduce your family members using these new words!</p>
        `,
        vocabulary: [
            { emoji: "👩", english: "Mother", hindi: "माताजी", transliteration: "Maathaji / Maatha" },
            { emoji: "👨", english: "Father", hindi: "पिताजी", transliteration: "Pithaji / Pitha / Baap / Papa" },
            { emoji: "👦", english: "Brother", hindi: "भाई", transliteration: "Bhai" },
            { emoji: "🧒", english: "Small Brother", hindi: "छोटा भाई", transliteration: "Chota Bhai" },
            { emoji: "🧑", english: "Big / Elder Brother", hindi: "बड़ा भाई", transliteration: "Bada Bhai" },
            { emoji: "👧", english: "Sister", hindi: "बहन", transliteration: "Behen" },
            { emoji: "👧", english: "Small Sister", hindi: "छोटी बहन", transliteration: "Choti Behen" },
            { emoji: "👩", english: "Elder Sister", hindi: "बड़ी बहन", transliteration: "Badi Behen" },
            { emoji: "👴", english: "GrandFather", hindi: "दादा / नाना", transliteration: "Dadha / Nana" },
            { emoji: "👵", english: "GrandMother", hindi: "दादी / नानी", transliteration: "Dadhi / Nani" },
            { emoji: "👨", english: "Uncle", hindi: "मामा", transliteration: "Mama" },
            { emoji: "👩", english: "Aunt", hindi: "मामी / बुआ", transliteration: "Mami / Buha" },
            { emoji: "👨", english: "Chithappa", hindi: "चाचा", transliteration: "Chacha" },
            { emoji: "👩", english: "Chitti", hindi: "चाची / मौसी", transliteration: "Chachi / Mousi" },
            { emoji: "👨", english: "Father-in-law", hindi: "ससुर", transliteration: "Sasoor" },
            { emoji: "👩", english: "Mother-in-law", hindi: "सास", transliteration: "Saas" },
            { emoji: "👦", english: "Son", hindi: "बेटा / लड़का / पुत्र", transliteration: "Beta / Ladka / Putra" },
            { emoji: "👧", english: "Daughter", hindi: "बेटी / लड़की / पुत्री", transliteration: "Beti / Ladki / Putri" },
            { emoji: "👩", english: "Sister-in-law", hindi: "भाभी / दीदी", transliteration: "Bhaabi / Deedhi" },
            { emoji: "👦", english: "Son-in-law", hindi: "भांजा", transliteration: "Bhaanja" },
            { emoji: "👧", english: "Daughter-in-law", hindi: "भांजी / बहू", transliteration: "Bhaanji / Bahu" },
            { emoji: "👦", english: "Grandson", hindi: "पोता", transliteration: "Potha" },
            { emoji: "👧", english: "Granddaughter", hindi: "पोती", transliteration: "Pothi" },
            { emoji: "👨", english: "Brother-in-law", hindi: "जीजा / साला", transliteration: "Jeeja / Saala" },
            { emoji: "👨", english: "Peripa", hindi: "ताऊ", transliteration: "Thaavu" },
            { emoji: "👩", english: "Perima", hindi: "ताई", transliteration: "Thaayi" },
            { emoji: "👨", english: "Husband", hindi: "पति", transliteration: "Pathi" },
            { emoji: "👩", english: "Wife", hindi: "पत्नी", transliteration: "Pathni" },
            { emoji: "♂️", english: "Male", hindi: "पुरुष", transliteration: "Purush" },
            { emoji: "♀️", english: "Female", hindi: "स्त्री / महिला", transliteration: "Sthri / Mahela" },
            { emoji: "👨", english: "Man", hindi: "आदमी", transliteration: "Aadmi" },
            { emoji: "👩", english: "Woman", hindi: "औरत", transliteration: "Aurath" },
            { emoji: "👤", english: "Human", hindi: "मनुष्य / इंसान", transliteration: "Manushya / Insaan" },
            { emoji: "👱", english: "Young man", hindi: "युवक", transliteration: "Yuvak" },
            { emoji: "👱‍♀️", english: "Young women", hindi: "युवती", transliteration: "Yuvathi" }
        ]
    },
    {
        id: 14,
        slug: "hindi-adjectives-describing-words",
        title: "Hindi Adjectives: Describing the World",
        description: "Learn essential Hindi adjectives to describe people, places, and things. Master 30+ describing words with examples and audio pronunciation.",
        duration: 10,
        introduction: "Adjectives are words that describe or modify other words. In this lesson, we'll learn common Hindi adjectives to help you speak more expressively.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Hindi adjectives often change their ending based on the gender of the noun they describe (e.g., 'Bada' for masculine, 'Badi' for feminine).</li>
<li>For now, focus on these base forms. You'll naturally pick up the variations as you practice.</li>
<li>The word 'Bahut' can be added before any adjective to mean 'Very' (e.g., 'Bahut Accha' - Very Good).</li>
</ul>

<h3>Activity</h3>
<p>Look around your room and try to describe 5 objects using these new adjectives!</p>
        `,
        questions: [
            { english: "Big", hindi: "Bada", hindiAudio: "बड़ा", englishExample: "Big house", hindiExample: "Bada ghar" },
            { english: "Small", hindi: "Chota", hindiAudio: "छोटा", englishExample: "Small room", hindiExample: "Chota kamra" },
            { english: "Good", hindi: "Accha", hindiAudio: "अच्छा", englishExample: "Good boy", hindiExample: "Accha ladka" },
            { english: "Bad", hindi: "Burraa", hindiAudio: "बुरा", englishExample: "Bad news", hindiExample: "Burree khabar" },
            { english: "High", hindi: "Ooncha", hindiAudio: "ऊँचा", englishExample: "High mountain", hindiExample: "Ooncha pahad" },
            { english: "Tall", hindi: "Lamba", hindiAudio: "लंबा", englishExample: "Tall man", hindiExample: "Lamba aadmi" },
            { english: "Short", hindi: "Naata", hindiAudio: "नाटा", englishExample: "Short person", hindiExample: "Naata vyakti" },
            { english: "Broad", hindi: "Chowdha", hindiAudio: "चौड़ा", englishExample: "Broad road", hindiExample: "Chowdhee sadak" },
            { english: "Deep", hindi: "Gahara", hindiAudio: "गहरा", englishExample: "Deep water", hindiExample: "Gahara paani" },
            { english: "Shallow", hindi: "Chichala", hindiAudio: "छिछला", englishExample: "Shallow river", hindiExample: "Chichalee nadi" },
            { english: "Fat", hindi: "Mota", hindiAudio: "मोटा", englishExample: "Fat cat", hindiExample: "Motee billi" },
            { english: "Thin", hindi: "Pathala", hindiAudio: "पतला", englishExample: "Thin book", hindiExample: "Pathalee kitab" },
            { english: "Thick", hindi: "Gaada", hindiAudio: "गाढ़ा", englishExample: "Thick soup", hindiExample: "Gaada soup" },
            { english: "Hot", hindi: "Garam", hindiAudio: "गरम", englishExample: "Hot tea", hindiExample: "Garam chai" },
            { english: "Cold", hindi: "Thanda", hindiAudio: "ठंडा", englishExample: "Cold water", hindiExample: "Thanda paani" },
            { english: "Sweet", hindi: "Meeta", hindiAudio: "मीठा", englishExample: "Sweet fruit", hindiExample: "Meeta phal" },
            { english: "Bitter", hindi: "Gaduva", hindiAudio: "कड़वा", englishExample: "Bitter medicine", hindiExample: "Gaduvee dava" },
            { english: "Clean", hindi: "Saaf", hindiAudio: "साफ़", englishExample: "Clean hands", hindiExample: "Saaf haath" },
            { english: "Dirty", hindi: "Gandha", hindiAudio: "गंदा", englishExample: "Dirty clothes", hindiExample: "Gandhe kapde" },
            { english: "Beautiful", hindi: "Sundhar", hindiAudio: "सुंदर", englishExample: "Beautiful flower", hindiExample: "Sundhar phool" },
            { english: "Ugly", hindi: "Asundhar", hindiAudio: "असुंदर", englishExample: "Ugly sight", hindiExample: "Asundhar drishya" },
            { english: "New", hindi: "Naya", hindiAudio: "नया", englishExample: "New clothes", hindiExample: "Naye kapde" },
            { english: "Old", hindi: "Puranaa", hindiAudio: "पुराना", englishExample: "Old house", hindiExample: "Puranaa ghar" },
            { english: "Costly", hindi: "Mehenga", hindiAudio: "महंगा", englishExample: "Costly car", hindiExample: "Mehengee gaadi" },
            { english: "Cheap", hindi: "Sastha", hindiAudio: "सस्ता", englishExample: "Cheap watch", hindiExample: "Sasthee ghadi" },
            { english: "Fresh", hindi: "Thaaja", hindiAudio: "ताज़ा", englishExample: "Fresh milk", hindiExample: "Thaaja doodh" },
            { english: "Easy", hindi: "Aasaan", hindiAudio: "आसान", englishExample: "Easy question", hindiExample: "Aasaan sawal" },
            { english: "Difficult", hindi: "Musqil", hindiAudio: "मुश्किल", englishExample: "Difficult task", hindiExample: "Musqil kaam" },
            { english: "Rich", hindi: "Ameer", hindiAudio: "अमीर", englishExample: "Rich person", hindiExample: "Ameer vyakti" },
            { english: "Domestic", hindi: "Palthu", hindiAudio: "पालतू", englishExample: "Domestic animal", hindiExample: "Palthu janwar" },
            { emoji: "🦁", english: "Wild", hindi: "Junglee", hindiAudio: "जंगली", englishExample: "Wild animal", hindiExample: "Junglee janwar" },
            { english: "Honest", hindi: "Eemandhaar", hindiAudio: "ईमानदार", englishExample: "Honest man", hindiExample: "Eemandhaar aadmi" },
            { english: "Dishonest", hindi: "Bayeemaan", hindiAudio: "बेईमान", englishExample: "Dishonest shopkeeper", hindiExample: "Bayeemaan dukandaar" }
        ]
    },
    {
        id: 15,
        slug: "hindi-adverbs-describing-actions",
        title: "Hindi Adverbs: Describing Actions",
        description: "Learn how to use adverbs in Hindi to describe how, when, and where actions happen. Master 14 key adverbs with audio and examples.",
        duration: 8,
        introduction: "Adverbs tell us more about a verb (an action). In this lesson, we'll learn common adverbs like 'Quickly', 'Slowly', and 'Certainly' to make your Hindi more descriptive.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Many Hindi adverbs are formed by adding 'se' to an adjective (e.g., 'Aasani' + 'se' = 'Easily').</li>
<li>'Dheerae dheerae' is a classic example of repeating a word to give it an adverbial meaning (Slow -> Slowly).</li>
<li>Place the adverb right before the verb to sound most natural.</li>
</ul>

<h3>Activity</h3>
<p>Try to describe how you do your chores using these words: 'Jaldhi', 'Chup chaap', or 'Kushisay'!</p>
        `,
        questions: [
            { english: "Quickly", hindi: "Jaldhi", hindiAudio: "जल्दी", englishExample: "Come quickly.", hindiExample: "Jaldhi aao." },
            { english: "Late", hindi: "Dheersay", hindiAudio: "देरी से", englishExample: "Don't come late.", hindiExample: "Dheersay mat aao." },
            { english: "Fast", hindi: "Thaej", hindiAudio: "तेज़", englishExample: "Drive fast.", hindiExample: "Thaej chalao." },
            { english: "Slow", hindi: "Deerae Deerae", hindiAudio: "धीरे धीरे", englishExample: "Walk slowly.", hindiExample: "Deerae deerae chalo." },
            { english: "Certainly", hindi: "Bilkul / Zaroor", hindiAudio: "बिल्कुल / ज़रूर", englishExample: "Certainly, I will come.", hindiExample: "Zaroor, main aaunga." },
            { english: "Easily", hindi: "Aasanisay", hindiAudio: "आसानी से", englishExample: "You can do it easily.", hindiExample: "Aap ise aasanisay kar sakte hain." },
            { english: "Loudly", hindi: "Jhorsay", hindiAudio: "ज़ोर से", englishExample: "Speak loudly.", hindiExample: "Jhorsay bolo." },
            { english: "Very well", hindi: "Achi Dharagh", hindiAudio: "अच्छी तरह", englishExample: "I know it very well.", hindiExample: "Main ise achi dharagh jaanta hoon." },
            { english: "Quietly", hindi: "Chup Chaap", hindiAudio: "चुपचाप", englishExample: "Sit quietly.", hindiExample: "Chup chaap baitho." },
            { english: "Correct", hindi: "Sahi / Taek", hindiAudio: "सही / ठीक", englishExample: "You are correct.", hindiExample: "Aap sahi hain." },
            { english: "Wrong", hindi: "Galath", hindiAudio: "गलत", englishExample: "This is wrong.", hindiExample: "Yah galath hai." },
            { english: "Happily", hindi: "Kushisay", hindiAudio: "खुशी से", englishExample: "He lives happily.", hindiExample: "Vah kushisay raghata hai." },
            { english: "Strong", hindi: "Majboot", hindiAudio: "मज़बूत", englishExample: "Hold it strongly.", hindiExample: "ise majboot pakdo." },
            { english: "Weak", hindi: "Comejoor", hindiAudio: "कमज़ोर", englishExample: "Feelings are weak.", hindiExample: "Bhavnayein comejoor hain." }
        ]
    },
    {
        id: 16,
        slug: "hindi-post-positions",
        title: "Hindi Post Positions: Connecting Ideas",
        description: "Learn how to use post-positions like 'with', 'without', 'before', and 'after' in Hindi. Master these essential connectors with audio and examples.",
        duration: 10,
        introduction: "Post-positions in Hindi are similar to prepositions in English, but they come AFTER the noun. In this lesson, we'll learn the most important ones for daily use.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Remember: In English it's 'Before the class', in Hindi it's 'Class kay pehlae' (Class before).</li>
<li>These words almost always require the noun to be in the 'oblique' case, but for now, just focus on the sounds of the connectors.</li>
<li>'Kay' is the most common bridge word before a post-position.</li>
</ul>

<h3>Activity</h3>
<p>Try to describe where things are in your room using 'Kay pass' (Near) and 'Kay saamnay' (In front of).</p>
        `,
        questions: [
            { english: "Without", hindi: "Kay bina", hindiAudio: "के बिना", englishExample: "Without you.", hindiExample: "Aap kay bina." },
            { english: "Before", hindi: "Kay pehlae", hindiAudio: "के पहले", englishExample: "Before the meal.", hindiExample: "Khana khane kay pehlae." },
            { english: "After", hindi: "Kay baadh", hindiAudio: "के बाद", englishExample: "After the class.", hindiExample: "Class kay baadh." },
            { english: "Except", hindi: "Kay siva", hindiAudio: "के सिवा", englishExample: "Everyone except him.", hindiExample: "Uskay siva sab." },
            { english: "In the place of", hindi: "Kay badlae", hindiAudio: "के बदले", englishExample: "Tea instead of coffee.", hindiExample: "Coffee kay badlae chai." },
            { english: "In the middle of", hindi: "Kay beech may", hindiAudio: "के बीच में", englishExample: "In the middle of the road.", hindiExample: "Sadak kay beech may." },
            { english: "Sit in the middle", hindi: "beech mae baitho", hindiAudio: "बीच में बैठो", englishExample: "Sit in the middle.", hindiExample: "Beech mae baitho." },
            { english: "Through", hindi: "Kay Dwara", hindiAudio: "के द्वारा", englishExample: "Through the post.", hindiExample: "Post kay dwara." },
            { english: "About", hindi: "Kay baaray may", hindiAudio: "के बारे में", englishExample: "About him.", hindiExample: "Uskay baaray may." },
            { english: "Similar, like", hindi: "Key tharagh", hindiAudio: "की तरह", englishExample: "Like a brother.", hindiExample: "Bhai key tharagh." },
            { english: "Towards", hindi: "Key oar / Key taraf", hindiAudio: "की ओर / की तरफ", englishExample: "Towards the house.", hindiExample: "Ghar key taraf." },
            { english: "In addition to", hindi: "Kay alava", hindiAudio: "के अलावा", englishExample: "In addition to this.", hindiExample: "Iskay alava." },
            { english: "With (Possession)", hindi: "Kay pass", hindiAudio: "के पास", englishExample: "I have a pen.", hindiExample: "Mere pass pen hai." },
            { english: "Inside", hindi: "Kay andhar", hindiAudio: "के अंदर", englishExample: "Inside the bag.", hindiExample: "Bag kay andhar." },
            { english: "Outside", hindi: "Kay baahar", hindiAudio: "के बाहर", englishExample: "Outside the gate.", hindiExample: "Gate kay baahar." },
            { english: "With (Company)", hindi: "Kay saath", hindiAudio: "के साथ", englishExample: "With friends.", hindiExample: "Doston kay saath." },
            { english: "In front of", hindi: "Kay saamnay", hindiAudio: "के सामने", englishExample: "In front of the mirror.", hindiExample: "Mirror kay saamnay." }
        ]
    },
    {
        id: 17,
        slug: "hindi-conjunctions-linking-words",
        title: "Hindi Conjunctions: Linking Sentences",
        description: "Master essential Hindi conjunctions like 'and', 'but', 'because', and 'if'. Learn how to link thoughts and build complex sentences with audio support.",
        duration: 8,
        introduction: "Conjunctions are the glue that holds our sentences together. In this lesson, we'll learn the most common words used to link ideas in Hindi.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>'Aur' (And) and 'Ya' (Or) are used exactly like their English counterparts.</li>
<li>'Kyun key' is used to give a reason (Because), while 'Isliyay' is used to show a result (Therefore).</li>
<li>Practice using 'Par' or 'Lay kin' (But) to add contrast to your thoughts.</li>
</ul>

<h3>Activity</h3>
<p>Try to combine two simple sentences using 'Aur' or 'But'. For example: 'Main thaka hoon aur main sona chahta hoon' (I am tired and I want to sleep).</p>
        `,
        questions: [
            { english: "And", hindi: "Aur", hindiAudio: "और", englishExample: "Tea and coffee.", hindiExample: "Chai aur coffee." },
            { english: "Or", hindi: "Ya", hindiAudio: "या", englishExample: "Red or blue?", hindiExample: "Laal ya neela?" },
            { english: "That", hindi: "Key", hindiAudio: "कि", englishExample: "He said that...", hindiExample: "Usne kaha key..." },
            { english: "Even though", hindi: "Tho bi / Phir bi", hindiAudio: "तो भी / फिर भी", englishExample: "Even though it rained...", hindiExample: "Barish huyi tho bi..." },
            { english: "Because", hindi: "Isliyay", hindiAudio: "इसलिए", englishExample: "Therefore I went.", hindiExample: "Isliyay main gaya." },
            { english: "Why because", hindi: "Kyun key", hindiAudio: "क्योंकि", englishExample: "Because I'm tired.", hindiExample: "Kyun key main thaka hoon." },
            { english: "But", hindi: "Par / Lay kin", hindiAudio: "पर / लेकिन", englishExample: "I like it but...", hindiExample: "Mujhe pasand hai par..." },
            { english: "If", hindi: "Agar tho", hindiAudio: "अगर तो", englishExample: "If you go, then...", hindiExample: "Agar aap jaaoge tho..." },
            { english: "Otherwise", hindi: "Nahi tho", hindiAudio: "नहीं तो", englishExample: "Study, otherwise...", hindiExample: "Padho nahi tho..." },
            { english: "On reaching", hindi: "Kar", hindiAudio: "कर", englishExample: "Having reached...", hindiExample: "Pahunch kar..." },
            { english: "While", hindi: "Jab thab", hindiAudio: "जब तब", englishExample: "While eating.", hindiExample: "Jab khate hain thab." },
            { english: "Whatever", hindi: "Jaisa Vaisa", hindiAudio: "जैसा वैसा", englishExample: "Like that.", hindiExample: "Jaisa vaisa." },
            { english: "Whoever", hindi: "Jo", hindiAudio: "जो", englishExample: "Whoever comes.", hindiExample: "Jo aaega." },
            { english: "Whatever (Anything)", hindi: "Jo Bhi", hindiAudio: "जो भी", englishExample: "Whatever happens.", hindiExample: "Jo bhi hoga." }
        ]
    },
    {
        id: 18,
        slug: "hindi-vegetables-vocabulary",
        title: "Vegetables & Kitchen Essentials",
        description: "Learn the names of common vegetables in Hindi. Master kitchen vocabulary with interactive audio and visual icons.",
        duration: 8,
        introduction: "Whether you're shopping at a local market or cooking at home, knowing vegetable names is incredibly useful. Let's learn the most common ones.",
        vimeoId: "", // No video
        notes: `
<h3>Quick Tips</h3>
<ul>
<li>Many vegetable names in Hindi are used as-is in Indian English (e.g., 'Baingan', 'Gobi').</li>
<li>Market tip: You can add 'Ek kilo' (One kilo) or 'Aadha kilo' (Half kilo) before the vegetable name when shopping.</li>
<li>'Hari' means Green, which is why Green Chilly is 'Hari Mirchi'.</li>
</ul>

<h3>Activity</h3>
<p>Next time you're in the kitchen, try to identify 3 vegetables and say their Hindi names out loud!</p>
        `,
        vocabulary: [
            { emoji: "🫚", english: "Ginger", hindi: "अदरक", transliteration: "Adrak" },
            { emoji: "🥭", english: "Mango (Raw/Green)", hindi: "आम / कच्चा आम", transliteration: "Aam / Kacha Aam" },
            { emoji: "🍅", english: "Tomato", hindi: "टमाटर", transliteration: "Tamatar" },
            { emoji: "🧅", english: "Onion", hindi: "प्याज", transliteration: "Pyaaz" },
            { emoji: "🥒", english: "Bitter Gourd", hindi: "करेला", transliteration: "Karela" },
            { emoji: "🥒", english: "Cucumber", hindi: "ककड़ी", transliteration: "Kakadi" },
            { emoji: "🍌", english: "Plantain", hindi: "केला", transliteration: "Kaela" },
            { emoji: "🎃", english: "Pumpkin", hindi: "कुम्हाड़ा", transliteration: "Kumhadda" },
            { emoji: "🥕", english: "Carrot", hindi: "गाजर", transliteration: "Gaajar" },
            { emoji: "🍆", english: "Brinjal", hindi: "बैंगन", transliteration: "Baingan" },
            { emoji: "🥒", english: "Ladies Finger", hindi: "भिंडी", transliteration: "Bindhi" },
            { emoji: "🌶️", english: "Green Chilly", hindi: "हरी मिर्च", transliteration: "Hari Mirchi" },
            { emoji: "🫑", english: "Capsicum", hindi: "बड़ी मिर्च", transliteration: "Bada Mirchi" },
            { emoji: "🍋", english: "Lemon", hindi: "नींबू", transliteration: "Nimbu" },
            { emoji: "🥕", english: "Raddish", hindi: "मूली", transliteration: "Mooli" },
            { emoji: "🥔", english: "Potato", hindi: "आलू", transliteration: "Aaloo" },
            { emoji: "🍃", english: "Curry Leaves", hindi: "करी पत्ते", transliteration: "Curry Pathay" },
            { emoji: "🥬", english: "Cabbage", hindi: "गोभी", transliteration: "Gobi" },
            { emoji: "🥦", english: "Cauliflower", hindi: "फूलगोभी", transliteration: "Phool Ghobi" }
        ]
    }
];










