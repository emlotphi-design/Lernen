import type { ExplanationLanguageCode } from "./languages";

/** Templated strings for runtime-generated quiz questions (see `src/lib/lessons/generators/`).
 *  Unlike `EXPLANATION_UI_LABELS`, these take the generated instance's own German content (noun,
 *  article, verb form, case/tense name) as parameters — that content is always raw German,
 *  interpolated unchanged, never translated, matching the standing rule everywhere else in this
 *  app. Only the *surrounding* sentence is authored per language, and only once per language
 *  (not per generated instance), since the parameter space is combinatorial. Gender names reuse
 *  the already-translated `genderMasculine`/`genderFeminine`/`genderNeuter` from
 *  `EXPLANATION_UI_LABELS` rather than duplicating that vocabulary here. */
export type GeneratorLabels = {
  caseArticleFillPrompt: (caseLabel: string) => string;
  caseArticleMCPrompt: (caseLabel: string) => string;
  caseArticleExplanation: (noun: string, genderLabel: string, article: string) => string;
  caseGrammarRule: (caseLabel: string) => string;
  verbConjugationPrompt: (tenseLabel: string, verb: string, pronoun: string) => string;
  verbConjugationExplanation: (pronoun: string, verb: string, form: string) => string;
  verbGrammarRule: (tenseLabel: string, pronoun: string, ending: string) => string;
};

