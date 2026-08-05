import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Dutch (Nederlands) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const nl: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "De naamval van het onderwerp — de vorm waarin ieder zelfstandig naamwoord begint.",
    objectives: [
      "Het onderwerp van een Duitse zin herkennen",
      "De nominatief gebruiken na sein, werden en bleiben",
    ],
    explanationSimple: [
      "De nominatief is de naamval van het onderwerp — de persoon of het ding dat de handeling in de zin uitvoert.",
      "Het is ook de vorm die je in een woordenboek vindt, dus elk nieuw zelfstandig naamwoord dat je leert, begint in de nominatief.",
    ],
    explanationDetailed: [
      "Het Duits geeft de rol van een zelfstandig naamwoord in de zin aan door het lidwoord te veranderen, niet door de woordvolgorde te wijzigen zoals in het Engels vaak gebeurt. De nominatief markeert het onderwerp: degene die de handeling van het werkwoord verricht.",
      "Je vindt het onderwerp door te vragen wer? (wie?) voor personen of was? (wat?) voor dingen — wat die vraag ook beantwoordt, staat in de nominatief.",
      "De nominatief verschijnt ook na de koppelwerkwoorden sein (zijn), werden (worden) en bleiben (blijven), omdat het zelfstandig naamwoord dat erop volgt het onderwerp herbenoemt in plaats van een handeling te ondergaan.",
    ],
    exampleMeanings: ["De man slaapt.", "De vrouw werkt vandaag.", "Het kind lacht hard.", "Hij is mijn leraar."],
    exerciseTexts: [
      {
        explanation: "Kind is onzijdig, en als onderwerp heeft het het onzijdige nominatieflidwoord das nodig.",
        grammarRule: "Onzijdig nominatieflidwoord: das.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Nominatief.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann is het onderwerp dat de handeling uitvoert, dus blijft het in de nominatief staan — der, niet den of dem.",
        grammarRule: "Gebruik de nominatief voor het onderwerp van elke zin.",
        prompt: "In welke zin wordt de Nominatief correct gebruikt?",
      },
      {
        explanation:
          "Klopt — sein/werden/bleiben verbinden het onderwerp met een zelfstandig naamwoord dat het herbenoemt, dus dat naamwoord blijft ook in de nominatief.",
        grammarRule: "Gebruik de nominatief voor het naamwoordelijk deel van het gezegde na sein, werden en bleiben.",
        prompt: "De nominatief wordt gebruikt voor het naamwoordelijk deel van het gezegde na sein, werden en bleiben.",
      },
      {
        explanation: "Frau is vrouwelijk, en als onderwerp heeft het het vrouwelijke nominatieflidwoord die nodig.",
        grammarRule: "Vrouwelijk nominatieflidwoord: die.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Nominatief.",
      },
      {
        explanation:
          "Duitse hoofdzinnen beginnen met het onderwerp (Der Junge), gevolgd door de vervoegde werkwoordsvorm (liest) op de tweede plaats, en dan de rest van de zin.",
        grammarRule: "Vraag wer? of was? om het nominatiefelement te herkennen — hier is Der Junge het antwoord op wer?",
        translation: "De jongen leest een boek.",
        prompt: "Zet de woorden in de juiste volgorde.",
      },
      {
        explanation: "Kind is onzijdig → das; Katze is vrouwelijk → die — beide zijn onderwerpen in de nominatief.",
        grammarRule: "Koppel het geslacht van elk zelfstandig naamwoord aan het bijbehorende nominatieflidwoord: der/die/das.",
        prompt: "Sleep het juiste lidwoord naar elke lege plek.",
      },
      {
        explanation: "Der Lehrer is mannelijk, dus wordt het vervangen door het voornaamwoord er in de nominatief.",
        grammarRule: "Mannelijk nominatiefvoornaamwoord: er.",
        prompt: "Typ het persoonlijk voornaamwoord in de Nominatief dat 'der Lehrer' vervangt.",
      },
    ],
    conclusion:
      "De nominatief markeert het onderwerp van de zin en het naamwoordelijk deel van het gezegde na sein, werden en bleiben. Het is de basisvorm waaruit alle andere naamvallen voortkomen, dus het loont om die goed onder de knie te krijgen voordat je verdergaat met de accusatief.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Gebruik de nominatief voor het onderwerp van elke zin.",
          "Gebruik hem voor het naamwoordelijk deel van het gezegde na sein, werden en bleiben.",
          "Vraag wer? of was? om het nominatiefelement te herkennen.",
        ],
        notes: [
          "De nominatief is de 'standaardvorm' — degene die je in een woordenboek opzoekt en waarmee alle andere naamvallen worden vergeleken.",
          "De uitgang van een bijvoeglijk naamwoord vóór een nominatief zelfstandig naamwoord hangt af van het lidwoord en het geslacht, bijvoorbeeld der große Mann — maar dat is een apart onderwerp.",
        ],
        mistakeNotes: [
          "Het werkwoord sehen vraagt een lijdend voorwerp in de accusatief, niet in de nominatief — dit is een van de eerste fouten die elke leerling maakt.",
          "De vrouwelijke nominatief is altijd die, nooit der — der is voorbehouden aan mannelijke zelfstandige naamwoorden.",
        ],
        exceptions: [
          "Een groep mannelijke zelfstandige naamwoorden, bekend als 'zwakke naamwoorden' of n-Deklination — der Junge, der Name, der Student, der Herr — krijgt in elke naamval behalve de nominatief enkelvoud de uitgang -n of -en.",
          "Een handvol zelfstandige naamwoorden heeft een wisselend of regionaal betwist geslacht (bijvoorbeeld der/das Joghurt), maar een woordenboek geeft altijd de standaardvorm.",
        ],
        tips: [
          "Twijfel je over welke naamval je nodig hebt, zoek dan eerst het werkwoord op en vraag wer oder was tut das? — het antwoord staat altijd in de nominatief.",
          "Leer elk nieuw zelfstandig naamwoord samen met het nominatieflidwoord (der/die/das) — die ene gewoonte voorkomt later de meeste fouten met het geslacht.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "De naamval van het lijdend voorwerp, en een vaste reeks voorzetsels.",
    objectives: [
      "Het lijdend voorwerp van een overgankelijk werkwoord herkennen",
      "De verandering der → den / ein → einen correct toepassen",
      "De vaste voorzetsels herkennen die de accusatief oproepen",
    ],
    explanationSimple: [
      "De accusatief markeert het lijdend voorwerp — de persoon of het ding dat rechtstreeks de handeling van het werkwoord ondergaat.",
      "Het is ook de naamval die volgt op een kleine, vaste groep voorzetsels, zonder uitzondering.",
    ],
    explanationDetailed: [
      "Zodra je het onderwerp (nominatief) hebt gevonden, is de volgende vraag meestal: 'waarop richt het onderwerp zich?' — dat is het lijdend voorwerp, en in het Duits krijgt dat de accusatief.",
      "Je vindt het door te vragen wen? (wie?) voor personen of was? (wat?) voor dingen.",
      "Alleen het mannelijke lidwoord verandert zichtbaar in de accusatief: der wordt den, en ein wordt einen. Vrouwelijke, onzijdige en meervoudslidwoorden zien er precies zo uit als in de nominatief — daarom lijkt de accusatief vaak 'onzichtbaar' totdat er een mannelijk zelfstandig naamwoord bij komt kijken.",
      "Een vaste groep werkwoorden neemt bijna altijd een lijdend voorwerp in de accusatief — haben, sehen, brauchen, kaufen, essen, trinken, lieben — en een vaste groep voorzetsels roept altijd de accusatief op: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Ik zie de man.", "Zij koopt een appel.", "Wij houden van onze hond.", "Het cadeau is voor jou."],
    exerciseTexts: [
      {
        explanation:
          "Hund is mannelijk, dus ondergaat het bezittelijk voornaamwoord dezelfde, uitsluitend mannelijke verandering in de accusatief: unser ← unseren.",
        grammarRule: "Alleen het mannelijke lidwoord/bezittelijk voornaamwoord verandert in de accusatief.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Akkusativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "sehen vraagt een lijdend voorwerp in de accusatief, en mannelijk der wordt den.",
        grammarRule: "Alleen het mannelijke lidwoord verandert: der ← den, ein ← einen.",
        prompt: "In welke zin wordt de Akkusativ correct gebruikt?",
      },
      {
        explanation: "Klopt — die blijft die in zowel de nominatief als de accusatief; alleen het mannelijke lidwoord verandert.",
        grammarRule: "Vrouwelijke, onzijdige en meervoudslidwoorden zijn identiek aan die in de nominatief.",
        prompt: "Het vrouwelijke lidwoord in de Akkusativ is identiek aan het vrouwelijke lidwoord in de Nominatief.",
      },
      {
        explanation: "Apfel is mannelijk en heeft als lijdend voorwerp na kaufen de accusatiefvorm einen nodig.",
        grammarRule: "Onbepaald mannelijk lidwoord in de accusatief: einen.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Akkusativ.",
      },
      {
        explanation: "Eerst het onderwerp (Wir), dan het werkwoord (lieben), en dan het lijdend voorwerp in de accusatief (unseren Hund).",
        grammarRule: "Gebruik de accusatief voor het lijdend voorwerp van een overgankelijk werkwoord.",
        translation: "Wij houden van onze hond.",
        prompt: "Zet de woorden in de juiste volgorde.",
      },
      {
        explanation: "für roept altijd de accusatief op, dus du wordt dich en er wordt ihn.",
        grammarRule: "Gebruik altijd de accusatief na durch, für, gegen, ohne, um.",
        prompt: "Sleep het juiste voornaamwoord naar elke lege plek.",
      },
      {
        explanation: "Student is een zwak zelfstandig naamwoord (n-Deklination), dus krijgt het zowel het accusatieflidwoord den als de uitgang -en: den Studenten.",
        grammarRule: "Zwakke zelfstandige naamwoorden krijgen ook in de accusatief -n/-en.",
        prompt: "Typ de Akkusativ-vorm van 'der Student', inclusief lidwoord (het is een zwak zelfstandig naamwoord).",
      },
    ],
    conclusion:
      "De accusatief markeert het lijdend voorwerp en volgt op durch, für, gegen, ohne en um. De enige zichtbare verandering ten opzichte van de nominatief is het mannelijke lidwoord — der/ein wordt den/einen — de rest blijft gelijk.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Gebruik de accusatief voor het lijdend voorwerp van een overgankelijk werkwoord.",
          "Vraag wen? voor personen of was? voor dingen om het te vinden.",
          "Alleen het mannelijke lidwoord verandert: der ← den, ein ← einen.",
          "Vrouwelijke, onzijdige en meervoudslidwoorden zijn identiek aan die in de nominatief.",
          "Gebruik altijd de accusatief na durch, für, gegen, ohne en um.",
        ],
        notes: [
          "Omdat alleen mannelijke lidwoorden veranderen, controleren leerlingen vaak het geslacht van vrouwelijke en onzijdige zelfstandige naamwoorden niet meer — maar bezittelijke en persoonlijke voornaamwoorden (mein ← meinen, ihr ← ihren) volgen hetzelfde, uitsluitend mannelijke patroon, dus blijf alert.",
          "Tijdsuitdrukkingen die antwoord geven op 'hoe lang?' of een specifiek moment noemen ('welke dag?') gebruiken vaak de accusatief zonder voorzetsel: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "Het werkwoord sehen heeft een lijdend voorwerp in de accusatief nodig, dus moet het mannelijke lidwoord der veranderen in den.",
          "für roept altijd de accusatief op, dus wordt het voornaamwoord ich tot mich.",
        ],
        exceptions: [
          "Zwakke zelfstandige naamwoorden (n-Deklination) zoals der Student, der Junge en der Name krijgen ook in de accusatief -n: den Studenten, den Jungen, den Namen — niet alleen in de datief en genitief.",
          "Sommige werkwoorden die een voorzetsel lijken te vereisen, nemen in werkelijkheid een kaal lijdend voorwerp in de accusatief, bijvoorbeeld Ich frage dich (niet 'zu dir').",
        ],
        tips: [
          "Vrouwelijke, onzijdige en meervoudige zelfstandige naamwoorden zijn identiek in de nominatief en de accusatief — als een zin 'onveranderd' lijkt, controleer dan het mannelijke zelfstandig naamwoord nog eens.",
          "Onthoud durch, für, gegen, ohne, um als één blok — ze zijn altijd accusatief, zonder uitzonderingen om je zorgen over te maken.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "De naamval van het meewerkend voorwerp — wie iets ontvangt of er baat bij heeft.",
    objectives: [
      "Het meewerkend voorwerp van een zin herkennen",
      "De volledige lidwoordverandering in de datief toepassen voor alle geslachten",
      "Werkwoorden en voorzetsels herkennen die altijd de datief vereisen",
    ],
    explanationSimple: [
      "De datief markeert het meewerkend voorwerp — meestal de persoon die iets ontvangt of er baat bij heeft.",
      "Hij geeft antwoord op de vraag wem? (aan/voor wie?).",
    ],
    explanationDetailed: [
      "Veel Duitse zinnen hebben zowel een lijdend voorwerp (accusatief) als een meewerkend voorwerp (datief): Ich gebe dem Mann das Buch — 'Ik geef de man het boek.' Dem Mann is de ontvanger, dus staat in de datief.",
      "Een vaste groep werkwoorden neemt altijd een meewerkend voorwerp in de datief, ook al lijkt de accusatief logischer — helfen, danken, gefallen, gehören, folgen, glauben en antworten zijn de werkwoorden die leerlingen het eerst tegenkomen.",
      "De datief volgt ook op een vaste reeks voorzetsels: aus, bei, mit, nach, seit, von, zu.",
      "Bij de negen 'wisselvoorzetsels' (in, an, auf, über, unter, vor, hinter, neben, zwischen) gebruik je de datief voor een plaats — antwoord op wo? (waar?) — en de accusatief voor een beweging naar een bestemming — antwoord op wohin? (waarheen?).",
    ],
    exampleMeanings: ["Ik geef de man het boek.", "Zij helpt haar zus.", "Wij reizen met de bus.", "Het huis is van de buren."],
    exerciseTexts: [
      {
        explanation: "Nachbarn is meervoud, en gehören vraagt altijd de datief, dus wordt die den.",
        grammarRule: "Elk lidwoord verandert in de datief; meervoud die wordt den.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Dativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "helfen vraagt altijd een meewerkend voorwerp in de datief, en vrouwelijk die wordt der in de datief.",
        grammarRule: "helfen vraagt altijd de datief, nooit de accusatief.",
        prompt: "In welke zin wordt de Dativ correct gebruikt?",
      },
      {
        explanation: "Klopt — die Kinder wordt den Kindern; alleen zelfstandige naamwoorden die al op -n of -s eindigen blijven ongewijzigd.",
        grammarRule: "Meervoudige zelfstandige naamwoorden krijgen -n in de datief, tenzij ze al op -n of -s eindigen.",
        prompt: "Meervoudige zelfstandige naamwoorden krijgen in de Dativ meestal de uitgang -n.",
      },
      {
        explanation: "Bus is mannelijk, en mit roept altijd de datief op, dus wordt der dem.",
        grammarRule: "Gebruik altijd de datief na aus, bei, mit, nach, seit, von, zu.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Dativ.",
      },
      {
        explanation: "Wanneer beide voorwerpen zelfstandige naamwoorden zijn, komt de datief (dem Mann) meestal vóór de accusatief (das Buch).",
        grammarRule: "Wanneer beide voorwerpen in een zin zelfstandige naamwoorden zijn, komt de datief meestal eerst.",
        translation: "Ik geef de man het boek.",
        prompt: "Zet de woorden in de juiste volgorde.",
      },
      {
        explanation: "gehören vraagt altijd de datief: sie wordt ihr en er wordt ihm.",
        grammarRule: "Een vaste groep werkwoorden vraagt altijd een meewerkend voorwerp in de datief — gehören is er een van.",
        prompt: "Sleep het juiste voornaamwoord naar elke lege plek.",
      },
      {
        explanation: "Meervoud die Kinder wordt den Kindern in de datief — het lidwoord verandert in den, en het zelfstandig naamwoord krijgt -n.",
        grammarRule: "Elk lidwoord verandert in de datief; meervoudige zelfstandige naamwoorden krijgen -n.",
        prompt: "Typ de datief-meervoudsvorm van 'die Kinder', inclusief lidwoord (bijvoorbeeld 'den …').",
      },
    ],
    conclusion:
      "De datief markeert het meewerkend voorwerp, volgt op aus/bei/mit/nach/seit/von/zu en verandert elk lidwoord — met een kenmerkende -n voor meervoudige zelfstandige naamwoorden. Enkele werkwoorden zoals helfen en danken vragen altijd een meewerkend voorwerp in de datief.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Gebruik de datief voor het meewerkend voorwerp — meestal de ontvanger of begunstigde.",
          "Vraag wem? om het te vinden.",
          "Elk lidwoord verandert: der → dem, die → der, das → dem, die (meervoud) → den.",
          "Meervoudige zelfstandige naamwoorden krijgen -n in de datief, tenzij ze al op -n of -s eindigen: die Kinder → den Kindern.",
          "Gebruik altijd de datief na aus, bei, mit, nach, seit, von, zu.",
          "Bij wisselvoorzetsels geeft de datief antwoord op wo?, de accusatief op wohin?.",
        ],
        notes: [
          "Datiefwerkwoorden nemen voor de betrokken persoon nooit een lijdend voorwerp in de accusatief — helfen is bijvoorbeeld altijd 'jemandem helfen', nooit 'jemanden helfen'.",
          "Een woordvolgordetip: wanneer beide voorwerpen in een zin zelfstandige naamwoorden zijn, komt de datief meestal eerst: Ich gebe dem Mann das Buch. Zijn beide voornaamwoorden, dan komt de accusatief eerst: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "Het werkwoord helfen vraagt altijd de datief, nooit de accusatief — zonder uitzondering.",
          "mit vraagt altijd de datief, en het meervoudige zelfstandig naamwoord heeft de uitgang -n nodig: Kinder → Kindern.",
        ],
        exceptions: [
          "Een kleine groep werkwoorden en bijvoeglijke naamwoorden gaat om idiomatische redenen samen met de datief — gefallen (bevallen), schmecken (goed smaken) en stehen (goed staan) zetten de persoon allemaal in de datief: Das Kleid steht dir gut.",
          "Zelfstandige naamwoorden die in het meervoud al op -n of -s eindigen, krijgen in de datief geen extra -n: den Autos, den Frauen.",
        ],
        tips: [
          "De datief meervoud eindigt vrijwel altijd op -n — die -n herkennen op een zelfstandig naamwoord is vaak de snelste manier om in één oogopslag een datiefzin te herkennen.",
          "Leer aus, bei, mit, nach, seit, von, zu als één geheel — er zit geen andere logica achter dan de lijst zelf.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "De gangbare Duitse verleden tijd — hoe je hem vormt en wanneer je hem gebruikt.",
    objectives: [
      "Het Perfekt vormen met haben of sein plus een voltooid deelwoord",
      "Correct kiezen tussen haben en sein",
      "Regelmatige en onregelmatige voltooide deelwoorden herkennen",
    ],
    explanationSimple: [
      "Het Perfekt is de vorm waarmee gesproken Duits meestal over het verleden praat — geen enkelvoudige werkwoordsvorm, maar haben of sein plus een voltooid deelwoord.",
      "De opbouw is altijd hetzelfde, ongeacht wie er spreekt: het hulpwerkwoord op de tweede plaats, en het voltooid deelwoord helemaal aan het eind van de zin.",
    ],
    explanationDetailed: [
      "De meeste werkwoorden gebruiken haben als hulpwerkwoord. Werkwoorden van beweging (gehen, fahren, kommen) of van toestandsverandering (aufwachen, werden) gebruiken meestal sein.",
      "Regelmatige (zwakke) werkwoorden vormen hun voltooid deelwoord met ge- + stam + -t: machen → gemacht, spielen → gespielt. Onregelmatige (sterke) werkwoorden veranderen vaak hun stamklinker en eindigen op -en: sprechen → gesprochen, gehen → gegangen.",
      "Omdat het voltooid deelwoord naar het einde van de zin gaat, komt al het andere — voorwerpen, tijdsbepalingen, ontkenning — tussen het hulpwerkwoord en het voltooid deelwoord te staan.",
    ],
    exampleMeanings: ["Ik heb het boek gelezen.", "Wij zijn naar Berlijn gereisd.", "Zij heeft gisteren gewerkt.", "Hij is vroeg wakker geworden."],
    exerciseTexts: [
      {
        explanation: "fahren beschrijft een verplaatsing van de ene plaats naar de andere, dus neemt het sein: Wir sind gefahren.",
        grammarRule: "Gebruik sein voor werkwoorden van beweging of toestandsverandering.",
        prompt: "Welk hulpwerkwoord neemt 'fahren' in het Perfekt?",
      },
    ],
    quizTexts: [
      {
        explanation: "lesen neemt haben, en het onregelmatige voltooid deelwoord is gelesen, dat aan het einde van de zin staat.",
        grammarRule: "Gebruik haben als hulpwerkwoord voor de meeste werkwoorden.",
        prompt: "In welke zin wordt het Perfekt correct gevormd?",
      },
      {
        explanation: "Klopt — telefonieren → telefoniert, zonder ge-.",
        grammarRule: "Werkwoorden die op -ieren eindigen krijgen nooit ge-.",
        prompt: "Werkwoorden zoals telefonieren krijgen in het Perfekt nooit het voorvoegsel ge-.",
      },
      {
        explanation: "fahren is een werkwoord van beweging, dus neemt het sein: sind gefahren.",
        grammarRule: "Gebruik sein voor werkwoorden van beweging of toestandsverandering.",
        prompt: "Vul de zin aan met het juiste hulpwerkwoord.",
      },
      {
        explanation: "essen is onregelmatig: gegessen, niet de regelmatige vorm geesst.",
        grammarRule: "Onregelmatige voltooide deelwoorden veranderen vaak hun stamklinker en eindigen op -en.",
        prompt: "Typ het voltooid deelwoord van 'essen'.",
      },
    ],
    conclusion:
      "Het Perfekt wordt gevormd met haben of sein plus een voltooid deelwoord aan het einde van de zin. De meeste werkwoorden nemen haben; werkwoorden van beweging of toestandsverandering nemen sein. Regelmatige voltooide deelwoorden eindigen op -t, onregelmatige vaak op -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Gebruik haben als hulpwerkwoord voor de meeste werkwoorden.",
          "Gebruik sein voor werkwoorden van beweging of toestandsverandering.",
          "Regelmatig voltooid deelwoord: ge- + stam + -t.",
          "Onregelmatige voltooide deelwoorden eindigen vaak op -en en kunnen een andere stamklinker hebben.",
          "Het voltooid deelwoord gaat altijd naar het einde van de zin.",
        ],
        notes: [
          "Een handvol veelvoorkomende onregelmatige voltooide deelwoorden kun je beter direct uit je hoofd leren dan afleiden: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Werkwoorden met scheidbaar voorvoegsel plaatsen -ge- tussen het voorvoegsel en de stam: aufwachen → aufgewacht, niet geaufwacht.",
        ],
        mistakeNotes: ["fahren is een werkwoord van beweging, dus neemt het sein, niet haben."],
        exceptions: [
          "Werkwoorden die op -ieren eindigen (telefonieren, studieren) krijgen nooit ge-: telefoniert, studiert.",
          "Werkwoorden met een onscheidbaar voorvoegsel (be-, ver-, er-, ge-, ent-, zer-) laten ge- ook weg: besuchen → besucht, verstehen → verstanden.",
        ],
        tips: [
          "Twijfel je tussen haben en sein, vraag jezelf dan: beschrijft dit werkwoord een verplaatsing van A naar B, of een toestandsverandering? Zo ja, dan is het vrijwel zeker sein.",
          "Leer nieuwe onregelmatige werkwoorden meteen met alle drie de vormen — infinitief, onvoltooid verleden tijd, voltooid deelwoord — net zoals je der/die/das leert bij een nieuw zelfstandig naamwoord.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Basiswoordenschat om over gezinsleden te praten.",
    explanationSimple: [
      "Deze les behandelt de Duitse woorden voor naaste familie — woorden die je constant zult gebruiken zodra je je eigen leven begint te beschrijven.",
    ],
    explanationDetailed: [
      "Familiewoorden volgen de regelmatige geslachtspatronen die je al kent: de meeste woorden voor personen zijn der of die, afhankelijk van het geslacht van de persoon, met een paar vaste uitzonderingen zoals das Kind (het kind) en das Baby (de baby), die grammaticaal onzijdig zijn ongeacht het geslacht van het kind.",
      "Bezittelijke voornaamwoorden (mein, meine) stemmen overeen met het geslacht van het zelfstandig naamwoord, net als ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["Dit is mijn moeder.", "Mijn broer woont in Berlijn.", "Ik heb twee zussen."],
    exerciseTexts: [
      {
        explanation: "Schwester is vrouwelijk: die Schwester.",
        grammarRule: "Zelfstandige naamwoorden voor familieleden nemen het geslacht over van de persoon die ze benoemen.",
        prompt: "Typ het Duitse woord voor 'zus'.",
      },
    ],
    quizTexts: [
      {
        explanation: "der Vater betekent 'vader'.",
        grammarRule: "der Vater is mannelijk.",
        prompt: "Welk woord betekent 'vader'?",
      },
      {
        explanation: "Klopt — das Kind is altijd onzijdig.",
        grammarRule: "Een paar woorden voor personen, zoals das Kind en das Baby, zijn vast onzijdig.",
        prompt: "'das Kind' is grammaticaal onzijdig, ongeacht het geslacht van het kind.",
      },
      {
        explanation: "Schwestern is het meervoud van Schwester.",
        grammarRule: "De meeste vrouwelijke zelfstandige naamwoorden krijgen -n of -en in het meervoud.",
        prompt: "Vul de zin aan.",
      },
    ],
    conclusion:
      "Familiewoordenschat is grammaticaal regelmatig — zelfstandige naamwoorden met een geslacht voor personen, met das Kind als vaste onzijdige uitzondering — en geeft je meteen een reden om bezittelijke voornaamwoorden te oefenen.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["moeder", "vader", "zus", "broer", "ouders (meervoud)", "kind", "grootmoeder", "grootvader"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Een korte alledaagse tekst over bestellen in een café, met begripsvragen.",
    explanationSimple: ["Een korte scène in een café — lees hem eerst één keer voor de algemene indruk, voordat je woorden opzoekt."],
    explanationDetailed: [
      "Lezen op A1-niveau werkt het beste in twee stappen: eerst voor de algemene situatie (wie, waar, wat gebeurt er), en dan een tweede keer om de losse woorden op te merken die je de eerste keer miste.",
      "Je hoeft niet elk woord te begrijpen om de begripsvragen hieronder te beantwoorden — richt je op wat de betekenis van de scène echt verandert.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Anna bestelt koffie (einen Kaffee), geen thee.",
        grammarRule: "bestellen + lijdend voorwerp in de accusatief.",
        prompt: "Anna bestelt thee.",
      },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — ze gaat aan een tafel bij het raam zitten.",
        grammarRule: "sich setzen an + accusatief.",
        prompt: "Waar gaat Anna zitten?",
      },
      {
        explanation: "Klopt — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Twee nevengeschikte werkwoorden, verbonden met und.",
        prompt: "Anna leest een boek terwijl ze haar koffie drinkt.",
      },
      {
        explanation: "Minuten (minuten) — Nach zehn Minuten.",
        grammarRule: "nach + tijdsbepaling in de datief.",
        prompt: "Vul aan: de ober brengt de bestelling na tien ___.",
      },
    ],
    conclusion:
      "Een korte scène in een café, volledig opgebouwd uit A1-woordenschat en eenvoudige hoofdzinnen — goede oefening om te lezen voor de grote lijn, voordat je je zorgen maakt over elk afzonderlijk woord.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Een korte stationsomroep — luister naar het perron en het vertrektijdstip.",
    explanationSimple: ["Een korte stationsomroep — er is nog geen audiobestand gekoppeld, dus lees het transcript alsof je het hoort."],
    explanationDetailed: [
      "Station- en luchthavenomroepen volgen in het Duits een heel voorspelbare structuur — juist die voorspelbaarheid maakt ze een goede eerste luisteroefening: treinnummer, perron (Gleis) en tijd, vrijwel altijd in dezelfde volgorde.",
      "Zodra je betrouwbaar een perronnummer en een tijdstip uit een omroep kunt halen, kun je dezelfde luisterstrategie toepassen op elke soortgelijke, formulaïsche audio (weerberichten, veiligheidsinstructies, enzovoort).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Gleis 7 — perron 7.",
        grammarRule: "von + perronnummer in de datief.",
        prompt: "Van welk perron vertrekt de trein?",
      },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — perron 7.",
        grammarRule: "von + datief.",
        prompt: "Van waar vertrekt de trein naar München?",
      },
      {
        explanation: "vierzehn Uhr dreißig betekent 14:30.",
        grammarRule: "Gesproken 24-uurstijd: [uur] Uhr [minuten].",
        prompt: "Typ het vertrektijdstip in 24-uurscijfers (bijvoorbeeld 09:15).",
      },
    ],
    conclusion:
      "Stationsomroepen zijn formulaïsch — treinnummer, perron, tijd — wat ze tot een ideale eerste luisteroefening maakt zodra je het patroon herkent waarnaar je moet luisteren.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Oefen jezelf hardop voor te stellen — naam, herkomst en een paar details.",
    explanationSimple: [
      "Jezelf voorstellen is een van de eerste dingen die je echt hardop in het Duits zult zeggen — een vaste handvol korte zinnen die je constant zult hergebruiken.",
    ],
    explanationDetailed: [
      "Spreekoefening werkt hier het beste hardop, niet alleen in gedachten — zeg elke opdracht hieronder als een volledige zin voordat je verdergaat naar de volgende, ook al luistert er niemand.",
      "Er is nog geen opname- of spraakbeoordelingsfunctie; zie dit als een zelfgestuurde spreekoefening waarbij je de opdrachten en voorbeeldzinnen als aanpasbaar script gebruikt.",
    ],
    exampleMeanings: ["Ik heet Anna.", "Ik kom uit Duitsland.", "Ik ben studente."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … is de standaardmanier om te zeggen waar je vandaan komt.",
        grammarRule: "kommen aus + land-/plaatsnaam in de datief.",
        prompt: "Typ het Duits voor 'Ik kom uit …'.",
      },
    ],
    quizTexts: [
      {
        explanation: "heißen wordt rechtstreeks vervoegd met de naam als aanvulling: Ich heiße Anna.",
        grammarRule: "heißen + naam, zonder extra werkwoord.",
        prompt: "Welke zin zegt correct 'Ik heet Anna'?",
      },
      {
        explanation: "heißt is de du-vorm van heißen.",
        grammarRule: "du heißt (regelmatige vervoeging van een -en-werkwoord).",
        prompt: "Vul aan: informeel naar iemands naam vragen.",
      },
    ],
    conclusion:
      "Een zelfvoorstelling is opgebouwd uit drie vaste zinspatronen — naam, herkomst, beroep — die het waard zijn om vanaf dag één veelvuldig hardop te oefenen, omdat je ze meteen zult gebruiken.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Zeg je naam:",
          "Zeg waar je vandaan komt:",
          "Zeg wat je doet:",
          "Vraag iemand anders naar zijn of haar naam:",
          "Zet je drie eigen zinnen samen tot één korte introductie.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Een gemengde herhalingstoets over naamvallen, alledaagse woordenschat en basiswoordvolgorde.",
    explanationSimple: [
      "Een pure herhalingstoets — geen nieuwe uitleg, alleen een gemengde reeks vragen over alles wat tot nu toe op A1-niveau behandeld is.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "Het onderwerp van de zin krijgt de nominatief: Der Mann.",
        grammarRule: "Gebruik de nominatief voor het onderwerp van elke zin.",
        prompt: "Welk lidwoord is correct? '___ Mann schläft.' (onderwerp)",
      },
      {
        explanation: "sehen vraagt een lijdend voorwerp in de accusatief, en mannelijk der wordt den.",
        grammarRule: "Alleen het mannelijke lidwoord verandert in de accusatief.",
        prompt: "Vul aan met het juiste lidwoord in de accusatief.",
      },
      { explanation: "die Schwester.", grammarRule: "Herhaling van familiewoordenschat.", prompt: "Typ het Duitse woord voor 'zus'." },
      {
        explanation: "Eerst het onderwerp, dan het vervoegde werkwoord op de tweede plaats.",
        grammarRule: "Basiswoordvolgorde in het Duits: onderwerp, werkwoord, rest.",
        translation: "Ik heet Anna.",
        prompt: "Zet de woorden in de juiste volgorde.",
      },
    ],
    conclusion: "Een korte gemengde herhaling van naamvallen, woordenschat en woordvolgorde — een goede check voordat je verdergaat na A1.",
    details: { kind: "none" },
  },
  "grammar/b2/genitiv": {
    summary: "De naamval van bezit — steeds formeler in de spreektaal, maar nog altijd essentieel om te lezen en te schrijven.",
    objectives: [
      "De genitief herkennen als de naamval van bezit",
      "De juiste uitgang toevoegen bij mannelijke en onzijdige zelfstandige naamwoorden",
      "De genitief gebruiken na trotz, wegen, während en statt",
    ],
    explanationSimple: [
      "De genitief drukt bezit uit — van wie of wat iets is.",
      "Hij volgt ook op een kleine, vaste groep voorzetsels: trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "In tegenstelling tot de andere drie naamvallen verandert de genitief het zelfstandig naamwoord zelf, niet alleen het lidwoord — mannelijke en onzijdige zelfstandige naamwoorden krijgen -s of -es, terwijl vrouwelijke en meervoudige naamwoorden precies hetzelfde blijven.",
      "In alledaags gesproken Duits neemt von + datief vaak de plaats van de genitief over (von meinem Vater in plaats van meines Vaters) — maar de genitief blijft de verwachte, formelere vorm in geschreven en zorgvuldig gesproken taal, en je komt hem voortdurend tegen bij het lezen.",
      "De woordvolgorde bij de genitief plaatst de bezitter na het zelfstandig naamwoord dat hij bepaalt — das Auto meines Vaters, niet meines Vaters Auto — behalve bij namen, die vooraan komen: Annas Auto.",
    ],
    exampleMeanings: [
      "De auto van mijn vader is nieuw.",
      "Ik vind de kleur van het huis mooi.",
      "De naam van de vrouw is Anna.",
      "Ondanks de regen gaan we wandelen.",
    ],
    exerciseTexts: [
      {
        explanation: "Frau is vrouwelijk, dus krijgt het der in de genitief — het zelfstandig naamwoord zelf verandert niet.",
        grammarRule: "Vrouwelijk genitieflidwoord: der.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Genitiv.",
      },
    ],
    quizTexts: [
      {
        explanation: "Vaters krijgt de genitiefuitgang -s na het bezittelijk voornaamwoord meines, wat aangeeft van wie de auto is.",
        grammarRule: "Mannelijke zelfstandige naamwoorden krijgen -s of -es in de genitief.",
        prompt: "In welke zin wordt de Genitiv correct gebruikt?",
      },
      {
        explanation:
          "Klopt — alleen mannelijke en onzijdige zelfstandige naamwoorden krijgen een genitiefuitgang; vrouwelijke en meervoudige naamwoorden blijven ongewijzigd.",
        grammarRule: "Genitiefuitgangen van het zelfstandig naamwoord: -s/-es alleen bij mannelijk en onzijdig.",
        prompt: "Mannelijke en onzijdige zelfstandige naamwoorden krijgen doorgaans -s of -es in de genitief, maar vrouwelijke zelfstandige naamwoorden veranderen nooit.",
      },
      {
        explanation: "Haus is onzijdig, dus krijgt het des in de genitief, en het zelfstandig naamwoord zelf krijgt -es: Hauses.",
        grammarRule: "Onzijdig genitieflidwoord: des, zelfstandig naamwoord +(e)s.",
        prompt: "Vul de zin aan met het juiste lidwoord in de Genitiv.",
      },
      {
        explanation: "Trotz is een van de vaste voorzetsels die altijd de genitief oproepen.",
        grammarRule: "Genitiefvoorzetsels: während, trotz, wegen, statt.",
        prompt: "Typ het genitiefvoorzetsel dat 'ondanks' betekent.",
      },
    ],
    conclusion:
      "De genitief markeert bezit en volgt op een kleine groep voorzetsels zoals trotz, wegen en während. Mannelijke en onzijdige zelfstandige naamwoorden krijgen -s of -es; vrouwelijke en meervoudige naamwoorden blijven ongewijzigd. Hij wordt in de spreektaal steeds vaker vervangen door von + datief, maar blijft essentieel om te lezen en formeel te schrijven.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Gebruik de genitief om bezit uit te drukken — van wie of wat iets is.",
          "Gebruik hem na de vaste voorzetsels trotz, wegen, während en statt.",
          "Voeg -s of -es toe aan mannelijke en onzijdige zelfstandige naamwoorden; vrouwelijke en meervoudige naamwoorden veranderen niet.",
        ],
        notes: [
          "In alledaags gesproken Duits vervangt von + datief vaak de genitief (von meinem Vater in plaats van meines Vaters) — maar de genitief blijft verwacht in geschreven en formele taal.",
          "De woordvolgorde bij de genitief plaatst de bezitter na het zelfstandig naamwoord dat hij bepaalt: das Auto meines Vaters, niet meines Vaters Auto (behalve bij namen: Annas Auto).",
        ],
        mistakeNotes: [
          "Het bezittelijk voornaamwoord zelf heeft de genitiefuitgang -es nodig, en het zelfstandig naamwoord heeft -s nodig — beide veranderen samen.",
          "Het lidwoord des alleen is niet genoeg — onzijdige zelfstandige naamwoorden krijgen in de genitief ook -es.",
        ],
        exceptions: [
          "Eenlettergrepige onzijdige/mannelijke zelfstandige naamwoorden krijgen meestal -es (des Hauses, des Mannes); langere naamwoorden krijgen vaak alleen -s (des Computers, des Lehrers).",
          "Zwakke mannelijke zelfstandige naamwoorden (n-Deklination) zoals der Student of der Junge krijgen in de genitief ook -en, niet -s: des Studenten, niet des Studentens.",
        ],
        tips: [
          "Als je een zin kunt herformuleren met 'von + datief' en hij nog steeds natuurlijk klinkt, is de genitief daar meestal optioneel — herken hem wel altijd, want je komt hem voortdurend tegen in geschreven taal.",
          "Leer trotz, wegen, während en statt als één set — dit zijn de vier genitiefvoorzetsels die je het vaakst tegenkomt.",
        ],
      },
    },
  },
  "grammar/a1/praesens": {
    summary: "De Duitse tegenwoordige tijd — regelmatige uitgangen, en hoe hij ook dekt wat het Engels met 'is doing' uitdrukt.",
    objectives: [
      "Regelmatige werkwoorden vervoegen in het Präsens",
      "Het Präsens gebruiken voor zowel het heden als de nabije toekomst",
      "De tussenklinker -e- herkennen bij stammen die op -t of -d eindigen",
    ],
    explanationSimple: [
      "Het Präsens is de Duitse tegenwoordige tijd — gebruikt voor wat er nu gebeurt, algemene feiten en vaak ook de nabije toekomst.",
      "Regelmatige werkwoorden krijgen een voorspelbare uitgang op de stam, afhankelijk van wie de handeling uitvoert.",
    ],
    explanationDetailed: [
      "Om een regelmatig werkwoord te vervoegen, haal je -en van de infinitief af om de stam te krijgen, en voeg je daar de uitgang bij die bij het onderwerp hoort: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "Het Duits heeft geen aparte duurvorm — ich spiele dekt zowel 'ik speel' als 'ik ben aan het spelen'. De context vertelt je welke betekenis bedoeld is.",
      "Het Präsens wordt ook vaak gebruikt om over de nabije toekomst te praten, vooral met een tijdsaanduiding: Ich fliege morgen nach Berlin (Ik vlieg morgen naar Berlijn).",
    ],
    exampleMeanings: ["Ik speel voetbal.", "Jij leert Duits.", "Hij werkt vandaag.", "Wij gaan morgen naar Berlijn."],
    exerciseTexts: [
      {
        explanation: "du krijgt de regelmatige uitgang -st: spiel + st = spielst.",
        grammarRule: "Präsens-uitgang voor du: -st.",
        prompt: "Typ de juiste Präsens-vorm van 'spielen' voor 'du'.",
      },
    ],
    quizTexts: [
      {
        explanation: "De stam van arbeiten eindigt op -t, dus heeft de er-vorm de tussenklinker nodig: arbeitet, niet arbeit.",
        grammarRule: "Voeg -e- toe vóór de uitgang als de stam eindigt op -t of -d.",
        prompt: "In welke zin wordt het Präsens correct gebruikt?",
      },
      {
        explanation:
          "Klopt — het Duits gebruikt het Präsens vaak in plaats van een aparte toekomende tijd, wanneer de context of een tijdsaanduiding de toekomst al duidelijk maakt.",
        grammarRule: "Gebruik het Präsens voor gebeurtenissen in de nabije toekomst met een tijdsuitdrukking.",
        prompt: "Het Präsens kan gebruikt worden om over de nabije toekomst te praten, vooral met een tijdswoord zoals morgen.",
      },
      {
        explanation: "wir krijgt de uitgang -en, die bij een regelmatig werkwoord identiek is aan de infinitief: wohnen.",
        grammarRule: "Präsens-uitgang voor wir: -en (hetzelfde als de infinitief).",
        prompt: "Typ de juiste Präsens-vorm van 'wohnen' voor 'wir'.",
      },
      {
        explanation: "ich krijgt de uitgang -e: kauf + e = kaufe.",
        grammarRule: "Präsens-uitgang voor ich: -e.",
        prompt: "Vul de zin aan met de juiste Präsens-vorm van 'kaufen'.",
      },
    ],
    conclusion:
      "Het Präsens gebruikt zes voorspelbare uitgangen — -e, -st, -t, -en, -t, -en — die aan de werkwoordstam worden toegevoegd, met een tussenklinker -e- voor stammen die op -t of -d eindigen. Het dekt zowel het heden als de nabije toekomst, dus het beheersen van deze uitgangen helpt al enorm voordat je aan de verleden tijden begint.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Haal -en van de infinitief af om de stam te vinden.",
          "Voeg de uitgang toe die bij het onderwerp hoort: -e, -st, -t, -en, -t, -en.",
          "Voeg een tussenklinker -e- toe vóór de uitgang als de stam op -t of -d eindigt (arbeiten → du arbeitest).",
        ],
        notes: [
          "De du- en er/sie/es-vormen hebben het vaakst de tussenklinker -e- nodig, omdat -st en -t moeilijk uit te spreken zijn direct na een stam die op -t/-d eindigt.",
          "Een handvol veelgebruikte werkwoorden is alleen in de du/er-vorm onregelmatig (fahren → du fährst, er fährt) — dit maakt geen deel uit van het hier behandelde regelmatige patroon.",
        ],
        mistakeNotes: [
          "Stammen die op -t eindigen hebben een tussenklinker -e- nodig vóór de -st-uitgang, anders wordt het woord onuitspreekbaar.",
          "Elk onderwerp heeft zijn eigen bijpassende uitgang nodig — ich krijgt altijd -e, nooit de er-vorm -t.",
        ],
        exceptions: [
          "Sterke werkwoorden met klinkerwisseling, zoals fahren, sehen en sprechen, veranderen hun klinker alleen in de du- en er/sie/es-vorm (du fährst, er fährt) — een apart patroon naast de regelmatige uitgangen hier.",
          "Sein en haben zijn volledig onregelmatig en moeten als eigen vormen worden onthouden: ich bin, du bist, er ist…",
        ],
        tips: [
          "Leer de zes uitgangen als één vaste set — zodra ze automatisch gaan, vervoegt elk regelmatig werkwoord zich op dezelfde manier.",
          "Als de stam van een nieuw werkwoord op -t, -d of een medeklinkercluster zoals -ffn eindigt (öffnen), verwacht dan de tussenklinker -e- vóór -st en -t.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "De onvoltooid verleden tijd, gebruikt in geschreven taal en voor veelgebruikte werkwoorden als sein en haben — hoe hij verschilt van het Perfekt.",
    objectives: [
      "Regelmatige (zwakke) werkwoorden vervoegen in het Präteritum",
      "Herkennen wanneer het Präteritum de voorkeur heeft boven het Perfekt",
      "sein en haben correct gebruiken in hun gangbare Präteritum-vormen",
    ],
    explanationSimple: [
      "Het Präteritum is de andere Duitse verleden tijd — vooral gebruikt in geschreven taal, en in de spreektaal voor sein, haben en de modale werkwoorden.",
      "Regelmatige werkwoorden krijgen -te plus een persoonlijke uitgang op de stam.",
    ],
    explanationDetailed: [
      "Hoewel het Perfekt de gesproken taal domineert voor de meeste werkwoorden, is het Präteritum de normale verleden tijd in geschreven Duits — verhalen, nieuwsartikelen en formele teksten gebruiken bijna altijd deze vorm.",
      "Regelmatige (zwakke) werkwoorden vormen het Präteritum door -te aan de stam toe te voegen, gevolgd door een persoonlijke uitgang: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Ook in de spreektaal verschijnen een handvol veelgebruikte werkwoorden bijna altijd in het Präteritum in plaats van het Perfekt: war (was), hatte (had), en de modale werkwoorden zoals konnte (kon) of wollte (wilde).",
    ],
    exampleMeanings: ["Ik maakte mijn huiswerk.", "Zij speelde gisteren piano.", "Hij was moe.", "Wij hadden geen tijd."],
    exerciseTexts: [
      {
        explanation: "sie (zij, meervoud) krijgt de uitgang -ten, net als wir: spiel + ten = spielten.",
        grammarRule: "Präteritum-uitgang voor sie (meervoud): -ten.",
        prompt: "Typ de juiste Präteritum-vorm van 'spielen' voor 'sie' (zij, meervoud).",
      },
    ],
    quizTexts: [
      {
        explanation: "De stam van arbeiten eindigt op -t, dus is de tussenklinker nodig vóór -te: arbeitete.",
        grammarRule: "Voeg -e- toe vóór -te als de stam op -t of -d eindigt.",
        prompt: "In welke zin wordt het Präteritum correct gebruikt?",
      },
      {
        explanation: "Klopt — zowel ich als er/sie/es krijgen gewoon -te, in tegenstelling tot het Präsens, waar ze verschillen (-e versus -t).",
        grammarRule: "De Präteritum-uitgangen voor ich en er zijn identiek: -te.",
        prompt: "In het Präteritum gebruiken de ich-vorm en de er/sie/es-vorm precies dezelfde uitgang.",
      },
      {
        explanation: "Haben is onregelmatig in het Präteritum — de wir-vorm is hatten, niet het regelmatige habten.",
        grammarRule: "De Präteritum-stam van haben is onregelmatig: hatt-.",
        prompt: "Typ de Präteritum-vorm van 'haben' voor 'wir'.",
      },
      {
        explanation: "ich krijgt -te: mach + te = machte.",
        grammarRule: "Präteritum-uitgang voor ich: -te.",
        prompt: "Vul de zin aan met de juiste Präteritum-vorm van 'machen'.",
      },
    ],
    conclusion:
      "Het Präteritum voegt -te plus een persoonlijke uitgang toe aan de stam van een regelmatig werkwoord, waarbij ich en er/sie/es dezelfde vorm delen. Het is de standaard verleden tijd in geschreven taal, en — voor sein, haben en de modale werkwoorden — ook de natuurlijke keuze in de spreektaal, ook al domineert het Perfekt verder het alledaagse gesprek.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Voeg -te toe aan de stam van een regelmatig werkwoord, gevolgd door de persoonlijke uitgang: -te, -test, -te, -ten, -tet, -ten.",
          "Voeg een tussenklinker -e- toe vóór -te als de stam op -t of -d eindigt (arbeiten → er arbeitete).",
          "Geef de voorkeur aan het Präteritum voor sein, haben en de modale werkwoorden, ook in de spreektaal.",
        ],
        notes: [
          "In tegenstelling tot het Präsens zijn de ich- en er/sie/es-vormen in het Präteritum identiek — beide krijgen gewoon -te.",
          "Het Präteritum van sein (war) en haben (hatte) behoort tot de eerste onregelmatige verledentijdsvormen die de meeste leerlingen uit hun hoofd leren, omdat ze voortdurend gebruikt worden.",
        ],
        mistakeNotes: [
          "Stammen die op -t eindigen hebben de tussenklinker -e- nodig vóór -te, dezelfde regel als bij het Präsens.",
          "Haben is onregelmatig in het Präteritum — hatte, niet het regelmatige habte.",
        ],
        exceptions: [
          "Sterke (onregelmatige) werkwoorden veranderen hun stamklinker volledig in plaats van -te toe te voegen: gehen → ging, sehen → sah — een ander patroon dan de regelmatige uitgangen hier.",
          "Het Präteritum van sein (war) en haben (hatte) volgt helemaal niet het regelmatige -te-patroon en wordt gewoon uit het hoofd geleerd.",
        ],
        tips: [
          "Vertel je een verhaal of schrijf je iets formeels, grijp dan standaard naar het Präteritum — het is de natuurlijke verhalende verleden tijd in het Duits.",
          "In alledaagse gesprekken kun je meestal met het Perfekt wegkomen voor de meeste werkwoorden — behalve war, hatte en de modale werkwoorden, die zelfs in de spreektaal bijna altijd natuurlijker klinken in het Präteritum.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Over de toekomst praten met werden + infinitief — en wanneer Duitsers gewoon de tegenwoordige tijd gebruiken.",
    objectives: [
      "Het Futur I vormen met werden + infinitief",
      "Herkennen wanneer Duitsers het Futur I gebruiken in plaats van het Präsens voor toekomstige betekenis",
      "werden correct vervoegen voor alle personen",
    ],
    explanationSimple: [
      "Het Futur I praat over de toekomst met een vervoegde vorm van werden plus de infinitief van het hoofdwerkwoord.",
      "In het alledaagse Duits wordt eigenlijk vaker het Präsens gebruikt voor de toekomst — het Futur I is voorbehouden aan voorspellingen, beloftes en nadruk.",
    ],
    explanationDetailed: [
      "De structuur ligt vast: onderwerp + vervoegd werden (tweede plaats) + de rest van de zin + infinitief (laatste plaats). Ich werde morgen arbeiten — 'Ik zal morgen werken.'",
      "Werden is onregelmatig: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — deze zes vormen moet je uit je hoofd leren, ze zijn niet af te leiden uit een vaste regel.",
      "Duitsers geven voor geplande toekomstige gebeurtenissen vaak de voorkeur aan het Präsens met een tijdswoord (Ich fliege morgen) en bewaren het Futur I voor voorspellingen, beloftes of aannames over de toekomst: Es wird morgen regnen (Het gaat morgen regenen).",
    ],
    exampleMeanings: ["Ik zal morgen werken.", "Het gaat binnenkort regenen.", "Wij zullen het probleem oplossen.", "Zij zal je bellen."],
    exerciseTexts: [
      {
        explanation: "ich krijgt de onregelmatige vorm werde.",
        grammarRule: "Werden-vorm voor ich: werde.",
        prompt: "Vul de zin aan met de juiste vorm van werden.",
      },
    ],
    quizTexts: [
      {
        explanation: "De infinitief arbeiten gaat helemaal naar het einde, na morgen.",
        grammarRule: "Zet de infinitief helemaal aan het einde van de zin.",
        prompt: "In welke zin wordt het Futur I correct gevormd?",
      },
      {
        explanation: "Klopt — dat is de hele structuur: werden (vervoegd) plus een infinitief aan het einde.",
        grammarRule: "Futur I = werden (vervoegd) + infinitief.",
        prompt: "Het Futur I wordt gevormd met een vervoegde vorm van werden plus de infinitief van het hoofdwerkwoord.",
      },
      {
        explanation: "De onregelmatige vorm van werden voor du is wirst.",
        grammarRule: "Werden-vorm voor du: wirst.",
        prompt: "Typ de juiste vorm van werden voor 'du'.",
      },
      {
        explanation: "De onregelmatige vorm van werden voor er is wird.",
        grammarRule: "Werden-vorm voor er: wird.",
        prompt: "Typ de juiste vorm van werden voor 'er'.",
      },
      {
        explanation: "es (het) krijgt dezelfde vorm als er: wird.",
        grammarRule: "Werden-vorm voor es: wird.",
        prompt: "Vul de zin aan met de juiste vorm van werden.",
      },
      {
        explanation: "Lösen blijft een kale infinitief, helemaal aan het einde van de zin.",
        grammarRule: "De infinitief in het Futur I staat altijd in zijn kale (onvervoegde) vorm.",
        prompt: "In welke zin wordt het Futur I correct gebruikt?",
      },
      {
        explanation: "Klopt — Ich fliege morgen klinkt natuurlijker dan Ich werde morgen fliegen, ook al zijn beide grammaticaal correct.",
        grammarRule: "Gebruik het Futur I vooral voor voorspellingen, beloftes en aannames.",
        prompt: "Duitsers geven meestal de voorkeur aan het Präsens boven het Futur I wanneer een tijdswoord de toekomst al duidelijk maakt.",
      },
      {
        explanation: "wir krijgt werden — dezelfde vorm als de infinitief zelf.",
        grammarRule: "Werden-vorm voor wir: werden.",
        prompt: "Typ de juiste vorm van werden voor 'wir'.",
      },
      {
        explanation: "sie (zij) krijgt dezelfde vorm als er: wird.",
        grammarRule: "Werden-vorm voor sie (enkelvoud): wird.",
        prompt: "Vul de zin aan met de juiste vorm van werden.",
      },
      {
        explanation: "Wird alleen, zonder een infinitief erna, betekent 'wordt' — Er wird Arzt beschrijft een verandering van toestand, geen voorspelling over de toekomst.",
        grammarRule: "Werden zonder infinitief betekent 'worden', geen toekomende tijd.",
        prompt: "Welke zin gebruikt werden met de betekenis 'wordt', niet als toekomende tijd?",
      },
    ],
    conclusion:
      "Het Futur I combineert een vervoegde vorm van werden met een infinitief aan het einde van de zin. Het wordt minder gebruikt in het alledaagse spraakgebruik dan je misschien zou verwachten — Duitsers geven vaak de voorkeur aan het Präsens voor geplande gebeurtenissen — maar het blijft de natuurlijke keuze voor voorspellingen, beloftes en aannames over wat komen gaat.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Bouw het Futur I met een vervoegde vorm van werden plus de infinitief van het hoofdwerkwoord.",
          "Zet de infinitief helemaal aan het einde van de zin.",
          "Gebruik het Futur I voor voorspellingen, beloftes en aannames over de toekomst — niet voor routineuze plannen.",
        ],
        notes: [
          "Voor alledaagse plannen met een duidelijk tijdswoord is het Präsens meestal natuurlijker: Ich fliege morgen klinkt idiomatischer dan Ich werde morgen fliegen, ook al zijn beide correct.",
          "Werden op zichzelf (zonder een volgende infinitief) betekent 'worden' — Er wird Arzt (Hij wordt arts) — dus de context vertelt je welke betekenis bedoeld is.",
        ],
        mistakeNotes: [
          "De infinitief moet helemaal aan het einde van de zin staan, na andere informatie zoals morgen.",
          "Het Futur I gebruikt de kale infinitief — zonder zu ervoor.",
        ],
        exceptions: [
          "Werden is een van de weinige echt onregelmatige werkwoorden van het Duits — de Präsens-vormen (wirst, wird) volgen geen enkel regelmatig patroon en moeten rechtstreeks uit het hoofd geleerd worden.",
          "Wanneer de toekomstige betekenis al duidelijk is uit de context of een tijdswoord, wordt het Futur I vaak helemaal overgeslagen ten gunste van het eenvoudigere Präsens.",
        ],
        tips: [
          "Onthoud de zes vormen van werden als hun eigen kleine set — ze komen voortdurend voor, zowel als 'worden' als binnen het Futur I.",
          "Gebruik je alleen een tijdswoord om de toekomst aan te geven, kies dan standaard voor het Präsens — bewaar het Futur I voor echte voorspellingen of beloftes.",
        ],
      },
    },
  },
};
