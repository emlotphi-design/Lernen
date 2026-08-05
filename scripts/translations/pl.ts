import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Polish (polski) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const pl: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "Przypadek podmiotu — forma, od której zaczyna się każdy rzeczownik.",
    objectives: [
      "Rozpoznawaj podmiot niemieckiego zdania.",
      "Używaj mianownika po sein, werden i bleiben.",
    ],
    explanationSimple: [
      "Mianownik to przypadek podmiotu — osoby lub rzeczy wykonującej czynność w zdaniu.",
      "To także forma, którą znajdziesz w słowniku, więc każdy poznawany rzeczownik zaczyna się właśnie od mianownika.",
    ],
    explanationDetailed: [
      "Niemiecki pokazuje rolę rzeczownika w zdaniu poprzez zmianę rodzajnika, a nie poprzez szyk wyrazów, jak często robi to angielski. Mianownik oznacza podmiot — tego, kto lub co wykonuje czynność wyrażoną czasownikiem.",
      "Podmiot znajdziesz, zadając pytanie wer? (kto?) w odniesieniu do osób lub was? (co?) w odniesieniu do rzeczy — cokolwiek odpowiada na to pytanie, stoi w mianowniku.",
      "Mianownik pojawia się też po czasownikach łączących sein (być), werden (stawać się) i bleiben (pozostawać), ponieważ rzeczownik występujący po nich powtórnie określa podmiot, a nie odbiera czynność.",
    ],
    exampleMeanings: ["Ten mężczyzna śpi.", "Ta kobieta dziś pracuje.", "To dziecko głośno się śmieje.", "On jest moim nauczycielem."],
    exerciseTexts: [
      {
        explanation: "Kind jest rodzaju nijakiego, więc jako podmiot wymaga rodzajnika mianownika nijakiego das.",
        grammarRule: "Rodzajnik mianownika nijakiego: das.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w mianowniku.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann jest podmiotem wykonującym czynność, więc pozostaje w mianowniku — der, a nie den czy dem.",
        grammarRule: "Podmiot zdania zawsze stoi w mianowniku.",
        prompt: "W którym zdaniu poprawnie użyto mianownika?",
      },
      {
        explanation:
          "Prawda — sein/werden/bleiben łączą podmiot z rzeczownikiem, który go ponownie nazywa, więc ten rzeczownik też zostaje w mianowniku.",
        grammarRule: "Po sein, werden i bleiben orzecznik rzeczownikowy stoi w mianowniku.",
        prompt: "Mianownika używa się dla orzecznika rzeczownikowego po sein, werden i bleiben.",
      },
      {
        explanation: "Frau jest rodzaju żeńskiego, więc jako podmiot wymaga rodzajnika mianownika żeńskiego die.",
        grammarRule: "Rodzajnik mianownika żeńskiego: die.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w mianowniku.",
      },
      {
        explanation:
          "Niemieckie zdania główne zaczynają się od podmiotu (Der Junge), potem następuje odmieniony czasownik (liest) na drugiej pozycji, a dalej reszta zdania.",
        grammarRule: "Aby znaleźć element w mianowniku, zapytaj wer? lub was? — tutaj Der Junge odpowiada na pytanie wer?",
        translation: "Chłopiec czyta książkę.",
        prompt: "Ułóż wyrazy we właściwej kolejności.",
      },
      {
        explanation: "Kind jest rodzaju nijakiego → das; Katze jest rodzaju żeńskiego → die — oba są podmiotami w mianowniku.",
        grammarRule: "Dopasuj rodzaj każdego rzeczownika do jego rodzajnika w mianowniku: der/die/das.",
        prompt: "Przeciągnij właściwy rodzajnik do każdej luki.",
      },
      {
        explanation: "Der Lehrer jest rodzaju męskiego, więc zastępuje go zaimek er w mianowniku.",
        grammarRule: "Zaimek mianownika rodzaju męskiego: er.",
        prompt: "Wpisz zaimek osobowy w mianowniku, który zastąpi 'der Lehrer'.",
      },
    ],
    conclusion:
      "Mianownik oznacza podmiot zdania oraz orzecznik rzeczownikowy po sein, werden i bleiben. To forma podstawowa, od której odmieniają się wszystkie pozostałe przypadki, więc warto opanować ją w pełni, zanim przejdziesz do biernika.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Mianownika używaj dla podmiotu każdego zdania.",
          "Używaj go też dla orzecznika rzeczownikowego po sein, werden i bleiben.",
          "Aby znaleźć element w mianowniku, zapytaj wer? lub was?",
        ],
        notes: [
          "Mianownik to forma 'domyślna' — ta, którą znajdziesz w słowniku i do której porównuje się wszystkie pozostałe przypadki.",
          "Końcówka przymiotnika przed rzeczownikiem w mianowniku zależy od rodzajnika i rodzaju, np. der große Mann — ale to już osobny temat.",
        ],
        mistakeNotes: [
          "Czasownik sehen wymaga dopełnienia w bierniku, a nie w mianowniku — to jedna z pierwszych pomyłek, które popełnia niemal każdy uczący się.",
          "Mianownik rodzaju żeńskiego to zawsze die, nigdy der — der jest zarezerwowane dla rzeczowników rodzaju męskiego.",
        ],
        exceptions: [
          "Grupa rzeczowników rodzaju męskiego znana jako 'rzeczowniki słabe' lub n-rzeczowniki — der Junge, der Name, der Student, der Herr — przybiera końcówkę -n lub -en we wszystkich przypadkach oprócz mianownika liczby pojedynczej.",
          "Kilka rzeczowników ma niestabilny lub dyskutowany rodzaj (np. der/das Joghurt), ale słownik zawsze poda formę standardową.",
        ],
        tips: [
          "Gdy nie masz pewności, jakiego przypadku potrzebujesz, znajdź najpierw czasownik i zapytaj wer oder was tut das? — odpowiedź zawsze będzie w mianowniku.",
          "Ucz się każdego nowego rzeczownika razem z jego rodzajnikiem w mianowniku (der/die/das) — ten jeden nawyk zapobiegnie większości późniejszych błędów z rodzajem.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "Przypadek dopełnienia bliższego oraz stały zestaw przyimków.",
    objectives: [
      "Rozpoznawaj dopełnienie bliższe czasownika przechodniego.",
      "Poprawnie stosuj zmianę der → den / ein → einen.",
      "Rozpoznawaj stałe przyimki wymagające biernika.",
    ],
    explanationSimple: [
      "Biernik oznacza dopełnienie bliższe — osobę lub rzecz, na którą bezpośrednio działa czynność wyrażona czasownikiem.",
      "To także przypadek, który zawsze występuje po niewielkiej, stałej grupie przyimków.",
    ],
    explanationDetailed: [
      "Gdy już potrafisz znaleźć podmiot (mianownik), kolejne pytanie brzmi zwykle: 'na co działa podmiot?' — to właśnie dopełnienie bliższe, które w niemieckim przybiera formę biernika.",
      "Znajdziesz je, pytając wen? (kogo?) w odniesieniu do osób lub was? (co?) w odniesieniu do rzeczy.",
      "W bierniku widocznie zmienia się tylko rodzajnik męski: der staje się den, a ein staje się einen. Rodzajniki żeński, nijaki i liczby mnogiej wyglądają dokładnie tak samo jak w mianowniku — dlatego biernik często wydaje się 'niewidoczny', dopóki w zdaniu nie pojawi się rzeczownik męski.",
      "Stała grupa czasowników niemal zawsze wymaga dopełnienia w bierniku — haben, sehen, brauchen, kaufen, essen, trinken, lieben — a stała grupa przyimków zawsze wymusza biernik: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Widzę tego mężczyznę.", "Ona kupuje jabłko.", "Kochamy naszego psa.", "Ten prezent jest dla ciebie."],
    exerciseTexts: [
      {
        explanation:
          "Hund jest rodzaju męskiego, więc zaimek dzierżawczy przechodzi tę samą, właściwą tylko rodzajowi męskiemu zmianę w bierniku: unser ← unseren.",
        grammarRule: "W bierniku zmienia się tylko rodzajnik/zaimek dzierżawczy rodzaju męskiego.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w bierniku.",
      },
    ],
    quizTexts: [
      {
        explanation: "Czasownik sehen wymaga dopełnienia bliższego w bierniku, a rodzaju męskiego der zmienia się w den.",
        grammarRule: "Zmienia się tylko rodzajnik męski: der → den, ein → einen.",
        prompt: "W którym zdaniu poprawnie użyto biernika?",
      },
      {
        explanation: "Prawda — die pozostaje die zarówno w mianowniku, jak i w bierniku; zmienia się tylko rodzajnik męski.",
        grammarRule: "Rodzajniki żeński, nijaki i liczby mnogiej są identyczne jak w mianowniku.",
        prompt: "Rodzajnik żeński w bierniku jest identyczny z rodzajnikiem żeńskim w mianowniku.",
      },
      {
        explanation: "Apfel jest rodzaju męskiego i jako dopełnienie bliższe po kaufen wymaga rodzajnika biernika einen.",
        grammarRule: "Nieokreślony rodzajnik biernika rodzaju męskiego: einen.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w bierniku.",
      },
      {
        explanation: "Najpierw podmiot (Wir), potem czasownik (lieben), a na końcu dopełnienie w bierniku (unseren Hund).",
        grammarRule: "Dopełnienia bliższego czasownika przechodniego używaj w bierniku.",
        translation: "Kochamy naszego psa.",
        prompt: "Ułóż wyrazy we właściwej kolejności.",
      },
      {
        explanation: "für zawsze wymusza biernik, więc du zmienia się w dich, a er w ihn.",
        grammarRule: "Po durch, für, gegen, ohne, um zawsze używaj biernika.",
        prompt: "Przeciągnij właściwy zaimek do każdej luki.",
      },
      {
        explanation: "Student to rzeczownik słaby (n-), więc otrzymuje zarówno rodzajnik biernika den, jak i końcówkę -en: den Studenten.",
        grammarRule: "Rzeczowniki słabe przybierają -n/-en także w bierniku.",
        prompt: "Ponieważ 'der Student' to rzeczownik słaby, wpisz jego formę w bierniku razem z rodzajnikiem.",
      },
    ],
    conclusion:
      "Biernik oznacza dopełnienie bliższe i występuje po durch, für, gegen, ohne oraz um. Jedyną widoczną zmianą względem mianownika jest rodzajnik męski — der/ein zmieniają się w den/einen — reszta pozostaje bez zmian.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Dopełnienia bliższego czasownika przechodniego używaj w bierniku.",
          "Aby je znaleźć, zapytaj wen? w odniesieniu do osób lub was? w odniesieniu do rzeczy.",
          "Zmienia się tylko rodzajnik męski: der → den, ein → einen.",
          "Rodzajniki żeński, nijaki i liczby mnogiej są identyczne jak w mianowniku.",
          "Po durch, für, gegen, ohne i um zawsze używaj biernika.",
        ],
        notes: [
          "Ponieważ zmieniają się tylko rodzajniki męskie, uczący się często przestają sprawdzać rodzaj rzeczowników żeńskich i nijakich — ale zaimki dzierżawcze i osobowe (mein → meinen, ihr → ihren) podlegają tej samej, właściwej rodzajowi męskiemu zmianie, więc warto zachować czujność.",
          "Wyrażenia czasowe odpowiadające na pytanie 'jak długo?' albo wskazujące konkretny moment ('który dzień?') często używają biernika bez przyimka: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "Czasownik sehen wymaga dopełnienia w bierniku, więc rodzajnik męski der musi zmienić się w den.",
          "für zawsze wymusza biernik, więc zaimek ich zmienia się w mich.",
        ],
        exceptions: [
          "Rzeczowniki słabe (n-), takie jak der Student, der Junge i der Name, przybierają -n także w bierniku: den Studenten, den Jungen, den Namen — nie tylko w celowniku i dopełniaczu.",
          "Kilka czasowników, które z pozoru wymagają przyimka, w rzeczywistości łączy się z samym dopełnieniem w bierniku, np. Ich frage dich (nie 'zu dir').",
        ],
        tips: [
          "Rzeczowniki żeńskie, nijakie i w liczbie mnogiej są identyczne w mianowniku i bierniku — jeśli zdanie wygląda na 'niezmienione', sprawdź jeszcze raz rzeczownik męski.",
          "Zapamiętaj durch, für, gegen, ohne, um jako jedną grupę — zawsze łączą się z biernikiem, bez wyjątków.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "Przypadek dopełnienia dalszego — kto coś otrzymuje lub na czym coś korzysta.",
    objectives: [
      "Rozpoznawaj dopełnienie dalsze w zdaniu.",
      "Stosuj pełną zmianę rodzajnika w celowniku dla każdego rodzaju.",
      "Rozpoznawaj czasowniki i przyimki wymagające wyłącznie celownika.",
    ],
    explanationSimple: [
      "Celownik oznacza dopełnienie dalsze — zwykle osobę, która coś otrzymuje lub na czymś korzysta.",
      "Odpowiada na pytanie wem? (komu? / dla kogo?).",
    ],
    explanationDetailed: [
      "Wiele niemieckich zdań ma zarówno dopełnienie bliższe (biernik), jak i dopełnienie dalsze (celownik): Ich gebe dem Mann das Buch — 'Daję temu mężczyźnie książkę.' dem Mann to odbiorca, więc stoi w celowniku.",
      "Stała grupa czasowników zawsze wymaga dopełnienia w celowniku, mimo że z pozoru powinny łączyć się z biernikiem — helfen, danken, gefallen, gehören, folgen, glauben i antworten to te, z którymi uczący się spotykają się najwcześniej.",
      "Celownik występuje też po stałym zestawie przyimków: aus, bei, mit, nach, seit, von, zu.",
      "Przy dziewięciu przyimkach 'dwustronnych' (in, an, auf, über, unter, vor, hinter, neben, zwischen) celownika używa się dla określenia miejsca — odpowiedź na pytanie wo? (gdzie?) — a biernika dla ruchu w kierunku celu — odpowiedź na pytanie wohin? (dokąd?).",
    ],
    exampleMeanings: [
      "Daję temu mężczyźnie książkę.",
      "Ona pomaga swojej siostrze.",
      "Jedziemy autobusem.",
      "Ten dom należy do sąsiadów.",
    ],
    exerciseTexts: [
      {
        explanation: "Nachbarn jest w liczbie mnogiej, a gehören zawsze łączy się z celownikiem, więc die zmienia się w den.",
        grammarRule: "W celowniku zmienia się każdy rodzajnik; liczba mnoga die zmienia się w den.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w celowniku.",
      },
    ],
    quizTexts: [
      {
        explanation: "Czasownik helfen zawsze łączy się z dopełnieniem w celowniku, a rodzaju żeńskiego die zmienia się w der.",
        grammarRule: "helfen zawsze wymaga celownika, nigdy biernika.",
        prompt: "W którym zdaniu poprawnie użyto celownika?",
      },
      {
        explanation:
          "Prawda — die Kinder zmienia się w den Kindern; bez zmian pozostają jedynie rzeczowniki, które już kończą się na -n lub -s.",
        grammarRule: "Rzeczowniki w liczbie mnogiej przybierają w celowniku końcówkę -n, chyba że już kończą się na -n lub -s.",
        prompt: "Rzeczowniki w liczbie mnogiej w celowniku zwykle przybierają końcówkę -n.",
      },
      {
        explanation: "Bus jest rodzaju męskiego, a mit zawsze wymusza celownik, więc der zmienia się w dem.",
        grammarRule: "Po aus, bei, mit, nach, seit, von, zu zawsze używaj celownika.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w celowniku.",
      },
      {
        explanation: "Gdy oba dopełnienia są rzeczownikami, celownik (dem Mann) zwykle poprzedza biernik (das Buch).",
        grammarRule: "Gdy oba dopełnienia w zdaniu są rzeczownikami, celownik zwykle stoi na pierwszym miejscu.",
        translation: "Daję temu mężczyźnie książkę.",
        prompt: "Ułóż wyrazy we właściwej kolejności.",
      },
      {
        explanation: "Czasownik gehören zawsze łączy się z celownikiem: sie zmienia się w ihr, a er w ihm.",
        grammarRule: "Stała grupa czasowników zawsze wymaga dopełnienia w celowniku — gehören należy do niej.",
        prompt: "Przeciągnij właściwy zaimek do każdej luki.",
      },
      {
        explanation:
          "Liczba mnoga die Kinder zmienia się w celowniku w den Kindern — rodzajnik zmienia się na den, a rzeczownik przybiera końcówkę -n.",
        grammarRule: "W celowniku zmienia się każdy rodzajnik; rzeczowniki w liczbie mnogiej przybierają -n.",
        prompt: "Wpisz formę celownika liczby mnogiej rzeczownika 'die Kinder' razem z rodzajnikiem (np. 'den …').",
      },
    ],
    conclusion:
      "Celownik oznacza dopełnienie dalsze, występuje po aus/bei/mit/nach/seit/von/zu i zmienia każdy rodzajnik — z charakterystyczną końcówką -n dodawaną do rzeczowników w liczbie mnogiej. Kilka czasowników, jak helfen i danken, zawsze wymaga dopełnienia w celowniku.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Celownika używaj dla dopełnienia dalszego — zwykle odbiorcy lub osoby korzystającej.",
          "Aby je znaleźć, zapytaj wem?",
          "Zmienia się każdy rodzajnik: der → dem, die → der, das → dem, die (liczba mnoga) → den.",
          "Rzeczowniki w liczbie mnogiej przybierają w celowniku -n, chyba że już kończą się na -n lub -s: die Kinder → den Kindern.",
          "Po aus, bei, mit, nach, seit, von, zu zawsze używaj celownika.",
          "Przy przyimkach dwustronnych celownik odpowiada na pytanie wo?, a biernik na wohin?",
        ],
        notes: [
          "Czasowniki łączące się z celownikiem nigdy nie przybierają biernika dla osoby, o którą chodzi — helfen, na przykład, to zawsze 'jemandem helfen', nigdy 'jemanden helfen'.",
          "Wskazówka dotycząca szyku wyrazów: gdy oba dopełnienia w zdaniu są rzeczownikami, celownik zwykle stoi pierwszy: Ich gebe dem Mann das Buch. Gdy oba są zaimkami, pierwszy stoi biernik: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "Czasownik helfen zawsze wymaga celownika, nigdy biernika — bez wyjątków.",
          "mit zawsze łączy się z celownikiem, a rzeczownik w liczbie mnogiej potrzebuje końcówki -n: Kinder → Kindern.",
        ],
        exceptions: [
          "Niewielka grupa czasowników i przymiotników łączy się z celownikiem ze względów idiomatycznych — gefallen (podobać się), schmecken (smakować) i stehen (pasować) stawiają osobę w celowniku: Das Kleid steht dir gut.",
          "Rzeczowniki, które w liczbie mnogiej już kończą się na -n lub -s, nie przybierają dodatkowego -n w celowniku: den Autos, den Frauen.",
        ],
        tips: [
          "Celownik liczby mnogiej niemal zawsze kończy się na -n — dostrzeżenie tego -n na rzeczowniku to często najszybszy sposób, by rozpoznać zdanie w celowniku na pierwszy rzut oka.",
          "Naucz się aus, bei, mit, nach, seit, von, zu jako jednej grupy — poza samą listą nie ma tu żadnej logiki do zapamiętania.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "Najczęściej używany niemiecki czas przeszły — jak go tworzyć i kiedy stosować.",
    objectives: [
      "Twórz Perfekt za pomocą haben lub sein oraz imiesłowu czasu przeszłego.",
      "Wybieraj poprawnie między haben a sein.",
      "Rozpoznawaj regularne i nieregularne imiesłowy czasu przeszłego.",
    ],
    explanationSimple: [
      "Perfekt to forma, której niemiecki mówiony zwykle używa do mówienia o przeszłości — nie pojedynczy czasownik, lecz haben lub sein razem z imiesłowem czasu przeszłego.",
      "Buduje się go tak samo niezależnie od osoby mówiącej: czasownik posiłkowy na drugiej pozycji, a imiesłów na samym końcu zdania.",
    ],
    explanationDetailed: [
      "Większość czasowników jako posiłkowego używa haben. Czasowniki ruchu (gehen, fahren, kommen) lub zmiany stanu (aufwachen, werden) zwykle używają sein.",
      "Czasowniki regularne (słabe) tworzą imiesłów według wzoru ge- + temat + -t: machen ← gemacht, spielen ← gespielt. Czasowniki nieregularne (mocne) często zmieniają samogłoskę tematu i kończą się na -en: sprechen ← gesprochen, gehen ← gegangen.",
      "Ponieważ imiesłów trafia na koniec zdania, wszystko inne — dopełnienia, wyrażenia czasowe, przeczenie — znajduje się między czasownikiem posiłkowym a imiesłowem.",
    ],
    exampleMeanings: ["Przeczytałem tę książkę.", "Pojechaliśmy do Berlina.", "Ona wczoraj pracowała.", "On wcześnie się obudził."],
    exerciseTexts: [
      {
        explanation: "fahren opisuje przemieszczenie się z jednego miejsca do drugiego, więc łączy się z sein: Wir sind gefahren.",
        grammarRule: "Przy czasownikach ruchu lub zmiany stanu używaj sein.",
        prompt: "Jakiego czasownika posiłkowego używa 'fahren' w czasie Perfekt?",
      },
    ],
    quizTexts: [
      {
        explanation: "Czasownik lesen łączy się z haben, a jego nieregularny imiesłów to gelesen, umieszczony na końcu zdania.",
        grammarRule: "Przy większości czasowników jako posiłkowego używaj haben.",
        prompt: "W którym zdaniu poprawnie utworzono czas Perfekt?",
      },
      {
        explanation: "Prawda — telefonieren ← telefoniert, bez ge-.",
        grammarRule: "Czasowniki kończące się na -ieren nigdy nie przybierają ge-.",
        prompt: "Czasowniki takie jak telefonieren nigdy nie przybierają przedrostka ge- w czasie Perfekt.",
      },
      {
        explanation: "fahren jest czasownikiem ruchu, więc łączy się z sein: sind gefahren.",
        grammarRule: "Przy czasownikach ruchu lub zmiany stanu używaj sein.",
        prompt: "Uzupełnij zdanie właściwym czasownikiem posiłkowym.",
      },
      {
        explanation: "essen jest nieregularny: gegessen, a nie regularna forma geesst.",
        grammarRule: "Nieregularne imiesłowy często zmieniają samogłoskę tematu i kończą się na -en.",
        prompt: "Wpisz imiesłów czasu przeszłego czasownika 'essen'.",
      },
    ],
    conclusion:
      "Perfekt tworzy się z haben lub sein oraz imiesłowu czasu przeszłego umieszczonego na końcu zdania. Większość czasowników łączy się z haben; czasowniki ruchu lub zmiany stanu łączą się z sein. Imiesłowy regularne kończą się na -t, nieregularne często na -en.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Przy większości czasowników jako posiłkowego używaj haben.",
          "Przy czasownikach ruchu lub zmiany stanu używaj sein.",
          "Imiesłów regularny: ge- + temat + -t.",
          "Imiesłów nieregularny często kończy się na -en i może zmieniać samogłoskę tematu.",
          "Imiesłów zawsze trafia na koniec zdania.",
        ],
        notes: [
          "Kilka popularnych nieregularnych imiesłowów warto po prostu zapamiętać, zamiast je wyprowadzać: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Czasowniki z przedrostkiem rozdzielnym wstawiają -ge- między przedrostek a temat: aufwachen ← aufgewacht, a nie geaufwacht.",
        ],
        mistakeNotes: ["fahren jest czasownikiem ruchu, więc łączy się z sein, a nie z haben."],
        exceptions: [
          "Czasowniki kończące się na -ieren (telefonieren, studieren) nigdy nie przybierają ge-: telefoniert, studiert.",
          "Czasowniki z przedrostkiem nierozdzielnym (be-, ver-, er-, ge-, ent-, zer-) również pomijają ge-: besuchen ← besucht, verstehen ← verstanden.",
        ],
        tips: [
          "Gdy nie jesteś pewien, czy użyć haben czy sein, zapytaj: czy ten czasownik opisuje ruch z punktu A do B albo zmianę stanu? Jeśli tak, niemal na pewno chodzi o sein.",
          "Nowe czasowniki nieregularne ucz się od razu we wszystkich trzech formach — bezokolicznik, czas przeszły prosty, imiesłów — tak samo jak uczysz się der/die/das przy nowym rzeczowniku.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Podstawowe słownictwo do rozmowy o członkach rodziny.",
    explanationSimple: [
      "Ta lekcja obejmuje niemieckie słowa dotyczące najbliższej rodziny — będziesz ich używać bez przerwy, gdy zaczniesz opowiadać o własnym życiu.",
    ],
    explanationDetailed: [
      "Rzeczowniki określające rodzinę podlegają regularnym wzorcom rodzaju, które już znasz: większość rzeczowników osobowych to der albo die, zależnie od płci danej osoby, z kilkoma stałymi wyjątkami, jak das Kind (dziecko) i das Baby (niemowlę), które gramatycznie są rodzaju nijakiego niezależnie od płci dziecka.",
      "Zaimki dzierżawcze (mein, meine) dopasowują się do rodzaju rzeczownika dokładnie tak, jak robi to ein/eine — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["To jest moja matka.", "Mój brat mieszka w Berlinie.", "Mam dwie siostry."],
    exerciseTexts: [
      {
        explanation: "Schwester jest rodzaju żeńskiego: die Schwester.",
        grammarRule: "Rzeczowniki określające członków rodziny przyjmują rodzaj osoby, którą nazywają.",
        prompt: "Wpisz niemieckie słowo oznaczające 'siostra'.",
      },
    ],
    quizTexts: [
      {
        explanation: "der Vater oznacza 'ojciec'.",
        grammarRule: "der Vater jest rodzaju męskiego.",
        prompt: "Które słowo oznacza 'ojciec'?",
      },
      {
        explanation: "Prawda — das Kind jest zawsze rodzaju nijakiego.",
        grammarRule: "Kilka rzeczowników osobowych, jak das Kind i das Baby, ma stały rodzaj nijaki.",
        prompt: "Rodzaj gramatyczny 'das Kind' jest zawsze nijaki, niezależnie od płci dziecka.",
      },
      {
        explanation: "Schwestern to liczba mnoga od Schwester.",
        grammarRule: "Większość rzeczowników żeńskich w liczbie mnogiej przybiera końcówkę -n lub -en.",
        prompt: "Uzupełnij zdanie.",
      },
    ],
    conclusion:
      "Słownictwo rodzinne jest gramatycznie regularne — rzeczowniki osobowe mają rodzaj zgodny z płcią, a das Kind stanowi stały wyjątek rodzaju nijakiego — i od razu daje okazję do ćwiczenia zaimków dzierżawczych.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["matka", "ojciec", "siostra", "brat", "rodzice (liczba mnoga)", "dziecko", "babcia", "dziadek"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Krótki, codzienny tekst o zamawianiu w kawiarni wraz z pytaniami sprawdzającymi rozumienie.",
    explanationSimple: ["Krótka scena w kawiarni — przeczytaj ją raz, by zrozumieć ogólny sens, zanim sprawdzisz poszczególne słowa."],
    explanationDetailed: [
      "Czytanie na poziomie A1 najlepiej sprawdza się w dwóch etapach: najpierw dla ogólnej sytuacji (kto, gdzie, co się dzieje), a potem drugi raz, zwracając uwagę na pojedyncze słowa, których nie zrozumiałeś za pierwszym razem.",
      "Nie musisz rozumieć każdego słowa, by odpowiedzieć na poniższe pytania sprawdzające rozumienie — skup się na tym, co naprawdę zmienia sens sceny.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Anna zamawia kawę (einen Kaffee), a nie herbatę.",
        grammarRule: "bestellen + dopełnienie w bierniku.",
        prompt: "Anna zamawia herbatę.",
      },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — siada przy stoliku przy oknie.",
        grammarRule: "sich setzen an + biernik.",
        prompt: "Gdzie siada Anna?",
      },
      {
        explanation: "Prawda — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "Dwa czasowniki współrzędne połączone spójnikiem und.",
        prompt: "Anna czyta książkę, popijając kawę.",
      },
      {
        explanation: "Minuten (minuty) — Nach zehn Minuten.",
        grammarRule: "nach + wyrażenie czasowe w celowniku.",
        prompt: "Uzupełnij: kelner przynosi zamówienie po dziesięciu ___.",
      },
    ],
    conclusion:
      "Krótka scena w kawiarni zbudowana wyłącznie ze słownictwa poziomu A1 i prostych zdań głównych — dobre ćwiczenie czytania dla ogólnego sensu, zanim zaczniesz martwić się o każde pojedyncze słowo.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Krótki komunikat dworcowy — posłuchaj, na jakim peronie i o której godzinie.",
    explanationSimple: [
      "Krótki komunikat dworcowy — nagranie audio nie jest jeszcze podłączone, więc przeczytaj transkrypcję tak, jakbyś go słyszał.",
    ],
    explanationDetailed: [
      "Komunikaty dworcowe i lotniskowe w niemieckim mają bardzo przewidywalną strukturę — właśnie ta przewidywalność czyni je dobrym pierwszym ćwiczeniem słuchowym: numer pociągu, peron (Gleis) i godzina, niemal zawsze w tej samej kolejności.",
      "Gdy już potrafisz pewnie wychwycić z komunikatu numer peronu i godzinę, możesz zastosować tę samą strategię słuchania do każdego podobnie sformułowanego nagrania (prognoza pogody, instrukcje bezpieczeństwa itd.).",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Gleis 7 — peron 7.",
        grammarRule: "von + numer peronu w celowniku.",
        prompt: "Z którego peronu odjeżdża pociąg?",
      },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — peron 7.",
        grammarRule: "von + celownik.",
        prompt: "Skąd odjeżdża pociąg do Monachium?",
      },
      {
        explanation: "vierzehn Uhr dreißig oznacza 14:30.",
        grammarRule: "Godzina wymawiana w systemie 24-godzinnym: [godzina] Uhr [minuty].",
        prompt: "Zapisz godzinę odjazdu cyframi w systemie 24-godzinnym (np. 09:15).",
      },
    ],
    conclusion:
      "Komunikaty dworcowe mają stały schemat — numer pociągu, peron, godzina — co czyni je świetnym pierwszym ćwiczeniem słuchowym, gdy już znasz wzorzec, którego trzeba słuchać.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Poćwicz przedstawianie się na głos — imię, pochodzenie i kilka dodatkowych informacji.",
    explanationSimple: [
      "Przedstawienie się to jedna z pierwszych rzeczy, które naprawdę powiesz na głos po niemiecku — stała garstka krótkich zdań, których będziesz używać bez przerwy.",
    ],
    explanationDetailed: [
      "Ćwiczenie mówienia sprawdza się tu najlepiej na głos, nie tylko w myślach — powiedz każdą poniższą wskazówkę jako pełne zdanie, zanim przejdziesz do następnej, nawet jeśli nikt cię nie słucha.",
      "Nie ma tu jeszcze nagrywania ani oceniania wypowiedzi; potraktuj to jako samodzielne ćwiczenie mówienia, wykorzystując wskazówki i przykładowe zdania jako scenariusz do dopasowania.",
    ],
    exampleMeanings: ["Mam na imię Anna.", "Jestem z Niemiec.", "Jestem studentką."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … to standardowy sposób mówienia, skąd pochodzisz.",
        grammarRule: "kommen aus + nazwa kraju/miasta w celowniku.",
        prompt: "Wpisz niemiecki odpowiednik 'Jestem z ...'.",
      },
    ],
    quizTexts: [
      {
        explanation: "Czasownik heißen łączy się bezpośrednio z imieniem jako dopełnieniem: Ich heiße Anna.",
        grammarRule: "heißen + imię, bez dodatkowego czasownika.",
        prompt: "Które zdanie poprawnie mówi 'Mam na imię Anna'?",
      },
      {
        explanation: "heißt to forma czasownika heißen dla du.",
        grammarRule: "du heißt (regularna odmiana czasownika na -en).",
        prompt: "Uzupełnij nieformalne pytanie o imię.",
      },
    ],
    conclusion:
      "Przedstawienie się składa się z trzech stałych wzorców zdań — imię, pochodzenie, zawód — które warto intensywnie ćwiczyć na głos od pierwszego dnia, bo będziesz ich używać od samego początku.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Powiedz swoje imię:",
          "Powiedz, skąd pochodzisz:",
          "Powiedz, czym się zajmujesz:",
          "Zapytaj kogoś innego o imię:",
          "Połącz wszystkie trzy własne zdania w jedno krótkie przedstawienie się.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Mieszany quiz powtórzeniowy obejmujący przypadki, codzienne słownictwo i podstawowy szyk zdania.",
    explanationSimple: [
      "Czysty quiz powtórzeniowy — bez nowych wyjaśnień, tylko zestaw pytań z całego materiału omówionego dotąd na poziomie A1.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "Podmiot zdania stoi w mianowniku: Der Mann.",
        grammarRule: "Podmiot zdania zawsze stoi w mianowniku.",
        prompt: "Który rodzajnik jest poprawny? '___ Mann schläft.' (podmiot)",
      },
      {
        explanation: "sehen wymaga dopełnienia w bierniku, a rodzaju męskiego der zmienia się w den.",
        grammarRule: "W bierniku zmienia się tylko rodzajnik męski.",
        prompt: "Uzupełnij właściwym rodzajnikiem w bierniku.",
      },
      { explanation: "die Schwester.", grammarRule: "Powtórka słownictwa rodzinnego.", prompt: "Wpisz niemieckie słowo oznaczające 'siostra'." },
      {
        explanation: "Najpierw podmiot, potem odmieniony czasownik na drugiej pozycji.",
        grammarRule: "Podstawowy szyk niemieckiego zdania: podmiot, czasownik, reszta.",
        translation: "Mam na imię Anna.",
        prompt: "Ułóż wyrazy we właściwej kolejności.",
      },
    ],
    conclusion: "Krótkie, mieszane powtórzenie przypadków, słownictwa i szyku wyrazów — dobry sprawdzian przed przejściem dalej od poziomu A1.",
    details: { kind: "none" },
  },
  "grammar/b2/genitiv": {
    summary: "Przypadek przynależności — coraz bardziej formalny w mowie, ale wciąż niezbędny w czytaniu i pisaniu.",
    objectives: [
      "Rozpoznawaj Genitiv jako przypadek przynależności.",
      "Dodawaj poprawną końcówkę rzeczownika dla rodzaju męskiego i nijakiego.",
      "Używaj Genitiv po trotz, wegen, während i statt.",
    ],
    explanationSimple: [
      "Genitiv wyraża przynależność — do kogo lub do czego coś należy.",
      "Występuje też po niewielkiej, stałej grupie przyimków: trotz, wegen, während, statt.",
    ],
    explanationDetailed: [
      "W przeciwieństwie do pozostałych trzech przypadków, Genitiv zmienia sam rzeczownik, a nie tylko jego rodzajnik — rzeczowniki rodzaju męskiego i nijakiego przybierają końcówkę -s lub -es, natomiast rzeczowniki żeńskie i w liczbie mnogiej pozostają bez zmian.",
      "W codziennej mowie potocznej Genitiv często zastępuje się konstrukcją von + Dativ (von meinem Vater zamiast meines Vaters) — mimo to Genitiv wciąż pozostaje formą oczekiwaną i bardziej formalną w piśmie oraz starannej mowie, a w tekstach pisanych spotkasz go na każdym kroku.",
      "Szyk wyrazów w Genitiv stawia posiadacza po rzeczowniku, który określa — das Auto meines Vaters, a nie meines Vaters Auto — z wyjątkiem imion własnych, które stoją na początku: Annas Auto.",
    ],
    exampleMeanings: [
      "Samochód mojego ojca jest nowy.",
      "Podoba mi się kolor tego domu.",
      "Ta kobieta ma na imię Anna.",
      "Mimo deszczu idziemy na spacer.",
    ],
    exerciseTexts: [
      {
        explanation: "Frau jest rodzaju żeńskiego, więc w Genitiv przybiera rodzajnik der — sam rzeczownik się nie zmienia.",
        grammarRule: "Rodzajnik Genitiv rodzaju żeńskiego: der.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w Genitiv.",
      },
    ],
    quizTexts: [
      {
        explanation: "Vaters przybiera końcówkę Genitiv -s po zaimku dzierżawczym meines, wskazując, czyj to samochód.",
        grammarRule: "Rzeczowniki rodzaju męskiego w Genitiv przybierają końcówkę -s lub -es.",
        prompt: "W którym zdaniu poprawnie użyto Genitiv?",
      },
      {
        explanation:
          "Prawda — tylko rzeczowniki rodzaju męskiego i nijakiego przybierają końcówkę Genitiv; rzeczowniki żeńskie i w liczbie mnogiej pozostają bez zmian.",
        grammarRule: "Końcówki Genitiv rzeczownika: -s/-es tylko dla rodzaju męskiego i nijakiego.",
        prompt: "Rzeczowniki rodzaju męskiego i nijakiego zwykle przybierają w Genitiv końcówkę -s lub -es, natomiast rzeczowniki żeńskie nigdy się nie zmieniają.",
      },
      {
        explanation: "Haus jest rodzaju nijakiego, więc w Genitiv przybiera rodzajnik des, a sam rzeczownik dodatkowo końcówkę -es: Hauses.",
        grammarRule: "Rodzajnik Genitiv rodzaju nijakiego: des, rzeczownik +(e)s.",
        prompt: "Uzupełnij zdanie właściwym rodzajnikiem w Genitiv.",
      },
      {
        explanation: "Trotz to jeden ze stałych przyimków, które zawsze wymagają Genitiv.",
        grammarRule: "Przyimki Genitiv: während, trotz, wegen, statt.",
        prompt: "Wpisz przyimek Genitiv oznaczający 'mimo'.",
      },
    ],
    conclusion:
      "Genitiv wyraża przynależność i występuje po niewielkiej grupie przyimków, takich jak trotz, wegen czy während. Rzeczowniki rodzaju męskiego i nijakiego przybierają końcówkę -s lub -es; rzeczowniki żeńskie i w liczbie mnogiej pozostają bez zmian. W mowie potocznej coraz częściej zastępuje go von + Dativ, ale w czytaniu i formalnym pisaniu wciąż jest niezbędny.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Genitiv wyraża przynależność — do kogo lub do czego coś należy.",
          "Używaj go po stałych przyimkach trotz, wegen, während i statt.",
          "Dodaj -s lub -es do rzeczowników rodzaju męskiego i nijakiego; rzeczowniki żeńskie i w liczbie mnogiej się nie zmieniają.",
        ],
        notes: [
          "W codziennej mowie potocznej konstrukcja von + Dativ często zastępuje Genitiv (von meinem Vater zamiast meines Vaters) — ale w piśmie i formalnej mowie wciąż oczekuje się Genitiv.",
          "Szyk wyrazów w Genitiv stawia posiadacza po rzeczowniku, który określa: das Auto meines Vaters, a nie meines Vaters Auto (z wyjątkiem imion: Annas Auto).",
        ],
        mistakeNotes: [
          "Sam zaimek dzierżawczy wymaga końcówki Genitiv -es, a rzeczownik końcówki -s — obie zmiany zachodzą razem.",
          "Sam rodzajnik des nie wystarczy — rzeczowniki rodzaju nijakiego w Genitiv dodatkowo przybierają końcówkę -es.",
        ],
        exceptions: [
          "Jednosylabowe rzeczowniki rodzaju nijakiego i męskiego zwykle przybierają końcówkę -es (des Hauses, des Mannes); dłuższe rzeczowniki często ograniczają się do samego -s (des Computers, des Lehrers).",
          "Słabe rzeczowniki rodzaju męskiego (n-rzeczowniki), takie jak der Student czy der Junge, w Genitiv również przybierają końcówkę -en, a nie -s: des Studenten, nie des Studentens.",
        ],
        tips: [
          "Jeśli zdanie da się przeformułować za pomocą 'von + Dativ' i wciąż brzmi naturalnie, Genitiv jest tam zwykle opcjonalny — ale i tak warto go rozpoznawać, bo w tekstach pisanych spotkasz go na każdym kroku.",
          "Naucz się trotz, wegen, während i statt jako jednej grupy — to cztery przyimki Genitiv, z którymi będziesz się spotykać najczęściej.",
        ],
      },
    },
  },
  "grammar/a1/praesens": {
    summary: "Niemiecki czas teraźniejszy — regularne końcówki i sposób, w jaki jedna forma obejmuje to, co w angielskim wymaga osobnej konstrukcji 'is doing'.",
    objectives: [
      "Odmieniaj czasowniki regularne w Präsens.",
      "Używaj Präsens zarówno dla teraźniejszości, jak i najbliższej przyszłości.",
      "Rozpoznawaj wstawkę -e- w tematach kończących się na -t lub -d.",
    ],
    explanationSimple: [
      "Präsens to niemiecki czas teraźniejszy — używany do tego, co dzieje się teraz, do ogólnych faktów, a często też do najbliższej przyszłości.",
      "Czasowniki regularne przybierają przewidywalną końcówkę zależną od tego, kto wykonuje czynność.",
    ],
    explanationDetailed: [
      "Aby odmienić czasownik regularny, odetnij końcówkę -en od bezokolicznika, otrzymując temat, a następnie dodaj końcówkę właściwą dla podmiotu: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "Niemiecki nie ma osobnej formy ciągłej — ich spiele oznacza zarówno 'gram', jak i 'właśnie gram' (tak jak angielskie 'I play' i 'I am playing'). To, o który wariant chodzi, wynika z kontekstu.",
      "Präsens służy też powszechnie do mówienia o najbliższej przyszłości, zwłaszcza gdy w zdaniu pojawia się określenie czasu: Ich fliege morgen nach Berlin (Lecę jutro do Berlina).",
    ],
    exampleMeanings: ["Gram w piłkę nożną.", "Uczysz się niemieckiego.", "On dziś pracuje.", "Jedziemy jutro do Berlina."],
    exerciseTexts: [
      {
        explanation: "du przybiera regularną końcówkę -st: spiel + st = spielst.",
        grammarRule: "Końcówka Präsens dla du: -st.",
        prompt: "Wpisz poprawną formę Präsens czasownika 'spielen' dla 'du'.",
      },
    ],
    quizTexts: [
      {
        explanation: "Temat czasownika arbeiten kończy się na -t, więc forma dla er wymaga wstawki: arbeitet, a nie arbeit.",
        grammarRule: "Wstaw -e- przed końcówką, gdy temat kończy się na -t lub -d.",
        prompt: "W którym zdaniu poprawnie użyto Präsens?",
      },
      {
        explanation:
          "Prawda — niemiecki często używa Präsens zamiast osobnego czasu przyszłego, gdy kontekst albo określenie czasu i tak jasno wskazują na przyszłość.",
        grammarRule: "Używaj Präsens do najbliższej przyszłości z wyrażeniem czasu.",
        prompt: "Präsens może służyć do mówienia o najbliższej przyszłości, zwłaszcza z określeniem czasu takim jak morgen.",
      },
      {
        explanation: "wir przybiera końcówkę -en, która dla czasownika regularnego jest identyczna z bezokolicznikiem: wohnen.",
        grammarRule: "Końcówka Präsens dla wir: -en (taka sama jak bezokolicznik).",
        prompt: "Wpisz poprawną formę Präsens czasownika 'wohnen' dla 'wir'.",
      },
      {
        explanation: "ich przybiera końcówkę -e: kauf + e = kaufe.",
        grammarRule: "Końcówka Präsens dla ich: -e.",
        prompt: "Uzupełnij zdanie poprawną formą Präsens czasownika 'kaufen'.",
      },
    ],
    conclusion:
      "Präsens opiera się na sześciu przewidywalnych końcówkach — -e, -st, -t, -en, -t, -en — dodawanych do tematu czasownika, z wstawką -e- dla tematów kończących się na -t lub -d. Obejmuje zarówno teraźniejszość, jak i najbliższą przyszłość, więc opanowanie tych końcówek daje solidną podstawę jeszcze zanim dojdziesz do czasów przeszłych.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Odetnij -en od bezokolicznika, aby znaleźć temat czasownika.",
          "Dodaj końcówkę odpowiadającą podmiotowi: -e, -st, -t, -en, -t, -en.",
          "Wstaw -e- przed końcówką, jeśli temat kończy się na -t lub -d (arbeiten → du arbeitest).",
        ],
        notes: [
          "To właśnie końcówki dla du i er/sie/es najczęściej wymagają wstawki -e-, ponieważ -st i -t trudno wymówić bezpośrednio po temacie kończącym się na -t/-d.",
          "Garstka bardzo popularnych czasowników jest nieregularna wyłącznie w formach du/er (fahren → du fährst, er fährt) — to już nie jest część regularnego wzorca omawianego w tej lekcji.",
        ],
        mistakeNotes: [
          "Tematy kończące się na -t potrzebują wstawki -e- przed końcówką -st, inaczej wyraz stałby się niewymawialny.",
          "Każdy podmiot ma swoją własną, dopasowaną końcówkę — ich zawsze przybiera -e, nigdy formy -t właściwej dla er.",
        ],
        exceptions: [
          "Czasowniki mocne ze zmianą tematu, takie jak fahren, sehen i sprechen, zmieniają samogłoskę tematu wyłącznie w formach du i er/sie/es (du fährst, er fährt) — to osobny wzorzec, różny od regularnych końcówek omawianych tutaj.",
          "Sein i haben są całkowicie nieregularne i trzeba nauczyć się ich form na pamięć: ich bin, du bist, er ist…",
        ],
        tips: [
          "Naucz się sześciu końcówek jako jednego stałego zestawu — gdy staną się automatyczne, każdy czasownik regularny odmienia się w ten sam sposób.",
          "Gdy temat nowego czasownika kończy się na -t, -d albo zbitkę spółgłosek jak -ffn (öffnen), spodziewaj się wstawki -e- przed -st i -t.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "Czas przeszły prosty używany w piśmie oraz przy popularnych czasownikach jak sein i haben — czym różni się od Perfekt.",
    objectives: [
      "Odmieniaj czasowniki regularne (słabe) w Präteritum.",
      "Rozpoznawaj, kiedy Präteritum jest preferowany zamiast Perfekt.",
      "Poprawnie stosuj sein i haben w ich typowych formach Präteritum.",
    ],
    explanationSimple: [
      "Präteritum to drugi niemiecki czas przeszły — używany głównie w piśmie, a w mowie przy sein, haben i czasownikach modalnych.",
      "Czasowniki regularne dodają do tematu -te oraz końcówkę osobową.",
    ],
    explanationDetailed: [
      "O ile Perfekt dominuje w mówionym niemieckim przy większości czasowników, Präteritum jest standardowym czasem przeszłym w piśmie — opowiadania, artykuły prasowe i teksty formalne niemal zawsze go używają.",
      "Czasowniki regularne (słabe) tworzą Präteritum, dodając do tematu -te, a potem końcówkę osobową: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Nawet w mowie garstka bardzo popularnych czasowników niemal zawsze występuje w Präteritum zamiast w Perfekt: war (był), hatte (miał) oraz czasowniki modalne, jak konnte (mógł) czy wollte (chciał).",
    ],
    exampleMeanings: ["Odrobiłem lekcje.", "Wczoraj grała na pianinie.", "Był zmęczony.", "Nie mieliśmy czasu."],
    exerciseTexts: [
      {
        explanation: "sie (oni) przybiera końcówkę -ten, tak samo jak wir: spiel + ten = spielten.",
        grammarRule: "Końcówka Präteritum dla sie (liczba mnoga): -ten.",
        prompt: "Wpisz poprawną formę Präteritum czasownika 'spielen' dla 'sie' (oni).",
      },
    ],
    quizTexts: [
      {
        explanation: "Temat czasownika arbeiten kończy się na -t, więc potrzebna jest wstawka przed -te: arbeitete.",
        grammarRule: "Wstaw -e- przed -te, gdy temat kończy się na -t lub -d.",
        prompt: "W którym zdaniu poprawnie użyto Präteritum?",
      },
      {
        explanation:
          "Prawda — zarówno ich, jak i er/sie/es po prostu dodają -te, inaczej niż w Präsens, gdzie te formy się różnią (-e wobec -t).",
        grammarRule: "Końcówki Präteritum dla ich i er są identyczne: -te.",
        prompt: "W Präteritum forma dla ich i forma dla er/sie/es mają dokładnie taką samą końcówkę.",
      },
      {
        explanation: "Haben jest w Präteritum nieregularny — forma dla wir to hatten, a nie regularne habten.",
        grammarRule: "Temat Präteritum czasownika haben jest nieregularny: hatt-.",
        prompt: "Wpisz formę Präteritum czasownika 'haben' dla 'wir'.",
      },
      {
        explanation: "ich przybiera końcówkę -te: mach + te = machte.",
        grammarRule: "Końcówka Präteritum dla ich: -te.",
        prompt: "Uzupełnij zdanie poprawną formą Präteritum czasownika 'machen'.",
      },
    ],
    conclusion:
      "Präteritum dodaje do tematu czasownika regularnego -te oraz końcówkę osobową, przy czym formy ich i er/sie/es są identyczne. To domyślny czas przeszły w piśmie, a dla sein, haben i czasowników modalnych — także naturalny wybór w mowie, mimo że w codziennej rozmowie ogólnie dominuje Perfekt.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Dodaj -te do tematu czasownika regularnego, a potem końcówkę osobową: -te, -test, -te, -ten, -tet, -ten.",
          "Wstaw -e- przed -te, jeśli temat kończy się na -t lub -d (arbeiten → er arbeitete).",
          "Przy sein, haben i czasownikach modalnych wybieraj Präteritum nawet w mowie.",
        ],
        notes: [
          "W przeciwieństwie do Präsens, formy ich oraz er/sie/es są w Präteritum identyczne — obie po prostu przybierają -te.",
          "Präteritum od sein (war) i haben (hatte) to jedne z pierwszych nieregularnych form przeszłych, które uczący się zapamiętują, bo używa się ich bez przerwy.",
        ],
        mistakeNotes: [
          "Tematy kończące się na -t potrzebują wstawki -e- przed -te — dokładnie tak samo jak w Präsens.",
          "Haben jest w Präteritum nieregularny — hatte, a nie regularne habte.",
        ],
        exceptions: [
          "Czasowniki mocne (nieregularne) zmieniają całą samogłoskę tematu zamiast dodawać -te: gehen → ging, sehen → sah — to inny wzorzec niż regularne końcówki omawiane tutaj.",
          "Präteritum od sein (war) i haben (hatte) w ogóle nie podlega regularnemu wzorcowi z -te i po prostu trzeba się ich nauczyć na pamięć.",
        ],
        tips: [
          "Jeśli opowiadasz historię albo piszesz coś formalnego, domyślnie sięgaj po Präteritum — to naturalny czas przeszły narracji w niemieckim.",
          "W codziennej rozmowie przy większości czasowników możesz spokojnie używać Perfekt — z wyjątkiem war, hatte i czasowników modalnych, które nawet w mowie niemal zawsze brzmią bardziej naturalnie w Präteritum.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "Mówienie o przyszłości za pomocą werden + bezokolicznik — i o tym, kiedy Niemcy po prostu używają czasu teraźniejszego.",
    objectives: [
      "Twórz Futur I za pomocą werden + bezokolicznik.",
      "Rozpoznawaj, kiedy Niemcy używają Futur I, a kiedy Präsens dla wyrażenia przyszłości.",
      "Odmieniaj werden poprawnie we wszystkich osobach.",
    ],
    explanationSimple: [
      "Futur I mówi o przyszłości za pomocą odmienionej formy werden oraz bezokolicznika czasownika głównego.",
      "W codziennym niemieckim do przyszłości częściej używa się właśnie Präsens — Futur I zarezerwowany jest raczej dla przewidywań, obietnic i podkreślenia czegoś.",
    ],
    explanationDetailed: [
      "Struktura jest stała: podmiot + odmienione werden (druga pozycja) + reszta zdania + bezokolicznik (na końcu). Ich werde morgen arbeiten — 'Jutro będę pracować.'",
      "Werden jest nieregularny: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — tych sześć form trzeba po prostu zapamiętać, a nie wyprowadzić z reguły.",
      "Niemcy często wolą Präsens z określeniem czasu przy planowanych wydarzeniach (Ich fliege morgen), a Futur I zachowują na przewidywania, obietnice lub przypuszczenia dotyczące przyszłości: Es wird morgen regnen (Jutro będzie padać).",
    ],
    exampleMeanings: ["Jutro będę pracować.", "Wkrótce będzie padać.", "Rozwiążemy ten problem.", "Ona do ciebie zadzwoni."],
    exerciseTexts: [
      {
        explanation: "ich przybiera nieregularną formę werde.",
        grammarRule: "Forma werden dla ich: werde.",
        prompt: "Uzupełnij zdanie właściwą formą werden.",
      },
    ],
    quizTexts: [
      {
        explanation: "Bezokolicznik arbeiten stoi na samym końcu, po morgen.",
        grammarRule: "Bezokolicznik zawsze stawiaj na samym końcu zdania.",
        prompt: "W którym zdaniu poprawnie utworzono Futur I?",
      },
      {
        explanation: "Prawda — cała struktura to właśnie werden (odmienione) plus bezokolicznik na końcu.",
        grammarRule: "Futur I = werden (odmienione) + bezokolicznik.",
        prompt: "Futur I tworzy się z odmienionej formy werden i bezokolicznika czasownika głównego.",
      },
      {
        explanation: "Nieregularna forma werden dla du to wirst.",
        grammarRule: "Forma werden dla du: wirst.",
        prompt: "Wpisz właściwą formę werden dla 'du'.",
      },
      {
        explanation: "Nieregularna forma werden dla er to wird.",
        grammarRule: "Forma werden dla er: wird.",
        prompt: "Wpisz właściwą formę werden dla 'er'.",
      },
      {
        explanation: "es (ono) przybiera taką samą formę jak er: wird.",
        grammarRule: "Forma werden dla es: wird.",
        prompt: "Uzupełnij zdanie właściwą formą werden.",
      },
      {
        explanation: "Lösen zostaje w formie bezokolicznika na samym końcu zdania.",
        grammarRule: "Bezokolicznik w Futur I zawsze pozostaje w formie nieodmienionej.",
        prompt: "W którym zdaniu poprawnie użyto Futur I?",
      },
      {
        explanation:
          "Prawda — Ich fliege morgen brzmi bardziej naturalnie niż Ich werde morgen fliegen, mimo że obie formy są poprawne gramatycznie.",
        grammarRule: "Futur I stosuj głównie do przewidywań, obietnic i przypuszczeń.",
        prompt: "Niemcy zwykle wolą Präsens zamiast Futur I, gdy określenie czasu już jasno wskazuje na przyszłość.",
      },
      {
        explanation: "wir przybiera formę werden — taką samą jak sam bezokolicznik.",
        grammarRule: "Forma werden dla wir: werden.",
        prompt: "Wpisz właściwą formę werden dla 'wir'.",
      },
      {
        explanation: "sie (ona) przybiera taką samą formę jak er: wird.",
        grammarRule: "Forma werden dla sie (liczba pojedyncza): wird.",
        prompt: "Uzupełnij zdanie właściwą formą werden.",
      },
      {
        explanation:
          "Samo wird, bez następującego po nim bezokolicznika, oznacza 'staje się' — Er wird Arzt opisuje zmianę stanu, a nie przewidywanie dotyczące przyszłości.",
        grammarRule: "Werden bez bezokolicznika oznacza 'stawać się', a nie sygnalizuje czasu przyszłego.",
        prompt: "W którym zdaniu werden oznacza 'stawać się', a nie tworzy czasu przyszłego?",
      },
    ],
    conclusion:
      "Futur I łączy odmienioną formę werden z bezokolicznikiem na końcu zdania. W codziennej mowie jest rzadziej używany, niż mogłoby się wydawać — Niemcy przy planowanych wydarzeniach częściej wolą Präsens — ale to naturalny wybór dla przewidywań, obietnic i przypuszczeń dotyczących tego, co ma nadejść.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Buduj Futur I z odmienionej formy werden oraz bezokolicznika czasownika głównego.",
          "Bezokolicznik stawiaj na samym końcu zdania.",
          "Używaj Futur I do przewidywań, obietnic i przypuszczeń dotyczących przyszłości — nie do rutynowych planów.",
        ],
        notes: [
          "Przy codziennych planach z jasnym określeniem czasu zwykle bardziej naturalny jest Präsens: Ich fliege morgen brzmi bardziej idiomatycznie niż Ich werde morgen fliegen, choć obie formy są poprawne.",
          "Samo werden (bez następującego bezokolicznika) oznacza 'stawać się' — Er wird Arzt (On zostaje lekarzem) — więc to kontekst podpowiada, o które znaczenie chodzi.",
        ],
        mistakeNotes: [
          "Bezokolicznik musi stać na samym końcu zdania, po wszystkich innych informacjach, takich jak morgen.",
          "Futur I używa bezokolicznika bez zu.",
        ],
        exceptions: [
          "Werden to jeden z niewielu naprawdę nieregularnych niemieckich czasowników — jego formy Präsens (wirst, wird) nie podlegają żadnej regularnej regule i trzeba się ich po prostu nauczyć na pamięć.",
          "Gdy znaczenie przyszłości jest już oczywiste z kontekstu albo z określenia czasu, Futur I często w ogóle się pomija na rzecz prostszego Präsens.",
        ],
        tips: [
          "Naucz się sześciu form werden jako osobnego, małego zestawu — pojawiają się bez przerwy, zarówno jako 'stawać się', jak i wewnątrz Futur I.",
          "Jeśli o przyszłości sygnalizuje tylko określenie czasu, wybieraj domyślnie Präsens — Futur I zachowaj na prawdziwe przewidywania lub obietnice.",
        ],
      },
    },
  },
};
