export type QuizQuestionBase = {
  id: string;
  explanation: string;
  grammarRule: string;
  referenceSectionId: string;
  referenceLabel: string;
  xp: number;
};

export type MultipleChoiceQuestion = QuizQuestionBase & {
  type: "multiple-choice";
  prompt: string;
  options: string[];
  correctIndex: number;
};

export type TrueFalseQuestion = QuizQuestionBase & {
  type: "true-false";
  statement: string;
  correct: boolean;
};

export type FillBlankQuestion = QuizQuestionBase & {
  type: "fill-blank";
  prompt: string;
  sentenceBefore: string;
  sentenceAfter: string;
  accepted: string[];
};

export type SentenceOrderQuestion = QuizQuestionBase & {
  type: "sentence-order";
  prompt: string;
  correctOrder: string[];
  shuffled: string[];
  translation: string;
};

export type DragDropQuestion = QuizQuestionBase & {
  type: "drag-drop";
  prompt: string;
  parts: string[];
  correctAnswers: string[];
  choices: string[];
};

export type TypingQuestion = QuizQuestionBase & {
  type: "typing";
  prompt: string;
  accepted: string[];
};

export type QuizQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | SentenceOrderQuestion
  | DragDropQuestion
  | TypingQuestion;

export type Quiz = {
  lessonSlug: string;
  questions: QuizQuestion[];
};

const nominativQuiz: Quiz = {
  lessonSlug: "nominativ",
  questions: [
    {
      id: "nom-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly uses the nominative?",
      options: ["Der Mann schläft.", "Den Mann schläft.", "Dem Mann schläft.", "Des Mannes schläft."],
      correctIndex: 0,
      explanation: "Der Mann is the subject performing the action, so it stays in the nominative — der, not den or dem.",
      grammarRule: "Use the nominative for the subject of any sentence.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "nom-2",
      type: "true-false",
      statement: "The nominative is used for the predicate noun after sein, werden, and bleiben.",
      correct: true,
      explanation:
        "Correct — sein/werden/bleiben link the subject to a noun that renames it, so that noun stays in the nominative too.",
      grammarRule: "Use the nominative for the predicate noun after sein, werden, and bleiben.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "nom-3",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct nominative article.",
      sentenceBefore: "",
      sentenceAfter: " Frau arbeitet heute.",
      accepted: ["die"],
      explanation: "Frau is feminine, and as the subject it needs the nominative feminine article die.",
      grammarRule: "Feminine nominative article: die.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 15,
    },
    {
      id: "nom-4",
      type: "sentence-order",
      prompt: "Put the words in the correct order.",
      correctOrder: ["Der", "Junge", "liest", "ein", "Buch."],
      shuffled: ["Buch.", "Der", "liest", "ein", "Junge"],
      translation: "The boy is reading a book.",
      explanation:
        "German main clauses put the subject first (Der Junge), then the conjugated verb (liest) in second position, then the rest.",
      grammarRule: "Ask wer? or was? to identify the nominative element — here, Der Junge answers wer?",
      referenceSectionId: "examples",
      referenceLabel: "Examples",
      xp: 20,
    },
    {
      id: "nom-5",
      type: "drag-drop",
      prompt: "Drag the correct article into each blank.",
      parts: ["", " Kind lacht, und ", " Katze schläft."],
      correctAnswers: ["Das", "die"],
      choices: ["Das", "die", "den", "dem"],
      explanation: "Kind is neuter → das; Katze is feminine → die — both are nominative subjects.",
      grammarRule: "Match each noun's gender to its nominative article: der/die/das.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 20,
    },
    {
      id: "nom-6",
      type: "typing",
      prompt: "Type the nominative personal pronoun that replaces ‘der Lehrer’.",
      accepted: ["er"],
      explanation: "Der Lehrer is masculine, so it's replaced by the pronoun er in the nominative.",
      grammarRule: "Masculine nominative pronoun: er.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 15,
    },
  ],
};

