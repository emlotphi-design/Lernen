import type { QuizQuestion } from "../types";
import type { GeneratorLabels } from "@/lib/explanation-language/generator-labels";
import type { CaseName } from "./types";
import { NOUN_BANK } from "./noun-bank";
import { CASE_ARTICLE_TABLE, CASE_DISPLAY_NAME, CASE_SENTENCE_FRAME, nounForCase } from "./case-article-rules";
import { sampleN, randomId } from "./shuffle";

type GenderLabels = { masculine: string; feminine: string; neuter: string };

function buildSentence(frame: { sentenceBefore: string; sentenceAfter: string }, article: string, nounForm: string): string {
  return `${frame.sentenceBefore}${article}${frame.sentenceAfter.replace("{noun}", nounForm)}`;
}

const ALL_CASES: CaseName[] = ["nominativ", "akkusativ", "dativ", "genitiv"];

export function generateCaseQuestions(params: {
  caseName: CaseName;
  count: number;
  excludeIds: Set<string>;
  labels: GeneratorLabels;
  genderLabels: GenderLabels;
  declensionTableLabel: string;
  grammarRulesLabel: string;
  xp?: number;
}): QuizQuestion[] {
  const { caseName, count, excludeIds, labels, genderLabels, declensionTableLabel, grammarRulesLabel, xp = 10 } = params;
  const caseLabel = CASE_DISPLAY_NAME[caseName];
  const frame = CASE_SENTENCE_FRAME[caseName];

  const available = NOUN_BANK.filter((n) => !excludeIds.has(`${caseName}:${n.id}`));
  const pool = available.length >= count ? available : NOUN_BANK;
  const chosen = sampleN(pool, count);

  return chosen.map((noun, i) => {
    const article = CASE_ARTICLE_TABLE[caseName][noun.gender].definite;
    const nounForm = nounForCase(noun, caseName);
    const genderLabel = genderLabels[noun.gender];
    const explanation = labels.caseArticleExplanation(noun.de, genderLabel, article);
    const grammarRule = labels.caseGrammarRule(caseLabel);

    // Masculine is the only gender where nominativ/akkusativ/dativ/genitiv all have genuinely
    // distinct article forms — feminine collapses nominativ≡akkusativ and dativ≡genitiv, neuter
    // collapses nominativ≡akkusativ, so a 4-option multiple-choice would contain duplicate option
    // text (the view keys options by string value). Fall back to fill-blank whenever that's not
    // safe, rather than ever risking a duplicate.
    const canUseMultipleChoice = noun.gender === "masculine";
    const isFillBlank = i % 2 === 0 || !canUseMultipleChoice;

    if (isFillBlank) {
      return {
        id: randomId(`gen-${caseName}-${noun.id}-fb`),
        type: "fill-blank",
        prompt: labels.caseArticleFillPrompt(caseLabel),
        sentenceBefore: frame.sentenceBefore,
        sentenceAfter: frame.sentenceAfter.replace("{noun}", nounForm),
        accepted: [article],
        explanation,
        grammarRule,
        referenceSectionId: "declension-table",
        referenceLabel: declensionTableLabel,
        xp,
      };
    }

    const correctSentence = buildSentence(frame, article, nounForm);
    const distractors = ALL_CASES.filter((c) => c !== caseName).map((c) =>
      buildSentence(frame, CASE_ARTICLE_TABLE[c][noun.gender].definite, nounForCase(noun, c)),
    );
    const options = [correctSentence, ...distractors];
    const correctIndex = 0; // shuffled at presentation time by shuffleQuestionPresentation

    return {
      id: randomId(`gen-${caseName}-${noun.id}-mc`),
      type: "multiple-choice",
      prompt: labels.caseArticleMCPrompt(caseLabel),
      options,
      correctIndex,
      explanation,
      grammarRule,
      referenceSectionId: "grammar-rules",
      referenceLabel: grammarRulesLabel,
      xp,
    };
  });
}
