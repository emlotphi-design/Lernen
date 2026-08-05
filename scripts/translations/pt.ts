import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Portuguese (português) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const pt: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "O caso do sujeito — a forma em que todo substantivo começa.",
    objectives: [
      "Identificar o sujeito de uma frase alemã",
      "Usar o nominativo depois de sein, werden e bleiben",
    ],
    explanationSimple: [
      "O nominativo é o caso do sujeito: a pessoa ou coisa que pratica a ação na frase.",
      "É também a forma que você encontra no dicionário — por isso, todo substantivo que você aprende começa no nominativo.",
    ],
    explanationDetailed: [
      "O alemão indica a função de um substantivo na frase mudando o artigo, e não a ordem das palavras como costuma fazer o português. O nominativo marca o sujeito: quem pratica a ação do verbo.",
      "Para encontrar o sujeito, pergunte wer? (quem?) para pessoas ou was? (o quê?) para coisas — a resposta a essa pergunta está sempre no nominativo.",
      "O nominativo também aparece depois dos verbos de ligação sein (ser/estar), werden (tornar-se) e bleiben (permanecer), porque o substantivo que vem depois deles apenas renomeia o sujeito, sem sofrer a ação.",
    ],
    exampleMeanings: ["O homem está dormindo.", "A mulher trabalha hoje.", "A criança ri alto.", "Ele é meu professor."],
    exerciseTexts: [
      {
        explanation: "Kind é neutro; como sujeito, exige o artigo neutro do nominativo, das.",
        grammarRule: "Artigo neutro no nominativo: das.",
        prompt: "Complete a frase com o artigo correto no Nominativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann é o sujeito que pratica a ação, então permanece no nominativo — der, e não den ou dem.",
        grammarRule: "Use o nominativo para o sujeito de qualquer frase.",
        prompt: "Em qual frase o Nominativ é usado corretamente?",
      },
      {
        explanation:
          "Correto — sein/werden/bleiben ligam o sujeito a um substantivo que o renomeia, e esse substantivo também permanece no nominativo.",
        grammarRule: "Use o nominativo para o predicativo do sujeito depois de sein, werden e bleiben.",
        prompt: "Depois dos verbos sein, werden e bleiben, o predicativo do sujeito vai no Nominativ.",
      },
      {
        explanation: "Frau é feminino; como sujeito, exige o artigo feminino do nominativo, die.",
        grammarRule: "Artigo feminino no nominativo: die.",
        prompt: "Complete a frase com o artigo correto no Nominativ.",
      },
      {
        explanation:
          "As orações principais alemãs colocam primeiro o sujeito (Der Junge), depois o verbo conjugado (liest) na segunda posição, e só então o resto.",
        grammarRule: "Para identificar o elemento no nominativo, pergunte wer? ou was? — aqui, Der Junge responde a wer?",
        translation: "O menino está lendo um livro.",
        prompt: "Coloque as palavras na ordem correta.",
      },
      {
        explanation: "Kind é neutro → das; Katze é feminino → die — ambos são sujeitos no nominativo.",
        grammarRule: "Combine o gênero de cada substantivo com o artigo do nominativo: der/die/das.",
        prompt: "Arraste o artigo correto para cada espaço.",
      },
      {
        explanation: "Der Lehrer é masculino, por isso é substituído pelo pronome er no nominativo.",
        grammarRule: "Pronome masculino no nominativo: er.",
        prompt: "Digite o pronome pessoal no Nominativ que substitui 'der Lehrer'.",
      },
    ],
    conclusion:
      "O nominativo marca o sujeito da frase e o predicativo do sujeito depois de sein, werden e bleiben. É a forma básica da qual todos os outros casos derivam, por isso vale a pena dominá-la bem antes de avançar para o acusativo.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Use o nominativo para o sujeito de qualquer frase.",
          "Use-o para o predicativo do sujeito depois de sein, werden e bleiben.",
          "Pergunte wer? ou was? para identificar o elemento no nominativo.",
        ],
        notes: [
          "O nominativo é a forma 'padrão' — é a que você procura no dicionário e à qual todos os outros casos são comparados.",
          "A terminação do adjetivo antes de um substantivo no nominativo depende do artigo e do gênero, por exemplo der große Mann — mas isso é um assunto à parte.",
        ],
        mistakeNotes: [
          "O verbo sehen exige um objeto direto no acusativo, não no nominativo — esse é um dos primeiros erros que todo estudante comete.",
          "O nominativo feminino é sempre die, nunca der — der é reservado aos substantivos masculinos.",
        ],
        exceptions: [
          "Um grupo de substantivos masculinos conhecidos como 'substantivos fracos' (n-nouns) — der Junge, der Name, der Student, der Herr — recebe -n ou -en em todos os casos, exceto no nominativo singular.",
          "Alguns substantivos têm gênero variável ou discutido conforme a região (por exemplo der/das Joghurt), mas o dicionário sempre traz a forma padrão.",
        ],
        tips: [
          "Sempre que tiver dúvida sobre qual caso usar, comece localizando o verbo e pergunte wer oder was tut das? — a resposta é sempre o nominativo.",
          "Aprenda cada substantivo novo junto com seu artigo no nominativo (der/die/das) — esse único hábito evita a maioria dos erros de gênero mais adiante.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "O caso do objeto direto, e um conjunto fixo de preposições.",
    objectives: [
      "Identificar o objeto direto de um verbo transitivo",
      "Aplicar corretamente a mudança der → den / ein → einen",
      "Reconhecer as preposições fixas que exigem o acusativo",
    ],
    explanationSimple: [
      "O acusativo marca o objeto direto: a pessoa ou coisa que recebe diretamente a ação do verbo.",
      "É também o caso que segue um pequeno grupo fixo de preposições, sem exceção.",
    ],
    explanationDetailed: [
      "Depois de encontrar o sujeito (nominativo), a próxima pergunta costuma ser: 'sobre o que o sujeito age?' — esse é o objeto direto, que em alemão vai no acusativo.",
      "Para encontrá-lo, pergunte wen? (quem?) para pessoas ou was? (o quê?) para coisas.",
      "Apenas o artigo masculino muda visivelmente no acusativo: der vira den, e ein vira einen. Os artigos feminino, neutro e plural ficam exatamente iguais aos do nominativo — por isso o acusativo costuma passar 'despercebido' até aparecer um substantivo masculino.",
      "Um grupo fixo de verbos quase sempre leva objeto no acusativo — haben, sehen, brauchen, kaufen, essen, trinken, lieben — e um grupo fixo de preposições sempre exige o acusativo: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Eu vejo o homem.", "Ela compra uma maçã.", "Nós amamos nosso cachorro.", "O presente é para você."],
    exerciseTexts: [
      {
        explanation:
          "Hund é masculino, então o possessivo sofre a mesma mudança exclusiva do masculino no acusativo: unser → unseren.",
        grammarRule: "Apenas o artigo/possessivo masculino muda no acusativo.",
        prompt: "Complete a frase com o artigo correto no Akkusativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "O verbo sehen leva objeto direto no acusativo, e o masculino der vira den.",
        grammarRule: "Apenas o artigo masculino muda: der → den, ein → einen.",
        prompt: "Em qual frase o Akkusativ é usado corretamente?",
      },
      {
        explanation: "Correto — die permanece igual no nominativo e no acusativo; só o artigo masculino muda.",
        grammarRule: "Os artigos feminino, neutro e plural são iguais aos do nominativo.",
        prompt: "O artigo feminino no Akkusativ é igual ao artigo feminino no Nominativ.",
      },
      {
        explanation: "Apfel é masculino; como objeto direto depois de kaufen, exige o acusativo einen.",
        grammarRule: "Artigo indefinido masculino no acusativo: einen.",
        prompt: "Complete a frase com o artigo correto no Akkusativ.",
      },
      {
        explanation: "Primeiro o sujeito (Wir), depois o verbo (lieben), e então o objeto no acusativo (unseren Hund).",
        grammarRule: "Use o acusativo para o objeto direto de um verbo transitivo.",
        translation: "Nós amamos nosso cachorro.",
        prompt: "Coloque as palavras na ordem correta.",
      },
      {
        explanation: "für sempre exige o acusativo, então du vira dich e er vira ihn.",
        grammarRule: "Use sempre o acusativo depois de durch, für, gegen, ohne, um.",
        prompt: "Arraste o pronome correto para cada espaço.",
      },
      {
        explanation:
          "Student é um substantivo fraco (n-noun), então recebe tanto o artigo den no acusativo quanto a terminação -en: den Studenten.",
        grammarRule: "Substantivos fracos também recebem -n/-en no acusativo.",
        prompt: "Digite a forma no Akkusativ de 'der Student', incluindo o artigo (é um substantivo fraco).",
      },
    ],
    conclusion:
      "O acusativo marca o objeto direto e segue durch, für, gegen, ohne e um. A única mudança visível em relação ao nominativo é o artigo masculino — der/ein passa a den/einen — o resto permanece igual.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Use o acusativo para o objeto direto de um verbo transitivo.",
          "Pergunte wen? para pessoas ou was? para coisas a fim de encontrá-lo.",
          "Apenas o artigo masculino muda: der → den, ein → einen.",
          "Os artigos feminino, neutro e plural são iguais aos do nominativo.",
          "Use sempre o acusativo depois de durch, für, gegen, ohne e um.",
        ],
        notes: [
          "Como só os artigos masculinos mudam, os estudantes costumam parar de checar o gênero dos substantivos femininos e neutros — mas possessivos e pronomes (mein → meinen, ihr → ihren) seguem o mesmo padrão exclusivo do masculino, por isso vale ficar atento.",
          "Expressões de tempo que respondem a 'por quanto tempo?' ou nomeiam um ponto específico ('que dia?') costumam usar o acusativo sem preposição: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "O verbo sehen exige objeto no acusativo, então o artigo masculino der precisa virar den.",
          "für sempre exige o acusativo, então o pronome ich vira mich.",
        ],
        exceptions: [
          "Substantivos fracos (n-nouns) como der Student, der Junge e der Name também recebem -n no acusativo: den Studenten, den Jungen, den Namen — não só no dativo e no genitivo.",
          "Alguns verbos que parecem exigir preposição na verdade levam objeto direto no acusativo sem preposição, por exemplo Ich frage dich (e não 'zu dir').",
        ],
        tips: [
          "Substantivos femininos, neutros e plurais são idênticos no nominativo e no acusativo — se uma frase parecer 'sem mudança', é o substantivo masculino que você deve conferir.",
          "Memorize durch, für, gegen, ohne, um como um único bloco — eles são sempre acusativo, sem nenhuma exceção.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "O caso do objeto indireto — quem recebe ou se beneficia de algo.",
    objectives: [
      "Identificar o objeto indireto de uma frase",
      "Aplicar a mudança completa do artigo no dativo para todos os gêneros",
      "Reconhecer verbos e preposições que sempre exigem o dativo",
    ],
    explanationSimple: [
      "O dativo marca o objeto indireto: em geral, a pessoa que recebe algo ou que se beneficia dele.",
      "Ele responde à pergunta wem? (a/para quem?).",
    ],
    explanationDetailed: [
      "Muitas frases alemãs têm tanto um objeto direto (acusativo) quanto um objeto indireto (dativo): Ich gebe dem Mann das Buch — 'Eu dou o livro ao homem.' dem Mann é quem recebe, por isso está no dativo.",
      "Um grupo fixo de verbos sempre leva objeto no dativo, mesmo parecendo que deveriam levar acusativo — helfen, danken, gefallen, gehören, folgen, glauben e antworten são os primeiros que os estudantes encontram.",
      "O dativo também segue um conjunto fixo de preposições: aus, bei, mit, nach, seit, von, zu.",
      "Com as nove preposições de 'duplo sentido' (in, an, auf, über, unter, vor, hinter, neben, zwischen), use o dativo para indicar localização — resposta a wo? (onde?) — e o acusativo para movimento em direção a um destino — resposta a wohin? (para onde?).",
    ],
    exampleMeanings: [
      "Eu dou o livro ao homem.",
      "Ela ajuda a irmã dela.",
      "Nós viajamos de ônibus.",
      "A casa pertence aos vizinhos.",
    ],
    exerciseTexts: [
      {
        explanation: "Nachbarn está no plural, e gehören sempre leva dativo, então die vira den.",
        grammarRule: "Todo artigo muda no dativo; o plural die vira den.",
        prompt: "Complete a frase com o artigo correto no Dativ.",
      },
    ],
    quizTexts: [
      {
        explanation: "O verbo helfen sempre leva objeto no dativo, e o feminino die vira der no dativo.",
        grammarRule: "helfen sempre exige dativo, nunca acusativo.",
        prompt: "Em qual frase o Dativ é usado corretamente?",
      },
      {
        explanation: "Correto — die Kinder vira den Kindern; só os substantivos que já terminam em -n ou -s permanecem iguais.",
        grammarRule: "Substantivos plurais recebem -n no dativo, a menos que já terminem em -n ou -s.",
        prompt: "Substantivos no plural geralmente recebem -n no Dativ.",
      },
      {
        explanation: "Bus é masculino, e mit sempre exige dativo, então der vira dem.",
        grammarRule: "Use sempre o dativo depois de aus, bei, mit, nach, seit, von, zu.",
        prompt: "Complete a frase com o artigo correto no Dativ.",
      },
      {
        explanation: "Quando os dois objetos são substantivos, o dativo (dem Mann) costuma vir antes do acusativo (das Buch).",
        grammarRule: "Quando os dois objetos de uma frase são substantivos, o dativo geralmente vem primeiro.",
        translation: "Eu dou o livro ao homem.",
        prompt: "Coloque as palavras na ordem correta.",
      },
      {
        explanation: "O verbo gehören sempre exige dativo: sie vira ihr e er vira ihm.",
        grammarRule: "Um grupo fixo de verbos sempre leva objeto no dativo — gehören é um deles.",
        prompt: "Arraste o pronome correto para cada espaço.",
      },
      {
        explanation: "O plural die Kinder vira den Kindern no dativo — o artigo muda para den e o substantivo recebe -n.",
        grammarRule: "Todo artigo muda no dativo; substantivos plurais recebem -n.",
        prompt: "Digite a forma plural de 'die Kinder' no Dativ, incluindo o artigo (por exemplo, 'den …').",
      },
    ],
    conclusion:
      "O dativo marca o objeto indireto, segue aus/bei/mit/nach/seit/von/zu e muda todos os artigos — com um -n característico adicionado aos substantivos plurais. Alguns verbos como helfen e danken sempre exigem objeto no dativo.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Use o dativo para o objeto indireto — em geral, quem recebe ou se beneficia.",
          "Pergunte wem? para encontrá-lo.",
          "Todo artigo muda: der → dem, die → der, das → dem, die (plural) → den.",
          "Substantivos plurais recebem -n no dativo, a menos que já terminem em -n ou -s: die Kinder → den Kindern.",
          "Use sempre o dativo depois de aus, bei, mit, nach, seit, von, zu.",
          "Com preposições de duplo sentido, o dativo responde a wo? e o acusativo, a wohin?.",
        ],
        notes: [
          "Verbos que regem o dativo nunca levam objeto no acusativo para a pessoa envolvida — helfen, por exemplo, é sempre 'jemandem helfen', nunca 'jemanden helfen'.",
          "Dica de ordem das palavras: quando os dois objetos de uma frase são substantivos, o dativo costuma vir primeiro: Ich gebe dem Mann das Buch. Quando os dois são pronomes, o acusativo vem primeiro: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "O verbo helfen sempre exige dativo, nunca acusativo — sem exceção.",
          "mit sempre exige dativo, e o substantivo plural precisa da terminação -n: Kinder → Kindern.",
        ],
        exceptions: [
          "Um pequeno grupo de verbos e adjetivos combina com o dativo por razões idiomáticas — gefallen (agradar), schmecken (ter bom sabor) e stehen (ficar bem) colocam a pessoa no dativo: Das Kleid steht dir gut.",
          "Substantivos que já terminam em -n ou -s no plural não recebem um -n extra no dativo: den Autos, den Frauen.",
        ],
        tips: [
          "O dativo plural quase sempre termina em -n — notar esse -n em um substantivo costuma ser a forma mais rápida de reconhecer uma frase no dativo à primeira vista.",
          "Aprenda aus, bei, mit, nach, seit, von, zu como um conjunto — não há lógica além da própria lista para memorizar.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "O tempo passado mais comum do alemão cotidiano — como formá-lo e quando usá-lo.",
    objectives: [
      "Formar o Perfekt com haben ou sein mais um particípio passado",
      "Escolher corretamente entre haben e sein",
      "Reconhecer particípios passados regulares e irregulares",
    ],
    explanationSimple: [
      "O Perfekt é a forma como o alemão falado costuma se referir ao passado — não é um único verbo, mas haben ou sein seguido de um particípio passado.",
      "Sua estrutura é sempre a mesma, não importa quem fala: o verbo auxiliar na segunda posição, e o particípio no final da oração.",
    ],
    explanationDetailed: [
      "A maioria dos verbos usa haben como auxiliar. Verbos de movimento (gehen, fahren, kommen) ou de mudança de estado (aufwachen, werden) costumam usar sein.",
      "Verbos regulares (fracos) formam o particípio com ge- + radical + -t: machen → gemacht, spielen → gespielt. Verbos irregulares (fortes) costumam mudar a vogal do radical e terminam em -en: sprechen → gesprochen, gehen → gegangen.",
      "Como o particípio vai para o final da oração, tudo o mais — objetos, expressões de tempo, negação — fica entre o auxiliar e o particípio.",
    ],
    exampleMeanings: ["Eu li o livro.", "Nós viajamos para Berlim.", "Ela trabalhou ontem.", "Ele acordou cedo."],
    exerciseTexts: [
      {
        explanation: "fahren descreve um deslocamento de um lugar a outro, por isso leva sein: Wir sind gefahren.",
        grammarRule: "Use sein para verbos de movimento ou mudança de estado.",
        prompt: "Qual auxiliar o verbo 'fahren' usa no Perfekt?",
      },
    ],
    quizTexts: [
      {
        explanation: "O verbo lesen leva haben, e seu particípio irregular gelesen fica no final da oração.",
        grammarRule: "Use haben como auxiliar para a maioria dos verbos.",
        prompt: "Em qual frase o Perfekt está formado corretamente?",
      },
      {
        explanation: "Correto — telefonieren → telefoniert, sem ge-.",
        grammarRule: "Verbos terminados em -ieren nunca recebem ge-.",
        prompt: "Verbos como telefonieren nunca recebem o prefixo ge- no Perfekt.",
      },
      {
        explanation: "fahren é um verbo de movimento, por isso leva sein: sind gefahren.",
        grammarRule: "Use sein para verbos de movimento ou mudança de estado.",
        prompt: "Complete a frase com o auxiliar correto.",
      },
      {
        explanation: "essen é irregular: gegessen, e não a forma regular geesst.",
        grammarRule: "Particípios irregulares costumam mudar a vogal do radical e terminar em -en.",
        prompt: "Digite o particípio passado do verbo 'essen'.",
      },
    ],
    conclusion:
      "O Perfekt se forma com haben ou sein seguido de um particípio passado no final da oração. A maioria dos verbos leva haben; verbos de movimento ou mudança de estado levam sein. Particípios regulares terminam em -t, os irregulares costumam terminar em -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Use haben como auxiliar para a maioria dos verbos.",
          "Use sein para verbos de movimento ou mudança de estado.",
          "Particípio regular: ge- + radical + -t.",
          "Particípios irregulares costumam terminar em -en e podem mudar a vogal do radical.",
          "O particípio vai sempre para o final da oração.",
        ],
        notes: [
          "Alguns particípios irregulares comuns vale a pena memorizar diretamente, em vez de deduzir: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Verbos com prefixo separável inserem -ge- entre o prefixo e o radical: aufwachen → aufgewacht, e não geaufwacht.",
        ],
        mistakeNotes: ["fahren é um verbo de movimento, por isso leva sein, não haben."],
        exceptions: [
          "Verbos terminados em -ieren (telefonieren, studieren) nunca recebem ge-: telefoniert, studiert.",
          "Verbos com prefixo inseparável (be-, ver-, er-, ge-, ent-, zer-) também dispensam o ge-: besuchen → besucht, verstehen → verstanden.",
        ],
        tips: [
          "Na dúvida entre haben e sein, pergunte-se: esse verbo descreve um deslocamento de um ponto A a um ponto B, ou uma mudança de estado? Se sim, quase certamente é sein.",
          "Aprenda os verbos irregulares novos com as três formas de uma vez — infinitivo, pretérito simples, particípio — do mesmo jeito que você aprende der/die/das para um substantivo novo.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Vocabulário básico para falar sobre os membros da família.",
    explanationSimple: [
      "Esta lição apresenta as palavras alemãs para a família próxima — palavras que você vai usar o tempo todo assim que começar a descrever a sua própria vida.",
    ],
    explanationDetailed: [
      "Os substantivos de família seguem os padrões de gênero regulares que você já conhece: a maioria dos substantivos referentes a pessoas é der ou die de acordo com o gênero da pessoa, com algumas exceções fixas como das Kind (a criança) e das Baby (o bebê), que são gramaticalmente neutros independentemente do gênero da criança.",
      "Os possessivos (mein, meine) concordam com o gênero do substantivo, assim como ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["Esta é a minha mãe.", "Meu irmão mora em Berlim.", "Eu tenho duas irmãs."],
    exerciseTexts: [
      {
        explanation: "Schwester é feminino: die Schwester.",
        grammarRule: "Substantivos de membros da família assumem o gênero da pessoa que nomeiam.",
        prompt: "Digite a palavra alemã para 'irmã'.",
      },
    ],
    quizTexts: [
      { explanation: "der Vater significa 'pai'.", grammarRule: "der Vater é masculino.", prompt: "Qual palavra significa 'pai'?" },
      {
        explanation: "Correto — das Kind é sempre neutro.",
        grammarRule: "Alguns substantivos de pessoas, como das Kind e das Baby, são sempre neutros.",
        prompt: "'das Kind' é gramaticalmente neutro, independentemente do gênero da criança.",
      },
      {
        explanation: "Schwestern é o plural de Schwester.",
        grammarRule: "A maioria dos substantivos femininos recebe -n ou -en no plural.",
        prompt: "Complete a frase.",
      },
    ],
    conclusion:
      "O vocabulário de família é gramaticalmente regular — substantivos com gênero para pessoas, com das Kind como exceção neutra fixa — e já te dá um bom motivo para praticar os possessivos.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["mãe", "pai", "irmã", "irmão", "pais (plural)", "criança", "avó", "avô"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Um texto curto do dia a dia sobre fazer um pedido em um café, com perguntas de compreensão.",
    explanationSimple: ["Uma cena curta em um café — leia uma vez para captar a ideia geral antes de conferir cada palavra."],
    explanationDetailed: [
      "A leitura no nível A1 funciona melhor em duas etapas: primeiro para entender a situação geral (quem, onde, o que está acontecendo), depois uma segunda leitura prestando atenção às palavras específicas que passaram despercebidas na primeira vez.",
      "Não é preciso entender cada palavra para responder às perguntas de compreensão abaixo — concentre-se no que realmente muda o sentido da cena.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Anna pede um café (einen Kaffee), não um chá.",
        grammarRule: "bestellen + objeto no acusativo.",
        prompt: "Anna pede chá.",
      },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — ela se senta a uma mesa perto da janela.",
        grammarRule: "sich setzen an + acusativo.",
        prompt: "Onde Anna se senta?",
      },
      {
        explanation: "Correto — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Dois verbos coordenados ligados por und.",
        prompt: "Anna lê um livro enquanto toma o café.",
      },
      {
        explanation: "Minuten (minutos) — Nach zehn Minuten.",
        grammarRule: "nach + expressão de tempo no dativo.",
        prompt: "Complete: o garçom traz o pedido depois de dez ___.",
      },
    ],
    conclusion:
      "Uma cena curta de café construída inteiramente com vocabulário de nível A1 e orações principais simples — um bom exercício de leitura geral antes de se preocupar com cada palavra isoladamente.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Um breve anúncio de estação — preste atenção na plataforma e no horário de partida.",
    explanationSimple: ["Um breve anúncio de estação — ainda não há arquivo de áudio disponível, então leia a transcrição como se estivesse ouvindo."],
    explanationDetailed: [
      "Anúncios de estação e aeroporto seguem uma estrutura bem previsível em alemão — e é justamente essa previsibilidade que os torna um bom primeiro exercício de escuta: número do trem, plataforma (Gleis) e horário, quase sempre na mesma ordem.",
      "Assim que você conseguir identificar com segurança um número de plataforma e um horário em um anúncio, poderá aplicar a mesma estratégia de escuta a qualquer áudio de formato parecido (previsão do tempo, instruções de segurança etc.).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      { explanation: "Gleis 7 — plataforma 7.", grammarRule: "von + número da plataforma no dativo.", prompt: "De qual plataforma o trem parte?" },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — plataforma 7.",
        grammarRule: "von + dativo.",
        prompt: "De onde parte o trem para Munique?",
      },
      {
        explanation: "vierzehn Uhr dreißig significa 14h30.",
        grammarRule: "Horário falado no formato de 24 horas: [hora] Uhr [minutos].",
        prompt: "Escreva o horário de partida no formato de 24 horas (por exemplo, 09:15).",
      },
    ],
    conclusion:
      "Anúncios de estação seguem uma fórmula fixa — número do trem, plataforma, horário — o que os torna um excelente primeiro exercício de escuta assim que você conhece o padrão a procurar.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Pratique se apresentar em voz alta — nome, origem e alguns detalhes.",
    explanationSimple: [
      "Apresentar-se é uma das primeiras coisas que você realmente vai dizer em voz alta em alemão — um punhado de frases curtas e fixas que você vai reutilizar o tempo todo.",
    ],
    explanationDetailed: [
      "A prática de fala aqui funciona melhor em voz alta, não só mentalmente — diga cada instrução abaixo como uma frase completa antes de passar para a próxima, mesmo que ninguém esteja ouvindo.",
      "Ainda não há gravação nem avaliação automática da fala; trate isto como um exercício de fala autoguiado, usando as instruções e as frases de exemplo como um roteiro para adaptar.",
    ],
    exampleMeanings: ["Meu nome é Anna.", "Eu sou da Alemanha.", "Eu sou estudante."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … é a forma padrão de dizer de onde você é.",
        grammarRule: "kommen aus + nome de país/cidade no dativo.",
        prompt: "Digite em alemão 'Eu venho de …'.",
      },
    ],
    quizTexts: [
      {
        explanation: "O verbo heißen se conjuga diretamente com o nome como complemento: Ich heiße Anna.",
        grammarRule: "heißen + nome, sem verbo adicional.",
        prompt: "Qual frase diz corretamente 'Meu nome é Anna'?",
      },
      {
        explanation: "heißt é a forma de heißen para du.",
        grammarRule: "du heißt (conjugação regular de um verbo em -en).",
        prompt: "Complete esta pergunta informal sobre o nome de alguém.",
      },
    ],
    conclusion:
      "Apresentar-se se constrói a partir de três estruturas de frase fixas — nome, origem, profissão — que vale a pena praticar bastante em voz alta, já que você vai usá-las desde o primeiro dia.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Diga o seu nome:",
          "Diga de onde você é:",
          "Diga o que você faz:",
          "Pergunte o nome de outra pessoa:",
          "Junte as suas três frases em uma breve apresentação.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Um quiz de revisão que reúne casos gramaticais, vocabulário do dia a dia e a ordem básica das palavras.",
    explanationSimple: [
      "Um quiz puramente de revisão — sem explicações novas, apenas um conjunto variado de perguntas sobre tudo o que foi visto até o nível A1.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "O sujeito da frase leva o nominativo: Der Mann.",
        grammarRule: "Use o nominativo para o sujeito de qualquer frase.",
        prompt: "Qual artigo está correto? '___ Mann schläft.' (sujeito)",
      },
      {
        explanation: "O verbo sehen leva objeto no acusativo, e o masculino der vira den.",
        grammarRule: "Apenas o artigo masculino muda no acusativo.",
        prompt: "Complete com o artigo correto no Akkusativ.",
      },
      { explanation: "die Schwester.", grammarRule: "Revisão de vocabulário da família.", prompt: "Digite a palavra alemã para 'irmã'." },
      {
        explanation: "Primeiro o sujeito, depois o verbo conjugado na segunda posição.",
        grammarRule: "Ordem básica das palavras em alemão: sujeito, verbo, resto.",
        translation: "Meu nome é Anna.",
        prompt: "Coloque as palavras na ordem correta.",
      },
    ],
    conclusion: "Uma breve revisão mista de casos, vocabulário e ordem das palavras — uma boa checagem antes de avançar além do nível A1.",
    details: { kind: "none" },
  },
  "grammar/a1/praesens": {
    summary: "O presente alemão — terminações regulares, e como ele também expressa o que o inglês diz com 'is doing'.",
    objectives: [
      "Conjugar verbos regulares no Präsens",
      "Usar o Präsens tanto para o presente quanto para o futuro próximo",
      "Reconhecer a vogal de ligação -e- em radicais terminados em -t ou -d",
    ],
    explanationSimple: [
      "O Präsens é o tempo presente do alemão — usado para o que está acontecendo agora, fatos gerais, e muitas vezes também o futuro próximo.",
      "Verbos regulares acrescentam ao radical uma terminação previsível, que depende de quem pratica a ação.",
    ],
    explanationDetailed: [
      "Para conjugar um verbo regular, retire -en do infinitivo para obter o radical, depois acrescente a terminação correspondente ao sujeito: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "O alemão não tem uma forma contínua separada — ich spiele corresponde tanto a 'I play' quanto a 'I am playing' em inglês. É o contexto que indica qual sentido se aplica.",
      "O Präsens também é usado com frequência para falar do futuro próximo, especialmente com uma expressão de tempo: Ich fliege morgen nach Berlin (Eu vou voar para Berlim amanhã).",
    ],
    exampleMeanings: ["Eu jogo/estou jogando futebol.", "Você está aprendendo alemão.", "Ele está trabalhando hoje.", "Nós vamos para Berlim amanhã."],
    exerciseTexts: [
      {
        explanation: "du recebe a terminação regular -st: spiel + st = spielst.",
        grammarRule: "Terminação de du no Präsens: -st.",
        prompt: "Digite a forma correta do Präsens de 'spielen' para 'du'.",
      },
    ],
    quizTexts: [
      {
        explanation:
          "O radical de arbeiten termina em -t, por isso a forma er precisa da vogal de ligação: arbeitet, e não arbeit.",
        grammarRule: "Insira um -e- antes da terminação quando o radical terminar em -t ou -d.",
        prompt: "Qual frase usa o Präsens corretamente?",
      },
      {
        explanation:
          "Correto — o alemão costuma usar o Präsens em vez de um tempo futuro separado quando o contexto ou uma expressão de tempo já deixam o futuro claro.",
        grammarRule: "Use o Präsens para ações no futuro próximo acompanhadas de uma expressão de tempo.",
        prompt: "O Präsens pode ser usado para falar do futuro próximo, especialmente com uma expressão de tempo como morgen.",
      },
      {
        explanation: "wir recebe a terminação -en, que em um verbo regular é idêntica ao infinitivo: wohnen.",
        grammarRule: "Terminação de wir no Präsens: -en (igual ao infinitivo).",
        prompt: "Digite a forma correta do Präsens de 'wohnen' para 'wir'.",
      },
      {
        explanation: "ich recebe a terminação -e: kauf + e = kaufe.",
        grammarRule: "Terminação de ich no Präsens: -e.",
        prompt: "Complete a frase com a forma correta do Präsens de 'kaufen'.",
      },
    ],
    conclusion:
      "O Präsens usa seis terminações previsíveis — -e, -st, -t, -en, -t, -en — acrescentadas ao radical do verbo, com uma vogal de ligação -e- para radicais terminados em -t ou -d. Ele cobre tanto o presente quanto o futuro próximo, então dominar essas terminações já ajuda muito antes mesmo de você chegar aos tempos do passado.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Retire -en do infinitivo para encontrar o radical.",
          "Acrescente a terminação correspondente ao sujeito: -e, -st, -t, -en, -t, -en.",
          "Insira um -e- antes da terminação se o radical terminar em -t ou -d (arbeiten → du arbeitest).",
        ],
        notes: [
          "As terminações de du e er/sie/es são as que mais precisam da vogal de ligação -e-, já que -st e -t são difíceis de pronunciar logo depois de um radical terminado em -t/-d.",
          "Alguns verbos muito comuns são irregulares apenas nas formas du/er (fahren → du fährst, er fährt) — eles não fazem parte do padrão regular apresentado aqui.",
        ],
        mistakeNotes: [
          "Radicais terminados em -t precisam de um -e- antes da terminação -st, senão a palavra fica impronunciável.",
          "Cada sujeito precisa da sua própria terminação correspondente — ich sempre recebe -e, nunca a terminação -t da forma er.",
        ],
        exceptions: [
          "Verbos com mudança de vogal (fortes) como fahren, sehen e sprechen mudam a vogal apenas nas formas du e er/sie/es (du fährst, er fährt) — um padrão diferente das terminações regulares apresentadas aqui.",
          "Sein e haben são totalmente irregulares e precisam ser memorizados como formas próprias: ich bin, du bist, er ist…",
        ],
        tips: [
          "Aprenda as seis terminações como um conjunto fixo — depois que se tornarem automáticas, todo verbo regular se conjuga da mesma forma.",
          "Quando o radical de um verbo novo terminar em -t, -d, ou um grupo consonantal como -ffn (öffnen), espere a vogal de ligação -e- antes de -st e -t.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "O passado simples usado na escrita e para verbos comuns como sein e haben — em que ele se diferencia do Perfekt.",
    objectives: [
      "Conjugar verbos regulares (fracos) no Präteritum",
      "Reconhecer quando o Präteritum é preferível ao Perfekt",
      "Usar sein e haben corretamente em suas formas comuns no Präteritum",
    ],
    explanationSimple: [
      "O Präteritum é o outro tempo do passado em alemão — usado principalmente na escrita, e na fala para sein, haben e os verbos modais.",
      "Verbos regulares acrescentam -te mais uma terminação pessoal ao radical.",
    ],
    explanationDetailed: [
      "Enquanto o Perfekt domina o alemão falado para a maioria dos verbos, o Präteritum é o tempo do passado normal na escrita — histórias, artigos de notícias e textos formais quase sempre o utilizam.",
      "Verbos regulares (fracos) formam o Präteritum acrescentando -te ao radical, seguido de uma terminação pessoal: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Mesmo na fala, um punhado de verbos muito comuns quase sempre aparece no Präteritum em vez do Perfekt: war (era/estava), hatte (tinha), e os verbos modais como konnte (podia) ou wollte (queria).",
    ],
    exampleMeanings: ["Eu fiz o meu dever de casa.", "Ela tocou piano ontem.", "Ele estava cansado.", "Nós não tínhamos tempo."],
    exerciseTexts: [
      {
        explanation: "sie (eles/elas) recebe a terminação -ten, igual a wir: spiel + ten = spielten.",
        grammarRule: "Terminação de sie (plural) no Präteritum: -ten.",
        prompt: "Digite a forma correta do Präteritum de 'spielen' para 'sie' (eles/elas).",
      },
    ],
    quizTexts: [
      {
        explanation:
          "O radical de arbeiten termina em -t, por isso precisa da vogal de ligação antes de -te: arbeitete.",
        grammarRule: "Insira um -e- antes de -te quando o radical terminar em -t ou -d.",
        prompt: "Qual frase usa o Präteritum corretamente?",
      },
      {
        explanation:
          "Correto — tanto ich quanto er/sie/es simplesmente acrescentam -te, diferente do Präsens, em que elas diferem (-e contra -t).",
        grammarRule: "As terminações de ich e er são idênticas no Präteritum: -te.",
        prompt: "No Präteritum, a forma ich e a forma er/sie/es usam exatamente a mesma terminação.",
      },
      {
        explanation: "Haben é irregular no Präteritum: a forma wir é hatten, e não um regular habten.",
        grammarRule: "O radical do Präteritum de haben é irregular: hatt-.",
        prompt: "Digite a forma do Präteritum de 'haben' para 'wir'.",
      },
      {
        explanation: "ich recebe -te: mach + te = machte.",
        grammarRule: "Terminação de ich no Präteritum: -te.",
        prompt: "Complete a frase com a forma correta do Präteritum de 'machen'.",
      },
    ],
    conclusion:
      "O Präteritum acrescenta -te mais uma terminação pessoal ao radical de um verbo regular, com ich e er/sie/es compartilhando a mesma forma. É o tempo do passado padrão na escrita e — para sein, haben e os verbos modais — também é a escolha natural na fala, mesmo que o Perfekt domine o resto da conversa cotidiana.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Acrescente -te ao radical de um verbo regular, depois a terminação pessoal: -te, -test, -te, -ten, -tet, -ten.",
          "Insira um -e- antes de -te se o radical terminar em -t ou -d (arbeiten → er arbeitete).",
          "Prefira o Präteritum para sein, haben e os verbos modais, mesmo na fala.",
        ],
        notes: [
          "Diferente do Präsens, as formas ich e er/sie/es são idênticas no Präteritum — ambas simplesmente recebem -te.",
          "O Präteritum de sein (war) e de haben (hatte) está entre as primeiras formas irregulares do passado que a maioria dos estudantes memoriza, já que são usadas o tempo todo.",
        ],
        mistakeNotes: [
          "Radicais terminados em -t precisam da vogal de ligação -e- antes de -te, a mesma regra do Präsens.",
          "Haben é irregular no Präteritum: hatte, e não o regular habte.",
        ],
        exceptions: [
          "Verbos fortes (irregulares) mudam totalmente a vogal do radical em vez de acrescentar -te: gehen → ging, sehen → sah — um padrão diferente das terminações regulares apresentadas aqui.",
          "O Präteritum de sein (war) e o de haben (hatte) não seguem em nada o padrão regular em -te e são simplesmente memorizados.",
        ],
        tips: [
          "Se você está contando uma história ou escrevendo algo formal, opte pelo Präteritum como padrão — é o tempo narrativo natural do passado em alemão.",
          "Na conversa do dia a dia, geralmente dá para usar o Perfekt na maioria dos verbos — exceto war, hatte e os verbos modais, que quase sempre soam mais naturais no Präteritum, mesmo na fala.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Falando sobre o futuro com werden + infinitivo — e quando os alemães simplesmente usam o presente em vez disso.",
    objectives: [
      "Formar o Futur I com werden + infinitivo",
      "Reconhecer quando os alemães usam o Futur I em vez do Präsens para expressar o futuro",
      "Conjugar werden corretamente em todas as pessoas",
    ],
    explanationSimple: [
      "O Futur I expressa o futuro usando uma forma conjugada de werden mais o infinitivo do verbo principal.",
      "No alemão do dia a dia, é o Präsens que costuma ser usado com mais frequência para o futuro — o Futur I fica reservado para previsões, promessas e ênfase.",
    ],
    explanationDetailed: [
      "A estrutura é fixa: sujeito + werden conjugado (na posição 2) + resto da frase + infinitivo (na posição final). Ich werde morgen arbeiten — 'Eu vou trabalhar amanhã.'",
      "Werden é irregular: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — essas seis formas precisam ser memorizadas, e não deduzidas de uma regra regular.",
      "Os alemães costumam preferir o Präsens com uma expressão de tempo para eventos futuros planejados (Ich fliege morgen) e reservam o Futur I para previsões, promessas ou suposições sobre o futuro: Es wird morgen regnen (Vai chover amanhã).",
    ],
    exampleMeanings: ["Eu vou trabalhar amanhã.", "Vai chover em breve.", "Nós vamos resolver o problema.", "Ela vai te ligar."],
    exerciseTexts: [
      {
        explanation: "ich recebe a forma irregular werde.",
        grammarRule: "Forma de ich em werden: werde.",
        prompt: "Complete a frase com a forma correta de werden.",
      },
    ],
    quizTexts: [
      {
        explanation: "O infinitivo arbeiten fica bem no final, depois de morgen.",
        grammarRule: "Coloque o infinitivo bem no final da frase.",
        prompt: "Qual frase forma corretamente o Futur I?",
      },
      {
        explanation: "Correto — é essa toda a estrutura: werden (conjugado) mais um infinitivo no final.",
        grammarRule: "Futur I = werden (conjugado) + infinitivo.",
        prompt: "O Futur I se forma com uma forma conjugada de werden mais o infinitivo do verbo principal.",
      },
      {
        explanation: "A forma irregular de werden para du é wirst.",
        grammarRule: "Forma de du em werden: wirst.",
        prompt: "Digite a forma correta de werden para 'du'.",
      },
      {
        explanation: "A forma irregular de werden para er é wird.",
        grammarRule: "Forma de er em werden: wird.",
        prompt: "Digite a forma correta de werden para 'er'.",
      },
      {
        explanation: "es recebe a mesma forma que er: wird.",
        grammarRule: "Forma de es em werden: wird.",
        prompt: "Complete a frase com a forma correta de werden.",
      },
      {
        explanation: "Lösen permanece como infinitivo puro, colocado bem no final da frase.",
        grammarRule: "O infinitivo do Futur I está sempre na forma pura (sem flexão).",
        prompt: "Qual frase usa o Futur I corretamente?",
      },
      {
        explanation:
          "Correto — Ich fliege morgen soa mais natural do que Ich werde morgen fliegen, mesmo que as duas sejam gramaticalmente corretas.",
        grammarRule: "Use o Futur I principalmente para previsões, promessas e suposições.",
        prompt: "Os alemães costumam preferir o Präsens ao Futur I quando uma expressão de tempo já deixa o futuro claro.",
      },
      {
        explanation: "wir recebe werden — a mesma forma do próprio infinitivo.",
        grammarRule: "Forma de wir em werden: werden.",
        prompt: "Digite a forma correta de werden para 'wir'.",
      },
      {
        explanation: "sie (ela) recebe a mesma forma que er: wird.",
        grammarRule: "Forma de sie (singular) em werden: wird.",
        prompt: "Complete a frase com a forma correta de werden.",
      },
      {
        explanation:
          "Wird sozinho, sem um infinitivo depois, significa 'tornar-se' — Er wird Arzt expressa uma mudança de estado, não uma previsão futura.",
        grammarRule: "Werden sem infinitivo significa 'tornar-se', não é um marcador de tempo futuro.",
        prompt: "Qual frase usa werden com o sentido de 'tornar-se', e não como marcador de futuro?",
      },
    ],
    conclusion:
      "O Futur I combina uma forma conjugada de werden com um infinitivo no final da frase. Ele é menos comum na fala cotidiana do que se poderia imaginar — os alemães costumam preferir o Präsens para eventos planejados — mas continua sendo a escolha natural para previsões, promessas e suposições sobre o que está por vir.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Construa o Futur I com uma forma conjugada de werden mais o infinitivo do verbo principal.",
          "Coloque o infinitivo bem no final da frase.",
          "Use o Futur I para previsões, promessas e suposições sobre o futuro — não para planos rotineiros.",
        ],
        notes: [
          "Para planos do dia a dia com uma expressão de tempo clara, o Präsens costuma soar mais natural: Ich fliege morgen soa mais idiomático do que Ich werde morgen fliegen, mesmo que as duas formas estejam corretas.",
          "Werden sozinho (sem um infinitivo depois) significa 'tornar-se' — Er wird Arzt (Ele está se tornando médico) — então é o contexto que indica qual sentido se aplica.",
        ],
        mistakeNotes: [
          "O infinitivo precisa ficar bem no final da frase, depois de qualquer outra informação como morgen.",
          "O Futur I usa o infinitivo puro — sem zu na frente.",
        ],
        exceptions: [
          "Werden é um dos poucos verbos verdadeiramente irregulares do alemão — suas formas no Präsens (wirst, wird) não seguem nenhum padrão regular e precisam ser memorizadas diretamente.",
          "Quando o sentido de futuro já é óbvio pelo contexto ou por uma expressão de tempo, o Futur I costuma ser simplesmente dispensado em favor do Präsens, mais simples.",
        ],
        tips: [
          "Memorize as seis formas de werden como um pequeno conjunto próprio — elas aparecem o tempo todo, tanto no sentido de 'tornar-se' quanto dentro do Futur I.",
          "Se você está apenas usando uma expressão de tempo para sinalizar o futuro, prefira o Präsens por padrão — reserve o Futur I para previsões ou promessas genuínas.",
        ],
      },
    },
  },
  "grammar/b2/genitiv": {
    summary: "O caso da posse — cada vez mais formal na fala, mas ainda essencial na leitura e na escrita.",
    objectives: [
      "Identificar o genitivo como o caso da posse",
      "Acrescentar a terminação correta aos substantivos masculinos e neutros",
      "Usar o genitivo depois de trotz, wegen, während e statt",
    ],
    explanationSimple: [
      "O genitivo expressa posse: indica a quem ou a que algo pertence.",
      "Ele também segue um pequeno grupo fixo de preposições: trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "Ao contrário dos outros três casos, o genitivo muda o próprio substantivo, não apenas o artigo — substantivos masculinos e neutros recebem -s ou -es, enquanto os femininos e plurais permanecem exatamente iguais.",
      "No alemão falado do dia a dia, von + dativo costuma substituir o genitivo (von meinem Vater em vez de meines Vaters) — mas o genitivo continua sendo a forma esperada e mais formal na escrita e na fala cuidada, e você vai encontrá-lo o tempo todo na leitura.",
      "A ordem das palavras no genitivo coloca quem possui depois do substantivo que ele modifica — das Auto meines Vaters, e não meines Vaters Auto — exceto com nomes próprios, que vêm primeiro: Annas Auto.",
    ],
    exampleMeanings: [
      "O carro do meu pai é novo.",
      "Eu gosto da cor da casa.",
      "O nome da mulher é Anna.",
      "Apesar da chuva, vamos passear.",
    ],
    exerciseTexts: [
      {
        explanation: "Frau é feminino, por isso recebe der no genitivo — o substantivo em si não muda.",
        grammarRule: "Artigo feminino no genitivo: der.",
        prompt: "Complete a frase com o artigo correto no Genitiv.",
      },
    ],
    quizTexts: [
      {
        explanation:
          "Vaters recebe a terminação genitiva -s depois do possessivo meines, indicando de quem é o carro.",
        grammarRule: "Substantivos masculinos recebem -s ou -es no genitivo.",
        prompt: "Qual frase usa o Genitiv corretamente?",
      },
      {
        explanation:
          "Correto — apenas os substantivos masculinos e neutros recebem uma terminação no genitivo; os femininos e plurais permanecem inalterados.",
        grammarRule: "Terminações do genitivo: -s/-es somente para masculino e neutro.",
        prompt: "Substantivos masculinos e neutros geralmente recebem -s ou -es no genitivo, mas os femininos nunca mudam.",
      },
      {
        explanation: "Haus é neutro, por isso recebe des no genitivo, e o próprio substantivo acrescenta -es: Hauses.",
        grammarRule: "Artigo neutro no genitivo: des, substantivo +(e)s.",
        prompt: "Complete a frase com o artigo correto no Genitiv.",
      },
      {
        explanation: "Trotz é uma das preposições fixas que sempre exigem o genitivo.",
        grammarRule: "Preposições do genitivo: während, trotz, wegen, statt.",
        prompt: "Digite a preposição genitiva que significa 'apesar de'.",
      },
    ],
    conclusion:
      "O genitivo marca a posse e segue um pequeno grupo de preposições como trotz, wegen e während. Substantivos masculinos e neutros recebem -s ou -es; os femininos e plurais permanecem inalterados. Ele vem sendo cada vez mais substituído por von + dativo na fala informal, mas continua essencial na leitura e na escrita formal.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Use o genitivo para expressar posse: a quem ou a que algo pertence.",
          "Use-o depois das preposições fixas trotz, wegen, während e statt.",
          "Acrescente -s ou -es aos substantivos masculinos e neutros; os femininos e plurais não mudam.",
        ],
        notes: [
          "No alemão falado do dia a dia, von + dativo costuma substituir o genitivo (von meinem Vater em vez de meines Vaters) — mas o genitivo continua sendo esperado na escrita e na fala formal.",
          "A ordem das palavras no genitivo coloca quem possui depois do substantivo que ele modifica: das Auto meines Vaters, e não meines Vaters Auto (exceto com nomes próprios: Annas Auto).",
        ],
        mistakeNotes: [
          "O próprio possessivo precisa da terminação genitiva -es, e o substantivo precisa de -s — os dois mudam juntos.",
          "O artigo des sozinho não basta: os substantivos neutros também acrescentam -es no genitivo.",
        ],
        exceptions: [
          "Substantivos neutros/masculinos de uma sílaba costumam receber -es (des Hauses, des Mannes); substantivos mais longos costumam receber apenas -s (des Computers, des Lehrers).",
          "Substantivos masculinos fracos (n-nouns) como der Student ou der Junge também recebem -en no genitivo, não -s: des Studenten, e não des Studentens.",
        ],
        tips: [
          "Se você conseguir reformular uma frase com 'von + dativo' e ela ainda soar natural, o genitivo geralmente é opcional ali — mas reconheça-o de qualquer forma, pois você vai encontrá-lo o tempo todo na escrita.",
          "Aprenda trotz, wegen, während e statt como um conjunto: são as quatro preposições genitivas que você vai encontrar com mais frequência.",
        ],
      },
    },
  },
};