export const GENERATOR_LABELS: Record<ExplanationLanguageCode, GeneratorLabels> = {
  en: {
    caseArticleFillPrompt: (caseLabel) => `Complete the sentence with the correct ${caseLabel} article.`,
    caseArticleMCPrompt: (caseLabel) => `Which sentence correctly uses the ${caseLabel}?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} is ${genderLabel}, so it takes ${article}.`,
    caseGrammarRule: (caseLabel) => `Use the correct article for the ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Type the correct ${tenseLabel} form of '${verb}' for '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `'${pronoun}' takes the regular ending, so '${verb}' becomes '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `${tenseLabel} regular ending for '${pronoun}': -${ending}.`,
  },
  fa: {
    caseArticleFillPrompt: (caseLabel) => `جای خالی را با حرف تعریف مناسب در حالت ${caseLabel} پر کنید.`,
    caseArticleMCPrompt: (caseLabel) => `در کدام جمله حالت ${caseLabel} به‌درستی به‌کار رفته است؟`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} ${genderLabel} است، پس حرف تعریف ${article} را می‌گیرد.`,
    caseGrammarRule: (caseLabel) => `حرف تعریف مناسب را برای حالت ${caseLabel} به‌کار ببرید.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `صورت درست فعل '${verb}' را در زمان ${tenseLabel} برای '${pronoun}' تایپ کنید.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `'${pronoun}' پایانه باقاعده می‌گیرد، پس '${verb}' به '${form}' تبدیل می‌شود.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `پایانه باقاعده ${tenseLabel} برای '${pronoun}': -${ending}.`,
  },
  ru: {
    caseArticleFillPrompt: (caseLabel) => `Заполните пропуск артиклем в правильной форме — ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `В каком предложении ${caseLabel} употреблён правильно?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} — слово ${genderLabel} рода, поэтому нужен артикль ${article}.`,
    caseGrammarRule: (caseLabel) => `Используйте правильный артикль для падежа ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Напишите правильную форму глагола '${verb}' в ${tenseLabel} для '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Для '${pronoun}' используется стандартное окончание, поэтому '${verb}' превращается в '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Стандартное окончание ${tenseLabel} для '${pronoun}': -${ending}.`,
  },
  uk: {
    caseArticleFillPrompt: (caseLabel) => `Заповніть пропуск артиклем у правильній формі — ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `У якому реченні ${caseLabel} вжито правильно?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} — слово ${genderLabel} роду, тому потрібен артикль ${article}.`,
    caseGrammarRule: (caseLabel) => `Використовуйте правильний артикль для відмінка ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Напишіть правильну форму дієслова '${verb}' у ${tenseLabel} для '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Для '${pronoun}' використовується стандартне закінчення, тому '${verb}' стає '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Стандартне закінчення ${tenseLabel} для '${pronoun}': -${ending}.`,
  },
  tr: {
    caseArticleFillPrompt: (caseLabel) => `Boşluğu ${caseLabel} durumuna uygun artikelle tamamlayın.`,
    caseArticleMCPrompt: (caseLabel) => `Hangi cümlede ${caseLabel} doğru kullanılmış?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} ${genderLabel} bir isim olduğu için ${article} artikelini alır.`,
    caseGrammarRule: (caseLabel) => `${caseLabel} durumu için doğru artikeli kullanın.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `'${verb}' fiilinin '${pronoun}' için doğru ${tenseLabel} halini yazın.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `'${pronoun}' düzenli çekim ekini alır, bu yüzden '${verb}' '${form}' olur.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `${tenseLabel} zamanında '${pronoun}' için düzenli ek: -${ending}.`,
  },
  ar: {
    caseArticleFillPrompt: (caseLabel) => `أكمل الجملة بأداة التعريف الصحيحة لحالة ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `في أي جملة استُخدمت حالة ${caseLabel} بشكل صحيح؟`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} اسم ${genderLabel}، لذلك يأخذ أداة التعريف ${article}.`,
    caseGrammarRule: (caseLabel) => `استخدم أداة التعريف الصحيحة لحالة ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `اكتب الصيغة الصحيحة للفعل '${verb}' في زمن ${tenseLabel} مع '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `مع '${pronoun}' تُستخدم النهاية القياسية، فيصبح '${verb}' هو '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `نهاية ${tenseLabel} القياسية مع '${pronoun}': -${ending}.`,
  },
  ku: {
    caseArticleFillPrompt: (caseLabel) => `Valahiyê bi tewangera rast a ji bo rewşa ${caseLabel} temam bike.`,
    caseArticleMCPrompt: (caseLabel) => `Rewşa ${caseLabel} di kîjan hevokê de rast hatiye bikaranîn?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} navekî ${genderLabel} ye, ji ber vê yekê tewangera ${article} digire.`,
    caseGrammarRule: (caseLabel) => `Ji bo rewşa ${caseLabel} tewangera rast bikar bîne.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Forma rast a lêkera '${verb}' di dema ${tenseLabel} de ji bo '${pronoun}' binivîse.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Ji bo '${pronoun}' paşgira sade tê bikaranîn, ji ber vê yekê '${verb}' dibe '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Paşgira sade ya ${tenseLabel} ji bo '${pronoun}': -${ending}.`,
  },
  pl: {
    caseArticleFillPrompt: (caseLabel) => `Uzupełnij zdanie poprawnym rodzajnikiem dla przypadka ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `W którym zdaniu poprawnie użyto przypadka ${caseLabel}?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} jest rodzaju ${genderLabel}, dlatego przyjmuje rodzajnik ${article}.`,
    caseGrammarRule: (caseLabel) => `Użyj poprawnego rodzajnika dla przypadka ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Wpisz poprawną formę czasownika '${verb}' w czasie ${tenseLabel} dla '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Dla '${pronoun}' obowiązuje regularna końcówka, więc '${verb}' zmienia się w '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Regularna końcówka ${tenseLabel} dla '${pronoun}': -${ending}.`,
  },
  ro: {
    caseArticleFillPrompt: (caseLabel) => `Completează propoziția cu articolul corect pentru cazul ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `În care propoziție este folosit corect cazul ${caseLabel}?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} este de gen ${genderLabel}, deci primește articolul ${article}.`,
    caseGrammarRule: (caseLabel) => `Folosește articolul corect pentru cazul ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Scrie forma corectă a verbului '${verb}' la ${tenseLabel} pentru '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Pentru '${pronoun}' se folosește terminația regulată, deci '${verb}' devine '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Terminația regulată la ${tenseLabel} pentru '${pronoun}': -${ending}.`,
  },
  bg: {
    caseArticleFillPrompt: (caseLabel) => `Попълнете изречението с правилния член за падеж ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `В кое изречение падеж ${caseLabel} е използван правилно?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} е дума от ${genderLabel} род, затова взема член ${article}.`,
    caseGrammarRule: (caseLabel) => `Използвайте правилния член за падеж ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Напишете правилната форма на глагола '${verb}' в ${tenseLabel} за '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `За '${pronoun}' се използва стандартното окончание, затова '${verb}' става '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Стандартно окончание за ${tenseLabel} при '${pronoun}': -${ending}.`,
  },
  el: {
    caseArticleFillPrompt: (caseLabel) => `Συμπληρώστε την πρόταση με το σωστό άρθρο για την πτώση ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `Σε ποια πρόταση χρησιμοποιείται σωστά η πτώση ${caseLabel};`,
    caseArticleExplanation: (noun, genderLabel, article) => `Το ${noun} είναι ${genderLabel} γένους, γι' αυτό παίρνει το άρθρο ${article}.`,
    caseGrammarRule: (caseLabel) => `Χρησιμοποιήστε το σωστό άρθρο για την πτώση ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Γράψτε τη σωστή μορφή του ρήματος '${verb}' στον χρόνο ${tenseLabel} για το '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Για το '${pronoun}' χρησιμοποιείται η κανονική κατάληξη, οπότε το '${verb}' γίνεται '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Κανονική κατάληξη του ${tenseLabel} για το '${pronoun}': -${ending}.`,
  },
  it: {
    caseArticleFillPrompt: (caseLabel) => `Completa la frase con l'articolo corretto per il caso ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `In quale frase il caso ${caseLabel} è usato correttamente?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} è ${genderLabel}, quindi richiede l'articolo ${article}.`,
    caseGrammarRule: (caseLabel) => `Usa l'articolo corretto per il caso ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Scrivi la forma corretta del verbo '${verb}' al ${tenseLabel} per '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Con '${pronoun}' si usa la desinenza regolare, quindi '${verb}' diventa '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Desinenza regolare del ${tenseLabel} per '${pronoun}': -${ending}.`,
  },
  es: {
    caseArticleFillPrompt: (caseLabel) => `Completa la frase con el artículo correcto para el caso ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `¿En qué frase se usa correctamente el caso ${caseLabel}?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} es de género ${genderLabel}, por eso lleva el artículo ${article}.`,
    caseGrammarRule: (caseLabel) => `Usa el artículo correcto para el caso ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Escribe la forma correcta del verbo '${verb}' en ${tenseLabel} para '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Con '${pronoun}' se usa la terminación regular, así que '${verb}' se convierte en '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Terminación regular del ${tenseLabel} para '${pronoun}': -${ending}.`,
  },
  fr: {
    caseArticleFillPrompt: (caseLabel) => `Complète la phrase avec l'article correct pour le cas ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `Dans quelle phrase le cas ${caseLabel} est-il correctement utilisé ?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} est ${genderLabel}, il prend donc l'article ${article}.`,
    caseGrammarRule: (caseLabel) => `Utilise l'article correct pour le cas ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Écris la forme correcte du verbe '${verb}' au ${tenseLabel} pour '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Avec '${pronoun}', on utilise la terminaison régulière, donc '${verb}' devient '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Terminaison régulière du ${tenseLabel} pour '${pronoun}' : -${ending}.`,
  },
  nl: {
    caseArticleFillPrompt: (caseLabel) => `Vul de zin aan met het juiste lidwoord voor de naamval ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `In welke zin wordt de naamval ${caseLabel} correct gebruikt?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} is ${genderLabel}, daarom krijgt het lidwoord ${article}.`,
    caseGrammarRule: (caseLabel) => `Gebruik het juiste lidwoord voor de naamval ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Typ de juiste ${tenseLabel}-vorm van '${verb}' voor '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Bij '${pronoun}' hoort de reguliere uitgang, dus '${verb}' wordt '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Reguliere ${tenseLabel}-uitgang voor '${pronoun}': -${ending}.`,
  },
  pt: {
    caseArticleFillPrompt: (caseLabel) => `Complete a frase com o artigo correto para o caso ${caseLabel}.`,
    caseArticleMCPrompt: (caseLabel) => `Em qual frase o caso ${caseLabel} é usado corretamente?`,
    caseArticleExplanation: (noun, genderLabel, article) => `${noun} é de género ${genderLabel}, por isso leva o artigo ${article}.`,
    caseGrammarRule: (caseLabel) => `Use o artigo correto para o caso ${caseLabel}.`,
    verbConjugationPrompt: (tenseLabel, verb, pronoun) =>
      `Escreva a forma correta do verbo '${verb}' no ${tenseLabel} para '${pronoun}'.`,
    verbConjugationExplanation: (pronoun, verb, form) =>
      `Com '${pronoun}' usa-se a terminação regular, por isso '${verb}' torna-se '${form}'.`,
    verbGrammarRule: (tenseLabel, pronoun, ending) => `Terminação regular do ${tenseLabel} para '${pronoun}': -${ending}.`,
  },
};