const akkusativQuiz: Quiz = {
  lessonSlug: "akkusativ",
  questions: [
    {
      id: "akk-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly uses the accusative?",
      options: ["Ich sehe den Mann.", "Ich sehe der Mann.", "Ich sehe dem Mann.", "Ich sehe des Mannes."],
      correctIndex: 0,
      explanation: "sehen takes a direct object in the accusative, and masculine der becomes den.",
      grammarRule: "Only the masculine article changes: der → den, ein → einen.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "akk-2",
      type: "true-false",
      statement: "The feminine accusative article is identical to the feminine nominative article.",
      correct: true,
      explanation: "Correct — die stays die in both the nominative and accusative; only the masculine article changes.",
      grammarRule: "Feminine, neuter, and plural articles are identical to the nominative.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "akk-3",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct accusative article.",
      sentenceBefore: "Ich kaufe ",
      sentenceAfter: " Apfel.",
      accepted: ["einen"],
      explanation: "Apfel is masculine, and as a direct object after kaufen it needs the accusative einen.",
      grammarRule: "Masculine accusative indefinite article: einen.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 15,
    },
    {
      id: "akk-4",
      type: "sentence-order",
      prompt: "Put the words in the correct order.",
      correctOrder: ["Wir", "lieben", "unseren", "Hund."],
      shuffled: ["Hund.", "Wir", "unseren", "lieben"],
      translation: "We love our dog.",
      explanation: "Subject (Wir) first, verb (lieben) second, then the accusative object (unseren Hund).",
      grammarRule: "Use the accusative for the direct object of a transitive verb.",
      referenceSectionId: "examples",
      referenceLabel: "Examples",
      xp: 20,
    },
    {
      id: "akk-5",
      type: "drag-drop",
      prompt: "Drag the correct pronoun into each blank.",
      parts: ["Das Geschenk ist für ", ", nicht für ", "."],
      correctAnswers: ["dich", "ihn"],
      choices: ["dich", "ihn", "du", "er"],
      explanation: "für always triggers the accusative, so du becomes dich and er becomes ihn.",
      grammarRule: "Always use the accusative after durch, für, gegen, ohne, um.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 20,
    },
    {
      id: "akk-6",
      type: "typing",
      prompt: "Type the accusative form of ‘der Student’, article included (it's a weak noun).",
      accepted: ["den studenten"],
      explanation:
        "Student is a weak (n-) noun, so it takes both the accusative article den and an -en ending: den Studenten.",
      grammarRule: "Weak nouns add -n/-en in the accusative too.",
      referenceSectionId: "exceptions",
      referenceLabel: "Exceptions",
      xp: 15,
    },
  ],
};

const dativQuiz: Quiz = {
  lessonSlug: "dativ",
  questions: [
    {
      id: "dat-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly uses the dative?",
      options: ["Ich helfe der Frau.", "Ich helfe die Frau.", "Ich helfe den Frau.", "Ich helfe das Frau."],
      correctIndex: 0,
      explanation: "helfen always takes a dative object, and feminine die becomes der in the dative.",
      grammarRule: "helfen always takes the dative, never the accusative.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "dat-2",
      type: "true-false",
      statement: "Dative plural nouns usually add an -n ending.",
      correct: true,
      explanation: "Correct — die Kinder becomes den Kindern; only nouns already ending in -n or -s stay the same.",
      grammarRule: "Plural nouns add -n in the dative unless they already end in -n or -s.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "dat-3",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct dative article.",
      sentenceBefore: "Wir fahren mit ",
      sentenceAfter: " Bus.",
      accepted: ["dem"],
      explanation: "Bus is masculine, and mit always triggers the dative, so der becomes dem.",
      grammarRule: "Always use the dative after aus, bei, mit, nach, seit, von, zu.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 15,
    },
    {
      id: "dat-4",
      type: "sentence-order",
      prompt: "Put the words in the correct order.",
      correctOrder: ["Ich", "gebe", "dem", "Mann", "das", "Buch."],
      shuffled: ["das", "Ich", "Buch.", "dem", "gebe", "Mann"],
      translation: "I give the man the book.",
      explanation: "When both objects are nouns, the dative (dem Mann) usually comes before the accusative (das Buch).",
      grammarRule: "When both objects in a sentence are nouns, the dative usually comes first.",
      referenceSectionId: "important-notes",
      referenceLabel: "Important notes",
      xp: 20,
    },
    {
      id: "dat-5",
      type: "drag-drop",
      prompt: "Drag the correct pronoun into each blank.",
      parts: ["Das Haus gehört ", ", und das Auto gehört ", "."],
      correctAnswers: ["ihr", "ihm"],
      choices: ["ihr", "ihm", "sie", "er"],
      explanation: "gehören always takes the dative: sie becomes ihr and er becomes ihm.",
      grammarRule: "A fixed group of verbs always take a dative object — gehören is one of them.",
      referenceSectionId: "detailed-explanation",
      referenceLabel: "Detailed explanation",
      xp: 20,
    },
    {
      id: "dat-6",
      type: "typing",
      prompt: "Type the dative plural form of ‘die Kinder’, article included (e.g. ‘den …’).",
      accepted: ["den kindern"],
      explanation: "Plural die Kinder becomes den Kindern in the dative — the article changes to den, and the noun gains -n.",
      grammarRule: "Every article changes in the dative; plural nouns add -n.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 15,
    },
  ],
};

const quizzesBySlug: Record<string, Quiz> = {
  nominativ: nominativQuiz,
  akkusativ: akkusativQuiz,
  dativ: dativQuiz,
};

export function getQuiz(slug: string): Quiz | undefined {
  return quizzesBySlug[slug];
}

export function getQuizMaxXp(quiz: Quiz): number {
  return quiz.questions.reduce((sum, question) => sum + question.xp, 0);
}
