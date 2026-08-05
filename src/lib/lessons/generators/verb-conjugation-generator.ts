import type { QuizQuestion } from "../types";
import type { GeneratorLabels } from "@/lib/explanation-language/generator-labels";
import { PRONOUNS, type Pronoun, type TenseName } from "./types";
import { VERB_BANK } from "./verb-bank";
import { TENSE_DISPLAY_NAME, conjugate, conjugationEnding } from "./verb-ending-rules";
import { sampleN, randomId } from "./shuffle";

type Combo = { verbId: string; pronoun: Pronoun };

export function generateConjugationQuestions(params: {
  tense: TenseName;
  count: number;
  excludeIds: Set<string>;
  labels: GeneratorLabels;
  grammarRulesLabel: string;
  xp?: number;
}): QuizQuestion[] {
  const { tense, count, excludeIds, labels, grammarRulesLabel, xp = 10 } = params;
  const tenseLabel = TENSE_DISPLAY_NAME[tense];

  const combos: Combo[] = VERB_BANK.flatMap((verb) => PRONOUNS.map((pronoun) => ({ verbId: verb.id, pronoun })));
  const available = combos.filter((c) => !excludeIds.has(`${tense}:${c.verbId}:${c.pronoun}`));
  const pool = available.length >= count ? available : combos;
  const chosen = sampleN(pool, count);

  return chosen.map((combo) => {
    const verb = VERB_BANK.find((v) => v.id === combo.verbId)!;
    const form = conjugate(verb.stem, tense, verb.needsGlide, combo.pronoun);
    const ending = conjugationEnding(tense, verb.needsGlide, combo.pronoun);
    return {
      id: randomId(`gen-${tense}-${verb.id}-${combo.pronoun}`),
      type: "typing",
      prompt: labels.verbConjugationPrompt(tenseLabel, verb.infinitive, combo.pronoun),
      accepted: [form],
      explanation: labels.verbConjugationExplanation(combo.pronoun, verb.infinitive, form),
      grammarRule: labels.verbGrammarRule(tenseLabel, combo.pronoun, ending),
      referenceSectionId: "grammar-rules",
      referenceLabel: grammarRulesLabel,
      xp,
    };
  });
}
