import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Kurdish / Kurmancî (Kurdî) — Latin script. One entry per lesson, keyed by "type/level/slug".
// See generate-lesson-explanations.ts for how this is composed with every other language file
// and applied.
export const ku: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "Rewşa hokerî (Nominativ) — û şiklê ku her navek pê dest pê dike.",
    objectives: ["Hokerê hevokeke almanî nas bikin", "Piştî sein, werden û bleiben rewşa Nominativ bi kar bînin"],
    explanationSimple: [
      "Nominativ rewşa hokerê ye — kes an tişta ku di hevokê de kiryarê pêk tîne.",
      "Ev di heman demê de şiklê ku hûn di ferhengê de dibînin e, loma her navek hûn fêr dibin bi Nominativ dest pê dike.",
    ],
    explanationDetailed: [
      "Almanî rola navekî di hevokê de bi guherîna curenavê wê nîşan dide, ne bi guherîna rêza peyvan wek îngilîzî pir caran dike. Rewşa Nominativ hokerê destnîşan dike: kesê an tişta ku kiryara lêkerê pêk tîne.",
      "Hûn dikarin hokerê bi pirsîna wer? (kî?) ji bo kesan an was? (çi?) ji bo tiştan bibînin — çi bersiva vê pirsê bide, ew di rewşa Nominativ de ye.",
      "Nominativ her weha piştî lêkerên girêdanê yên sein (bûn), werden (bûyîn) û bleiben (mayîn) tê, çimkî navê ku li pey wan tê dîsa hokerê bi nav dike, ne ku kiryarekê distîne.",
    ],
    exampleMeanings: ["Mêrik radizê.", "Jin îro dixebite.", "Zarok bi dengekî bilind dikene.", "Ew mamosteyê min e."],
    exerciseTexts: [
      {
        explanation: "Kind neyî ye (nexweyî), û wek hoker curenava Nominativ ya neyî ya das lazim e.",
        grammarRule: "Curenava Nominativ ya neyî: das.",
        prompt: "Valahiyê bi curenava rast a rewşa Nominativ tijî bikin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann hokerê ye yê ku kiryarê pêk tîne, loma di rewşa Nominativ de dimîne — der, ne den an dem.",
        grammarRule: "Ji bo hokerê her hevokê rewşa Nominativ bi kar bînin.",
        prompt: "Rewşa Nominativ di kîjan hevokê de rast hatiye bikaranîn?",
      },
      {
        explanation: "Rast e — sein/werden/bleiben hokerê bi navekî ve girê didin ku dîsa wî bi nav dike, loma ew nav jî di Nominativ de dimîne.",
        grammarRule: "Ji bo navê pêşgotinê piştî sein, werden û bleiben Nominativ bi kar bînin.",
        prompt: "Piştî lêkerên sein, werden û bleiben, navê pêşgotinê di rewşa Nominativ de tê.",
      },
      {
        explanation: "Frau mê ye, û wek hoker curenava Nominativ ya mê ya die lazim e.",
        grammarRule: "Curenava Nominativ ya mê: die.",
        prompt: "Valahiyê bi curenava rast a rewşa Nominativ tijî bikin.",
      },
      {
        explanation: "Hevokên bingehîn ên almanî pêşî hoker (Der Junge) tînin, paşê lêkera tewandî (liest) di cihê duyem de, û dûre mayîya hevokê.",
        grammarRule: "Ji bo dîtina hokerê wer? an was? bipirsin — li vir Der Junge bersiva wer? e.",
        translation: "Kurik pirtûkekê dixwîne.",
        prompt: "Peyvan bi rêza rast rêz bikin.",
      },
      {
        explanation: "Kind nexweyî ye ← das; Katze mê ye ← die — herdu jî hokerên Nominativ in.",
        grammarRule: "Zayenda her navekî bi curenava wê ya Nominativ re li hev bînin: der/die/das.",
        prompt: "Her curenavê bikişînin valahiya rast.",
      },
      {
        explanation: "Der Lehrer nêr e, loma bi cînavka er a rewşa Nominativ tê guherandin.",
        grammarRule: "Cînavka Nominativ ya nêr: er.",
        prompt: "Cînavka kesane ya rewşa Nominativ ku şûna 'der Lehrer' digire binivîsin.",
      },
    ],
    conclusion:
      "Nominativ hokerê hevokê û navê pêşgotinê piştî sein, werden û bleiben destnîşan dike. Ev şiklê bingehîn e ku hemû rewşên din jê diguherin, loma berî derbasbûna Akkusativ hêjayî wê ye ku meriv bi temamî fêrî wê bibe.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Ji bo hokerê her hevokê rewşa Nominativ bi kar bînin.",
          "Ji bo navê pêşgotinê piştî sein, werden û bleiben wê bi kar bînin.",
          "Ji bo dîtina hokerê wer? an was? bipirsin.",
        ],
        notes: [
          "Nominativ şiklê 'standard' e — ew şiklê ku hûn di ferhengê de lê digerin û şiklê ku hemû rewşên din pê re tên berhevdan.",
          "Dawiya rengdêrê berî navekî di Nominativ de bi curenav û zayendê ve girêdayî ye, mîna der große Mann — lê ev mijarek cuda ye.",
        ],
        mistakeNotes: [
          "Lêkera sehen bireserê rasterast di rewşa Akkusativ de dixwaze, ne Nominativ — ev yek ji yekem xeletiyên ku her fêrbûyek dike ye.",
          "Curenava Nominativ ya mê her dem die ye, çu carî der nabe — der taybet e ji bo navên nêr.",
        ],
        exceptions: [
          "Komek navên nêr ku wek 'navên qels' an n-nav têne zanîn — mîna der Junge, der Name, der Student, der Herr — di hemû rewşan de ji bilî Nominativ ya yekjimar -n an -en werdigirin.",
          "Hin navan zayendek nediyar an devokî cuda heye (mîna der/das Joghurt), lê ferheng her dem şikla standard dide te.",
        ],
        tips: [
          "Kengî ku hûn ne pê ewle ne ka kîjan rewş lazim e, pêşî lêkerê bibînin û bipirsin wer oder was tut das? — bersiv her dem Nominativ e.",
          "Her navê nû bi curenava wî ya Nominativ (der/die/das) ve fêr bibin — tenê ev adet pêşiya piraniya xeletiyên zayendî yên paşerojê digire.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "Rewşa bireserê rasterast, û komek curenavên pêşgiran ên sabît.",
    objectives: [
      "Bireserê rasterast ê lêkerekê gerguhêz nas bikin",
      "Guherîna der → den û ein → einen rast bi kar bînin",
      "Pêşgirên sabît ên rewşa Akkusativ nas bikin",
    ],
    explanationSimple: [
      "Akkusativ bireserê rasterast destnîşan dike — kes an tişta ku kiryara lêkerê rasterast distîne.",
      "Ev di heman demê de rewşa ku piştî komek biçûk û sabît a pêşgiran tê ye, bêyî tu îstisna.",
    ],
    explanationDetailed: [
      "Piştî ku hûn hokerê (Nominativ) bibînin, pirsa din bi gelemperî ev e: 'hoker li ser çi bandor dike?' — ev bireserê rasterast e, û di almanî de rewşa Akkusativ digire.",
      "Hûn dikarin wê bi pirsîna wen? (kê?) ji bo kesan an was? (çi?) ji bo tiştan bibînin.",
      "Tenê curenava nêr eşkere di Akkusativ de diguhere: der dibe den, û ein dibe einen. Curenavên mê, nexweyî û pirjimar tam wek Nominativ dimînin — ji ber vê yekê Akkusativ pir caran heta ku navek nêr tê de nebe 'nayê dîtin'.",
      "Komek sabît a lêkeran hema hema her dem bireserekî Akkusativ digirin — haben, sehen, brauchen, kaufen, essen, trinken, lieben — û komek sabît a pêşgiran her dem Akkusativ derdixe holê: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Ez mêrik dibînim.", "Ew sêvekê dikire.", "Em kûçikê xwe hez dikin.", "Ev diyarî ji te re ye."],
    exerciseTexts: [
      {
        explanation: "Hund nêr e, loma cînavka xwedîtiyê heman guherîna taybet a nêr di Akkusativ de digire: unser ← unseren.",
        grammarRule: "Tenê curenav/cînavka xwedîtiyê ya nêr di Akkusativ de diguhere.",
        prompt: "Valahiyê bi curenava rast a rewşa Akkusativ tijî bikin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Lêkera sehen bireserekî rasterast di Akkusativ de digire, û der ya nêr dibe den.",
        grammarRule: "Tenê curenava nêr diguhere: der ← den, ein ← einen.",
        prompt: "Rewşa Akkusativ di kîjan hevokê de rast hatiye bikaranîn?",
      },
      {
        explanation: "Rast e — die di Nominativ û Akkusativ de wek hev dimîne; tenê curenava nêr diguhere.",
        grammarRule: "Curenavên mê, nexweyî û pirjimar wek Nominativ in.",
        prompt: "Curenava mê ya rewşa Akkusativ bi curenava mê ya rewşa Nominativ re wek hev e.",
      },
      {
        explanation: "Apfel nêr e, û wek bireserê rasterast piştî kaufen, curenava nediyar a Akkusativ einen lazim e.",
        grammarRule: "Curenava nediyar a Akkusativ ya nêr: einen.",
        prompt: "Valahiyê bi curenava rast a rewşa Akkusativ tijî bikin.",
      },
      {
        explanation: "Pêşî hoker (Wir), paşê lêker (lieben), û dûre bireserê Akkusativ (unseren Hund).",
        grammarRule: "Ji bo bireserê rasterast ê lêkerekê gerguhêz Akkusativ bi kar bînin.",
        translation: "Em kûçikê xwe hez dikin.",
        prompt: "Peyvan bi rêza rast rêz bikin.",
      },
      {
        explanation: "für her dem Akkusativ derdixe holê, loma du dibe dich û er dibe ihn.",
        grammarRule: "Her dem piştî durch, für, gegen, ohne, um Akkusativ bi kar bînin.",
        prompt: "Her cînavkê bikişînin valahiya rast.",
      },
      {
        explanation: "Student navekî qels e, loma hem curenava Akkusativ den û hem paşgira -en werdigire: den Studenten.",
        grammarRule: "Navên qels di Akkusativ de jî -n/-en werdigirin.",
        prompt: "Ji ber ku 'der Student' navekî qels e, şiklê wî yê Akkusativ bi curenav ve binivîsin.",
      },
    ],
    conclusion:
      "Akkusativ bireserê rasterast destnîşan dike û piştî durch, für, gegen, ohne û um tê. Ji Nominativ tenê guherîna xuya curenava nêr e — der/ein dibin den/einen — mayîn her wek xwe dimîne.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Ji bo bireserê rasterast ê lêkerekê gerguhêz Akkusativ bi kar bînin.",
          "Ji bo dîtina wê wen? ji bo kesan an was? ji bo tiştan bipirsin.",
          "Tenê curenava nêr diguhere: der ← den, ein ← einen.",
          "Curenavên mê, nexweyî û pirjimar wek Nominativ in.",
          "Her dem piştî durch, für, gegen, ohne û um Akkusativ bi kar bînin.",
        ],
        notes: [
          "Ji ber ku tenê curenavên nêr diguherin, fêrbûyek pir caran dev ji kontrolkirina zayenda navên mê û nexweyî berdide — lê cînavkên xwedîtiyê û kesane (mein ← meinen, ihr ← ihren) heman şablona taybet a nêr dişopînin, loma hêjayî bala te ye.",
          "Gotinên demê yên ku bersiva 'çiqas dem?' an xalek diyar didin ('kîjan roj?') pir caran Akkusativ bêyî pêşgir bi kar tînin: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "Lêkera sehen bireserekî di rewşa Akkusativ de dixwaze, loma curenava nêr der divê bibe den.",
          "für her dem Akkusativ derdixe holê, loma cînavka ich dibe mich.",
        ],
        exceptions: [
          "Navên qels yên mîna der Student, der Junge û der Name di Akkusativ de jî -n werdigirin: den Studenten, den Jungen, den Namen — ne tenê di Dativ û Genitiv de.",
          "Hin lêker ku xuya dike divê pêşgir bigirin, di rastiyê de bireserekî Akkusativ ê tazî digirin, mîna Ich frage dich (ne 'zu dir').",
        ],
        tips: [
          "Navên mê, nexweyî û pirjimar di Nominativ û Akkusativ de wek hev in — heke hevokek 'bêyî guherîn' xuya bike, divê navê nêr kontrol bikin.",
          "durch, für, gegen, ohne, um wek komek yekane bi bîr bînin — ew her dem Akkusativ in, bêyî tu îstisna.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "Rewşa bireserê nerasterast — yê ku tiştekî distîne an sûdê jê werdigire.",
    objectives: [
      "Bireserê nerasterast ê hevokê nas bikin",
      "Guherîna curenavan a rewşa Dativ li ser hemû zayendan bi kar bînin",
      "Lêker û pêşgirên ku her dem Dativ digirin nas bikin",
    ],
    explanationSimple: [
      "Dativ bireserê nerasterast destnîşan dike — bi gelemperî kesê ku tiştekî distîne an jê sûd werdigire.",
      "Ev pirsa wem? (ji kê re?) bersiv dide.",
    ],
    explanationDetailed: [
      "Gelek hevokên almanî hem bireserekî rasterast (Akkusativ) û hem bireserekî nerasterast (Dativ) hene: Ich gebe dem Mann das Buch — 'Ez pirtûkê didim mêrik.' dem Mann distîner e, loma di Dativ de ye.",
      "Komek sabît a lêkeran her dem bireserekî Dativ digirin her çend xuya dike divê Akkusativ bigirin — helfen, danken, gefallen, gehören, folgen, glauben û antworten yên ku fêrbûyek pêşî pê dizane ne.",
      "Dativ her weha piştî komek sabît a pêşgiran tê: aus, bei, mit, nach, seit, von, zu.",
      "Bi neh pêşgirên 'duyalî' (in, an, auf, über, unter, vor, hinter, neben, zwischen), ji bo cîh Dativ bi kar bînin — bersiva wo? (li ku?) — û ji bo tevgera ber bi armancekê Akkusativ bi kar bînin — bersiva wohin? (ber bi ku?).",
    ],
    exampleMeanings: ["Ez pirtûkê didim mêrik.", "Ew alîkariya xwişka xwe dike.", "Em bi otobusê digerin.", "Xanî yê cîranan e."],
    exerciseTexts: [
      {
        explanation: "Nachbarn pirjimar e, û gehören her dem Dativ digire, loma die dibe den.",
        grammarRule: "Her curenav di Dativ de diguhere; pirjimara die dibe den.",
        prompt: "Valahiyê bi curenava rast a rewşa Dativ tijî bikin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Lêkera helfen her dem bireserekî Dativ digire, û die ya mê di Dativ de dibe der.",
        grammarRule: "helfen her dem Dativ digire, çu carî Akkusativ na.",
        prompt: "Rewşa Dativ di kîjan hevokê de rast hatiye bikaranîn?",
      },
      {
        explanation: "Rast e — die Kinder dibe den Kindern; tenê navên ku jixwe bi -n an -s diqedin wek xwe dimînin.",
        grammarRule: "Navên pirjimar di Dativ de -n werdigirin, ji bilî ku jixwe bi -n an -s biqedin.",
        prompt: "Navên pirjimar di rewşa Dativ de bi gelemperî paşgira -n werdigirin.",
      },
      {
        explanation: "Bus nêr e, û mit her dem Dativ derdixe holê, loma der dibe dem.",
        grammarRule: "Her dem piştî aus, bei, mit, nach, seit, von, zu Dativ bi kar bînin.",
        prompt: "Valahiyê bi curenava rast a rewşa Dativ tijî bikin.",
      },
      {
        explanation: "Gava herdu bireser jî nav bin, bireserê Dativ (dem Mann) bi gelemperî berî ê Akkusativ (das Buch) tê.",
        grammarRule: "Gava herdu bireserên hevokê nav bin, bi gelemperî Dativ pêşî tê.",
        translation: "Ez pirtûkê didim mêrik.",
        prompt: "Peyvan bi rêza rast rêz bikin.",
      },
      {
        explanation: "Lêkera gehören her dem Dativ digire: sie dibe ihr û er dibe ihm.",
        grammarRule: "Komek sabît a lêkeran her dem bireserekî Dativ digirin — gehören yek ji wan e.",
        prompt: "Her cînavkê bikişînin valahiya rast.",
      },
      {
        explanation: "Pirjimara die Kinder di Dativ de dibe den Kindern — curenav dibe den û nav paşgira -n werdigire.",
        grammarRule: "Her curenav di Dativ de diguhere; navên pirjimar -n werdigirin.",
        prompt: "Şiklê pirjimar ê 'die Kinder' di rewşa Dativ de bi curenav ve binivîsin (mînak 'den …').",
      },
    ],
    conclusion:
      "Dativ bireserê nerasterast destnîşan dike, piştî aus/bei/mit/nach/seit/von/zu tê, û her curenavekî diguherîne — bi -yeke -n a taybet ku li navên pirjimar zêde dibe. Hin lêker mîna helfen û danken her dem bireserekî Dativ digirin.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Ji bo bireserê nerasterast — bi gelemperî distîner an sûdgir — Dativ bi kar bînin.",
          "Ji bo dîtina wê wem? bipirsin.",
          "Her curenav diguhere: der ← dem, die ← der, das ← dem, die (pirjimar) ← den.",
          "Navên pirjimar di Dativ de -n werdigirin ji bilî ku jixwe bi -n an -s biqedin: die Kinder ← den Kindern.",
          "Her dem piştî aus, bei, mit, nach, seit, von, zu Dativ bi kar bînin.",
          "Bi pêşgirên duyalî, Dativ bersiva wo? dide û Akkusativ bersiva wohin? dide.",
        ],
        notes: [
          "Lêkerên Dativ çu carî ji bo kesê têkildar bireserekî Akkusativ nagirin — mînak, helfen her dem 'jemandem helfen' e, çu carî 'jemanden helfen' nabe.",
          "Nîşana rêza peyvan: gava herdu bireserên hevokê nav bin, bi gelemperî Dativ pêşî tê: Ich gebe dem Mann das Buch. Gava herdu cînavk bin, Akkusativ pêşî tê: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "Lêkera helfen her dem Dativ digire, çu carî Akkusativ na — bêyî tu îstisna.",
          "mit her dem Dativ e, û navê pirjimar hewceyî paşgira -n e: Kinder ← Kindern.",
        ],
        exceptions: [
          "Komek biçûk a lêker û rengdêran ji ber sedemên îdyomatîk bi Dativ re tên bikaranîn — gefallen (xweş hatin), schmecken (bi tam xweş bûn) û stehen (li kesekî hatin) hemû kesê dixin Dativê: Das Kleid steht dir gut.",
          "Navên ku jixwe di pirjimar de bi -n an -s diqedin di Dativ de -yeke -n a zêde nagirin: den Autos, den Frauen.",
        ],
        tips: [
          "Pirjimara Dativ hema hema her dem bi -n diqede — dîtina vê -yê li ser navekî pir caran rêya herî bilez e ji bo naskirina hevokek Dativ di nêrîna pêşî de.",
          "aus, bei, mit, nach, seit, von, zu wek komek yekane fêr bibin — ji bilî lîsteya bixwe mantiqek din tune ye ku meriv bi bîr bîne.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "Dema borî ya rojane ya almanî — çawa tê çêkirin û kengî tê bikaranîn.",
    objectives: [
      "Dema Perfekt bi haben an sein digel rengdêra demborî ava bikin",
      "Di navbera haben û sein de rast bibijêrin",
      "Rengdêrên demborî yên rêkûpêk û nerêkûpêk nas bikin",
    ],
    explanationSimple: [
      "Perfekt awayê ku almaniya axaftinê bi gelemperî li ser demborî diaxive ye — ne şiklek lêkerê ya tenê, lê haben an sein digel rengdêra demborî.",
      "Ew bi heman awayî tê çêkirin ferq nake kî diaxive: lêkera alîkar di cihê duyem de, û rengdêra demborî li dawiya hevokê.",
    ],
    explanationDetailed: [
      "Piraniya lêkeran haben wek alîkar bi kar tînin. Lêkerên tevgerê (gehen, fahren, kommen) an guherîna rewşê (aufwachen, werden) bi gelemperî sein bi kar tînin.",
      "Lêkerên rêkûpêk rengdêra xwe ya demborî bi ge- + reh + -t çêdikin: machen ← gemacht, spielen ← gespielt. Lêkerên nerêkûpêk pir caran dengdêra rehê diguherînin û bi -en diqedin: sprechen ← gesprochen, gehen ← gegangen.",
      "Ji ber ku rengdêra demborî diçe dawiya hevokê, her tişta din — bireser, gotinên demê, neyînî — di navbera lêkera alîkar û rengdêrê de dimîne.",
    ],
    exampleMeanings: ["Min pirtûk xwend.", "Em çûn Berlînê.", "Wê duh xebitî.", "Ew zû şiyar bû."],
    exerciseTexts: [
      {
        explanation: "fahren tevgerê ji cihekî ber bi cihekî din vedibêje, loma sein digire: Wir sind gefahren.",
        grammarRule: "Ji bo lêkerên tevgerê an guherîna rewşê sein bi kar bînin.",
        prompt: "Lêkera 'fahren' di dema Perfekt de kîjan lêkera alîkar digire?",
      },
    ],
    quizTexts: [
      {
        explanation: "Lêkera lesen haben digire, û rengdêra wê ya demborî ya nerêkûpêk gelesen e, ku li dawiya hevokê tê danîn.",
        grammarRule: "Ji bo piraniya lêkeran haben wek alîkar bi kar bînin.",
        prompt: "Dema Perfekt di kîjan hevokê de rast hatiye çêkirin?",
      },
      {
        explanation: "Rast e — telefonieren ← telefoniert, bêyî ge-.",
        grammarRule: "Lêkerên bi -ieren diqedin çu carî ge- nagirin.",
        prompt: "Lêkerên mîna telefonieren di dema Perfekt de çu carî pêşgira ge- nagirin.",
      },
      {
        explanation: "fahren lêkera tevgerê ye, loma sein digire: sind gefahren.",
        grammarRule: "Ji bo lêkerên tevgerê an guherîna rewşê sein bi kar bînin.",
        prompt: "Valahiyê bi lêkera alîkar a rast tijî bikin.",
      },
      {
        explanation: "essen nerêkûpêk e: gegessen, ne şiklê rêkûpêk geesst.",
        grammarRule: "Rengdêrên demborî yên nerêkûpêk pir caran dengdêra rehê diguherînin û bi -en diqedin.",
        prompt: "Rengdêra demborî ya lêkera 'essen' binivîsin.",
      },
    ],
    conclusion:
      "Perfekt ji haben an sein digel rengdêrek demborî ku li dawiya hevokê tê danîn çêdibe. Piraniya lêkeran haben digirin; lêkerên tevgerê an guherîna rewşê sein digirin. Rengdêrên rêkûpêk bi -t diqedin, yên nerêkûpêk pir caran bi -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Ji bo piraniya lêkeran haben wek alîkar bi kar bînin.",
          "Ji bo lêkerên tevgerê an guherîna rewşê sein bi kar bînin.",
          "Rengdêra demborî ya rêkûpêk: ge- + reh + -t.",
          "Rengdêrên nerêkûpêk pir caran bi -en diqedin û dibe ku dengdêra rehê biguhere.",
          "Rengdêra demborî her dem diçe dawiya hevokê.",
        ],
        notes: [
          "Hin rengdêrên demborî yên nerêkûpêk ên gelemperî çêtir e meriv rasterast ezber bike, ne ku ji lêkerê derxîne: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Lêkerên bi pêşgira veqetiyayî -ge- di navbera pêşgir û rehê de datînin: aufwachen ← aufgewacht, ne geaufwacht.",
        ],
        mistakeNotes: ["fahren lêkera tevgerê ye, loma sein digire, ne haben."],
        exceptions: [
          "Lêkerên bi -ieren diqedin (telefonieren, studieren) çu carî ge- nagirin: telefoniert, studiert.",
          "Lêkerên bi pêşgira neveqetiyayî (be-, ver-, er-, ge-, ent-, zer-) jî ge- naavêjin: besuchen ← besucht, verstehen ← verstanden.",
        ],
        tips: [
          "Gava ku hûn di navbera haben û sein de dudil in, bipirsin: ma ev lêker tevgerê ji A ber bi B ve an guherîna rewşê vedibêje? Heke erê be, bi îhtîmaleke mezin sein e.",
          "Lêkerên nerêkûpêk ên nû bi her sê şiklan re fêr bibin — rader, demborî ya sade, rengdêr — bi heman awayê ku hûn der/die/das ji bo navekî nû fêr dibin.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Ferhengoka bingehîn ji bo axaftina li ser endamên malbatê.",
    explanationSimple: [
      "Ev ders peyvên almanî yên malbata nêzîk vedihewîne — peyvên ku hûn ê berdewam bi kar bînin gava hûn dest bi vegotina jiyana xwe bikin.",
    ],
    explanationDetailed: [
      "Navên malbatê şablonên zayenda rêkûpêk ku hûn jixwe dizanin dişopînin: piraniya navên kesan li gorî zayenda wî kesî der an die ne, digel çend îstisnayên sabît mîna das Kind (zarok) û das Baby (pitik), ku ji zayenda zarok serbixwe ji hêla rêzimanî ve nexweyî ne.",
      "Cînavkên xwedîtiyê (mein, meine) bi zayenda navê re li hev in, tam wek ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["Ev diya min e.", "Birayê min li Berlînê dijî.", "Du xwişkên min hene."],
    exerciseTexts: [
      {
        explanation: "Schwester mê ye: die Schwester.",
        grammarRule: "Navên endamên malbatê zayenda kesê ku bi nav dikin werdigirin.",
        prompt: "Peyva almanî ya 'xwişk' binivîsin.",
      },
    ],
    quizTexts: [
      {
        explanation: "der Vater tê wateya 'bav'.",
        grammarRule: "der Vater nêr e.",
        prompt: "Kîjan peyv tê wateya 'bav'?",
      },
      {
        explanation: "Rast e — das Kind her dem nexweyî ye.",
        grammarRule: "Hin navên kesan mîna das Kind û das Baby her dem sabît nexweyî ne.",
        prompt: "Zayenda rêzimanî ya 'das Kind' her dem nexweyî ye, ji zayenda rastî ya zarok serbixwe.",
      },
      {
        explanation: "Schwestern şiklê pirjimar ê Schwester e.",
        grammarRule: "Piraniya navên mê di pirjimar de -n an -en werdigirin.",
        prompt: "Hevokê temam bikin.",
      },
    ],
    conclusion:
      "Ferhengoka malbatê ji hêla rêzimanî ve rêkûpêk e — navên zayenddar ji bo kesan, digel das Kind wek îstisnayeke sabît a nexweyî — û ji te re sedemek tavilê dide ku tu cînavkên xwedîtiyê pratîk bikî.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["dayik", "bav", "xwişk", "bira", "dê-bav (pirjimar)", "zarok", "dapîr", "bapîr"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Nivîsarek kurt a rojane li ser sîparîşkirinê li qehwexaneyê, digel pirsên fêmê.",
    explanationSimple: ["Dîmenek kurt li qehwexaneyekê — carekê bixwînin da ku raya giştî fêm bikin berî ku li her peyvekê binêrin."],
    explanationDetailed: [
      "Xwendin di asta A1 de çêtir bi du qonaxan pêk tê: pêşî ji bo fêmkirina rewşa giştî (kî, li ku, çi diqewime), paşê carek din ji bo dîtina peyvên bitenê ku cara pêşî ne fêm kiribûn.",
      "Ne hewce ye ku hûn her peyvê fêm bikin da ku pirsên fêmê yên li jêr bibersivînin — li ser tiştê ku bi rastî wateya dîmenê diguherîne bisekinin.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Anna qehwe (einen Kaffee) siparîş dide, ne çay.",
        grammarRule: "bestellen + bireserê Akkusativ.",
        prompt: "Anna çayê siparîş dide.",
      },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — ew li ser maseyeke li tenişta pace rûdine.",
        grammarRule: "sich setzen an + Akkusativ.",
        prompt: "Anna li ku rûdine?",
      },
      {
        explanation: "Rast e — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Du lêkerên hevpileyî ku bi und ve girêdayî ne.",
        prompt: "Anna dema qehweya xwe vedixwe pirtûkekê dixwîne.",
      },
      {
        explanation: "Minuten (deqe) — Nach zehn Minuten.",
        grammarRule: "nach + gotina demê ya Dativ.",
        prompt: "Temam bikin: gerçêker sîparîşê piştî deh ___ tîne.",
      },
    ],
    conclusion:
      "Dîmenek kurt a qehwexaneyê ku bi tevahî ji ferhengoka asta A1 û hevokên bingehîn ên hêsan hatiye çêkirin — ji bo xwendina fêmkirina giştî berî ku meriv xema her peyvekê bike, pratîkek baş e.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Ragihandinek kurt a stasyonê — guhdarî perron û dema rêketinê bikin.",
    explanationSimple: ["Ragihandinek kurt a stasyonê — hêj pelê deng nehatiye girêdan, loma nivîsara veguheztî wek ku hûn dibihîzin bixwînin."],
    explanationDetailed: [
      "Ragihandinên stasyon û balafirgehê di almanî de pîroziyek pir texmînbar dişopînin — û ev texmînbariya bixwe ye ku wan dike pratîkek guhdariyê ya baş a destpêkê: hejmara trênê, perron (Gleis), û dem, hema hema her dem bi heman rêzê.",
      "Gava ku hûn karibin bi baweriyeke bilind hejmara perronê û demê ji ragihandinekê derxin, hûn dikarin heman stratejiya guhdariyê li ser her dengê bi heman awayî formulekirî bicîh bikin (raporên hewayê, agahiyên ewlehiyê, hwd.).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Gleis 7 — perron 7.",
        grammarRule: "von + hejmara perronê ya Dativ.",
        prompt: "Trên ji kîjan perronê derdikeve?",
      },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — perron 7.",
        grammarRule: "von + Dativ.",
        prompt: "Trêna ber bi München ve ji ku derdikeve?",
      },
      {
        explanation: "vierzehn Uhr dreißig tê wateya 14:30.",
        grammarRule: "Dema axaftinê ya 24-saetî: [saet] Uhr [deqe].",
        prompt: "Dema rêketinê bi hejmarên 24-saetî binivîsin (mînak 09:15).",
      },
    ],
    conclusion:
      "Ragihandinên stasyonê formulekirî ne — hejmara trênê, perron, dem — ev yek wan dike pratîkeke guhdariyê ya îdeal a destpêkê gava ku hûn şablonê ku divê guhdarî bikin nas bikin.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Bi dengekî bilind xwe nasandinê pratîk bikin — nav, ji ku hatin û çend hûrgiliyên din.",
    explanationSimple: [
      "Xwenasandin yek ji yekem tiştên e ku hûn ê bi rastî bi dengekî bilind bi almanî bibêjin — hejmarek biçûk a hevokên kurt ên sabît ku hûn ê berdewam bi kar bînin.",
    ],
    explanationDetailed: [
      "Pratîka axaftinê li vir çêtir bi dengekî bilind dixebite, ne tenê di hişê de — her tewş a li jêr wek hevokek temam bêjin berî ku here ya din, tewra kesek guhdarî neke jî.",
      "Hêj tomarkirin an nirxandina axaftinê tune ye; vê wek pratîkeke axaftinê ya xweser bihesibînin ku tewş û hevokên nimûne wek nivîsarek adaptebar bi kar tîne.",
    ],
    exampleMeanings: ["Navê min Anna ye.", "Ez ji Almanyayê me.", "Ez xwendekar im."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … awayê standard e ji bo gotina ka hûn ji ku ne.",
        grammarRule: "kommen aus + navê welat/bajêr ê Dativ.",
        prompt: "Peyva almanî ya 'Ez ji ... me' binivîsin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Lêkera heißen rasterast bi navî re wek tewangê tê tewandin: Ich heiße Anna.",
        grammarRule: "heißen + nav, hewceyî lêkereke din nîne.",
        prompt: "Kîjan hevok bi rastî dibêje 'Navê min Anna ye'?",
      },
      {
        explanation: "heißt şiklê du yê lêkera heißen e.",
        grammarRule: "du heißt (tewandina rêkûpêk a lêkera -en).",
        prompt: "Vê hevoka nefermî ya pirsîna navî temam bikin.",
      },
    ],
    conclusion:
      "Xwenasandin ji sê şablonên hevokê yên sabît tê çêkirin — nav, eslê, kar — hêjayî wê ye ku meriv ji roja yekem ve zêde bi dengekî bilind pratîk bike, çimkî hûn ê ji destpêkê ve wan bi kar bînin.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Navê xwe bêjin:",
          "Bêjin ji ku ne:",
          "Bêjin çi dikin:",
          "Ji kesekî din navê wî/wê bipirsin:",
          "Her sê hevokên xwe bi hev re bikin nasandinek kurt.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Testek şûndabûnê ya tevlihev ku rewşên rêzimanî, ferhengoka rojane û rêza bingehîn a hevokê vedihewîne.",
    explanationSimple: [
      "Testek şûndabûnê ya safî — bêyî ravekirineke nû, tenê komek tevlihev a pirsan li ser her tiştê ku heta asta A1 hatiye vegotin.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "Hokerê hevokê rewşa Nominativ digire: Der Mann.",
        grammarRule: "Ji bo hokerê her hevokê Nominativ bi kar bînin.",
        prompt: "Kîjan curenav rast e? '___ Mann schläft.' (hoker)",
      },
      {
        explanation: "Lêkera sehen bireserekî Akkusativ digire, û der ya nêr dibe den.",
        grammarRule: "Tenê curenava nêr di Akkusativ de diguhere.",
        prompt: "Bi curenava rast a rewşa Akkusativ temam bikin.",
      },
      { explanation: "die Schwester.", grammarRule: "Şûndabûna ferhengoka malbatê.", prompt: "Peyva almanî ya 'xwişk' binivîsin." },
      {
        explanation: "Pêşî hoker, paşê lêkera tewandî di cihê duyem de.",
        grammarRule: "Rêza bingehîn a peyvan a almanî: hoker, lêker, mayîn.",
        translation: "Navê min Anna ye.",
        prompt: "Peyvan bi rêza rast rêz bikin.",
      },
    ],
    conclusion: "Şûndabûnek kurt û tevlihev li ser rewşên rêzimanî, ferhengokê û rêza peyvan — kontrolek baş berî derbasbûna ji asta A1.",
    details: { kind: "none" },
  },
  "grammar/b2/genitiv": {
    summary: "Rewşa xwedîtiyê — di axaftinê de her ku diçe fermîtir dibe, lê hîn jî ji bo xwendin û nivîsandinê pêwîst e.",
    objectives: [
      "Genitiv wek rewşa xwedîtiyê nas bikin",
      "Paşgira rast a navan ji bo nêr û nexweyî zêde bikin",
      "Piştî trotz, wegen, während û statt Genitiv bi kar bînin",
    ],
    explanationSimple: [
      "Genitiv xwedîtiyê nîşan dide — tişt an kes xwedan çi ye.",
      "Ew her weha piştî komek biçûk û sabît a pêşgiran tê: trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "Berevajî sê rewşên din, Genitiv navê bixwe diguherîne, ne tenê curenava wê — navên nêr û nexweyî -s an -es lê zêde dikin, lê navên mê û pirjimar tam wek xwe dimînin.",
      "Di almaniya axaftinê ya rojane de, von digel Dativ pir caran şûna Genitiv digire (von meinem Vater li şûna meines Vaters) — lê Genitiv hîn jî şiklê bêtir fermî yê ku meriv li benda wî ye di nivîsandin û axaftina bihûrmet de, û hûn ê wê her dem di xwendinê de bibînin.",
      "Rêza peyvan a Genitiv xwedî dixe piştî navê ku ew rave dike — das Auto meines Vaters, ne meines Vaters Auto — ji bilî bi navan re, ku pêşî tên: Annas Auto.",
    ],
    exampleMeanings: ["Otomobîla bavê min nû ye.", "Rengê xanî xweşa min tê.", "Navê jinê Anna ye.", "Tevî baranê jî, em diçin gerê."],
    exerciseTexts: [
      {
        explanation: "Frau mê ye, loma curenava der ya rewşa Genitiv digire — nav bixwe naguhere.",
        grammarRule: "Curenava Genitiv ya mê: der.",
        prompt: "Valahiyê bi curenava rast a rewşa Genitiv tijî bikin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Vaters paşî cînavka xwedîtiyê meines paşgira Genitiv -s werdigire, da ku nîşan bide otomobîl ya kê ye.",
        grammarRule: "Navên nêr di Genitiv de -s an -es werdigirin.",
        prompt: "Rewşa Genitiv di kîjan hevokê de rast hatiye bikaranîn?",
      },
      {
        explanation: "Rast e — tenê navên nêr û nexweyî paşgira Genitiv werdigirin; navên mê û pirjimar wek xwe dimînin.",
        grammarRule: "Paşgirên Genitiv: -s/-es tenê ji bo nêr û nexweyî.",
        prompt: "Navên nêr û nexweyî bi gelemperî di Genitiv de -s an -es werdigirin, lê navên mê çu carî naguherin.",
      },
      {
        explanation: "Haus nexweyî ye, loma curenava des ya Genitiv digire, û nav bixwe -es werdigire: Hauses.",
        grammarRule: "Curenava Genitiv ya nexweyî: des, nav +(e)s.",
        prompt: "Valahiyê bi curenava rast a rewşa Genitiv tijî bikin.",
      },
      {
        explanation: "trotz yek ji pêşgirên sabît e ku her dem Genitiv derdixe holê.",
        grammarRule: "Pêşgirên Genitiv: während, trotz, wegen, statt.",
        prompt: "Pêşgira ku wateya 'tevî' dide û Genitiv derdixe holê binivîsin.",
      },
    ],
    conclusion:
      "Genitiv xwedîtiyê nîşan dide û piştî komek pêşgiran mîna trotz, wegen û während tê. Navên nêr û nexweyî -s an -es lê zêde dikin; navên mê û pirjimar naguherin. Ew her ku diçe di axaftina rojane de bi von digel Dativ tê guherandin, lê ji bo xwendin û nivîsandina fermî hîn jî pêwîst e.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Ji bo destnîşankirina xwedîtiyê — kî an çi xwedan tiştekî ye — Genitiv bi kar bînin.",
          "Wê piştî pêşgirên sabît trotz, wegen, während û statt bi kar bînin.",
          "-s an -es li navên nêr û nexweyî zêde bikin; navên mê û pirjimar naguherin.",
        ],
        notes: [
          "Di almaniya axaftinê ya rojane de, von digel Dativ pir caran şûna Genitiv digire (von meinem Vater li şûna meines Vaters) — lê Genitiv hîn jî di nivîsandin û axaftina fermî de tê xwestin.",
          "Rêza peyvan a Genitiv xwedî dixe piştî navê ku ew rave dike: das Auto meines Vaters, ne meines Vaters Auto (ji bilî bi navan re: Annas Auto).",
        ],
        mistakeNotes: [
          "Cînavka xwedîtiyê bixwe hewceyî paşgira Genitiv -es e, û nav jî hewceyî -s e — herdu bi hev re diguherin.",
          "Curenava des bi tenê têrê nake — navên nexweyî di Genitiv de -es jî li xwe zêde dikin.",
        ],
        exceptions: [
          "Navên nexweyî/nêr ên yek-kîteyî bi gelemperî -es werdigirin (des Hauses, des Mannes); navên dirêjtir pir caran tenê -s digirin (des Computers, des Lehrers).",
          "Navên nêr ên qels mîna der Student an der Junge di Genitiv de jî -en werdigirin, ne -s: des Studenten, ne des Studentens.",
        ],
        tips: [
          "Heke hûn bikaribin hevokê bi 'von + Dativ' ji nû ve çêbikin û hîn jî xwezayî xuya bike, bi gelemperî Genitiv li wir vebijarkî ye — lê wê di herdu rewşan de nas bikin, çimkî hûn ê wê her dem di nivîsandinê de bibînin.",
          "trotz, wegen, während û statt wek komek yekane fêr bibin — ew çar pêşgirên Genitiv in ku hûn ê pirtir rastî wan bên.",
        ],
      },
    },
  },
  "grammar/a1/praesens": {
    summary: "Dema niha ya almanî — paşgirên rêkûpêk, û ka çawa ew jî tiştê ku îngilîzî bi 'is doing' dibêje digire nava xwe.",
    objectives: [
      "Lêkerên rêkûpêk di dema Präsens de tewandin",
      "Präsens hem ji bo dema niha hem jî ji bo pêşerojeke nêzîk bi kar bînin",
      "Tîpa navber -e- ji bo rehên bi -t an -d diqedin nas bikin",
    ],
    explanationSimple: [
      "Präsens dema niha ya almanî ye — ji bo tiştê ku niha diqewime, rastiyên giştî, û pir caran ji bo pêşerojeke nêzîk jî tê bikaranîn.",
      "Lêkerên rêkûpêk li gorî kesê ku kiryarê dike paşgirek texmînbar li rehê zêde dikin.",
    ],
    explanationDetailed: [
      "Ji bo tewandina lêkerekê rêkûpêk, -en ji radera wê rakin da ku reh derkeve, paşê paşgira li gorî kesî lê zêde bikin: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "Almanî şiklek domdar a cuda nîne — ich spiele hem 'ez dilîzim' û hem 'ez niha dilîzim' vedibêje. Peywend destnîşan dike kîjan mebest e.",
      "Präsens her weha bi gelemperî ji bo axaftina li ser pêşerojeke nêzîk tê bikaranîn, bi taybetî digel peyveke demê: Ich fliege morgen nach Berlin (ez sibê diçim Berlînê).",
    ],
    exampleMeanings: ["Ez futbolê dileyzim.", "Tu almanî fêr dibî.", "Ew îro dixebite.", "Em sibê diçin Berlînê."],
    exerciseTexts: [
      {
        explanation: "du paşgira rêkûpêk -st werdigire: spiel + st = spielst.",
        grammarRule: "Paşgira Präsens ya du: -st.",
        prompt: "Şiklê rast ê lêkera 'spielen' ji bo 'du' di dema Präsens de binivîsin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Reha lêkera arbeiten bi -t diqede, loma şiklê er hewceyî tîpa navber e: arbeitet, ne arbeit.",
        grammarRule: "Berî paşgirê -e- zêde bikin gava reh bi -t an -d biqede.",
        prompt: "Dema Präsens di kîjan hevokê de rast hatiye bikaranîn?",
      },
      {
        explanation: "Rast e — almanî pir caran li şûna dema pêşerojê ya cuda Präsens bi kar tîne gava ku peywend an peyveke demê jixwe pêşerojê zelal dike.",
        grammarRule: "Präsens ji bo kiryarên pêşerojeke nêzîk digel gotina demê bi kar bînin.",
        prompt: "Präsens dikare ji bo axaftina li ser pêşerojeke nêzîk were bikaranîn, bi taybetî digel peyveke demê mîna morgen.",
      },
      {
        explanation: "wir paşgira -en werdigire, ku ji bo lêkerekê rêkûpêk tam wek radera wê ye: wohnen.",
        grammarRule: "Paşgira Präsens ya wir: -en (wek rader).",
        prompt: "Şiklê rast ê lêkera 'wohnen' ji bo 'wir' di dema Präsens de binivîsin.",
      },
      {
        explanation: "ich paşgira -e werdigire: kauf + e = kaufe.",
        grammarRule: "Paşgira Präsens ya ich: -e.",
        prompt: "Hevokê bi şiklê rast ê lêkera 'kaufen' di dema Präsens de temam bikin.",
      },
    ],
    conclusion:
      "Präsens şeş paşgirên texmînbar bi kar tîne — -e, -st, -t, -en, -t, -en — ku li rehê lêkerê tên zêdekirin, digel tîpa navber -e- ji bo rehên bi -t an -d diqedin. Ew hem dema niha û hem pêşerojeke nêzîk vedihewîne, loma serwerbûna van paşgiran gaveke mezin e beriya ku meriv bighêje demên borî.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "-en ji radera lêkerê rakin da ku reh bibînin.",
          "Paşgira li gorî kesî zêde bikin: -e, -st, -t, -en, -t, -en.",
          "Heke reh bi -t an -d biqede, berî paşgirê -e- zêde bikin (arbeiten ← du arbeitest).",
        ],
        notes: [
          "Paşgirên du û er/sie/es ên ku herî zêde hewceyî tîpa navber -e- ne, çimkî -st û -t dijwar in ku meriv rasterast piştî rehek bi -t/-d diqede bibêje.",
          "Çend lêkerên gelemperî tenê di şiklên du/er de nerêkûpêk in (fahren ← du fährst, er fährt) — ev ne beşek ji şablona rêkûpêk a li vir e.",
        ],
        mistakeNotes: [
          "Rehên bi -t diqedin berî paşgira -st hewceyî -e- ne, wek na peyv nayê gotin.",
          "Her kesek hewceyî paşgira xwe ya taybet e — ich her dem -e werdigire, çu carî ne şiklê er yê bi -t.",
        ],
        exceptions: [
          "Lêkerên bihêz ên dengdêrguherîn mîna fahren, sehen û sprechen dengdêra xwe tenê di şiklên du û er/sie/es de diguherînin (du fährst, er fährt) — şablonek cuda ji paşgirên rêkûpêk ên li vir.",
          "sein û haben bi tevahî nerêkûpêk in û divê şiklên wan bi xwe werin ezberkirin: ich bin, du bist, er ist…",
        ],
        tips: [
          "Şeş paşgiran wek komek yekane fêr bibin — gava ku ew otomatîk bibin, her lêkerek rêkûpêk bi heman awayî tê tewandin.",
          "Gava reha lêkerek nû bi -t, -d an komek dengdêrên bêdeng mîna -ffn (öffnen) biqede, li benda tîpa navber -e- berî -st û -t bin.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "Dema borî ya sade ku di nivîsandinê de û digel lêkerên gelemperî mîna sein û haben tê bikaranîn — çawa ji Perfekt cuda ye.",
    objectives: [
      "Lêkerên rêkûpêk (qels) di dema Präteritum de tewandin",
      "Nas bikin kengî Präteritum li ser Perfekt tê tercîhkirin",
      "sein û haben di şiklên xwe yên gelemperî yên Präteritum de rast bi kar bînin",
    ],
    explanationSimple: [
      "Präteritum dema borî ya din a almanî ye — bi piranî di nivîsandinê de tê bikaranîn, û di axaftinê de ji bo sein, haben û lêkerên modal.",
      "Lêkerên rêkûpêk -te digel paşgireke kesane li rehê zêde dikin.",
    ],
    explanationDetailed: [
      "Digel ku Perfekt li ser almaniya axaftinê ya piraniya lêkeran serdest e, Präteritum dema borî ya asayî ya almaniya nivîskî ye — çîrok, gotarên nûçeyan û nivîsandina fermî hema hema her dem wê bi kar tînin.",
      "Lêkerên rêkûpêk (qels) Präteritum bi lêzêdekirina -te li rehê, paşê paşgireke kesane çêdikin: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Tewra di axaftinê de jî, çend lêkerên gelemperî hema hema her dem di şiklê Präteritum de xuya dikin li şûna Perfekt: war (bû), hatte (hebû), û lêkerên modal mîna konnte (dikaribû) an wollte (dixwest).",
    ],
    exampleMeanings: ["Min erkên xwe yên malê kirin.", "Wê duh piyano lêxist.", "Ew westiyayî bû.", "Dema me tune bû."],
    exerciseTexts: [
      {
        explanation: "sie (ew/ewana) paşgira -ten werdigire, wek wir: spiel + ten = spielten.",
        grammarRule: "Paşgira Präteritum ya sie (pirjimar): -ten.",
        prompt: "Şiklê rast ê lêkera 'spielen' ji bo 'sie' (ewana) di dema Präteritum de binivîsin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Reha lêkera arbeiten bi -t diqede, loma berî -te hewceyî tîpa navber e: arbeitete.",
        grammarRule: "Berî -te tîpa -e- zêde bikin gava reh bi -t an -d biqede.",
        prompt: "Dema Präteritum di kîjan hevokê de rast hatiye bikaranîn?",
      },
      {
        explanation: "Rast e — hem ich hem er/sie/es tenê -te lê zêde dikin, berevajî Präsens ku ew cuda ne (-e li hember -t).",
        grammarRule: "Paşgirên Präteritum yên ich û er wek hev in: -te.",
        prompt: "Di dema Präteritum de, şiklên ich û er/sie/es heman paşgirê bi kar tînin.",
      },
      {
        explanation: "haben di Präteritum de nerêkûpêk e — şiklê wir hatten e, ne şiklê rêkûpêk habten.",
        grammarRule: "Reha Präteritum ya haben nerêkûpêk e: hatt-.",
        prompt: "Şiklê lêkera 'haben' ji bo 'wir' di dema Präteritum de binivîsin.",
      },
      {
        explanation: "ich -te werdigire: mach + te = machte.",
        grammarRule: "Paşgira Präteritum ya ich: -te.",
        prompt: "Hevokê bi şiklê rast ê lêkera 'machen' di dema Präteritum de temam bikin.",
      },
    ],
    conclusion:
      "Präteritum -te digel paşgireke kesane li reha lêkerekê rêkûpêk zêde dike, digel ku ich û er/sie/es heman şiklî parve dikin. Ew dema borî ya standard a nivîsandinê ye, û — ji bo sein, haben û lêkerên modal — di axaftinê de jî bijartina xwezayî ye, her çend Perfekt bi gelemperî li ser axaftina rojane serdest e.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "-te li reha lêkerekê rêkûpêk zêde bikin, paşê paşgira kesane: -te, -test, -te, -ten, -tet, -ten.",
          "Heke reh bi -t an -d biqede, berî -te tîpa -e- zêde bikin (arbeiten ← er arbeitete).",
          "Ji bo sein, haben û lêkerên modal, tewra di axaftinê de jî, Präteritum tercîh bikin.",
        ],
        notes: [
          "Berevajî Präsens, şiklên ich û er/sie/es di Präteritum de wek hev in — herdu jî tenê -te werdigirin.",
          "Şiklên Präteritum yên sein (war) û haben (hatte) di nav yekem şiklên borî yên nerêkûpêk de ne ku piraniya fêrbûyan ezber dikin, çimkî ew her dem tên bikaranîn.",
        ],
        mistakeNotes: [
          "Rehên bi -t diqedin berî -te hewceyî tîpa navber -e- ne, heman qaîdeya Präsens.",
          "haben di Präteritum de nerêkûpêk e — hatte, ne şiklê rêkûpêk habte.",
        ],
        exceptions: [
          "Lêkerên bihêz (nerêkûpêk) li şûna -te dengdêra reha xwe bi tevahî diguherînin: gehen ← ging, sehen ← sah — şablonek cuda ji paşgirên rêkûpêk ên li vir.",
          "Şiklên Präteritum yên sein (war) û haben (hatte) qet şablona rêkûpêk a -te nasopînin û tenê tên ezberkirin.",
        ],
        tips: [
          "Heke hûn çîrokekê dibêjin an tiştekî fermî dinivîsin, wek standard biçin ser Präteritum — ew dema borî ya vegotinê ya xwezayî ya almanî ye.",
          "Di axaftina rojane de, hûn dikarin bi gelemperî bi Perfekt ji bo piraniya lêkeran têrbibin — ji bilî war, hatte û lêkerên modal, ku hema hema her dem di Präteritum de jî xwezayîtir xuya dikin, tewra di axaftinê de jî.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Axaftin li ser pêşerojê bi werden + rader — û kengî almanan tenê dema niha bi kar tînin li şûna wê.",
    objectives: [
      "Futur I bi werden + rader ava bikin",
      "Nas bikin kengî almanan Futur I li şûna Präsens ji bo pêşerojê bi kar tînin",
      "Lêkera werden li gorî hemû kesan rast tewandin",
    ],
    explanationSimple: [
      "Futur I bi şiklekî tewandî yê werden digel radera lêkera bingehîn li ser pêşerojê diaxive.",
      "Di almaniya rojane de, Präsens bi rastî pirtir ji bo pêşerojê tê bikaranîn — Futur I ji bo pêşbîniyan, sozan û giranbûnê tê veqetandin.",
    ],
    explanationDetailed: [
      "Avahî sabît e: hoker + werden ê tewandî (cihê duyem) + mayîya hevokê + rader (cihê dawî). Ich werde morgen arbeiten — 'ez ê sibê bixebitim'.",
      "werden nerêkûpêk e: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — divê ev şeş şikl bêne ezberkirin, ne ku ji qaîdeyeke rêkûpêk werin derxistin.",
      "Almanî pir caran ji bo bûyerên pêşerojê yên plansaz Präsens digel peyveke demê tercîh dikin (Ich fliege morgen), û Futur I ji bo pêşbînî, soz an texmînên li ser pêşerojê hildigirin: Es wird morgen regnen (sibê dê baran bibare).",
    ],
    exampleMeanings: ["Ez ê sibê bixebitim.", "Dê baran zû bibare.", "Em ê pirsgirêkê çareser bikin.", "Ew ê te bigire (telefon)."],
    exerciseTexts: [
      {
        explanation: "ich şiklê nerêkûpêk werde werdigire.",
        grammarRule: "Şiklê werden ê ich: werde.",
        prompt: "Hevokê bi şiklê rast ê werden temam bikin.",
      },
    ],
    quizTexts: [
      {
        explanation: "Rader arbeiten diçe dawiya hevokê tam, piştî morgen.",
        grammarRule: "Raderê li dawiya hevokê deynin.",
        prompt: "Futur I di kîjan hevokê de rast hatiye çêkirin?",
      },
      {
        explanation: "Rast e — ev avahî bi tevahî ev e: werden (tewandî) digel raderekê li dawiyê.",
        grammarRule: "Futur I = werden (tewandî) + rader.",
        prompt: "Futur I bi şiklekî tewandî yê werden digel radera lêkera bingehîn tê çêkirin.",
      },
      {
        explanation: "Şiklê nerêkûpêk ê werden ji bo du wirst e.",
        grammarRule: "Şiklê werden ê du: wirst.",
        prompt: "Şiklê rast ê werden ji bo 'du' binivîsin.",
      },
      {
        explanation: "Şiklê nerêkûpêk ê werden ji bo er wird e.",
        grammarRule: "Şiklê werden ê er: wird.",
        prompt: "Şiklê rast ê werden ji bo 'er' binivîsin.",
      },
      {
        explanation: "es heman şiklê er werdigire: wird.",
        grammarRule: "Şiklê werden ê es: wird.",
        prompt: "Hevokê bi şiklê rast ê werden temam bikin.",
      },
      {
        explanation: "lösen wek raderek tazî li dawiya hevokê dimîne tam.",
        grammarRule: "Radera Futur I her dem di şiklê xwe yê tazî (bêdem) de ye.",
        prompt: "Futur I di kîjan hevokê de rast hatiye bikaranîn?",
      },
      {
        explanation: "Rast e — Ich fliege morgen ji Ich werde morgen fliegen xwezayîtir e, her çend herdu jî ji hêla rêzimanî ve rast in.",
        grammarRule: "Futur I bi bingehîn ji bo pêşbînî, soz û texmînan bi kar bînin.",
        prompt: "Almanî bi gelemperî Präsens li ser Futur I tercîh dikin gava peyveke demê jixwe pêşerojê zelal dike.",
      },
      {
        explanation: "wir werden werdigire — heman şiklê rader bixwe.",
        grammarRule: "Şiklê werden ê wir: werden.",
        prompt: "Şiklê rast ê werden ji bo 'wir' binivîsin.",
      },
      {
        explanation: "sie (ew - jin) heman şiklê er werdigire: wird.",
        grammarRule: "Şiklê werden ê sie (yekjimar): wird.",
        prompt: "Hevokê bi şiklê rast ê werden temam bikin.",
      },
      {
        explanation: "wird bi tena serê xwe, bêyî raderek li pey wê, wateya 'dibe' dide — Er wird Arzt guherîna rewşê vedibêje, ne pêşbîniyeke pêşerojê.",
        grammarRule: "werden bêyî rader wateya 'bûn' dide, ne nîşana dema pêşerojê.",
        prompt: "werden di kîjan hevokê de wateya 'dibe' dide, ne dema pêşerojê?",
      },
    ],
    conclusion:
      "Futur I şiklekî tewandî yê werden digel raderekê li dawiya hevokê li hev tîne. Ew di axaftina rojane de ji ku hûn texmîn bikin kêmtir belav e — almanî pir caran Präsens ji bo bûyerên plansaz tercîh dikin — lê ew bijartina xwezayî ye ji bo pêşbînî, soz û texmînên li ser tiştê were.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Futur I bi şiklekî tewandî yê werden digel radera lêkera bingehîn ava bikin.",
          "Raderê li dawiya hevokê tam deynin.",
          "Futur I ji bo pêşbînî, soz û texmînên li ser pêşerojê bi kar bînin — ne ji bo planên asayî.",
        ],
        notes: [
          "Ji bo planên rojane bi peyveke demê ya zelal, Präsens bi gelemperî xwezayîtir e: Ich fliege morgen ji Ich werde morgen fliegen bêtir îdyomatîk xuya dike, her çend herdu jî rast in.",
          "werden bi tena serê xwe (bêyî raderek li pey wê) wateya 'bûn' dide — Er wird Arzt (ew dibe bijîşk) — loma peywend destnîşan dike kîjan wate tê xwestin.",
        ],
        mistakeNotes: [
          "Divê rader li dawiya hevokê tam bê, piştî her agahiyeke din mîna morgen.",
          "Futur I raderê tazî bi kar tîne — bêyî zu li pêşiya wê.",
        ],
        exceptions: [
          "werden bixwe yek ji lêkerên hindik ên rastî nerêkûpêk ên almanî ye — şiklên wê yên Präsens (wirst, wird) tu şablonek rêkûpêk nasopînin û divê rasterast bêne ezberkirin.",
          "Gava wateya pêşerojê jixwe ji peywendê an peyveke demê eşkere ye, Futur I pir caran bi tevahî tê avêtin li ser hesabê Präsens ya hêsantir.",
        ],
        tips: [
          "Şeş şiklên werden wek komeke xwe ya biçûk ezber bikin — ew her dem derdikevin pêş, hem wek 'bûn' û hem di nav Futur I de.",
          "Heke hûn tenê peyveke demê bi kar tînin ji bo nîşandana pêşerojê, wek standard biçin ser Präsens — Futur I ji bo pêşbînî an sozên rastîn hilgirin.",
        ],
      },
    },
  },
};
