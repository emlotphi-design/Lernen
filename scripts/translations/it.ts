import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Italian (italiano) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const it: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "Il caso del soggetto — la forma di partenza di ogni sostantivo.",
    objectives: [
      "Identificare il soggetto di una frase tedesca.",
      "Usare il nominativo dopo sein, werden e bleiben.",
    ],
    explanationSimple: [
      "Il nominativo è il caso del soggetto: la persona o la cosa che compie l'azione nella frase.",
      "È anche la forma che trovi sul dizionario, quindi ogni sostantivo che impari parte proprio dal nominativo.",
    ],
    explanationDetailed: [
      "Il tedesco segnala il ruolo di un sostantivo nella frase cambiando il suo articolo, non l'ordine delle parole come spesso fa l'inglese. Il nominativo indica il soggetto: chi o cosa compie l'azione del verbo.",
      "Per trovare il soggetto basta chiedersi wer? (chi?) per le persone o was? (che cosa?) per le cose: qualunque cosa risponda a questa domanda è al nominativo.",
      "Il nominativo compare anche dopo i verbi copulativi sein (essere), werden (diventare) e bleiben (rimanere), perché il sostantivo che li segue non subisce l'azione ma ridefinisce il soggetto stesso.",
    ],
    exampleMeanings: ["L'uomo dorme.", "La donna oggi lavora.", "Il bambino ride forte.", "Lui è il mio insegnante."],
    exerciseTexts: [
      {
        explanation: "Kind è neutro, quindi come soggetto richiede l'articolo nominativo neutro das.",
        grammarRule: "Articolo nominativo neutro: das.",
        prompt: "Completa la frase con l'articolo corretto al Nominativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann è il soggetto che compie l'azione, quindi resta al nominativo: der, non den o dem.",
        grammarRule: "Usa il nominativo per il soggetto di qualsiasi frase.",
        prompt: "In quale frase il Nominativ è usato correttamente?",
      },
      {
        explanation:
          "Esatto — sein/werden/bleiben collegano il soggetto a un sostantivo che lo ridefinisce, quindi anche quel sostantivo resta al nominativo.",
        grammarRule: "Usa il nominativo per il nome del predicato dopo sein, werden e bleiben.",
        prompt: "Il nominativo si usa per il nome del predicato dopo sein, werden e bleiben.",
      },
      {
        explanation: "Frau è femminile, quindi come soggetto richiede l'articolo nominativo femminile die.",
        grammarRule: "Articolo nominativo femminile: die.",
        prompt: "Completa la frase con l'articolo corretto al Nominativ.",
      },
      {
        explanation:
          "Le frasi principali tedesche mettono prima il soggetto (Der Junge), poi il verbo coniugato (liest) in seconda posizione, e infine il resto.",
        grammarRule: "Chiedi wer? o was? per individuare l'elemento al nominativo — qui Der Junge risponde a wer?",
        translation: "Il ragazzo legge un libro.",
        prompt: "Metti le parole nell'ordine corretto.",
      },
      {
        explanation: "Kind è neutro → das; Katze è femminile → die — entrambi sono soggetti al nominativo.",
        grammarRule: "Fai corrispondere il genere di ogni sostantivo al suo articolo nominativo: der/die/das.",
        prompt: "Trascina l'articolo corretto in ogni spazio.",
      },
      {
        explanation: "Der Lehrer è maschile, quindi viene sostituito dal pronome er al nominativo.",
        grammarRule: "Pronome nominativo maschile: er.",
        prompt: "Digita il pronome personale al Nominativ che sostituisce 'der Lehrer'.",
      },
    ],
    conclusion:
      "Il nominativo indica il soggetto della frase e il nome del predicato dopo sein, werden e bleiben. È la forma di base da cui derivano tutti gli altri casi, quindi conviene padroneggiarla bene prima di passare all'accusativo.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa il nominativo per il soggetto di qualsiasi frase.",
          "Usalo per il nome del predicato dopo sein, werden e bleiben.",
          "Chiedi wer? o was? per individuare l'elemento al nominativo.",
        ],
        notes: [
          "Il nominativo è la forma 'di default': è quella che trovi sul dizionario e quella con cui si confrontano tutti gli altri casi.",
          "La desinenza dell'aggettivo prima di un sostantivo al nominativo dipende dall'articolo e dal genere, ad esempio der große Mann — ma è un argomento a parte.",
        ],
        mistakeNotes: [
          "Il verbo sehen richiede un complemento oggetto all'accusativo, non al nominativo — è uno dei primi errori che chiunque commette.",
          "Il nominativo femminile è sempre die, mai der — der è riservato ai sostantivi maschili.",
        ],
        exceptions: [
          "Un gruppo di sostantivi maschili noti come 'sostantivi deboli' o n-Deklination — der Junge, der Name, der Student, der Herr — prende la desinenza -n o -en in tutti i casi tranne il nominativo singolare.",
          "Alcuni sostantivi hanno un genere incerto o discusso a livello regionale (ad esempio der/das Joghurt), ma il dizionario indica sempre la forma standard.",
        ],
        tips: [
          "Quando non sei sicuro di quale caso serva, cerca prima il verbo e chiediti wer oder was tut das? — la risposta è sempre al nominativo.",
          "Impara ogni nuovo sostantivo insieme al suo articolo nominativo (der/die/das): questa sola abitudine previene la maggior parte degli errori di genere in seguito.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "Il caso del complemento oggetto, e un gruppo fisso di preposizioni.",
    objectives: [
      "Identificare il complemento oggetto di un verbo transitivo.",
      "Applicare correttamente il cambio der → den / ein → einen.",
      "Riconoscere le preposizioni fisse che richiedono l'accusativo.",
    ],
    explanationSimple: [
      "L'accusativo indica il complemento oggetto: la persona o la cosa che riceve direttamente l'azione del verbo.",
      "È anche il caso che segue sempre un piccolo gruppo fisso di preposizioni, senza eccezioni.",
    ],
    explanationDetailed: [
      "Una volta individuato il soggetto (nominativo), la domanda successiva è di solito: 'su che cosa agisce il soggetto?' — quello è il complemento oggetto, e in tedesco richiede l'accusativo.",
      "Puoi trovarlo chiedendo wen? (chi?) per le persone o was? (che cosa?) per le cose.",
      "Solo l'articolo maschile cambia visibilmente all'accusativo: der diventa den e ein diventa einen. Gli articoli femminili, neutri e plurali restano identici al nominativo — per questo l'accusativo spesso sembra 'invisibile' finché non compare un sostantivo maschile.",
      "Un gruppo fisso di verbi richiede quasi sempre un complemento all'accusativo — haben, sehen, brauchen, kaufen, essen, trinken, lieben — e un gruppo fisso di preposizioni attiva sempre l'accusativo: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Vedo l'uomo.", "Lei compra una mela.", "Amiamo il nostro cane.", "Il regalo è per te."],
    exerciseTexts: [
      {
        explanation:
          "Hund è maschile, quindi il possessivo subisce lo stesso cambiamento riservato al maschile all'accusativo: unser → unseren.",
        grammarRule: "Solo l'articolo/possessivo maschile cambia all'accusativo.",
        prompt: "Completa la frase con l'articolo corretto all'Akkusativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "sehen richiede un complemento oggetto all'accusativo, e il maschile der diventa den.",
        grammarRule: "Solo l'articolo maschile cambia: der → den, ein → einen.",
        prompt: "In quale frase l'Akkusativ è usato correttamente?",
      },
      {
        explanation: "Esatto — die resta die sia al nominativo sia all'accusativo; cambia solo l'articolo maschile.",
        grammarRule: "Gli articoli femminili, neutri e plurali sono identici al nominativo.",
        prompt: "L'articolo femminile all'accusativo è identico all'articolo femminile al nominativo.",
      },
      {
        explanation: "Apfel è maschile e, come complemento oggetto dopo kaufen, richiede l'accusativo einen.",
        grammarRule: "Articolo indeterminativo accusativo maschile: einen.",
        prompt: "Completa la frase con l'articolo corretto all'Akkusativ.",
      },
      {
        explanation: "Prima il soggetto (Wir), poi il verbo (lieben), infine il complemento oggetto all'accusativo (unseren Hund).",
        grammarRule: "Usa l'accusativo per il complemento oggetto di un verbo transitivo.",
        translation: "Amiamo il nostro cane.",
        prompt: "Metti le parole nell'ordine corretto.",
      },
      {
        explanation: "für attiva sempre l'accusativo, quindi du diventa dich ed er diventa ihn.",
        grammarRule: "Usa sempre l'accusativo dopo durch, für, gegen, ohne, um.",
        prompt: "Trascina il pronome corretto in ogni spazio.",
      },
      {
        explanation:
          "Student è un sostantivo debole (n-Deklination), quindi prende sia l'articolo accusativo den sia la desinenza -en: den Studenten.",
        grammarRule: "Anche i sostantivi deboli prendono -n/-en all'accusativo.",
        prompt: "Digita la forma all'Akkusativ di 'der Student', articolo incluso (è un sostantivo debole).",
      },
    ],
    conclusion:
      "L'accusativo indica il complemento oggetto e segue durch, für, gegen, ohne e um. L'unico cambiamento visibile rispetto al nominativo è l'articolo maschile — der/ein diventano den/einen — tutto il resto rimane invariato.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa l'accusativo per il complemento oggetto di un verbo transitivo.",
          "Chiedi wen? per le persone o was? per le cose per trovarlo.",
          "Solo l'articolo maschile cambia: der → den, ein → einen.",
          "Gli articoli femminili, neutri e plurali sono identici al nominativo.",
          "Usa sempre l'accusativo dopo durch, für, gegen, ohne e um.",
        ],
        notes: [
          "Poiché cambiano solo gli articoli maschili, molti smettono di controllare il genere dei sostantivi femminili e neutri — ma possessivi e pronomi (mein → meinen, ihr → ihren) seguono lo stesso schema riservato al maschile, quindi conviene restare attenti.",
          "Le espressioni di tempo che rispondono a 'per quanto tempo?' o indicano un punto preciso ('quale giorno?') usano spesso l'accusativo senza preposizione: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "sehen richiede un complemento all'accusativo, quindi l'articolo maschile der deve diventare den.",
          "für attiva sempre l'accusativo, quindi il pronome ich diventa mich.",
        ],
        exceptions: [
          "I sostantivi deboli (n-Deklination) come der Student, der Junge e der Name prendono -n anche all'accusativo: den Studenten, den Jungen, den Namen — non solo al dativo e al genitivo.",
          "Alcuni verbi che sembrerebbero richiedere una preposizione reggono in realtà un complemento oggetto diretto all'accusativo, ad esempio Ich frage dich (non 'zu dir').",
        ],
        tips: [
          "I sostantivi femminili, neutri e plurali sono identici al nominativo e all'accusativo: se una frase sembra 'invariata', controlla di nuovo il sostantivo maschile.",
          "Memorizza durch, für, gegen, ohne, um come un blocco unico: sono sempre all'accusativo, senza eccezioni.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "Il caso del complemento di termine — chi riceve o trae beneficio da qualcosa.",
    objectives: [
      "Identificare il complemento di termine di una frase.",
      "Applicare il cambio completo dell'articolo al dativo per tutti i generi.",
      "Riconoscere i verbi e le preposizioni che richiedono solo il dativo.",
    ],
    explanationSimple: [
      "Il dativo indica il complemento di termine: di solito la persona che riceve qualcosa o ne trae beneficio.",
      "Risponde alla domanda wem? (a chi?).",
    ],
    explanationDetailed: [
      "Molte frasi tedesche hanno sia un complemento oggetto (accusativo) sia un complemento di termine (dativo): Ich gebe dem Mann das Buch — 'Do il libro all'uomo.' Dem Mann è chi riceve, quindi è dativo.",
      "Un gruppo fisso di verbi richiede sempre un complemento al dativo, anche se sembrerebbe logico usare l'accusativo — helfen, danken, gefallen, gehören, folgen, glauben e antworten sono i primi che si incontrano.",
      "Il dativo segue anche un gruppo fisso di preposizioni: aus, bei, mit, nach, seit, von, zu.",
      "Con le nove preposizioni 'a doppia reggenza' (in, an, auf, über, unter, vor, hinter, neben, zwischen), usa il dativo per indicare lo stato in luogo — risponde a wo? (dove?) — e l'accusativo per il moto a luogo — risponde a wohin? (verso dove?).",
    ],
    exampleMeanings: [
      "Do il libro all'uomo.",
      "Lei aiuta sua sorella.",
      "Viaggiamo in autobus.",
      "La casa appartiene ai vicini.",
    ],
    exerciseTexts: [
      {
        explanation: "Nachbarn è plurale, e gehören richiede sempre il dativo, quindi die diventa den.",
        grammarRule: "Ogni articolo cambia al dativo; il plurale die diventa den.",
        prompt: "Completa la frase con l'articolo corretto al Dativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "helfen richiede sempre un complemento al dativo, e il femminile die diventa der al dativo.",
        grammarRule: "helfen richiede sempre il dativo, mai l'accusativo.",
        prompt: "In quale frase il Dativ è usato correttamente?",
      },
      {
        explanation:
          "Esatto — die Kinder diventa den Kindern; restano invariati solo i sostantivi che finiscono già in -n o -s.",
        grammarRule: "I sostantivi plurali prendono -n al dativo, a meno che non finiscano già in -n o -s.",
        prompt: "I sostantivi plurali al dativo di solito prendono la desinenza -n.",
      },
      {
        explanation: "Bus è maschile, e mit attiva sempre il dativo, quindi der diventa dem.",
        grammarRule: "Usa sempre il dativo dopo aus, bei, mit, nach, seit, von, zu.",
        prompt: "Completa la frase con l'articolo corretto al Dativ.",
      },
      {
        explanation: "Quando entrambi i complementi sono sostantivi, il dativo (dem Mann) precede di solito l'accusativo (das Buch).",
        grammarRule: "Quando entrambi i complementi della frase sono sostantivi, il dativo viene di solito per primo.",
        translation: "Do il libro all'uomo.",
        prompt: "Metti le parole nell'ordine corretto.",
      },
      {
        explanation: "gehören richiede sempre il dativo: sie diventa ihr ed er diventa ihm.",
        grammarRule: "Un gruppo fisso di verbi richiede sempre un complemento al dativo — gehören è uno di questi.",
        prompt: "Trascina il pronome corretto in ogni spazio.",
      },
      {
        explanation: "Il plurale die Kinder diventa den Kindern al dativo: l'articolo cambia in den e il sostantivo prende -n.",
        grammarRule: "Ogni articolo cambia al dativo; i sostantivi plurali prendono -n.",
        prompt: "Digita la forma plurale al Dativ di 'die Kinder', articolo incluso (ad esempio 'den …').",
      },
    ],
    conclusion:
      "Il dativo indica il complemento di termine, segue aus/bei/mit/nach/seit/von/zu e cambia ogni articolo — con una -n caratteristica aggiunta ai sostantivi plurali. Alcuni verbi come helfen e danken richiedono sempre un complemento al dativo.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa il dativo per il complemento di termine — di solito chi riceve o beneficia di qualcosa.",
          "Chiedi wem? per trovarlo.",
          "Ogni articolo cambia: der → dem, die → der, das → dem, die (plurale) → den.",
          "I sostantivi plurali prendono -n al dativo, a meno che non finiscano già in -n o -s: die Kinder → den Kindern.",
          "Usa sempre il dativo dopo aus, bei, mit, nach, seit, von, zu.",
          "Con le preposizioni a doppia reggenza, il dativo risponde a wo?, l'accusativo a wohin?.",
        ],
        notes: [
          "I verbi che reggono il dativo non prendono mai un complemento oggetto all'accusativo per la persona coinvolta — helfen, ad esempio, è sempre 'jemandem helfen', mai 'jemanden helfen'.",
          "Nota sull'ordine delle parole: quando entrambi i complementi della frase sono sostantivi, il dativo viene di solito per primo: Ich gebe dem Mann das Buch. Quando sono entrambi pronomi, viene prima l'accusativo: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "helfen richiede sempre il dativo, mai l'accusativo — senza eccezioni.",
          "mit è sempre seguito dal dativo, e il sostantivo plurale richiede la desinenza -n: Kinder → Kindern.",
        ],
        exceptions: [
          "Un piccolo gruppo di verbi e aggettivi si accompagna al dativo per ragioni idiomatiche — gefallen (piacere), schmecken (avere un buon sapore) e stehen (stare bene addosso) mettono tutti la persona al dativo: Das Kleid steht dir gut.",
          "I sostantivi che al plurale finiscono già in -n o -s non prendono una -n aggiuntiva al dativo: den Autos, den Frauen.",
        ],
        tips: [
          "Il dativo plurale finisce quasi sempre in -n: notare questa -n su un sostantivo è spesso il modo più rapido per riconoscere a colpo d'occhio una frase al dativo.",
          "Impara aus, bei, mit, nach, seit, von, zu come un unico gruppo: non c'è una logica da ricavare oltre all'elenco stesso.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "Il tempo passato più comune del tedesco — come si forma e quando si usa.",
    objectives: [
      "Formare il Perfekt con haben o sein più un participio passato.",
      "Scegliere correttamente tra haben e sein.",
      "Riconoscere i participi passati regolari e irregolari.",
    ],
    explanationSimple: [
      "Il Perfekt è il modo in cui il tedesco parlato racconta di solito il passato: non un'unica forma verbale, ma haben o sein insieme a un participio passato.",
      "La struttura è sempre la stessa, chiunque parli: il verbo ausiliare in seconda posizione e il participio alla fine della frase.",
    ],
    explanationDetailed: [
      "La maggior parte dei verbi usa haben come ausiliare. I verbi di movimento (gehen, fahren, kommen) o di cambiamento di stato (aufwachen, werden) usano di solito sein.",
      "I verbi regolari (deboli) formano il participio con ge- + radice + -t: machen → gemacht, spielen → gespielt. I verbi irregolari (forti) spesso cambiano la vocale della radice e terminano in -en: sprechen → gesprochen, gehen → gegangen.",
      "Poiché il participio va alla fine della frase, tutto il resto — complementi, espressioni di tempo, negazione — si colloca tra l'ausiliare e il participio.",
    ],
    exampleMeanings: ["Ho letto il libro.", "Siamo andati a Berlino.", "Lei ha lavorato ieri.", "Lui si è svegliato presto."],
    exerciseTexts: [
      {
        explanation: "fahren descrive un movimento da un luogo a un altro, quindi richiede sein: Wir sind gefahren.",
        grammarRule: "Usa sein per i verbi di movimento o di cambiamento di stato.",
        prompt: "Quale ausiliare richiede 'fahren' al Perfekt?",
      },
    ],
    quizTexts: [
      {
        explanation: "lesen richiede haben, e il suo participio irregolare gelesen si colloca alla fine della frase.",
        grammarRule: "Usa haben come ausiliare per la maggior parte dei verbi.",
        prompt: "In quale frase il Perfekt è formato correttamente?",
      },
      {
        explanation: "Esatto — telefonieren → telefoniert, senza ge-.",
        grammarRule: "I verbi che finiscono in -ieren non prendono mai ge-.",
        prompt: "Verbi come telefonieren non prendono mai il prefisso ge- al Perfekt.",
      },
      {
        explanation: "fahren è un verbo di movimento, quindi richiede sein: sind gefahren.",
        grammarRule: "Usa sein per i verbi di movimento o di cambiamento di stato.",
        prompt: "Completa la frase con l'ausiliare corretto.",
      },
      {
        explanation: "essen è irregolare: gegessen, non la forma regolare geesst.",
        grammarRule: "I participi irregolari spesso cambiano la vocale della radice e finiscono in -en.",
        prompt: "Digita il participio passato di 'essen'.",
      },
    ],
    conclusion:
      "Il Perfekt si forma con haben o sein più un participio passato collocato alla fine della frase. La maggior parte dei verbi richiede haben; i verbi di movimento o di cambiamento di stato richiedono sein. I participi regolari finiscono in -t, quelli irregolari spesso in -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa haben come ausiliare per la maggior parte dei verbi.",
          "Usa sein per i verbi di movimento o di cambiamento di stato.",
          "Participio regolare: ge- + radice + -t.",
          "I participi irregolari spesso finiscono in -en e possono cambiare la vocale della radice.",
          "Il participio va sempre alla fine della frase.",
        ],
        notes: [
          "Vale la pena memorizzare direttamente alcuni participi irregolari comuni invece di ricavarli: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "I verbi con prefisso separabile inseriscono -ge- tra il prefisso e la radice: aufwachen → aufgewacht, non geaufwacht.",
        ],
        mistakeNotes: ["fahren è un verbo di movimento, quindi richiede sein, non haben."],
        exceptions: [
          "I verbi che finiscono in -ieren (telefonieren, studieren) non prendono mai ge-: telefoniert, studiert.",
          "Anche i verbi con prefisso inseparabile (be-, ver-, er-, ge-, ent-, zer-) omettono ge-: besuchen → besucht, verstehen → verstanden.",
        ],
        tips: [
          "Se hai dubbi tra haben e sein, chiediti: questo verbo descrive un movimento da A a B, o un cambiamento di stato? Se sì, è quasi certamente sein.",
          "Impara i nuovi verbi irregolari con tutte e tre le forme insieme — infinito, passato semplice, participio — proprio come impari der/die/das per un nuovo sostantivo.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Vocabolario di base per parlare dei membri della famiglia.",
    explanationSimple: [
      "Questa lezione presenta le parole tedesche per la famiglia più stretta — quelle che userai continuamente non appena inizierai a raccontare la tua vita.",
    ],
    explanationDetailed: [
      "I sostantivi di famiglia seguono schemi di genere regolari che già conosci: la maggior parte dei nomi di persona è der o die a seconda del genere della persona, con poche eccezioni fisse come das Kind (il bambino) e das Baby (il neonato), che sono grammaticalmente neutri indipendentemente dal genere del bambino.",
      "I possessivi (mein, meine) concordano con il genere del sostantivo proprio come ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["Questa è mia madre.", "Mio fratello vive a Berlino.", "Ho due sorelle."],
    exerciseTexts: [
      {
        explanation: "Schwester è femminile: die Schwester.",
        grammarRule: "I sostantivi che indicano membri della famiglia prendono il genere della persona che nominano.",
        prompt: "Digita la parola tedesca per 'sorella'.",
      },
    ],
    quizTexts: [
      { explanation: "der Vater significa 'padre'.", grammarRule: "der Vater è maschile.", prompt: "Quale parola significa 'padre'?" },
      {
        explanation: "Esatto — das Kind è sempre neutro.",
        grammarRule: "Alcuni nomi di persona come das Kind e das Baby sono fissi al neutro.",
        prompt: "'das Kind' è grammaticalmente neutro, indipendentemente dal genere del bambino.",
      },
      {
        explanation: "Schwestern è il plurale di Schwester.",
        grammarRule: "La maggior parte dei sostantivi femminili prende -n o -en al plurale.",
        prompt: "Completa la frase.",
      },
    ],
    conclusion:
      "Il vocabolario della famiglia è grammaticalmente regolare — sostantivi con genere per le persone, con das Kind come eccezione fissa al neutro — e offre subito un'occasione per esercitarsi con i possessivi.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["madre", "padre", "sorella", "fratello", "genitori (plurale)", "bambino/bambina", "nonna", "nonno"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Un breve testo quotidiano su un'ordinazione al bar, con domande di comprensione.",
    explanationSimple: ["Una breve scena in un bar — leggila una prima volta per capire l'idea generale, prima di controllare ogni singola parola."],
    explanationDetailed: [
      "A livello A1 conviene leggere in due passaggi: prima per cogliere la situazione generale (chi, dove, cosa succede), poi una seconda volta prestando attenzione alle parole singole che non avevi colto la prima volta.",
      "Non serve capire ogni parola per rispondere alle domande di comprensione qui sotto — concentrati su ciò che cambia davvero il senso della scena.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      { explanation: "Anna ordina un caffè (einen Kaffee), non un tè.", grammarRule: "bestellen + complemento oggetto all'accusativo.", prompt: "Anna ordina un tè." },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — si siede a un tavolo vicino alla finestra.",
        grammarRule: "sich setzen an + accusativo.",
        prompt: "Dove si siede Anna?",
      },
      {
        explanation: "Esatto — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Due verbi coordinati uniti da und.",
        prompt: "Anna legge un libro mentre beve il suo caffè.",
      },
      {
        explanation: "Minuten (minuti) — Nach zehn Minuten.",
        grammarRule: "nach + espressione di tempo al dativo.",
        prompt: "Completa: il cameriere porta l'ordinazione dopo dieci ___.",
      },
    ],
    conclusion:
      "Una breve scena al bar costruita interamente con vocabolario di livello A1 e frasi principali semplici — un buon esercizio di lettura globale prima di preoccuparsi di ogni singola parola.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Un breve annuncio ferroviario — ascolta il binario e l'orario di partenza.",
    explanationSimple: ["Un breve annuncio da stazione — l'audio non è ancora disponibile, quindi leggi la trascrizione come se la stessi ascoltando."],
    explanationDetailed: [
      "Gli annunci di stazione e aeroporto in tedesco seguono una struttura molto prevedibile — ed è proprio questa prevedibilità a renderli un buon primo esercizio di ascolto: numero del treno, binario (Gleis) e orario, quasi sempre nello stesso ordine.",
      "Una volta che riesci a individuare con sicurezza il numero del binario e l'orario in un annuncio, puoi applicare la stessa strategia d'ascolto a qualunque audio con una struttura simile (previsioni del tempo, istruzioni di sicurezza, eccetera).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      { explanation: "Gleis 7 — binario 7.", grammarRule: "von + numero del binario al dativo.", prompt: "Da quale binario parte il treno?" },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — binario 7.",
        grammarRule: "von + dativo.",
        prompt: "Da dove parte il treno per Monaco?",
      },
      {
        explanation: "vierzehn Uhr dreißig significa 14:30.",
        grammarRule: "Orario parlato in formato 24 ore: [ora] Uhr [minuti].",
        prompt: "Digita l'orario di partenza in cifre, formato 24 ore (ad esempio 09:15).",
      },
    ],
    conclusion:
      "Gli annunci di stazione sono formulaici — numero del treno, binario, orario — il che li rende un esercizio di ascolto ideale per iniziare, una volta riconosciuto lo schema da seguire.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Esercitati a presentarti ad alta voce — nome, provenienza e qualche altro dettaglio.",
    explanationSimple: [
      "Presentarsi è una delle prime cose che dirai davvero ad alta voce in tedesco — poche frasi brevi e fisse che userai di continuo.",
    ],
    explanationDetailed: [
      "L'esercizio di conversazione qui funziona meglio se fatto ad alta voce, non solo mentalmente: pronuncia ogni spunto qui sotto come una frase completa prima di passare al successivo, anche se nessuno ti sta ascoltando.",
      "Non c'è ancora una funzione di registrazione o valutazione del parlato: considera questo un esercizio di conversazione autonomo, usando gli spunti e le frasi di esempio come una traccia da adattare.",
    ],
    exampleMeanings: ["Mi chiamo Anna.", "Vengo dalla Germania.", "Sono una studentessa."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … è il modo standard per dire da dove vieni.",
        grammarRule: "kommen aus + nome di paese/città al dativo.",
        prompt: "Digita il tedesco per 'Vengo da …'.",
      },
    ],
    quizTexts: [
      {
        explanation: "Il verbo heißen si costruisce direttamente con il nome come complemento: Ich heiße Anna.",
        grammarRule: "heißen + nome, senza bisogno di un verbo aggiuntivo.",
        prompt: "Quale frase dice correttamente 'Mi chiamo Anna'?",
      },
      {
        explanation: "heißt è la forma di heißen per du.",
        grammarRule: "du heißt (coniugazione regolare dei verbi in -en).",
        prompt: "Completa: come si chiede il nome a qualcuno in modo informale.",
      },
    ],
    conclusion:
      "Presentarsi si costruisce con tre schemi di frase fissi — nome, provenienza, professione — che vale la pena esercitare molto ad alta voce, perché li userai fin dal primo giorno.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Di' il tuo nome:",
          "Di' da dove vieni:",
          "Di' cosa fai:",
          "Chiedi il nome a qualcun altro:",
          "Metti insieme le tue tre frasi in una breve presentazione.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Un quiz di ripasso misto su casi grammaticali, vocabolario quotidiano e ordine base della frase.",
    explanationSimple: [
      "Un quiz di puro ripasso — nessuna nuova spiegazione, solo un insieme misto di domande su tutto ciò che è stato trattato fino al livello A1.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "Il soggetto della frase richiede il nominativo: Der Mann.",
        grammarRule: "Usa il nominativo per il soggetto di qualsiasi frase.",
        prompt: "Quale articolo è corretto? '___ Mann schläft.' (soggetto)",
      },
      {
        explanation: "sehen richiede un complemento all'accusativo, e il maschile der diventa den.",
        grammarRule: "Solo l'articolo maschile cambia all'accusativo.",
        prompt: "Completa con l'articolo corretto all'Akkusativ.",
      },
      { explanation: "die Schwester.", grammarRule: "Ripasso del vocabolario di famiglia.", prompt: "Digita la parola tedesca per 'sorella'." },
      {
        explanation: "Prima il soggetto, poi il verbo coniugato in seconda posizione.",
        grammarRule: "Ordine base delle parole in tedesco: soggetto, verbo, resto.",
        translation: "Mi chiamo Anna.",
        prompt: "Metti le parole nell'ordine corretto.",
      },
    ],
    conclusion: "Un breve ripasso misto su casi grammaticali, vocabolario e ordine delle parole — un buon controllo prima di proseguire oltre il livello A1.",
    details: { kind: "none" },
  },
  "grammar/b2/genitiv": {
    summary: "Il caso del possesso — sempre più raro nel parlato, ma ancora essenziale per leggere e scrivere.",
    objectives: [
      "Riconoscere il genitivo come il caso del possesso.",
      "Aggiungere la desinenza corretta al sostantivo maschile e neutro.",
      "Usare il genitivo dopo trotz, wegen, während e statt.",
    ],
    explanationSimple: [
      "Il genitivo indica il possesso: a chi o a cosa appartiene qualcosa.",
      "Segue anche un piccolo gruppo fisso di preposizioni: trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "A differenza degli altri tre casi, il genitivo cambia il sostantivo stesso, non solo il suo articolo — i sostantivi maschili e neutri aggiungono -s o -es, mentre quelli femminili e plurali restano identici.",
      "Nel tedesco parlato di tutti i giorni, von + dativo prende spesso il posto del genitivo (von meinem Vater invece di meines Vaters) — ma il genitivo resta la forma attesa, più formale, nella scrittura e nel parlato accurato, e lo incontrerai continuamente leggendo.",
      "L'ordine delle parole al genitivo colloca il possessore dopo il sostantivo che modifica — das Auto meines Vaters, non meines Vaters Auto — tranne con i nomi propri, che vengono prima: Annas Auto.",
    ],
    exampleMeanings: [
      "L'auto di mio padre è nuova.",
      "Mi piace il colore della casa.",
      "Il nome della donna è Anna.",
      "Nonostante la pioggia, andiamo a fare una passeggiata.",
    ],
    exerciseTexts: [
      {
        explanation: "Frau è femminile, quindi al genitivo prende der — il sostantivo stesso non cambia.",
        grammarRule: "Articolo genitivo femminile: der.",
        prompt: "Completa la frase con l'articolo corretto al Genitiv.",
      },
    ],
    quizTexts: [
      {
        explanation: "Vaters prende la desinenza -s del genitivo dopo il possessivo meines, indicando di chi è l'auto.",
        grammarRule: "I sostantivi maschili al genitivo aggiungono -s o -es.",
        prompt: "Quale frase usa correttamente il Genitiv?",
      },
      {
        explanation: "Esatto — solo i sostantivi maschili e neutri prendono una desinenza genitiva; quelli femminili e plurali restano invariati.",
        grammarRule: "Desinenze genitive: -s/-es solo per maschile e neutro.",
        prompt: "I sostantivi maschili e neutri di solito aggiungono -s o -es al genitivo, mentre quelli femminili non cambiano mai.",
      },
      {
        explanation: "Haus è neutro, quindi al genitivo prende des, e il sostantivo stesso aggiunge -es: Hauses.",
        grammarRule: "Articolo genitivo neutro: des, sostantivo +(e)s.",
        prompt: "Completa la frase con l'articolo corretto al Genitiv.",
      },
      {
        explanation: "Trotz è una delle preposizioni fisse che richiedono sempre il genitivo.",
        grammarRule: "Preposizioni genitive: während, trotz, wegen, statt.",
        prompt: "Digita la preposizione genitiva che significa 'nonostante'.",
      },
    ],
    conclusion:
      "Il genitivo indica il possesso e segue un piccolo gruppo di preposizioni come trotz, wegen e während. I sostantivi maschili e neutri aggiungono -s o -es; quelli femminili e plurali restano invariati. Nel parlato informale viene sempre più spesso sostituito da von + dativo, ma resta essenziale nella lettura e nella scrittura formale.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa il genitivo per indicare il possesso — a chi o a cosa appartiene qualcosa.",
          "Usalo dopo le preposizioni fisse trotz, wegen, während e statt.",
          "Aggiungi -s o -es ai sostantivi maschili e neutri; quelli femminili e plurali non cambiano.",
        ],
        notes: [
          "Nel tedesco parlato di tutti i giorni, von + dativo sostituisce spesso il genitivo (von meinem Vater invece di meines Vaters) — ma il genitivo resta atteso nella scrittura e nel parlato formale.",
          "L'ordine delle parole al genitivo colloca il possessore dopo il sostantivo che modifica: das Auto meines Vaters, non meines Vaters Auto (tranne con i nomi propri: Annas Auto).",
        ],
        mistakeNotes: [
          "Anche il possessivo richiede la desinenza genitiva -es, e il sostantivo richiede -s — cambiano insieme.",
          "L'articolo des da solo non basta — anche i sostantivi neutri aggiungono -es al genitivo.",
        ],
        exceptions: [
          "I sostantivi neutri/maschili monosillabici prendono di solito -es (des Hauses, des Mannes); quelli più lunghi spesso prendono solo -s (des Computers, des Lehrers).",
          "Anche i maschili deboli (n-Deklination) come der Student o der Junge prendono -en al genitivo, non -s: des Studenten, non des Studentens.",
        ],
        tips: [
          "Se puoi riformulare una frase con 'von + dativo' e suona ancora naturale, lì il genitivo è di solito facoltativo — ma riconoscilo comunque, perché lo incontrerai continuamente nella scrittura.",
          "Impara trotz, wegen, während e statt come un gruppo unico: sono le quattro preposizioni genitive che incontrerai più spesso.",
        ],
      },
    },
  },
  "grammar/a1/praesens": {
    summary: "Il presente tedesco — desinenze regolari, e come copre anche ciò che l'italiano esprime con 'sto facendo'.",
    objectives: [
      "Coniugare i verbi regolari al Präsens.",
      "Usare il Präsens sia per le azioni presenti sia per il futuro prossimo.",
      "Riconoscere la vocale di appoggio -e- per le radici che finiscono in -t o -d.",
    ],
    explanationSimple: [
      "Il Präsens è il presente tedesco — usato per ciò che accade ora, per fatti generali e spesso anche per il futuro prossimo.",
      "I verbi regolari aggiungono una desinenza prevedibile alla radice, a seconda di chi compie l'azione.",
    ],
    explanationDetailed: [
      "Per coniugare un verbo regolare, togli -en dall'infinito per ottenere la radice, poi aggiungi la desinenza corrispondente al soggetto: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "Il tedesco non ha una forma progressiva separata — ich spiele copre sia 'gioco' sia 'sto giocando'. È il contesto a chiarire il significato.",
      "Il Präsens si usa comunemente anche per parlare del futuro prossimo, specialmente con un'espressione di tempo: Ich fliege morgen nach Berlin (Domani volo a Berlino).",
    ],
    exampleMeanings: [
      "Gioco/sto giocando a calcio.",
      "Stai imparando il tedesco.",
      "Oggi lui lavora.",
      "Domani andiamo a Berlino.",
    ],
    exerciseTexts: [
      {
        explanation: "du prende la desinenza regolare -st: spiel + st = spielst.",
        grammarRule: "Desinenza Präsens per du: -st.",
        prompt: "Digita la forma corretta al Präsens di 'spielen' per 'du'.",
      },
    ],
    quizTexts: [
      {
        explanation: "La radice di arbeiten finisce in -t, quindi la forma per er richiede la vocale di appoggio: arbeitet, non arbeit.",
        grammarRule: "Inserisci una -e- prima della desinenza quando la radice finisce in -t o -d.",
        prompt: "Quale frase usa correttamente il Präsens?",
      },
      {
        explanation:
          "Esatto — il tedesco usa spesso il Präsens al posto di un tempo futuro separato quando il contesto o un'espressione di tempo rendono già chiaro il futuro.",
        grammarRule: "Usa il Präsens per le azioni nel futuro prossimo con un'espressione di tempo.",
        prompt: "Il Präsens può essere usato per parlare del futuro prossimo, specialmente con un'espressione di tempo come morgen.",
      },
      {
        explanation: "wir prende la desinenza -en, che per un verbo regolare coincide con l'infinito stesso: wohnen.",
        grammarRule: "Desinenza Präsens per wir: -en (uguale all'infinito).",
        prompt: "Digita la forma corretta al Präsens di 'wohnen' per 'wir'.",
      },
      {
        explanation: "ich prende la desinenza -e: kauf + e = kaufe.",
        grammarRule: "Desinenza Präsens per ich: -e.",
        prompt: "Completa la frase con la forma corretta al Präsens di 'kaufen'.",
      },
    ],
    conclusion:
      "Il Präsens usa sei desinenze prevedibili — -e, -st, -t, -en, -t, -en — aggiunte alla radice del verbo, con una vocale di appoggio -e- per le radici che finiscono in -t o -d. Copre sia il presente sia il futuro prossimo, quindi padroneggiare queste desinenze è un grande passo avanti ancora prima di arrivare ai tempi passati.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Togli -en dall'infinito per trovare la radice.",
          "Aggiungi la desinenza corrispondente al soggetto: -e, -st, -t, -en, -t, -en.",
          "Inserisci una -e- prima della desinenza se la radice finisce in -t o -d (arbeiten → du arbeitest).",
        ],
        notes: [
          "Le desinenze per du ed er/sie/es sono quelle che più spesso richiedono la vocale di appoggio -e-, perché -st e -t sono difficili da pronunciare subito dopo una radice che finisce in -t/-d.",
          "Alcuni verbi molto comuni sono irregolari solo nelle forme du/er (fahren → du fährst, er fährt) — non fanno parte dello schema regolare trattato qui.",
        ],
        mistakeNotes: [
          "Le radici che finiscono in -t richiedono una -e- prima della desinenza -st, altrimenti la parola diventa impronunciabile.",
          "Ogni soggetto richiede la propria desinenza corrispondente — ich prende sempre -e, mai la forma -t di er.",
        ],
        exceptions: [
          "I verbi forti con cambio vocalico come fahren, sehen e sprechen cambiano la vocale solo nelle forme du ed er/sie/es (du fährst, er fährt) — uno schema separato da quello regolare visto qui.",
          "Sein e haben sono completamente irregolari e vanno memorizzati nelle loro forme proprie: ich bin, du bist, er ist…",
        ],
        tips: [
          "Impara le sei desinenze come un unico blocco fisso — una volta automatizzate, ogni verbo regolare si coniuga allo stesso modo.",
          "Quando la radice di un nuovo verbo finisce in -t, -d o un gruppo consonantico come -ffn (öffnen), aspettati la vocale di appoggio -e- prima di -st e -t.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "Il passato semplice usato nella scrittura e per verbi comuni come sein e haben — come si differenzia dal Perfekt.",
    objectives: [
      "Coniugare i verbi regolari (deboli) al Präteritum.",
      "Riconoscere quando il Präteritum è preferibile al Perfekt.",
      "Usare correttamente sein e haben nelle loro forme comuni al Präteritum.",
    ],
    explanationSimple: [
      "Il Präteritum è l'altro tempo passato tedesco — usato soprattutto nella scrittura, e nel parlato per sein, haben e i verbi modali.",
      "I verbi regolari aggiungono -te più una desinenza personale alla radice.",
    ],
    explanationDetailed: [
      "Mentre il Perfekt domina il tedesco parlato per la maggior parte dei verbi, il Präteritum è il tempo passato normale nel tedesco scritto — racconti, articoli di giornale e testi formali lo usano quasi sempre.",
      "I verbi regolari (deboli) formano il Präteritum aggiungendo -te alla radice, seguita da una desinenza personale: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Anche nel parlato, alcuni verbi molto comuni compaiono quasi sempre al Präteritum invece che al Perfekt: war (era), hatte (aveva) e i verbi modali come konnte (poteva) o wollte (voleva).",
    ],
    exampleMeanings: [
      "Ho fatto i compiti.",
      "Ieri lei ha suonato il pianoforte.",
      "Lui era stanco.",
      "Non avevamo tempo.",
    ],
    exerciseTexts: [
      {
        explanation: "sie (loro) prende la desinenza -ten, come wir: spiel + ten = spielten.",
        grammarRule: "Desinenza Präteritum per sie (plurale): -ten.",
        prompt: "Digita la forma corretta al Präteritum di 'spielen' per 'sie' (loro).",
      },
    ],
    quizTexts: [
      {
        explanation: "La radice di arbeiten finisce in -t, quindi serve la vocale di appoggio prima di -te: arbeitete.",
        grammarRule: "Inserisci una -e- prima di -te quando la radice finisce in -t o -d.",
        prompt: "Quale frase usa correttamente il Präteritum?",
      },
      {
        explanation:
          "Esatto — sia ich sia er/sie/es aggiungono semplicemente -te, a differenza del Präsens dove differiscono (-e contro -t).",
        grammarRule: "Le desinenze Präteritum di ich e er sono identiche: -te.",
        prompt: "Al Präteritum, la forma per ich e quella per er/sie/es usano esattamente la stessa desinenza.",
      },
      {
        explanation: "Haben è irregolare al Präteritum — la forma per wir è hatten, non una regolare habten.",
        grammarRule: "La radice del Präteritum di haben è irregolare: hatt-.",
        prompt: "Digita la forma al Präteritum di 'haben' per 'wir'.",
      },
      {
        explanation: "ich prende -te: mach + te = machte.",
        grammarRule: "Desinenza Präteritum per ich: -te.",
        prompt: "Completa la frase con la forma corretta al Präteritum di 'machen'.",
      },
    ],
    conclusion:
      "Il Präteritum aggiunge -te più una desinenza personale alla radice di un verbo regolare, con ich e er/sie/es che condividono la stessa forma. È il tempo passato predefinito nella scrittura e — per sein, haben e i verbi modali — la scelta naturale anche nel parlato, anche se altrimenti il Perfekt domina la conversazione quotidiana.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Aggiungi -te alla radice di un verbo regolare, poi la desinenza personale: -te, -test, -te, -ten, -tet, -ten.",
          "Inserisci una -e- prima di -te se la radice finisce in -t o -d (arbeiten → er arbeitete).",
          "Preferisci il Präteritum per sein, haben e i verbi modali, anche nel parlato.",
        ],
        notes: [
          "A differenza del Präsens, le forme ich ed er/sie/es sono identiche al Präteritum — entrambe prendono semplicemente -te.",
          "Il Präteritum di sein (war) e haben (hatte) sono tra le prime forme irregolari del passato che la maggior parte degli studenti memorizza, perché si usano continuamente.",
        ],
        mistakeNotes: [
          "Le radici che finiscono in -t richiedono la vocale di appoggio -e- prima di -te, la stessa regola del Präsens.",
          "Haben è irregolare al Präteritum — hatte, non la forma regolare habte.",
        ],
        exceptions: [
          "I verbi forti (irregolari) cambiano completamente la vocale della radice invece di aggiungere -te: gehen → ging, sehen → sah — uno schema diverso da quello regolare visto qui.",
          "Il Präteritum di sein (war) e di haben (hatte) non seguono affatto lo schema regolare in -te e si memorizzano semplicemente.",
        ],
        tips: [
          "Se stai raccontando una storia o scrivendo qualcosa di formale, usa di default il Präteritum — è il naturale tempo narrativo del tedesco.",
          "Nella conversazione quotidiana puoi di solito cavartela con il Perfekt per la maggior parte dei verbi — tranne war, hatte e i verbi modali, che suonano quasi sempre più naturali al Präteritum anche nel parlato.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Parlare del futuro con werden + infinito — e quando i tedeschi usano semplicemente il presente.",
    objectives: [
      "Formare il Futur I con werden + infinito.",
      "Riconoscere quando i tedeschi usano il Futur I invece del Präsens per esprimere il futuro.",
      "Coniugare werden correttamente in tutte le persone.",
    ],
    explanationSimple: [
      "Il Futur I parla del futuro usando una forma coniugata di werden più l'infinito del verbo principale.",
      "Nel tedesco di tutti i giorni, il Präsens viene in realtà usato più spesso per il futuro — il Futur I è riservato a previsioni, promesse e enfasi.",
    ],
    explanationDetailed: [
      "La struttura è fissa: soggetto + werden coniugato (seconda posizione) + resto della frase + infinito (posizione finale). Ich werde morgen arbeiten — 'Domani lavorerò.'",
      "Werden è irregolare: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — queste sei forme vanno memorizzate invece che ricavate da una regola regolare.",
      "I tedeschi preferiscono spesso il Präsens con un'espressione di tempo per gli eventi futuri programmati (Ich fliege morgen) e riservano il Futur I a previsioni, promesse o ipotesi sul futuro: Es wird morgen regnen (Domani pioverà).",
    ],
    exampleMeanings: [
      "Domani lavorerò.",
      "Pioverà presto.",
      "Risolveremo il problema.",
      "Lei ti chiamerà.",
    ],
    exerciseTexts: [
      {
        explanation: "ich prende la forma irregolare werde.",
        grammarRule: "Forma di werden per ich: werde.",
        prompt: "Completa la frase con la forma corretta di werden.",
      },
    ],
    quizTexts: [
      {
        explanation: "L'infinito arbeiten va collocato proprio alla fine, dopo morgen.",
        grammarRule: "Colloca l'infinito alla fine della frase.",
        prompt: "Quale frase forma correttamente il Futur I?",
      },
      {
        explanation: "Esatto — è tutta la struttura: werden (coniugato) più un infinito alla fine.",
        grammarRule: "Futur I = werden (coniugato) + infinito.",
        prompt: "Il Futur I si costruisce con una forma coniugata di werden più l'infinito del verbo principale.",
      },
      {
        explanation: "La forma irregolare di werden per du è wirst.",
        grammarRule: "Forma di werden per du: wirst.",
        prompt: "Digita la forma corretta di werden per 'du'.",
      },
      {
        explanation: "La forma irregolare di werden per er è wird.",
        grammarRule: "Forma di werden per er: wird.",
        prompt: "Digita la forma corretta di werden per 'er'.",
      },
      {
        explanation: "es (esso) prende la stessa forma di er: wird.",
        grammarRule: "Forma di werden per es: wird.",
        prompt: "Completa la frase con la forma corretta di werden.",
      },
      {
        explanation: "Lösen resta all'infinito puro, alla fine della frase.",
        grammarRule: "L'infinito del Futur I è sempre nella sua forma pura (non coniugata).",
        prompt: "Quale frase usa correttamente il Futur I?",
      },
      {
        explanation:
          "Esatto — Ich fliege morgen suona più naturale di Ich werde morgen fliegen, anche se entrambe sono grammaticalmente corrette.",
        grammarRule: "Usa il Futur I soprattutto per previsioni, promesse e ipotesi.",
        prompt: "I tedeschi preferiscono di solito il Präsens al Futur I quando un'espressione di tempo rende già chiaro il futuro.",
      },
      {
        explanation: "wir prende werden — la stessa forma dell'infinito stesso.",
        grammarRule: "Forma di werden per wir: werden.",
        prompt: "Digita la forma corretta di werden per 'wir'.",
      },
      {
        explanation: "sie (lei) prende la stessa forma di er: wird.",
        grammarRule: "Forma di werden per sie (singolare): wird.",
        prompt: "Completa la frase con la forma corretta di werden.",
      },
      {
        explanation:
          "Wird da solo, senza un infinito che segue, significa 'diventare' — Er wird Arzt indica un cambiamento di stato, non una previsione futura.",
        grammarRule: "Werden senza infinito significa 'diventare', non è un marcatore di futuro.",
        prompt: "Quale frase usa werden nel senso di 'diventare', non come tempo futuro?",
      },
    ],
    conclusion:
      "Il Futur I combina una forma coniugata di werden con un infinito alla fine della frase. È meno comune nel parlato quotidiano di quanto si possa pensare — i tedeschi preferiscono spesso il Präsens per gli eventi programmati — ma è la scelta naturale per previsioni, promesse e ipotesi su ciò che accadrà.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Costruisci il Futur I con una forma coniugata di werden più l'infinito del verbo principale.",
          "Metti l'infinito alla fine della frase.",
          "Usa il Futur I per previsioni, promesse e ipotesi sul futuro — non per programmi di routine.",
        ],
        notes: [
          "Per i programmi quotidiani con un'espressione di tempo chiara, il Präsens è di solito più naturale: Ich fliege morgen suona più idiomatico di Ich werde morgen fliegen, anche se entrambe sono corrette.",
          "Werden da solo (senza un infinito che segue) significa 'diventare' — Er wird Arzt (Sta diventando medico) — quindi è il contesto a indicare quale significato è inteso.",
        ],
        mistakeNotes: [
          "L'infinito deve andare proprio alla fine della frase, dopo qualsiasi altra informazione come morgen.",
          "Il Futur I usa l'infinito puro — senza zu davanti.",
        ],
        exceptions: [
          "Werden è uno dei pochi verbi davvero irregolari del tedesco — le sue forme al Präsens (wirst, wird) non seguono alcuno schema regolare e vanno memorizzate direttamente.",
          "Quando il significato futuro è già chiaro dal contesto o da un'espressione di tempo, il Futur I viene spesso omesso a favore del più semplice Präsens.",
        ],
        tips: [
          "Memorizza le sei forme di werden come un piccolo gruppo a sé — ricorrono continuamente, sia come 'diventare' sia dentro il Futur I.",
          "Se stai usando solo un'espressione di tempo per segnalare il futuro, preferisci di default il Präsens — riserva il Futur I a previsioni o promesse autentiche.",
        ],
      },
    },
  },
};
