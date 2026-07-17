import type { CefrLevel } from "@/components/ui/level-badge";

export type LessonStatus = "completed" | "available" | "locked";

export type DeclensionRow = {
  gender: "masculine" | "feminine" | "neuter" | "plural";
  definite: string;
  indefinite: string;
  pronoun: string;
};

export type LessonExample = { de: string; en: string };

export type LessonMistake = { wrong: string; right: string; note: string };

export type Lesson = {
  slug: string;
  titleDe: string;
  level: CefrLevel;
  readingMinutes: number;
  progress: number;
  status: LessonStatus;
  lastUpdated: string;
  simple: string[];
  detailed: string[];
  rules: string[];
  notes: string[];
  table: DeclensionRow[];
  examples: LessonExample[];
  mistakes: LessonMistake[];
  exceptions: string[];
  tips: string[];
  summary: string;
};

export type LessonListItem = Pick<
  Lesson,
  "slug" | "titleDe" | "level" | "readingMinutes" | "progress" | "status"
>;

const nominativ: Lesson = {
  slug: "nominativ",
  titleDe: "Der Nominativ",
  level: "A1",
  readingMinutes: 6,
  progress: 100,
  status: "completed",
  lastUpdated: "2026-05-12",
  simple: [
    "The nominative is the case of the subject — the person or thing doing the action in a sentence.",
    "It's also the form you'll find in a dictionary, so every noun you learn starts out in the nominative.",
  ],
  detailed: [
    "German marks the role a noun plays in a sentence by changing its article, not by changing word order the way English often does. The nominative case marks the subject: the entity performing the action of the verb.",
    "You can find the subject by asking wer? (who?) for people or was? (what?) for things — whatever answers that question is in the nominative.",
    "The nominative also appears after the linking verbs sein (to be), werden (to become), and bleiben (to remain), because the noun that follows them renames the subject rather than receiving an action.",
  ],
  rules: [
    "Use the nominative for the subject of any sentence.",
    "Use it for the predicate noun after sein, werden, and bleiben.",
    "Ask wer? or was? to identify the nominative element.",
  ],
  notes: [
    "The nominative is the ‘default’ form — it's the one you look up in a dictionary and the one every other case is compared against.",
    "Adjective endings before a nominative noun depend on the article and gender, e.g. der große Mann — but that's a topic of its own.",
  ],
  table: [
    { gender: "masculine", definite: "der", indefinite: "ein", pronoun: "er" },
    { gender: "feminine", definite: "die", indefinite: "eine", pronoun: "sie" },
    { gender: "neuter", definite: "das", indefinite: "ein", pronoun: "es" },
    { gender: "plural", definite: "die", indefinite: "–", pronoun: "sie" },
  ],
  examples: [
    { de: "Der Mann schläft.", en: "The man is sleeping." },
    { de: "Die Frau arbeitet heute.", en: "The woman is working today." },
    { de: "Das Kind lacht laut.", en: "The child is laughing loudly." },
    { de: "Er ist mein Lehrer.", en: "He is my teacher." },
  ],
  mistakes: [
    {
      wrong: "Ich sehe der Mann.",
      right: "Ich sehe den Mann.",
      note: "sehen takes a direct object in the accusative, not the nominative — this is one of the very first mix-ups every learner makes.",
    },
    {
      wrong: "Der Frau ist nett.",
      right: "Die Frau ist nett.",
      note: "Feminine nominative is die, never der — der is reserved for masculine nouns.",
    },
  ],
  exceptions: [
    "A group of masculine nouns known as ‘n-nouns’ or weak nouns — der Junge, der Name, der Student, der Herr — add -n or -en in every case except the nominative singular.",
    "A handful of nouns have fluid or regionally debated gender (e.g. der/das Joghurt), but a dictionary will always give you the standard form.",
  ],
  tips: [
    "Whenever you're unsure which case a noun needs, start by finding the verb and asking wer oder was tut das? — the answer is always nominative.",
    "Learn every new noun together with its nominative article (der/die/das) — that single habit prevents most gender mistakes later on.",
  ],
  summary:
    "The nominative marks the subject of a sentence and the predicate noun after sein, werden, and bleiben. It's the base form every other case changes from, so it's worth mastering before moving on to the accusative.",
};

