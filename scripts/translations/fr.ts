import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// French (français) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const fr: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "Le cas du sujet — la forme de départ de tout nom allemand.",
    objectives: [
      "Identifier le sujet d'une phrase allemande",
      "Utiliser le nominatif après sein, werden et bleiben",
    ],
    explanationSimple: [
      "Le nominatif est le cas du sujet : la personne ou la chose qui accomplit l'action dans la phrase.",
      "C'est aussi la forme que vous trouverez dans le dictionnaire — tout nom que vous apprenez commence donc au nominatif.",
    ],
    explanationDetailed: [
      "L'allemand indique le rôle d'un nom dans la phrase en modifiant son article, et non en changeant l'ordre des mots comme le fait souvent l'anglais. Le nominatif marque le sujet : celui qui accomplit l'action du verbe.",
      "Pour repérer le sujet, posez la question wer ? (qui ?) pour une personne ou was ? (quoi ?) pour une chose — la réponse est toujours au nominatif.",
      "Le nominatif apparaît aussi après les verbes d'état sein (être), werden (devenir) et bleiben (rester), car le nom qui les suit ne fait que renommer le sujet, sans subir l'action.",
    ],
    exampleMeanings: ["L'homme dort.", "La femme travaille aujourd'hui.", "L'enfant rit fort.", "Il est mon professeur."],
    exerciseTexts: [
      {
        explanation: "Kind est neutre ; en tant que sujet, il prend l'article neutre du nominatif, das.",
        grammarRule: "Article neutre au nominatif : das.",
        prompt: "Complétez la phrase avec l'article correct au Nominativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann est le sujet qui accomplit l'action : il reste donc au nominatif — der, et non den ou dem.",
        grammarRule: "Utilisez le nominatif pour le sujet de toute phrase.",
        prompt: "Dans quelle phrase le Nominativ est-il correctement utilisé ?",
      },
      {
        explanation:
          "Exact — sein/werden/bleiben relient le sujet à un nom qui le renomme, lequel reste donc lui aussi au nominatif.",
        grammarRule: "Utilisez le nominatif pour l'attribut du sujet après sein, werden et bleiben.",
        prompt: "Après les verbes sein, werden et bleiben, l'attribut du sujet se met au Nominativ.",
      },
      {
        explanation: "Frau est féminin ; en tant que sujet, elle prend l'article féminin du nominatif, die.",
        grammarRule: "Article féminin au nominatif : die.",
        prompt: "Complétez la phrase avec l'article correct au Nominativ.",
      },
      {
        explanation:
          "Les phrases principales allemandes placent d'abord le sujet (Der Junge), puis le verbe conjugué (liest) en deuxième position, et enfin le reste.",
        grammarRule: "Pour repérer l'élément au nominatif, posez la question wer ? ou was ? — ici, Der Junge répond à wer ?",
        translation: "Le garçon lit un livre.",
        prompt: "Remettez les mots dans le bon ordre.",
      },
      {
        explanation: "Kind est neutre → das ; Katze est féminin → die — les deux sont des sujets au nominatif.",
        grammarRule: "Faites correspondre le genre de chaque nom à son article au nominatif : der/die/das.",
        prompt: "Glissez le bon article dans chaque espace.",
      },
      {
        explanation: "Der Lehrer est masculin ; il est donc remplacé par le pronom er au nominatif.",
        grammarRule: "Pronom masculin au nominatif : er.",
        prompt: "Tapez le pronom personnel au Nominativ qui remplace 'der Lehrer'.",
      },
    ],
    conclusion:
      "Le nominatif marque le sujet de la phrase ainsi que l'attribut du sujet après sein, werden et bleiben. C'est la forme de base à partir de laquelle tous les autres cas se construisent — mieux vaut donc bien la maîtriser avant de passer à l'accusatif.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Utilisez le nominatif pour le sujet de toute phrase.",
          "Utilisez-le pour l'attribut du sujet après sein, werden et bleiben.",
          "Posez la question wer ? ou was ? pour identifier l'élément au nominatif.",
        ],
        notes: [
          "Le nominatif est la forme « par défaut » : c'est celle que l'on cherche dans le dictionnaire et à laquelle tous les autres cas sont comparés.",
          "La terminaison de l'adjectif placé avant un nom au nominatif dépend de l'article et du genre, par exemple der große Mann — mais c'est un sujet à part.",
        ],
        mistakeNotes: [
          "Le verbe sehen demande un complément d'objet direct à l'accusatif, pas au nominatif — c'est l'une des toutes premières confusions que fait chaque apprenant.",
          "Le nominatif féminin est toujours die, jamais der — der est réservé aux noms masculins.",
        ],
        exceptions: [
          "Un groupe de noms masculins appelés « noms faibles » (n-nouns) — der Junge, der Name, der Student, der Herr — prennent -n ou -en à tous les cas sauf au nominatif singulier.",
          "Quelques noms ont un genre flottant ou débattu selon les régions (par exemple der/das Joghurt), mais le dictionnaire indique toujours la forme standard.",
        ],
        tips: [
          "Quand vous hésitez sur le cas à utiliser, commencez par repérer le verbe et demandez-vous wer oder was tut das ? — la réponse est toujours au nominatif.",
          "Apprenez chaque nouveau nom avec son article au nominatif (der/die/das) : cette seule habitude évite la plupart des erreurs de genre par la suite.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "Le cas du complément d'objet direct, et un ensemble fixe de prépositions.",
    objectives: [
      "Identifier le complément d'objet direct d'un verbe transitif",
      "Appliquer correctement le changement der → den / ein → einen",
      "Reconnaître les prépositions fixes qui déclenchent l'accusatif",
    ],
    explanationSimple: [
      "L'accusatif marque le complément d'objet direct : la personne ou la chose qui reçoit directement l'action du verbe.",
      "C'est aussi le cas qui suit un petit groupe fixe de prépositions, sans exception.",
    ],
    explanationDetailed: [
      "Une fois le sujet repéré (nominatif), la question suivante est en général : « sur quoi porte l'action du sujet ? » — c'est le complément d'objet direct, qui prend l'accusatif en allemand.",
      "Pour le repérer, posez la question wen ? (qui ?) pour une personne ou was ? (quoi ?) pour une chose.",
      "Seul l'article masculin change visiblement à l'accusatif : der devient den, et ein devient einen. Les articles féminin, neutre et pluriel restent identiques au nominatif — c'est pourquoi l'accusatif passe souvent « inaperçu » tant qu'aucun nom masculin n'entre en jeu.",
      "Un groupe fixe de verbes prend presque toujours un complément à l'accusatif — haben, sehen, brauchen, kaufen, essen, trinken, lieben — et un groupe fixe de prépositions déclenche toujours l'accusatif : durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Je vois l'homme.", "Elle achète une pomme.", "Nous aimons notre chien.", "Le cadeau est pour toi."],
    exerciseTexts: [
      {
        explanation:
          "Hund est masculin, donc le possessif subit le même changement propre au masculin à l'accusatif : unser → unseren.",
        grammarRule: "Seul l'article ou le possessif masculin change à l'accusatif.",
        prompt: "Complétez la phrase avec l'article correct à l'Akkusativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Le verbe sehen prend un complément d'objet direct à l'accusatif, et le masculin der devient den.",
        grammarRule: "Seul l'article masculin change : der → den, ein → einen.",
        prompt: "Dans quelle phrase l'Akkusativ est-il correctement utilisé ?",
      },
      {
        explanation: "Exact — die reste identique au nominatif comme à l'accusatif ; seul l'article masculin change.",
        grammarRule: "Les articles féminin, neutre et pluriel sont identiques au nominatif.",
        prompt: "L'article féminin à l'Akkusativ est identique à l'article féminin au Nominativ.",
      },
      {
        explanation: "Apfel est masculin ; comme complément d'objet direct après kaufen, il demande l'accusatif einen.",
        grammarRule: "Article indéfini masculin à l'accusatif : einen.",
        prompt: "Complétez la phrase avec l'article correct à l'Akkusativ.",
      },
      {
        explanation: "D'abord le sujet (Wir), puis le verbe (lieben), puis le complément à l'accusatif (unseren Hund).",
        grammarRule: "Utilisez l'accusatif pour le complément d'objet direct d'un verbe transitif.",
        translation: "Nous aimons notre chien.",
        prompt: "Remettez les mots dans le bon ordre.",
      },
      {
        explanation: "für déclenche toujours l'accusatif, donc du devient dich et er devient ihn.",
        grammarRule: "Utilisez toujours l'accusatif après durch, für, gegen, ohne, um.",
        prompt: "Glissez le bon pronom dans chaque espace.",
      },
      {
        explanation:
          "Student est un nom faible (n-noun) : il prend à la fois l'article den à l'accusatif et la terminaison -en : den Studenten.",
        grammarRule: "Les noms faibles prennent aussi -n/-en à l'accusatif.",
        prompt: "Tapez la forme à l'Akkusativ de 'der Student', article inclus (c'est un nom faible).",
      },
    ],
    conclusion:
      "L'accusatif marque le complément d'objet direct et suit durch, für, gegen, ohne et um. Le seul changement visible par rapport au nominatif concerne l'article masculin — der/ein devient den/einen — tout le reste reste identique.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Utilisez l'accusatif pour le complément d'objet direct d'un verbe transitif.",
          "Pour le repérer, posez la question wen ? pour une personne ou was ? pour une chose.",
          "Seul l'article masculin change : der → den, ein → einen.",
          "Les articles féminin, neutre et pluriel sont identiques au nominatif.",
          "Utilisez toujours l'accusatif après durch, für, gegen, ohne et um.",
        ],
        notes: [
          "Comme seuls les articles masculins changent, les apprenants oublient souvent de vérifier le genre des noms féminins et neutres — mais les possessifs et les pronoms (mein → meinen, ihr → ihren) suivent le même schéma propre au masculin, donc restez vigilant.",
          "Les expressions de temps qui répondent à « pendant combien de temps ? » ou qui nomment un moment précis (« quel jour ? ») utilisent souvent l'accusatif sans préposition : Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "Le verbe sehen exige un complément à l'accusatif, donc l'article masculin der doit devenir den.",
          "für déclenche toujours l'accusatif, donc le pronom ich devient mich.",
        ],
        exceptions: [
          "Les noms faibles (n-nouns) comme der Student, der Junge et der Name prennent aussi -n à l'accusatif : den Studenten, den Jungen, den Namen — pas seulement au datif et au génitif.",
          "Quelques verbes qui semblent exiger une préposition prennent en réalité un complément à l'accusatif sans préposition, par exemple Ich frage dich (et non « zu dir »).",
        ],
        tips: [
          "Les noms féminins, neutres et pluriels sont identiques au nominatif et à l'accusatif — si une phrase semble « inchangée », c'est le nom masculin qu'il faut vérifier.",
          "Mémorisez durch, für, gegen, ohne, um comme un seul bloc — ils sont toujours à l'accusatif, sans aucune exception.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "Le cas du complément d'objet indirect — celui qui reçoit ou profite de quelque chose.",
    objectives: [
      "Identifier le complément d'objet indirect d'une phrase",
      "Appliquer le changement d'article au datif pour tous les genres",
      "Reconnaître les verbes et prépositions qui exigent toujours le datif",
    ],
    explanationSimple: [
      "Le datif marque le complément d'objet indirect : en général la personne qui reçoit quelque chose ou qui en profite.",
      "Il répond à la question wem ? (à/pour qui ?).",
    ],
    explanationDetailed: [
      "Beaucoup de phrases allemandes ont à la fois un complément direct (accusatif) et un complément indirect (datif) : Ich gebe dem Mann das Buch — « Je donne le livre à l'homme. » dem Mann est celui qui reçoit, donc il est au datif.",
      "Un groupe fixe de verbes prend toujours un complément au datif, même s'ils semblent devoir prendre l'accusatif — helfen, danken, gefallen, gehören, folgen, glauben et antworten sont les premiers que rencontrent les apprenants.",
      "Le datif suit aussi un ensemble fixe de prépositions : aus, bei, mit, nach, seit, von, zu.",
      "Avec les neuf prépositions « à double sens » (in, an, auf, über, unter, vor, hinter, neben, zwischen), utilisez le datif pour indiquer un lieu — réponse à wo ? (où ?) — et l'accusatif pour un déplacement vers une destination — réponse à wohin ? (vers où ?).",
    ],
    exampleMeanings: [
      "Je donne le livre à l'homme.",
      "Elle aide sa sœur.",
      "Nous voyageons en bus.",
      "La maison appartient aux voisins.",
    ],
    exerciseTexts: [
      {
        explanation: "Nachbarn est au pluriel, et gehören prend toujours le datif, donc die devient den.",
        grammarRule: "Chaque article change au datif ; le pluriel die devient den.",
        prompt: "Complétez la phrase avec l'article correct au Dativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Le verbe helfen prend toujours un complément au datif, et le féminin die devient der au datif.",
        grammarRule: "helfen prend toujours le datif, jamais l'accusatif.",
        prompt: "Dans quelle phrase le Dativ est-il correctement utilisé ?",
      },
      {
        explanation:
          "Exact — die Kinder devient den Kindern ; seuls les noms déjà terminés en -n ou -s restent inchangés.",
        grammarRule: "Les noms pluriels prennent -n au datif, sauf s'ils se terminent déjà en -n ou -s.",
        prompt: "Les noms pluriels prennent généralement -n au Dativ.",
      },
      {
        explanation: "Bus est masculin, et mit déclenche toujours le datif, donc der devient dem.",
        grammarRule: "Utilisez toujours le datif après aus, bei, mit, nach, seit, von, zu.",
        prompt: "Complétez la phrase avec l'article correct au Dativ.",
      },
      {
        explanation: "Quand les deux compléments sont des noms, le datif (dem Mann) précède en général l'accusatif (das Buch).",
        grammarRule: "Quand les deux compléments d'une phrase sont des noms, le datif vient généralement en premier.",
        translation: "Je donne le livre à l'homme.",
        prompt: "Remettez les mots dans le bon ordre.",
      },
      {
        explanation: "Le verbe gehören prend toujours le datif : sie devient ihr et er devient ihm.",
        grammarRule: "Un groupe fixe de verbes prend toujours un complément au datif — gehören en fait partie.",
        prompt: "Glissez le bon pronom dans chaque espace.",
      },
      {
        explanation: "Le pluriel die Kinder devient den Kindern au datif — l'article change en den et le nom prend -n.",
        grammarRule: "Chaque article change au datif ; les noms pluriels prennent -n.",
        prompt: "Tapez la forme plurielle de 'die Kinder' au Dativ, article inclus (par exemple 'den …').",
      },
    ],
    conclusion:
      "Le datif marque le complément d'objet indirect, suit aus/bei/mit/nach/seit/von/zu et change chaque article — avec un -n distinctif ajouté aux noms pluriels. Quelques verbes comme helfen et danken prennent toujours un complément au datif.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Utilisez le datif pour le complément d'objet indirect — en général celui qui reçoit ou qui profite.",
          "Posez la question wem ? pour le repérer.",
          "Chaque article change : der → dem, die → der, das → dem, die (pluriel) → den.",
          "Les noms pluriels prennent -n au datif, sauf s'ils se terminent déjà en -n ou -s : die Kinder → den Kindern.",
          "Utilisez toujours le datif après aus, bei, mit, nach, seit, von, zu.",
          "Avec les prépositions à double sens, le datif répond à wo ?, l'accusatif à wohin ?.",
        ],
        notes: [
          "Les verbes qui régissent le datif ne prennent jamais de complément à l'accusatif pour la personne concernée — helfen, par exemple, se construit toujours avec 'jemandem helfen', jamais 'jemanden helfen'.",
          "Astuce d'ordre des mots : quand les deux compléments d'une phrase sont des noms, le datif vient généralement en premier : Ich gebe dem Mann das Buch. Quand ce sont deux pronoms, l'accusatif vient en premier : Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "Le verbe helfen prend toujours le datif, jamais l'accusatif — sans exception.",
          "mit est toujours suivi du datif, et le nom pluriel prend la terminaison -n : Kinder → Kindern.",
        ],
        exceptions: [
          "Un petit groupe de verbes et d'adjectifs se construit avec le datif pour des raisons idiomatiques — gefallen (plaire), schmecken (avoir bon goût) et stehen (aller bien à) mettent tous la personne au datif : Das Kleid steht dir gut.",
          "Les noms déjà terminés en -n ou -s au pluriel ne prennent pas de -n supplémentaire au datif : den Autos, den Frauen.",
        ],
        tips: [
          "Le datif pluriel se termine presque toujours en -n — repérer ce -n sur un nom est souvent le moyen le plus rapide de reconnaître une phrase au datif au premier coup d'œil.",
          "Apprenez aus, bei, mit, nach, seit, von, zu comme un ensemble — il n'y a pas d'autre logique à retenir que la liste elle-même.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "Le temps du passé le plus courant en allemand — comment le construire et quand l'utiliser.",
    objectives: [
      "Construire le Perfekt avec haben ou sein suivi d'un participe passé",
      "Choisir correctement entre haben et sein",
      "Reconnaître les participes passés réguliers et irréguliers",
    ],
    explanationSimple: [
      "Le Perfekt est la façon dont l'allemand parlé évoque généralement le passé — non pas une forme verbale unique, mais haben ou sein suivi d'un participe passé.",
      "Sa construction reste la même quel que soit le locuteur : l'auxiliaire en deuxième position, et le participe tout à la fin de la proposition.",
    ],
    explanationDetailed: [
      "La plupart des verbes utilisent haben comme auxiliaire. Les verbes de mouvement (gehen, fahren, kommen) ou de changement d'état (aufwachen, werden) utilisent en général sein.",
      "Les verbes réguliers (faibles) forment leur participe avec ge- + radical + -t : machen → gemacht, spielen → gespielt. Les verbes irréguliers (forts) changent souvent la voyelle du radical et se terminent en -en : sprechen → gesprochen, gehen → gegangen.",
      "Comme le participe se place à la fin de la proposition, tout le reste — compléments, expressions de temps, négation — se glisse entre l'auxiliaire et le participe.",
    ],
    exampleMeanings: ["J'ai lu le livre.", "Nous sommes allés à Berlin.", "Elle a travaillé hier.", "Il s'est réveillé tôt."],
    exerciseTexts: [
      {
        explanation: "fahren décrit un déplacement d'un endroit à un autre, donc il prend sein : Wir sind gefahren.",
        grammarRule: "Utilisez sein pour les verbes de mouvement ou de changement d'état.",
        prompt: "Quel auxiliaire le verbe 'fahren' prend-il au Perfekt ?",
      },
    ],
    quizTexts: [
      {
        explanation: "Le verbe lesen prend haben, et son participe irrégulier gelesen se place à la fin de la proposition.",
        grammarRule: "Utilisez haben comme auxiliaire pour la plupart des verbes.",
        prompt: "Dans quelle phrase le Perfekt est-il correctement formé ?",
      },
      {
        explanation: "Exact — telefonieren → telefoniert, sans ge-.",
        grammarRule: "Les verbes en -ieren ne prennent jamais ge-.",
        prompt: "Les verbes comme telefonieren ne prennent jamais le préfixe ge- au Perfekt.",
      },
      {
        explanation: "fahren est un verbe de mouvement, donc il prend sein : sind gefahren.",
        grammarRule: "Utilisez sein pour les verbes de mouvement ou de changement d'état.",
        prompt: "Complétez la phrase avec l'auxiliaire correct.",
      },
      {
        explanation: "essen est irrégulier : gegessen, et non la forme régulière geesst.",
        grammarRule: "Les participes irréguliers changent souvent la voyelle du radical et se terminent en -en.",
        prompt: "Tapez le participe passé du verbe 'essen'.",
      },
    ],
    conclusion:
      "Le Perfekt se construit avec haben ou sein suivi d'un participe passé placé à la fin de la proposition. La plupart des verbes prennent haben ; les verbes de mouvement ou de changement d'état prennent sein. Les participes réguliers se terminent en -t, les irréguliers souvent en -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Utilisez haben comme auxiliaire pour la plupart des verbes.",
          "Utilisez sein pour les verbes de mouvement ou de changement d'état.",
          "Participe régulier : ge- + radical + -t.",
          "Les participes irréguliers se terminent souvent en -en et peuvent changer la voyelle du radical.",
          "Le participe se place toujours à la fin de la proposition.",
        ],
        notes: [
          "Quelques participes irréguliers courants méritent d'être mémorisés directement plutôt que déduits : gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Les verbes à préfixe séparable insèrent -ge- entre le préfixe et le radical : aufwachen → aufgewacht, et non geaufwacht.",
        ],
        mistakeNotes: ["fahren est un verbe de mouvement, donc il prend sein, pas haben."],
        exceptions: [
          "Les verbes en -ieren (telefonieren, studieren) ne prennent jamais ge- : telefoniert, studiert.",
          "Les verbes à préfixe inséparable (be-, ver-, er-, ge-, ent-, zer-) omettent eux aussi ge- : besuchen → besucht, verstehen → verstanden.",
        ],
        tips: [
          "En cas de doute entre haben et sein, demandez-vous : ce verbe décrit-il un déplacement d'un point A à un point B, ou un changement d'état ? Si oui, c'est presque toujours sein.",
          "Apprenez les nouveaux verbes irréguliers avec leurs trois formes à la fois — infinitif, prétérit, participe passé — comme vous apprenez der/die/das pour un nouveau nom.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Vocabulaire de base pour parler des membres de la famille.",
    explanationSimple: [
      "Cette leçon présente les mots allemands pour la famille proche — des mots que vous emploierez sans cesse dès que vous commencerez à parler de votre propre vie.",
    ],
    explanationDetailed: [
      "Les noms de famille suivent les schémas de genre réguliers que vous connaissez déjà : la plupart des noms de personnes sont der ou die selon le genre de la personne, à l'exception de quelques cas fixes comme das Kind (l'enfant) et das Baby (le bébé), qui restent grammaticalement neutres quel que soit le genre de l'enfant.",
      "Les possessifs (mein, meine) s'accordent avec le genre du nom, tout comme ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["C'est ma mère.", "Mon frère habite à Berlin.", "J'ai deux sœurs."],
    exerciseTexts: [
      {
        explanation: "Schwester est féminin : die Schwester.",
        grammarRule: "Les noms de membres de la famille prennent le genre de la personne qu'ils désignent.",
        prompt: "Tapez le mot allemand pour 'sœur'.",
      },
    ],
    quizTexts: [
      { explanation: "der Vater signifie « père ».", grammarRule: "der Vater est masculin.", prompt: "Quel mot signifie 'père' ?" },
      {
        explanation: "Exact — das Kind est toujours neutre.",
        grammarRule: "Quelques noms de personnes comme das Kind et das Baby sont toujours neutres.",
        prompt: "'das Kind' est grammaticalement neutre, quel que soit le genre de l'enfant.",
      },
      {
        explanation: "Schwestern est le pluriel de Schwester.",
        grammarRule: "La plupart des noms féminins prennent -n ou -en au pluriel.",
        prompt: "Complétez la phrase.",
      },
    ],
    conclusion:
      "Le vocabulaire de la famille est grammaticalement régulier — des noms genrés pour les personnes, avec das Kind comme exception neutre fixe — et vous donne d'emblée une occasion de pratiquer les possessifs.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["mère", "père", "sœur", "frère", "parents (pluriel)", "enfant", "grand-mère", "grand-père"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Un court texte quotidien sur une commande au café, avec des questions de compréhension.",
    explanationSimple: ["Une courte scène au café — lisez-la une première fois pour saisir l'idée générale avant de vérifier le sens des mots."],
    explanationDetailed: [
      "La lecture au niveau A1 fonctionne mieux en deux temps : d'abord pour saisir la situation générale (qui, où, que se passe-t-il), puis une seconde fois en repérant les mots précis qui vous avaient échappé la première fois.",
      "Il n'est pas nécessaire de comprendre chaque mot pour répondre aux questions de compréhension ci-dessous — concentrez-vous sur ce qui change réellement le sens de la scène.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Anna commande un café (einen Kaffee), pas un thé.",
        grammarRule: "bestellen + complément à l'accusatif.",
        prompt: "Anna commande du thé.",
      },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — elle s'assoit à une table près de la fenêtre.",
        grammarRule: "sich setzen an + accusatif.",
        prompt: "Où Anna s'assoit-elle ?",
      },
      {
        explanation: "Exact — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Deux verbes coordonnés reliés par und.",
        prompt: "Anna lit un livre pendant qu'elle boit son café.",
      },
      {
        explanation: "Minuten (minutes) — Nach zehn Minuten.",
        grammarRule: "nach + expression de temps au datif.",
        prompt: "Complétez : le serveur apporte la commande après dix ___.",
      },
    ],
    conclusion:
      "Une courte scène de café entièrement construite avec du vocabulaire de niveau A1 et des phrases principales simples — un bon exercice de lecture globale avant de se soucier de chaque mot pris isolément.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Une courte annonce de gare — repérez le quai et l'heure de départ.",
    explanationSimple: ["Une courte annonce de gare — aucun fichier audio n'est encore disponible, alors lisez la transcription comme si vous l'entendiez."],
    explanationDetailed: [
      "Les annonces de gare et d'aéroport suivent une structure très prévisible en allemand — cette prévisibilité en fait justement un bon premier exercice d'écoute : numéro du train, quai (Gleis) et heure, presque toujours dans le même ordre.",
      "Une fois que vous savez repérer avec certitude un numéro de quai et une heure dans une annonce, vous pouvez appliquer la même stratégie d'écoute à tout audio de format similaire (bulletin météo, consignes de sécurité, etc.).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      { explanation: "Gleis 7 — le quai 7.", grammarRule: "von + numéro de quai au datif.", prompt: "De quel quai le train part-il ?" },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — le quai 7.",
        grammarRule: "von + datif.",
        prompt: "D'où part le train pour Munich ?",
      },
      {
        explanation: "vierzehn Uhr dreißig signifie 14 h 30.",
        grammarRule: "Heure orale sur 24 heures : [heure] Uhr [minutes].",
        prompt: "Écrivez l'heure de départ au format 24 heures (par exemple 09:15).",
      },
    ],
    conclusion:
      "Les annonces de gare suivent une formule fixe — numéro du train, quai, heure — ce qui en fait un excellent premier exercice d'écoute une fois que vous en connaissez le schéma.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Entraînez-vous à vous présenter à voix haute — nom, origine et quelques détails.",
    explanationSimple: [
      "Se présenter est l'une des toutes premières choses que vous direz réellement à voix haute en allemand — une poignée de phrases courtes et fixes que vous réutiliserez sans cesse.",
    ],
    explanationDetailed: [
      "L'exercice d'expression orale fonctionne mieux à voix haute, pas seulement dans votre tête — dites chaque consigne ci-dessous comme une phrase complète avant de passer à la suivante, même si personne ne vous écoute.",
      "Il n'y a pas encore d'enregistrement ni de correction de la prononciation ; considérez cela comme un exercice d'expression en autonomie, en utilisant les consignes et les phrases d'exemple comme un script à adapter.",
    ],
    exampleMeanings: ["Je m'appelle Anna.", "Je viens d'Allemagne.", "Je suis étudiante."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … est la façon standard de dire d'où l'on vient.",
        grammarRule: "kommen aus + nom de pays/ville au datif.",
        prompt: "Tapez l'équivalent allemand de 'Je viens de …'.",
      },
    ],
    quizTexts: [
      {
        explanation: "Le verbe heißen se conjugue directement avec le nom comme complément : Ich heiße Anna.",
        grammarRule: "heißen + nom, sans verbe supplémentaire.",
        prompt: "Quelle phrase dit correctement 'Je m'appelle Anna' ?",
      },
      {
        explanation: "heißt est la forme du verbe heißen à la deuxième personne du singulier (du).",
        grammarRule: "du heißt (conjugaison régulière d'un verbe en -en).",
        prompt: "Complétez cette question informelle pour demander le nom de quelqu'un.",
      },
    ],
    conclusion:
      "Se présenter repose sur trois structures de phrase fixes — nom, origine, profession — qu'il vaut la peine de répéter à voix haute sans modération, puisque vous les utiliserez dès le premier jour.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Dites votre nom :",
          "Dites d'où vous venez :",
          "Dites ce que vous faites dans la vie :",
          "Demandez le nom de quelqu'un d'autre :",
          "Assemblez vos trois phrases en une courte présentation.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Un quiz de révision mixte couvrant les cas grammaticaux, le vocabulaire courant et l'ordre de base des mots.",
    explanationSimple: [
      "Un quiz purement de révision — aucune nouvelle explication, juste un ensemble mixte de questions sur tout ce qui a été vu jusqu'au niveau A1.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "Le sujet de la phrase prend le nominatif : Der Mann.",
        grammarRule: "Utilisez le nominatif pour le sujet de toute phrase.",
        prompt: "Quel article est correct ? '___ Mann schläft.' (sujet)",
      },
      {
        explanation: "Le verbe sehen prend un complément à l'accusatif, et le masculin der devient den.",
        grammarRule: "Seul l'article masculin change à l'accusatif.",
        prompt: "Complétez avec l'article correct à l'Akkusativ.",
      },
      { explanation: "die Schwester.", grammarRule: "Révision du vocabulaire de la famille.", prompt: "Tapez le mot allemand pour 'sœur'." },
      {
        explanation: "D'abord le sujet, puis le verbe conjugué en deuxième position.",
        grammarRule: "Ordre de base des mots en allemand : sujet, verbe, reste.",
        translation: "Je m'appelle Anna.",
        prompt: "Remettez les mots dans le bon ordre.",
      },
    ],
    conclusion: "Une courte révision mixte des cas, du vocabulaire et de l'ordre des mots — un bon point de contrôle avant de passer au-delà du niveau A1.",
    details: { kind: "none" },
  },
  "grammar/a1/praesens": {
    summary: "Le présent allemand — des terminaisons régulières, et une forme qui couvre aussi ce que l'anglais exprime par 'is doing'.",
    objectives: [
      "Conjuguer les verbes réguliers au Präsens",
      "Utiliser le Präsens aussi bien pour le présent que pour le futur proche",
      "Reconnaître la voyelle de liaison -e- pour les radicaux terminés en -t ou -d",
    ],
    explanationSimple: [
      "Le Präsens est le temps présent de l'allemand — il sert pour ce qui se passe maintenant, les faits généraux, et souvent aussi le futur proche.",
      "Les verbes réguliers ajoutent au radical une terminaison prévisible qui dépend de qui fait l'action.",
    ],
    explanationDetailed: [
      "Pour conjuguer un verbe régulier, enlevez -en de l'infinitif pour obtenir le radical, puis ajoutez la terminaison correspondant au sujet : ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "L'allemand n'a pas de forme progressive distincte — ich spiele correspond aussi bien à « I play » qu'à « I am playing » en anglais. C'est le contexte qui indique le sens voulu.",
      "Le Präsens sert aussi couramment à parler du futur proche, surtout avec un indicateur de temps : Ich fliege morgen nach Berlin (Je pars demain pour Berlin).",
    ],
    exampleMeanings: ["Je joue au football.", "Tu apprends l'allemand.", "Il travaille aujourd'hui.", "Nous allons à Berlin demain."],
    exerciseTexts: [
      {
        explanation: "du prend la terminaison régulière -st : spiel + st = spielst.",
        grammarRule: "Terminaison du au Präsens : -st.",
        prompt: "Tapez la forme correcte du Präsens de « spielen » pour « du ».",
      },
    ],
    quizTexts: [
      {
        explanation:
          "Le radical d'arbeiten se termine en -t, donc la forme er a besoin de la voyelle de liaison : arbeitet, et non arbeit.",
        grammarRule: "Insérez un -e- avant la terminaison quand le radical se termine en -t ou -d.",
        prompt: "Quelle phrase utilise correctement le Präsens ?",
      },
      {
        explanation:
          "Exact — l'allemand utilise souvent le Präsens au lieu d'un temps futur distinct lorsque le contexte ou un indicateur de temps rend déjà le futur évident.",
        grammarRule: "Utilisez le Präsens pour les actions au futur proche accompagnées d'une expression de temps.",
        prompt: "Le Präsens peut servir à parler du futur proche, surtout avec un indicateur de temps comme morgen.",
      },
      {
        explanation: "wir prend la terminaison -en, qui pour un verbe régulier est identique à l'infinitif : wohnen.",
        grammarRule: "Terminaison wir au Präsens : -en (identique à l'infinitif).",
        prompt: "Tapez la forme correcte du Präsens de « wohnen » pour « wir ».",
      },
      {
        explanation: "ich prend la terminaison -e : kauf + e = kaufe.",
        grammarRule: "Terminaison ich au Präsens : -e.",
        prompt: "Complétez la phrase avec la forme correcte du Präsens de « kaufen ».",
      },
    ],
    conclusion:
      "Le Präsens utilise six terminaisons prévisibles — -e, -st, -t, -en, -t, -en — ajoutées au radical du verbe, avec une voyelle de liaison -e- pour les radicaux se terminant en -t ou -d. Il couvre à la fois le présent et le futur proche, donc bien maîtriser ces terminaisons vous mène déjà loin, avant même d'aborder les temps du passé.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Enlevez -en de l'infinitif pour trouver le radical.",
          "Ajoutez la terminaison correspondant au sujet : -e, -st, -t, -en, -t, -en.",
          "Insérez un -e- avant la terminaison si le radical se termine en -t ou -d (arbeiten → du arbeitest).",
        ],
        notes: [
          "Ce sont les terminaisons de du et de er/sie/es qui ont le plus souvent besoin de la voyelle de liaison -e-, car -st et -t sont difficiles à prononcer directement après un radical se terminant en -t/-d.",
          "Quelques verbes très courants sont irréguliers uniquement aux formes du/er (fahren → du fährst, er fährt) — ils ne font pas partie du schéma régulier présenté ici.",
        ],
        mistakeNotes: [
          "Les radicaux se terminant en -t ont besoin d'un -e- avant la terminaison -st, sinon le mot devient imprononçable.",
          "Chaque sujet a besoin de sa propre terminaison correspondante — ich prend toujours -e, jamais la terminaison -t de la forme er.",
        ],
        exceptions: [
          "Les verbes à changement de voyelle (forts) comme fahren, sehen et sprechen changent de voyelle uniquement aux formes du et er/sie/es (du fährst, er fährt) — un schéma distinct des terminaisons régulières présentées ici.",
          "Sein et haben sont entièrement irréguliers et doivent être mémorisés comme des formes à part : ich bin, du bist, er ist…",
        ],
        tips: [
          "Apprenez les six terminaisons comme un ensemble fixe : une fois qu'elles deviennent automatiques, tout verbe régulier se conjugue de la même façon.",
          "Quand le radical d'un nouveau verbe se termine en -t, -d, ou un groupe consonantique comme -ffn (öffnen), attendez-vous à la voyelle de liaison -e- avant -st et -t.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "Le passé simple utilisé à l'écrit et pour des verbes courants comme sein et haben — en quoi il diffère du Perfekt.",
    objectives: [
      "Conjuguer les verbes réguliers (faibles) au Präteritum",
      "Reconnaître les situations où le Präteritum est préféré au Perfekt",
      "Utiliser correctement sein et haben dans leurs formes courantes au Präteritum",
    ],
    explanationSimple: [
      "Le Präteritum est l'autre temps du passé en allemand — utilisé surtout à l'écrit, et à l'oral pour sein, haben et les verbes modaux.",
      "Les verbes réguliers ajoutent -te suivi d'une terminaison personnelle au radical.",
    ],
    explanationDetailed: [
      "Alors que le Perfekt domine l'allemand parlé pour la plupart des verbes, le Präteritum est le temps du passé normal à l'écrit — récits, articles de presse et écrits formels l'utilisent presque toujours.",
      "Les verbes réguliers (faibles) forment le Präteritum en ajoutant -te au radical, puis une terminaison personnelle : ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Même à l'oral, une poignée de verbes très courants apparaissent presque toujours au Präteritum plutôt qu'au Perfekt : war (était), hatte (avait), et les verbes modaux comme konnte (pouvait) ou wollte (voulait).",
    ],
    exampleMeanings: ["J'ai fait mes devoirs.", "Elle a joué du piano hier.", "Il était fatigué.", "Nous n'avions pas le temps."],
    exerciseTexts: [
      {
        explanation: "sie (ils/elles) prend la terminaison -ten, comme wir : spiel + ten = spielten.",
        grammarRule: "Terminaison sie (pluriel) au Präteritum : -ten.",
        prompt: "Tapez la forme correcte du Präteritum de « spielen » pour « sie » (ils/elles).",
      },
    ],
    quizTexts: [
      {
        explanation:
          "Le radical d'arbeiten se termine en -t, il a donc besoin de la voyelle de liaison avant -te : arbeitete.",
        grammarRule: "Insérez un -e- avant -te quand le radical se termine en -t ou -d.",
        prompt: "Quelle phrase utilise correctement le Präteritum ?",
      },
      {
        explanation:
          "Exact — ich et er/sie/es ajoutent tous deux simplement -te, contrairement au Präsens où ils diffèrent (-e contre -t).",
        grammarRule: "Les terminaisons ich et er sont identiques au Präteritum : -te.",
        prompt: "Au Präteritum, la forme ich et la forme er/sie/es utilisent exactement la même terminaison.",
      },
      {
        explanation: "Haben est irrégulier au Präteritum : la forme wir est hatten, et non un régulier habten.",
        grammarRule: "Le radical du Präteritum de haben est irrégulier : hatt-.",
        prompt: "Tapez la forme du Präteritum de « haben » pour « wir ».",
      },
      {
        explanation: "ich prend -te : mach + te = machte.",
        grammarRule: "Terminaison ich au Präteritum : -te.",
        prompt: "Complétez la phrase avec la forme correcte du Präteritum de « machen ».",
      },
    ],
    conclusion:
      "Le Präteritum ajoute -te suivi d'une terminaison personnelle au radical d'un verbe régulier, ich et er/sie/es partageant la même forme. C'est le temps du passé par défaut à l'écrit, et — pour sein, haben et les verbes modaux — c'est aussi le choix naturel à l'oral, même si le Perfekt domine par ailleurs la conversation quotidienne.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Ajoutez -te au radical d'un verbe régulier, puis la terminaison personnelle : -te, -test, -te, -ten, -tet, -ten.",
          "Insérez un -e- avant -te si le radical se termine en -t ou -d (arbeiten → er arbeitete).",
          "Privilégiez le Präteritum pour sein, haben et les verbes modaux, même à l'oral.",
        ],
        notes: [
          "Contrairement au Präsens, les formes ich et er/sie/es sont identiques au Präteritum — les deux prennent simplement -te.",
          "Le Präteritum de sein (war) et de haben (hatte) fait partie des premières formes irrégulières du passé que la plupart des apprenants mémorisent, tant elles sont utilisées constamment.",
        ],
        mistakeNotes: [
          "Les radicaux se terminant en -t ont besoin de la voyelle de liaison -e- avant -te, la même règle qu'au Präsens.",
          "Haben est irrégulier au Präteritum : hatte, et non le régulier habte.",
        ],
        exceptions: [
          "Les verbes forts (irréguliers) changent entièrement la voyelle de leur radical au lieu d'ajouter -te : gehen → ging, sehen → sah — un schéma différent des terminaisons régulières présentées ici.",
          "Le Präteritum de sein (war) et celui de haben (hatte) ne suivent pas du tout le schéma régulier en -te et se mémorisent tout simplement.",
        ],
        tips: [
          "Si vous racontez une histoire ou rédigez un texte formel, optez d'emblée pour le Präteritum : c'est le temps narratif naturel du passé en allemand.",
          "Dans une conversation quotidienne, le Perfekt suffit généralement pour la plupart des verbes — sauf war, hatte et les verbes modaux, qui sonnent presque toujours plus naturels au Präteritum, même à l'oral.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Parler du futur avec werden + infinitif — et les cas où les germanophones préfèrent simplement le présent.",
    objectives: [
      "Construire le Futur I avec werden + infinitif",
      "Reconnaître quand les germanophones utilisent le Futur I plutôt que le Präsens pour exprimer le futur",
      "Conjuguer correctement werden à toutes les personnes",
    ],
    explanationSimple: [
      "Le Futur I exprime le futur à l'aide d'une forme conjuguée de werden suivie de l'infinitif du verbe principal.",
      "Dans l'allemand courant, c'est en fait le Präsens qui est le plus souvent utilisé pour le futur — le Futur I est réservé aux prédictions, aux promesses et à l'emphase.",
    ],
    explanationDetailed: [
      "La structure est fixe : sujet + werden conjugué (en position 2) + reste de la phrase + infinitif (en position finale). Ich werde morgen arbeiten — « Je travaillerai demain. »",
      "Werden est irrégulier : ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — ces six formes doivent être mémorisées plutôt que déduites d'une règle régulière.",
      "Les germanophones préfèrent souvent le Präsens accompagné d'un indicateur de temps pour les événements futurs planifiés (Ich fliege morgen) et réservent le Futur I aux prédictions, promesses ou suppositions sur l'avenir : Es wird morgen regnen (Il va pleuvoir demain).",
    ],
    exampleMeanings: ["Je travaillerai demain.", "Il va bientôt pleuvoir.", "Nous allons résoudre le problème.", "Elle t'appellera."],
    exerciseTexts: [
      {
        explanation: "ich prend la forme irrégulière werde.",
        grammarRule: "Forme ich de werden : werde.",
        prompt: "Complétez la phrase avec la forme correcte de werden.",
      },
    ],
    quizTexts: [
      {
        explanation: "L'infinitif arbeiten se place tout à la fin, après morgen.",
        grammarRule: "Placez l'infinitif tout à la fin de la phrase.",
        prompt: "Quelle phrase forme correctement le Futur I ?",
      },
      {
        explanation: "Exact — c'est toute la structure : werden (conjugué) plus un infinitif à la fin.",
        grammarRule: "Futur I = werden (conjugué) + infinitif.",
        prompt: "Le Futur I se construit avec une forme conjuguée de werden suivie de l'infinitif du verbe principal.",
      },
      {
        explanation: "La forme irrégulière de werden pour du est wirst.",
        grammarRule: "Forme du de werden : wirst.",
        prompt: "Tapez la forme correcte de werden pour « du ».",
      },
      {
        explanation: "La forme irrégulière de werden pour er est wird.",
        grammarRule: "Forme er de werden : wird.",
        prompt: "Tapez la forme correcte de werden pour « er ».",
      },
      {
        explanation: "es prend la même forme que er : wird.",
        grammarRule: "Forme es de werden : wird.",
        prompt: "Complétez la phrase avec la forme correcte de werden.",
      },
      {
        explanation: "Lösen reste un infinitif nu, placé tout à la fin de la phrase.",
        grammarRule: "L'infinitif du Futur I est toujours sous sa forme nue (non conjuguée).",
        prompt: "Quelle phrase utilise correctement le Futur I ?",
      },
      {
        explanation:
          "Exact — Ich fliege morgen sonne plus naturel que Ich werde morgen fliegen, même si les deux sont grammaticalement corrects.",
        grammarRule: "Utilisez le Futur I surtout pour les prédictions, les promesses et les suppositions.",
        prompt: "Les germanophones préfèrent généralement le Präsens au Futur I lorsqu'un indicateur de temps rend déjà le futur évident.",
      },
      {
        explanation: "wir prend werden — la même forme que l'infinitif lui-même.",
        grammarRule: "Forme wir de werden : werden.",
        prompt: "Tapez la forme correcte de werden pour « wir ».",
      },
      {
        explanation: "sie (elle) prend la même forme que er : wird.",
        grammarRule: "Forme sie (singulier) de werden : wird.",
        prompt: "Complétez la phrase avec la forme correcte de werden.",
      },
      {
        explanation:
          "Wird seul, sans infinitif à sa suite, signifie « devenir » — Er wird Arzt exprime un changement d'état, pas une prédiction future.",
        grammarRule: "Werden sans infinitif signifie « devenir », et non un marqueur du futur.",
        prompt: "Quelle phrase utilise werden au sens de « devenir », et non comme marqueur du futur ?",
      },
    ],
    conclusion:
      "Le Futur I combine une forme conjuguée de werden avec un infinitif placé à la fin de la phrase. Il est moins courant dans la conversation quotidienne qu'on pourrait le penser — les germanophones préfèrent souvent le Präsens pour les événements planifiés — mais il reste le choix naturel pour les prédictions, les promesses et les suppositions sur ce qui va arriver.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Construisez le Futur I avec une forme conjuguée de werden suivie de l'infinitif du verbe principal.",
          "Placez l'infinitif tout à la fin de la phrase.",
          "Utilisez le Futur I pour les prédictions, les promesses et les suppositions sur l'avenir — pas pour les projets habituels.",
        ],
        notes: [
          "Pour les projets quotidiens accompagnés d'un indicateur de temps clair, le Präsens est généralement plus naturel : Ich fliege morgen sonne plus idiomatique que Ich werde morgen fliegen, même si les deux sont corrects.",
          "Werden employé seul (sans infinitif à sa suite) signifie « devenir » — Er wird Arzt (Il devient médecin) — c'est donc le contexte qui indique le sens voulu.",
        ],
        mistakeNotes: [
          "L'infinitif doit se placer tout à la fin de la phrase, après toute autre information comme morgen.",
          "Le Futur I utilise l'infinitif nu — sans zu devant.",
        ],
        exceptions: [
          "Werden lui-même est l'un des rares verbes vraiment irréguliers de l'allemand : ses formes au Präsens (wirst, wird) ne suivent aucun schéma régulier et doivent être mémorisées directement.",
          "Lorsque le sens futur est déjà évident grâce au contexte ou à un indicateur de temps, le Futur I est souvent simplement omis au profit du Präsens, plus simple.",
        ],
        tips: [
          "Mémorisez les six formes de werden comme un petit ensemble à part : elles reviennent constamment, aussi bien au sens de « devenir » qu'à l'intérieur du Futur I.",
          "Si un simple indicateur de temps suffit à signaler le futur, optez par défaut pour le Präsens — réservez le Futur I aux véritables prédictions ou promesses.",
        ],
      },
    },
  },
  "grammar/b2/genitiv": {
    summary: "Le cas de la possession — de plus en plus formel à l'oral, mais toujours indispensable à l'écrit.",
    objectives: [
      "Identifier le génitif comme le cas de la possession",
      "Ajouter la terminaison correcte aux noms masculins et neutres",
      "Utiliser le génitif après trotz, wegen, während et statt",
    ],
    explanationSimple: [
      "Le génitif exprime la possession : il indique à qui ou à quoi appartient quelque chose.",
      "Il suit aussi un petit groupe fixe de prépositions : trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "Contrairement aux trois autres cas, le génitif modifie le nom lui-même, pas seulement son article — les noms masculins et neutres ajoutent -s ou -es, tandis que les noms féminins et pluriels restent inchangés.",
      "Dans l'allemand parlé courant, von + datif remplace souvent le génitif (von meinem Vater au lieu de meines Vaters) — mais le génitif reste la forme attendue et plus soutenue à l'écrit et dans un discours soigné, et vous le rencontrerez constamment en lecture.",
      "L'ordre des mots au génitif place le possesseur après le nom qu'il complète — das Auto meines Vaters, et non meines Vaters Auto — sauf avec les noms propres, qui viennent en premier : Annas Auto.",
    ],
    exampleMeanings: [
      "La voiture de mon père est neuve.",
      "J'aime la couleur de la maison.",
      "La femme s'appelle Anna.",
      "Malgré la pluie, nous allons nous promener.",
    ],
    exerciseTexts: [
      {
        explanation: "Frau est féminin ; il prend donc der au génitif — le nom lui-même ne change pas.",
        grammarRule: "Article féminin au génitif : der.",
        prompt: "Complétez la phrase avec l'article correct au Genitiv.",
      },
    ],
    quizTexts: [
      {
        explanation:
          "Vaters prend la terminaison génitive -s après le possessif meines, ce qui indique à qui appartient la voiture.",
        grammarRule: "Les noms masculins prennent -s ou -es au génitif.",
        prompt: "Quelle phrase utilise correctement le Genitiv ?",
      },
      {
        explanation:
          "Exact — seuls les noms masculins et neutres prennent une terminaison au génitif ; les noms féminins et pluriels restent inchangés.",
        grammarRule: "Terminaisons génitives : -s/-es uniquement pour le masculin et le neutre.",
        prompt: "Les noms masculins et neutres ajoutent généralement -s ou -es au génitif, mais les noms féminins ne changent jamais.",
      },
      {
        explanation: "Haus est neutre ; il prend donc des au génitif, et le nom lui-même ajoute -es : Hauses.",
        grammarRule: "Article neutre au génitif : des, nom +(e)s.",
        prompt: "Complétez la phrase avec l'article correct au Genitiv.",
      },
      {
        explanation: "Trotz fait partie des prépositions fixes qui déclenchent toujours le génitif.",
        grammarRule: "Prépositions génitives : während, trotz, wegen, statt.",
        prompt: "Tapez la préposition génitive qui signifie « malgré ».",
      },
    ],
    conclusion:
      "Le génitif marque la possession et suit un petit groupe de prépositions comme trotz, wegen et während. Les noms masculins et neutres ajoutent -s ou -es ; les noms féminins et pluriels restent inchangés. Il est de plus en plus remplacé par von + datif dans la langue courante, mais reste indispensable en lecture et à l'écrit formel.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Utilisez le génitif pour exprimer la possession : à qui ou à quoi appartient quelque chose.",
          "Utilisez-le après les prépositions fixes trotz, wegen, während et statt.",
          "Ajoutez -s ou -es aux noms masculins et neutres ; les noms féminins et pluriels ne changent pas.",
        ],
        notes: [
          "Dans l'allemand parlé courant, von + datif remplace souvent le génitif (von meinem Vater au lieu de meines Vaters) — mais le génitif reste attendu à l'écrit et dans un discours formel.",
          "L'ordre des mots au génitif place le possesseur après le nom qu'il complète : das Auto meines Vaters, et non meines Vaters Auto (sauf avec les noms propres : Annas Auto).",
        ],
        mistakeNotes: [
          "Le possessif lui-même prend la terminaison génitive -es, et le nom prend -s — les deux changent ensemble.",
          "L'article des seul ne suffit pas : les noms neutres ajoutent aussi -es au génitif.",
        ],
        exceptions: [
          "Les noms neutres/masculins d'une syllabe prennent généralement -es (des Hauses, des Mannes) ; les noms plus longs prennent souvent seulement -s (des Computers, des Lehrers).",
          "Les noms masculins faibles (n-nouns) comme der Student ou der Junge prennent aussi -en au génitif, pas -s : des Studenten, et non des Studentens.",
        ],
        tips: [
          "Si vous pouvez reformuler une phrase avec « von + datif » et qu'elle sonne toujours naturelle, le génitif y est généralement facultatif — mais apprenez à le reconnaître dans tous les cas, car vous le rencontrerez constamment à l'écrit.",
          "Apprenez trotz, wegen, während et statt comme un ensemble : ce sont les quatre prépositions génitives que vous rencontrerez le plus souvent.",
        ],
      },
    },
  },
};
