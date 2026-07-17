import type { CefrLevel } from "@/components/ui/level-badge";

export type PartOfSpeech = "noun" | "verb" | "adjective";
export type PartOfSpeechFilter = PartOfSpeech | "all";
export type Gender = "der" | "die" | "das" | null;
export type WordFrequency = 1 | 2 | 3 | 4 | 5;

export type ExamplePair = { de: string; en: string };
export type SimilarWord = { word: string; note: string };

export type DictionaryWord = {
  id: string;
  word: string;
  partOfSpeech: PartOfSpeech;
  gender: Gender;
  plural: string | null;
  ipa: string;
  level: CefrLevel;
  translations: string[];
  examples: ExamplePair[];
  grammarNotes: string[];
  commonExpressions: ExamplePair[];
  synonyms: string[];
  antonyms: string[];
  relatedWords: string[];
  frequency: WordFrequency;
  aiExplanation: string;
  similarWords: SimilarWord[];
};

export const DICTIONARY: DictionaryWord[] = [
  {
    id: "mann",
    word: "Mann",
    partOfSpeech: "noun",
    gender: "der",
    plural: "Männer",
    ipa: "/man/",
    level: "A1",
    translations: ["man", "husband"],
    examples: [
      { de: "Der Mann arbeitet im Büro.", en: "The man works in the office." },
      { de: "Mein Mann kocht sehr gut.", en: "My husband cooks very well." },
    ],
    grammarNotes: [
      "Mann is masculine, so it takes der in the nominative.",
      "The plural Männer takes an umlaut — Mann → Männer, without an added ending.",
    ],
    commonExpressions: [
      { de: "ein Mann von Wort", en: "a man of his word" },
      { de: "der Mann im Mond", en: "the man in the moon" },
    ],
    synonyms: ["Herr", "Ehemann"],
    antonyms: ["Frau"],
    relatedWords: ["männlich", "Männchen"],
    frequency: 5,
    aiExplanation:
      "Mann is one of the most common nouns in German and also doubles as the informal word for 'husband' — context tells you which meaning is intended. Note that its plural is irregular in a specific way: an umlaut only, no suffix — unlike the -er plural of Kind → Kinder.",
    similarWords: [
      { word: "man", note: "man (lowercase, no article) is the impersonal pronoun for 'one/you/people' — a completely different word from der Mann." },
    ],
  },
  {
    id: "hund",
    word: "Hund",
    partOfSpeech: "noun",
    gender: "der",
    plural: "Hunde",
    ipa: "/hʊnt/",
    level: "A1",
    translations: ["dog"],
    examples: [
      { de: "Der Hund bellt laut.", en: "The dog is barking loudly." },
      { de: "Ich gehe mit dem Hund spazieren.", en: "I'm taking the dog for a walk." },
    ],
    grammarNotes: [
      "Hund is masculine: der Hund.",
      "The final -d is pronounced like a 't' in German (terminal devoicing) — hunt, not hund.",
    ],
    commonExpressions: [{ de: "Hunde, die bellen, beißen nicht.", en: "Barking dogs seldom bite." }],
    synonyms: ["Vierbeiner"],
    antonyms: [],
    relatedWords: ["Hündin", "Welpe"],
    frequency: 4,
    aiExplanation:
      "Hund follows the regular masculine -e plural pattern (Hund → Hunde), one of the most predictable plural forms in German. Listen for the terminal devoicing on the final consonant — it's a rule that applies to every German word ending in b, d, or g.",
    similarWords: [{ word: "Hunger", note: "Similar-looking but unrelated — Hunger means 'hunger', not connected to Hund at all." }],
  },
  {
    id: "tisch",
    word: "Tisch",
    partOfSpeech: "noun",
    gender: "der",
    plural: "Tische",
    ipa: "/tɪʃ/",
    level: "A1",
    translations: ["table", "desk"],
    examples: [
      { de: "Das Buch liegt auf dem Tisch.", en: "The book is lying on the table." },
      { de: "Wir kaufen einen neuen Tisch.", en: "We're buying a new table." },
    ],
    grammarNotes: [
      "Tisch is masculine: der Tisch.",
      "Location on a table uses auf (a two-way preposition) with the dative: auf dem Tisch.",
    ],
    commonExpressions: [
      { de: "reinen Tisch machen", en: "to clear the air / start fresh" },
      { de: "den Tisch decken", en: "to set the table" },
    ],
    synonyms: ["Pult"],
    antonyms: [],
    relatedWords: ["Tischtennis", "Schreibtisch"],
    frequency: 4,
    aiExplanation:
      "Tisch is a great word for practicing the two-way prepositions: auf dem Tisch (dative, location) versus auf den Tisch (accusative, movement onto it). Compounds like Schreibtisch ('writing table' = desk) show how German builds new nouns by simply joining words together.",
    similarWords: [{ word: "Tasche", note: "Sounds similar but means 'bag/pocket', not 'table'." }],
  },
  {
    id: "apfel",
    word: "Apfel",
    partOfSpeech: "noun",
    gender: "der",
    plural: "Äpfel",
    ipa: "/ˈapfl̩/",
    level: "A1",
    translations: ["apple"],
    examples: [
      { de: "Ich esse jeden Tag einen Apfel.", en: "I eat an apple every day." },
      { de: "Die Äpfel sind noch nicht reif.", en: "The apples aren't ripe yet." },
    ],
    grammarNotes: [
      "Apfel is masculine: der Apfel.",
      "The plural Äpfel adds only an umlaut, no ending — like Mann → Männer.",
    ],
    commonExpressions: [{ de: "in den sauren Apfel beißen", en: "to bite the bullet" }],
    synonyms: [],
    antonyms: [],
    relatedWords: ["Apfelsaft", "Apfelkuchen"],
    frequency: 3,
    aiExplanation:
      "Apfel belongs to a small family of masculine nouns that pluralize with an umlaut alone (Apfel → Äpfel, Garten → Gärten, Vater → Väter). There's no rule that predicts which nouns do this — it's worth memorizing case by case as you meet them.",
    similarWords: [{ word: "Zapfen", note: "Unrelated word for 'cone/plug' (as in Tannenzapfen, 'pine cone') — shares only the ending sound." }],
  },
  {
    id: "lehrer",
    word: "Lehrer",
    partOfSpeech: "noun",
    gender: "der",
    plural: "Lehrer",
    ipa: "/ˈleːʁɐ/",
    level: "A1",
    translations: ["teacher (male or general)"],
    examples: [
      { de: "Der Lehrer erklärt die Grammatik.", en: "The teacher explains the grammar." },
      { de: "Sie ist eine gute Lehrerin.", en: "She is a good teacher." },
    ],
    grammarNotes: [
      "Lehrer is masculine; the feminine form adds -in: Lehrerin.",
      "Nouns ending in -er often keep the same form in the plural: der Lehrer → die Lehrer.",
    ],
    commonExpressions: [{ de: "aus Schaden wird man klug", en: "you learn from your mistakes (lit. 'from harm one becomes wise')" }],
    synonyms: ["Dozent", "Pädagoge"],
    antonyms: ["Schüler", "Student"],
    relatedWords: ["lehren", "Lehre"],
    frequency: 4,
    aiExplanation:
      "Lehrer is built from the verb lehren ('to teach') plus the agent suffix -er, a very productive pattern in German (arbeiten → Arbeiter, fahren → Fahrer). The feminine -in suffix works the same way across almost every profession noun you'll meet.",
    similarWords: [{ word: "Leser", note: "One letter off and means 'reader' — easy to mistype or mishear." }],
  },
  {
    id: "frau",
    word: "Frau",
    partOfSpeech: "noun",
    gender: "die",
    plural: "Frauen",
    ipa: "/fʁaʊ̯/",
    level: "A1",
    translations: ["woman", "wife", "Mrs."],
    examples: [
      { de: "Die Frau liest ein Buch.", en: "The woman is reading a book." },
      { de: "Frau Schmidt ist meine Chefin.", en: "Mrs. Schmidt is my boss." },
    ],
    grammarNotes: [
      "Frau is feminine: die Frau.",
      "The plural Frauen simply adds -en, the most common feminine plural pattern.",
    ],
    commonExpressions: [{ de: "Frau des Hauses", en: "lady of the house" }],
    synonyms: ["Dame", "Ehefrau"],
    antonyms: ["Mann"],
    relatedWords: ["weiblich", "Fräulein"],
    frequency: 5,
    aiExplanation:
      "Frau is also the standard polite title before a surname (Frau Schmidt), used regardless of marital status — Fräulein ('miss') is now old-fashioned and rarely used. The -en plural you see here (Frauen) is the single most common plural pattern for feminine nouns.",
    similarWords: [{ word: "frei", note: "Not related — frei means 'free'; it just shares a similar sound at the start." }],
  },
  {
    id: "katze",
    word: "Katze",
    partOfSpeech: "noun",
    gender: "die",
    plural: "Katzen",
    ipa: "/ˈkatsə/",
    level: "A1",
    translations: ["cat"],
    examples: [
      { de: "Die Katze schläft auf dem Sofa.", en: "The cat is sleeping on the sofa." },
      { de: "Meine Katze mag kein Wasser.", en: "My cat doesn't like water." },
    ],
    grammarNotes: ["Katze is feminine: die Katze.", "Regular -n plural: Katze → Katzen."],
    commonExpressions: [{ de: "die Katze im Sack kaufen", en: "to buy a pig in a poke (lit. 'to buy the cat in the bag')" }],
    synonyms: ["Stubentiger"],
    antonyms: ["Hund"],
    relatedWords: ["Kätzchen", "Katzenfutter"],
    frequency: 4,
    aiExplanation:
      "Katze is a textbook weak feminine noun: it just adds -n in the plural and in every other case, no umlaut, no surprises — a reliable pattern shared by most nouns ending in -e (Straße, Schule, Blume).",
    similarWords: [{ word: "Kasse", note: "Sounds close but means 'cash register/checkout' — a common beginner mix-up." }],
  },
  {
    id: "schule",
    word: "Schule",
    partOfSpeech: "noun",
    gender: "die",
    plural: "Schulen",
    ipa: "/ˈʃuːlə/",
    level: "A1",
    translations: ["school"],
    examples: [
      { de: "Die Kinder gehen zur Schule.", en: "The children go to school." },
      { de: "Die Schule beginnt um acht Uhr.", en: "School starts at eight o'clock." },
    ],
    grammarNotes: [
      "Schule is feminine: die Schule.",
      "Going to school as a routine uses zur Schule gehen (zu + der = zur), not in die Schule.",
    ],
    commonExpressions: [{ de: "aus der Schule plaudern", en: "to spill the beans (lit. 'to chat out of school')" }],
    synonyms: [],
    antonyms: [],
    relatedWords: ["Schüler", "Schulhof"],
    frequency: 5,
    aiExplanation:
      "Schule shows why the dative contraction zur (zu + der) is worth memorizing as a fixed chunk: zur Schule gehen, zur Arbeit gehen, and zur Uni gehen all follow the same pattern for routine, repeated destinations.",
    similarWords: [{ word: "Stuhl", note: "Unrelated word for 'chair' — just shares the 'Sch/St' opening sound." }],
  },
  {
    id: "zeit",
    word: "Zeit",
    partOfSpeech: "noun",
    gender: "die",
    plural: "Zeiten",
    ipa: "/tsaɪ̯t/",
    level: "A1",
    translations: ["time"],
    examples: [
      { de: "Ich habe keine Zeit.", en: "I don't have time." },
      { de: "Die Zeit vergeht schnell.", en: "Time passes quickly." },
    ],
    grammarNotes: [
      "Zeit is feminine: die Zeit.",
      "Zeit appears in many fixed expressions without an article: von Zeit zu Zeit.",
    ],
    commonExpressions: [
      { de: "von Zeit zu Zeit", en: "from time to time" },
      { de: "Zeit ist Geld", en: "time is money" },
    ],
    synonyms: ["Dauer", "Uhrzeit"],
    antonyms: [],
    relatedWords: ["zeitlich", "rechtzeitig"],
    frequency: 5,
    aiExplanation:
      "Zeit is one of the highest-frequency abstract nouns in German and appears in dozens of set phrases (Zeitpunkt, Zeitraum, rechtzeitig). Because it's uncountable in most everyday use, you'll rarely see it with a number — the plural Zeiten exists mainly for 'eras/times' in a historical sense (in alten Zeiten).",
    similarWords: [{ word: "Zeitung", note: "Built from Zeit but means 'newspaper' — a classic false-friend trap for beginners." }],
  },
  {
    id: "sprache",
    word: "Sprache",
    partOfSpeech: "noun",
    gender: "die",
    plural: "Sprachen",
    ipa: "/ˈʃpʁaːxə/",
    level: "A1",
    translations: ["language"],
    examples: [
      { de: "Deutsch ist eine schwierige Sprache.", en: "German is a difficult language." },
      { de: "Wie viele Sprachen sprichst du?", en: "How many languages do you speak?" },
    ],
    grammarNotes: [
      "Sprache is feminine: die Sprache.",
      "Its related verb sprechen ('to speak') is a strong verb: sprechen → sprach → gesprochen.",
    ],
    commonExpressions: [{ de: "eine Sprache beherrschen", en: "to have mastery of a language" }],
    synonyms: ["Idiom"],
    antonyms: [],
    relatedWords: ["sprechen", "Sprachkurs"],
    frequency: 4,
    aiExplanation:
      "Sprache and sprechen share the same root but diverge in form — this kind of noun/verb pair built from a shared stem is common in German and worth learning together: die Sprache (the language) beside sprechen (to speak).",
    similarWords: [{ word: "Spraache", note: "Not a real word — a common misspelling; remember Sprache has just a single 'a'." }],
  },
  {
    id: "kind",
    word: "Kind",
    partOfSpeech: "noun",
    gender: "das",
    plural: "Kinder",
    ipa: "/kɪnt/",
    level: "A1",
    translations: ["child"],
    examples: [
      { de: "Das Kind spielt im Garten.", en: "The child is playing in the garden." },
      { de: "Wir haben zwei Kinder.", en: "We have two children." },
    ],
    grammarNotes: ["Kind is neuter: das Kind.", "The plural Kinder adds -er, a very common neuter plural pattern."],
    commonExpressions: [
      { de: "Kind des Glücks", en: "a lucky person (lit. 'child of luck')" },
      { de: "mit Kind und Kegel", en: "with the whole family in tow" },
    ],
    synonyms: [],
    antonyms: ["Erwachsener"],
    relatedWords: ["Kindheit", "kindisch"],
    frequency: 5,
    aiExplanation:
      "Kind is grammatically neuter regardless of the child's actual sex — German grammatical gender doesn't track biological gender here. The -er plural (Kind → Kinder) is one of the classic neuter patterns, shared with Haus → Häuser and Buch → Bücher.",
    similarWords: [{ word: "kein", note: "Sounds close but is the negation word 'no/not any' — unrelated to Kind." }],
  },
  {
    id: "buch",
    word: "Buch",
    partOfSpeech: "noun",
    gender: "das",
    plural: "Bücher",
    ipa: "/buːx/",
    level: "A1",
    translations: ["book"],
    examples: [
      { de: "Ich lese ein spannendes Buch.", en: "I'm reading an exciting book." },
      { de: "Das Buch gehört der Bibliothek.", en: "The book belongs to the library." },
    ],
    grammarNotes: ["Buch is neuter: das Buch.", "Plural Bücher adds an umlaut plus -er, the same pattern as Haus → Häuser."],
    commonExpressions: [{ de: "ein Buch mit sieben Siegeln", en: "a total mystery (lit. 'a book with seven seals')" }],
    synonyms: ["Werk", "Band"],
    antonyms: [],
    relatedWords: ["Bücherei", "Lehrbuch"],
    frequency: 4,
    aiExplanation:
      "Buch is a good anchor word for the umlaut-plus-er neuter plural pattern (Buch → Bücher). Watch the long 'u' sound in the singular shift to a fronted 'ü' in the plural — a sound change that shows up across dozens of neuter and masculine nouns.",
    similarWords: [{ word: "Bauch", note: "One letter different but means 'stomach/belly' — easy to confuse when reading quickly." }],
  },
  {
    id: "auto",
    word: "Auto",
    partOfSpeech: "noun",
    gender: "das",
    plural: "Autos",
    ipa: "/ˈaʊ̯to/",
    level: "A1",
    translations: ["car"],
    examples: [
      { de: "Das Auto ist neu.", en: "The car is new." },
      { de: "Wir fahren mit dem Auto in den Urlaub.", en: "We're driving to our vacation." },
    ],
    grammarNotes: [
      "Auto is neuter: das Auto.",
      "As a loanword, its plural just adds -s (Autos) instead of a native German ending.",
    ],
    commonExpressions: [{ de: "Auto fahren", en: "to drive (a car)" }],
    synonyms: ["Wagen", "Fahrzeug"],
    antonyms: [],
    relatedWords: ["Autobahn", "Autofahrer"],
    frequency: 5,
    aiExplanation:
      "Auto is short for Automobil and, like many modern loanwords, takes the simple -s plural (Autos) rather than a native umlaut or -er pattern — a reliable shortcut: when in doubt about a borrowed noun's plural, -s is a safe first guess.",
    similarWords: [{ word: "Autor", note: "Sounds similar but means 'author' — unrelated to cars." }],
  },
  {
    id: "wasser",
    word: "Wasser",
    partOfSpeech: "noun",
    gender: "das",
    plural: "Wässer",
    ipa: "/ˈvasɐ/",
    level: "A1",
    translations: ["water"],
    examples: [
      { de: "Ich trinke viel Wasser.", en: "I drink a lot of water." },
      { de: "Das Wasser ist kalt.", en: "The water is cold." },
    ],
    grammarNotes: [
      "Wasser is neuter: das Wasser.",
      "As an uncountable substance, it's almost always used without a plural in everyday speech.",
    ],
    commonExpressions: [{ de: "Wasser in den Wein gießen", en: "to dampen someone's enthusiasm (lit. 'to pour water in the wine')" }],
    synonyms: [],
    antonyms: ["Feuer"],
    relatedWords: ["wässrig", "Wasserflasche"],
    frequency: 5,
    aiExplanation:
      "Wasser behaves like most substance nouns (Milch, Brot, Luft): grammatically singular even in large quantities, because you measure it rather than count it. You'll see the plural Wässer only in specialized contexts like mineral waters or bodies of water.",
    similarWords: [{ word: "Wetter", note: "A different neuter noun for 'weather' — easy to mix up with Wasser at a glance." }],
  },
  {
    id: "jahr",
    word: "Jahr",
    partOfSpeech: "noun",
    gender: "das",
    plural: "Jahre",
    ipa: "/jaːɐ̯/",
    level: "A1",
    translations: ["year"],
    examples: [
      { de: "Ich lerne seit einem Jahr Deutsch.", en: "I've been learning German for a year." },
      { de: "Frohes neues Jahr!", en: "Happy New Year!" },
    ],
    grammarNotes: ["Jahr is neuter: das Jahr.", "Regular -e plural: Jahr → Jahre."],
    commonExpressions: [
      { de: "das ganze Jahr über", en: "all year round" },
      { de: "Frohes neues Jahr", en: "Happy New Year" },
    ],
    synonyms: [],
    antonyms: [],
    relatedWords: ["jährlich", "Jahreszeit"],
    frequency: 5,
    aiExplanation:
      "Jahr combines with seit ('since/for') to talk about duration: seit einem Jahr means 'for a year (and still going)'. German uses the present tense here where English switches to the present perfect — a common trap for learners translating word for word.",
    similarWords: [{ word: "Jahrzehnt", note: "Built from Jahr but means 'decade', not a repetition of 'year'." }],
  },
  {
    id: "sein",
    word: "sein",
    partOfSpeech: "verb",
    gender: null,
    plural: null,
    ipa: "/zaɪ̯n/",
    level: "A1",
    translations: ["to be"],
    examples: [
      { de: "Ich bin müde.", en: "I am tired." },
      { de: "Wir sind Freunde.", en: "We are friends." },
    ],
    grammarNotes: [
      "sein is one of the most irregular verbs in German: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind.",
      "sein is also the auxiliary for the perfect tense of motion/change verbs: ich bin gegangen, not habe gegangen.",
    ],
    commonExpressions: [
      { de: "es sei denn", en: "unless" },
      { de: "wie dem auch sei", en: "be that as it may" },
    ],
    synonyms: ["existieren"],
    antonyms: [],
    relatedWords: ["Sein", "Wesen"],
    frequency: 5,
    aiExplanation:
      "sein is irregular in almost every form, so it's worth memorizing as a complete block rather than trying to derive the endings from a pattern. It's also one of only a handful of verbs (alongside werden and a set of motion verbs) that take sein instead of haben in the perfect tense — a distinction that trips up even intermediate learners.",
    similarWords: [
      { word: "sein (possessive)", note: "The identical-looking word sein also means 'his/its' as a possessive pronoun — context (verb position vs. before a noun) tells them apart." },
    ],
  },
  {
    id: "haben",
    word: "haben",
    partOfSpeech: "verb",
    gender: null,
    plural: null,
    ipa: "/ˈhaːbn̩/",
    level: "A1",
    translations: ["to have"],
    examples: [
      { de: "Ich habe einen Bruder.", en: "I have a brother." },
      { de: "Hast du Zeit?", en: "Do you have time?" },
    ],
    grammarNotes: [
      "Conjugation: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie haben.",
      "haben is the default auxiliary for the perfect tense: ich habe gegessen, ich habe gelernt.",
    ],
    commonExpressions: [
      { de: "Angst haben", en: "to be afraid" },
      { de: "recht haben", en: "to be right" },
    ],
    synonyms: ["besitzen"],
    antonyms: [],
    relatedWords: ["Habe", "Verhalten"],
    frequency: 5,
    aiExplanation:
      "haben pairs with a huge number of nouns in fixed expressions where English would use 'to be' instead — Angst haben (to be afraid), Hunger haben (to be hungry), recht haben (to be right). Learning these as chunks avoids literal word-for-word translation mistakes.",
    similarWords: [{ word: "halten", note: "A different, regular-ish verb meaning 'to hold' — easy to confuse with haben at speed." }],
  },
  {
    id: "gehen",
    word: "gehen",
    partOfSpeech: "verb",
    gender: null,
    plural: null,
    ipa: "/ˈɡeːən/",
    level: "A1",
    translations: ["to go", "to walk"],
    examples: [
      { de: "Ich gehe nach Hause.", en: "I'm going home." },
      { de: "Wie geht es dir?", en: "How are you?" },
    ],
    grammarNotes: [
      "gehen is a strong verb: gehen → ging → gegangen.",
      "It takes sein in the perfect tense because it describes motion: ich bin gegangen.",
    ],
    commonExpressions: [
      { de: "Wie geht's?", en: "How's it going?" },
      { de: "vor sich gehen", en: "to be happening" },
    ],
    synonyms: ["laufen", "spazieren"],
    antonyms: ["kommen"],
    relatedWords: ["Gang", "Ausgang"],
    frequency: 5,
    aiExplanation:
      "gehen is one of the first strong (irregular) verbs learners meet, and its idiomatic use in Wie geht es dir? ('How are you?', literally 'how goes it to you') shows how deeply it's woven into everyday small talk beyond its literal 'to go' meaning.",
    similarWords: [{ word: "stehen", note: "Rhymes and is often confused with gehen, but means 'to stand', not 'to go'." }],
  },
  {
    id: "gut",
    word: "gut",
    partOfSpeech: "adjective",
    gender: null,
    plural: null,
    ipa: "/ɡuːt/",
    level: "A1",
    translations: ["good", "well"],
    examples: [
      { de: "Das Essen schmeckt gut.", en: "The food tastes good." },
      { de: "Mir geht es gut.", en: "I'm doing well." },
    ],
    grammarNotes: [
      "gut takes regular adjective endings: ein guter Tag, eine gute Idee, ein gutes Buch.",
      "Comparative and superlative are irregular: gut → besser → am besten.",
    ],
    commonExpressions: [
      { de: "gut gemacht!", en: "well done!" },
      { de: "schon gut", en: "it's fine / never mind" },
    ],
    synonyms: ["prima", "klasse"],
    antonyms: ["schlecht"],
    relatedWords: ["Güte", "verbessern"],
    frequency: 5,
    aiExplanation:
      "gut is one of a small set of German adjectives with a fully irregular comparative and superlative (gut → besser → am besten), similar to English 'good → better → best'. It's worth memorizing this trio directly rather than trying to apply the regular -er/-sten pattern.",
    similarWords: [{ word: "Gut", note: "Capitalized, this is a different word — a noun meaning 'estate/property', or 'goods' in the plural." }],
  },
  {
    id: "gross",
    word: "groß",
    partOfSpeech: "adjective",
    gender: null,
    plural: null,
    ipa: "/ɡʁoːs/",
    level: "A1",
    translations: ["big", "large", "tall"],
    examples: [
      { de: "Das Haus ist sehr groß.", en: "The house is very big." },
      { de: "Er ist größer als ich.", en: "He is taller than me." },
    ],
    grammarNotes: [
      "groß takes regular adjective endings: ein großer Baum, eine große Stadt.",
      "The comparative adds an umlaut: groß → größer → am größten.",
    ],
    commonExpressions: [{ de: "im Großen und Ganzen", en: "on the whole / all in all" }],
    synonyms: ["riesig", "gewaltig"],
    antonyms: ["klein"],
    relatedWords: ["Größe", "vergrößern"],
    frequency: 5,
    aiExplanation:
      "groß is a good example of the umlaut-comparative pattern shared by several common one-syllable adjectives (groß → größer, alt → älter, jung → jünger). Note that the spelling keeps ß rather than switching to ss, because it still follows a long vowel in größer.",
    similarWords: [{ word: "grob", note: "Means 'coarse/rude' and differs from groß by a single letter — a common typo trap." }],
  },
];

export function findWordById(id: string): DictionaryWord | undefined {
  return DICTIONARY.find((entry) => entry.id === id);
}

export function findWordByText(word: string): DictionaryWord | undefined {
  const normalized = word.trim().toLowerCase();
  return DICTIONARY.find((entry) => entry.word.toLowerCase() === normalized);
}

export function searchDictionary(query: string, filter: PartOfSpeechFilter): DictionaryWord[] {
  const normalized = query.trim().toLowerCase();
  return DICTIONARY.filter((entry) => {
    if (filter !== "all" && entry.partOfSpeech !== filter) return false;
    if (normalized === "") return true;
    return (
      entry.word.toLowerCase().includes(normalized) ||
      entry.translations.some((t) => t.toLowerCase().includes(normalized))
    );
  });
}

export const FREQUENCY_LABEL_KEYS: Record<WordFrequency, string> = {
  5: "frequencyEssential",
  4: "frequencyVeryCommon",
  3: "frequencyCommon",
  2: "frequencyOccasional",
  1: "frequencyRare",
};

export const PART_OF_SPEECH_LABEL_KEYS: Record<PartOfSpeech, string> = {
  noun: "posNoun",
  verb: "posVerb",
  adjective: "posAdjective",
};
