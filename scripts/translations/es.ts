import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Spanish (español) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const es: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "El caso del sujeto: la forma en la que empieza todo sustantivo.",
    objectives: [
      "Identificar el sujeto de una frase alemana.",
      "Usar el nominativo después de sein, werden y bleiben.",
    ],
    explanationSimple: [
      "El nominativo es el caso del sujeto: la persona o cosa que realiza la acción de la frase.",
      "Es también la forma que encuentras en el diccionario, así que todo sustantivo que aprendas parte del nominativo.",
    ],
    explanationDetailed: [
      "El alemán marca la función de un sustantivo en la frase cambiando su artículo, no el orden de las palabras como suele hacer el español. El nominativo señala al sujeto: quien realiza la acción del verbo.",
      "Puedes encontrar el sujeto preguntando wer? (¿quién?) para personas o was? (¿qué?) para cosas: lo que responda a esa pregunta está en nominativo.",
      "El nominativo también aparece después de los verbos copulativos sein (ser/estar), werden (llegar a ser) y bleiben (permanecer), porque el sustantivo que los sigue no recibe la acción, sino que vuelve a nombrar al sujeto.",
    ],
    exampleMeanings: ["El hombre duerme.", "La mujer trabaja hoy.", "El niño se ríe fuerte.", "Él es mi profesor."],
    exerciseTexts: [
      {
        explanation: "Kind es neutro, así que como sujeto necesita el artículo nominativo neutro das.",
        grammarRule: "Artículo nominativo neutro: das.",
        prompt: "Completa la frase con el artículo correcto en Nominativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann es el sujeto que realiza la acción, así que se queda en nominativo: der, no den ni dem.",
        grammarRule: "Usa el nominativo para el sujeto de cualquier frase.",
        prompt: "¿En qué frase se usa correctamente el Nominativ?",
      },
      {
        explanation:
          "Correcto — sein/werden/bleiben conectan al sujeto con un sustantivo que vuelve a nombrarlo, así que ese sustantivo también permanece en nominativo.",
        grammarRule: "Usa el nominativo para el atributo después de sein, werden y bleiben.",
        prompt: "El nominativo se usa para el atributo después de sein, werden y bleiben.",
      },
      {
        explanation: "Frau es femenino, así que como sujeto necesita el artículo nominativo femenino die.",
        grammarRule: "Artículo nominativo femenino: die.",
        prompt: "Completa la frase con el artículo correcto en Nominativ.",
      },
      {
        explanation:
          "Las oraciones principales alemanas colocan primero el sujeto (Der Junge), luego el verbo conjugado (liest) en segunda posición, y después el resto.",
        grammarRule: "Pregunta wer? o was? para identificar el elemento en nominativo — aquí Der Junge responde a wer?",
        translation: "El niño lee un libro.",
        prompt: "Ordena las palabras correctamente.",
      },
      {
        explanation: "Kind es neutro → das; Katze es femenino → die — ambos son sujetos en nominativo.",
        grammarRule: "Haz coincidir el género de cada sustantivo con su artículo nominativo: der/die/das.",
        prompt: "Arrastra el artículo correcto a cada espacio.",
      },
      {
        explanation: "Der Lehrer es masculino, así que se sustituye por el pronombre er en nominativo.",
        grammarRule: "Pronombre nominativo masculino: er.",
        prompt: "Escribe el pronombre personal en Nominativ que sustituye a 'der Lehrer'.",
      },
    ],
    conclusion:
      "El nominativo marca el sujeto de la frase y el atributo después de sein, werden y bleiben. Es la forma base de la que derivan todos los demás casos, así que conviene dominarla bien antes de pasar al acusativo.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa el nominativo para el sujeto de cualquier frase.",
          "Úsalo para el atributo después de sein, werden y bleiben.",
          "Pregunta wer? o was? para identificar el elemento en nominativo.",
        ],
        notes: [
          "El nominativo es la forma 'por defecto': es la que buscas en el diccionario y con la que se comparan todos los demás casos.",
          "La terminación del adjetivo antes de un sustantivo en nominativo depende del artículo y del género, por ejemplo der große Mann, pero eso es un tema aparte.",
        ],
        mistakeNotes: [
          "El verbo sehen exige un complemento directo en acusativo, no en nominativo — es uno de los primeros errores que comete cualquier estudiante.",
          "El nominativo femenino es siempre die, nunca der — der se reserva para los sustantivos masculinos.",
        ],
        exceptions: [
          "Un grupo de sustantivos masculinos conocidos como 'sustantivos débiles' o n-Deklination — der Junge, der Name, der Student, der Herr — añaden -n o -en en todos los casos excepto en el nominativo singular.",
          "Algunos sustantivos tienen un género variable o debatido según la región (por ejemplo der/das Joghurt), pero el diccionario siempre indica la forma estándar.",
        ],
        tips: [
          "Cuando no estés seguro de qué caso necesitas, busca primero el verbo y pregúntate wer oder was tut das? — la respuesta siempre está en nominativo.",
          "Aprende cada sustantivo nuevo junto con su artículo nominativo (der/die/das): ese solo hábito evita la mayoría de los errores de género más adelante.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "El caso del complemento directo, y un grupo fijo de preposiciones.",
    objectives: [
      "Identificar el complemento directo de un verbo transitivo.",
      "Aplicar correctamente el cambio der → den / ein → einen.",
      "Reconocer las preposiciones fijas que exigen acusativo.",
    ],
    explanationSimple: [
      "El acusativo marca el complemento directo: la persona o cosa que recibe directamente la acción del verbo.",
      "Es también el caso que sigue siempre a un pequeño grupo fijo de preposiciones, sin excepción.",
    ],
    explanationDetailed: [
      "Una vez que identificas el sujeto (nominativo), la siguiente pregunta suele ser: '¿sobre qué actúa el sujeto?' — eso es el complemento directo, y en alemán lleva acusativo.",
      "Puedes encontrarlo preguntando wen? (¿a quién?) para personas o was? (¿qué?) para cosas.",
      "Solo el artículo masculino cambia visiblemente en acusativo: der pasa a den y ein pasa a einen. Los artículos femenino, neutro y plural son idénticos al nominativo, por eso el acusativo suele pasar 'inadvertido' hasta que aparece un sustantivo masculino.",
      "Un grupo fijo de verbos lleva casi siempre un complemento en acusativo — haben, sehen, brauchen, kaufen, essen, trinken, lieben — y un grupo fijo de preposiciones activa siempre el acusativo: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Veo al hombre.", "Ella compra una manzana.", "Queremos a nuestro perro.", "El regalo es para ti."],
    exerciseTexts: [
      {
        explanation:
          "Hund es masculino, así que el posesivo sufre el mismo cambio exclusivo del masculino en acusativo: unser → unseren.",
        grammarRule: "Solo el artículo/posesivo masculino cambia en acusativo.",
        prompt: "Completa la frase con el artículo correcto en Akkusativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "sehen exige un complemento directo en acusativo, y el masculino der pasa a den.",
        grammarRule: "Solo el artículo masculino cambia: der → den, ein → einen.",
        prompt: "¿En qué frase se usa correctamente el Akkusativ?",
      },
      {
        explanation: "Correcto — die permanece die tanto en nominativo como en acusativo; solo cambia el artículo masculino.",
        grammarRule: "Los artículos femenino, neutro y plural son idénticos al nominativo.",
        prompt: "El artículo femenino en acusativo es idéntico al artículo femenino en nominativo.",
      },
      {
        explanation: "Apfel es masculino y, como complemento directo tras kaufen, necesita el acusativo einen.",
        grammarRule: "Artículo indeterminado acusativo masculino: einen.",
        prompt: "Completa la frase con el artículo correcto en Akkusativ.",
      },
      {
        explanation: "Primero el sujeto (Wir), luego el verbo (lieben), y después el complemento en acusativo (unseren Hund).",
        grammarRule: "Usa el acusativo para el complemento directo de un verbo transitivo.",
        translation: "Queremos a nuestro perro.",
        prompt: "Ordena las palabras correctamente.",
      },
      {
        explanation: "für activa siempre el acusativo, así que du pasa a dich y er pasa a ihn.",
        grammarRule: "Usa siempre el acusativo después de durch, für, gegen, ohne, um.",
        prompt: "Arrastra el pronombre correcto a cada espacio.",
      },
      {
        explanation:
          "Student es un sustantivo débil (n-Deklination), así que lleva tanto el artículo acusativo den como la terminación -en: den Studenten.",
        grammarRule: "Los sustantivos débiles también añaden -n/-en en acusativo.",
        prompt: "Escribe la forma en Akkusativ de 'der Student', con el artículo incluido (es un sustantivo débil).",
      },
    ],
    conclusion:
      "El acusativo marca el complemento directo y sigue a durch, für, gegen, ohne y um. El único cambio visible respecto al nominativo es el artículo masculino — der/ein pasan a den/einen — todo lo demás permanece igual.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa el acusativo para el complemento directo de un verbo transitivo.",
          "Pregunta wen? para personas o was? para cosas para encontrarlo.",
          "Solo el artículo masculino cambia: der → den, ein → einen.",
          "Los artículos femenino, neutro y plural son idénticos al nominativo.",
          "Usa siempre el acusativo después de durch, für, gegen, ohne y um.",
        ],
        notes: [
          "Como solo cambian los artículos masculinos, muchos estudiantes dejan de comprobar el género de los sustantivos femeninos y neutros — pero los posesivos y pronombres (mein → meinen, ihr → ihren) siguen el mismo patrón exclusivo del masculino, así que conviene estar atento.",
          "Las expresiones de tiempo que responden a '¿cuánto tiempo?' o señalan un punto concreto ('¿qué día?') suelen usar el acusativo sin preposición: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "sehen necesita un complemento en acusativo, así que el artículo masculino der debe pasar a den.",
          "für activa siempre el acusativo, así que el pronombre ich pasa a mich.",
        ],
        exceptions: [
          "Los sustantivos débiles (n-Deklination) como der Student, der Junge y der Name añaden -n también en acusativo: den Studenten, den Jungen, den Namen — no solo en dativo y genitivo.",
          "Algunos verbos que parecen requerir una preposición en realidad llevan un complemento directo en acusativo sin ella, por ejemplo Ich frage dich (no 'zu dir').",
        ],
        tips: [
          "Los sustantivos femeninos, neutros y plurales son idénticos en nominativo y acusativo: si una frase parece 'sin cambios', revisa de nuevo el sustantivo masculino.",
          "Memoriza durch, für, gegen, ohne, um como un solo bloque: siempre llevan acusativo, sin excepciones.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "El caso del complemento indirecto: quien recibe algo o se beneficia de ello.",
    objectives: [
      "Identificar el complemento indirecto de una frase.",
      "Aplicar el cambio completo del artículo en dativo para todos los géneros.",
      "Reconocer los verbos y preposiciones que exigen solo dativo.",
    ],
    explanationSimple: [
      "El dativo marca el complemento indirecto: normalmente la persona que recibe algo o se beneficia de ello.",
      "Responde a la pregunta wem? (¿a quién?).",
    ],
    explanationDetailed: [
      "Muchas frases alemanas tienen a la vez un complemento directo (acusativo) y uno indirecto (dativo): Ich gebe dem Mann das Buch — 'Le doy el libro al hombre.' Dem Mann es quien recibe, así que va en dativo.",
      "Un grupo fijo de verbos exige siempre un complemento en dativo, aunque parezca lógico usar el acusativo — helfen, danken, gefallen, gehören, folgen, glauben y antworten son los primeros que se aprenden.",
      "El dativo también sigue a un grupo fijo de preposiciones: aus, bei, mit, nach, seit, von, zu.",
      "Con las nueve preposiciones de 'doble régimen' (in, an, auf, über, unter, vor, hinter, neben, zwischen), usa el dativo para indicar ubicación — responde a wo? (¿dónde?) — y el acusativo para el movimiento hacia un destino — responde a wohin? (¿hacia dónde?).",
    ],
    exampleMeanings: [
      "Le doy el libro al hombre.",
      "Ella ayuda a su hermana.",
      "Viajamos en autobús.",
      "La casa pertenece a los vecinos.",
    ],
    exerciseTexts: [
      {
        explanation: "Nachbarn está en plural, y gehören exige siempre dativo, así que die pasa a den.",
        grammarRule: "Todos los artículos cambian en dativo; el plural die pasa a den.",
        prompt: "Completa la frase con el artículo correcto en Dativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "helfen exige siempre un complemento en dativo, y el femenino die pasa a der en dativo.",
        grammarRule: "helfen exige siempre dativo, nunca acusativo.",
        prompt: "¿En qué frase se usa correctamente el Dativ?",
      },
      {
        explanation:
          "Correcto — die Kinder pasa a den Kindern; solo permanecen igual los sustantivos que ya terminan en -n o -s.",
        grammarRule: "Los sustantivos plurales añaden -n en dativo, salvo que ya terminen en -n o -s.",
        prompt: "Los sustantivos plurales en dativo suelen añadir la terminación -n.",
      },
      {
        explanation: "Bus es masculino, y mit activa siempre el dativo, así que der pasa a dem.",
        grammarRule: "Usa siempre el dativo después de aus, bei, mit, nach, seit, von, zu.",
        prompt: "Completa la frase con el artículo correcto en Dativ.",
      },
      {
        explanation: "Cuando ambos complementos son sustantivos, el dativo (dem Mann) suele ir antes que el acusativo (das Buch).",
        grammarRule: "Cuando ambos complementos de la frase son sustantivos, el dativo suele ir primero.",
        translation: "Le doy el libro al hombre.",
        prompt: "Ordena las palabras correctamente.",
      },
      {
        explanation: "gehören exige siempre dativo: sie pasa a ihr y er pasa a ihm.",
        grammarRule: "Un grupo fijo de verbos exige siempre un complemento en dativo — gehören es uno de ellos.",
        prompt: "Arrastra el pronombre correcto a cada espacio.",
      },
      {
        explanation: "El plural die Kinder pasa a den Kindern en dativo: el artículo cambia a den y el sustantivo añade -n.",
        grammarRule: "Todos los artículos cambian en dativo; los sustantivos plurales añaden -n.",
        prompt: "Escribe la forma plural en Dativ de 'die Kinder', con el artículo incluido (por ejemplo 'den …').",
      },
    ],
    conclusion:
      "El dativo marca el complemento indirecto, sigue a aus/bei/mit/nach/seit/von/zu y cambia todos los artículos, con una -n característica que se añade a los sustantivos plurales. Verbos como helfen y danken exigen siempre un complemento en dativo.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa el dativo para el complemento indirecto — normalmente quien recibe o se beneficia de algo.",
          "Pregunta wem? para encontrarlo.",
          "Todos los artículos cambian: der → dem, die → der, das → dem, die (plural) → den.",
          "Los sustantivos plurales añaden -n en dativo, salvo que ya terminen en -n o -s: die Kinder → den Kindern.",
          "Usa siempre el dativo después de aus, bei, mit, nach, seit, von, zu.",
          "Con las preposiciones de doble régimen, el dativo responde a wo? y el acusativo a wohin?.",
        ],
        notes: [
          "Los verbos que rigen dativo nunca llevan un complemento en acusativo para la persona implicada — helfen, por ejemplo, siempre es 'jemandem helfen', nunca 'jemanden helfen'.",
          "Nota sobre el orden de las palabras: cuando ambos complementos de la frase son sustantivos, el dativo suele ir primero: Ich gebe dem Mann das Buch. Cuando ambos son pronombres, va primero el acusativo: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "helfen exige siempre dativo, nunca acusativo — sin excepción.",
          "mit siempre lleva dativo, y el sustantivo plural necesita la terminación -n: Kinder → Kindern.",
        ],
        exceptions: [
          "Un pequeño grupo de verbos y adjetivos se combina con el dativo por razones idiomáticas — gefallen (gustar), schmecken (saber bien) y stehen (sentar bien) ponen a la persona en dativo: Das Kleid steht dir gut.",
          "Los sustantivos que en plural ya terminan en -n o -s no añaden una -n adicional en dativo: den Autos, den Frauen.",
        ],
        tips: [
          "El dativo plural casi siempre termina en -n: notar esa -n en un sustantivo suele ser la forma más rápida de reconocer una frase en dativo de un vistazo.",
          "Aprende aus, bei, mit, nach, seit, von, zu como un solo grupo: no hay más lógica que memorizar la lista.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "El tiempo pasado más habitual del alemán: cómo se forma y cuándo se usa.",
    objectives: [
      "Formar el Perfekt con haben o sein más un participio pasado.",
      "Elegir correctamente entre haben y sein.",
      "Reconocer los participios pasados regulares e irregulares.",
    ],
    explanationSimple: [
      "El Perfekt es la forma en que el alemán hablado suele referirse al pasado: no es un único verbo, sino haben o sein junto con un participio pasado.",
      "Se construye igual sin importar quién hable: el verbo auxiliar en segunda posición y el participio al final de la oración.",
    ],
    explanationDetailed: [
      "La mayoría de los verbos usan haben como auxiliar. Los verbos de movimiento (gehen, fahren, kommen) o de cambio de estado (aufwachen, werden) suelen usar sein.",
      "Los verbos regulares (débiles) forman el participio con ge- + raíz + -t: machen → gemacht, spielen → gespielt. Los verbos irregulares (fuertes) suelen cambiar la vocal de la raíz y terminar en -en: sprechen → gesprochen, gehen → gegangen.",
      "Como el participio va al final de la oración, todo lo demás — complementos, expresiones de tiempo, la negación — se coloca entre el auxiliar y el participio.",
    ],
    exampleMeanings: ["Leí el libro.", "Viajamos a Berlín.", "Ella trabajó ayer.", "Él se despertó temprano."],
    exerciseTexts: [
      {
        explanation: "fahren describe un movimiento de un lugar a otro, así que lleva sein: Wir sind gefahren.",
        grammarRule: "Usa sein para los verbos de movimiento o de cambio de estado.",
        prompt: "¿Qué auxiliar lleva 'fahren' en Perfekt?",
      },
    ],
    quizTexts: [
      {
        explanation: "lesen lleva haben, y su participio irregular gelesen se coloca al final de la oración.",
        grammarRule: "Usa haben como auxiliar para la mayoría de los verbos.",
        prompt: "¿En qué frase está bien formado el Perfekt?",
      },
      {
        explanation: "Correcto — telefonieren → telefoniert, sin ge-.",
        grammarRule: "Los verbos terminados en -ieren nunca llevan ge-.",
        prompt: "Verbos como telefonieren nunca llevan el prefijo ge- en Perfekt.",
      },
      {
        explanation: "fahren es un verbo de movimiento, así que lleva sein: sind gefahren.",
        grammarRule: "Usa sein para los verbos de movimiento o de cambio de estado.",
        prompt: "Completa la frase con el auxiliar correcto.",
      },
      {
        explanation: "essen es irregular: gegessen, no la forma regular geesst.",
        grammarRule: "Los participios irregulares suelen cambiar la vocal de la raíz y terminar en -en.",
        prompt: "Escribe el participio pasado de 'essen'.",
      },
    ],
    conclusion:
      "El Perfekt se forma con haben o sein más un participio pasado colocado al final de la oración. La mayoría de los verbos llevan haben; los verbos de movimiento o de cambio de estado llevan sein. Los participios regulares terminan en -t, los irregulares suelen terminar en -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa haben como auxiliar para la mayoría de los verbos.",
          "Usa sein para los verbos de movimiento o de cambio de estado.",
          "Participio regular: ge- + raíz + -t.",
          "Los participios irregulares suelen terminar en -en y pueden cambiar la vocal de la raíz.",
          "El participio va siempre al final de la oración.",
        ],
        notes: [
          "Conviene memorizar directamente algunos participios irregulares frecuentes en lugar de deducirlos: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Los verbos con prefijo separable insertan -ge- entre el prefijo y la raíz: aufwachen → aufgewacht, no geaufwacht.",
        ],
        mistakeNotes: ["fahren es un verbo de movimiento, así que lleva sein, no haben."],
        exceptions: [
          "Los verbos terminados en -ieren (telefonieren, studieren) nunca llevan ge-: telefoniert, studiert.",
          "Los verbos con prefijo inseparable (be-, ver-, er-, ge-, ent-, zer-) también omiten ge-: besuchen → besucht, verstehen → verstanden.",
        ],
        tips: [
          "Si dudas entre haben y sein, pregúntate: ¿este verbo describe un movimiento de A a B, o un cambio de estado? Si es así, casi seguro lleva sein.",
          "Aprende los verbos irregulares nuevos con sus tres formas a la vez — infinitivo, pasado simple, participio — igual que aprendes der/die/das con un sustantivo nuevo.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Vocabulario básico para hablar de los miembros de la familia.",
    explanationSimple: [
      "Esta lección presenta las palabras alemanas para la familia cercana: las que usarás constantemente en cuanto empieces a describir tu propia vida.",
    ],
    explanationDetailed: [
      "Los sustantivos de familia siguen patrones de género regulares que ya conoces: la mayoría de los nombres de persona son der o die según el género de la persona, con algunas excepciones fijas como das Kind (el niño/la niña) y das Baby (el bebé), que son gramaticalmente neutros sin importar el género del niño.",
      "Los posesivos (mein, meine) concuerdan con el género del sustantivo igual que ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["Esta es mi madre.", "Mi hermano vive en Berlín.", "Tengo dos hermanas."],
    exerciseTexts: [
      {
        explanation: "Schwester es femenino: die Schwester.",
        grammarRule: "Los sustantivos de familia toman el género de la persona que nombran.",
        prompt: "Escribe la palabra alemana para 'hermana'.",
      },
    ],
    quizTexts: [
      { explanation: "der Vater significa 'padre'.", grammarRule: "der Vater es masculino.", prompt: "¿Qué palabra significa 'padre'?" },
      {
        explanation: "Correcto — das Kind es siempre neutro.",
        grammarRule: "Algunos sustantivos de persona como das Kind y das Baby son neutros fijos.",
        prompt: "'das Kind' es gramaticalmente neutro, sin importar el género del niño.",
      },
      {
        explanation: "Schwestern es el plural de Schwester.",
        grammarRule: "La mayoría de los sustantivos femeninos añaden -n o -en en plural.",
        prompt: "Completa la frase.",
      },
    ],
    conclusion:
      "El vocabulario de la familia es gramaticalmente regular — sustantivos con género para las personas, con das Kind como excepción fija neutra — y te da de inmediato un motivo para practicar los posesivos.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["madre", "padre", "hermana", "hermano", "padres (plural)", "niño/niña", "abuela", "abuelo"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Un breve texto cotidiano sobre pedir algo en una cafetería, con preguntas de comprensión.",
    explanationSimple: ["Una breve escena en una cafetería: léela una primera vez para captar la idea general antes de revisar cada palabra."],
    explanationDetailed: [
      "A nivel A1 conviene leer en dos pasadas: primero para captar la situación general (quién, dónde, qué ocurre), y luego una segunda vez fijándote en las palabras sueltas que no captaste la primera vez.",
      "No necesitas entender cada palabra para responder a las preguntas de comprensión de abajo: céntrate en lo que realmente cambia el sentido de la escena.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      { explanation: "Anna pide un café (einen Kaffee), no un té.", grammarRule: "bestellen + complemento directo en acusativo.", prompt: "Anna pide un té." },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — se sienta a una mesa junto a la ventana.",
        grammarRule: "sich setzen an + acusativo.",
        prompt: "¿Dónde se sienta Anna?",
      },
      {
        explanation: "Correcto — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Dos verbos coordinados unidos por und.",
        prompt: "Anna lee un libro mientras se toma el café.",
      },
      {
        explanation: "Minuten (minutos) — Nach zehn Minuten.",
        grammarRule: "nach + expresión de tiempo en dativo.",
        prompt: "Completa: el camarero trae el pedido después de diez ___.",
      },
    ],
    conclusion:
      "Una breve escena de cafetería construida enteramente con vocabulario de nivel A1 y oraciones principales sencillas: buena práctica de lectura global antes de preocuparse por cada palabra.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Un breve anuncio de estación: presta atención al andén y a la hora de salida.",
    explanationSimple: ["Un breve anuncio de estación: todavía no hay archivo de audio, así que lee la transcripción como si la estuvieras escuchando."],
    explanationDetailed: [
      "Los anuncios de estación y aeropuerto en alemán siguen una estructura muy predecible, y esa misma previsibilidad los convierte en un buen primer ejercicio de comprensión auditiva: número de tren, andén (Gleis) y hora, casi siempre en el mismo orden.",
      "En cuanto puedas identificar con seguridad el número de andén y la hora en un anuncio, podrás aplicar la misma estrategia de escucha a cualquier audio con un formato parecido (partes meteorológicos, instrucciones de seguridad, etc.).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      { explanation: "Gleis 7 — andén 7.", grammarRule: "von + número de andén en dativo.", prompt: "¿Desde qué andén sale el tren?" },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — andén 7.",
        grammarRule: "von + dativo.",
        prompt: "¿Desde dónde sale el tren hacia Múnich?",
      },
      {
        explanation: "vierzehn Uhr dreißig significa las 14:30.",
        grammarRule: "Hora hablada en formato de 24 horas: [hora] Uhr [minutos].",
        prompt: "Escribe la hora de salida en cifras, formato de 24 horas (por ejemplo 09:15).",
      },
    ],
    conclusion:
      "Los anuncios de estación siguen una fórmula fija — número de tren, andén, hora — lo que los convierte en un ejercicio de escucha ideal para empezar, en cuanto reconoces el patrón que hay que seguir.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Practica presentarte en voz alta: nombre, procedencia y algún detalle más.",
    explanationSimple: [
      "Presentarte es una de las primeras cosas que realmente dirás en voz alta en alemán: un puñado fijo de frases cortas que usarás una y otra vez.",
    ],
    explanationDetailed: [
      "Aquí la práctica oral funciona mejor en voz alta, no solo mentalmente: di cada indicación de abajo como una frase completa antes de pasar a la siguiente, aunque nadie te esté escuchando.",
      "Todavía no hay grabación ni evaluación del habla; trátalo como un ejercicio de expresión oral autónomo, usando las indicaciones y las frases de ejemplo como un guion que puedes adaptar.",
    ],
    exampleMeanings: ["Me llamo Anna.", "Soy de Alemania.", "Soy estudiante."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … es la forma habitual de decir de dónde eres.",
        grammarRule: "kommen aus + nombre de país/ciudad en dativo.",
        prompt: "Escribe en alemán 'Vengo de …'.",
      },
    ],
    quizTexts: [
      {
        explanation: "El verbo heißen se conjuga directamente con el nombre como complemento: Ich heiße Anna.",
        grammarRule: "heißen + nombre, sin necesitar otro verbo.",
        prompt: "¿Qué frase dice correctamente 'Me llamo Anna'?",
      },
      {
        explanation: "heißt es la forma de heißen para du.",
        grammarRule: "du heißt (conjugación regular de verbos en -en).",
        prompt: "Completa: cómo preguntar el nombre a alguien de manera informal.",
      },
    ],
    conclusion:
      "Presentarte se construye con tres estructuras de frase fijas — nombre, procedencia, ocupación — que merece la pena practicar en voz alta desde el primer día, porque las usarás desde el principio.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Di tu nombre:",
          "Di de dónde eres:",
          "Di a qué te dedicas:",
          "Pregúntale el nombre a otra persona:",
          "Une tus tres frases en una breve presentación.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Un cuestionario de repaso mixto sobre los casos gramaticales, vocabulario cotidiano y el orden básico de la frase.",
    explanationSimple: [
      "Un cuestionario de puro repaso: sin explicaciones nuevas, solo una mezcla de preguntas sobre todo lo visto hasta el nivel A1.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "El sujeto de la frase lleva nominativo: Der Mann.",
        grammarRule: "Usa el nominativo para el sujeto de cualquier frase.",
        prompt: "¿Qué artículo es correcto? '___ Mann schläft.' (sujeto)",
      },
      {
        explanation: "sehen exige un complemento en acusativo, y el masculino der pasa a den.",
        grammarRule: "Solo el artículo masculino cambia en acusativo.",
        prompt: "Completa con el artículo correcto en Akkusativ.",
      },
      { explanation: "die Schwester.", grammarRule: "Repaso del vocabulario de familia.", prompt: "Escribe la palabra alemana para 'hermana'." },
      {
        explanation: "Primero el sujeto, luego el verbo conjugado en segunda posición.",
        grammarRule: "Orden básico de las palabras en alemán: sujeto, verbo, resto.",
        translation: "Me llamo Anna.",
        prompt: "Ordena las palabras correctamente.",
      },
    ],
    conclusion: "Un breve repaso mixto sobre casos gramaticales, vocabulario y orden de las palabras: un buen control antes de avanzar más allá del nivel A1.",
    details: { kind: "none" },
  },
  "grammar/b2/genitiv": {
    summary: "El caso de la posesión: cada vez más formal en el habla, pero aún esencial para leer y escribir.",
    objectives: [
      "Reconocer el genitivo como el caso de la posesión.",
      "Añadir la terminación correcta al sustantivo masculino y neutro.",
      "Usar el genitivo después de trotz, wegen, während y statt.",
    ],
    explanationSimple: [
      "El genitivo indica posesión: a quién o a qué pertenece algo.",
      "También sigue a un pequeño grupo fijo de preposiciones: trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "A diferencia de los otros tres casos, el genitivo cambia el propio sustantivo, no solo su artículo — los sustantivos masculinos y neutros añaden -s o -es, mientras que los femeninos y plurales permanecen exactamente igual.",
      "En el alemán hablado cotidiano, von + dativo suele ocupar el lugar del genitivo (von meinem Vater en vez de meines Vaters) — pero el genitivo sigue siendo la forma esperada, más formal, en la escritura y en el habla cuidada, y lo encontrarás constantemente al leer.",
      "El orden de las palabras en genitivo coloca al poseedor después del sustantivo que modifica — das Auto meines Vaters, no meines Vaters Auto — excepto con los nombres propios, que van primero: Annas Auto.",
    ],
    exampleMeanings: [
      "El coche de mi padre es nuevo.",
      "Me gusta el color de la casa.",
      "El nombre de la mujer es Anna.",
      "A pesar de la lluvia, vamos a dar un paseo.",
    ],
    exerciseTexts: [
      {
        explanation: "Frau es femenino, así que en genitivo lleva der — el sustantivo en sí no cambia.",
        grammarRule: "Artículo genitivo femenino: der.",
        prompt: "Completa la frase con el artículo correcto en Genitiv.",
      },
    ],
    quizTexts: [
      {
        explanation: "Vaters lleva la terminación genitiva -s tras el posesivo meines, indicando de quién es el coche.",
        grammarRule: "Los sustantivos masculinos añaden -s o -es en genitivo.",
        prompt: "¿En qué frase se usa correctamente el Genitiv?",
      },
      {
        explanation: "Correcto — solo los sustantivos masculinos y neutros llevan una terminación genitiva; los femeninos y plurales permanecen invariables.",
        grammarRule: "Terminaciones genitivas: -s/-es solo para masculino y neutro.",
        prompt: "Los sustantivos masculinos y neutros suelen añadir -s o -es en genitivo, pero los femeninos nunca cambian.",
      },
      {
        explanation: "Haus es neutro, así que en genitivo lleva des, y el sustantivo añade -es: Hauses.",
        grammarRule: "Artículo genitivo neutro: des, sustantivo +(e)s.",
        prompt: "Completa la frase con el artículo correcto en Genitiv.",
      },
      {
        explanation: "Trotz es una de las preposiciones fijas que siempre exigen genitivo.",
        grammarRule: "Preposiciones de genitivo: während, trotz, wegen, statt.",
        prompt: "Escribe la preposición genitiva que significa 'a pesar de'.",
      },
    ],
    conclusion:
      "El genitivo marca la posesión y sigue a un pequeño grupo de preposiciones como trotz, wegen y während. Los sustantivos masculinos y neutros añaden -s o -es; los femeninos y plurales permanecen invariables. Cada vez se sustituye más por von + dativo en el habla informal, pero sigue siendo esencial en la lectura y la escritura formal.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Usa el genitivo para indicar posesión: a quién o a qué pertenece algo.",
          "Úsalo después de las preposiciones fijas trotz, wegen, während y statt.",
          "Añade -s o -es a los sustantivos masculinos y neutros; los femeninos y plurales no cambian.",
        ],
        notes: [
          "En el alemán hablado cotidiano, von + dativo suele sustituir al genitivo (von meinem Vater en vez de meines Vaters) — pero el genitivo sigue siendo lo esperado en la escritura y el habla formal.",
          "El orden de las palabras en genitivo coloca al poseedor después del sustantivo que modifica: das Auto meines Vaters, no meines Vaters Auto (excepto con nombres propios: Annas Auto).",
        ],
        mistakeNotes: [
          "El posesivo también necesita la terminación genitiva -es, y el sustantivo necesita -s — ambos cambian juntos.",
          "El artículo des por sí solo no basta — los sustantivos neutros también añaden -es en genitivo.",
        ],
        exceptions: [
          "Los sustantivos neutros/masculinos de una sílaba suelen llevar -es (des Hauses, des Mannes); los más largos suelen llevar solo -s (des Computers, des Lehrers).",
          "Los masculinos débiles (n-Deklination) como der Student o der Junge también llevan -en en genitivo, no -s: des Studenten, no des Studentens.",
        ],
        tips: [
          "Si puedes reformular una frase con 'von + dativo' y sigue sonando natural, ahí el genitivo suele ser opcional — pero reconócelo de todos modos, porque lo verás constantemente en la escritura.",
          "Aprende trotz, wegen, während y statt como un conjunto: son las cuatro preposiciones de genitivo que encontrarás más a menudo.",
        ],
      },
    },
  },
  "grammar/a1/praesens": {
    summary: "El presente alemán: terminaciones regulares, y cómo cubre también lo que el español expresa con 'estoy haciendo'.",
    objectives: [
      "Conjugar los verbos regulares en Präsens.",
      "Usar el Präsens tanto para acciones presentes como para el futuro cercano.",
      "Reconocer la vocal de apoyo -e- en las raíces que acaban en -t o -d.",
    ],
    explanationSimple: [
      "El Präsens es el presente alemán: se usa para lo que ocurre ahora, hechos generales y a menudo también el futuro cercano.",
      "Los verbos regulares añaden una terminación predecible a la raíz según quién realiza la acción.",
    ],
    explanationDetailed: [
      "Para conjugar un verbo regular, quita -en del infinitivo para obtener la raíz, y luego añade la terminación según el sujeto: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "El alemán no tiene una forma continua separada — ich spiele cubre tanto 'juego' como 'estoy jugando'. El contexto indica cuál es la intención.",
      "El Präsens también se usa habitualmente para hablar del futuro cercano, sobre todo con una expresión de tiempo: Ich fliege morgen nach Berlin (Mañana vuelo a Berlín).",
    ],
    exampleMeanings: [
      "Juego/estoy jugando al fútbol.",
      "Estás aprendiendo alemán.",
      "Hoy él trabaja.",
      "Mañana vamos a Berlín.",
    ],
    exerciseTexts: [
      {
        explanation: "du lleva la terminación regular -st: spiel + st = spielst.",
        grammarRule: "Terminación de Präsens para du: -st.",
        prompt: "Escribe la forma correcta en Präsens de 'spielen' para 'du'.",
      },
    ],
    quizTexts: [
      {
        explanation: "La raíz de arbeiten termina en -t, así que la forma de er necesita la vocal de apoyo: arbeitet, no arbeit.",
        grammarRule: "Inserta una -e- antes de la terminación cuando la raíz acaba en -t o -d.",
        prompt: "¿En qué frase se usa correctamente el Präsens?",
      },
      {
        explanation:
          "Correcto — el alemán suele usar el Präsens en lugar de un tiempo futuro independiente cuando el contexto o una expresión de tiempo ya dejan claro el futuro.",
        grammarRule: "Usa el Präsens para acciones en el futuro cercano con una expresión de tiempo.",
        prompt: "El Präsens puede usarse para hablar del futuro cercano, especialmente con una expresión de tiempo como morgen.",
      },
      {
        explanation: "wir lleva la terminación -en, que en un verbo regular coincide con el propio infinitivo: wohnen.",
        grammarRule: "Terminación de Präsens para wir: -en (igual que el infinitivo).",
        prompt: "Escribe la forma correcta en Präsens de 'wohnen' para 'wir'.",
      },
      {
        explanation: "ich lleva la terminación -e: kauf + e = kaufe.",
        grammarRule: "Terminación de Präsens para ich: -e.",
        prompt: "Completa la frase con la forma correcta en Präsens de 'kaufen'.",
      },
    ],
    conclusion:
      "El Präsens usa seis terminaciones predecibles — -e, -st, -t, -en, -t, -en — añadidas a la raíz del verbo, con una vocal de apoyo -e- para las raíces que acaban en -t o -d. Cubre tanto el presente como el futuro cercano, así que dominar estas terminaciones supone un gran avance incluso antes de llegar a los tiempos pasados.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Quita -en del infinitivo para encontrar la raíz.",
          "Añade la terminación correspondiente al sujeto: -e, -st, -t, -en, -t, -en.",
          "Inserta una -e- antes de la terminación si la raíz acaba en -t o -d (arbeiten → du arbeitest).",
        ],
        notes: [
          "Las terminaciones de du y er/sie/es son las que más necesitan la vocal de apoyo -e-, porque -st y -t son difíciles de pronunciar justo después de una raíz que acaba en -t/-d.",
          "Un puñado de verbos muy comunes son irregulares solo en las formas du/er (fahren → du fährst, er fährt) — no forman parte del patrón regular tratado aquí.",
        ],
        mistakeNotes: [
          "Las raíces que acaban en -t necesitan una -e- antes de la terminación -st, o la palabra se vuelve impronunciable.",
          "Cada sujeto necesita su propia terminación correspondiente — ich siempre lleva -e, nunca la forma -t de er.",
        ],
        exceptions: [
          "Los verbos fuertes con cambio vocálico como fahren, sehen y sprechen cambian la vocal solo en las formas du y er/sie/es (du fährst, er fährt) — un patrón distinto del regular visto aquí.",
          "Sein y haben son totalmente irregulares y deben memorizarse en sus propias formas: ich bin, du bist, er ist…",
        ],
        tips: [
          "Aprende las seis terminaciones como un conjunto fijo: una vez que sean automáticas, todo verbo regular se conjuga de la misma manera.",
          "Cuando la raíz de un verbo nuevo acabe en -t, -d o un grupo consonántico como -ffn (öffnen), espera la vocal de apoyo -e- antes de -st y -t.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "El pasado simple, usado en la escritura y con verbos comunes como sein y haben: en qué se diferencia del Perfekt.",
    objectives: [
      "Conjugar los verbos regulares (débiles) en Präteritum.",
      "Reconocer cuándo se prefiere el Präteritum al Perfekt.",
      "Usar correctamente sein y haben en sus formas habituales de Präteritum.",
    ],
    explanationSimple: [
      "El Präteritum es el otro tiempo pasado alemán: se usa sobre todo en la escritura, y en el habla para sein, haben y los verbos modales.",
      "Los verbos regulares añaden -te más una terminación personal a la raíz.",
    ],
    explanationDetailed: [
      "Mientras que el Perfekt domina el alemán hablado para la mayoría de los verbos, el Präteritum es el tiempo pasado normal en el alemán escrito — relatos, artículos periodísticos y textos formales casi siempre lo usan.",
      "Los verbos regulares (débiles) forman el Präteritum añadiendo -te a la raíz y luego una terminación personal: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Incluso en el habla, un puñado de verbos muy comunes casi siempre aparecen en Präteritum en vez de en Perfekt: war (era/estaba), hatte (tenía) y los verbos modales como konnte (podía) o wollte (quería).",
    ],
    exampleMeanings: [
      "Hice mis deberes.",
      "Ella tocó el piano ayer.",
      "Él estaba cansado.",
      "No teníamos tiempo.",
    ],
    exerciseTexts: [
      {
        explanation: "sie (ellos/ellas) lleva la terminación -ten, igual que wir: spiel + ten = spielten.",
        grammarRule: "Terminación de Präteritum para sie (plural): -ten.",
        prompt: "Escribe la forma correcta en Präteritum de 'spielen' para 'sie' (ellos/ellas).",
      },
    ],
    quizTexts: [
      {
        explanation: "La raíz de arbeiten acaba en -t, así que necesita la vocal de apoyo antes de -te: arbeitete.",
        grammarRule: "Inserta una -e- antes de -te cuando la raíz acaba en -t o -d.",
        prompt: "¿En qué frase se usa correctamente el Präteritum?",
      },
      {
        explanation:
          "Correcto — tanto ich como er/sie/es simplemente añaden -te, a diferencia del Präsens, donde difieren (-e frente a -t).",
        grammarRule: "Las terminaciones de Präteritum de ich y er son idénticas: -te.",
        prompt: "En el Präteritum, la forma de ich y la de er/sie/es usan exactamente la misma terminación.",
      },
      {
        explanation: "Haben es irregular en Präteritum: la forma de wir es hatten, no una regular habten.",
        grammarRule: "La raíz del Präteritum de haben es irregular: hatt-.",
        prompt: "Escribe la forma en Präteritum de 'haben' para 'wir'.",
      },
      {
        explanation: "ich lleva -te: mach + te = machte.",
        grammarRule: "Terminación de Präteritum para ich: -te.",
        prompt: "Completa la frase con la forma correcta en Präteritum de 'machen'.",
      },
    ],
    conclusion:
      "El Präteritum añade -te más una terminación personal a la raíz de un verbo regular, con ich y er/sie/es compartiendo la misma forma. Es el tiempo pasado por defecto en la escritura y, para sein, haben y los verbos modales, también la opción natural en el habla, aunque por lo demás el Perfekt domine la conversación cotidiana.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Añade -te a la raíz de un verbo regular, y luego la terminación personal: -te, -test, -te, -ten, -tet, -ten.",
          "Inserta una -e- antes de -te si la raíz acaba en -t o -d (arbeiten → er arbeitete).",
          "Prefiere el Präteritum para sein, haben y los verbos modales, incluso en el habla.",
        ],
        notes: [
          "A diferencia del Präsens, las formas de ich y er/sie/es son idénticas en Präteritum: ambas simplemente llevan -te.",
          "El Präteritum de sein (war) y de haben (hatte) están entre las primeras formas irregulares del pasado que memoriza la mayoría de los estudiantes, porque se usan constantemente.",
        ],
        mistakeNotes: [
          "Las raíces que acaban en -t necesitan la vocal de apoyo -e- antes de -te, la misma regla que en Präsens.",
          "Haben es irregular en Präteritum: hatte, no la forma regular habte.",
        ],
        exceptions: [
          "Los verbos fuertes (irregulares) cambian por completo la vocal de la raíz en lugar de añadir -te: gehen → ging, sehen → sah — un patrón distinto del regular visto aquí.",
          "El Präteritum de sein (war) y de haben (hatte) no siguen en absoluto el patrón regular en -te y simplemente se memorizan.",
        ],
        tips: [
          "Si estás contando una historia o escribiendo algo formal, recurre al Präteritum por defecto: es el tiempo narrativo natural del alemán.",
          "En la conversación cotidiana, normalmente puedes usar el Perfekt para la mayoría de los verbos, excepto war, hatte y los verbos modales, que casi siempre suenan más naturales en Präteritum incluso en el habla.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Hablar del futuro con werden + infinitivo: y cuándo los alemanes simplemente usan el presente.",
    objectives: [
      "Formar el Futur I con werden + infinitivo.",
      "Reconocer cuándo los alemanes usan el Futur I en vez del Präsens para expresar futuro.",
      "Conjugar werden correctamente en todas las personas.",
    ],
    explanationSimple: [
      "El Futur I habla del futuro usando una forma conjugada de werden más el infinitivo del verbo principal.",
      "En el alemán cotidiano, el Präsens se usa en realidad más a menudo para el futuro: el Futur I se reserva para predicciones, promesas y énfasis.",
    ],
    explanationDetailed: [
      "La estructura es fija: sujeto + werden conjugado (segunda posición) + resto de la frase + infinitivo (posición final). Ich werde morgen arbeiten: 'Mañana trabajaré.'",
      "Werden es irregular: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — estas seis formas hay que memorizarlas en vez de deducirlas de una regla regular.",
      "Los alemanes suelen preferir el Präsens con una expresión de tiempo para eventos futuros planeados (Ich fliege morgen) y reservan el Futur I para predicciones, promesas o suposiciones sobre el futuro: Es wird morgen regnen (Mañana lloverá).",
    ],
    exampleMeanings: [
      "Mañana trabajaré.",
      "Pronto lloverá.",
      "Resolveremos el problema.",
      "Ella te llamará.",
    ],
    exerciseTexts: [
      {
        explanation: "ich lleva la forma irregular werde.",
        grammarRule: "Forma de werden para ich: werde.",
        prompt: "Completa la frase con la forma correcta de werden.",
      },
    ],
    quizTexts: [
      {
        explanation: "El infinitivo arbeiten va justo al final, después de morgen.",
        grammarRule: "Coloca el infinitivo al final de la frase.",
        prompt: "¿Qué frase forma correctamente el Futur I?",
      },
      {
        explanation: "Correcto — esa es toda la estructura: werden (conjugado) más un infinitivo al final.",
        grammarRule: "Futur I = werden (conjugado) + infinitivo.",
        prompt: "El Futur I se construye con una forma conjugada de werden más el infinitivo del verbo principal.",
      },
      {
        explanation: "La forma irregular de werden para du es wirst.",
        grammarRule: "Forma de werden para du: wirst.",
        prompt: "Escribe la forma correcta de werden para 'du'.",
      },
      {
        explanation: "La forma irregular de werden para er es wird.",
        grammarRule: "Forma de werden para er: wird.",
        prompt: "Escribe la forma correcta de werden para 'er'.",
      },
      {
        explanation: "es (ello) lleva la misma forma que er: wird.",
        grammarRule: "Forma de werden para es: wird.",
        prompt: "Completa la frase con la forma correcta de werden.",
      },
      {
        explanation: "Lösen permanece como infinitivo puro, al final de la frase.",
        grammarRule: "El infinitivo del Futur I siempre está en su forma pura (sin conjugar).",
        prompt: "¿Qué frase usa correctamente el Futur I?",
      },
      {
        explanation:
          "Correcto — Ich fliege morgen suena más natural que Ich werde morgen fliegen, aunque ambas sean gramaticalmente correctas.",
        grammarRule: "Usa el Futur I sobre todo para predicciones, promesas y suposiciones.",
        prompt: "Los alemanes suelen preferir el Präsens al Futur I cuando una expresión de tiempo ya deja claro el futuro.",
      },
      {
        explanation: "wir lleva werden, la misma forma que el propio infinitivo.",
        grammarRule: "Forma de werden para wir: werden.",
        prompt: "Escribe la forma correcta de werden para 'wir'.",
      },
      {
        explanation: "sie (ella) lleva la misma forma que er: wird.",
        grammarRule: "Forma de werden para sie (singular): wird.",
        prompt: "Completa la frase con la forma correcta de werden.",
      },
      {
        explanation:
          "Wird solo, sin un infinitivo detrás, significa 'llegar a ser' — Er wird Arzt expresa un cambio de estado, no una predicción futura.",
        grammarRule: "Werden sin infinitivo significa 'llegar a ser', no es un marcador de futuro.",
        prompt: "¿Qué frase usa werden con el significado de 'llegar a ser', no como tiempo futuro?",
      },
    ],
    conclusion:
      "El Futur I combina una forma conjugada de werden con un infinitivo al final de la frase. Es menos habitual en el habla cotidiana de lo que cabría esperar — los alemanes suelen preferir el Präsens para eventos planeados —, pero es la opción natural para predicciones, promesas y suposiciones sobre lo que está por venir.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Construye el Futur I con una forma conjugada de werden más el infinitivo del verbo principal.",
          "Coloca el infinitivo al final de la frase.",
          "Usa el Futur I para predicciones, promesas y suposiciones sobre el futuro, no para planes rutinarios.",
        ],
        notes: [
          "Para planes cotidianos con una expresión de tiempo clara, el Präsens suele ser más natural: Ich fliege morgen suena más idiomático que Ich werde morgen fliegen, aunque ambas sean correctas.",
          "Werden solo (sin un infinitivo detrás) significa 'llegar a ser' — Er wird Arzt (Se está haciendo médico) — así que el contexto indica qué significado se pretende.",
        ],
        mistakeNotes: [
          "El infinitivo tiene que ir justo al final de la frase, después de cualquier otra información como morgen.",
          "El Futur I usa el infinitivo simple, sin zu delante.",
        ],
        exceptions: [
          "Werden es uno de los pocos verbos realmente irregulares del alemán: sus formas de Präsens (wirst, wird) no siguen ningún patrón regular y hay que memorizarlas directamente.",
          "Cuando el significado futuro ya resulta obvio por el contexto o por una expresión de tiempo, el Futur I a menudo se omite en favor del Präsens más sencillo.",
        ],
        tips: [
          "Memoriza las seis formas de werden como un pequeño conjunto propio: aparecen constantemente, tanto con el significado de 'llegar a ser' como dentro del Futur I.",
          "Si solo estás usando una expresión de tiempo para señalar el futuro, recurre al Präsens por defecto: reserva el Futur I para predicciones o promesas genuinas.",
        ],
      },
    },
  },
};