const akkusativ: Lesson = {
  slug: "akkusativ",
  titleDe: "Der Akkusativ",
  level: "A1",
  readingMinutes: 9,
  progress: 60,
  status: "available",
  lastUpdated: "2026-06-24",
  simple: [
    "The accusative marks the direct object — the person or thing that directly receives the action of the verb.",
    "It's also the case that follows a small, fixed set of prepositions, no matter what.",
  ],
  detailed: [
    "Once you can find the subject (nominative), the next question is usually ‘what is the subject acting on?’ — that's the direct object, and in German it takes the accusative case.",
    "You can find it by asking wen? (whom?) for people or was? (what?) for things.",
    "Only the masculine article visibly changes in the accusative: der becomes den, and ein becomes einen. Feminine, neuter, and plural articles look exactly like they do in the nominative — which is why the accusative often feels ‘invisible’ until a masculine noun is involved.",
    "A fixed group of verbs almost always take an accusative object — haben, sehen, brauchen, kaufen, essen, trinken, lieben — and a fixed group of prepositions always trigger the accusative: durch, für, gegen, ohne, um (a handy mnemonic is DOGFU, or fudgo).",
  ],
  rules: [
    "Use the accusative for the direct object of a transitive verb.",
    "Ask wen? for people or was? for things to find it.",
    "Only the masculine article changes: der → den, ein → einen.",
    "Feminine, neuter, and plural articles are identical to the nominative.",
    "Always use the accusative after durch, für, gegen, ohne, and um.",
  ],
  notes: [
    "Because only masculine articles change, learners often stop checking gender for feminine and neuter nouns — but possessives and pronouns (mein → meinen, ihr → ihren) follow the same masculine-only pattern, so it's worth staying alert.",
    "Time expressions that answer ‘how long?’ or name a specific point (‘which day?’) often use the accusative without a preposition: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
  ],
  table: [
    { gender: "masculine", definite: "den", indefinite: "einen", pronoun: "ihn" },
    { gender: "feminine", definite: "die", indefinite: "eine", pronoun: "sie" },
    { gender: "neuter", definite: "das", indefinite: "ein", pronoun: "es" },
    { gender: "plural", definite: "die", indefinite: "–", pronoun: "sie" },
  ],
  examples: [
    { de: "Ich sehe den Mann.", en: "I see the man." },
    { de: "Sie kauft einen Apfel.", en: "She's buying an apple." },
    { de: "Wir lieben unseren Hund.", en: "We love our dog." },
    { de: "Das Geschenk ist für dich.", en: "The gift is for you." },
  ],
  mistakes: [
    {
      wrong: "Ich sehe der Mann.",
      right: "Ich sehe den Mann.",
      note: "sehen needs an accusative object, so the masculine article der must become den.",
    },
    {
      wrong: "Das ist für ich.",
      right: "Das ist für mich.",
      note: "für always triggers the accusative, so the pronoun ich becomes mich.",
    },
  ],
  exceptions: [
    "Weak (n-) nouns like der Student, der Junge, and der Name add -n in the accusative too: den Studenten, den Jungen, den Namen — not just in the dative and genitive.",
    "A few verbs that look like they should take a preposition actually take a bare accusative object, e.g. Ich frage dich (not ‘zu dir’).",
  ],
  tips: [
    "Feminine, neuter, and plural nouns are identical in the nominative and accusative — if a sentence looks ‘unchanged’, it's the masculine noun you should double-check.",
    "Memorize durch, für, gegen, ohne, um as one block — they're always accusative, with no exceptions to worry about.",
  ],
  summary:
    "The accusative marks the direct object and follows durch, für, gegen, ohne, and um. The only visible change from the nominative is the masculine article — der/ein become den/einen — everything else stays the same.",
};

