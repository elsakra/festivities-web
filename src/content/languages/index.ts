export interface LanguageConversation {
  ai: string;
  user: string;
  translation?: string;
}

export interface LanguageFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LanguageData {
  slug: string;
  name: string;
  native: string;
  flag: string;
  bcp47: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  whyContent: string;
  challenges: string[];
  topics: string[];
  conversation: Array<{ role: "ai" | "user"; text: string; translation: string }>;
  competitor: string;
  competitorDescription: string;
  testimonials: Array<{ quote: string; name: string; time: string }>;
  faqs: LanguageFAQ[];
  seoTitle: string;
  seoDescription: string;
  color: string;
}

export const LANGUAGES: LanguageData[] = [
  {
    slug: "spanish",
    name: "Spanish",
    native: "Español",
    flag: "🇪🇸",
    bcp47: "es",
    color: "#C4521A",
    tagline: "The world's most learnable language — done right.",
    heroHeadline: "Learn Spanish by actually speaking it.",
    heroSubheadline:
      "From your first 'hola' to debating politics in a Madrid café. Real conversation. Real fluency.",
    seoTitle: "Learn Spanish with AI Conversations | Festivities",
    seoDescription:
      "Have real AI conversations in Spanish from day one. Festivities adapts to your level and teaches through natural dialogue, not flashcards. Start free today.",
    whyContent: `Spanish is the second most spoken language in the world by native speakers, with over 480 million people using it daily across 20+ countries. Yet most people who try to learn it spend years studying grammar charts and flashcard decks — and never feel confident speaking.

The reason is simple: traditional language apps treat Spanish like a puzzle to solve, not a skill to practice. They drill you on vocabulary in isolation, reward you for tapping the right answer, and never put you in a real conversation where you have to think on your feet.

Festivities is different. From your very first session, you're talking. Our AI tutor doesn't just correct your mistakes — it helps you understand why ser and estar are different, guides you through the subjunctive naturally by using it in conversation, and helps you hear and produce the sounds of rapid native speech.

Spanish has some of the most beautiful regional variation in any language. A learner who only studies Castilian Spanish will struggle in Mexico City. A learner who only hears Latin American Spanish will be confused in Seville. Festivities exposes you to authentic vocabulary and expressions from across the Spanish-speaking world, preparing you for real encounters with real people — not textbook dialogues.

The evidence is clear: comprehensible input and meaningful output are the fastest paths to fluency. That's what every Festivities conversation delivers. You hear Spanish at a level just above yours, you respond in Spanish, and your brain wires the language in through use rather than memorization.`,
    challenges: [
      "ser vs. estar (two ways to say 'to be')",
      "subjunctive mood — when and how to use it",
      "rapid native speech and connected sounds",
      "regional vocabulary differences (Spain vs. Latin America)",
      "gendered nouns and adjective agreement",
    ],
    topics: [
      "Daily conversation",
      "Travel & directions",
      "Food & dining",
      "Business Spanish",
      "Relationships",
      "Culture & history",
      "News & current events",
      "Casual slang",
    ],
    conversation: [
      {
        role: "ai",
        text: "¡Buenas tardes! ¿Cómo te fue hoy en el trabajo?",
        translation: "Good afternoon! How did work go today?",
      },
      {
        role: "user",
        text: "Fue bastante ocupado. Tuve tres reuniones y mucho correo.",
        translation: "It was quite busy. I had three meetings and a lot of email.",
      },
      {
        role: "ai",
        text: "¡Qué día más intenso! ¿Las reuniones fueron útiles, o fueron de esas que podrían haber sido un correo?",
        translation: "What an intense day! Were the meetings useful, or were they those that could have been an email?",
      },
      {
        role: "user",
        text: "Jaja, exactamente eso. Dos podrían haber sido un correo.",
        translation: "Haha, exactly that. Two could have been an email.",
      },
      {
        role: "ai",
        text: "Classic. Oye, usaste 'podrían haber sido' perfectamente — that's the conditional perfect, which trips up most learners. Keep going!",
        translation: "",
      },
    ],
    competitor: "Duolingo",
    competitorDescription: "The most popular free app",
    testimonials: [
      {
        quote:
          "I moved to Mexico City and needed real Spanish fast. Festivities had me holding full conversations in 8 weeks. The AI adapts to your actual level — it's uncanny.",
        name: "David M.",
        time: "8 weeks",
      },
      {
        quote:
          "I'd been on Duolingo for 2 years and still couldn't have a proper conversation. One month with Festivities and I was chatting with my girlfriend's family in Spanish.",
        name: "Alex T.",
        time: "1 month",
      },
    ],
    faqs: [
      {
        id: "how-long",
        question: "How long does it take to become conversational in Spanish?",
        answer:
          "With consistent daily practice using Festivities, most learners achieve basic conversational ability in 4-8 weeks and confident conversational fluency within 3-6 months. Spanish is classified as a Category I language by the US Foreign Service Institute — meaning it's one of the easier languages for English speakers. However, 'time to fluency' depends on how you practice. Passive study (flashcards, grammar drills) is far less effective than active conversation. Festivities puts you in real conversations from day one, which is why learners typically progress 3-4x faster than with traditional apps.",
      },
      {
        id: "no-experience",
        question: "Can I learn Spanish with no prior experience?",
        answer:
          "Absolutely. Festivities starts every new learner with an initial assessment — but even 'absolute beginner' isn't really true for most people. You probably already know words like 'fiesta,' 'taco,' 'gracias,' and 'amigo.' Our AI tutor meets you wherever you are and builds from there. Your first conversations will be simple and supported, with vocabulary hints and translations available, progressing to more complex topics as your confidence grows.",
      },
      {
        id: "pronunciation",
        question: "How does Festivities teach Spanish pronunciation?",
        answer:
          "Pronunciation is one of the hardest things to learn from text, and most apps don't really address it. Festivities uses voice-based conversation as the primary interaction, which means you're practicing speaking from the start. Our AI provides real-time feedback on pronunciation patterns, helps you hear the difference between sounds, and gently corrects errors in context. Premium plans include phoneme-level analysis that breaks down exactly which sounds you're producing correctly and which need more practice.",
      },
      {
        id: "vs-duolingo",
        question: "Is Festivities better than Duolingo for Spanish?",
        answer:
          "They're designed for different things. Duolingo is excellent for building vocabulary and getting familiar with basic sentence structures — and it's free. Festivities is designed for people who want to actually speak Spanish, not just recognize it. The key difference is conversation: Duolingo never puts you in a real back-and-forth conversation where you have to produce language spontaneously. Festivities does. If your goal is to travel to Mexico, work with Spanish-speaking colleagues, or connect with Spanish-speaking family, Festivities will get you there significantly faster.",
      },
      {
        id: "what-level",
        question: "What level of Spanish can I reach with Festivities?",
        answer:
          "Learners who use Festivities consistently typically reach B1 (intermediate) within 3-4 months and B2 (upper intermediate, able to discuss complex topics) within 6-9 months. Reaching C1 (advanced) typically requires 1-2 years of consistent practice with any method. Festivities provides a fluency score that maps to the CEFR (Common European Framework of Reference) scale so you always know exactly where you stand.",
      },
    ],
  },
  {
    slug: "french",
    name: "French",
    native: "Français",
    flag: "🇫🇷",
    bcp47: "fr",
    color: "#2D5A8E",
    tagline: "La langue de l'amour — and a lot more.",
    heroHeadline: "Learn French that sounds actually French.",
    heroSubheadline:
      "Forget textbook dialogues. From casual café conversations to elegant Parisian French, real fluency starts with real talking.",
    seoTitle: "Learn French with AI Conversations | Festivities",
    seoDescription:
      "Learn French through real AI conversations that adapt to your level. Master pronunciation, natural speech, and real-world dialogue. Start free.",
    whyContent: `French is spoken by over 300 million people across 5 continents, making it the fifth most spoken language in the world and one of the six official languages of the United Nations. It's the language of fashion, diplomacy, cuisine, and culture — and it's notoriously tricky to learn from a textbook.

The reason most French learners plateau is liaison: in natural French speech, words blend together in ways that bear no resemblance to how they look on paper. "Comment allez-vous" becomes something like "Kommahtalay-voo" to untrained ears. Learning French by reading it — which is how most apps teach — leaves you completely unprepared for real spoken French.

Then there's the gender system. Every French noun is either masculine or feminine, and adjectives must agree — making even simple sentences grammatically complex. Add in the subjunctive, compound tenses, and the silent letters that dominate written French, and it's no wonder so many learners struggle.

Festivities addresses all of this through conversation. You learn liaison by hearing it, repeatedly, in context. You internalize gendered nouns by using them in sentences rather than memorizing lists. Your AI tutor speaks natural French at a pace calibrated to your level, then gently raises the bar as you grow.

Whether you're learning for a Paris trip, a French-speaking partner or family, professional opportunities in France or Canada, or the sheer beauty of the language, Festivities gets you speaking authentically — not just technically correctly.`,
    challenges: [
      "Liaison — words blend together in speech",
      "Gendered nouns and adjective agreement",
      "Silent letters in written French",
      "Formal (vous) vs. informal (tu) register",
      "Nasal vowels and sounds absent in English",
    ],
    topics: [
      "Casual conversation",
      "Food & restaurants",
      "Travel & transport",
      "Business French",
      "Art & culture",
      "News & politics",
      "Romance & relationships",
      "Parisian slang",
    ],
    conversation: [
      {
        role: "ai",
        text: "Alors, tu as déjà visité Paris ?",
        translation: "So, have you ever visited Paris?",
      },
      {
        role: "user",
        text: "Non, pas encore. Je voudrais y aller l'année prochaine.",
        translation: "No, not yet. I'd like to go next year.",
      },
      {
        role: "ai",
        text: "Quelle bonne idée ! Qu'est-ce que tu veux voir en priorité — les musées, la nourriture, ou les quartiers branchés ?",
        translation: "What a great idea! What do you want to see first — the museums, the food, or the trendy neighborhoods?",
      },
      {
        role: "user",
        text: "La nourriture, sans aucun doute. Et peut-être le Louvre.",
        translation: "The food, without a doubt. And maybe the Louvre.",
      },
      {
        role: "ai",
        text: "Parfait choix. Note: you used 'sans aucun doute' — that's a very natural, native-sounding phrase. Très bien !",
        translation: "",
      },
    ],
    competitor: "Babbel",
    competitorDescription: "The structured app for European languages",
    testimonials: [
      {
        quote:
          "My French teacher always said I had great grammar but sounded like a robot. After two months with Festivities, I went to Lyon and people thought I was Belgian.",
        name: "Sophie R.",
        time: "2 months",
      },
      {
        quote:
          "The AI catches subtle pronunciation errors that I'd been making for years without realizing. My French colleagues noticed the improvement immediately.",
        name: "Thomas B.",
        time: "3 months",
      },
    ],
    faqs: [
      {
        id: "how-long",
        question: "How long does it take to become conversational in French?",
        answer:
          "French is a Category I language for English speakers (similar in difficulty to Spanish and Italian). Most Festivities learners achieve basic conversational ability in 6-10 weeks with daily practice, and comfortable conversational fluency in 4-6 months. The key is speaking from day one — not waiting until you've 'learned enough' to try.",
      },
      {
        id: "pronunciation",
        question: "How does Festivities teach French pronunciation?",
        answer:
          "French pronunciation is one of the hardest parts for English speakers — from nasal vowels to liaison. Festivities uses voice-based conversations where you both hear and produce French sounds from the start. Our AI tutor models natural French speech and provides feedback on your pronunciation, helping you develop an ear for the sounds before worrying too much about formal rules.",
      },
      {
        id: "vs-babbel",
        question: "How does Festivities compare to Babbel for French?",
        answer:
          "Babbel provides good structured lessons with a clear curriculum. Festivities focuses on conversation practice, which is what actually drives fluency. Many learners use both — Babbel for structured grammar understanding, Festivities for practicing it in real conversation. If your goal is to speak French comfortably, Festivities should be your primary practice tool.",
      },
      {
        id: "beginner",
        question: "Is Festivities suitable for complete French beginners?",
        answer:
          "Yes. Our AI tutor starts with the most essential vocabulary and phrases, using English support as needed, and progressively reduces scaffolding as you build confidence. Beginners are typically surprised by how quickly they can hold meaningful, if simple, conversations.",
      },
      {
        id: "which-french",
        question: "Which variety of French does Festivities teach?",
        answer:
          "Festivities teaches standard French with awareness of both European (metropolitan French) and Quebec French variations. You can specify a preference in your settings. Both varieties are mutually intelligible, though they have notable differences in vocabulary and pronunciation that our AI tutor will flag.",
      },
    ],
  },
  {
    slug: "japanese",
    name: "Japanese",
    native: "日本語",
    flag: "🇯🇵",
    bcp47: "ja",
    color: "#C43265",
    tagline: "One of the world's most rewarding languages to learn.",
    heroHeadline: "Learn Japanese the way it's actually spoken.",
    heroSubheadline:
      "Three writing systems. Politeness levels. Particles. Japanese is complex — but conversation makes it click.",
    seoTitle: "Learn Japanese with AI Conversations | Festivities",
    seoDescription:
      "Master Japanese through real AI conversations. Learn natural speech, particles, keigo, and writing systems through adaptive dialogue. Start free.",
    whyContent: `Japanese is consistently ranked among the most challenging languages for English speakers by the US Foreign Service Institute — requiring approximately 2,200 hours to reach professional proficiency compared to 600 hours for Spanish. But that doesn't mean it's impossible, or even as hard as it sounds, if you approach it correctly.

The biggest mistake Japanese learners make is trying to perfect the writing systems before practicing speech. Hiragana and Katakana are essential and learnable in a week or two, but Kanji is a years-long project. Waiting until you've mastered Kanji before speaking is a guaranteed path to giving up.

Festivities starts you speaking from day one. Yes, you'll learn to read Hiragana early — it's unavoidable and valuable. But your primary practice is conversation, which is where Japanese really comes alive. Particles like は (wa), が (ga), and を (wo) make sense in the flow of real sentences, not in abstract grammar explanations. Keigo (the formal speech system) feels natural when you practice it with a tutor who adapts the register to each situation.

Japanese has a beautiful internal logic. Verbs come at the end of sentences. Adjectives conjugate like verbs. Questions are formed by adding か to the end. Once you internalize these patterns through conversation, they become second nature rather than rules to memorize.

Whether you're learning for anime, manga, travel, work in Japan, or the intellectual challenge of one of humanity's most sophisticated languages, Festivities adapts to your goals and meets you at your level.`,
    challenges: [
      "Three writing systems: Hiragana, Katakana, and Kanji",
      "Keigo — formal and polite speech levels",
      "Particles (は, が, を, に, で) and their nuanced uses",
      "Sentence-final verbs (SOV word order)",
      "Counting objects with different counters (本, 枚, 匹...)",
    ],
    topics: [
      "Daily conversation",
      "Greetings & formalities",
      "Food & restaurants",
      "Travel in Japan",
      "Pop culture (anime, manga)",
      "Business Japanese",
      "Casual speech patterns",
      "Traditional culture",
    ],
    conversation: [
      {
        role: "ai",
        text: "日本語の勉強はどのくらい続けていますか？",
        translation: "How long have you been studying Japanese?",
      },
      {
        role: "user",
        text: "三ヶ月ぐらいです。まだ難しいですが、楽しいです。",
        translation: "About three months. It's still difficult, but it's fun.",
      },
      {
        role: "ai",
        text: "すごいですね！三ヶ月でこんなに話せるのは本当に上手です。どんな場面で日本語を使いたいですか？",
        translation: "That's amazing! Being able to speak this well in three months is really impressive. What situations do you want to use Japanese in?",
      },
      {
        role: "user",
        text: "来年、日本に旅行したいです。特に京都に行きたいです。",
        translation: "I want to travel to Japan next year. I especially want to go to Kyoto.",
      },
      {
        role: "ai",
        text: "京都は最高ですよ！Notice you used 特に (especially) — very natural. Let's practice some phrases you'll actually need there.",
        translation: "",
      },
    ],
    competitor: "WaniKani",
    competitorDescription: "The popular Kanji learning system",
    testimonials: [
      {
        quote:
          "I'd been doing WaniKani for a year and could read tons of Kanji but couldn't hold a conversation. Festivities fixed that in 8 weeks. Completely different skill.",
        name: "Kevin H.",
        time: "8 weeks",
      },
      {
        quote:
          "The way Festivities handles keigo is genius — it just uses it naturally in context and your brain picks it up. I didn't even realize I was learning it until someone pointed out I was using it correctly.",
        name: "Maya L.",
        time: "4 months",
      },
    ],
    faqs: [
      {
        id: "how-long",
        question: "How long does it take to learn Japanese?",
        answer:
          "Japanese requires significantly more time than European languages for English speakers. Basic conversational ability typically takes 6-12 months with daily practice. Comfortable conversational fluency is more realistically 1-2 years. Reading fluency with Kanji takes even longer. However, 'conversational' is achievable much faster than most people think — especially if you focus on speaking rather than reading from the start.",
      },
      {
        id: "writing",
        question: "Do I need to learn to read Japanese to use Festivities?",
        answer:
          "No. Festivities is primarily voice-based. You'll naturally pick up Hiragana and Katakana as you use the app — they appear in the conversation transcripts — but the focus is on speaking and listening. Many learners find that they've absorbed the kana (phonetic alphabets) within the first few weeks simply by seeing them repeatedly in context.",
      },
      {
        id: "keigo",
        question: "How does Festivities teach Japanese politeness levels (keigo)?",
        answer:
          "Keigo is one of the most intimidating aspects of Japanese for learners. Festivities handles this by modeling appropriate register for each conversation context. In casual practice, your tutor uses informal speech. When practicing business or formal scenarios, it shifts naturally into keigo. You absorb the difference through repeated exposure rather than memorizing separate grammar rules.",
      },
      {
        id: "beginner",
        question: "Can I learn Japanese as a complete beginner with Festivities?",
        answer:
          "Yes. We start you with the absolute basics — greetings, introducing yourself, numbers — and build systematically from there. Romanized pronunciation guides help you in the earliest stages. We recommend also spending 30-60 minutes learning Hiragana before your first session, which our onboarding materials will help with.",
      },
      {
        id: "particles",
        question: "How does Festivities teach Japanese particles?",
        answer:
          "Particles are notoriously hard to teach in isolation because their usage is deeply contextual. Festivities teaches them the same way native children learn them: through massive amounts of correctly-formed conversation. Your AI tutor naturally models correct particle usage in every exchange, and when you make particle errors, it corrects them gently in context — showing you the right form rather than lecturing about it.",
      },
    ],
  },
  {
    slug: "korean",
    name: "Korean",
    native: "한국어",
    flag: "🇰🇷",
    bcp47: "ko",
    color: "#1A5276",
    tagline: "The language of K-drama, K-pop, and so much more.",
    heroHeadline: "Learn Korean the way it's actually spoken.",
    heroSubheadline:
      "Hangul is one of the world's most elegant writing systems. And real Korean conversation is within reach faster than you think.",
    seoTitle: "Learn Korean with AI Conversations | Festivities",
    seoDescription:
      "Learn Korean through real adaptive AI conversations. Master Hangul, speech levels, and natural dialogue faster than any other app. Start free.",
    whyContent: `Korean has exploded in popularity globally, driven by the K-drama, K-pop, and Korean cinema waves of the past decade. If you're reading this, you probably have a good reason to learn Korean — whether it's connecting with the culture you love, preparing for travel to Seoul, communicating with Korean family or friends, or building a career bridge to one of Asia's most dynamic economies.

The good news: Korean is more accessible than it appears. Hangul, the Korean alphabet, was deliberately designed to be easy to learn — King Sejong created it in the 15th century specifically so that ordinary people could become literate. Most people can learn to read Hangul in a weekend. The spoken sounds are also relatively straightforward for English speakers, with no tones (unlike Mandarin or Vietnamese).

The challenges come in the grammar and speech systems. Korean is an SOV language (subject-object-verb), meaning sentences are structured very differently from English. Korean also has an elaborate system of speech levels (존댓말 jondaemal vs. 반말 banmal) that determines how formal or casual you sound — and using the wrong level can be genuinely awkward.

Festivities teaches Korean through conversation, which is the fastest way to internalize these patterns. Your AI tutor models appropriate speech levels for each context, uses sentence-final particles naturally, and helps you develop the intuition for Korean grammar that only comes from practice. You'll start with 안녕하세요 and build toward the kind of fluid conversation that lets you follow your favorite drama without subtitles.`,
    challenges: [
      "Speech levels (존댓말 formal vs. 반말 casual)",
      "SOV sentence structure (verb comes last)",
      "Sentence-final endings that indicate mood and formality",
      "Topic/subject particle distinctions (은/는 vs. 이/가)",
      "Honorifics for discussing other people",
    ],
    topics: [
      "Greetings & introductions",
      "K-drama & pop culture",
      "Food & dining",
      "K-pop & music",
      "Travel to Korea",
      "Business Korean",
      "Casual conversation",
      "Korean customs & etiquette",
    ],
    conversation: [
      {
        role: "ai",
        text: "안녕하세요! 한국어를 왜 배우고 싶으세요?",
        translation: "Hello! Why do you want to learn Korean?",
      },
      {
        role: "user",
        text: "저는 한국 드라마를 많이 보거든요. 자막 없이 이해하고 싶어요.",
        translation: "I watch a lot of Korean dramas. I want to understand without subtitles.",
      },
      {
        role: "ai",
        text: "정말 좋은 동기네요! 드라마로 배우는 건 아주 효과적이에요. 요즘 어떤 드라마 보세요?",
        translation: "That's a really great motivation! Learning through dramas is very effective. What drama are you watching these days?",
      },
      {
        role: "user",
        text: "지금은 '이상한 변호사 우영우'를 보고 있어요. 아주 재미있어요!",
        translation: "I'm watching 'Extraordinary Attorney Woo' right now. It's very interesting!",
      },
      {
        role: "ai",
        text: "오, 좋은 선택이에요! And great job — you used -거든요 naturally, which shows hesitation/explanation. Very native-like!",
        translation: "",
      },
    ],
    competitor: "TTMIK (Talk To Me In Korean)",
    competitorDescription: "The popular Korean learning platform",
    testimonials: [
      {
        quote:
          "I learned Hangul in two days from videos, then started Festivities. After 6 weeks I could follow simple conversations in my K-dramas. The speech levels clicked for me through actual use.",
        name: "Anna K.",
        time: "6 weeks",
      },
      {
        quote:
          "My Korean coworker was shocked when I started speaking to her in Korean after just two months. She said my 존댓말 was better than most foreigners she'd met who'd been studying for years.",
        name: "Rachel S.",
        time: "2 months",
      },
    ],
    faqs: [
      {
        id: "hangul",
        question: "Do I need to learn Hangul before starting?",
        answer:
          "We recommend spending 1-2 days learning Hangul before your first Festivities session — it's genuinely that fast to learn. Hangul is a phonetic alphabet, meaning each character represents a sound, and the sounds are straightforward. Once you can read Hangul, everything else accelerates dramatically. Our app provides romanized pronunciation for absolute beginners, but transitioning to Hangul early is strongly advised.",
      },
      {
        id: "how-long",
        question: "How long does it take to learn Korean?",
        answer:
          "Korean is a Category III language for English speakers, meaning it's notably more difficult than European languages. Basic conversational ability takes 4-6 months with daily practice. Following everyday K-drama dialogue without subtitles typically takes 1-2 years, as colloquial spoken Korean differs significantly from formal textbook Korean. With Festivities' conversational approach, most learners progress significantly faster than the 2,200 hours cited by the FSI.",
      },
      {
        id: "speech-levels",
        question: "How do I know which speech level to use?",
        answer:
          "This is one of the most nuanced aspects of Korean. The general rule: use formal speech (존댓말) with strangers, elders, and professional contexts. Use informal speech (반말) with close friends and younger people. Festivities helps you develop the intuition for this through contextual practice — your AI tutor uses and models different levels in different simulated scenarios so you build natural judgment rather than following rigid rules.",
      },
      {
        id: "vs-ttmik",
        question: "How does Festivities compare to TTMIK?",
        answer:
          "TTMIK (Talk To Me In Korean) offers excellent structured grammar lessons and cultural content. Festivities is where you practice what TTMIK teaches. Many learners use both: TTMIK for understanding grammar points, Festivities for drilling them through real conversation until they're automatic. If you only have time for one, Festivities provides more practical speaking practice.",
      },
      {
        id: "k-drama",
        question: "Will Festivities help me understand K-dramas?",
        answer:
          "Yes, over time. K-dramas use colloquial, emotionally varied, fast-paced speech that differs from formal Korean. Festivities can simulate casual conversation scenarios, use informal speech registers, and even practice expressions common in entertainment contexts. However, fully following K-dramas without subtitles typically requires 1-2 years of consistent learning, regardless of method.",
      },
    ],
  },
  {
    slug: "german",
    name: "German",
    native: "Deutsch",
    flag: "🇩🇪",
    bcp47: "de",
    color: "#2D5A2D",
    tagline: "More logical than you think. More beautiful than you've heard.",
    heroHeadline: "Learn German that sounds like you mean it.",
    heroSubheadline:
      "The compound words. The case system. The verb at the end of the sentence. It all makes sense once you stop studying and start talking.",
    seoTitle: "Learn German with AI Conversations | Festivities",
    seoDescription:
      "Learn German through real AI conversations. Master cases, compound words, and natural speech through adaptive dialogue. Start speaking German today.",
    whyContent: `German has a reputation for being difficult, and some of that reputation is deserved. The four-case system (nominative, accusative, dative, genitive) changes the endings of articles and adjectives in ways that seem arbitrary at first. Word order is strict in main clauses and inverted in subordinate clauses. And the compound nouns — Donaudampfschifffahrtsgesellschaft is a real word — can look impenetrable.

But here's the thing: German is also deeply logical. The case system follows patterns. The verb placement follows consistent rules. The compound nouns are descriptive in ways that, once you understand the components, make perfect sense. Speakers often remark that German rewards systematic thinking.

The biggest barrier most learners face isn't the grammar — it's getting past the fear of making mistakes. German speakers, particularly in professional contexts, have a reputation for directness that can feel harsh to learners. This is actually freeing once you understand it: German speakers will tell you when you've made an error, which accelerates learning dramatically.

Festivities removes that anxiety by giving you a patient, consistent AI tutor who never makes you feel judged. You can practice the dative case, stumble over adjective endings, and experiment with the Konjunktiv II without any social consequences — just rapid improvement.

Whether you're learning for work opportunities in Germany, Austria, or Switzerland, connecting with German-speaking family, engaging with German philosophy, literature, or music, or simply for the intellectual challenge, Festivities gets you to the point where the language flows.`,
    challenges: [
      "Four-case system (nominative, accusative, dative, genitive)",
      "Three grammatical genders (der, die, das)",
      "Verb placement rules in main and subordinate clauses",
      "Strong and irregular verbs",
      "Separable verbs and prefix placement",
    ],
    topics: [
      "Daily conversation",
      "Business German",
      "Travel & transport",
      "Food & culture",
      "Academic language",
      "News & current events",
      "Literature & philosophy",
      "Regional dialects",
    ],
    conversation: [
      {
        role: "ai",
        text: "Guten Morgen! Wie läuft es bei dir heute?",
        translation: "Good morning! How's it going for you today?",
      },
      {
        role: "user",
        text: "Ganz gut, danke. Ich habe gestern Abend ein deutsches Buch angefangen.",
        translation: "Pretty good, thanks. I started a German book last night.",
      },
      {
        role: "ai",
        text: "Das klingt super! Was für ein Buch ist es? Und wie schwer findest du es?",
        translation: "That sounds great! What kind of book is it? And how difficult do you find it?",
      },
      {
        role: "user",
        text: "Es ist ein Krimi. Manchmal sind die Sätze sehr lang, aber ich verstehe meistens den Inhalt.",
        translation: "It's a crime novel. Sometimes the sentences are very long, but I mostly understand the content.",
      },
      {
        role: "ai",
        text: "Ausgezeichnet! A German crime novel — that's ambitious! Notice your use of 'meistens' (mostly) — perfect word choice. That's a typical pitfall for learners.",
        translation: "",
      },
    ],
    competitor: "Pimsleur",
    competitorDescription: "The audio-based language learning system",
    testimonials: [
      {
        quote:
          "I was terrified of the German case system. My Festivities tutor just... uses it naturally, and somehow I absorbed it. Six months in I passed my B2 exam on the first try.",
        name: "Michael B.",
        time: "6 months",
      },
      {
        quote:
          "I work in a German company and needed professional German fast. The business scenario practice in Festivities was exactly right — formal register, industry vocabulary, the works.",
        name: "Claire D.",
        time: "4 months",
      },
    ],
    faqs: [
      {
        id: "how-hard",
        question: "Is German really as hard as people say?",
        answer:
          "German is harder than Spanish or French for English speakers, but not as hard as its reputation suggests. The case system and gendered nouns are genuinely challenging, but German pronunciation is very regular (each letter has a consistent sound), vocabulary shares many roots with English, and the grammar has a consistent internal logic. Most Festivities learners achieve basic conversational ability within 2-3 months and comfortable fluency within 6-8 months.",
      },
      {
        id: "cases",
        question: "How does Festivities teach the German case system?",
        answer:
          "Cases are best learned through immersion, not through memorizing tables. Festivities' AI tutor uses all four cases correctly in every conversation, and when you make case errors, it corrects them in context — showing you the right form in the sentence you were trying to say. Over hundreds of conversations, your brain starts to feel what sounds right, and the rules that seemed arbitrary become intuitive.",
      },
      {
        id: "dialects",
        question: "Which German does Festivities teach — High German, Austrian, or Swiss?",
        answer:
          "Festivities teaches Standard German (Hochdeutsch), which is understood everywhere German is spoken. You can request exposure to Austrian or Swiss vocabulary variations in your settings. Hochdeutsch is the appropriate choice for professional contexts and provides the best foundation for understanding regional variations.",
      },
      {
        id: "how-long",
        question: "How long does it take to become fluent in German?",
        answer:
          "German is a Category II language for English speakers — harder than Romance languages but significantly easier than Arabic, Japanese, or Mandarin. The FSI estimates 750 hours to professional proficiency. With Festivities' conversational practice, most dedicated learners achieve B2 (conversational fluency) within 8-12 months of daily practice.",
      },
      {
        id: "compound-words",
        question: "How does Festivities handle German compound words?",
        answer:
          "German compound words (Zusammensetzungen) are actually one of the language's superpowers — you can describe almost any concept precisely by combining existing words. Festivities introduces compound vocabulary in context, teaches you the component words, and helps you develop the ability to understand new compounds on the fly, which is an essential skill for reading authentic German.",
      },
    ],
  },
  {
    slug: "italian",
    name: "Italian",
    native: "Italiano",
    flag: "🇮🇹",
    bcp47: "it",
    color: "#8B2D2D",
    tagline: "The most musical language on Earth.",
    heroHeadline: "Learn Italian — and fall in love with every word.",
    heroSubheadline:
      "Italy's language is as rich as its culture. From casual conversations in Rome to elegant discussions about wine and art, real Italian awaits.",
    seoTitle: "Learn Italian with AI Conversations | Festivities",
    seoDescription:
      "Learn Italian through real AI conversations. From Roman slang to elegant formal Italian, master the language through natural dialogue. Start free.",
    whyContent: `Italian is widely considered one of the most beautiful languages in the world, and for good reason — it was shaped by centuries of poetry, opera, and art. Every region of Italy has its own accent, vocabulary, and cultural character, making Italian one of the most regionally varied languages in Europe.

Italian is also one of the easiest languages for English speakers to begin learning. The pronunciation is highly regular (unlike French or English), gendered nouns follow patterns more consistently than in French, and verb conjugations, while numerous, are mostly predictable. A motivated learner can achieve basic conversational ability in Italian surprisingly quickly.

The challenge isn't starting — it's developing the authentic rhythm and melody that native Italian speakers use. Italian has a natural musicality, with sentences that rise and fall in distinctive patterns. Words and phrases are contracted and linked together in rapid speech. Hand gestures (while optional) reflect a culture of embodied expression that learners often find they want to understand.

There's also the regional question. Standard Italian (Italiano standard) is based on Tuscan Italian and understood nationwide, but in practice, regional accents range from Roman to Sicilian to Venetian in ways that can be challenging. Festivities teaches you standard Italian while exposing you to the most common regional patterns you'll encounter in real life.

Whether you're learning for a trip to Italy, Italian cooking and cuisine, love of opera or cinema, connections with Italian family, or the sheer joy of speaking one of the world's great languages, Festivities gets you there through conversation.`,
    challenges: [
      "Verb conjugations across many tenses and moods",
      "Gendered nouns and adjective agreement",
      "Regional accents and vocabulary variation",
      "The subjunctive (congiuntivo) and its many uses",
      "Conversational rhythms and regional expressions",
    ],
    topics: [
      "Food & cooking",
      "Travel in Italy",
      "Art & culture",
      "Daily conversation",
      "Romance & relationships",
      "Business Italian",
      "Regional customs",
      "Cinema & music",
    ],
    conversation: [
      {
        role: "ai",
        text: "Ciao! Come stai? Hai mai assaggiato la cucina italiana autentica?",
        translation: "Hi! How are you? Have you ever tasted authentic Italian cuisine?",
      },
      {
        role: "user",
        text: "Sì, ho mangiato in un ristorante italiano la settimana scorsa. Era buonissimo!",
        translation: "Yes, I ate at an Italian restaurant last week. It was delicious!",
      },
      {
        role: "ai",
        text: "Che bello! Cosa hai mangiato? E era cucina del nord o del sud Italia?",
        translation: "How wonderful! What did you eat? And was it northern or southern Italian cuisine?",
      },
      {
        role: "user",
        text: "Ho mangiato un risotto ai funghi. Non lo so se era del nord o del sud.",
        translation: "I ate a mushroom risotto. I don't know if it was from the north or south.",
      },
      {
        role: "ai",
        text: "Il risotto è tipicamente del nord — Piemonte o Lombardia! Great sentence. One note: 'Non lo so se' works, but Italians often just say 'Non so se' in casual speech.",
        translation: "",
      },
    ],
    competitor: "Rosetta Stone",
    competitorDescription: "The immersion-based learning system",
    testimonials: [
      {
        quote:
          "I moved to Florence for a year. Before going I used Festivities for two months. On arrival, Italians were surprised I'd never been before — they thought I must have lived there.",
        name: "Laura H.",
        time: "2 months pre-arrival",
      },
      {
        quote:
          "The AI captures the expressiveness of Italian in a way that text-based apps never could. The intonation, the emphasis, the pausing — it sounds like talking to a real Italian.",
        name: "Giovanni R.",
        time: "3 months",
      },
    ],
    faqs: [
      {
        id: "how-long",
        question: "How long does it take to learn Italian?",
        answer:
          "Italian is one of the easiest languages for English speakers — similar in difficulty to Spanish and French. Most Festivities learners achieve basic conversational ability in 4-8 weeks of daily practice and comfortable conversational fluency within 3-5 months. If you know any Spanish, French, or Portuguese, your progress will be even faster due to shared vocabulary.",
      },
      {
        id: "pronunciation",
        question: "How does Festivities help with Italian pronunciation?",
        answer:
          "Italian pronunciation is remarkably regular — each letter combination has one sound, unlike English or French. This makes it a great language for learning through listening and repeating. Festivities' voice-based conversations help you develop the natural rhythm and melody of Italian speech, with feedback on common pronunciation points like double consonants, open vs. closed vowels, and the rhythm of connected speech.",
      },
      {
        id: "which-italian",
        question: "Which Italian will I learn — Roman, Florentine, Milanese?",
        answer:
          "Festivities teaches Standard Italian (based on Florentine/Tuscan Italian), which is the national standard and understood everywhere. You'll be exposed to expressions and vocabulary common across Italy, with notes on significant regional variations where they're relevant to real communication.",
      },
      {
        id: "travel",
        question: "Will I be able to use Italian on a trip to Italy?",
        answer:
          "Yes — this is one of the best use cases for Festivities. We have specific travel scenarios covering restaurants, hotels, transportation, shopping, directions, and cultural experiences. Most major tourist areas have English speakers, but making the effort to speak Italian opens doors, creates genuine connections, and makes your experience far richer.",
      },
      {
        id: "if-know-spanish",
        question: "Will knowing Spanish help me learn Italian?",
        answer:
          "Enormously. Spanish and Italian share approximately 82% lexical similarity — meaning most of the vocabulary is recognizable between the two. Grammar structures are very similar. Most Spanish speakers report that Italian feels 'almost readable' from day one. Festivities will help you capitalize on these similarities while alerting you to the 'false friends' (words that look the same but mean different things) where the languages diverge.",
      },
    ],
  },
  {
    slug: "portuguese",
    name: "Portuguese",
    native: "Português",
    flag: "🇧🇷",
    bcp47: "pt",
    color: "#1A5C3A",
    tagline: "Two continents. One beautiful language.",
    heroHeadline: "Learn Portuguese — from 'obrigado' to native fluency.",
    heroSubheadline:
      "Brazilian Portuguese, European Portuguese — whichever variety calls to you, real conversation is the fastest path to fluency.",
    seoTitle: "Learn Portuguese with AI Conversations | Festivities",
    seoDescription:
      "Learn Portuguese through real AI conversations. Master Brazilian or European Portuguese through natural adaptive dialogue. Start free today.",
    whyContent: `Portuguese is the seventh most spoken language in the world, with over 260 million native speakers across Portugal, Brazil, Mozambique, Angola, Cape Verde, and more. It's one of the fastest-growing languages in digital media, and Brazil alone represents a massive market of 215 million people who primarily speak Portuguese.

The biggest question for Portuguese learners is which variety to focus on: Brazilian Portuguese (BP) or European Portuguese (EP). The differences are significant — BP is often described as more melodic and vowel-heavy, while EP is quicker with more reduced vowels. Vocabulary also differs in notable ways (a 'bus' is 'ônibus' in Brazil and 'autocarro' in Portugal). Festivities lets you choose your target variety in settings, though it exposes you to both so you understand each when you encounter it.

Portuguese shares a lot with Spanish — approximately 89% lexical similarity. If you know Spanish, you can already read significant amounts of Portuguese. However, the spoken languages diverge more than the written ones, particularly in pronunciation, which means Spanish speakers sometimes understand written Portuguese easily but struggle with speech. Festivities focuses on spoken fluency, which is where the real work is.

The subjunctive is particularly important in Portuguese — it's used more frequently than in Spanish, especially in Brazilian Portuguese. The personal infinitive (unique to Portuguese) adds grammatical expressiveness that doesn't exist in other Romance languages. And Brazilian casual speech is full of contractions, elisions, and informal forms that don't appear in textbooks but are essential for understanding real Brazilians.

Whether you're drawn to Brazil's culture and economy, Portugal's history and landscapes, or the pan-Lusophone world, Festivities gets you speaking authentically through real conversation practice.`,
    challenges: [
      "Brazilian vs. European variety differences",
      "Nasal vowels (ão, ã, em) unique to Portuguese",
      "Personal infinitive (unique to Portuguese)",
      "Subjunctive used more extensively than in Spanish",
      "Informal spoken contractions and elisions in BP",
    ],
    topics: [
      "Brazilian pop culture",
      "Food & cooking",
      "Travel in Brazil/Portugal",
      "Business Portuguese",
      "Music (bossa nova, MPB, sertanejo)",
      "Daily conversation",
      "Romance & relationships",
      "News & current events",
    ],
    conversation: [
      {
        role: "ai",
        text: "Oi! Tudo bem? Você está aprendendo português para viajar para o Brasil?",
        translation: "Hi! Everything good? Are you learning Portuguese to travel to Brazil?",
      },
      {
        role: "user",
        text: "Tudo ótimo! Sim, quero visitar o Brasil o ano que vem. Especialmente o Rio.",
        translation: "Everything great! Yes, I want to visit Brazil next year. Especially Rio.",
      },
      {
        role: "ai",
        text: "Que demais! O Rio é incrível. Você quer aprender mais sobre a cultura carioca? Tem um jeito especial de falar no Rio.",
        translation: "How awesome! Rio is incredible. Do you want to learn more about Rio culture? There's a special way of speaking in Rio.",
      },
      {
        role: "user",
        text: "Sim, com certeza. Quero entender todo mundo quando estiver lá.",
        translation: "Yes, definitely. I want to understand everyone when I'm there.",
      },
      {
        role: "ai",
        text: "Ótimo objetivo! Great natural use of 'com certeza' — that's very Brazilian. And 'estiver' is the future subjunctive, which you used perfectly!",
        translation: "",
      },
    ],
    competitor: "Pimsleur",
    competitorDescription: "The audio-focused language learning method",
    testimonials: [
      {
        quote:
          "I went to São Paulo for a work trip after 3 months of Festivities. People thought I was from Argentina at worst — close enough! My business meetings went incredibly well.",
        name: "Jessica M.",
        time: "3 months",
      },
      {
        quote:
          "The way Festivities handles BP vs EP is really smart — I told it I was focusing on Brazil and it adjusted, but still helped me understand European Portuguese when I needed it.",
        name: "Pedro A.",
        time: "5 months",
      },
    ],
    faqs: [
      {
        id: "bp-vs-ep",
        question: "Should I learn Brazilian or European Portuguese?",
        answer:
          "It depends on your goals. Brazilian Portuguese is more widely spoken (Brazil has 215M people vs Portugal's 10M), more accessible in media, and often considered easier for beginners due to its clearer vowel pronunciation. European Portuguese is more compact and useful if your goals relate to Portugal, Africa, or international contexts. Festivities lets you choose your primary variety and adjusts accordingly, while ensuring you understand the other variety.",
      },
      {
        id: "if-know-spanish",
        question: "Will knowing Spanish help me learn Portuguese?",
        answer:
          "Significantly. Spanish and Portuguese share approximately 89% lexical similarity. Most Spanish speakers can read Portuguese with minimal study and understand much of written Portuguese immediately. Spoken Portuguese is harder — particularly European Portuguese, which sounds very different from Spanish. Festivities helps Spanish speakers leverage what they know while quickly filling the gaps specific to Portuguese.",
      },
      {
        id: "how-long",
        question: "How long does it take to become conversational in Portuguese?",
        answer:
          "Portuguese is a Category I language for English speakers (similar difficulty to Spanish, French, Italian). Most Festivities learners achieve basic conversational ability in 4-8 weeks and comfortable conversational fluency within 3-5 months of daily practice. Spanish speakers typically cut this time in half.",
      },
      {
        id: "nasal-vowels",
        question: "How does Festivities help with Portuguese nasal sounds?",
        answer:
          "Portuguese nasal vowels (sounds like ão, ã, em, im) are challenging for speakers of languages without similar sounds. Festivities uses voice-based conversation as its primary medium, which means you hear and practice nasal sounds in every session. Premium plans include pronunciation feedback that specifically identifies nasal vowel accuracy.",
      },
      {
        id: "informal",
        question: "Will I sound natural speaking Portuguese, not textbook-formal?",
        answer:
          "This is exactly what Festivities is designed for. Brazilian casual speech is full of contractions, shortened words, and informal expressions that never appear in textbooks. Festivities specifically models casual, natural speech alongside formal options, preparing you for real conversations with real Brazilians — not just airport check-ins.",
      },
    ],
  },
  {
    slug: "mandarin",
    name: "Mandarin",
    native: "中文",
    flag: "🇨🇳",
    bcp47: "zh",
    color: "#8B1A1A",
    tagline: "The language of 1.4 billion people — and a billion opportunities.",
    heroHeadline: "Learn Mandarin through conversation, not characters.",
    heroSubheadline:
      "Yes, Mandarin has tones. Yes, there are thousands of characters. But real spoken Mandarin is achievable much faster than you think.",
    seoTitle: "Learn Mandarin Chinese with AI Conversations | Festivities",
    seoDescription:
      "Learn Mandarin Chinese through real AI conversations. Master tones, natural speech, and everyday Mandarin through adaptive dialogue. Start free today.",
    whyContent: `Mandarin Chinese is the most spoken language in the world by number of native speakers — approximately 920 million people. It's the language of one of the world's two largest economies, of 5,000 years of civilization, of poetry, philosophy, and one of the oldest literary traditions on earth. And it's classified as a Category IV language for English speakers — the hardest category, alongside Arabic and Japanese.

The key insight that most Mandarin learners miss: speaking Mandarin and reading Mandarin are almost separate skills. The writing system (thousands of characters) is genuinely the hardest part. The spoken language, however, is grammatically quite simple compared to European languages — no verb conjugation, no grammatical gender, no complex tense system, no article system.

What makes Mandarin spoken language challenging for English speakers are the tones. Mandarin has four tones (plus a neutral tone), and the same syllable in different tones means completely different things: mā (mother), má (hemp), mǎ (horse), mà (scold). Getting the tones wrong in speech causes genuine miscommunication and is one of the most important things to get right early.

Festivities teaches Mandarin through spoken conversation from the start, using Pinyin (the romanized pronunciation system) to support beginners while introducing characters progressively. Your AI tutor models correct tones in every utterance and provides feedback when your tone production needs adjustment. The focus is on spoken communication first — getting you to the point where you can have a real conversation in Mandarin, then expanding your reading and writing capabilities from there.

With China playing an increasingly central role in global business, technology, and culture, Mandarin is arguably the highest-value language investment you can make outside of English.`,
    challenges: [
      "Four tones — same syllable, different meaning",
      "Thousands of characters for reading and writing",
      "Measure words required with all nouns (一本书, 一杯水...)",
      "No verb conjugation but complex aspect markers",
      "Significant gap between formal and colloquial registers",
    ],
    topics: [
      "Daily conversation",
      "Business Mandarin",
      "Food & dining",
      "Travel in China/Taiwan",
      "Numbers & shopping",
      "Chinese culture & traditions",
      "Current events",
      "Entertainment & media",
    ],
    conversation: [
      {
        role: "ai",
        text: "你好！你学中文多长时间了？",
        translation: "Hello! How long have you been learning Chinese?",
      },
      {
        role: "user",
        text: "我学了大概两个月了。四声对我来说很难。",
        translation: "I've been learning for about two months. The four tones are very hard for me.",
      },
      {
        role: "ai",
        text: "两个月能说得这么好，真厉害！声调确实很难，但是你已经进步很多了。我们来练习一些常用词的声调好吗？",
        translation: "Being able to speak this well in two months is really impressive! Tones are indeed difficult, but you've already improved a lot. Shall we practice the tones of some common words?",
      },
      {
        role: "user",
        text: "好的！我想练习。您能帮我纠正我的声调吗？",
        translation: "Okay! I want to practice. Can you help me correct my tones?",
      },
      {
        role: "ai",
        text: "当然可以！Good progress — you used 您 (polite 'you') appropriately. And your tones were clear in this message. Let's work on the tricky third tone combinations.",
        translation: "",
      },
    ],
    competitor: "HelloChinese",
    competitorDescription: "The dedicated Mandarin learning app",
    testimonials: [
      {
        quote:
          "I use Festivities for Mandarin daily. At first the tones were terrifying. Now my Chinese colleagues tell me my tones are better than most foreigners they've worked with.",
        name: "Ryan C.",
        time: "6 months",
      },
      {
        quote:
          "Festivities doesn't make you feel stupid for getting tones wrong. It just gently models the right version. That psychological safety is huge when you're dealing with something as unforgiving as Mandarin tones.",
        name: "Mia L.",
        time: "4 months",
      },
    ],
    faqs: [
      {
        id: "how-hard",
        question: "Is Mandarin really as hard as people say?",
        answer:
          "Mandarin is legitimately challenging for English speakers — the US Foreign Service Institute estimates 2,200 hours to professional proficiency, the same category as Japanese and Arabic. However, this estimate includes extensive reading/writing. Spoken Mandarin is actually more achievable than these numbers suggest, because the grammar is relatively simple. Tones are the main early challenge. Most Festivities learners achieve basic conversational Mandarin in 4-6 months of daily practice.",
      },
      {
        id: "tones",
        question: "How does Festivities help with Mandarin tones?",
        answer:
          "Tones are best learned through listening and production in context. Festivities' AI tutor models correct tones in every single utterance — every sentence is a tone lesson. When you produce incorrect tones, the tutor corrects them by echoing back the correct version in the context of your conversation. Premium plans include phoneme-level tone analysis that shows exactly which tones need work.",
      },
      {
        id: "characters",
        question: "Do I need to learn Chinese characters to use Festivities?",
        answer:
          "No. Festivities is primarily voice and conversation-based. We use Pinyin (the official romanization system) for beginners and introduce characters progressively. The conversation transcripts show both Pinyin and characters so you can start developing character recognition alongside your speaking practice. We recommend focusing on speaking first and treating character learning as a parallel track.",
      },
      {
        id: "simplified-vs-traditional",
        question: "Does Festivities teach Simplified or Traditional characters?",
        answer:
          "Festivities teaches Simplified Chinese (used in mainland China, Singapore) by default, which is what most business and media use. Traditional Chinese (used in Taiwan, Hong Kong, many diaspora communities) can be selected in settings. Both use the same spoken Mandarin, so the choice only affects the written characters you see in transcripts.",
      },
      {
        id: "business",
        question: "Is Festivities good for business Mandarin?",
        answer:
          "Yes. Festivities has specific business scenario simulations covering meetings, negotiations, presentations, networking, and professional correspondence. Business Mandarin has specific registers and vocabulary that differ from casual speech, and Festivities' adaptive AI adjusts to practice these appropriately. Many of our most active users are learning Mandarin specifically for professional advancement.",
      },
    ],
  },
];

export function getLanguageBySlug(slug: string): LanguageData | undefined {
  return LANGUAGES.find((l) => l.slug === slug);
}

export function getAllLanguageSlugs(): string[] {
  return LANGUAGES.map((l) => l.slug);
}
