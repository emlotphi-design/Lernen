import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Romanian (română) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const ro: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "Cazul subiectului — forma de bază de la care pornește orice substantiv.",
    objectives: [
      "Identifică subiectul unei propoziții germane.",
      "Folosește nominativul după sein, werden și bleiben.",
    ],
    explanationSimple: [
      "Nominativul este cazul subiectului — persoana sau lucrul care face acțiunea din propoziție.",
      "Este și forma pe care o găsești în dicționar, așa că orice substantiv nou înveți pornește de la nominativ.",
    ],
    explanationDetailed: [
      "Germana marchează rolul unui substantiv în propoziție prin schimbarea articolului, nu prin schimbarea ordinii cuvintelor, cum se întâmplă adesea în engleză. Cazul nominativ indică subiectul: cel care efectuează acțiunea verbului.",
      "Poți identifica subiectul întrebând wer? (cine?) pentru persoane sau was? (ce?) pentru lucruri — orice răspunde la această întrebare este la nominativ.",
      "Nominativul apare și după verbele copulative sein (a fi), werden (a deveni) și bleiben (a rămâne), pentru că substantivul care le urmează redenumește subiectul, nu primește o acțiune.",
    ],
    exampleMeanings: ["Bărbatul doarme.", "Femeia lucrează azi.", "Copilul râde tare.", "El este profesorul meu."],
    exerciseTexts: [
      {
        explanation: "Kind este neutru, iar ca subiect are nevoie de articolul nominativ neutru das.",
        grammarRule: "Articolul nominativ neutru: das.",
        prompt: "Completează propoziția cu articolul corect la cazul Nominativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann este subiectul care face acțiunea, deci rămâne la nominativ — der, nu den sau dem.",
        grammarRule: "Folosește nominativul pentru subiectul oricărei propoziții.",
        prompt: "În care propoziție este folosit corect cazul Nominativ?",
      },
      {
        explanation:
          "Corect — sein/werden/bleiben leagă subiectul de un substantiv care îl redenumește, așa că acel substantiv rămâne tot la nominativ.",
        grammarRule: "Folosește nominativul pentru numele predicativ după sein, werden și bleiben.",
        prompt: "Nominativul se folosește pentru numele predicativ după sein, werden și bleiben.",
      },
      {
        explanation: "Frau este feminin, iar ca subiect are nevoie de articolul nominativ feminin die.",
        grammarRule: "Articolul nominativ feminin: die.",
        prompt: "Completează propoziția cu articolul corect la cazul Nominativ.",
      },
      {
        explanation:
          "Propozițiile principale germane pun mai întâi subiectul (Der Junge), apoi verbul conjugat (liest) pe locul al doilea, iar restul propoziției urmează.",
        grammarRule: "Întreabă wer? sau was? ca să identifici elementul de nominativ — aici, Der Junge răspunde la wer?",
        translation: "Băiatul citește o carte.",
        prompt: "Așază cuvintele în ordinea corectă.",
      },
      {
        explanation: "Kind este neutru → das; Katze este feminin → die — ambele sunt subiecte la nominativ.",
        grammarRule: "Potrivește genul fiecărui substantiv cu articolul lui la nominativ: der/die/das.",
        prompt: "Trage articolul corect în fiecare spațiu liber.",
      },
      {
        explanation: "Der Lehrer este masculin, deci este înlocuit de pronumele er la nominativ.",
        grammarRule: "Pronumele nominativ masculin: er.",
        prompt: "Scrie pronumele personal la cazul Nominativ care înlocuiește 'der Lehrer'.",
      },
    ],
    conclusion:
      "Nominativul marchează subiectul propoziției și numele predicativ de după sein, werden și bleiben. Este forma de bază din care derivă toate celelalte cazuri, așa că merită stăpânită temeinic înainte de a trece la acuzativ.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Folosește nominativul pentru subiectul oricărei propoziții.",
          "Folosește-l pentru numele predicativ de după sein, werden și bleiben.",
          "Întreabă wer? sau was? ca să identifici elementul de nominativ.",
        ],
        notes: [
          "Nominativul este forma „implicită” — cea pe care o cauți în dicționar și cu care se compară toate celelalte cazuri.",
          "Terminația adjectivului dinaintea unui substantiv la nominativ depinde de articol și de gen, de exemplu der große Mann — dar acesta este un subiect separat.",
        ],
        mistakeNotes: [
          "Verbul sehen cere un complement direct la acuzativ, nu la nominativ — aceasta e una dintre primele confuzii pe care le face orice începător.",
          "Nominativul feminin este întotdeauna die, niciodată der — der este rezervat substantivelor masculine.",
        ],
        exceptions: [
          "Un grup de substantive masculine numite „substantive slabe” sau n-nouns — der Junge, der Name, der Student, der Herr — primesc terminația -n sau -en în toate cazurile, cu excepția nominativului singular.",
          "Câteva substantive au un gen fluctuant sau disputat regional (de exemplu der/das Joghurt), dar dicționarul indică mereu forma standard.",
        ],
        tips: [
          "Ori de câte ori nu ești sigur ce caz trebuie folosit, găsește mai întâi verbul și întreabă wer oder was tut das? — răspunsul este întotdeauna la nominativ.",
          "Învață fiecare substantiv nou împreună cu articolul lui la nominativ (der/die/das) — acest obicei previne majoritatea greșelilor de gen ulterioare.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "Cazul complementului direct și un set fix de prepoziții.",
    objectives: [
      "Identifică complementul direct al unui verb tranzitiv.",
      "Aplică corect schimbarea der → den / ein → einen.",
      "Recunoaște prepozițiile fixe care cer acuzativul.",
    ],
    explanationSimple: [
      "Acuzativul marchează complementul direct — persoana sau lucrul care primește direct acțiunea verbului.",
      "Este și cazul care urmează după un set mic și fix de prepoziții, fără excepție.",
    ],
    explanationDetailed: [
      "După ce ai găsit subiectul (nominativul), următoarea întrebare este de obicei „asupra cui acționează subiectul?” — acesta este complementul direct, care în germană primește cazul acuzativ.",
      "Îl poți identifica întrebând wen? (pe cine?) pentru persoane sau was? (ce?) pentru lucruri.",
      "Doar articolul masculin se schimbă vizibil la acuzativ: der devine den, iar ein devine einen. Articolele feminine, neutre și de plural arată exact ca la nominativ — de aceea acuzativul pare adesea „invizibil” până nu apare un substantiv masculin.",
      "Un grup fix de verbe cer aproape întotdeauna un complement la acuzativ — haben, sehen, brauchen, kaufen, essen, trinken, lieben — iar un grup fix de prepoziții declanșează mereu acuzativul: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Îl văd pe bărbat.", "Ea cumpără un măr.", "Ne iubim câinele.", "Cadoul este pentru tine."],
    exerciseTexts: [
      {
        explanation:
          "Hund este masculin, așa că pronumele posesiv suferă aceeași schimbare specifică masculinului la acuzativ: unser ← unseren.",
        grammarRule: "Doar articolul/pronumele posesiv masculin se schimbă la acuzativ.",
        prompt: "Completează propoziția cu articolul corect la cazul Akkusativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Verbul sehen cere un complement direct la acuzativ, iar der masculin devine den.",
        grammarRule: "Doar articolul masculin se schimbă: der ← den, ein ← einen.",
        prompt: "În care propoziție este folosit corect cazul Akkusativ?",
      },
      {
        explanation: "Corect — die rămâne die atât la nominativ, cât și la acuzativ; doar articolul masculin se schimbă.",
        grammarRule: "Articolele feminine, neutre și de plural sunt identice cu cele de la nominativ.",
        prompt: "Articolul feminin la acuzativ este identic cu articolul feminin de la nominativ.",
      },
      {
        explanation: "Apfel este masculin și, ca și complement direct după kaufen, are nevoie de forma de acuzativ einen.",
        grammarRule: "Articolul nehotărât masculin la acuzativ: einen.",
        prompt: "Completează propoziția cu articolul corect la cazul Akkusativ.",
      },
      {
        explanation: "Mai întâi subiectul (Wir), apoi verbul (lieben), iar apoi complementul la acuzativ (unseren Hund).",
        grammarRule: "Folosește acuzativul pentru complementul direct al unui verb tranzitiv.",
        translation: "Ne iubim câinele.",
        prompt: "Așază cuvintele în ordinea corectă.",
      },
      {
        explanation: "für declanșează întotdeauna acuzativul, așa că du devine dich, iar er devine ihn.",
        grammarRule: "Folosește întotdeauna acuzativul după durch, für, gegen, ohne, um.",
        prompt: "Trage pronumele corect în fiecare spațiu liber.",
      },
      {
        explanation:
          "Student este un substantiv slab (n-noun), deci primește atât articolul de acuzativ den, cât și terminația -en: den Studenten.",
        grammarRule: "Substantivele slabe primesc -n/-en și la acuzativ.",
        prompt: "Scrie forma de Akkusativ a lui 'der Student', cu articol inclus (este un substantiv slab).",
      },
    ],
    conclusion:
      "Acuzativul marchează complementul direct și urmează după durch, für, gegen, ohne și um. Singura schimbare vizibilă față de nominativ este articolul masculin — der/ein devin den/einen — restul rămâne neschimbat.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Folosește acuzativul pentru complementul direct al unui verb tranzitiv.",
          "Pentru a-l identifica, întreabă wen? pentru persoane sau was? pentru lucruri.",
          "Doar articolul masculin se schimbă: der ← den, ein ← einen.",
          "Articolele feminine, neutre și de plural sunt identice cu cele de la nominativ.",
          "Folosește întotdeauna acuzativul după durch, für, gegen, ohne și um.",
        ],
        notes: [
          "Pentru că se schimbă doar articolele masculine, cursanții uită adesea să mai verifice genul substantivelor feminine și neutre — dar posesivele și pronumele (mein ← meinen, ihr ← ihren) urmează același tipar specific masculinului, așa că merită atenție.",
          "Expresiile de timp care răspund la „cât timp?” sau numesc un moment exact („în ce zi?”) folosesc adesea acuzativul fără prepoziție: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "Verbul sehen are nevoie de un complement la acuzativ, deci articolul masculin der trebuie să devină den.",
          "für declanșează întotdeauna acuzativul, așa că pronumele ich devine mich.",
        ],
        exceptions: [
          "Substantivele slabe (n-nouns) precum der Student, der Junge și der Name primesc -n și la acuzativ: den Studenten, den Jungen, den Namen — nu doar la dativ și genitiv.",
          "Câteva verbe care par să ceară o prepoziție iau de fapt un complement la acuzativ fără prepoziție, de exemplu Ich frage dich (nu „zu dir”).",
        ],
        tips: [
          "Substantivele feminine, neutre și de plural sunt identice la nominativ și acuzativ — dacă o propoziție pare „neschimbată”, verifică din nou substantivul masculin.",
          "Memorează durch, für, gegen, ohne, um ca pe un singur bloc — sunt mereu la acuzativ, fără excepții de care să te preocupi.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "Cazul complementului indirect — cel care primește sau beneficiază de ceva.",
    objectives: [
      "Identifică complementul indirect al unei propoziții.",
      "Aplică schimbarea completă a articolului la dativ pentru toate genurile.",
      "Recunoaște verbele și prepozițiile care cer exclusiv dativul.",
    ],
    explanationSimple: [
      "Dativul marchează complementul indirect — de obicei persoana care primește sau beneficiază de ceva.",
      "Răspunde la întrebarea wem? (cui?).",
    ],
    explanationDetailed: [
      "Multe propoziții germane au atât un complement direct (acuzativ), cât și unul indirect (dativ): Ich gebe dem Mann das Buch — „Îi dau bărbatului cartea.” Dem Mann este cel care primește, deci este la dativ.",
      "Un grup fix de verbe cer întotdeauna un complement la dativ, chiar dacă par să ceară acuzativ — helfen, danken, gefallen, gehören, folgen, glauben și antworten sunt printre primele pe care le întâlnesc cursanții.",
      "Dativul urmează și după un set fix de prepoziții: aus, bei, mit, nach, seit, von, zu.",
      "Cu cele nouă prepoziții „cu dublă valoare” (in, an, auf, über, unter, vor, hinter, neben, zwischen), folosește dativul pentru locație — răspunde la wo? (unde?) — și acuzativul pentru mișcare către o destinație — răspunde la wohin? (încotro?).",
    ],
    exampleMeanings: ["Îi dau bărbatului cartea.", "Ea își ajută sora.", "Călătorim cu autobuzul.", "Casa aparține vecinilor."],
    exerciseTexts: [
      {
        explanation: "Nachbarn este plural, iar gehören cere întotdeauna dativul, așa că die devine den.",
        grammarRule: "Fiecare articol se schimbă la dativ; pluralul die devine den.",
        prompt: "Completează propoziția cu articolul corect la cazul Dativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Verbul helfen cere întotdeauna un complement la dativ, iar die feminin devine der la dativ.",
        grammarRule: "helfen cere întotdeauna dativul, niciodată acuzativul.",
        prompt: "În care propoziție este folosit corect cazul Dativ?",
      },
      {
        explanation: "Corect — die Kinder devine den Kindern; doar substantivele care se termină deja în -n sau -s rămân neschimbate.",
        grammarRule: "Substantivele de plural primesc -n la dativ, cu excepția celor terminate deja în -n sau -s.",
        prompt: "Substantivele de plural la dativ primesc de obicei terminația -n.",
      },
      {
        explanation: "Bus este masculin, iar mit declanșează întotdeauna dativul, așa că der devine dem.",
        grammarRule: "Folosește întotdeauna dativul după aus, bei, mit, nach, seit, von, zu.",
        prompt: "Completează propoziția cu articolul corect la cazul Dativ.",
      },
      {
        explanation: "Când ambele complemente sunt substantive, dativul (dem Mann) vine de obicei înaintea acuzativului (das Buch).",
        grammarRule: "Când ambele complemente dintr-o propoziție sunt substantive, dativul vine de obicei primul.",
        translation: "Îi dau bărbatului cartea.",
        prompt: "Așază cuvintele în ordinea corectă.",
      },
      {
        explanation: "Verbul gehören cere întotdeauna dativul: sie devine ihr, iar er devine ihm.",
        grammarRule: "Un grup fix de verbe cer întotdeauna un complement la dativ — gehören este unul dintre ele.",
        prompt: "Trage pronumele corect în fiecare spațiu liber.",
      },
      {
        explanation: "Pluralul die Kinder devine den Kindern la dativ — articolul se schimbă în den, iar substantivul primește -n.",
        grammarRule: "Fiecare articol se schimbă la dativ; substantivele de plural primesc -n.",
        prompt: "Scrie forma de plural la Dativ a lui 'die Kinder', cu articol inclus (de exemplu 'den …').",
      },
    ],
    conclusion:
      "Dativul marchează complementul indirect, urmează după aus/bei/mit/nach/seit/von/zu și schimbă fiecare articol — cu un -n distinctiv adăugat substantivelor de plural. Câteva verbe precum helfen și danken cer întotdeauna un complement la dativ.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Folosește dativul pentru complementul indirect — de obicei destinatarul sau beneficiarul.",
          "Întreabă wem? ca să-l identifici.",
          "Fiecare articol se schimbă: der → dem, die → der, das → dem, die (plural) → den.",
          "Substantivele de plural primesc -n la dativ, cu excepția celor terminate deja în -n sau -s: die Kinder → den Kindern.",
          "Folosește întotdeauna dativul după aus, bei, mit, nach, seit, von, zu.",
          "Cu prepozițiile cu dublă valoare, dativul răspunde la wo?, iar acuzativul la wohin?.",
        ],
        notes: [
          "Verbele de dativ nu primesc niciodată un complement la acuzativ pentru persoana implicată — helfen, de exemplu, este mereu „jemandem helfen”, niciodată „jemanden helfen”.",
          "O observație despre ordinea cuvintelor: când ambele complemente dintr-o propoziție sunt substantive, dativul vine de obicei primul: Ich gebe dem Mann das Buch. Când ambele sunt pronume, acuzativul vine primul: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "Verbul helfen cere întotdeauna dativul, niciodată acuzativul — fără excepție.",
          "mit este întotdeauna urmat de dativ, iar substantivul de plural are nevoie de terminația -n: Kinder → Kindern.",
        ],
        exceptions: [
          "Un grup mic de verbe și adjective se combină cu dativul din motive idiomatice — gefallen (a plăcea), schmecken (a avea gust bun) și stehen (a i se potrivi cuiva) pun persoana la dativ: Das Kleid steht dir gut.",
          "Substantivele care se termină deja în -n sau -s la plural nu mai primesc un -n suplimentar la dativ: den Autos, den Frauen.",
        ],
        tips: [
          "Dativul de plural se termină aproape întotdeauna în -n — observarea acestui -n pe un substantiv este adesea cel mai rapid mod de a recunoaște dintr-o privire o propoziție la dativ.",
          "Învață aus, bei, mit, nach, seit, von, zu ca pe un set — nu există altă logică de memorat în afara listei în sine.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "Timpul trecut uzual din germană — cum se formează și când se folosește.",
    objectives: [
      "Formează Perfekt-ul cu haben sau sein plus un participiu trecut.",
      "Alege corect între haben și sein.",
      "Recunoaște participiile trecute regulate și neregulate.",
    ],
    explanationSimple: [
      "Perfekt este forma prin care germana vorbită exprimă de obicei trecutul — nu un singur verb, ci haben sau sein plus un participiu trecut.",
      "Se construiește la fel indiferent de persoană: verbul auxiliar pe locul al doilea, iar participiul la finalul propoziției.",
    ],
    explanationDetailed: [
      "Majoritatea verbelor folosesc haben ca auxiliar. Verbele de mișcare (gehen, fahren, kommen) sau de schimbare a stării (aufwachen, werden) folosesc de obicei sein.",
      "Verbele regulate (slabe) își formează participiul cu ge- + rădăcină + -t: machen → gemacht, spielen → gespielt. Verbele neregulate (tari) își schimbă adesea vocala din rădăcină și se termină în -en: sprechen → gesprochen, gehen → gegangen.",
      "Deoarece participiul se duce la finalul propoziției, tot restul — complementele, expresiile de timp, negația — se așază între auxiliar și participiu.",
    ],
    exampleMeanings: ["Am citit cartea.", "Am călătorit la Berlin.", "Ea a lucrat ieri.", "El s-a trezit devreme."],
    exerciseTexts: [
      {
        explanation: "fahren descrie o deplasare dintr-un loc în altul, deci ia sein: Wir sind gefahren.",
        grammarRule: "Folosește sein pentru verbele de mișcare sau de schimbare a stării.",
        prompt: "Ce auxiliar ia verbul 'fahren' la Perfekt?",
      },
    ],
    quizTexts: [
      {
        explanation: "lesen ia haben, iar participiul lui neregulat este gelesen, așezat la finalul propoziției.",
        grammarRule: "Folosește haben ca auxiliar pentru majoritatea verbelor.",
        prompt: "În care propoziție este format corect Perfekt-ul?",
      },
      {
        explanation: "Corect — telefonieren → telefoniert, fără ge-.",
        grammarRule: "Verbele terminate în -ieren nu primesc niciodată ge-.",
        prompt: "Verbe precum telefonieren nu primesc niciodată prefixul ge- la Perfekt.",
      },
      {
        explanation: "fahren este un verb de mișcare, deci ia sein: sind gefahren.",
        grammarRule: "Folosește sein pentru verbele de mișcare sau de schimbare a stării.",
        prompt: "Completează propoziția cu auxiliarul corect.",
      },
      {
        explanation: "essen este neregulat: gegessen, nu forma regulată geesst.",
        grammarRule: "Participiile neregulate își schimbă adesea vocala din rădăcină și se termină în -en.",
        prompt: "Scrie participiul trecut al verbului 'essen'.",
      },
    ],
    conclusion:
      "Perfekt se formează din haben sau sein plus un participiu trecut așezat la finalul propoziției. Majoritatea verbelor iau haben; verbele de mișcare sau de schimbare a stării iau sein. Participiile regulate se termină în -t, cele neregulate adesea în -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Folosește haben ca auxiliar pentru majoritatea verbelor.",
          "Folosește sein pentru verbele de mișcare sau de schimbare a stării.",
          "Participiu regulat: ge- + rădăcină + -t.",
          "Participiile neregulate se termină adesea în -en și pot avea vocala din rădăcină schimbată.",
          "Participiul se duce întotdeauna la finalul propoziției.",
        ],
        notes: [
          "Câteva participii neregulate uzuale merită memorate direct, nu deduse: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Verbele cu prefix separabil introduc -ge- între prefix și rădăcină: aufwachen → aufgewacht, nu geaufwacht.",
        ],
        mistakeNotes: ["fahren este un verb de mișcare, deci ia sein, nu haben."],
        exceptions: [
          "Verbele terminate în -ieren (telefonieren, studieren) nu primesc niciodată ge-: telefoniert, studiert.",
          "Verbele cu prefix inseparabil (be-, ver-, er-, ge-, ent-, zer-) omit de asemenea ge-: besuchen → besucht, verstehen → verstanden.",
        ],
        tips: [
          "Dacă nu ești sigur dacă folosești haben sau sein, întreabă-te: descrie acest verb o deplasare din A în B sau o schimbare de stare? Dacă da, este aproape sigur sein.",
          "Învață verbele neregulate noi cu toate cele trei forme deodată — infinitiv, trecut simplu, participiu — la fel cum înveți der/die/das pentru un substantiv nou.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Vocabular de bază pentru a vorbi despre membrii familiei.",
    explanationSimple: [
      "Această lecție acoperă cuvintele germane pentru familia apropiată — cuvinte pe care le vei folosi constant de îndată ce începi să-ți descrii propria viață.",
    ],
    explanationDetailed: [
      "Substantivele din familie urmează tiparele de gen regulate pe care le știi deja: majoritatea substantivelor care denumesc persoane sunt der sau die în funcție de genul persoanei, cu câteva excepții fixe precum das Kind (copilul) și das Baby (bebelușul), care sunt neutre din punct de vedere gramatical, indiferent de genul copilului.",
      "Pronumele posesive (mein, meine) se acordă cu genul substantivului la fel ca ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["Aceasta este mama mea.", "Fratele meu locuiește la Berlin.", "Am două surori."],
    exerciseTexts: [
      {
        explanation: "Schwester este feminin: die Schwester.",
        grammarRule: "Substantivele care denumesc membri ai familiei preiau genul persoanei pe care o numesc.",
        prompt: "Scrie cuvântul german pentru „soră”.",
      },
    ],
    quizTexts: [
      {
        explanation: "der Vater înseamnă „tată”.",
        grammarRule: "der Vater este masculin.",
        prompt: "Care cuvânt înseamnă „tată”?",
      },
      {
        explanation: "Corect — das Kind este întotdeauna neutru.",
        grammarRule: "Câteva substantive care denumesc persoane, precum das Kind și das Baby, sunt fixe la neutru.",
        prompt: "„das Kind” este neutru din punct de vedere gramatical, indiferent de genul copilului.",
      },
      {
        explanation: "Schwestern este pluralul lui Schwester.",
        grammarRule: "Majoritatea substantivelor feminine primesc -n sau -en la plural.",
        prompt: "Completează propoziția.",
      },
    ],
    conclusion:
      "Vocabularul familiei este regulat din punct de vedere gramatical — substantive cu gen pentru persoane, cu das Kind ca excepție fixă la neutru — și îți oferă imediat un motiv să exersezi pronumele posesive.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["mamă", "tată", "soră", "frate", "părinți (plural)", "copil", "bunică", "bunic"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Un text scurt și cotidian despre a comanda ceva la o cafenea, cu întrebări de înțelegere a textului.",
    explanationSimple: ["O scenă scurtă la o cafenea — citește-o o dată pentru ideea generală, înainte de a verifica fiecare cuvânt."],
    explanationDetailed: [
      "Citirea la nivelul A1 funcționează cel mai bine în două etape: mai întâi pentru situația de ansamblu (cine, unde, ce se întâmplă), apoi a doua oară pentru a observa cuvintele individuale pe care nu le-ai prins prima dată.",
      "Nu trebuie să înțelegi fiecare cuvânt ca să răspunzi la întrebările de mai jos — concentrează-te pe ce schimbă cu adevărat înțelesul scenei.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Anna comandă cafea (einen Kaffee), nu ceai.",
        grammarRule: "bestellen + complement la acuzativ.",
        prompt: "Anna comandă ceai.",
      },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — ea se așază la o masă lângă fereastră.",
        grammarRule: "sich setzen an + acuzativ.",
        prompt: "Unde se așază Anna?",
      },
      {
        explanation: "Corect — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Două verbe coordonate, legate prin und.",
        prompt: "Anna citește o carte în timp ce își bea cafeaua.",
      },
      {
        explanation: "Minuten (minute) — Nach zehn Minuten.",
        grammarRule: "nach + expresie de timp la dativ.",
        prompt: "Completează: chelnerul aduce comanda după zece ___.",
      },
    ],
    conclusion:
      "O scenă scurtă la o cafenea, construită în întregime din vocabular de nivel A1 și propoziții principale simple — un bun exercițiu de citire pentru înțelegerea generală, înainte de a te preocupa de fiecare cuvânt în parte.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "O scurtă anunțare de gară — ascultă peronul și ora de plecare.",
    explanationSimple: ["O scurtă anunțare de gară — nu există încă un fișier audio, așa că citește transcrierea ca și cum ai asculta-o."],
    explanationDetailed: [
      "Anunțurile din gări și aeroporturi urmează în germană o structură foarte previzibilă — tocmai această previzibilitate le face un exercițiu bun de ascultare la început: numărul trenului, peronul (Gleis) și ora, aproape întotdeauna în aceeași ordine.",
      "De îndată ce poți identifica sigur un număr de peron și o oră dintr-un anunț, poți extinde aceeași strategie de ascultare la orice înregistrare la fel de formulaică (buletine meteo, instrucțiuni de siguranță etc.).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Gleis 7 — peronul 7.",
        grammarRule: "von + numărul peronului la dativ.",
        prompt: "De la ce peron pleacă trenul?",
      },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — peronul 7.",
        grammarRule: "von + dativ.",
        prompt: "De unde pleacă trenul spre München?",
      },
      {
        explanation: "vierzehn Uhr dreißig înseamnă 14:30.",
        grammarRule: "Ora vorbită în format de 24 de ore: [ora] Uhr [minute].",
        prompt: "Scrie ora de plecare în format de 24 de ore, cu cifre (de exemplu 09:15).",
      },
    ],
    conclusion:
      "Anunțurile de gară sunt formulaice — numărul trenului, peronul, ora — ceea ce le face un exercițiu ideal de ascultare pentru început, odată ce cunoști tiparul după care să asculți.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Exersează prezentarea ta cu voce tare — nume, origine și câteva detalii.",
    explanationSimple: [
      "O prezentare personală este unul dintre primele lucruri pe care le vei spune cu adevărat cu voce tare în germană — câteva propoziții scurte și fixe pe care le vei folosi constant.",
    ],
    explanationDetailed: [
      "Exercițiul de vorbire de aici funcționează cel mai bine cu voce tare, nu doar în minte — spune fiecare cerință de mai jos ca o propoziție completă înainte de a trece la următoarea, chiar dacă nu te ascultă nimeni.",
      "Nu există încă înregistrare sau evaluare a vorbirii; tratează acest exercițiu ca pe un antrenament de vorbire ghidat de tine însuți, folosind cerințele și propozițiile exemplu ca pe un scenariu pe care îl adaptezi.",
    ],
    exampleMeanings: ["Mă numesc Anna.", "Sunt din Germania.", "Sunt studentă."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … este modul standard de a spune de unde ești.",
        grammarRule: "kommen aus + numele țării/orașului la dativ.",
        prompt: "Scrie echivalentul german pentru „Sunt din …”.",
      },
    ],
    quizTexts: [
      {
        explanation: "Verbul heißen se conjugă direct cu numele drept complement: Ich heiße Anna.",
        grammarRule: "heißen + nume, fără verb suplimentar.",
        prompt: "Care propoziție spune corect „Mă numesc Anna”?",
      },
      {
        explanation: "heißt este forma de persoana a doua singular (du) a verbului heißen.",
        grammarRule: "du heißt (conjugare regulată de verb -en).",
        prompt: "Completează: cum întrebi informal pe cineva cum îl cheamă.",
      },
    ],
    conclusion:
      "Prezentarea personală se construiește din trei tipare fixe de propoziții — nume, origine, ocupație — pe care merită să le exersezi din plin cu voce tare, pentru că le vei folosi din prima zi.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Spune-ți numele:",
          "Spune de unde ești:",
          "Spune ce faci:",
          "Întreabă pe altcineva cum îl cheamă:",
          "Pune-ți cele trei propoziții proprii cap la cap într-o scurtă prezentare.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Un test mixt de recapitulare care acoperă cazurile gramaticale, vocabularul cotidian și ordinea de bază a cuvintelor.",
    explanationSimple: [
      "Un test pur de recapitulare — fără explicații noi, doar un set mixt de întrebări despre tot ce a fost acoperit până la nivelul A1.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "Subiectul propoziției ia cazul nominativ: Der Mann.",
        grammarRule: "Folosește nominativul pentru subiectul oricărei propoziții.",
        prompt: "Care articol este corect? „___ Mann schläft.” (subiect)",
      },
      {
        explanation: "sehen cere un complement la acuzativ, iar der masculin devine den.",
        grammarRule: "Doar articolul masculin se schimbă la acuzativ.",
        prompt: "Completează cu articolul corect la acuzativ.",
      },
      { explanation: "die Schwester.", grammarRule: "Recapitulare de vocabular din familie.", prompt: "Scrie cuvântul german pentru „soră”." },
      {
        explanation: "Mai întâi subiectul, apoi verbul conjugat pe locul al doilea.",
        grammarRule: "Ordinea de bază a cuvintelor în germană: subiect, verb, rest.",
        translation: "Mă numesc Anna.",
        prompt: "Așază cuvintele în ordinea corectă.",
      },
    ],
    conclusion: "O scurtă recapitulare mixtă despre cazuri, vocabular și ordinea cuvintelor — o bună verificare înainte de a trece peste nivelul A1.",
    details: { kind: "none" },
  },
  "grammar/b2/genitiv": {
    summary: "Cazul posesiei — tot mai formal în vorbire, dar încă esențial pentru citit și scris.",
    objectives: [
      "Identifică genitivul ca fiind cazul posesiei.",
      "Adaugă terminația corectă a substantivului pentru masculin și neutru.",
      "Folosește genitivul după trotz, wegen, während și statt.",
    ],
    explanationSimple: [
      "Genitivul arată posesia — cui îi aparține ceva.",
      "Urmează și după un set mic și fix de prepoziții: trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "Spre deosebire de celelalte trei cazuri, genitivul schimbă chiar substantivul, nu doar articolul — substantivele masculine și neutre primesc -s sau -es, în timp ce substantivele feminine și de plural rămân neschimbate.",
      "În germana vorbită curentă, von + dativ ia adesea locul genitivului (von meinem Vater în loc de meines Vaters) — dar genitivul rămâne forma așteptată, mai formală, în scris și în vorbirea îngrijită, și îl vei întâlni constant la citit.",
      "Ordinea cuvintelor la genitiv așază posesorul după substantivul pe care îl determină — das Auto meines Vaters, nu meines Vaters Auto — cu excepția numelor proprii, care vin primele: Annas Auto.",
    ],
    exampleMeanings: [
      "Mașina tatălui meu este nouă.",
      "Îmi place culoarea casei.",
      "Numele femeii este Anna.",
      "În ciuda ploii, mergem la plimbare.",
    ],
    exerciseTexts: [
      {
        explanation: "Frau este feminin, deci ia der la genitiv — substantivul în sine nu se schimbă.",
        grammarRule: "Articolul genitiv feminin: der.",
        prompt: "Completează propoziția cu articolul corect la cazul Genitiv.",
      },
    ],
    quizTexts: [
      {
        explanation: "Vaters primește terminația genitivală -s după posesivul meines, arătând a cui este mașina.",
        grammarRule: "Substantivele masculine la genitiv primesc -s sau -es.",
        prompt: "În care propoziție este folosit corect cazul Genitiv?",
      },
      {
        explanation:
          "Corect — doar substantivele masculine și neutre primesc o terminație genitivală; substantivele feminine și de plural rămân neschimbate.",
        grammarRule: "Terminațiile genitivale ale substantivului: -s/-es doar pentru masculin și neutru.",
        prompt: "Substantivele masculine și neutre primesc de obicei -s sau -es la genitiv, dar substantivele feminine nu se schimbă niciodată.",
      },
      {
        explanation: "Haus este neutru, deci ia des la genitiv, iar substantivul însuși primește -es: Hauses.",
        grammarRule: "Articolul genitiv neutru: des, substantiv +(e)s.",
        prompt: "Completează propoziția cu articolul corect la cazul Genitiv.",
      },
      {
        explanation: "Trotz este una dintre prepozițiile fixe care declanșează întotdeauna genitivul.",
        grammarRule: "Prepoziții genitivale: während, trotz, wegen, statt.",
        prompt: "Scrie prepoziția genitivală care înseamnă „în ciuda”.",
      },
    ],
    conclusion:
      "Genitivul marchează posesia și urmează după un set mic de prepoziții precum trotz, wegen și während. Substantivele masculine și neutre primesc -s sau -es; cele feminine și de plural rămân neschimbate. Este tot mai des înlocuit de von + dativ în vorbirea informală, dar rămâne esențial pentru citit și scrisul formal.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Folosește genitivul pentru a arăta posesia — cui îi aparține ceva.",
          "Folosește-l după prepozițiile fixe trotz, wegen, während și statt.",
          "Adaugă -s sau -es la substantivele masculine și neutre; cele feminine și de plural nu se schimbă.",
        ],
        notes: [
          "În germana vorbită curentă, von + dativ înlocuiește adesea genitivul (von meinem Vater în loc de meines Vaters) — dar genitivul rămâne așteptat în scris și în vorbirea formală.",
          "Ordinea cuvintelor la genitiv așază posesorul după substantivul pe care îl determină: das Auto meines Vaters, nu meines Vaters Auto (cu excepția numelor proprii: Annas Auto).",
        ],
        mistakeNotes: [
          "Posesivul însuși are nevoie de terminația genitivală -es, iar substantivul de -s — se schimbă amândouă odată.",
          "Articolul des singur nu este suficient — substantivele neutre mai adaugă și -es la genitiv.",
        ],
        exceptions: [
          "Substantivele neutre/masculine dintr-o silabă iau de obicei -es (des Hauses, des Mannes); substantivele mai lungi iau adesea doar -s (des Computers, des Lehrers).",
          "Substantivele masculine slabe (n-nouns) precum der Student sau der Junge primesc și ele -en la genitiv, nu -s: des Studenten, nu des Studentens.",
        ],
        tips: [
          "Dacă poți reformula o propoziție cu „von + dativ” și tot sună natural, genitivul este de obicei opțional acolo — dar recunoaște-l oricum, pentru că îl vei întâlni constant în scris.",
          "Învață trotz, wegen, während și statt ca pe un set — sunt cele patru prepoziții genitivale pe care le vei întâlni cel mai des.",
        ],
      },
    },
  },
  "grammar/a1/praesens": {
    summary: "Timpul prezent din germană — terminații regulate, care exprimă într-o singură formă atât acțiunea simplă, cât și cea continuă.",
    objectives: [
      "Conjugă verbele regulate la Präsens.",
      "Folosește Präsens-ul atât pentru acțiuni prezente, cât și pentru viitorul apropiat.",
      "Recunoaște vocala de legătură -e- pentru rădăcinile terminate în -t sau -d.",
    ],
    explanationSimple: [
      "Präsens este timpul prezent din germană — folosit pentru ce se întâmplă acum, adevăruri generale și adesea pentru viitorul apropiat.",
      "Verbele regulate primesc o terminație previzibilă la rădăcină, în funcție de cine face acțiunea.",
    ],
    explanationDetailed: [
      "Pentru a conjuga un verb regulat, elimină -en din infinitiv ca să obții rădăcina, apoi adaugă terminația potrivită subiectului: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "Germana nu are o formă continuă separată — ich spiele acoperă deopotrivă „eu joc” și „eu sunt în timpul jocului”, iar contextul indică sensul exact.",
      "Präsens-ul este folosit frecvent și pentru viitorul apropiat, mai ales cu un cuvânt de timp: Ich fliege morgen nach Berlin (Mâine zbor la Berlin).",
    ],
    exampleMeanings: ["Eu joc fotbal.", "Tu înveți germana.", "El lucrează azi.", "Mâine mergem la Berlin."],
    exerciseTexts: [
      {
        explanation: "du primește terminația regulată -st: spiel + st = spielst.",
        grammarRule: "Terminația Präsens pentru du: -st.",
        prompt: "Scrie forma corectă la Präsens a verbului 'spielen' pentru 'du'.",
      },
    ],
    quizTexts: [
      {
        explanation: "Rădăcina lui arbeiten se termină în -t, deci forma pentru er are nevoie de vocala de legătură: arbeitet, nu arbeit.",
        grammarRule: "Introdu -e- înaintea terminației când rădăcina se termină în -t sau -d.",
        prompt: "În care propoziție este folosit corect Präsens-ul?",
      },
      {
        explanation:
          "Corect — germana folosește adesea Präsens-ul în loc de un timp viitor separat, atunci când contextul sau un cuvânt de timp face deja clar viitorul.",
        grammarRule: "Folosește Präsens-ul pentru acțiuni din viitorul apropiat, cu o expresie de timp.",
        prompt: "Präsens-ul poate fi folosit pentru a vorbi despre viitorul apropiat, mai ales cu un cuvânt de timp precum morgen.",
      },
      {
        explanation: "wir primește terminația -en, care pentru un verb regulat este identică cu infinitivul: wohnen.",
        grammarRule: "Terminația Präsens pentru wir: -en (identică cu infinitivul).",
        prompt: "Scrie forma corectă la Präsens a verbului 'wohnen' pentru 'wir'.",
      },
      {
        explanation: "ich primește terminația -e: kauf + e = kaufe.",
        grammarRule: "Terminația Präsens pentru ich: -e.",
        prompt: "Completează propoziția cu forma corectă la Präsens a verbului 'kaufen'.",
      },
    ],
    conclusion:
      "Präsens-ul folosește șase terminații previzibile — -e, -st, -t, -en, -t, -en — adăugate la rădăcina verbului, cu o vocală de legătură -e- pentru rădăcinile terminate în -t sau -d. Acoperă atât prezentul, cât și viitorul apropiat, așa că stăpânirea acestor terminații te ajută mult chiar înainte de a ajunge la timpurile trecute.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Elimină -en din infinitiv ca să găsești rădăcina.",
          "Adaugă terminația potrivită subiectului: -e, -st, -t, -en, -t, -en.",
          "Introdu o vocală de legătură -e- înaintea terminației dacă rădăcina se termină în -t sau -d (arbeiten → du arbeitest).",
        ],
        notes: [
          "Formele pentru du și er/sie/es sunt cele care au cel mai des nevoie de vocala de legătură -e-, pentru că -st și -t sunt greu de pronunțat direct după o rădăcină terminată în -t/-d.",
          "Câteva verbe foarte uzuale sunt neregulate doar la formele du/er (fahren → du fährst, er fährt) — acestea nu fac parte din tiparul regulat prezentat aici.",
        ],
        mistakeNotes: [
          "Rădăcinile terminate în -t au nevoie de o vocală de legătură -e- înaintea terminației -st, altfel cuvântul devine impronunțabil.",
          "Fiecare subiect are nevoie de terminația lui proprie — ich ia întotdeauna -e, niciodată forma -t specifică lui er.",
        ],
        exceptions: [
          "Verbele tari cu schimbare de vocală, precum fahren, sehen și sprechen, își schimbă vocala din rădăcină doar la formele du și er/sie/es (du fährst, er fährt) — un tipar separat de terminațiile regulate de aici.",
          "Sein și haben sunt complet neregulate și trebuie memorate ca forme proprii: ich bin, du bist, er ist…",
        ],
        tips: [
          "Învață cele șase terminații ca pe un singur set fix — odată ce devin automate, orice verb regulat se conjugă la fel.",
          "Când rădăcina unui verb nou se termină în -t, -d sau un grup consonantic precum -ffn (öffnen), așteaptă-te la vocala de legătură -e- înaintea lui -st și -t.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "Timpul trecut simplu, folosit în scris și pentru verbe uzuale precum sein și haben — cum diferă de Perfekt.",
    objectives: [
      "Conjugă verbele regulate (slabe) la Präteritum.",
      "Recunoaște când Präteritum-ul este preferat în locul lui Perfekt.",
      "Folosește corect sein și haben la formele lor uzuale de Präteritum.",
    ],
    explanationSimple: [
      "Präteritum este celălalt timp trecut din germană — folosit mai ales în scris, iar în vorbire pentru sein, haben și verbele modale.",
      "Verbele regulate adaugă -te plus o terminație personală la rădăcină.",
    ],
    explanationDetailed: [
      "Deși Perfekt domină germana vorbită pentru majoritatea verbelor, Präteritum este timpul trecut obișnuit în germana scrisă — poveștile, articolele de știri și textele formale îl folosesc aproape întotdeauna.",
      "Verbele regulate (slabe) formează Präteritum-ul adăugând -te la rădăcină, apoi o terminație personală: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Chiar și în vorbire, câteva verbe foarte uzuale apar aproape mereu la Präteritum, nu la Perfekt: war (era), hatte (avea) și verbele modale precum konnte (putea) sau wollte (voia).",
    ],
    exampleMeanings: ["Mi-am făcut temele.", "Ea a cântat la pian ieri.", "El era obosit.", "Nu am avut timp."],
    exerciseTexts: [
      {
        explanation: "sie (ei/ele) primește terminația -ten, la fel ca wir: spiel + ten = spielten.",
        grammarRule: "Terminația Präteritum pentru sie (plural): -ten.",
        prompt: "Scrie forma corectă la Präteritum a verbului 'spielen' pentru 'sie' (ei/ele).",
      },
    ],
    quizTexts: [
      {
        explanation: "Rădăcina lui arbeiten se termină în -t, deci are nevoie de vocala de legătură înainte de -te: arbeitete.",
        grammarRule: "Introdu -e- înaintea lui -te când rădăcina se termină în -t sau -d.",
        prompt: "În care propoziție este folosit corect Präteritum-ul?",
      },
      {
        explanation: "Corect — atât ich, cât și er/sie/es primesc pur și simplu -te, spre deosebire de Präsens, unde diferă (-e vs -t).",
        grammarRule: "Terminațiile Präteritum pentru ich și er sunt identice: -te.",
        prompt: "La Präteritum, forma pentru ich și forma pentru er/sie/es folosesc exact aceeași terminație.",
      },
      {
        explanation: "Haben este neregulat la Präteritum — forma pentru wir este hatten, nu forma regulată habten.",
        grammarRule: "Rădăcina Präteritum a lui haben este neregulată: hatt-.",
        prompt: "Scrie forma la Präteritum a verbului 'haben' pentru 'wir'.",
      },
      {
        explanation: "ich primește -te: mach + te = machte.",
        grammarRule: "Terminația Präteritum pentru ich: -te.",
        prompt: "Completează propoziția cu forma corectă la Präteritum a verbului 'machen'.",
      },
    ],
    conclusion:
      "Präteritum-ul adaugă -te plus o terminație personală la rădăcina unui verb regulat, iar ich și er/sie/es au aceeași formă. Este timpul trecut implicit în scris și — pentru sein, haben și verbele modale — alegerea firească și în vorbire, deși Perfekt domină de obicei conversația de zi cu zi.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Adaugă -te la rădăcina unui verb regulat, apoi terminația personală: -te, -test, -te, -ten, -tet, -ten.",
          "Introdu o vocală de legătură -e- înaintea lui -te dacă rădăcina se termină în -t sau -d (arbeiten → er arbeitete).",
          "Preferă Präteritum-ul pentru sein, haben și verbele modale, chiar și în vorbire.",
        ],
        notes: [
          "Spre deosebire de Präsens, formele pentru ich și er/sie/es sunt identice la Präteritum — ambele primesc doar -te.",
          "Präteritum-ul lui sein (war) și al lui haben (hatte) sunt printre primele forme trecute neregulate pe care majoritatea cursanților le memorează, pentru că sunt folosite constant.",
        ],
        mistakeNotes: [
          "Rădăcinile terminate în -t au nevoie de vocala de legătură -e- înaintea lui -te, aceeași regulă ca la Präsens.",
          "Haben este neregulat la Präteritum — hatte, nu forma regulată habte.",
        ],
        exceptions: [
          "Verbele tari (neregulate) își schimbă complet vocala din rădăcină, în loc să adauge -te: gehen → ging, sehen → sah — un tipar diferit de terminațiile regulate de aici.",
          "Präteritum-ul lui sein (war) și al lui haben (hatte) nu urmează deloc tiparul regulat cu -te și pur și simplu se memorează.",
        ],
        tips: [
          "Dacă spui o poveste sau scrii ceva formal, alege implicit Präteritum-ul — este timpul narativ firesc al germanei.",
          "În conversația de zi cu zi, poți folosi de obicei Perfekt pentru majoritatea verbelor — cu excepția lui war, hatte și a verbelor modale, care sună aproape mereu mai natural la Präteritum, chiar și în vorbire.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Vorbind despre viitor cu werden + infinitiv — și când germanii folosesc pur și simplu prezentul în loc.",
    objectives: [
      "Formează Futur I cu werden + infinitiv.",
      "Recunoaște când germanii folosesc Futur I în loc de Präsens pentru sensul de viitor.",
      "Conjugă werden corect la toate persoanele.",
    ],
    explanationSimple: [
      "Futur I vorbește despre viitor folosind o formă conjugată a lui werden plus infinitivul verbului principal.",
      "În germana de zi cu zi, Präsens-ul este de fapt folosit mai des pentru viitor — Futur I este rezervat predicțiilor, promisiunilor și accentuării.",
    ],
    explanationDetailed: [
      "Structura este fixă: subiect + werden conjugat (poziția a doua) + restul propoziției + infinitiv (poziția finală). Ich werde morgen arbeiten — „Voi lucra mâine.”",
      "Werden este neregulat: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — aceste șase forme trebuie memorate, nu deduse dintr-o regulă obișnuită.",
      "Germanii preferă adesea Präsens-ul cu un cuvânt de timp pentru evenimente viitoare planificate (Ich fliege morgen) și păstrează Futur I pentru predicții, promisiuni sau presupuneri despre viitor: Es wird morgen regnen (Mâine va ploua).",
    ],
    exampleMeanings: ["Voi lucra mâine.", "În curând va ploua.", "Vom rezolva problema.", "Ea te va suna."],
    exerciseTexts: [
      {
        explanation: "ich ia forma neregulată werde.",
        grammarRule: "Forma lui werden pentru ich: werde.",
        prompt: "Completează propoziția cu forma corectă a lui werden.",
      },
    ],
    quizTexts: [
      {
        explanation: "Infinitivul arbeiten se duce la finalul propoziției, după morgen.",
        grammarRule: "Așază infinitivul la finalul propoziției.",
        prompt: "În care propoziție este format corect Futur I?",
      },
      {
        explanation: "Corect — aceasta este întreaga structură: werden (conjugat) plus un infinitiv la final.",
        grammarRule: "Futur I = werden (conjugat) + infinitiv.",
        prompt: "Futur I se construiește cu o formă conjugată a lui werden plus infinitivul verbului principal.",
      },
      {
        explanation: "Forma neregulată a lui werden pentru du este wirst.",
        grammarRule: "Forma lui werden pentru du: wirst.",
        prompt: "Scrie forma corectă a lui werden pentru 'du'.",
      },
      {
        explanation: "Forma neregulată a lui werden pentru er este wird.",
        grammarRule: "Forma lui werden pentru er: wird.",
        prompt: "Scrie forma corectă a lui werden pentru 'er'.",
      },
      {
        explanation: "es (el/ea, neutru) ia aceeași formă ca er: wird.",
        grammarRule: "Forma lui werden pentru es: wird.",
        prompt: "Completează propoziția cu forma corectă a lui werden.",
      },
      {
        explanation: "Lösen rămâne infinitiv simplu, la finalul propoziției.",
        grammarRule: "Infinitivul din Futur I este întotdeauna în forma lui simplă (neconjugat).",
        prompt: "În care propoziție este folosit corect Futur I?",
      },
      {
        explanation: "Corect — Ich fliege morgen sună mai natural decât Ich werde morgen fliegen, deși ambele sunt corecte gramatical.",
        grammarRule: "Folosește Futur I mai ales pentru predicții, promisiuni și presupuneri.",
        prompt: "Germanii preferă de obicei Präsens-ul în locul lui Futur I atunci când un cuvânt de timp indică deja clar viitorul.",
      },
      {
        explanation: "wir ia werden — aceeași formă ca infinitivul însuși.",
        grammarRule: "Forma lui werden pentru wir: werden.",
        prompt: "Scrie forma corectă a lui werden pentru 'wir'.",
      },
      {
        explanation: "sie (ea) ia aceeași formă ca er: wird.",
        grammarRule: "Forma lui werden pentru sie (singular): wird.",
        prompt: "Completează propoziția cu forma corectă a lui werden.",
      },
      {
        explanation:
          "Wird singur, fără un infinitiv după el, înseamnă „devine” — Er wird Arzt exprimă o schimbare de stare, nu o predicție despre viitor.",
        grammarRule: "Werden fără infinitiv înseamnă „a deveni”, nu marchează viitorul.",
        prompt: "Care propoziție folosește werden cu sensul de „devine”, nu ca timp viitor?",
      },
    ],
    conclusion:
      "Futur I combină o formă conjugată a lui werden cu un infinitiv la finalul propoziției. Este mai puțin folosit în vorbirea de zi cu zi decât te-ai putea aștepta — germanii preferă adesea Präsens-ul pentru evenimente planificate — dar rămâne alegerea firească pentru predicții, promisiuni și presupuneri despre ce urmează.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Construiește Futur I cu o formă conjugată a lui werden plus infinitivul verbului principal.",
          "Pune infinitivul chiar la finalul propoziției.",
          "Folosește Futur I pentru predicții, promisiuni și presupuneri despre viitor — nu pentru planuri obișnuite.",
        ],
        notes: [
          "Pentru planuri obișnuite cu un cuvânt de timp clar, Präsens-ul este de obicei mai natural: Ich fliege morgen sună mai idiomatic decât Ich werde morgen fliegen, chiar dacă ambele sunt corecte.",
          "Werden de unul singur (fără un infinitiv după el) înseamnă „a deveni” — Er wird Arzt (El devine medic) — astfel încât contextul îți arată sensul potrivit.",
        ],
        mistakeNotes: [
          "Infinitivul trebuie să meargă chiar la finalul propoziției, după orice altă informație precum morgen.",
          "Futur I folosește infinitivul simplu — fără zu înaintea lui.",
        ],
        exceptions: [
          "Werden este unul dintre puținele verbe cu adevărat neregulate din germană — formele lui de Präsens (wirst, wird) nu urmează niciun tipar obișnuit și trebuie memorate direct.",
          "Când sensul de viitor este deja evident din context sau dintr-un cuvânt de timp, Futur I este adesea omis complet în favoarea Präsens-ului mai simplu.",
        ],
        tips: [
          "Memorează cele șase forme ale lui werden ca pe un set propriu — apar constant, atât cu sensul „a deveni”, cât și în interiorul lui Futur I.",
          "Dacă folosești doar un cuvânt de timp ca să marchezi viitorul, alege implicit Präsens-ul — păstrează Futur I pentru predicții sau promisiuni reale.",
        ],
      },
    },
  },
};