const dativ: Lesson = {
  slug: "dativ",
  titleDe: "Der Dativ",
  level: "B1",
  readingMinutes: 11,
  progress: 25,
  status: "available",
  lastUpdated: "2026-07-02",
  simple: [
    "The dative marks the indirect object — usually the person who receives or benefits from something.",
    "It answers the question wem? (to/for whom?).",
  ],
  detailed: [
    "Many German sentences have both a direct object (accusative) and an indirect object (dative): Ich gebe dem Mann das Buch — ‘I give the man the book.’ Dem Mann is the receiver, so it's dative.",
    "A fixed group of verbs always take a dative object even though they look like they should take an accusative one — helfen, danken, gefallen, gehören, folgen, glauben, and antworten are the ones learners meet earliest.",
    "The dative also follows a fixed set of prepositions: aus, bei, mit, nach, seit, von, zu.",
    "With the nine ‘two-way’ prepositions (in, an, auf, über, unter, vor, hinter, neben, zwischen), use the dative for location — answering wo? (where?) — and the accusative for movement toward a destination — answering wohin? (where to?).",
  ],
  rules: [
    "Use the dative for the indirect object — usually the recipient or beneficiary.",
    "Ask wem? to find it.",
    "Every article changes: der → dem, die → der, das → dem, die (plural) → den.",
    "Plural nouns add -n in the dative unless they already end in -n or -s: die Kinder → den Kindern.",
    "Always use the dative after aus, bei, mit, nach, seit, von, zu.",
    "With two-way prepositions, dative answers wo?, accusative answers wohin?.",
  ],
  notes: [
    "Dative verbs never take an accusative object for the person involved — helfen, for example, is always ‘jemandem helfen’, never ‘jemanden helfen’.",
    "Word order tip: when both objects in a sentence are nouns, the dative usually comes first: Ich gebe dem Mann das Buch. When both are pronouns, the accusative comes first: Ich gebe es ihm.",
  ],
  table: [
    { gender: "masculine", definite: "dem", indefinite: "einem", pronoun: "ihm" },
    { gender: "feminine", definite: "der", indefinite: "einer", pronoun: "ihr" },
    { gender: "neuter", definite: "dem", indefinite: "einem", pronoun: "ihm" },
    { gender: "plural", definite: "den", indefinite: "–", pronoun: "ihnen" },
  ],
  examples: [
    { de: "Ich gebe dem Mann das Buch.", en: "I give the man the book." },
    { de: "Sie hilft ihrer Schwester.", en: "She's helping her sister." },
    { de: "Wir fahren mit dem Bus.", en: "We're traveling by bus." },
    { de: "Das Haus gehört den Nachbarn.", en: "The house belongs to the neighbors." },
  ],
  mistakes: [
    {
      wrong: "Ich helfe die Frau.",
      right: "Ich helfe der Frau.",
      note: "helfen always takes the dative, never the accusative — there's no exception.",
    },
    {
      wrong: "mit die Kinder",
      right: "mit den Kindern",
      note: "mit is always dative, and the plural noun needs the -n ending: Kinder → Kindern.",
    },
  ],
  exceptions: [
    "A small set of verbs and adjectives pair with the dative for idiomatic reasons — gefallen (to please), schmecken (to taste good to), and stehen (to suit) all put the person in the dative: Das Kleid steht dir gut.",
    "Nouns that already end in -n or -s in the plural don't add an extra -n in the dative: den Autos, den Frauen.",
  ],
  tips: [
    "The dative plural almost always ends in -n — spotting that -n on a noun is often the fastest way to recognize a dative sentence at a glance.",
    "Learn aus, bei, mit, nach, seit, von, zu as a set — there is no logic to memorize beyond the list itself.",
  ],
  summary:
    "The dative marks the indirect object, follows aus/bei/mit/nach/seit/von/zu, and changes every article — with a distinctive -n added to plural nouns. A handful of verbs like helfen and danken always take a dative object.",
};

const genitivTeaser: LessonListItem = {
  slug: "genitiv",
  titleDe: "Der Genitiv",
  level: "B2",
  readingMinutes: 10,
  progress: 0,
  status: "locked",
};

const lessonsBySlug: Record<string, Lesson> = {
  nominativ,
  akkusativ,
  dativ,
};

export const chapter = {
  key: "cases",
  titleDe: "Kasus",
  lessons: [nominativ, akkusativ, dativ, genitivTeaser] as LessonListItem[],
};

export function getLesson(slug: string): Lesson | undefined {
  return lessonsBySlug[slug];
}

export function getAdjacentLessons(slug: string): {
  previous: LessonListItem | null;
  next: LessonListItem | null;
} {
  const list = chapter.lessons;
  const index = list.findIndex((lesson) => lesson.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? list[index - 1] : null,
    next: index < list.length - 1 ? list[index + 1] : null,
  };
}

export function getChapterProgress(): number {
  const list = chapter.lessons;
  const sum = list.reduce((total, lesson) => total + lesson.progress, 0);
  return Math.round(sum / list.length);
}

export function getCompletedCount(): { done: number; total: number } {
  const list = chapter.lessons;
  return {
    done: list.filter((lesson) => lesson.status === "completed").length,
    total: list.length,
  };
}
